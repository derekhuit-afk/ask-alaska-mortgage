import { getMarketData } from '@/lib/market'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const d = await getMarketData('sfr')
  return {
    title: `Anchorage Single Family Home Prices ${d.latestMonth} | $${d.medianPrice.toLocaleString()} Median`,
    description: `Anchorage single family home prices: $${d.medianPrice.toLocaleString()} median in ${d.latestMonth}. ${d.homesSold} homes sold, ${d.monthsOfSupply} months of supply, ${d.medianDom} avg days on market. ${d.priceYoYFormatted} year-over-year.`,
    keywords: 'Anchorage single family home prices, Anchorage SFR market, buy single family home Anchorage, Anchorage home price 2026',
    alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-housing-market/single-family' },
  }
}

const NAV = '#0F2D6B'
const GREEN = '#10B981'

export default async function SFRPage() {
  const d = await getMarketData('sfr')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the median price for a single family home in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `The median sale price for a single family home in Anchorage, Alaska is $${d.medianPrice.toLocaleString()} as of ${d.latestMonth}. Prices are ${d.priceYoYFormatted} year-over-year. The all-time peak was $${d.allTime.peak.toLocaleString()} in ${d.allTime.peakDate}. Source: Redfin via Huit.AI.` } },
      { '@type': 'Question', name: 'How many single family homes sell each month in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `In ${d.latestMonth}, ${d.homesSold} single family homes sold in Anchorage. New listings numbered ${d.newListings}. Inventory stands at ${d.inventory} active listings with ${d.monthsOfSupply} months of supply — indicating a ${d.marketCondition.toLowerCase()}.` } },
      { '@type': 'Question', name: 'How long does it take to sell a house in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Single family homes in Anchorage stay on the market for an average of ${d.medianDom} days as of ${d.latestMonth}. Well-priced homes in desirable neighborhoods (South Anchorage, Eagle River) often receive offers within 1–2 weeks. ${d.soldAboveList}% of homes sell above their asking price.` } },
      { '@type': 'Question', name: 'What is the price per square foot for homes in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Single family homes in Anchorage sell for approximately $${d.medianPpsf.toFixed(0)} per square foot as of ${d.latestMonth}. This varies significantly by neighborhood: South Anchorage can exceed $300/sqft while areas like Mountain View or Muldoon may be $175–$220/sqft.` } },
    ]
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280' }}>
          <Link href="/" style={{ color: NAV, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>AskAlaskaMortgage.ai</Link>
          <span>/</span>
          <Link href="/anchorage-housing-market" style={{ color: '#6B7280', textDecoration: 'none' }}>Market</Link>
          <span>/</span>
          <span style={{ color: '#111827' }}>Single Family</span>
        </div>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ background: NAV, color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none' }}>
          Get Pre-Approved →
        </a>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAV}, #1e3a8a)`, color: '#fff', padding: 'clamp(32px,5vw,56px) 20px 36px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            🏠 ANCHORAGE · SINGLE FAMILY HOMES · {d.latestMonth.toUpperCase()}
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,40px)', fontWeight: 800, margin: '0 0 14px', lineHeight: 1.2 }}>
            Anchorage Single Family Home<br />Prices &amp; Market Report
          </h1>
          <p style={{ color: '#bfdbfe', fontSize: 15, lineHeight: 1.7, maxWidth: 620, margin: '0 0 24px' }}>
            {d.homesSold} single-family homes sold in {d.latestMonth} at a median price of <strong style={{ color: '#fff' }}>${d.medianPrice.toLocaleString()}</strong> — <strong style={{ color: d.priceYoY >= 0 ? '#34d399' : '#f87171' }}>{d.priceYoYFormatted} year-over-year</strong>. The market is a <strong style={{ color: '#fff' }}>{d.marketCondition.toLowerCase()}</strong> at {d.monthsOfSupply} months of supply.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10 }}>
            {[
              { l: 'Median Sale Price', v: `$${d.medianPrice.toLocaleString()}` },
              { l: 'Price/Sq Ft', v: `$${d.medianPpsf.toFixed(0)}` },
              { l: 'Homes Sold', v: String(d.homesSold) },
              { l: 'Avg Days on Market', v: String(d.medianDom) },
              { l: 'Months of Supply', v: String(d.monthsOfSupply) },
              { l: 'YoY Price Change', v: d.priceYoYFormatted },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: s.l === 'YoY Price Change' ? (d.priceYoY >= 0 ? '#34d399' : '#f87171') : '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 10, color: '#93c5fd', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Month Data Table */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 6 }}>
          Anchorage Single Family — 12 Month Price History
        </h2>
        <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 16 }}>All-time SFR peak: <strong>${d.allTime.peak.toLocaleString()}</strong> in {d.allTime.peakDate} · Trough: <strong>${d.allTime.trough.toLocaleString()}</strong> in {d.allTime.troughDate}</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAV }}>
                {['Month','Median Price','$/Sq Ft','Homes Sold','Inventory','Months Supply','DOM','Sale/List','YoY'].map(h => (
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
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.avg_sale_to_list ? `${(row.avg_sale_to_list * 100).toFixed(1)}%` : '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right', fontWeight: 700, color: yoy != null ? (yoy >= 0 ? '#059669' : '#DC2626') : '#9CA3AF' }}>
                      {yoy != null ? `${yoy >= 0 ? '+' : ''}${(yoy * 100).toFixed(1)}%` : '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>Source: Redfin via Huit.AI · Single Family Residential · Anchorage, AK</p>
      </section>

      {/* Mortgage calc section */}
      <section style={{ background: '#EFF6FF', padding: '40px 20px', borderTop: '1px solid #DBEAFE' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: NAV, marginBottom: 8 }}>
            What Does a ${d.medianPrice.toLocaleString()} Home Cost Monthly?
          </h2>
          <p style={{ color: '#374151', fontSize: 14, marginBottom: 24 }}>
            Estimated monthly payments at the Anchorage median single-family price of ${d.medianPrice.toLocaleString()}:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
            {[
              { label: 'VA Loan (0% down)', payment: Math.round(d.medianPrice * 0.006), note: '30yr est. at 6.8%', color: '#065F46', bg: '#ECFDF5' },
              { label: 'Conv. (20% down)', payment: Math.round(d.medianPrice * 0.8 * 0.0055), note: '30yr est. at 6.5%', color: NAV, bg: '#EFF6FF' },
              { label: 'AHFC (3% down)', payment: Math.round(d.medianPrice * 0.97 * 0.0058), note: '30yr est. at 6.3%', color: '#92400E', bg: '#FEF3C7' },
              { label: 'FHA (3.5% down)', payment: Math.round(d.medianPrice * 0.965 * 0.006), note: '30yr est. at 6.8%', color: '#4C1D95', bg: '#F5F3FF' },
            ].map(p => (
              <div key={p.label} style={{ background: p.bg, border: `1px solid ${p.color}33`, borderRadius: 12, padding: '18px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: p.color, textTransform: 'uppercase', marginBottom: 6 }}>{p.label}</div>
                <div style={{ fontSize: 26, fontWeight: 800, color: p.color }}>${p.payment.toLocaleString()}/mo</div>
                <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4 }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 14 }}>
            Estimates only. Includes principal & interest only. Taxes, insurance, HOA not included. Rates change daily.
          </p>
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: 20, background: NAV, color: '#fff', fontWeight: 700, padding: '13px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 14 }}>
            Get Your Actual Payment at loanak.com →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 780, margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 20 }}>Single Family Home FAQ — Anchorage</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { q: `What is the median price for a single family home in Anchorage in ${d.latestMonth}?`, a: `$${d.medianPrice.toLocaleString()} as of ${d.latestMonth}. This is ${d.priceYoYFormatted} compared to the same month last year. The all-time peak was $${d.allTime.peak.toLocaleString()} in ${d.allTime.peakDate}. Source: Redfin via Huit.AI.` },
            { q: 'How long does it take to sell a house in Anchorage right now?', a: `Single family homes average ${d.medianDom} days on market in ${d.latestMonth}. ${d.soldAboveList}% of homes sell above asking price. Well-priced homes in Eagle River and South Anchorage often receive offers within 7–14 days.` },
            { q: 'What is the price per square foot for Anchorage homes?', a: `Approximately $${d.medianPpsf.toFixed(0)}/sq ft for single family homes in ${d.latestMonth}. South Anchorage and Hillside can exceed $280–$320/sq ft. Areas like Mountain View or Muldoon may be $175–$220/sq ft.` },
            { q: 'Is now a good time to buy a single family home in Anchorage?', a: `With ${d.monthsOfSupply} months of supply, Anchorage is in a ${d.marketCondition.toLowerCase()}. Prices are ${d.priceYoYFormatted} year-over-year. Waiting typically means paying more. The best move is getting pre-approved now so you can act quickly when the right home comes to market.` },
          ].map((f, i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
              <summary style={{ padding: '14px 20px', cursor: 'pointer', fontWeight: 600, fontSize: 14, color: '#111827', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                {f.q}<span style={{ color: NAV, flexShrink: 0, marginLeft: 10 }}>▼</span>
              </summary>
              <div style={{ padding: '4px 20px 16px', fontSize: 14, color: '#4B5563', lineHeight: 1.75, borderTop: '1px solid #F3F4F6' }}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background: NAV, padding: '48px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(18px,3vw,26px)', fontWeight: 800, margin: '0 0 10px' }}>Buying a Single Family Home in Anchorage?</h2>
        <p style={{ color: '#93c5fd', marginBottom: 22, fontSize: 14 }}>I've closed hundreds of Alaska home purchases. Get pre-approved in 3 minutes.</p>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', background: GREEN, color: '#fff', fontWeight: 800, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
          Apply at loanak.com →
        </a>
        <div style={{ marginTop: 12, fontSize: 11, color: '#6B91C4' }}>Derek Huit · Cardinal Financial NMLS #203980 · Licensed AK · WA · MT</div>
      </section>

      <footer style={{ background: '#0F172A', color: '#475569', fontSize: 11, padding: '14px 20px', textAlign: 'center' }}>
        Market data sourced from Redfin via Huit.AI. Updated monthly. Not a guarantee of market conditions. Equal Housing Lender.
      </footer>
    </main>
  )
}
