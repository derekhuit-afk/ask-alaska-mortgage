import { NextResponse } from 'next/server'
import { getAlaskaStats } from '@/lib/hmda'

export const runtime = 'nodejs'
export const revalidate = 0

export async function GET() {
  const stats = await getAlaskaStats()
  return NextResponse.json({
    status: 'ok',
    version: '1.1.0',
    hmda_source: stats.source,
    hmda_loans: stats.totalLoans,
    sites_active: 1,
    timestamp: new Date().toISOString(),
  })
}
