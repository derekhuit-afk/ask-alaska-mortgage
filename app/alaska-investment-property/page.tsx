import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Investment Property Mortgage | DSCR, Multi-Family, STR | Derek Huit',
  description: 'Investment property loans in Alaska. DSCR loans, multi-family financing, STR mortgages, VA house hacking. Expert guidance from Derek Huit. Call (907) 244-9368.',
  keywords: 'Alaska investment property loan, DSCR loan Alaska, multi-family mortgage Anchorage, Airbnb mortgage Alaska, duplex loan Anchorage',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-investment-property' },
}
export default function AlaskaInvestmentProperty() {
  const loanTypes = [
    {type:"DSCR Loan",down:"20-25%",key:"Qualifies on rental income. No W2s or tax returns required.",ideal:"Self-employed investors scaling a portfolio"},
    {type:"VA Multi-Unit (House Hack)",down:"0%",key:"Buy a 2-4 unit property, live in one, rent the rest. Zero down for eligible veterans.",ideal:"Veterans and active duty at JBER"},
    {type:"Conventional Investment",down:"15-25%",key:"Standard investment property loan. 15% down on single-family, 25% on multi-family.",ideal:"Investors with strong W2 income"},
    {type:"FHA Multi-Unit",down:"3.5%",key:"Buy up to a 4-unit with FHA if you occupy one unit. Low down payment.",ideal:"First-time investors house hacking"},
    {type:"STR / Airbnb Financing",down:"10-25%",key:"Projected short-term rental income used for qualification.",ideal:"Girdwood, Kenai, Anchorage STR investors"},
    {type:"Cash-Out for Investment",down:"N/A",key:"Pull equity from your primary residence to fund investment down payments.",ideal:"Homeowners with equity entering investment"},
  ]
  const markets = [
    {area:"Anchorage Midtown",type:"Long-term rental",cap:"6-7%",demand:"Year-round from JBER personnel and UAA students."},
    {area:"South Anchorage",type:"STR + Long-term",cap:"5-6%",demand:"Strong STR for tourism and corporate travel."},
    {area:"Eagle River",type:"Long-term rental",cap:"6-7%",demand:"Military families from JBER. Very stable occupancy."},
    {area:"Wasilla / Palmer",type:"Long-term rental",cap:"7-8%",demand:"Growing population, lower entry prices, best appreciation."},
    {area:"Girdwood",type:"Short-term rental",cap:"8-12%",demand:"Ski and summer tourism. Strong STR rates."},
    {area:"Kenai Peninsula",type:"STR + Seasonal",cap:"8-11%",demand:"Strong fishing tourism. High nightly rates during peak."},
  ]
  const hacks = [
    ["How It Works","Buy a 2-4 unit property with your VA benefit. Zero down payment, no PMI. Live in one unit, rent the rest. Rental income often covers 50-80% of your mortgage."],
    ["The Numbers","Buy a Wasilla duplex for $450,000 with 0% down. Unit 2 rents for $1,800/month. Net housing cost after rent: roughly $1,000/month. You bought a $450K property for less than a 1BR apartment."],
    ["When You PCS","Rent your unit when you leave. Now you have a fully rented investment property. The rental income covers your mortgage. Start the strategy at your next duty station."],
    ["Scaling","Use this at each PCS. Two tours from now, you own two Alaska properties, both cash-flowing and appreciating."],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700;800&family=Roboto:wght@300;400;500&display=swap');
        :root{--idk:#0a1628;--ig:#065f46;--ilt:#10b981;--igold:#d97706;--ic:#f9fafb;--iw:#fff;--imu:#64748b;--ibrd:#e2e8f0;--ifr:#ecfdf5}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Roboto',sans-serif;background:var(--ic);color:var(--idk);overflow-x:hidden;line-height:1.65}
        .inav{background:var(--idk);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .inav strong{font-family:'Raleway',sans-serif;font-size:1.1rem;color:#fff;font-weight:800}
        .inav span{display:block;font-size:.68rem;color:var(--ilt);letter-spacing:.12em;text-transform:uppercase}
        .incta{background:var(--ilt);color:var(--idk);padding:.6rem 1.4rem;border-radius:4px;font-weight:700;font-size:.88rem;text-decoration:none}
        .ihero{background:linear-gradient(150deg,var(--ig) 0%,var(--idk) 100%);padding:5rem 2rem 4rem;position:relative;overflow:hidden}
        .ihero-deco{position:absolute;right:5%;top:50%;transform:translateY(-50%);font-size:12vw;opacity:.04;font-family:'Raleway',sans-serif;font-weight:800;color:#fff;pointer-events:none}
        .ihi{max-width:820px;margin:0 auto;animation:irise .8s ease both;position:relative}
        @keyframes irise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .ibadge{display:inline-block;background:rgba(16,185,129,.2);border:1px solid rgba(16,185,129,.4);color:var(--ilt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        .ih1{font-family:'Raleway',sans-serif;font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;color:#fff;line-height:1.1;margin-bottom:1rem}
        .ih1 em{font-style:normal;color:var(--ilt)}
        .ihs{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .ihb{display:flex;gap:1rem;flex-wrap:wrap}
        .ibp{background:var(--ilt);color:var(--idk);padding:.9rem 2rem;border-radius:4px;font-weight:700;text-decoration:none}
        .ibo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:4px;font-weight:500;text-decoration:none}
        .isbar{background:var(--ig);padding:1.4rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .isi{flex:1;min-width:150px;max-width:220px;text-align:center;padding:.6rem 1rem;border-right:1px solid rgba(255,255,255,.2)}
        .isi:last-child{border-right:none}
        .isv{font-family:'Raleway',sans-serif;font-size:1.8rem;font-weight:800;color:#fff;display:block;line-height:1}
        .isl{font-size:.7rem;color:rgba(255,255,255,.75);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .isec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .isec-alt{background:var(--ifr)}
        .isec-dk{background:var(--idk)}
        .ih2{font-family:'Raleway',sans-serif;font-size:clamp(1.7rem,3.5vw,2.5rem);font-weight:800;color:var(--idk);margin-bottom:.8rem}
        .ih2 em{font-style:normal;color:var(--ig)}
        .isec-dk .ih2{color:#fff}
        .isec-dk .ih2 em{color:var(--ilt)}
        .iintro{font-size:1rem;color:var(--imu);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .isec-dk .iintro{color:rgba(255,255,255,.6)}
        .ilgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .ilcard{background:var(--iw);border:1px solid var(--ibrd);border-radius:8px;padding:1.8rem;transition:all .25s}
        .ilcard:hover{border-color:var(--ilt);box-shadow:0 6px 20px rgba(6,95,70,.08);transform:translateY(-3px)}
        .ilt-type{font-family:'Raleway',sans-serif;font-size:1.1rem;font-weight:800;color:var(--ig);margin-bottom:.4rem}
        .ilt-down{font-size:.8rem;font-weight:600;color:var(--igold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.8rem}
        .ilt-key{font-size:.88rem;color:var(--idk);font-weight:500;line-height:1.5;margin-bottom:.5rem;padding:.6rem .8rem;background:var(--ifr);border-radius:4px;border-left:2px solid var(--ilt)}
        .ilcard p{font-size:.84rem;color:var(--imu);line-height:1.6}
        .imwrap{overflow-x:auto;margin-top:2rem}
        table{width:100%;border-collapse:collapse;min-width:560px}
        th{background:var(--idk);color:#fff;padding:.9rem 1.2rem;text-align:left;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase}
        th.igh{background:var(--ig)}
        td{padding:.85rem 1.2rem;border-bottom:1px solid var(--ibrd);font-size:.86rem;color:var(--imu)}
        td.itb{color:var(--idk);font-weight:600}
        .idbox{background:linear-gradient(135deg,#065f46,#023020);border-radius:10px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(16,185,129,.25)}
        .idbox h3{font-family:'Raleway',sans-serif;font-size:1.5rem;font-weight:800;color:var(--ilt);margin-bottom:.8rem}
        .idbox p{font-size:.92rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:.8rem}
        .iwgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.4rem;margin-top:2rem}
        .iwitem{background:rgba(255,255,255,.05);border:1px solid rgba(16,185,129,.15);border-radius:8px;padding:1.6rem}
        .iwitem h3{font-size:1rem;font-weight:600;color:var(--ilt);margin-bottom:.5rem}
        .iwitem p{font-size:.86rem;color:rgba(255,255,255,.55);line-height:1.65}
        .icta{background:var(--ig);padding:5rem 2rem;text-align:center}
        .icta .ih2{color:#fff}
        .icta p{color:rgba(255,255,255,.75);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .icb{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .iphd{font-family:'Raleway',sans-serif;font-size:2rem;font-weight:800;color:#f59e0b;text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#05100c;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--imu);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--ilt);text-decoration:none}
        @media(max-width:768px){.ihero{padding:4rem 1.2rem 3rem}.isec{padding:3.5rem 1.2rem}.isi{min-width:120px;border-right:none;border-bottom:1px solid rgba(255,255,255,.2)}.isi:last-child{border-bottom:none}.icta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){.ih1{font-size:2rem}.ihb,.icb{flex-direction:column}}
      `}</style>
      <nav className="inav">
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="incta">Call (907) 244-9368</a>
      </nav>
      <div className="ihero">
        <div className="ihero-deco">INVEST</div>
        <div className="ihi">
          <div className="ibadge">Investment Property Financing</div>
          <h1 className="ih1">Alaska <em>Investment Property</em><br />Loans: DSCR, Multi-Family &amp; STR</h1>
          <p className="ihs">Alaska&apos;s rental market is driven by 25,000+ JBER military personnel, year-round tourism, and oilfield worker demand no other state can match. I specialize in financing properties that generate income.</p>
          <div className="ihb">
            <a href="tel:9072449368" className="ibp">Discuss Investment Strategy</a>
            <a href="#iloans" className="ibo">See Loan Options &rarr;</a>
          </div>
        </div>
      </div>
      <div className="isbar">
        {[["6-8%","ANC Cap Rate"],["25K+","JBER Renters"],["0%","VA House Hack"],["DSCR","No Income Docs"],["18+","Yrs AK Exp"]].map(([v,l])=>(
          <div key={l} className="isi"><span className="isv">{v}</span><div className="isl">{l}</div></div>
        ))}
      </div>
      <div id="iloans">
        <section className="isec">
          <h2 className="ih2">Alaska Investment <em>Loan Types</em></h2>
          <p className="iintro">Six financing strategies for Alaska investment properties. The right one depends on your income structure, down payment, and property type.</p>
          <div className="ilgrid">
            {loanTypes.map(lt=>(
              <div key={lt.type} className="ilcard">
                <div className="ilt-type">{lt.type}</div>
                <div className="ilt-down">Min Down: {lt.down}</div>
                <div className="ilt-key">{lt.key}</div>
                <p>Best for: {lt.ideal}</p>
              </div>
            ))}
          </div>
          <div className="idbox">
            <h3>DSCR Loans: The Alaska Investor&apos;s Shortcut</h3>
            <p>DSCR (Debt Service Coverage Ratio) loans qualify on the property&apos;s rental income, not your personal income. No W2s, no tax returns, no income documentation.</p>
            <p>Alaska&apos;s strong rental market means DSCR ratios on well-priced properties regularly exceed the 1.25 minimum. I structure DSCR loans starting at 20% down for single-family and 25% for multi-family.</p>
          </div>
        </section>
      </div>
      <div className="isec-alt">
        <section className="isec">
          <h2 className="ih2">Alaska Investment <em>Market Guide</em></h2>
          <p className="iintro">Where to invest in Alaska in 2025 &mdash; cap rates, demand drivers, and financing considerations by market.</p>
          <div className="imwrap">
            <table>
              <thead><tr><th>Market</th><th className="igh">Property Type</th><th>Cap Rate</th><th>Demand Driver</th></tr></thead>
              <tbody>
                {markets.map(m=>(
                  <tr key={m.area}><td className="itb">{m.area}</td><td>{m.type}</td><td>{m.cap}</td><td>{m.demand}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="isec-dk">
        <section className="isec">
          <h2 className="ih2">The VA <em>House Hack</em>: Alaska&apos;s #1 Wealth Strategy</h2>
          <p className="iintro">If you have VA eligibility, this is the most powerful investment strategy available in Alaska.</p>
          <div className="iwgrid">
            {hacks.map(([t,d])=>(
              <div key={t} className="iwitem"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </section>
      </div>
      <div className="icta">
        <h2 className="ih2">Ready to Build Your <em>Alaska Portfolio?</em></h2>
        <p>One strategy conversation. I map the right loan structure to your goals and help you understand what you can buy today.</p>
        <div className="icb">
          <a href="tel:9072449368" className="ibp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="ibo" style={{borderColor:"rgba(255,255,255,.4)",color:"rgba(255,255,255,.85)"}}>Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="iphd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        Cap rate estimates are market averages and not guarantees of investment returns. All loans subject to credit approval.</p>
      </footer>
    </>
  )
}
