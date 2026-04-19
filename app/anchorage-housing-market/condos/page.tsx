import { getMarketData } from '@/lib/market'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600
const NAV = '#0F2D6B', GREEN = '#10B981'

export async function generateMetadata(): Promise<Metadata> {
  const d = await getMarketData('condo')
  return {
    title: `Anchorage Condo Prices ${d.latestMonth} | $${d.medianPrice.toLocaleString()} Median | AskAlaskaMortgage.ai`,
    description: `Anchorage condo market ${d.latestMonth}: $${d.medianPrice.toLocaleString()} median, ${d.homesSold} sales, ${d.monthsOfSupply} months supply. ${d.priceYoYFormatted} YoY. Best entry-level option for first-time buyers.`,
    keywords: 'Anchorage condo prices 2026, buy condo Anchorage Alaska, Anchorage condo market, first time buyer Anchorage condo',
    alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-housing-market/condos' },
  }
}

export default async function CondoPage() {
  const d = await getMarketData('condo')
  const sfr = await getMarketData('sfr')

  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the median condo price in Anchorage Alaska?', acceptedAnswer: { '@type': 'Answer', text: `The median sale price for condos in Anchorage is $${d.medianPrice.toLocaleString()} as of ${d.latestMonth}. Condos are $${(sfr.medianPrice - d.medianPrice).toLocaleString()} less than the median single family home ($${sfr.medianPrice.toLocaleString()}), making them the most affordable entry point for Anchorage homebuyers. Source: Redfin via Huit.AI.` } },
      { '@type': 'Question', name: 'Can I use an FHA loan or AHFC First Home loan to buy a condo in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Yes. FHA loans require only 3.5% down and a 580+ credit score for condos in FHA-approved buildings. AHFC First Home loans also work for condos. At a $${d.medianPrice.toLocaleString()} median price, a 3.5% down payment is approximately $${Math.round(d.medianPrice * 0.035).toLocaleString()}. Contact Derek Huit at loanak.com to verify which programs apply to specific Anchorage condo buildings.` } },
    ]
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
          <Link href="/" style={{ color: NAV, fontWeight: 700, textDecoration: 'none' }}>AskAlaskaMortgage.ai</Link>
          <span style={{ color: '#D1D5DB' }}>/</span>
          <Link href="/anchorage-housing-market" style={{ color: '#6B7280', textDecoration: 'none' }}>Market</Link>
          <span style={{ color: '#D1D5DB' }}>/</span>
          <span>Condos</span>
        </div>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ background: NAV, color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none' }}>Apply →</a>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAV}, #1e3a8a)`, color: '#fff', padding: 'clamp(32px,5vw,56px) 20px 36px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>🏢 ANCHORAGE · CONDOS & CO-OPS · {d.latestMonth.toUpperCase()}</div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,40px)', fontWeight: 800, margin: '0 0 12px' }}>Anchorage Condo Market Report</h1>
          <p style={{ color: '#bfdbfe', fontSize: 15, lineHeight: 1.7, maxWidth: 580, margin: '0 0 24px' }}>
            {d.homesSold} condos sold in {d.latestMonth} at a median of <strong style={{ color: '#fff' }}>${d.medianPrice.toLocaleString()}</strong> — <strong style={{ color: d.priceYoY >= 0 ? '#34d399' : '#f87171' }}>{d.priceYoYFormatted} YoY</strong>. Condos are <strong style={{ color: '#fff' }}>${(sfr.medianPrice - d.medianPrice).toLocaleString()} below</strong> the SFR median — the most affordable path to Anchorage homeownership.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 10 }}>
            {[
              { l: 'Median Price', v: `$${d.medianPrice.toLocaleString()}` },
              { l: 'Price/Sq Ft', v: `$${d.medianPpsf.toFixed(0)}` },
              { l: 'Units Sold', v: String(d.homesSold) },
              { l: 'Months Supply', v: String(d.monthsOfSupply) },
              { l: 'Avg DOM', v: String(d.medianDom) },
              { l: 'YoY', v: d.priceYoYFormatted },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.l === 'YoY' ? (d.priceYoY >= 0 ? '#34d399' : '#f87171') : '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 10, color: '#93c5fd', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-time buyer callout */}
      <div style={{ background: '#ECFDF5', borderBottom: '3px solid #10B981', padding: '14px 20px', textAlign: 'center' }}>
        <span style={{ fontWeight: 700, color: '#065F46', fontSize: 14 }}>
          💡 First-Time Buyer Opportunity: AHFC + FHA loans work on condos — as low as 3% down on a $${d.medianPrice.toLocaleString()} condo = <strong>${Math.round(d.medianPrice * 0.03).toLocaleString()} down</strong>.
        </span>
        {' '}
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color: NAV, fontWeight: 700, fontSize: 13 }}>Get pre-approved →</a>
      </div>

      {/* 12-Month Table */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 16 }}>Anchorage Condo — 12 Month Price History</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAV }}>
                {['Month','Median Price','$/Sq Ft','Units Sold','Inventory','Months Supply','DOM','YoY'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', color: '#fff', fontWeight: 700, textAlign: 'right', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.trend12m.slice().reverse().map((row, i) => {
                const yoy = row.price_yoy
                return (
                  <tr key={row.period_end} style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                      {new Date(row.period_end + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '9px 12px', textAlign: 'right', fontWeight: 700, color: NAV }}>${(row.median_sale_price ?? 0).toLocaleString()}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>${(row.median_ppsf ?? 0).toFixed(0)}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.homes_sold ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.inventory ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.months_of_supply ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.median_dom ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right', fontWeight: 700, color: yoy != null ? (yoy >= 0 ? '#059669' : '#DC2626') : '#9CA3AF' }}>
                      {yoy != null ? `${yoy >= 0 ? '+' : ''}${(yoy * 100).toFixed(1)}%` : '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>Source: Redfin via Huit.AI · Condo/Co-op · Anchorage, AK</p>
      </section>

      <section style={{ background: NAV, padding: '44px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 10px' }}>Ready to Buy an Anchorage Condo?</h2>
        <p style={{ color: '#93c5fd', marginBottom: 20, fontSize: 14 }}>FHA, AHFC, and conventional options available. I&apos;ll find the best program for your situation.</p>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GREEN, color: '#fff', fontWeight: 800, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
          Apply at loanak.com →
        </a>
        <div style={{ marginTop: 12, fontSize: 11, color: '#6B91C4' }}>Derek Huit · NMLS #203980</div>
      </section>
      <footer style={{ background: '#0F172A', color: '#475569', fontSize: 11, padding: '14px 20px', textAlign: 'center' }}>
        Market data sourced from Redfin via Huit.AI. Updated monthly. Equal Housing Lender.
      </footer>
    </main>
  )
}
