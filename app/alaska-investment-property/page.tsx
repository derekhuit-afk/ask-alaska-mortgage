import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alaska Investment Property Mortgage | DSCR, Multi-Family, STR | Derek Huit',
  description: 'Investment property loans in Alaska — DSCR loans, multi-family financing, Airbnb/STR mortgages, VA house hacking. Expert guidance from Derek Huit. Call (907) 244-9368.',
  keywords: 'Alaska investment property loan, DSCR loan Alaska, multi-family mortgage Anchorage, Airbnb mortgage Alaska, short term rental loan Alaska',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-investment-property' },
}

const DK = '#0a1628'
const GN = '#065f46'
const GL = '#10b981'
const GD = '#d97706'
const CR = '#f9fafb'
const MT = '#64748b'
const BD = '#e2e8f0'

const loans = [
  { type: 'DSCR Loan', down: '20-25%', key: 'Qualifies on rental income — no W2s or tax returns required.', ideal: 'Self-employed investors, those with complex income, investors scaling a portfolio' },
  { type: 'VA Multi-Unit (House Hack)', down: '0%', key: 'Buy a 2-4 unit property, live in one, rent the rest. Zero down for eligible veterans.', ideal: 'Veterans and active duty at JBER — most powerful wealth strategy available' },
  { type: 'Conventional Investment', down: '15-25%', key: 'Standard investment property loan. 15% down on single-family, 25% on multi-family.', ideal: 'Investors with strong W2 income and good credit' },
  { type: 'FHA Multi-Unit (Owner Occ)', down: '3.5%', key: 'Buy up to a 4-unit property with FHA if you occupy one unit. Low down, strong leverage.', ideal: 'First-time investors who want to house hack with minimal cash outlay' },
  { type: 'Airbnb / STR Financing', down: '10-25%', key: 'Special STR programs use projected short-term rental income for qualification.', ideal: 'Girdwood, Kenai, Anchorage STR investors in tourist-heavy markets' },
  { type: 'Cash-Out Refi for Investment', down: 'N/A', key: 'Pull equity from your primary residence to fund investment property down payments.', ideal: 'Homeowners with equity who want to enter investment without liquidating savings' },
]

const markets = [
  { area: 'Anchorage Midtown', type: 'Long-term rental', cap: '6-7%', demand: 'Year-round JBER personnel and UAA students. Low vacancy.' },
  { area: 'Anchorage South', type: 'STR + Long-term', cap: '5-6%', demand: 'Strong STR for tourism and corporate travel. Higher entry price.' },
  { area: 'Eagle River', type: 'Long-term rental', cap: '6-7%', demand: 'Military families from JBER. Very stable occupancy year-round.' },
  { area: 'Wasilla / Palmer', type: 'Long-term rental', cap: '7-8%', demand: 'Growing population, lower entry prices, best appreciation trajectory.' },
  { area: 'Girdwood', type: 'Short-term rental', cap: '8-12%', demand: 'Ski and summer tourism. Strong STR rates. Zoning allows STR.' },
  { area: 'Kenai Peninsula', type: 'STR + Seasonal', cap: '8-11%', demand: 'Strong fishing tourism. Seasonal demand but high nightly rates during peak.' },
]

const hack = [
  { t: 'How It Works', d: 'Buy a 2-4 unit property using your VA benefit. Zero down payment, no PMI. Live in one unit, rent the rest. The rental income often covers 50-80% of your mortgage payment.' },
  { t: 'The Numbers', d: 'Buy a Wasilla duplex for $450,000 with 0% down. Unit 2 rents for $1,800/month. Your mortgage: ~$2,800. Net housing cost: ~$1,000/month for a $450K asset.' },
  { t: 'When You PCS', d: 'Rent out your unit when you leave. Now you have a fully rented investment property with rental income covering your mortgage entirely.' },
  { t: 'Scaling', d: 'Use this at each PCS. Two tours from now you own two Alaska properties, both cash-flowing, both appreciating on 0% down.' },
]

export default function AlaskaInvestmentProperty() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'system-ui,sans-serif', background: CR, color: DK, lineHeight: 1.65 }}>
      <nav style={{ background: DK, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, position: 'sticky', top: 0, zIndex: 40 }}>
        <div>
          <div style={{ fontWeight: 800, color: '#fff', fontSize: 15 }}>Derek Huit</div>
          <div style={{ fontSize: 11, color: GL, letterSpacing: '.1em', textTransform: 'uppercase' }}>Cardinal Financial | NMLS #203980</div>
        </div>
        <a href="tel:9072449368" style={{ background: GL, color: DK, padding: '8px 18px', borderRadius: 6, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>Call (907) 244-9368</a>
      </nav>

      <div style={{ background: `linear-gradient(150deg,${GN} 0%,${DK} 100%)`, padding: '72px 20px 56px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(16,185,129,.2)', border: '1px solid rgba(16,185,129,.4)', color: GL, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700, padding: '4px 12px', borderRadius: 3, marginBottom: 20 }}>
            Investment Property Financing
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Alaska Investment Property Loans:<br />DSCR, Multi-Family &amp; STR
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,.72)', maxWidth: 640, marginBottom: 28, lineHeight: 1.75, fontWeight: 300 }}>
            Alaska rental demand is driven by 25,000+ JBER military personnel, year-round tourism, and oilfield worker demand that no other state can match. DSCR loans, VA house hacks, Airbnb programs, and multi-family conventional.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:9072449368" style={{ background: GL, color: DK, padding: '11px 24px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Discuss Investment Strategy</a>
            <a href="#loans" style={{ border: '1px solid rgba(255,255,255,.35)', color: 'rgba(255,255,255,.85)', padding: '11px 24px', borderRadius: 6, fontWeight: 500, textDecoration: 'none', fontSize: 14 }}>See Loan Options</a>
          </div>
        </div>
      </div>

      <div style={{ background: GN, padding: '16px 20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
        {[['6-8%','Anchorage Cap Rate'],['25K+','JBER Renters'],['0%','VA House Hack Down'],['DSCR','No Income Docs'],['18+','Yrs AK Exp']].map(([v,l]) => (
          <div key={l} style={{ flex: '1 1 150px', textAlign: 'center', padding: '10px 16px', borderRight: '1px solid rgba(255,255,255,.18)' }}>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.6rem', lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>

      <section id="loans" style={{ padding: '64px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: DK, marginBottom: 10 }}>Alaska Investment Loan Types</h2>
        <p style={{ color: MT, maxWidth: 680, marginBottom: 36, lineHeight: 1.75 }}>Six different financing strategies. The right one depends on your income structure, down payment, and property type.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
          {loans.map(lt => (
            <div key={lt.type} style={{ background: '#fff', border: `1px solid ${BD}`, borderRadius: 10, padding: '22px 20px', borderLeft: `3px solid ${GL}` }}>
              <div style={{ fontWeight: 800, color: GN, fontSize: 16, marginBottom: 4 }}>{lt.type}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: GD, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 10 }}>Min Down: {lt.down}</div>
              <div style={{ fontSize: 13, color: DK, fontWeight: 500, lineHeight: 1.5, marginBottom: 8, padding: '8px 10px', background: '#ecfdf5', borderRadius: 4, borderLeft: `2px solid ${GL}` }}>{lt.key}</div>
              <p style={{ fontSize: 13, color: MT, lineHeight: 1.6 }}>Best for: {lt.ideal}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#ecfdf5', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: DK, marginBottom: 10 }}>Alaska Investment Market Guide 2025</h2>
          <p style={{ color: MT, maxWidth: 680, marginBottom: 32, lineHeight: 1.75 }}>Where to invest in Alaska in 2025 — cap rates, demand drivers, and financing considerations by market.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
              <thead>
                <tr>
                  {['Market','Type','Cap Rate','Demand Driver'].map(h => (
                    <th key={h} style={{ background: DK, color: '#fff', padding: '10px 16px', textAlign: 'left', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {markets.map(m => (
                  <tr key={m.area}>
                    <td style={{ padding: '10px 16px', borderBottom: `1px solid ${BD}`, fontWeight: 700, color: DK, fontSize: 14 }}>{m.area}</td>
                    <td style={{ padding: '10px 16px', borderBottom: `1px solid ${BD}`, color: MT, fontSize: 13 }}>{m.type}</td>
                    <td style={{ padding: '10px 16px', borderBottom: `1px solid ${BD}`, fontWeight: 700, color: GN, fontSize: 14 }}>{m.cap}</td>
                    <td style={{ padding: '10px 16px', borderBottom: `1px solid ${BD}`, color: MT, fontSize: 13 }}>{m.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: DK, padding: '64px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#fff', marginBottom: 10 }}>The VA House Hack: Alaska&apos;s #1 Wealth Strategy</h2>
          <p style={{ color: 'rgba(255,255,255,.6)', maxWidth: 680, marginBottom: 36, lineHeight: 1.75 }}>If you have VA eligibility, this is the most powerful investment strategy in Alaska.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            {hack.map(h => (
              <div key={h.t} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 8, padding: '20px 18px' }}>
                <div style={{ fontWeight: 700, color: GL, fontSize: 15, marginBottom: 8 }}>{h.t}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.65 }}>{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: GN, padding: '64px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to Build Your Alaska Portfolio?</h2>
        <p style={{ color: 'rgba(255,255,255,.75)', maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.75 }}>One strategy conversation. DSCR, VA house hack, or conventional — I map the right loan to your investment goals.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:9072449368" style={{ background: '#fff', color: GN, padding: '12px 28px', borderRadius: 6, fontWeight: 800, textDecoration: 'none', fontSize: 15 }}>Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff', padding: '12px 28px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Apply Online</a>
        </div>
        <a href="tel:9072449368" style={{ display: 'block', fontWeight: 800, fontSize: '2rem', color: '#a7f3d0', textDecoration: 'none', marginTop: 24 }}>(907) 244-9368</a>
      </section>

      <footer style={{ background: '#05100c', padding: '24px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: MT, lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
          Derek Huit | NMLS #203980 | Cardinal Financial Company, NMLS #66247 | Equal Housing Lender | Licensed in Alaska<br />
          (907) 244-9368 | askalaskamortgage.ai<br />
          Cap rate estimates are market averages. All loans subject to credit approval.
        </p>
      </footer>
    </main>
  )
}
