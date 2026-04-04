import { getMarketData } from '@/lib/market'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Anchorage Alaska Housing Market Report 2026 | AskAlaskaMortgage.ai',
  description: 'Current Anchorage housing market data: median home prices, inventory, days on market, and YoY trends for single-family, condos, and multi-family properties. Updated monthly from Redfin.',
  keywords: 'Anchorage housing market 2026, Anchorage median home price, Alaska real estate market, Anchorage home prices, Alaska housing inventory',
  alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-housing-market' },
}

const NAV = '#0F2D6B'
const GREEN = '#10B981'

function Arrow({ pct }: { pct: number }) {
  const up = pct >= 0
  return (
    <span style={{ color: up ? '#059669' : '#DC2626', fontWeight: 700 }}>
      {up ? '▲' : '▼'} {Math.abs(pct).toFixed(1)}%
    </span>
  )
}

function StatBox({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div style={{ background: highlight ? NAV : '#fff', border: `1px solid ${highlight ? NAV : '#E5E7EB'}`, borderRadius: 12, padding: '18px 16px', textAlign: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: highlight ? '#93c5fd' : '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: highlight ? '#fff' : NAV, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: highlight ? '#bfdbfe' : '#6B7280', marginTop: 4 }}>{sub}</div>}
    </div>
  )
}

export default async function MarketHubPage() {
  const [all, sfr, condo, mf] = await Promise.all([
    getMarketData('all'),
    getMarketData('sfr'),
    getMarketData('condo'),
    getMarketData('multifamily'),
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the median home price in Anchorage Alaska in 2026?', acceptedAnswer: { '@type': 'Answer', text: `The median home price in Anchorage, Alaska as of ${all.latestMonth} is $${all.medianPrice.toLocaleString()} for all residential properties. Single-family homes have a median price of $${sfr.medianPrice.toLocaleString()}. Condos have a median price of $${condo.medianPrice.toLocaleString()}. Data sourced from Redfin via Huit.AI.` } },
      { '@type': 'Question', name: 'Is it a buyer\'s or seller\'s market in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Anchorage is currently a ${all.marketCondition.toLowerCase()} with ${all.monthsOfSupply} months of housing supply. Under 3 months of supply indicates a seller\'s market. The average home sells in ${all.medianDom} days.` } },
      { '@type': 'Question', name: 'How much are homes selling for in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `In ${all.latestMonth}, ${all.homesSold} homes sold in Anchorage with a median sale price of $${all.medianPrice.toLocaleString()}. Prices are ${all.priceYoYFormatted} year-over-year. The all-time peak was $${sfr.allTime.peak.toLocaleString()} in ${sfr.allTime.peakDate}.` } },
      { '@type': 'Question', name: 'What is the average price per square foot in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Single-family homes in Anchorage sell for approximately $${sfr.medianPpsf.toFixed(0)} per square foot as of ${sfr.latestMonth}. Condos average $${condo.medianPpsf.toFixed(0)} per square foot.` } },
      { '@type': 'Question', name: 'How long do homes stay on the market in Anchorage?', acceptedAnswer: { '@type': 'Answer', text: `Homes in Anchorage stay on the market for an average of ${all.medianDom} days as of ${all.latestMonth}. Single-family homes average ${sfr.medianDom} days. The low inventory (${all.monthsOfSupply} months of supply) means well-priced homes often sell within 2–3 weeks.` } },
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://askalaskamortgage.ai' },
      { '@type': 'ListItem', position: 2, name: 'Anchorage Housing Market', item: 'https://askalaskamortgage.ai/anchorage-housing-market' },
    ]
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Anchorage Alaska Housing Market Report — ${all.latestMonth}`,
    description: `Current Anchorage housing market: median price $${all.medianPrice.toLocaleString()}, ${all.homesSold} sales, ${all.monthsOfSupply} months supply.`,
    datePublished: all.latestDate,
    dateModified: all.latestDate,
    author: { '@type': 'Person', name: 'Derek Huit', jobTitle: 'VP Retail Market Leader, Cardinal Financial' },
    publisher: { '@type': 'Organization', name: 'Huit.AI', url: 'https://huit.ai' },
  }

  const cards = [
    { href: '/anchorage-housing-market/single-family', label: 'Single Family Homes', data: sfr, emoji: '🏠' },
    { href: '/anchorage-housing-market/condos', label: 'Condos & Co-ops', data: condo, emoji: '🏢' },
    { href: '/anchorage-housing-market/multi-family', label: 'Multi-Family (2–4 Unit)', data: mf, emoji: '🏘️' },
  ]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #F3F4F6', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: NAV, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 10, fontWeight: 800 }}>AK</span>
            </div>
            <span style={{ fontWeight: 700, color: '#111827', fontSize: 14 }}>AskAlaskaMortgage.ai</span>
          </Link>
          <span style={{ color: '#D1D5DB', fontSize: 14 }}>/</span>
          <span style={{ color: '#6B7280', fontSize: 13 }}>Housing Market</span>
        </div>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ background: NAV, color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none' }}>
          Get Pre-Approved →
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAV}, #1e3a8a)`, color: '#fff', padding: 'clamp(36px,5vw,64px) 20px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
            ANCHORAGE HOUSING MARKET REPORT
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>
            Anchorage, Alaska<br />Housing Market — {all.latestMonth}
          </h1>
          <p style={{ color: '#bfdbfe', fontSize: 16, maxWidth: 600, lineHeight: 1.7, margin: '0 0 28px' }}>
            Live market data updated monthly. {all.homesSold} homes sold in {all.latestMonth} at a median price of <strong style={{ color: '#fff' }}>${all.medianPrice.toLocaleString()}</strong>. Anchorage is a <strong style={{ color: GREEN }}>{all.marketCondition.toLowerCase()}</strong> with {all.monthsOfSupply} months of supply.
          </p>

          {/* Hero stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
            {[
              { label: 'Median Sale Price', value: `$${all.medianPrice.toLocaleString()}`, sub: all.latestMonth },
              { label: 'Homes Sold', value: String(all.homesSold), sub: 'This month' },
              { label: 'Price Change YoY', value: all.priceYoYFormatted, sub: 'Year over year' },
              { label: 'Months of Supply', value: String(all.monthsOfSupply), sub: "Seller's market <3" },
              { label: 'Avg Days on Market', value: String(all.medianDom), sub: 'From list to contract' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.label.includes('Change') ? (all.priceYoY >= 0 ? '#34d399' : '#f87171') : '#fff' }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#93c5fd', marginTop: 3, fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 10, color: '#6b91c4', marginTop: 1 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market condition banner */}
      <div style={{ background: all.monthsOfSupply < 2 ? '#ECFDF5' : '#FEF3C7', borderBottom: `3px solid ${all.monthsOfSupply < 2 ? GREEN : '#F59E0B'}`, padding: '14px 20px', textAlign: 'center' }}>
        <span style={{ fontWeight: 700, color: all.monthsOfSupply < 2 ? '#065F46' : '#78350F', fontSize: 14 }}>
          📊 Market Condition: {all.marketCondition}
        </span>
        <span style={{ color: all.monthsOfSupply < 2 ? '#047857' : '#92400E', fontSize: 13, marginLeft: 12 }}>
          {all.monthsOfSupply < 2
            ? `With only ${all.monthsOfSupply} months of supply, buyers should be pre-approved before making offers.`
            : `${all.monthsOfSupply} months of supply gives buyers more negotiating room.`}
          {' '}
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color: NAV, fontWeight: 700 }}>Get pre-approved →</a>
        </span>
      </div>

      {/* Property Type Cards */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '48px 20px 24px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 6 }}>By Property Type</h2>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 28 }}>
          Click any property type for full trend charts, historical data, and mortgage guidance.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {cards.map(({ href, label, data: d, emoji }) => (
            <Link key={href} href={href} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, cursor: 'pointer', transition: 'all 0.15s' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{emoji}</div>
                <div style={{ fontWeight: 700, color: NAV, fontSize: 16, marginBottom: 16 }}>{label}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {[
                    { l: 'Median Price', v: d.medianPriceFormatted },
                    { l: 'Homes Sold', v: String(d.homesSold) },
                    { l: 'YoY Change', v: d.priceYoYFormatted },
                    { l: 'Months Supply', v: String(d.monthsOfSupply) },
                  ].map(stat => (
                    <div key={stat.l} style={{ background: '#F9FAFB', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase' }}>{stat.l}</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: stat.l === 'YoY Change' ? (d.priceYoY >= 0 ? '#059669' : '#DC2626') : '#111827', marginTop: 2 }}>{stat.v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#6B7280' }}>{d.marketCondition}</span>
                  <span style={{ fontSize: 13, color: NAV, fontWeight: 700 }}>Full report →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Residential Deep Stats */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '24px 20px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 20 }}>
          All Anchorage Residential — {all.latestMonth} Detail
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          <StatBox label="Median Sale Price" value={`$${all.medianPrice.toLocaleString()}`} sub={all.latestMonth} highlight />
          <StatBox label="Median List Price" value={all.medianPriceFormatted} />
          <StatBox label="Homes Sold" value={String(all.homesSold)} sub="Closed this month" />
          <StatBox label="New Listings" value={String(all.newListings)} sub="Came to market" />
          <StatBox label="Pending Sales" value={String(all.homesSold)} sub="Under contract" />
          <StatBox label="Inventory" value={String(all.inventory)} sub="Active listings" />
          <StatBox label="Months of Supply" value={String(all.monthsOfSupply)} sub={all.marketCondition} />
          <StatBox label="Avg Days on Market" value={String(all.medianDom)} sub="List to contract" />
          <StatBox label="Sale-to-List Ratio" value={`${all.avgSaleToList}%`} sub="Avg offer vs asking" />
          <StatBox label="Sold Above List" value={`${all.soldAboveList}%`} sub="Of homes this month" />
          <StatBox label="YoY Price Change" value={all.priceYoYFormatted} sub="vs same month 2025" />
          <StatBox label="All-Time Peak" value={`$${sfr.allTime.peak.toLocaleString()}`} sub={sfr.allTime.peakDate} />
        </div>
      </section>

      {/* 12-Month Price Trend Table */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '24px 20px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 6 }}>
          Anchorage Home Prices — 12 Month Trend
        </h2>
        <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 16 }}>
          Source: Redfin via Huit.AI · All Residential · Updated {all.latestMonth}
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: NAV }}>
                {['Month', 'Median Price', 'Homes Sold', 'New Listings', 'Inventory', 'Months Supply', 'Avg DOM', 'YoY'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', color: '#fff', fontWeight: 700, textAlign: 'right', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {all.trend12m.slice().reverse().map((row, i) => {
                const yoy = row.price_yoy
                return (
                  <tr key={row.period_end} style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                      {new Date(row.period_end + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '9px 12px', textAlign: 'right', fontWeight: 700, color: NAV }}>
                      ${(row.median_sale_price ?? 0).toLocaleString()}
                    </td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.homes_sold ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.new_listings ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.inventory ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.months_of_supply ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right' }}>{row.median_dom ?? '—'}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'right', fontWeight: 700, color: yoy != null ? (yoy >= 0 ? '#059669' : '#DC2626') : '#6B7280' }}>
                      {yoy != null ? `${yoy >= 0 ? '+' : ''}${(yoy * 100).toFixed(1)}%` : '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>
          Data: Redfin · Anchorage, AK · All Residential · Updated monthly by Huit.AI
        </p>
      </section>

      {/* Derek Expert Commentary */}
      <section style={{ background: '#EFF6FF', padding: '48px 20px', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: '50%', background: NAV, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>DH</div>
            <div>
              <div style={{ fontWeight: 700, color: NAV, fontSize: 16, marginBottom: 2 }}>Derek Huit — Alaska Mortgage Expert</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 14 }}>18+ years · $1B+ career production · Cardinal Financial NMLS #203980</div>
              <div style={{ fontSize: 15, color: '#1E3A5F', lineHeight: 1.8 }}>
                &ldquo;The Anchorage market in {all.latestMonth} is telling a clear story: {all.monthsOfSupply} months of supply means this is firmly a seller&rsquo;s market. With {all.homesSold} homes selling at a median of ${all.medianPrice.toLocaleString()} — up {all.priceYoYFormatted} year-over-year — buyers who wait are typically paying more. The buyers winning offers right now are pre-approved before they ever walk through a door. If you&rsquo;re planning to buy in the next 90 days, the single best thing you can do today is lock in your pre-approval.&rdquo;
              </div>
              <div style={{ marginTop: 16 }}>
                <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', background: NAV, color: '#fff', fontWeight: 700, padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontSize: 14 }}>
                  Get Pre-Approved at loanak.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '48px 20px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 28 }}>Anchorage Housing Market — FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { q: `What is the median home price in Anchorage in ${all.latestMonth}?`, a: `The median sale price for all residential properties in Anchorage is $${all.medianPrice.toLocaleString()} as of ${all.latestMonth}. Single-family homes have a median of $${sfr.medianPrice.toLocaleString()}. Condos median $${condo.medianPrice.toLocaleString()}. Multi-family (2–4 unit) properties median $${mf.medianPrice.toLocaleString()}. Data source: Redfin via Huit.AI.` },
            { q: "Is Anchorage a buyer's or seller's market?", a: `Anchorage is currently a ${all.marketCondition.toLowerCase()} with only ${all.monthsOfSupply} months of housing supply. Under 3 months of supply indicates a seller's market. The average Anchorage home sells in ${all.medianDom} days and ${all.soldAboveList}% of homes sell above asking price.` },
            { q: 'How have Anchorage home prices changed in the last year?', a: `Anchorage residential prices are ${all.priceYoY >= 0 ? 'up' : 'down'} ${all.priceYoYFormatted} compared to the same month last year. The all-time median price peak for Anchorage single-family homes was $${sfr.allTime.peak.toLocaleString()} reached in ${sfr.allTime.peakDate}.` },
            { q: 'What is the best neighborhood to buy in Anchorage?', a: `The right neighborhood depends on your budget and goals. South Anchorage typically has the highest prices ($450K–$700K+) with top-rated schools. Eagle River offers more space at $380K–$550K. Midtown provides central location at $350K–$480K. Mat-Su Valley (Palmer/Wasilla) starts at $320K. As your mortgage lender, I can help you understand what you qualify for at any price point — get pre-approved at loanak.com.` },
            { q: 'What mortgage rate can I get for an Anchorage home purchase?', a: `Mortgage rates change daily and depend on your loan type, credit score, and down payment. Alaska VA loans, AHFC First Home loans, and conventional loans all have different rate structures. Contact me at loanak.com for today's exact rate — I'll lock it for you. Rates not quoted here to ensure you always get current pricing.` },
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

      {/* CTA */}
      <section style={{ background: NAV, color: '#fff', padding: '56px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(20px,3.5vw,30px)', fontWeight: 800, margin: '0 0 10px' }}>
          Ready to Buy in This Market?
        </h2>
        <p style={{ color: '#93c5fd', marginBottom: 24, fontSize: 15 }}>
          With {all.monthsOfSupply} months of supply, pre-approval is your competitive edge. I personally review every Alaska application.
        </p>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', background: GREEN, color: '#fff', fontWeight: 800, padding: '16px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 16 }}>
          Get Pre-Approved at loanak.com →
        </a>
        <div style={{ marginTop: 16, fontSize: 11, color: '#6B91C4' }}>
          Derek Huit · Cardinal Financial · NMLS #203980 · Licensed AK · WA · MT
        </div>
      </section>

      <footer style={{ background: '#0F172A', color: '#475569', fontSize: 11, padding: '16px 20px', textAlign: 'center' }}>
        Market data sourced from Redfin via Huit.AI. Updated monthly. For informational purposes only. Not a guarantee of future market conditions. Equal Housing Lender.
      </footer>
    </main>
  )
}
