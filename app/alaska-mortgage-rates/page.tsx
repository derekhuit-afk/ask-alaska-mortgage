import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Mortgage Rates Today | Current Rates & Programs | Derek Huit – NMLS #203980',
  description: 'Current Alaska mortgage rates for VA, FHA, conventional, and jumbo loans. Alaska-specific factors that affect your rate — and how to get the best rate available. Call (907) 244-9368.',
  keywords: 'Alaska mortgage rates today, Alaska mortgage rates 2025, Anchorage mortgage rates, VA loan rate Alaska, FHA rate Alaska, Alaska home loan rates, current mortgage rates Alaska',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-mortgage-rates' },
}
export default function AlaskaMortgageRates() {
  const rateFactors = [
    {factor:"Credit Score",impact:"High",detail:"740+ gets the best rates. 700-739 is slightly higher. Below 680, cost increases meaningfully. I'll tell you exactly what your score means for today's rate."},
    {factor:"Loan Type",impact:"High",detail:"VA loans typically run 0.25-0.5% below conventional. FHA is comparable to conventional. AHFC programs offer below-market rates on eligible properties."},
    {factor:"Down Payment",impact:"Medium",detail:"20%+ eliminates PMI and may improve your rate tier. Below 20% on conventional adds PMI cost. VA and AHFC programs offset this with program benefits."},
    {factor:"Loan Amount",impact:"Medium",detail:"Loans above the conforming limit ($1,209,750 in Alaska) are jumbo — higher rates and stricter qualification. Most Alaska purchases fall under this limit."},
    {factor:"Property Type",impact:"Medium",detail:"Single-family rates are best. Multi-family adds 0.25-0.75%. Investment properties add 0.5-1.5% over primary residence rates."},
    {factor:"Loan Term",impact:"Medium",detail:"15-year rates run 0.5-0.75% below 30-year. 20-year falls in between. Shorter terms mean higher payments but dramatically less total interest paid."},
  ]
  const programs = [
    {name:"VA Loan",rate:"Best available",features:"0% down, no PMI, no conforming limit on primary residence",note:"VA loans consistently carry rates 0.25-0.5% below conventional. The strongest overall product for eligible veterans."},
    {name:"AHFC First Home",rate:"Below-market",features:"0.5-1% below conventional, 3% down, combinable with MCC",note:"Alaska-exclusive. First-time buyers who qualify save hundreds per month compared to conventional. I check your eligibility immediately."},
    {name:"Conventional 30yr",rate:"Market baseline",features:"Fixed rate, 3-20% down, up to $1,209,750 in Alaska",note:"The benchmark. Strong credit and 20% down gets you the cleanest rate with no PMI."},
    {name:"FHA 30yr",rate:"Near conventional",features:"3.5% down, 580+ credit, MIP required",note:"FHA rates track close to conventional. The advantage is the low down payment and credit flexibility — not the rate itself."},
    {name:"Jumbo 30yr",rate:"Slightly above conventional",features:"Above $1,209,750, 10-20% down, 700+ credit",note:"Alaska's high loan limit means few borrowers need jumbo. For those who do, competitive jumbo products are available at Cardinal Financial."},
    {name:"DSCR Investment",rate:"Above primary rates",features:"Investment properties, qualifies on rental income",note:"Rate premium for investment properties is offset by the qualification flexibility — no personal income documentation required."},
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Public+Sans:wght@300;400;600&display=swap');
        :root{--ink:#0e1a2e;--navy:#1a3a6b;--sky:#2e7dd1;--sky-lt:#90c4e8;--amber:#c97a1a;--cream:#f8f9fa;--white:#fff;--muted:#5d6f85;--border:#d1dce8;--frost:#f0f6fb}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Public Sans',sans-serif;background:var(--cream);color:var(--ink);overflow-x:hidden;line-height:1.65}
        nav{background:var(--ink);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        nav strong{font-family:'DM Serif Text',serif;font-size:1.15rem;color:#fff}
        nav span{display:block;font-size:.68rem;color:var(--sky-lt);letter-spacing:.12em;text-transform:uppercase}
        .ncta{background:var(--amber);color:#fff;padding:.6rem 1.4rem;border-radius:4px;font-weight:700;font-size:.88rem;text-decoration:none}
        .hero{background:linear-gradient(150deg,var(--navy) 0%,var(--ink) 100%);padding:5rem 2rem 4rem;position:relative;overflow:hidden}
        .hero-inner{max-width:820px;margin:0 auto;animation:rise .8s ease both;position:relative}
        @keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .badge{display:inline-block;background:rgba(46,125,209,.2);border:1px solid rgba(144,196,232,.4);color:var(--sky-lt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        h1{font-family:'DM Serif Text',serif;font-size:clamp(2.2rem,5vw,3.8rem);color:#fff;line-height:1.12;margin-bottom:1rem}
        h1 em{font-style:italic;color:var(--sky-lt)}
        .hero p{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .hbtns{display:flex;gap:1rem;flex-wrap:wrap}
        .bp{background:var(--amber);color:#fff;padding:.9rem 2rem;border-radius:4px;font-weight:700;text-decoration:none;transition:all .2s}
        .bp:hover{filter:brightness(1.1);transform:translateY(-2px)}
        .bo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:4px;font-weight:500;text-decoration:none}
        .rate-disclaimer{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.4rem 1.8rem;margin-top:2rem;font-size:.84rem;color:rgba(255,255,255,.6);line-height:1.6}
        .sec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .sec-alt{background:var(--frost)}
        .sec-dk{background:var(--navy)}
        h2{font-family:'DM Serif Text',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);color:var(--ink);margin-bottom:.8rem;line-height:1.2}
        h2 em{font-style:italic;color:var(--sky)}
        .sec-dk h2{color:#fff}
        .sec-dk h2 em{color:var(--sky-lt)}
        .intro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .sec-dk .intro{color:rgba(255,255,255,.6)}
        .fgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.4rem;margin-top:2rem}
        .fcard{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.6rem;transition:all .2s}
        .fcard:hover{border-color:var(--sky);box-shadow:0 4px 16px rgba(30,58,107,.06)}
        .fcard-factor{font-size:.88rem;font-weight:700;color:var(--ink);margin-bottom:.3rem}
        .fcard-impact{font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;padding:.2rem .6rem;border-radius:20px;display:inline-block;margin-bottom:.7rem}
        .impact-high{background:#fef3c7;color:#92400e}
        .impact-med{background:#e0f2fe;color:#0369a1}
        .fcard p{font-size:.86rem;color:var(--muted);line-height:1.6}
        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .pcard{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.8rem}
        .pcard-name{font-family:'DM Serif Text',serif;font-size:1.2rem;color:#fff;margin-bottom:.3rem}
        .pcard-rate{font-size:.82rem;font-weight:600;color:var(--sky-lt);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.6rem}
        .pcard-feat{font-size:.84rem;color:rgba(255,255,255,.5);margin-bottom:.7rem;line-height:1.5}
        .pcard p{font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.6;border-top:1px solid rgba(255,255,255,.08);padding-top:.7rem}
        .call-box{background:linear-gradient(135deg,var(--sky) 0%,var(--navy) 100%);border-radius:10px;padding:2.5rem;margin:2rem 0;text-align:center}
        .call-box h3{font-family:'DM Serif Text',serif;font-size:1.6rem;color:#fff;margin-bottom:.6rem}
        .call-box p{font-size:.92rem;color:rgba(255,255,255,.78);max-width:560px;margin:0 auto 1.5rem;line-height:1.7}
        .cta{background:var(--navy);padding:5rem 2rem;text-align:center}
        .cta h2{color:#fff;margin-bottom:.8rem}
        .cta p{color:rgba(255,255,255,.7);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phd{font-family:'DM Serif Text',serif;font-size:2rem;color:var(--sky-lt);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#070d18;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--sky-lt);text-decoration:none}
        @media(max-width:768px){.hero{padding:4rem 1.2rem 3rem}.sec{padding:3.5rem 1.2rem}.cta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){h1{font-size:2rem}.hbtns,.cta-btns{flex-direction:column}}
      `}</style>
      <nav>
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="ncta">Call (907) 244-9368</a>
      </nav>
      <div className="hero">
        <div className="hero-inner">
          <div className="badge">Alaska Mortgage Rates</div>
          <h1>Current Alaska <em>Mortgage Rates</em>:<br />What Actually Affects Yours</h1>
          <p>Published mortgage rates are averages. Your actual rate depends on your credit score, loan type, down payment, and program. I give you a real rate based on your real situation &mdash; not a marketing number. Call me for today&apos;s exact rate in 5 minutes.</p>
          <div className="hbtns">
            <a href="tel:9072449368" className="bp">Get My Real Rate Now</a>
            <a href="#factors" className="bo">What Affects My Rate &rarr;</a>
          </div>
          <div className="rate-disclaimer">
            <strong>Important:</strong> Published mortgage rates change daily and are averages that rarely match any individual borrower&apos;s actual rate. Your rate depends on your specific credit profile, loan type, down payment, and property. The only way to know your actual rate is to get a real pre-approval &mdash; call (907) 244-9368 for a rate lock quote today.
          </div>
        </div>
      </div>
      <div id="factors">
        <section className="sec">
          <h2>6 Factors That <em>Determine</em> Your Alaska Mortgage Rate</h2>
          <p className="intro">Your actual rate is determined by these six factors. Understanding them helps you optimize your position before applying.</p>
          <div className="fgrid">
            {rateFactors.map(f=>(
              <div key={f.factor} className="fcard">
                <div className="fcard-factor">{f.factor}</div>
                <span className={`fcard-impact ${f.impact==='High'?'impact-high':'impact-med'}`}>{f.impact} Impact</span>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sec-alt">
        <section className="sec">
          <h2>Alaska Rate <em>by Program</em></h2>
          <p className="intro">Different loan programs have different rate structures. Here&apos;s how each Alaska program stacks up.</p>
          <div style={{background:"var(--navy)",borderRadius:"10px",overflow:"hidden"}}>
            <div className="pgrid" style={{padding:"2rem",gap:"1.2rem"}}>
              {programs.map(p=>(
                <div key={p.name} className="pcard">
                  <div className="pcard-name">{p.name}</div>
                  <div className="pcard-rate">{p.rate}</div>
                  <div className="pcard-feat">{p.features}</div>
                  <p>{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="sec">
        <h2>Alaska Rate <em>Realities</em></h2>
        <p className="intro">Alaska-specific factors that affect rates in ways most national lenders don&apos;t account for.</p>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          {[
            ["Rural and Remote Properties","Properties outside city services — well, septic, heating system requirements — may require specialty appraisals that extend timelines. Appraisal costs in remote Alaska are higher than national averages, affecting closing costs but not the rate itself."],
            ["Alaska High-Cost Designation","Alaska is a high-cost area with a conforming loan limit of $1,209,750. This means most Alaska purchases remain within conventional (not jumbo) territory, keeping rates in the conventional range for even higher-value homes."],
            ["AHFC Stacking Opportunity","Alaska is one of the few states where a state housing authority (AHFC) offers meaningful below-market rate programs for first-time buyers and veterans. The rate reduction from combining AHFC + VA benefits is not available in most other states."],
            ["Rate vs. Total Cost","In Alaska, total loan cost matters more than rate alone. A VA loan at 0.25% above conventional with no PMI and no down payment almost always has lower total cost than a conventional loan with PMI at a slightly lower rate."],
          ].map(([t,d])=>(
            <div key={t} style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:"8px",padding:"1.5rem",display:"grid",gridTemplateColumns:"auto 1fr",gap:"1rem",alignItems:"start"}}>
              <div style={{width:"8px",height:"8px",borderRadius:"50%",background:"var(--sky)",marginTop:"6px",flexShrink:0}}></div>
              <div><strong style={{fontSize:".95rem",color:"var(--ink)",display:"block",marginBottom:".4rem"}}>{t}</strong><p style={{fontSize:".88rem",color:"var(--muted)",lineHeight:1.65}}>{d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="sec" style={{paddingTop:"1rem"}}>
        <div className="call-box">
          <h3>Get Your Real Alaska Rate Today</h3>
          <p>5-minute call. I pull a soft credit check (no impact to your score), assess your loan type and program options, and give you an accurate rate quote for today&apos;s market. No pressure, no obligation.</p>
          <a href="tel:9072449368" className="bp">Call Derek: (907) 244-9368</a>
        </div>
      </section>
      <div className="cta">
        <h2>Ready for Your <em>Real Rate?</em></h2>
        <p>Don&apos;t make a major financial decision based on an average. Get your actual rate for your actual situation in 5 minutes.</p>
        <div className="cta-btns">
          <a href="tel:9072449368" className="bp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="bo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="phd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        Mortgage rates change daily. Rate information provided is for educational purposes only and does not constitute a rate lock or commitment to lend. Contact Derek Huit for current rates specific to your loan profile.</p>
      </footer>
    </>
  )
}
