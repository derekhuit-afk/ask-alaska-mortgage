import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Mortgage Rates 2025 | VA, FHA, Conventional | Derek Huit - NMLS #203980',
  description: 'Current Alaska mortgage rates for VA, FHA, conventional, and jumbo loans. What determines your rate and how to get the best one. Call (907) 244-9368.',
  keywords: 'Alaska mortgage rates today, Alaska mortgage rates 2025, Anchorage mortgage rates, VA loan rate Alaska, FHA rate Alaska, current mortgage rates Alaska',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-mortgage-rates' },
}
export default function AlaskaMortgageRates() {
  const rateFactors = [
    {factor:"Credit Score",impact:"High",detail:"740+ gets the best rates. 700-739 slightly higher. Below 680 costs increase meaningfully. I tell you exactly what your score means for today."},
    {factor:"Loan Type",impact:"High",detail:"VA loans typically run 0.25-0.5% below conventional. AHFC programs offer below-market rates on eligible properties."},
    {factor:"Down Payment",impact:"Medium",detail:"20%+ eliminates PMI and may improve your rate tier. VA and AHFC programs offset this with program benefits."},
    {factor:"Loan Amount",impact:"Medium",detail:"Loans above $1,209,750 in Alaska are jumbo. Higher rates and stricter qualification. Most Alaska purchases stay under this limit."},
    {factor:"Property Type",impact:"Medium",detail:"Single-family rates are best. Multi-family adds 0.25-0.75%. Investment properties add 0.5-1.5% over primary residence rates."},
    {factor:"Loan Term",impact:"Medium",detail:"15-year rates run 0.5-0.75% below 30-year. Shorter terms mean higher payments but dramatically less total interest paid."},
  ]
  const programs = [
    {name:"VA Loan",rate:"Best available",features:"0% down, no PMI, no conforming limit",note:"VA loans consistently carry rates 0.25-0.5% below conventional. The strongest overall product for eligible veterans."},
    {name:"AHFC First Home",rate:"Below-market",features:"0.5-1% below conventional, 3% down",note:"Alaska-exclusive. First-time buyers who qualify save hundreds per month compared to conventional."},
    {name:"Conventional 30yr",rate:"Market baseline",features:"Fixed rate, 3-20% down, up to $1,209,750",note:"The benchmark. Strong credit and 20% down gets the cleanest rate with no PMI."},
    {name:"FHA 30yr",rate:"Near conventional",features:"3.5% down, 580+ credit, MIP required",note:"FHA rates track close to conventional. Advantage is the low down payment and credit flexibility."},
    {name:"Jumbo 30yr",rate:"Slightly above conventional",features:"Above $1,209,750, 10-20% down, 700+ credit",note:"Alaska's high loan limit means few borrowers need jumbo. Competitive jumbo products available at Cardinal Financial."},
    {name:"DSCR Investment",rate:"Above primary rates",features:"Investment properties, qualifies on rental income",note:"Rate premium for investment properties is offset by the qualification flexibility."},
  ]
  const alaskaFacts = [
    ["Rural Property Appraisals","Remote Alaska properties need specialty appraisers adding timeline and cost. This affects closing costs but not the rate itself."],
    ["Alaska High-Cost Designation","Alaska's $1,209,750 conforming limit keeps most purchases in conventional territory, not jumbo."],
    ["AHFC Stacking Opportunity","Alaska is one of the few states with meaningful state housing authority rate programs for first-time buyers and veterans."],
    ["Rate vs. Total Cost","A VA loan at 0.25% above conventional with no PMI and no down payment almost always has lower total cost than a conventional loan with PMI."],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Public+Sans:wght@300;400;600&display=swap');
        :root{--rink:#0e1a2e;--rnv:#1a3a6b;--rsky:#2e7dd1;--rslt:#90c4e8;--ramb:#c97a1a;--rc:#f8f9fa;--rw:#fff;--rmu:#5d6f85;--rbrd:#d1dce8;--rfr:#f0f6fb}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Public Sans',sans-serif;background:var(--rc);color:var(--rink);overflow-x:hidden;line-height:1.65}
        .rnav{background:var(--rink);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .rnav strong{font-family:'DM Serif Text',serif;font-size:1.15rem;color:#fff}
        .rnav span{display:block;font-size:.68rem;color:var(--rslt);letter-spacing:.12em;text-transform:uppercase}
        .rncta{background:var(--ramb);color:#fff;padding:.6rem 1.4rem;border-radius:4px;font-weight:700;font-size:.88rem;text-decoration:none}
        .rhero{background:linear-gradient(150deg,var(--rnv) 0%,var(--rink) 100%);padding:5rem 2rem 4rem;position:relative}
        .rhi{max-width:820px;margin:0 auto;animation:rrise .8s ease both;position:relative}
        @keyframes rrise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .rbadge{display:inline-block;background:rgba(46,125,209,.2);border:1px solid rgba(144,196,232,.4);color:var(--rslt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        .rh1{font-family:'DM Serif Text',serif;font-size:clamp(2.2rem,5vw,3.8rem);color:#fff;line-height:1.12;margin-bottom:1rem}
        .rh1 em{font-style:italic;color:var(--rslt)}
        .rhs{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .rhb{display:flex;gap:1rem;flex-wrap:wrap}
        .rbp{background:var(--ramb);color:#fff;padding:.9rem 2rem;border-radius:4px;font-weight:700;text-decoration:none}
        .rbo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:4px;font-weight:500;text-decoration:none}
        .rdis{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.4rem 1.8rem;margin-top:2rem;font-size:.84rem;color:rgba(255,255,255,.6);line-height:1.6}
        .rsec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .rsec-alt{background:var(--rfr)}
        .rsec-dk{background:var(--rnv)}
        .rh2{font-family:'DM Serif Text',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);color:var(--rink);margin-bottom:.8rem;line-height:1.2}
        .rh2 em{font-style:italic;color:var(--rsky)}
        .rsec-dk .rh2{color:#fff}
        .rsec-dk .rh2 em{color:var(--rslt)}
        .rintro{font-size:1rem;color:var(--rmu);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .rsec-dk .rintro{color:rgba(255,255,255,.6)}
        .rfgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.4rem;margin-top:2rem}
        .rfcard{background:var(--rw);border:1px solid var(--rbrd);border-radius:8px;padding:1.6rem}
        .rfcard:hover{border-color:var(--rsky)}
        .rfname{font-size:.88rem;font-weight:700;color:var(--rink);margin-bottom:.3rem}
        .rfimp{font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;padding:.2rem .6rem;border-radius:20px;display:inline-block;margin-bottom:.7rem}
        .rfhi{background:#fef3c7;color:#92400e}
        .rfmi{background:#e0f2fe;color:#0369a1}
        .rfcard p{font-size:.86rem;color:var(--rmu);line-height:1.6}
        .rpgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem;padding:2rem;background:var(--rnv);border-radius:10px}
        .rpcard{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.8rem}
        .rpname{font-family:'DM Serif Text',serif;font-size:1.2rem;color:#fff;margin-bottom:.3rem}
        .rprate{font-size:.82rem;font-weight:600;color:var(--rslt);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.6rem}
        .rpfeat{font-size:.84rem;color:rgba(255,255,255,.5);margin-bottom:.7rem;line-height:1.5}
        .rpcard p{font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.6;border-top:1px solid rgba(255,255,255,.08);padding-top:.7rem}
        .rcbox{background:linear-gradient(135deg,var(--rsky) 0%,var(--rnv) 100%);border-radius:10px;padding:2.5rem;margin:2rem 0;text-align:center}
        .rcbox h3{font-family:'DM Serif Text',serif;font-size:1.6rem;color:#fff;margin-bottom:.6rem}
        .rcbox p{font-size:.92rem;color:rgba(255,255,255,.78);max-width:560px;margin:0 auto 1.5rem;line-height:1.7}
        .rafacts{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}
        .rafact{background:var(--rw);border:1px solid var(--rbrd);border-radius:8px;padding:1.5rem;display:grid;grid-template-columns:8px 1fr;gap:1rem;align-items:start}
        .rafact-dot{width:8px;height:8px;border-radius:50%;background:var(--rsky);margin-top:6px;flex-shrink:0}
        .rafact strong{font-size:.95rem;color:var(--rink);display:block;margin-bottom:.4rem}
        .rafact p{font-size:.88rem;color:var(--rmu);line-height:1.65}
        .rcta{background:var(--rnv);padding:5rem 2rem;text-align:center}
        .rcta .rh2{color:#fff}
        .rcta .rh2 em{color:var(--rslt)}
        .rcta p{color:rgba(255,255,255,.7);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .rctab{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .rphd{font-family:'DM Serif Text',serif;font-size:2rem;color:var(--rslt);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#070d18;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--rmu);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--rslt);text-decoration:none}
        @media(max-width:768px){.rhero{padding:4rem 1.2rem 3rem}.rsec{padding:3.5rem 1.2rem}.rcta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){.rh1{font-size:2rem}.rhb,.rctab{flex-direction:column}}
      `}</style>
      <nav className="rnav">
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="rncta">Call (907) 244-9368</a>
      </nav>
      <div className="rhero">
        <div className="rhi">
          <div className="rbadge">Alaska Mortgage Rates 2025</div>
          <h1 className="rh1">Current Alaska <em>Mortgage Rates</em>:<br />What Actually Affects Yours</h1>
          <p className="rhs">Published rates are averages. Your actual rate depends on your credit score, loan type, down payment, and program. I give you a real rate based on your real situation in 5 minutes.</p>
          <div className="rhb">
            <a href="tel:9072449368" className="rbp">Get My Real Rate Now</a>
            <a href="#rfactors" className="rbo">What Affects My Rate &rarr;</a>
          </div>
          <div className="rdis">
            <strong>Note:</strong> Mortgage rates change daily. The only way to know your actual rate is a real pre-approval. Call (907) 244-9368 for a rate lock quote today.
          </div>
        </div>
      </div>
      <div id="rfactors">
        <section className="rsec">
          <h2 className="rh2">6 Factors That <em>Determine</em> Your Alaska Rate</h2>
          <p className="rintro">Your actual rate is determined by these six factors. Understanding them helps you optimize your position before applying.</p>
          <div className="rfgrid">
            {rateFactors.map(f=>(
              <div key={f.factor} className="rfcard">
                <div className="rfname">{f.factor}</div>
                <span className={"rfimp " + (f.impact==="High"?"rfhi":"rfmi")}>{f.impact} Impact</span>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="rsec-alt">
        <section className="rsec">
          <h2 className="rh2">Alaska Rate <em>by Program</em></h2>
          <p className="rintro">Different loan programs have different rate structures. Here is how each stacks up in Alaska.</p>
          <div className="rpgrid">
            {programs.map(p=>(
              <div key={p.name} className="rpcard">
                <div className="rpname">{p.name}</div>
                <div className="rprate">{p.rate}</div>
                <div className="rpfeat">{p.features}</div>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="rsec">
        <h2 className="rh2">Alaska Rate <em>Realities</em></h2>
        <p className="rintro">Alaska-specific factors that affect rates in ways most national lenders do not account for.</p>
        <div className="rafacts">
          {alaskaFacts.map(([t,d])=>(
            <div key={t} className="rafact">
              <div className="rafact-dot"></div>
              <div><strong>{t}</strong><p>{d}</p></div>
            </div>
          ))}
        </div>
        <div className="rcbox" style={{marginTop:"2rem"}}>
          <h3>Get Your Real Alaska Rate Today</h3>
          <p>5-minute call. I pull a soft credit check, assess your loan type and program options, and give you an accurate rate quote for today.</p>
          <a href="tel:9072449368" className="rbp">Call Derek: (907) 244-9368</a>
        </div>
      </section>
      <div className="rcta">
        <h2 className="rh2">Ready for Your <em>Real Rate?</em></h2>
        <p>Do not make a major financial decision based on an average. Get your actual rate for your actual situation in 5 minutes.</p>
        <div className="rctab">
          <a href="tel:9072449368" className="rbp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="rbo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="rphd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        Mortgage rates change daily. Rate information is for educational purposes only and does not constitute a rate lock or commitment to lend.</p>
      </footer>
    </>
  )
}
