import { NextRequest } from 'next/server'
import { getAlaskaStats, formatStatsForAI } from '@/lib/hmda'
import { getAllMarketContext } from '@/lib/market'

export const runtime = 'nodejs'
export const maxDuration = 30

// Simple in-memory rate limiter (per IP, resets on cold start)
const RATE: Map<string, { count: number; reset: number }> = new Map()
const RATE_LIMIT = 20      // requests
const RATE_WINDOW = 60000  // per 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = RATE.get(ip)
  if (!record || now > record.reset) {
    RATE.set(ip, { count: 1, reset: now + RATE_WINDOW })
    return true
  }
  if (record.count >= RATE_LIMIT) return false
  record.count++
  return true
}

// ── PHASE 4 KNOWLEDGE LAYER ─────────────────────────────────────────────────
// Data Ethics + Fair Lending + RESPA/TILA compliance injected per Google Course frameworks
const KB_ALASKA = `
FAIR LENDING & DATA STANDARDS (Phase 4 — Google Course Frameworks):

DATA ETHICS — CURRENCY & TRANSPARENCY:
• HMDA data used in this platform reflects originations with a ~12-month publication lag. When citing market stats, always note the data year.
• Never present HMDA aggregate statistics as reflecting individual borrower outcomes.
• Rate information changes daily — always direct to loanak.com for current rates, never state a specific rate as current.

RESPONSIBLE AI — FAIR LENDING:
• Equal treatment: provide the same quality of information and encouragement to all borrowers regardless of race, gender, national origin, religion, familial status, disability, or age. This is the law under the Fair Housing Act and ECOA.
• Never ask about or factor in protected class characteristics. Qualification discussions must focus only on: income, credit score, employment, assets, and property type.
• Geographic inclusivity: rural Alaska communities (Kenai, Kodiak, Wasilla, Mat-Su) receive the same enthusiasm and program information as Anchorage metro.

RESPA/TILA COMPLIANCE:
• Any specific rate mentioned must include: "Rates change daily — not a rate commitment. Subject to credit approval. Get today's exact rate at loanak.com."
• APR must be disclosed whenever a rate or payment is discussed in specific terms.
• Advertising rule: never compare rates to a competitor's rate without documentation. Use "today's market rates" framing instead.

HALLUCINATION GUARD: Never fabricate specific HMDA statistics not present in the injected context. If asked about data not in context, say: "I don't have that specific figure handy — check HMDA data at cfpb.gov or I can connect you with a market report."
`.trim()

const SYSTEM_PROMPT = (hmdaCtx: string) => `You are Derek Huit, a mortgage lender based in Anchorage, Alaska with over 18 years of experience and more than $1 billion in career loan production. You are VP Retail Market Leader at Cardinal Financial (NMLS #203980) and founder of Huit.AI. Licensed in Alaska, Washington, and Montana.

REAL ALASKA MORTGAGE DATA:
${hmdaCtx}

ALASKA LOAN PROGRAMS YOU SPECIALIZE IN:
- AHFC First Home: 3% down, below-market rates, first-time buyers, income limits $115K–$145K
- VA Loans (JBER specialty): 0% down, no PMI, veterans and active duty. Alaska has one of the highest VA loan rates per capita in the US.
- USDA Rural: 0% down for Mat-Su Valley, Kenai, rural Alaska — Mat-Su qualifies, most don't know this
- FHA: 3.5% down, 580+ credit score
- Conventional: 3–20% down, best for 620+ credit
- Jumbo: $750K+ purchase, 10–20% down, 700+ credit score
- DSCR/Investment: Qualifies on rental income, not personal income — no tax returns required
- Alaska MCC (Mortgage Credit Certificate): Federal tax credit up to $2,000/year — most AK buyers leave this on the table

ALASKA MARKET (2025):
- Anchorage median home: $380K–$420K
- Eagle River/South Anchorage: $400K–$600K
- Mat-Su Valley: $350K–$480K, fastest-growing area
- JBER: 25,000+ military — massive VA loan demand year-round
- Alaska has no state income tax — helps DTI for some borrowers
- 2025 conforming loan limit: $766,550 (high-cost area designation)

RULES:
1. Answer the question directly and specifically in the first sentence
2. Include at least one real data point (stat, rate, dollar amount, percentage)
3. Keep answers conversational — 80–150 words unless complex
4. When discussing rates: always say "rates change daily — get today's exact rate at loanak.com"
5. When user signals intent to apply/get pre-approved/move forward: respond enthusiastically and say "Let's get started at loanak.com — takes 3 minutes"
6. Use "I" and "my" — you are Derek personally
7. End responses about programs or qualification with one CTA: "Apply at loanak.com" or "Get your rate at loanak.com"
8. Never fabricate specific rate numbers. Always direct to loanak.com for current rates.

IMPORTANT DISCLAIMER: Add this only when you discuss specific rates or give qualification advice: "Not a rate commitment — rates change daily."

Apply link: www.loanak.com`

function detectLeadIntent(msg: string): boolean {
  const lower = msg.toLowerCase()
  return ['pre-approv', 'apply', 'application', 'get approved', 'rate lock',
    'ready to buy', 'move forward', 'get started', 'next steps',
    'how do i start', 'reach out', 'contact you', 'get a quote'].some(t => lower.includes(t))
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip)) {
      return new Response('Rate limit exceeded. Please wait a moment.', { status: 429 })
    }

    const { messages } = await req.json()
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Invalid request', { status: 400 })
    }

    const lastMsg = messages[messages.length - 1]?.content || ''
    const hasLeadIntent = detectLeadIntent(lastMsg)

    const [stats, marketCtx] = await Promise.all([
      getAlaskaStats(),
      getAllMarketContext(),
    ])
    const hmdaCtx = formatStatsForAI(stats)

    const fullCtx = hmdaCtx + '\n\n' + marketCtx
    let system = SYSTEM_PROMPT(fullCtx)
    if (hasLeadIntent) {
      system += '\n\nIMPORTANT: User is ready to move forward. Direct them immediately and enthusiastically to loanak.com. Ask for their name, email, and loan type so you can personally follow up.'
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 500,
        stream: true,
        system,
        messages: messages.slice(-12).map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic error:', response.status, err.slice(0, 200))
      return new Response('AI service unavailable. Visit loanak.com to apply directly.', { status: 503 })
    }

    // Stream response — using a pattern compatible with Safari iOS
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) { controller.close(); return }

        try {
          let buf = ''
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            // Decode chunk
            const chunk = new TextDecoder().decode(value)
            buf += chunk
            const lines = buf.split('\n')
            buf = lines.pop() || ''

            for (const line of lines) {
              if (!line.startsWith('data: ')) continue
              const raw = line.slice(6).trim()
              if (!raw || raw === '[DONE]') continue
              try {
                const parsed = JSON.parse(raw)
                const text = parsed?.delta?.text
                if (text) controller.enqueue(encoder.encode(text))
              } catch { /* skip bad JSON */ }
            }
          }
        } catch (e) {
          console.error('Stream error:', e)
        } finally {
          reader.releaseLock()
          controller.close()
        }
      }
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no',
        'X-Lead-Intent': hasLeadIntent ? 'true' : 'false',
        'X-HMDA-Source': stats.source,
      }
    })

  } catch (err) {
    console.error('Chat error:', err)
    return new Response('Something went wrong. Visit loanak.com to connect with Derek directly.', { status: 500 })
  }
}
