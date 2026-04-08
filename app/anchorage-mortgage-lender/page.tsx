import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anchorage Mortgage Lender | Derek Huit | Cardinal Financial \u2013 NMLS #203980',
  description: "Derek Huit is Anchorage's most experienced mortgage lender \u2014 18+ years, $1B+ closed, and built from Alaska. VA, Conventional, FHA, Jumbo, AHFC. Call (907) 244-9368.",
  keywords: 'Anchorage mortgage lender, Anchorage mortgage broker, mortgage Anchorage AK, home loan Anchorage Alaska, best mortgage lender Anchorage, Anchorage VA loan, AHFC lender Anchorage',
  alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-mortgage-lender' },
}

export default function AnchorageMortgageLender() {
  const programs = [
    ["Military","VA Home Loans","Zero down payment, no PMI, competitive rates. Anchorage has Alaska's largest military population. I close VA loans in 21 days or less."],
    ["Purchase","Conventional Loans","Alaska's 2025 conforming loan limit is $1,209,750. Down payment options from 3% to 20%."],
    ["First-Time","FHA Loans","3.5% down payment, flexible credit requirements. Ideal for first-time Anchorage homebuyers."],
    ["State Program","AHFC Loans","Alaska Housing Finance Corporation below-market rates and down payment assistance for eligible Alaska homebuyers."],
    ["High Value","Jumbo Loans","Above $1,209,750? Competitive jumbo products for qualified Anchorage borrowers."],
    ["Investment","Investment & STR Loans","Anchorage's rental market is strong year-round. I specialize in investment properties and short-term rentals."],
    ["Refinance","Rate & Term Refinance","Lower your rate, shorten your term. I'll run the math honestly."],
    ["Equity","Cash-Out Refinance","Anchorage homeowners have built significant equity. Access it for renovations, investments, or debt consolidation."],
  ]
  const hoods = [
    ["Eagle River","Popular with military families. Strong schools, outdoor access, lower prices. 20 min from JBER."],
    ["South Anchorage","Higher-value homes, Hillside neighborhoods, proximity to trails. Strong appreciation history."],
    ["Midtown","Central location, condo market, investment properties near UAA."],
    ["Airport Heights","Established neighborhood close to JBER and downtown. Strong FHA market."],
    ["Government Hill","Closest civilian neighborhood to JBER. Strong VA loan market."],
    ["Girdwood","Resort community 40 min south. Strong short-term rental market."],
    ["Wasilla / Palmer","Mat-Su Valley suburbs. More square footage per dollar. 45 min from Anchorage."],
    ["Statewide Alaska","Licensed statewide. Fairbanks, Juneau, Homer, Kenai, and beyond."],
  ]
  const why = [
    ["\u{1F3D4}","Genuine Alaska Experience","I understand Anchorage's neighborhoods, military base dynamics, rural property challenges, and the seasonal timing that affects Alaska closings."],
    ["\u26A1","Cardinal Financial Infrastructure","Backed by Cardinal Financial, one of the nation's top independent mortgage lenders. Deep product shelf and in-house underwriting."],
    ["\u{1F4CA}","Data-Driven Advice","I've analyzed 7+ years of Alaska HMDA lending data. I know which programs perform best in this market."],
    ["\u{1F91D}","No Pressure, No Games","Honest advice builds lasting relationships. If it doesn't pencil out for you, I'll say so."],
    ["\u{1F4F1}","Modern Process","Digital application, real-time loan status, e-signatures, remote closing options."],
    ["\u{1F396}","Military Specialist","VA loans are one of my primary specialties. I understand PCS timelines, JBER waitlists, and BAH math."],
  ]
  const reviews = [
    ["\"Derek was incredibly knowledgeable and very helpful during our purchase and underwriting process.\"","Anchorage Homebuyer"],
    ["\"The application process was fast and easy and I received the pre-approval letter in a short time period.\"","Anchorage First-Time Buyer"],
    ["\"Derek's expertise gave my wife and I assurance and confidence for our home buying process.\"","Anchorage Homeowner"],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        :root{--abg:#f5f2ee;--acream:#ede9e2;--aw:#ffffff;--adk:#1a1710;--abr:#5c4f3a;--agd:#a07c3a;--agl:#c8a45a;--atl:#2a6e6e;--amu:#7a7162;--abrd:#d9d3c8}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:var(--abg);color:var(--adk);overflow-x:hidden;line-height:1.65}
        .anav{background:var(--adk);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .anav-brand strong{font-family:'DM Serif Display',serif;font-size:1.15rem;color:#fff}
        .anav-brand span{display:block;font-size:.7rem;color:var(--agl);letter-spacing:.12em;text-transform:uppercase}
        .anav-cta{background:var(--agl);color:var(--adk);padding:.6rem 1.4rem;border-radius:4px;font-weight:600;font-size:.88rem;text-decoration:none}
        .ahero{background:var(--adk);position:relative;overflow:hidden;padding:7rem 2rem 6rem;display:flex;align-items:center;min-height:80vh}
        .ahero-deco{position:absolute;top:2rem;right:2rem;font-size:9rem;opacity:.06;line-height:1;font-family:'DM Serif Display',serif;color:var(--agl);user-select:none}
        .ahero-content{position:relative;max-width:780px;animation:riseIn .9s ease both}
        @keyframes riseIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .aeyebrow{display:inline-block;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:var(--agl);margin-bottom:1.5rem}
        .ah1{font-family:'DM Serif Display',serif;font-size:clamp(2.6rem,5.5vw,4.4rem);line-height:1.08;color:#fff;margin-bottom:1.2rem}
        .ah1 em{font-style:italic;color:var(--agl)}
        .ahero-sub{font-size:clamp(1rem,2vw,1.15rem);color:rgba(255,255,255,.72);font-weight:300;max-width:600px;margin-bottom:2.5rem;line-height:1.75}
        .aactions{display:flex;gap:1rem;flex-wrap:wrap}
        .abd{background:var(--agl);color:var(--adk);padding:.9rem 2.2rem;border-radius:4px;font-weight:600;font-size:.95rem;text-decoration:none}
        .abo{border:1px solid rgba(255,255,255,.35);color:rgba(255,255,255,.85);padding:.9rem 2rem;border-radius:4px;font-weight:500;font-size:.95rem;text-decoration:none}
        .acreds{background:var(--acream);border-bottom:1px solid var(--abrd);padding:1.8rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .acred{flex:1;min-width:150px;max-width:230px;text-align:center;padding:.8rem 1.5rem;border-right:1px solid var(--abrd)}
        .acred:last-child{border-right:none}
        .acval{font-family:'DM Serif Display',serif;font-size:1.9rem;color:var(--agd);display:block}
        .aclbl{font-size:.75rem;color:var(--amu);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .asec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .asec-alt{background:var(--aw)}
        .asec-dk{background:var(--adk)}
        .ah2{font-family:'DM Serif Display',serif;font-size:clamp(1.9rem,3.5vw,2.7rem);color:var(--adk);margin-bottom:.8rem;line-height:1.2}
        .ah2 em{font-style:italic;color:var(--agd)}
        .asec-dk .ah2{color:#fff}
        .aintro{font-size:1rem;color:var(--abr);max-width:680px;margin-bottom:3rem;line-height:1.75;font-weight:300}
        .asec-dk .aintro{color:rgba(255,255,255,.65)}
        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.5rem;margin-top:2rem}
        .pcard{background:var(--aw);border:1px solid var(--abrd);border-radius:10px;padding:1.8rem;transition:all .25s}
        .pcard:hover{border-color:var(--agd);box-shadow:0 4px 20px rgba(160,124,58,.12);transform:translateY(-3px)}
        .pbadge{display:inline-block;background:var(--acream);border:1px solid var(--abrd);border-radius:20px;font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--agd);padding:.25rem .75rem;margin-bottom:.9rem}
        .pcard h3{font-family:'DM Serif Display',serif;font-size:1.3rem;color:var(--adk);margin-bottom:.6rem}
        .pcard p{font-size:.88rem;color:var(--amu);line-height:1.65}
        .ahfcbox{background:linear-gradient(135deg,#1e3a3a,#152a2a);border-radius:12px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(61,152,152,.3)}
        .ahfcbadge{background:var(--atl);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:.1em;padding:.3rem .8rem;border-radius:20px;display:inline-block;text-transform:uppercase;margin-bottom:1rem}
        .ahfcbox h3{font-family:'DM Serif Display',serif;font-size:1.5rem;color:#fff;margin-bottom:.8rem}
        .ahfcbox p{font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.7}
        .ahfcbox ul{list-style:none;margin-top:1rem;display:flex;flex-direction:column;gap:.5rem}
        .ahfcbox li{font-size:.88rem;color:rgba(255,255,255,.75);padding-left:1.5rem;position:relative}
        .ahfcbox li::before{content:"\u2192";position:absolute;left:0;color:#3d9898}
        .wgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;margin-top:2rem}
        .witem{display:flex;gap:1.2rem;align-items:flex-start}
        .wicon{width:44px;height:44px;border-radius:8px;background:var(--atl);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
        .witem h3{font-size:.97rem;font-weight:600;color:#fff;margin-bottom:.4rem}
        .witem p{font-size:.86rem;color:rgba(255,255,255,.55);line-height:1.6}
        .hgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem}
        .hood{background:var(--acream);border:1px solid var(--abrd);border-radius:8px;padding:1.2rem;transition:all .2s}
        .hood:hover{background:var(--aw);border-color:var(--agl)}
        .hood h3{font-size:.95rem;font-weight:600;color:var(--adk);margin-bottom:.4rem}
        .hood p{font-size:.8rem;color:var(--amu);line-height:1.55}
        .aproc{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-top:2rem;counter-reset:steps}
        .apstep{text-align:center;padding:1.8rem 1.2rem;background:var(--aw);border:1px solid var(--abrd);border-radius:10px;counter-increment:steps;position:relative}
        .apstep::before{content:counter(steps);position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:32px;height:32px;border-radius:50%;background:var(--agd);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem}
        .apstep h3{font-size:.95rem;font-weight:600;color:var(--adk);margin-bottom:.5rem;margin-top:.5rem}
        .apstep p{font-size:.82rem;color:var(--amu);line-height:1.6}
        .revgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}
        .rcard{background:var(--aw);border:1px solid var(--abrd);border-radius:10px;padding:1.8rem}
        .stars{color:var(--agd);font-size:1rem;margin-bottom:.8rem;letter-spacing:.1em}
        .rcard p{font-size:.88rem;color:#2e2b24;line-height:1.7;font-style:italic;margin-bottom:1rem}
        .rvwr{font-size:.8rem;color:var(--amu);font-weight:600;font-style:normal}
        .acta-sec{background:var(--adk);padding:6rem 2rem;text-align:center}
        .acta-sec h2{font-family:'DM Serif Display',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:1rem}
        .acta-sec h2 em{color:var(--agl);font-style:italic}
        .acta-sec p{color:rgba(255,255,255,.65);max-width:540px;margin:0 auto 2.5rem;line-height:1.75}
        .acta-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .aphd{font-family:'DM Serif Display',serif;font-size:2.2rem;color:var(--agl);text-decoration:none;display:block;margin-top:1.5rem}
        .anmlsnote{font-size:.76rem;color:rgba(255,255,255,.3);margin-top:1.5rem}
        .afoot-sec{background:#0d0c09;padding:2rem;border-top:1px solid rgba(160,124,58,.2);text-align:center}
        .afoot-sec p{font-size:.75rem;color:var(--amu);line-height:1.8;max-width:720px;margin:0 auto}
        .afoot-sec a{color:var(--agl);text-decoration:none}
        @media(max-width:768px){.anav{padding:.8rem 1.2rem}.ahero{padding:5rem 1.2rem 3.5rem;min-height:auto}.asec{padding:3.5rem 1.2rem}.acred{min-width:120px;border-right:none;border-bottom:1px solid var(--abrd)}.acred:last-child{border-bottom:none}.acta-sec{padding:4rem 1.2rem}}
        @media(max-width:420px){.ah1{font-size:2.2rem}.aactions,.acta-actions{flex-direction:column}}
      `}</style>

      <nav className="anav">
        <div className="anav-brand">
          <strong>Derek Huit</strong>
          <span>Cardinal Financial \u00B7 NMLS #203980</span>
        </div>
        <a href="tel:9072449368" className="anav-cta">Call (907) 244-9368</a>
      </nav>

      <section className="ahero">
        <div className="ahero-deco">AK</div>
        <div className="ahero-content">
          <span className="aeyebrow">Anchorage Mortgage Lender</span>
          <h1 className="ah1">Anchorage&apos;s Most<br /><em>Experienced</em><br />Mortgage Lender.</h1>
          <p className="ahero-sub">18+ years. $1 billion in closings. Born and built from Alaska. Derek Huit at Cardinal Financial helps Anchorage families buy homes with straight talk, competitive rates, and a process that actually closes on time.</p>
          <div className="aactions">
            <a href="tel:9072449368" className="abd">Get Pre-Approved Today</a>
            <a href="#programs" className="abo">See Loan Programs &rarr;</a>
          </div>
        </div>
      </section>

      <div className="acreds">
        {[["18+","Years in Alaska"],["$1B+","Loans Closed"],["All","Loan Types"],["AHFC","Approved Programs"],["AK","Licensed Statewide"]].map(([v,l])=>(
          <div key={l} className="acred"><span className="acval">{v}</span><div className="aclbl">{l}</div></div>
        ))}
      </div>

      <div id="programs">
        <section className="asec">
          <span className="aeyebrow">What We Offer</span>
          <h2 className="ah2">Every Loan <em>Anchorage</em> Needs</h2>
          <p className="aintro">Whether you&apos;re buying your first home near JBER, refinancing in South Anchorage, or investing in a multi-unit near UAA &mdash; I have the loan program and the Alaska experience to close it right.</p>
          <div className="pgrid">
            {programs.map(([badge,title,desc])=>(
              <div key={title} className="pcard">
                <span className="pbadge">{badge}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="ahfcbox" style={{marginTop:"3rem"}}>
            <span className="ahfcbadge">Alaska-Only Advantage</span>
            <h3>Alaska Housing Finance Corporation (AHFC) Programs</h3>
            <p>AHFC offers interest rate reductions and down payment assistance programs exclusively for Alaska residents. I&apos;ve closed hundreds of AHFC loans and know these programs inside and out.</p>
            <ul>
              {["First Home Program \u2014 below-market rates for first-time buyers","Veterans Interest Rate Preference \u2014 1% rate reduction on first $50,000","Supplemental Loan \u2014 stack with your primary mortgage for renovations","Energy Efficiency programs \u2014 rate reductions for energy-efficient properties","Manufactured Home programs \u2014 financing for eligible AK manufactured housing"].map(item=>(<li key={item}>{item}</li>))}
            </ul>
          </div>
        </section>
      </div>

      <div className="asec-dk">
        <section className="asec">
          <span className="aeyebrow" style={{color:"var(--agl)"}}>Why Derek Huit</span>
          <h2 className="ah2">18 Years.<br /><em style={{color:"var(--agl)"}}>$1 Billion.</em><br />Built from Alaska.</h2>
          <p className="aintro">I&apos;m not a call center. I&apos;m not a national lender who parachuted into Alaska. I&apos;ve been closing mortgages in this state since 2006 &mdash; through oil booms, rate spikes, and every market condition Alaska has thrown at us.</p>
          <div className="wgrid">
            {why.map(([icon,title,desc])=>(
              <div key={title} className="witem">
                <div className="wicon">{icon}</div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="asec">
        <span className="aeyebrow">Anchorage Service Areas</span>
        <h2 className="ah2">Every <em>Anchorage</em> Neighborhood,<br />One Lender.</h2>
        <p className="aintro">I know these neighborhoods because I&apos;ve closed loans in all of them. Each area has different buyer profiles, price points, and considerations.</p>
        <div className="hgrid">
          {hoods.map(([name,desc])=>(<div key={name} className="hood"><h3>{name}</h3><p>{desc}</p></div>))}
        </div>
      </section>

      <div className="asec-alt">
        <section className="asec">
          <span className="aeyebrow">How It Works</span>
          <h2 className="ah2">From Call to <em>Keys</em></h2>
          <p className="aintro">My process is built around Alaska&apos;s realities &mdash; fast timelines, remote closings, military PCS schedules, and seasonal urgency.</p>
          <div className="aproc">
            {[["Call or Apply","One conversation or an online application. I respond same day."],["Pre-Approval","Fast pre-approval letter in 24 hours. Strong enough to compete in any Anchorage market."],["Find Your Home","I work alongside your agent. Sellers and agents know my pre-approvals close."],["Submit & Process","Cardinal Financial's in-house underwriting moves fast. I keep you updated in real time."],["Close on Time","21\u201330 day target close. I've closed VA loans in 15 days when timelines demanded it."]].map(([title,desc])=>(
              <div key={title} className="apstep"><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </section>
      </div>

      <section className="asec">
        <span className="aeyebrow">Client Reviews</span>
        <h2 className="ah2">What Anchorage <em>Borrowers</em> Say</h2>
        <div className="revgrid">
          {reviews.map(([quote,name])=>(
            <div key={name} className="rcard">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>{quote}</p>
              <span className="rvwr">&mdash; {name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="acta-sec">
        <h2>Ready to Buy in <em>Anchorage?</em></h2>
        <p>One call. Same-day response. Pre-approval in 24 hours. Let&apos;s build your path to homeownership in Alaska&apos;s largest city.</p>
        <div className="acta-actions">
          <a href="tel:9072449368" className="abd">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="abo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="aphd">(907) 244-9368</a>
        <p className="anmlsnote">Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial &middot; Equal Housing Lender</p>
      </div>

      <div className="afoot-sec">
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br />
        Serving Anchorage, Eagle River, South Anchorage, Girdwood, Wasilla, Palmer, and statewide Alaska<br />
        <a href="tel:9072449368">(907) 244-9368</a><br />
        This is not a commitment to lend. All loans subject to credit approval.</p>
      </div>
    </>
  )
}
