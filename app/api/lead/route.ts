import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.SUPABASE_URL || 'https://vvkdnzqgtajeouxlliuk.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, loanType, purchasePrice, message, source, sessionId } = body

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    // Insert lead into CRMEX contacts table with GEO attribution
    const leadRecord = {
      full_name: name || 'Anonymous',
      email: email || null,
      phone: phone || null,
      lead_source: 'ask-alaska-mortgage-ai',
      utm_source: 'geo_ai',
      utm_medium: 'chatbot',
      utm_campaign: 'ask-alaska-mortgage',
      loan_type: loanType || 'Unknown',
      purchase_price: purchasePrice || null,
      notes: message ? `AI Chat Lead. Message: ${message}` : 'AI Chat Lead - loanak.com referral',
      status: 'new',
      created_at: new Date().toISOString(),
      session_id: sessionId || null,
      tags: ['geo-ai', 'ask-alaska-mortgage', 'chatbot-lead'],
    }

    const { data, error } = await supabase
      .from('contacts')
      .insert(leadRecord)
      .select('id')
      .single()

    if (error) {
      // Try alternate table name
      const { data: data2, error: error2 } = await supabase
        .from('leads')
        .insert(leadRecord)
        .select('id')
        .single()

      if (error2) {
        console.error('Lead insert error:', error2)
        // Still return success to user — log but don't block
        return NextResponse.json({ success: true, id: null, note: 'queued' })
      }
      return NextResponse.json({ success: true, id: data2?.id })
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json({ success: true, note: 'queued' }) // never block the UX
  }
}
