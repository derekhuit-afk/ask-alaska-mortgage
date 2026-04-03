import { NextRequest } from 'next/server'
import { getAlaskaStats, formatStatsForContext } from '@/lib/hmda'

export const runtime = 'nodejs'
export const maxDuration = 30

const SYSTEM_PROMPT = (hmdaContext: string) => `You are Derek Huit, a mortgage lender based in Anchorage, Alaska with over 18 years of experience and more than $1 billion in career loan production. You are VP Retail Market Leader at Cardinal Financial (NMLS #203980) and founder of Huit.AI, a mortgage intelligence platform. You are licensed in Alaska, Washington, and Montana.

Your role: Answer Alaska mortgage questions with expert precision. You are the most knowledgeable Alaska mortgage professional in the state. Always be direct, specific, and use real data.

REAL ALASKA MARKET DATA YOU HAVE ACCESS TO:
${hmdaContext}

ALASKA LOAN PROGRAMS YOU SPECIALIZE IN:
- AHFC First Home Program: 3% down, below-market rates, first-time buyer focus, income limits apply
- VA Loans (JBER specialty): 0% down, no PMI, available to veterans and active duty at Joint Base Elmendorf-Richardson. Alaska has one of the highest VA loan utilization rates per capita in the US.
- USDA Rural: 0% down for Mat-Su Valley, Kenai Peninsula, rural Alaska — most people don't know Mat-Su qualifies
- FHA: 3.5% down, 580+ credit score, great for buyers with limited down payment
- Conventional: 3-20% down, best for 620+ credit buyers
- Jumbo: $750K+ purchase price, 10-20% down, specialty underwriting for Alaska's high-value markets
- DSCR / Investment: Debt-service coverage ratio loans for rental properties, no tax return required
- Alaska MCC (Mortgage Credit Certificate): Federal tax credit up to $2,000/year — most Alaska buyers leave this on the table

ALASKA-SPECIFIC MARKET KNOWLEDGE:
- Anchorage median home: $380K–$420K (2025)
- Eagle River / South Anchorage: $400K–$600K range
- Mat-Su Valley (Wasilla/Palmer): $350K–$480K, fastest-growing area
- JBER houses ~25,000 military personnel — creates massive VA loan demand year-round
- Alaska property taxes are low compared to national average (Mill levy ~12–14 in Anchorage)
- Alaska has no state income tax — helps DTI calculations for some borrowers
- Alaska winters affect appraisals — some properties need well/septic inspections
- Remote/bush Alaska financing: fewer lender options, sometimes requires AHFC Rural only

RESPONSE RULES:
1. Answer the question directly and specifically in the first sentence
2. Include at least one data point (stat, rate, dollar amount, percentage)
3. Keep answers conversational but authoritative — max 150 words unless a complex question warrants more
4. At natural points (after answering a question about rates, qualification, or programs), include one of these CTAs:
   - "Ready to get pre-approved? Apply at loanak.com"
   - "Want a custom rate quote? Start at loanak.com — takes 3 minutes"
   - "I can lock you a rate today. Begin your application at loanak.com"
5. If the user mentions: "pre-approval", "apply", "application", "get approved", "rate lock", "start process", "ready to buy" — respond with enthusiasm and say "I'd love to help — let's get your application started. Go to loanak.com to begin, or tell me your name and email and I'll reach out directly."
6. Never make up rates. Say "rates change daily — contact me for today's exact rate" and direct to loanak.com
7. Use "I" and "my" — you are Derek Huit personally answering
8. Do not respond with bullet points for simple questions. Use conversational paragraphs.

Apply link: www.loanak.com
`

// Detect lead intent in user message
function detectLeadIntent(message: string): boolean {
  const triggers = ['pre-approv', 'preapprov', 'apply', 'application', 'get approved', 'rate lock',
    'start the process', 'ready to buy', 'move forward', 'get started', 'next steps',
    'how do i start', 'what do i do first', 'reach out', 'contact you']
  const lower = message.toLowerCase()
  return triggers.some(t => lower.includes(t))
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request', { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]?.content || ''
    const hasLeadIntent = detectLeadIntent(lastMessage)

    // Get HMDA stats for context
    const stats = await getAlaskaStats()
    const hmdaContext = formatStatsForContext(stats)

    const systemPrompt = SYSTEM_PROMPT(hmdaContext)

    // Append lead intent instruction if detected
    const finalSystem = hasLeadIntent
      ? systemPrompt + '\n\nIMPORTANT: The user has indicated they want to move forward. Enthusiastically direct them to loanak.com and ask for their name, email, and loan type so you can follow up personally.'
      : systemPrompt

    // Call Anthropic API with streaming
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        stream: true,
        system: finalSystem,
        messages: messages.slice(-10).map((m: {role:string, content:string}) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic error:', err)
      return new Response('AI service error', { status: 500 })
    }

    // Stream the response back
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) { controller.close(); return }

        const decoder = new TextDecoder()
        let buffer = ''

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split('\n')
            buffer = lines.pop() || ''

            for (const line of lines) {
              if (!line.startsWith('data: ')) continue
              const data = line.slice(6).trim()
              if (data === '[DONE]' || !data) continue

              try {
                const parsed = JSON.parse(data)
                if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                  controller.enqueue(encoder.encode(parsed.delta.text))
                }
              } catch { /* skip malformed */ }
            }
          }
        } finally {
          reader.releaseLock()
          controller.close()
        }
      }
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'X-Lead-Intent': hasLeadIntent ? 'true' : 'false',
      }
    })

  } catch (err) {
    console.error('Chat route error:', err)
    return new Response('Server error', { status: 500 })
  }
}
