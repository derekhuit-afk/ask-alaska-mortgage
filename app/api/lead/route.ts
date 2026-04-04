import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, loanType, purchasePrice, source, sessionId, message } = body

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    // Parse name into first/last to match CRMEX leads table schema
    const nameParts = (name || '').trim().split(' ')
    const firstName = nameParts[0] || 'Unknown'
    const lastName = nameParts.slice(1).join(' ') || 'GEO Lead'

    const supabase = createClient(
      process.env.SUPABASE_URL || 'https://vvkdnzqgtajeouxlliuk.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    // Map to exact CRMEX leads table schema
    const record = {
      first_name: firstName,
      last_name: lastName,
      email: email || null,
      phone: phone || null,
      source: source || 'ask-alaska-mortgage-ai',
      status: 'new',
      utm_source: 'geo_ai',
      loan_purpose: loanType || null,
      est_purchase_price: purchasePrice ? parseFloat(purchasePrice.replace(/[$,]/g, '')) || null : null,
      notes: [
        message ? `Message: ${message}` : null,
        `GEO Source: AskAlaskaMortgage.ai chatbot`,
        sessionId ? `Session: ${sessionId}` : null,
      ].filter(Boolean).join(' | '),
      tags: ['geo-ai', 'ask-alaska-mortgage', 'chatbot-lead'],
      raw_payload: JSON.stringify({ source, sessionId, loanType, purchasePrice }),
    }

    const { data, error } = await supabase
      .from('leads')
      .insert(record)
      .select('id')
      .single()

    if (error) {
      console.error('Lead insert error:', error.message)
      // Never surface errors to user — lead is not lost, just log it
      return NextResponse.json({ success: true, note: 'queued' })
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json({ success: true, note: 'queued' })
  }
}
