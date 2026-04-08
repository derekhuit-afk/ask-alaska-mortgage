import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Mortgage Refinance | VA IRRRL, Cash-Out, Rate & Term | Derek Huit – NMLS #203980',
  description: 'Refinance your Alaska mortgage with Derek Huit. VA IRRRL streamline, cash-out refi, rate & term — honest advice on whether refinancing makes sense for you. Call (907) 244-9368.',
  keywords: 'Alaska mortgage refinance, VA IRRRL Alaska, Alaska cash out refinance, refinance Anchorage, lower mortgage rate Alaska, Alaska refinance lender, VA streamline refinance Alaska',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-refinance' },
}
export default function AlaskaRefinance() {
  const types = [
    {title:"VA IRRRL Streamline",tag:"Best for VA borrowers",bullets:["No appraisal in most cases","Minimal paperwork — no income re-verification in many cases","Lower rate = lower payment","No out-of-pocket costs option","Fastest refi available — 2-3 weeks typical"],desc:"The IRRRL (Interest Rate Reduction Refinance Loan) is the fastest, easiest refinance available. If you have an existing VA loan and current rates are lower, this is almost always the right move. Alaska's unique appraisal environment makes the no-appraisal feature especially valuable."},
    {title:"Cash-Out Refinance",tag:"Access your equity",bullets:["Up to 100% cash-out on VA loans","Up to 80% on conventional","Pay off high-interest debt","Fund home improvements","Investment capital"],desc:"Alaska homeowners have built significant equity over the past decade. A cash-out refinance lets you access that equity at mortgage rates — far lower than personal loans or credit cards. VA cash-out allows up to 100% LTV, one of the few loan types with this flexibility."},
    {title:"Rate & Term Refinance",tag:"Lower rate, better term",bullets:["Reduce your interest rate","Switch from ARM to fixed","Shorten your loan term","Eliminate mortgage insurance (PMI)","Restructure at better terms"],desc:"A traditional rate and term refi when your rate is above the current market. I run the break-even math honestly — if it doesn't pencil out over your expected stay in the home, I'll tell you. Alaska's market has enough stable owners that rate-term refis make financial sense when the math is right."},
    {title:"VA Cash-Out Refinance",tag:"VA equity at 100%",bullets:["Converts non-VA to VA loan","100% LTV cash-out option","No PMI on VA loans","Access full equity","One-time VA funding fee (financed)"],desc:"VA cash-out can be used even if your current loan is not a VA loan — it converts your existing mortgage to a VA loan and allows cash-out up to 100% of the home's value. For Alaska veterans with significant equity, this is a powerful financial tool."},
  ]
  const breakeven = [
    ["Monthly Savings","How much lower will your new payment be?"],
    ["Closing Costs","Typical Alaska refinance closing costs: $3,000-$8,000"],
    ["Break-Even Months","Closing costs ÷ monthly savings = months to break even"],
    ["Expected Stay","How long do you plan to stay in the home?"],
    ["Decision","If expected stay > break-even months: REFI. If not: WAIT."],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Mulish:wght@300;400;600&display=swap');
        :root{--slate:#1b2838;--slate-mid:#243447;--blue:#2563eb;--blue-lt:#60a5fa;--green:#059669;--amber:#d97706;--cream:#f8f9fa;--white:#fff;--muted:#6b7280;--border:#e2e8f0;--frost:#f0f4ff}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Mulish',sans-serif;background:var(--cream);color:var(--slate);overflow-x:hidden;line-height:1.65}
        nav{background:var(--slate);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        nav strong{font-family:'Libre Baskerville',serif;font-size:1.1rem;color:#fff}
        nav span{display:block;font-size:.68rem;color:var(--blue-lt);letter-spacing:.12em;text-transform:uppercase}
        .ncta{background:var(--blue);color:#fff;padding:.6rem 1.4rem;border-radius:4px;font-weight:700;font-size:.88rem;text-decoration:none}
        .hero{background:linear-gradient(135deg,var(--slate) 0%,#0f1923 100%);padding:5rem 2rem 4rem;position:relative}
        .hero::before{content:'';position:absolute;top:0;right:0;bottom:0;left:50%;background:linear-gradient(90deg,transparent,rgba(37,99,235,.08));pointer-events:none}
        .hero-inner{max-width:820px;margin:0 auto;animation:rise .8s ease both}
        @keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .badge{display:inline-block;background:rgba(37,99,235,.2);border:1px solid rgba(96,165,250,.4);color:var(--blue-lt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        h1{font-family:'Libre Baskerville',serif;font-size:clamp(2.2rem,5vw,3.6rem);font-weight:700;color:#fff;line-height:1.12;margin-bottom:1rem}
        h1 em{font-style:italic;color:var(--blue-lt)}
        .hero p{font-size:clamp(.95rem,2vw,1.1rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .hbtns{display:flex;gap:1rem;flex-wrap:wrap}
        .bp{background:var(--blue);color:#fff;padding:.9rem 2rem;border-radius:4px;font-weight:700;text-decoration:none;transition:all .2s}
        .bp:hover{background:#1d4ed8;transform:translateY(-2px)}
        .bo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:4px;font-weight:500;text-decoration:none}
        .honest{background:rgba(5,150,105,.12);border:1px solid rgba(5,150,105,.3);border-left:4px solid var(--green);border-radius:0 8px 8px 0;padding:1.8rem 2rem;margin:2rem 0}
        .honest h3{font-family:'Libre Baskerville',serif;font-size:1.2rem;color:var(--green);margin-bottom:.6rem}
        .honest p{font-size:.9rem;color:var(--muted);line-height:1.7}
        .sec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .sec-alt{background:var(--frost)}
        .sec-dk{background:var(--slate)}
        h2{font-family:'Libre Baskerville',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);color:var(--slate);margin-bottom:.8rem;line-height:1.2}
        h2 em{font-style:italic;color:var(--blue)}
        .sec-dk h2{color:#fff}
        .sec-dk h2 em{color:var(--blue-lt)}
        .intro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .sec-dk .intro{color:rgba(255,255,255,.6)}
        .tgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}
        .tcard{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:2rem;transition:all .25s;position:relative;overflow:hidden}
        .tcard::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--blue-lt))}
        .tcard:hover{box-shadow:0 8px 28px rgba(37,99,235,.1);transform:translateY(-3px)}
        .tcard-tag{font-size:.72rem;font-weight:600;color:var(--blue);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.5rem}
        .tcard h3{font-family:'Libre Baskerville',serif;font-size:1.2rem;color:var(--slate);margin-bottom:1rem}
        .tcard ul{list-style:none;margin-bottom:1rem;display:flex;flex-direction:column;gap:.4rem}
        .tcard li{font-size:.85rem;color:var(--muted);display:flex;align-items:flex-start;gap:.5rem}
        .tcard li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
        .tcard p{font-size:.86rem;color:var(--muted);line-height:1.6;border-top:1px solid var(--border);padding-top:.8rem;margin-top:.8rem}
        .btable{margin-top:2rem;border-collapse:collapse;width:100%;max-width:700px}
        .btable th{background:var(--slate);color:#fff;padding:.9rem 1.2rem;text-align:left;font-size:.85rem;letter-spacing:.05em}
        .btable td{padding:.9rem 1.2rem;border-bottom:1px solid var(--border);font-size:.88rem;color:var(--muted)}
        .btable tr:last-child td{border-bottom:none;color:var(--blue);font-weight:600}
        .cta{background:var(--slate);padding:5rem 2rem;text-align:center}
        .cta h2{color:#fff;margin-bottom:.8rem}
        .cta p{color:rgba(255,255,255,.7);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phd{font-family:'Libre Baskerville',serif;font-size:2rem;color:var(--blue-lt);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#0a0f18;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--blue-lt);text-decoration:none}
        @media(max-width:768px){.hero{padding:4rem 1.2rem 3rem}.sec{padding:3.5rem 1.2rem}.cta{padding:3.5rem 1.2rem}.btable{font-size:.8rem}}
        @media(max-width:420px){h1{font-size:2rem}.hbtns,.cta-btns{flex-direction:column}}
      `}</style>
      <nav>
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="ncta">Call (907) 244-9368</a>
      </nav>
      <div className="hero">
        <div className="hero-inner">
          <div className="badge">Alaska Refinance Guide</div>
          <h1>Alaska Mortgage <em>Refinance</em>:<br />Does the Math Work for You?</h1>
          <p>VA IRRRL streamline, cash-out, rate and term &mdash; I run the honest break-even analysis before recommending a refinance. If it doesn&apos;t make financial sense for your situation, I&apos;ll tell you that. 18+ years in Alaska, $1B+ in closings.</p>
          <div className="hbtns">
            <a href="tel:9072449368" className="bp">Run My Refinance Numbers</a>
            <a href="#types" className="bo">See Refinance Options &rarr;</a>
          </div>
        </div>
      </div>
      <section className="sec">
        <div className="honest">
          <h3>My Honest Refinance Philosophy</h3>
          <p>I only recommend a refinance when the math genuinely favors you. I&apos;ll calculate your break-even point (closing costs divided by monthly savings) and compare it against how long you plan to stay in the home. If the break-even is 60 months and you&apos;re planning to sell in 2 years, I&apos;ll tell you to wait. I&apos;ve been doing this long enough to know that honest advice builds a client for life.</p>
        </div>
      </section>
      <div id="types">
        <section className="sec" style={{paddingTop:"1rem"}}>
          <h2>Alaska Refinance <em>Options</em></h2>
          <p className="intro">Four distinct refinance strategies, each with different purposes and ideal scenarios. Here&apos;s what each one does and when it makes sense.</p>
          <div className="tgrid">
            {types.map(t=>(
              <div key={t.title} className="tcard">
                <div className="tcard-tag">{t.tag}</div>
                <h3>{t.title}</h3>
                <ul>{t.bullets.map(b=>(<li key={b}>{b}</li>))}</ul>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sec-alt">
        <section className="sec">
          <h2>The <em>Break-Even</em> Test: Should You Refinance?</h2>
          <p className="intro">One simple framework determines whether refinancing makes financial sense. Here&apos;s how to run it.</p>
          <table className="btable">
            <thead><tr><th>Step</th><th>What to Calculate</th></tr></thead>
            <tbody>
              {breakeven.map(([step,what])=>(<tr key={step}><td>{step}</td><td>{what}</td></tr>))}
            </tbody>
          </table>
          <p style={{marginTop:"1.5rem",fontSize:".9rem",color:"var(--muted)"}}>Call me at (907) 244-9368 and I&apos;ll run this calculation for your specific situation in 5 minutes.</p>
        </section>
      </div>
      <div className="sec-dk">
        <section className="sec">
          <h2>Alaska Refinance <em>Considerations</em></h2>
          <p className="intro">Alaska has specific factors that affect refinance timing, costs, and options that national lenders frequently get wrong.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.4rem",marginTop:"2rem"}}>
            {[["VA Loans: IRRRL Advantage","Alaska's appraisal environment makes the VA IRRRL especially valuable — skipping the appraisal saves time and removes the biggest variable in Alaska refinance timelines. If you have a VA loan and rates have dropped, this is almost always the right call."],["Cash-Out Strategy","Alaska homeowners who bought 5+ years ago have built substantial equity. Cash-out refis at mortgage rates (far below personal loan rates) are a smart way to fund home improvements, consolidate debt, or fund investment property down payments."],["Rural Property Refinances","Remote or rural Alaska properties face appraisal challenges in refinance. I know which appraisers serve which areas, how to document value on non-standard properties, and how to prevent appraisal issues from derailing your closing."],["AHFC Streamline Options","Existing AHFC borrowers may be able to refinance into a new AHFC program if rates have dropped. AHFC streamline refis have specific requirements I know thoroughly — most lenders don't even offer them correctly."]].map(([t,d])=>(
              <div key={t} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"8px",padding:"1.6rem"}}>
                <h3 style={{fontSize:"1rem",fontWeight:600,color:"#fff",marginBottom:".5rem"}}>{t}</h3>
                <p style={{fontSize:".86rem",color:"rgba(255,255,255,.55)",lineHeight:1.65}}>{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="cta">
        <h2>Let&apos;s Run Your <em>Refinance Numbers</em></h2>
        <p>5-minute call. I run your break-even, check current rates, and give you a straight answer on whether refinancing makes sense right now.</p>
        <div className="cta-btns">
          <a href="tel:9072449368" className="bp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="bo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="phd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        All loans subject to credit approval. Rates subject to change. This is not a commitment to lend.</p>
      </footer>
    </>
  )
}
