import { getMarketData } from '@/lib/market'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600
const NAV = '#064E3B', GREEN = '#10B981', DARK_NAV = '#0F2D6B'

export async function generateMetadata(): Promise<Metadata> {
  const d = await getMarketData('multifamily')
  return {
    title: `Anchorage Multi-Family Home Prices ${d.latestMonth} | $${d.medianPrice.toLocaleString()} Median`,
    description: `Anchorage multi-family (duplex, triplex, fourplex) market ${d.latestMonth}: $${d.medianPrice.toLocaleString()} median, ${d.homesSold} sales, ${d.monthsOfSupply} months supply, ${d.priceYoYFormatted} YoY. Investment property data from Huit.AI.`,
    keywords: 'Anchorage multi-family price 2026, Anchorage duplex market, buy duplex Anchorage Alaska, investment property Anchorage, Anchorage fourplex price',
    alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-housing-market/multi-family' },
  }
}

export default async function MultiFamilyPage() {
  const d = await getMarketData('multifamily')

  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the median price for a duplex or multi-family home in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `The median sale price for multi-family properties (2–4 units) in Anchorage is $${d.medianPrice.toLocaleString()} as of ${d.latestMonth}. Prices are ${d.priceYoYFormatted} year-over-year. ${d.homesSold} multi-family properties sold in ${d.latestMonth} with ${d.monthsOfSupply} months of supply. Source: Redfin via Huit.AI.` } },
      { '@type': 'Question', name: 'What is the cap rate for multi-family properties in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Anchorage multi-family properties typically yield cap rates of 6–8% based on current rental rates and purchase prices. With a median price of $${d.medianPrice.toLocaleString()} and typical 2-unit rents of $3,200–$4,500/month total, net cap rates generally range from 5.5–7.5% depending on condition and management costs.` } },
      { '@type': 'Question', name: 'Can I buy a duplex in Anchorage with a VA loan?', acceptedAnswer: { '@type': 'Answer', text: `Yes. VA loans allow purchase of 2–4 unit properties with 0% down if you occupy one unit as your primary residence. At an Anchorage duplex median of $${d.medianPrice.toLocaleString()}, a VA loan would require $0 down. Rental income from the second unit can help offset your mortgage payment. Contact Derek Huit at loanak.com to structure this correctly.` } },
    ]
  }

  const estCapRate = 6.8
  const monthlyRent = Math.round(d.medianPrice * estCapRate / 100 / 12)

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
          <Link href="/" style={{ color: DARK_NAV, fontWeight: 700, textDecoration: 'none' }}>AskAlaskaMortgage.ai</Link>
          <span style={{ color: '#D1D5DB' }}>/</span>
          <Link href="/anchorage-housing-market" style={{ color: '#6B7280', textDecoration: 'none' }}>Market</Link>
          <span style={{ color: '#D1D5DB' }}>/</span>
          <span>Multi-Family</span>
        </div>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ background: NAV, color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none' }}>Apply →</a>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAV}, #065F46)`, color: '#fff', padding: 'clamp(32px,5vw,56px) 20px 36px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6EE7B7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>🏘️ ANCHORAGE · MULTI-FAMILY (2–4 UNIT) · {d.latestMonth.toUpperCase()}</div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,40px)', fontWeight: 800, margin: '0 0 12px' }}>Anchorage Multi-Family<br />Investment Market Report</h1>
          <p style={{ color: '#A7F3D0', fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: '0 0 24px' }}>
            {d.homesSold} multi-family properties sold in {d.latestMonth} at a median of <strong style={{ color: '#fff' }}>${d.medianPrice.toLocaleString()}</strong> — <strong style={{ color: d.priceYoY >= 0 ? '#34d399' : '#f87171' }}>{d.priceYoYFormatted} YoY</strong>. Estimated cap rate: <strong style={{ color: '#fff' }}>{estCapRate}%</strong> based on current Anchorage rental rates.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10 }}>
            {[
              { l: 'Median Price', v: `$${d.medianPrice.toLocaleString()}` },
              { l: 'Est. Cap Rate', v: `${estCapRate}%` },
              { l: 'Properties Sold', v: String(d.homesSold) },
              { l: 'Months Supply', v: String(d.monthsOfSupply) },
              { l: 'Est. Monthly Rent', v: `$${monthlyRent.toLocaleString()}` },
              { l: 'YoY Price', v: d.priceYoYFormatted },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.l === 'YoY Price' ? (d.priceYoY >= 0 ? '#34d399' : '#f87171') : '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 10, color: '#6EE7B7', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor quick calc */}
      <section style={{ background: '#ECFDF5', borderBottom: '3px solid #10B981', padding: '20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
          {[
            { label: 'VA House Hack (0% down)', down: 0, monthly: Math.round(d.medianPrice * 0.006), note: 'Live in 1 unit, rent the other' },
            { label: 'Conv. Investment (25% down)', down: Math.round(d.medianPrice * 0.25), monthly: Math.round(d.medianPrice * 0.75 * 0.0058), note: 'Standard investor financing' },
            { label: 'DSCR Loan (20% down)', down: Math.round(d.medianPrice * 0.20), monthly: Math.round(d.medianPrice * 0.80 * 0.0065), note: 'No tax returns required' },
          ].map(c => (
            <div key={c.label} style={{ background: '#fff', borderRadius: 12, padding: 18, border: '1px solid #D1FAE5' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#065F46', marginBottom: 8 }}>{c.label}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: '#6B7280' }}>Down Payment</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#065F46' }}>{c.down === 0 ? '$0' : `$${c.down.toLocaleString()}`}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#6B7280' }}>Est. P&amp;I/mo</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: DARK_NAV }}>${c.monthly.toLocaleString()}</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: '#6B7280', marginTop: 6 }}>{c.note}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 12, color: '#065F46' }}>
          Est. rental income at {estCapRate}% cap rate: <strong>${monthlyRent.toLocaleString()}/month total</strong> · Estimates only ·
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color: DARK_NAV, fontWeight: 700, marginLeft: 6 }}>Get exact numbers →</a>
        </div>
      </section>

      {/* 12-Month Table */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 16 }}>Anchorage Multi-Family — 12 Month History</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAV }}>
                {['Month','Median Price','Units Sold','New Listings','Months Supply','DOM','YoY'].map(h => (
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
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.homes_sold ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.new_listings ?? '—'}</td>
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
        <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>Source: Redfin via Huit.AI · Multi-Family (2–4 Unit) · Anchorage, AK</p>
      </section>

      <section style={{ background: DARK_NAV, padding: '44px 20px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 10px' }}>Ready to Buy an Investment Property in Anchorage?</h2>
        <p style={{ color: '#93c5fd', marginBottom: 20, fontSize: 14 }}>VA, DSCR, and conventional investor loans. I&apos;ll structure the deal that maximizes your returns.</p>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GREEN, color: '#fff', fontWeight: 800, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
          Get Investment Financing at loanak.com →
        </a>
        <div style={{ marginTop: 12, fontSize: 11, color: '#6B91C4' }}>Derek Huit · NMLS #203980 · Licensed AK · WA · MT</div>
      </section>
      <footer style={{ background: '#0F172A', color: '#475569', fontSize: 11, padding: '14px 20px', textAlign: 'center' }}>
        Market data sourced from Redfin via Huit.AI. Cap rates estimated from market conditions — verify with current rental comps. Equal Housing Lender.
      </footer>
    </main>
  )
}
