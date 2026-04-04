import { NextRequest, NextResponse } from 'next/server'
import { getMarketData, PropertyType } from '@/lib/market'

export const runtime = 'nodejs'
export const revalidate = 3600

export async function GET(req: NextRequest) {
  const type = (req.nextUrl.searchParams.get('type') || 'all') as PropertyType
  const valid: PropertyType[] = ['all', 'sfr', 'condo', 'multifamily']
  if (!valid.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }
  const data = await getMarketData(type)
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      'X-Data-Source': data.source,
      'X-Latest-Date': data.latestDate,
    }
  })
}
