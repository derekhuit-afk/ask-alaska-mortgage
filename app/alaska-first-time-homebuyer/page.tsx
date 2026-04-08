import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska First-Time Homebuyer Guide 2025 | Derek Huit | Cardinal Financial',
  description: 'Complete Alaska first-time homebuyer guide — AHFC programs, down payment assistance, loan options, step-by-step process. Expert guidance from Derek Huit. Call (907) 244-9368.',
  keywords: 'Alaska first time homebuyer, first time homebuyer Alaska, Alaska first home program, AHFC first home, Alaska down payment assistance, buy first home Anchorage, Alaska homebuyer guide 2025',
  alternates: { canonical: 'https://askalaskamortgage.ai/alaska-first-time-homebuyer' },
}
export default function AlaskaFirstTimeHomebuyer() {
  const steps = [
    {n:"1",title:"Check Your Credit Score",time:"Now",body:"Minimum: 580 for FHA, 620 for conventional, 640+ for AHFC. I'll pull a soft credit check that won't affect your score and tell you exactly where you stand and what to improve."},
    {n:"2",title:"Get Pre-Approved",time:"Day 1",body:"A strong pre-approval letter is your ticket to compete in Alaska's market. I issue pre-approvals in 24 hours. Your pre-approval tells you exactly how much house you can buy."},
    {n:"3",title:"Check AHFC Eligibility",time:"Day 1-2",body:"As your lender, I immediately check whether you qualify for AHFC's First Home Limited program — below-market rates for first-time buyers. Most buyers don't know they qualify until I tell them."},
    {n:"4",title:"Find a Home",time:"Week 1-8",body:"Work with a local real estate agent to find your home. I'll tell you the right price range based on your pre-approval and which neighborhoods match your budget and lifestyle."},
    {n:"5",title:"Make an Offer",time:"Upon Finding",body:"I prepare sellers and their agents for VA/FHA/AHFC appraisal requirements upfront, so your offer is taken seriously even against cash buyers. My pre-approvals carry weight in this market."},
    {n:"6",title:"Complete Underwriting",time:"Days 1-21",body:"Submit documentation, I manage the underwriting process, and handle any conditions that come up. You track your loan status in real time."},
    {n:"7",title:"Close on Your Home",time:"Day 21-30",body:"Sign your documents, pay your closing costs (often partially offset by seller concessions), and receive your keys. Welcome to Alaska homeownership."},
  ]
  const programs = [
    {name:"AHFC First Home Limited",perk:"Below-market rate (-0.5 to -1%)",ideal:"First-time buyers meeting income limits"},
    {name:"FHA Loan",perk:"3.5% down, flexible credit",ideal:"Credit scores 580+, lower savings"},
    {name:"VA Loan",perk:"0% down, no PMI",ideal:"Veterans, active duty, surviving spouses"},
    {name:"Conventional 3%",perk:"Fannie HomeReady / Freddie Home Possible",ideal:"Good credit, limited down payment"},
    {name:"USDA Rural",perk:"0% down for rural properties",ideal:"Homes outside urban centers"},
    {name:"Alaska MCC",perk:"Up to $2,000/yr federal tax credit",ideal:"First-time buyers stacking with AHFC"},
  ]
  const myths = [
    ["You need 20% down","False. Alaska first-time buyers frequently buy with 3% (conventional), 3.5% (FHA), or 0% (VA/USDA). The 20% myth costs Alaskans years of unnecessary waiting."],
    ["You need perfect credit","False. FHA accepts 580+. AHFC works with 640+. Even 560-579 scores qualify for some programs with 10% down. I've helped buyers with imperfect credit find a path."],
    ["The market is too expensive","Wasilla starts under $300K. Palmer under $350K. With AHFC's rate reduction and FHA's low down payment, monthly payments on a Wasilla home are often less than Anchorage rent."],
    ["Renting is smarter right now","Depends entirely on your situation. In most Alaska markets, buying with an AHFC or VA loan produces a lower monthly payment than renting equivalent space — plus you build equity."],
    ["National online lenders are fastest","For Alaska, no. National lenders regularly delay closings on Alaska properties due to well/septic requirements, AHFC underwriting, and rural appraisal logistics. Local experience closes faster."],
    ["I should wait for rates to drop","Nobody times the market perfectly. Every month you wait, you pay rent that builds someone else's equity. And if rates drop, you can refinance."],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;800&family=Karla:wght@300;400;600&display=swap');
        :root{--blue:#0d3b6e;--blue-mid:#1a5276;--sky:#2e86c1;--sky-lt:#aed6f1;--amber:#f0a500;--cream:#faf8f4;--white:#fff;--dark:#14273a;--muted:#5d7a8a;--border:#c8d8e4;--frost:#eaf4fb}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Karla',sans-serif;background:var(--cream);color:var(--dark);overflow-x:hidden;line-height:1.65}
        nav{background:var(--blue);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        nav strong{font-family:'Fraunces',serif;font-size:1.1rem;color:#fff}
        nav span{display:block;font-size:.68rem;color:var(--sky-lt);letter-spacing:.12em;text-transform:uppercase}
        .ncta{background:var(--amber);color:var(--blue);padding:.6rem 1.4rem;border-radius:3px;font-weight:700;font-size:.88rem;text-decoration:none}
        .hero{background:linear-gradient(150deg,var(--blue) 0%,#071d35 100%);padding:5rem 2rem 4rem;overflow:hidden;position:relative}
        .hero::after{content:'ALASKA';position:absolute;right:-2%;bottom:-10%;font-size:18vw;font-family:'Fraunces',serif;color:rgba(255,255,255,.03);pointer-events:none;line-height:1}
        .hero-inner{max-width:820px;margin:0 auto;animation:rise .8s ease both}
        @keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .badge{display:inline-block;background:rgba(240,165,0,.18);border:1px solid rgba(240,165,0,.4);color:var(--amber);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        h1{font-family:'Fraunces',serif;font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;color:#fff;line-height:1.1;margin-bottom:1rem}
        h1 em{font-style:normal;color:var(--sky-lt)}
        .hero p{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .hbtns{display:flex;gap:1rem;flex-wrap:wrap}
        .bp{background:var(--amber);color:var(--blue);padding:.9rem 2rem;border-radius:3px;font-weight:700;text-decoration:none;transition:all .2s}
        .bp:hover{filter:brightness(1.1);transform:translateY(-2px)}
        .bo{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:3px;font-weight:500;text-decoration:none}
        .sbar{background:var(--sky);padding:1.4rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .si{flex:1;min-width:150px;max-width:200px;text-align:center;padding:.6rem 1rem;border-right:1px solid rgba(255,255,255,.2)}
        .si:last-child{border-right:none}
        .sv{font-family:'Fraunces',serif;font-size:1.8rem;color:#fff;display:block;line-height:1}
        .sl{font-size:.7rem;color:rgba(255,255,255,.75);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .sec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .sec-alt{background:var(--frost)}
        .sec-dk{background:var(--blue)}
        h2{font-family:'Fraunces',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);color:var(--dark);margin-bottom:.8rem;line-height:1.2}
        h2 em{font-style:italic;color:var(--sky)}
        .sec-dk h2{color:#fff}
        .sec-dk h2 em{color:var(--sky-lt)}
        .intro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .sec-dk .intro{color:rgba(255,255,255,.65)}
        .timeline{margin-top:2rem;display:flex;flex-direction:column;gap:0}
        .tstep{display:grid;grid-template-columns:72px 1fr;gap:1.5rem;padding:1.8rem 0;border-bottom:1px solid var(--border)}
        .tstep:last-child{border-bottom:none}
        .tnum{width:52px;height:52px;border-radius:50%;background:var(--blue);border:2px solid var(--sky);display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-size:1.4rem;font-weight:700;color:#fff;flex-shrink:0}
        .tcontent{padding-top:.2rem}
        .ttitle{font-size:1.05rem;font-weight:600;color:var(--dark);margin-bottom:.25rem}
        .ttime{font-size:.76rem;color:var(--sky);font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.5rem}
        .tcontent p{font-size:.88rem;color:var(--muted);line-height:1.65}
        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.2rem;margin-top:2rem}
        .pcard{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.5rem;border-left:3px solid var(--sky)}
        .pcard:hover{border-left-color:var(--amber);box-shadow:0 4px 16px rgba(13,59,110,.08)}
        .pcard h3{font-size:1rem;font-weight:700;color:var(--blue);margin-bottom:.4rem}
        .pcard .perk{font-size:.82rem;color:var(--sky);font-weight:600;margin-bottom:.5rem}
        .pcard p{font-size:.84rem;color:var(--muted);line-height:1.55}
        .mgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .mcard{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.6rem}
        .mcard h3{font-size:.92rem;font-weight:700;color:var(--sky-lt);margin-bottom:.4rem}
        .mcard .myth{font-size:.76rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.6rem}
        .mcard p{font-size:.86rem;color:rgba(255,255,255,.6);line-height:1.6}
        .cta{background:var(--blue);padding:5rem 2rem;text-align:center}
        .cta h2{color:#fff;margin-bottom:.8rem}
        .cta p{color:rgba(255,255,255,.7);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phd{font-family:'Fraunces',serif;font-size:2rem;color:var(--amber);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#07111f;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--sky-lt);text-decoration:none}
        @media(max-width:768px){.hero{padding:4rem 1.2rem 3rem}.sec{padding:3.5rem 1.2rem}.si{min-width:120px;border-right:none;border-bottom:1px solid rgba(255,255,255,.15)}.si:last-child{border-bottom:none}.tstep{grid-template-columns:52px 1fr;gap:1rem}.cta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){h1{font-size:2rem}.hbtns,.cta-btns{flex-direction:column}}
      `}</style>
      <nav>
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="ncta">Call (907) 244-9368</a>
      </nav>
      <div className="hero">
        <div className="hero-inner">
          <div className="badge">First-Time Buyer Guide 2025</div>
          <h1>Alaska First-Time Homebuyer:<br />Your <em>Complete 2025</em> Playbook</h1>
          <p>Everything Alaska first-time buyers need to know &mdash; AHFC programs, down payment options, step-by-step process, and the myths that cost buyers years of waiting. From a lender who&apos;s done this in Alaska for 18+ years.</p>
          <div className="hbtns">
            <a href="tel:9072449368" className="bp">Get Pre-Approved Free</a>
            <a href="#steps" className="bo">See the Process &rarr;</a>
          </div>
        </div>
      </div>
      <div className="sbar">
        {[["3%","Min Down (AHFC)"],["$0","VA Down Payment"],["18+","Yrs Alaska Exp"],["$1B+","Loans Closed"],["24hrs","Pre-Approval"]].map(([v,l])=>(
          <div key={l} className="si"><span className="sv">{v}</span><div className="sl">{l}</div></div>
        ))}
      </div>
      <div id="steps">
        <section className="sec">
          <h2>The <em>Alaska</em> First-Time Buyer Process</h2>
          <p className="intro">7 steps from decision to keys. Alaska has unique considerations at every stage &mdash; here&apos;s exactly what to expect.</p>
          <div className="timeline">
            {steps.map(s=>(
              <div key={s.n} className="tstep">
                <div className="tnum">{s.n}</div>
                <div className="tcontent">
                  <div className="ttitle">{s.title}</div>
                  <div className="ttime">{s.time}</div>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sec-alt">
        <section className="sec">
          <h2>Every <em>First-Time Buyer</em> Program in Alaska</h2>
          <p className="intro">Alaska first-time buyers have more options than almost any other state. Here&apos;s every program available and who it&apos;s best for.</p>
          <div className="pgrid">
            {programs.map(p=>(
              <div key={p.name} className="pcard">
                <h3>{p.name}</h3>
                <div className="perk">{p.perk}</div>
                <p>Best for: {p.ideal}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sec-dk">
        <section className="sec">
          <h2>6 Myths That Keep <em>Alaska Buyers Renting</em></h2>
          <p className="intro">These beliefs delay homeownership for thousands of Alaskans who could be building equity right now.</p>
          <div className="mgrid">
            {myths.map(([title,body])=>(
              <div key={title} className="mcard">
                <div className="myth">Myth</div>
                <h3>&ldquo;{title}&rdquo;</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="cta">
        <h2>Ready to Buy Your <em>First Alaska Home?</em></h2>
        <p>One call. Same-day pre-approval. I&apos;ll find every program you qualify for &mdash; AHFC, MCC, VA, USDA &mdash; and structure them for the lowest possible payment.</p>
        <div className="cta-btns">
          <a href="tel:9072449368" className="bp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="bo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="phd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        All loans subject to credit approval. AHFC program availability subject to eligibility and current program funding.</p>
      </footer>
    </>
  )
}
