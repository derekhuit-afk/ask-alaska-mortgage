import { createClient } from '@supabase/supabase-js'

export interface MarketRow {
  period_end: string
  property_type: string
  median_sale_price: number | null
  median_list_price: number | null
  median_ppsf: number | null
  median_dom: number | null
  homes_sold: number | null
  pending_sales: number | null
  new_listings: number | null
  inventory: number | null
  months_of_supply: number | null
  avg_sale_to_list: number | null
  sold_above_list: number | null
  price_yoy: number | null
  inventory_yoy: number | null
  dom_yoy: number | null
}

export interface MarketSummary {
  latestDate: string
  latestMonth: string
  medianPrice: number
  medianPriceFormatted: string
  priceYoY: number
  priceYoYFormatted: string
  homesSold: number
  monthsOfSupply: number
  medianDom: number
  medianPpsf: number
  avgSaleToList: number
  soldAboveList: number
  inventory: number
  newListings: number
  marketTrend: 'rising' | 'falling' | 'stable'
  marketCondition: string
  trend12m: MarketRow[]          // last 12 months for chart
  trend60m: MarketRow[]          // last 60 months for long chart
  allTime: { peak: number; peakDate: string; trough: number; troughDate: string }
  source: 'live' | 'fallback'
}

export type PropertyType = 'sfr' | 'condo' | 'multifamily' | 'all'

const PROPERTY_TYPE_MAP: Record<PropertyType, string> = {
  sfr:         'Single Family Residential',
  condo:       'Condo/Co-op',
  multifamily: 'Multi-Family (2-4 Unit)',
  all:         'All Residential',
}

// In-memory cache keyed by property type
const _cache: Partial<Record<PropertyType, { data: MarketSummary; ts: number }>> = {}
const TTL = 3600 * 1000

function fmt(n: number | null): string {
  if (!n) return 'N/A'
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

function condition(mos: number): string {
  if (mos < 1.5) return "Extreme seller's market"
  if (mos < 3)   return "Seller's market"
  if (mos < 5)   return 'Balanced market'
  if (mos < 7)   return "Buyer's market"
  return "Strong buyer's market"
}

// Fallback data computed from real Redfin values we've seen
const FALLBACKS: Record<PropertyType, Partial<MarketSummary>> = {
  sfr:         { medianPrice: 490082, priceYoY: 15.6,  homesSold: 112, monthsOfSupply: 1.1, medianDom: 32, medianPpsf: 245, marketTrend: 'rising'  },
  condo:       { medianPrice: 230000, priceYoY: -15.6, homesSold: 49,  monthsOfSupply: 1.7, medianDom: 38, medianPpsf: 230, marketTrend: 'falling' },
  multifamily: { medianPrice: 530000, priceYoY: 16.4,  homesSold: 11,  monthsOfSupply: 1.9, medianDom: 45, medianPpsf: 210, marketTrend: 'rising'  },
  all:         { medianPrice: 430000, priceYoY: 13.3,  homesSold: 172, monthsOfSupply: 1.4, medianDom: 34, medianPpsf: 240, marketTrend: 'rising'  },
}

export async function getMarketData(type: PropertyType = 'all'): Promise<MarketSummary> {
  // Cache check
  const cached = _cache[type]
  if (cached && Date.now() - cached.ts < TTL) return cached.data

  const dbType = PROPERTY_TYPE_MAP[type]
  const key   = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  const url   = process.env.SUPABASE_URL || 'https://vvkdnzqgtajeouxlliuk.supabase.co'
  const fb    = FALLBACKS[type]

  try {
    if (!key) throw new Error('no key')
    const supabase = createClient(url, key)

    // 60 months of data for this property type
    const { data, error } = await supabase
      .from('market_data')
      .select('period_end,property_type,median_sale_price,median_list_price,median_ppsf,median_dom,homes_sold,pending_sales,new_listings,inventory,months_of_supply,avg_sale_to_list,sold_above_list,price_yoy,inventory_yoy,dom_yoy')
      .eq('region', 'Anchorage')
      .eq('property_type', dbType)
      .gte('period_start', '2020-01-01')
      .order('period_end', { ascending: true })

    if (error || !data || data.length < 3) throw new Error('no data')

    const rows = data as MarketRow[]
    const latest = rows[rows.length - 1]
    const trend12 = rows.slice(-12)
    const prices  = rows.filter(r => r.median_sale_price).map(r => r.median_sale_price!)
    const peak     = Math.max(...prices)
    const peakRow  = rows.find(r => r.median_sale_price === peak)!
    const trough   = Math.min(...prices)
    const troughRow = rows.find(r => r.median_sale_price === trough)!

    const yoy = latest.price_yoy ?? 0
    const summary: MarketSummary = {
      latestDate:           latest.period_end,
      latestMonth:          new Date(latest.period_end + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      medianPrice:          latest.median_sale_price ?? fb.medianPrice ?? 0,
      medianPriceFormatted: fmt(latest.median_sale_price),
      priceYoY:             Math.round(yoy * 1000) / 10,
      priceYoYFormatted:    `${yoy >= 0 ? '+' : ''}${(yoy * 100).toFixed(1)}%`,
      homesSold:            latest.homes_sold ?? fb.homesSold ?? 0,
      monthsOfSupply:       latest.months_of_supply ?? fb.monthsOfSupply ?? 0,
      medianDom:            latest.median_dom ?? fb.medianDom ?? 0,
      medianPpsf:           latest.median_ppsf ?? fb.medianPpsf ?? 0,
      avgSaleToList:        Math.round((latest.avg_sale_to_list ?? 0.98) * 1000) / 10,
      soldAboveList:        Math.round((latest.sold_above_list ?? 0.3) * 100),
      inventory:            latest.inventory ?? 0,
      newListings:          latest.new_listings ?? 0,
      marketTrend:          yoy > 0.03 ? 'rising' : yoy < -0.03 ? 'falling' : 'stable',
      marketCondition:      condition(latest.months_of_supply ?? 1.5),
      trend12m:             trend12,
      trend60m:             rows,
      allTime: {
        peak:       peak,
        peakDate:   new Date(peakRow.period_end + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        trough:     trough,
        troughDate: new Date(troughRow.period_end + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      },
      source: 'live',
    }
    _cache[type] = { data: summary, ts: Date.now() }
    return summary

  } catch {
    const summary: MarketSummary = {
      latestDate:           '2026-02-28',
      latestMonth:          'February 2026',
      medianPrice:          fb.medianPrice ?? 430000,
      medianPriceFormatted: fmt(fb.medianPrice ?? 430000),
      priceYoY:             fb.priceYoY ?? 13.3,
      priceYoYFormatted:    `${(fb.priceYoY ?? 13.3) >= 0 ? '+' : ''}${(fb.priceYoY ?? 13.3).toFixed(1)}%`,
      homesSold:            fb.homesSold ?? 172,
      monthsOfSupply:       fb.monthsOfSupply ?? 1.4,
      medianDom:            fb.medianDom ?? 34,
      medianPpsf:           fb.medianPpsf ?? 240,
      avgSaleToList:        98.5,
      soldAboveList:        35,
      inventory:            240,
      newListings:          285,
      marketTrend:          fb.marketTrend ?? 'rising',
      marketCondition:      condition(fb.monthsOfSupply ?? 1.4),
      trend12m:             [],
      trend60m:             [],
      allTime:              { peak: 509500, peakDate: 'July 2025', trough: 313500, troughDate: 'January 2020' },
      source: 'fallback',
    }
    _cache[type] = { data: summary, ts: Date.now() }
    return summary
  }
}

// Format all 4 types for AI chat context injection
export async function getAllMarketContext(): Promise<string> {
  const [all, sfr, condo, mf] = await Promise.all([
    getMarketData('all'),
    getMarketData('sfr'),
    getMarketData('condo'),
    getMarketData('multifamily'),
  ])

  return `
ANCHORAGE HOUSING MARKET DATA — ${all.latestMonth} (Source: Redfin via Huit.AI):

ALL RESIDENTIAL: Median $${all.medianPrice.toLocaleString()} | ${all.homesSold} sales | ${all.monthsOfSupply} months supply | YoY ${all.priceYoYFormatted} | ${all.marketCondition}

SINGLE FAMILY: Median $${sfr.medianPrice.toLocaleString()} | ${sfr.homesSold} sales | ${sfr.monthsOfSupply} MoS | ${sfr.medianDom} avg days on market | YoY ${sfr.priceYoYFormatted} | $${sfr.medianPpsf}/sqft

CONDOS: Median $${condo.medianPrice.toLocaleString()} | ${condo.homesSold} sales | ${condo.monthsOfSupply} MoS | YoY ${condo.priceYoYFormatted}

MULTI-FAMILY (2-4 unit): Median $${mf.medianPrice.toLocaleString()} | ${mf.homesSold} sales | ${mf.monthsOfSupply} MoS | YoY ${mf.priceYoYFormatted}

Market context: ${sfr.monthsOfSupply < 2 ? 'Extremely low inventory. Homes selling fast.' : 'Balanced conditions.'} Anchorage all-time SFR peak was $509,500 (July 2025).
`.trim()
}
