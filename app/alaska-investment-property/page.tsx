import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Investment Property Mortgage | DSCR, Multi-Family, STR | Derek Huit – NMLS #203980',
  description: 'Investment property loans in Alaska — DSCR loans, multi-family financing, Airbnb/STR mortgages, VA house hacking. Expert guidance from Derek Huit. Call (907) 244-9368.',
  keywords: 'Alaska investment property loan, DSCR loan Alaska, multi-family mortgage Anchorage, Airbnb mortgage Alaska, short term rental loan Alaska, duplex loan Anchorage, Alaska real estate investing',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-investment-property' },
}
export default function AlaskaInvestmentProperty() {
  const loanTypes = [
    {type:"DSCR Loan",down:"20-25%",key:"Qualifies on rental income — no W2s or tax returns required.",ideal:"Self-employed investors, those with complex income, investors scaling a portfolio"},
    {type:"VA Multi-Unit (House Hack)",down:"0%",key:"Buy a 2-4 unit property, live in one, rent the rest. Zero down payment for eligible veterans.",ideal:"Veterans and active duty at JBER — most powerful wealth strategy available"},
    {type:"Conventional Investment",down:"15-25%",key:"Standard investment property loan. 15% down on single-family, 25% on multi-family.",ideal:"Investors with strong W2 income and good credit building a conventional portfolio"},
    {type:"FHA Multi-Unit (Owner Occ)",down:"3.5%",key:"Buy up to a 4-unit property with FHA if you occupy one unit. Low down, strong leverage.",ideal:"First-time investors who want to house hack with minimal cash outlay"},
    {type:"Airbnb / STR Financing",down:"10-25%",key:"Special STR programs use projected short-term rental income for qualification — not just long-term comps.",ideal:"Girdwood, Kenai, Anchorage STR investors in tourist-heavy markets"},
    {type:"Cash-Out Refi for Investment",down:"N/A",key:"Pull equity from your primary residence to fund investment property down payments.",ideal:"Homeowners with equity who want to enter investment without liquidating savings"},
  ]
  const markets = [
    {area:"Anchorage – Midtown",type:"Long-term rental",cap:"6-7%",demand:"Year-round from JBER personnel and UAA students. Low vacancy."},
    {area:"Anchorage – South ANC",type:"STR + Long-term",cap:"5-6%",demand:"Strong STR for tourism + corporate travel. Higher entry price, lower yield."},
    {area:"Eagle River",type:"Long-term rental",cap:"6-7%",demand:"Military families from JBER. Very stable occupancy year-round."},
    {area:"Wasilla / Palmer",type:"Long-term rental",cap:"7-8%",demand:"Growing population, lower entry prices, yields above Anchorage. Best appreciation trajectory."},
    {area:"Girdwood",type:"Short-term rental",cap:"8-12%",demand:"Ski/summer tourism. Strong STR rates. Zoning allows STR. Lower inventory."},
    {area:"Kenai Peninsula",type:"STR + Seasonal",cap:"8-11%",demand:"Strong fishing tourism. Seasonal demand but high nightly rates during peak."},
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700;800&family=Roboto:wght@300;400;500&display=swap');
        :root{--dk:#0a1628;--mid:#132238;--green:#065f46;--green-lt:#10b981;--gold:#d97706;--gold-lt:#f59e0b;--cream:#f9fafb;--white:#fff;--muted:#64748b;--border:#e2e8f0;--frost:#ecfdf5}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Roboto',sans-serif;background:var(--cream);color:var(--dk);overflow-x:hidden;line-height:1.65}
        nav{background:var(--dk);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        nav strong{font-family:'Raleway',serif;font-size:1.1rem;color:#fff;font-weight:800}
        nav span{display:block;font-size:.68rem;color:var(--green-lt);letter-spacing:.12em;text-transform:uppercase}
        .ncta{background:var(--green-lt);color:var(--dk);padding:.6rem 1.4rem;border-radius:4px;font-weight:700;font-size:.88rem;text-decoration:none}
        .hero{background:linear-gradient(150deg,var(--green) 0%,var(--dk) 100%);padding:5rem 2rem 4rem;position:relative;overflow:hidden}
        .hero-deco{position:absolute;right:5%;top:50%;transform:translateY(-50%);font-size:12rem;opacity:.05;font-family:'Raleway',serif;font-weight:800;color:#fff;pointer-events:none;line-height:1}
        .hero-inner{max-width:820px;margin:0 auto;animation:rise .8s ease both;position:relative}
        @keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .badge{display:inline-block;background:rgba(16,185,129,.2);border:1px solid rgba(16,185,129,.4);color:var(--green-lt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        h1{font-family:'Raleway',serif;font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;color:#fff;line-height:1.1;margin-bottom:1rem}
        h1 em{font-style:normal;color:var(--green-lt)}
        .hero p{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .hbtns{display:flex;gap:1rem;flex-wrap:wrap}
        .bp{background:var(--green-lt);color:var(--dk);padding:.9rem 2rem;border-radius:4px;font-weight:700;text-decoration:none;transition:all .2s}
        .bp:hover{background:#34d399;transform:translateY(-2px)}
        .bo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:4px;font-weight:500;text-decoration:none}
        .sbar{background:var(--green);padding:1.4rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .si{flex:1;min-width:150px;max-width:220px;text-align:center;padding:.6rem 1rem;border-right:1px solid rgba(255,255,255,.2)}
        .si:last-child{border-right:none}
        .sv{font-family:'Raleway',serif;font-size:1.8rem;font-weight:800;color:#fff;display:block;line-height:1}
        .sl{font-size:.7rem;color:rgba(255,255,255,.75);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .sec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .sec-alt{background:var(--frost)}
        .sec-dk{background:var(--dk)}
        h2{font-family:'Raleway',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);font-weight:800;color:var(--dk);margin-bottom:.8rem}
        h2 em{font-style:normal;color:var(--green)}
        .sec-dk h2{color:#fff}
        .sec-dk h2 em{color:var(--green-lt)}
        .intro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .sec-dk .intro{color:rgba(255,255,255,.6)}
        .lgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .lcard{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.8rem;transition:all .25s}
        .lcard:hover{border-color:var(--green-lt);box-shadow:0 6px 20px rgba(6,95,70,.08);transform:translateY(-3px)}
        .lcard-type{font-family:'Raleway',serif;font-size:1.1rem;font-weight:800;color:var(--green);margin-bottom:.4rem}
        .lcard-down{font-size:.8rem;font-weight:600;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.8rem}
        .lcard-key{font-size:.88rem;color:var(--dk);font-weight:500;line-height:1.5;margin-bottom:.5rem;padding:.6rem .8rem;background:var(--frost);border-radius:4px;border-left:2px solid var(--green-lt)}
        .lcard p{font-size:.84rem;color:var(--muted);line-height:1.6}
        .mwrap{overflow-x:auto;margin-top:2rem}
        table{width:100%;border-collapse:collapse;min-width:560px}
        th{background:var(--dk);color:#fff;padding:.9rem 1.2rem;text-align:left;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase}
        th.gh{background:var(--green)}
        td{padding:.85rem 1.2rem;border-bottom:1px solid var(--border);font-size:.86rem;color:var(--muted)}
        td.bold{color:var(--dk);font-weight:600}
        .dscr-box{background:linear-gradient(135deg,var(--green),#023020);border-radius:10px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(16,185,129,.25)}
        .dscr-box h3{font-family:'Raleway',serif;font-size:1.5rem;font-weight:800;color:var(--green-lt);margin-bottom:.8rem}
        .dscr-box p{font-size:.92rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:.8rem}
        .dscr-box p:last-child{margin-bottom:0}
        .cta{background:var(--green);padding:5rem 2rem;text-align:center}
        .cta h2{color:#fff;margin-bottom:.8rem}
        .cta h2 em{color:#a7f3d0}
        .cta p{color:rgba(255,255,255,.75);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phd{font-family:'Raleway',serif;font-size:2rem;font-weight:800;color:var(--gold-lt);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#05100c;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--green-lt);text-decoration:none}
        @media(max-width:768px){.hero{padding:4rem 1.2rem 3rem}.sec{padding:3.5rem 1.2rem}.si{min-width:120px;border-right:none;border-bottom:1px solid rgba(255,255,255,.2)}.si:last-child{border-bottom:none}.cta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){h1{font-size:2rem}.hbtns,.cta-btns{flex-direction:column}}
      `}</style>
      <nav>
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="ncta">Call (907) 244-9368</a>
      </nav>
      <div className="hero">
        <div className="hero-deco">INVEST</div>
        <div className="hero-inner">
          <div className="badge">Investment Property Financing</div>
          <h1>Alaska <em>Investment Property</em><br />Loans: DSCR, Multi-Family & STR</h1>
          <p>Alaska&apos;s rental market is driven by 25,000+ JBER military personnel, year-round tourism, and oilfield worker demand that no other state can match. I specialize in financing properties that generate income &mdash; DSCR loans, VA house hacks, Airbnb/STR programs, and multi-family conventional.</p>
          <div className="hbtns">
            <a href="tel:9072449368" className="bp">Discuss Investment Strategy</a>
            <a href="#loans" className="bo">See Loan Options &rarr;</a>
          </div>
        </div>
      </div>
      <div className="sbar">
        {[["$6-8%","Anchorage Cap Rate"],["25K+","JBER Renters"],["0%","VA House Hack Down"],["DSCR","No Income Docs Req"],["18+","Yrs AK Exp"]].map(([v,l])=>(
          <div key={l} className="si"><span className="sv">{v}</span><div className="sl">{l}</div></div>
        ))}
      </div>
      <div id="loans">
        <section className="sec">
          <h2>Alaska Investment <em>Loan Types</em></h2>
          <p className="intro">Six different financing strategies for Alaska investment properties. The right one depends on your income structure, down payment capacity, and property type.</p>
          <div className="lgrid">
            {loanTypes.map(lt=>(
              <div key={lt.type} className="lcard">
                <div className="lcard-type">{lt.type}</div>
                <div className="lcard-down">Min Down: {lt.down}</div>
                <div className="lcard-key">{lt.key}</div>
                <p>Best for: {lt.ideal}</p>
              </div>
            ))}
          </div>
          <div className="dscr-box">
            <h3>DSCR Loans: The Alaska Investor&apos;s Shortcut</h3>
            <p>DSCR (Debt Service Coverage Ratio) loans qualify on the property&apos;s rental income, not your personal income. If the rent covers the mortgage, you qualify. No W2s, no tax returns, no income documentation. This is transformative for self-employed investors, real estate professionals, and anyone whose tax returns don&apos;t reflect their actual financial strength.</p>
            <p>Alaska&apos;s strong rental market &mdash; driven by JBER, oil & gas, and tourism &mdash; means DSCR ratios on well-priced properties regularly exceed the 1.25 minimum. I structure DSCR loans starting at 20% down for single-family and 25% for multi-family.</p>
          </div>
        </section>
      </div>
      <div className="sec-alt">
        <section className="sec">
          <h2>Alaska Investment <em>Market Guide</em></h2>
          <p className="intro">Where to invest in Alaska in 2025 &mdash; cap rates, demand drivers, and financing considerations by market.</p>
          <div className="mwrap">
            <table>
              <thead><tr><th>Market</th><th className="gh">Property Type</th><th>Cap Rate</th><th>Demand Driver</th></tr></thead>
              <tbody>
                {markets.map(m=>(
                  <tr key={m.area}><td className="bold">{m.area}</td><td>{m.type}</td><td>{m.cap}</td><td>{m.demand}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="sec-dk">
        <section className="sec">
          <h2>The VA <em>House Hack</em>: Alaska&apos;s #1 Wealth Strategy</h2>
          <p className="intro">If you have VA eligibility, this is the most powerful investment strategy available in Alaska.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.4rem",marginTop:"2rem"}}>
            {[["How It Works","Buy a 2-4 unit property using your VA benefit. Zero down payment, no PMI. Live in one unit, rent the rest. The rental income often covers 50-80% of your mortgage payment — or more."],["The Numbers","Buy a Wasilla duplex for $450,000 with 0% down. Unit 2 rents for $1,800/month. Your mortgage at current rates: ~$2,800. Net housing cost: $1,000/month. You just bought a $450K property for less than a 1BR apartment."],["When You PCS","Rent out your unit when you leave. Now you have a fully rented investment property. The rental income covers your mortgage entirely. You start the same strategy at your next duty station."],["Scaling","Use this at each PCS. Two tours from now, you own two Alaska properties — both cash-flowing, both appreciating. Alaska veterans who started this in 2015 have built significant net worth on this single strategy."]].map(([t,d])=>(
              <div key={t} style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(16,185,129,.15)",borderRadius:"8px",padding:"1.6rem"}}>
                <h3 style={{fontSize:"1rem",fontWeight:600,color:var("--green-lt"),marginBottom:".5rem"}}>{t}</h3>
                <p style={{fontSize:".86rem",color:"rgba(255,255,255,.55)",lineHeight:1.65}}>{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="cta">
        <h2>Ready to Build Your <em>Alaska Portfolio?</em></h2>
        <p>One strategy conversation. I&apos;ll map the right loan structure to your investment goals and help you understand what you can actually buy today.</p>
        <div className="cta-btns">
          <a href="tel:9072449368" className="bp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="bo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="phd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        Cap rate estimates are market averages and not guarantees of investment returns. All loans subject to credit approval.</p>
      </footer>
    </>
  )
}
