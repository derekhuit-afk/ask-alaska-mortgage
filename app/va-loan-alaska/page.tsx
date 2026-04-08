import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VA Loans in Alaska | Derek Huit | Cardinal Financial – NMLS #203980',
  description: 'Alaska VA loan expert Derek Huit has helped hundreds of veterans and military families buy homes in Anchorage, Wasilla, and statewide. 18+ years, $1B+ in closings. Call (907) 244-9368.',
  keywords: 'VA loan Alaska, Alaska VA mortgage, VA home loan Anchorage, JBER VA loan, military home loan Alaska, Alaska VA lender, VA loan Wasilla',
  alternates: { canonical: 'https://askalaskamortgage.ai/va-loan-alaska' },
}

export default function VALoanAlaska() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@300;400;600&display=swap');
        :root{--navy:#0b1628;--deep:#0d1f3c;--blue:#1a3a6b;--ice:#4a9abe;--glacier:#7ec8e3;--gold:#c8a45a;--white:#f0f4f8;--gray:#8a9bb0;--light:#d4dde8}
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'Source Sans 3',sans-serif;background:var(--navy);color:var(--white);line-height:1.65;overflow-x:hidden}
        .top-nav{position:sticky;top:0;z-index:100;background:rgba(11,22,40,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(74,154,190,0.2);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
        .nav-brand strong{font-family:'Playfair Display',serif;font-size:1.1rem;color:var(--white)}
        .nav-brand span{display:block;font-size:0.72rem;color:var(--glacier);letter-spacing:0.08em;text-transform:uppercase}
        .nav-cta{background:var(--gold);color:var(--navy);padding:0.6rem 1.4rem;border-radius:4px;font-weight:600;font-size:0.9rem;text-decoration:none;transition:all 0.2s;white-space:nowrap}
        .hero{position:relative;overflow:hidden;min-height:82vh;display:flex;align-items:center;padding:6rem 2rem 5rem}
        .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 70% 50%,rgba(26,58,107,0.6) 0%,transparent 70%),radial-gradient(ellipse 50% 80% at 20% 80%,rgba(74,154,190,0.15) 0%,transparent 60%),linear-gradient(160deg,#0b1628 0%,#0d2040 50%,#0b1628 100%)}
        .aurora{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,transparent,var(--glacier),var(--gold),var(--ice),transparent);opacity:0.8;animation:aurora 6s ease-in-out infinite alternate}
        @keyframes aurora{from{transform:scaleX(0.9) translateX(-5%);opacity:0.6}to{transform:scaleX(1.05) translateX(5%);opacity:1}}
        .hero-content{position:relative;max-width:760px;animation:fadeUp 0.9s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        .eyebrow{display:inline-block;font-size:0.75rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--glacier);font-weight:600;border:1px solid rgba(126,200,227,0.35);padding:0.35rem 0.85rem;border-radius:2px;margin-bottom:1.5rem}
        h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,5.5vw,4.2rem);font-weight:900;line-height:1.1;color:var(--white);margin-bottom:1.2rem}
        h1 em{font-style:normal;color:var(--glacier)}
        .hero-sub{font-size:clamp(1rem,2.2vw,1.2rem);color:var(--light);font-weight:300;max-width:600px;margin-bottom:2.5rem}
        .hero-actions{display:flex;gap:1rem;flex-wrap:wrap}
        .btn-primary{background:var(--gold);color:var(--navy);padding:0.9rem 2rem;border-radius:4px;font-weight:700;font-size:0.95rem;text-decoration:none;letter-spacing:0.04em;transition:all 0.2s;display:inline-block}
        .btn-outline{border:1px solid var(--glacier);color:var(--glacier);padding:0.9rem 2rem;border-radius:4px;font-weight:600;font-size:0.95rem;text-decoration:none;transition:all 0.2s;display:inline-block}
        .stats-bar{background:var(--deep);border-top:1px solid rgba(74,154,190,0.2);border-bottom:1px solid rgba(74,154,190,0.2);padding:2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .stat{flex:1;min-width:160px;max-width:220px;text-align:center;padding:1rem 1.5rem;border-right:1px solid rgba(74,154,190,0.15)}
        .stat:last-child{border-right:none}
        .stat-num{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:var(--glacier);display:block;line-height:1}
        .stat-label{font-size:0.78rem;color:var(--gray);text-transform:uppercase;letter-spacing:0.1em;margin-top:0.4rem}
        .section{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .section-alt{background:var(--deep)}
        h2{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:var(--white);margin-bottom:1rem}
        h2 span{color:var(--glacier)}
        .section-lead{font-size:1.05rem;color:var(--light);max-width:700px;margin-bottom:3rem;font-weight:300}
        .benefits-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;margin-top:2.5rem}
        .benefit-card{background:rgba(255,255,255,0.04);border:1px solid rgba(74,154,190,0.2);border-radius:8px;padding:1.8rem;transition:border-color 0.2s,transform 0.2s}
        .benefit-card:hover{border-color:var(--glacier);transform:translateY(-3px)}
        .benefit-icon{font-size:2rem;margin-bottom:0.8rem;display:block}
        .benefit-card h3{font-size:1.05rem;font-weight:600;color:var(--white);margin-bottom:0.5rem}
        .benefit-card p{font-size:0.9rem;color:var(--gray);line-height:1.6}
        .loan-types{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2.5rem}
        .loan-card{background:var(--navy);border:1px solid rgba(74,154,190,0.2);border-left:3px solid var(--glacier);border-radius:0 8px 8px 0;padding:1.8rem}
        .loan-card h3{font-size:1.1rem;font-weight:700;color:var(--glacier);margin-bottom:0.6rem}
        .loan-card p{font-size:0.88rem;color:var(--light);line-height:1.65}
        .alaska-box{background:linear-gradient(135deg,rgba(26,58,107,0.5),rgba(74,154,190,0.1));border:1px solid rgba(126,200,227,0.3);border-radius:12px;padding:2.5rem;margin:2rem 0}
        .alaska-box h3{font-family:'Playfair Display',serif;font-size:1.5rem;color:var(--glacier);margin-bottom:1rem}
        .alaska-box p{color:var(--light);font-size:0.95rem;line-height:1.7}
        .req-list{list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:0.75rem;margin-top:1.5rem}
        .req-list li{display:flex;align-items:flex-start;gap:0.75rem;font-size:0.92rem;color:var(--light);background:rgba(255,255,255,0.03);border:1px solid rgba(74,154,190,0.15);padding:0.9rem 1rem;border-radius:6px}
        .req-list li::before{content:"✓";color:var(--glacier);font-weight:700;flex-shrink:0}
        .bio-block{display:grid;grid-template-columns:1fr 2fr;gap:3rem;align-items:center}
        .bio-img{aspect-ratio:1;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--deep));border:2px solid rgba(126,200,227,0.3);display:flex;align-items:center;justify-content:center;font-size:4rem}
        .bio-text .credential{color:var(--glacier);font-size:0.85rem;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:1.2rem;display:block}
        .bio-text p{color:var(--light);font-size:0.95rem;line-height:1.75;margin-bottom:1rem}
        .faq-list{margin-top:2rem}
        .faq-item{border-bottom:1px solid rgba(74,154,190,0.15);padding:1.4rem 0}
        .faq-item h3{font-size:1rem;font-weight:600;color:var(--white);margin-bottom:0.6rem}
        .faq-item p{font-size:0.9rem;color:var(--gray);line-height:1.65}
        .cta-section{background:linear-gradient(135deg,var(--blue) 0%,#0d2a50 100%);border-top:1px solid rgba(126,200,227,0.2);border-bottom:1px solid rgba(126,200,227,0.2);padding:5rem 2rem;text-align:center}
        .cta-actions{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;margin-top:2rem}
        .phone-link{color:var(--glacier);font-size:1.3rem;font-weight:700;text-decoration:none;display:block;margin-top:1.5rem;letter-spacing:0.05em}
        footer{background:#060d18;padding:2.5rem 2rem;border-top:1px solid rgba(74,154,190,0.1);text-align:center}
        footer p{font-size:0.78rem;color:var(--gray);line-height:1.8;max-width:700px;margin:0 auto}
        footer a{color:var(--glacier);text-decoration:none}
        @media(max-width:768px){
          .hero{padding:5rem 1.2rem 3rem;min-height:auto}
          .stat{min-width:130px;padding:0.8rem 1rem;border-right:none;border-bottom:1px solid rgba(74,154,190,0.15)}
          .bio-block{grid-template-columns:1fr}
          .section{padding:3.5rem 1.2rem}
          .cta-section{padding:3.5rem 1.2rem}
        }
        @media(max-width:420px){
          h1{font-size:2rem}
          .hero-actions,.cta-actions{flex-direction:column}
          .btn-primary,.btn-outline{text-align:center}
        }
      `}</style>

      <nav className="top-nav">
        <div className="nav-brand">
          <strong>Derek Huit</strong>
          <span>Cardinal Financial · NMLS #203980</span>
        </div>
        <a href="tel:9072449368" className="nav-cta">Call (907) 244-9368</a>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="aurora"></div>
        <div className="hero-content">
          <span className="eyebrow">Alaska VA Home Loans</span>
          <h1>You Served Alaska.<br /><em>Now Let Alaska</em><br />Serve You Back.</h1>
          <p className="hero-sub">Derek Huit has helped hundreds of Alaska veterans and military families use their VA benefits to buy homes — from Anchorage to the Mat-Su Valley. 18+ years. $1 billion in closings. Built from Alaska.</p>
          <div className="hero-actions">
            <a href="tel:9072449368" className="btn-primary">Get Pre-Approved Today</a>
            <a href="#benefits" className="btn-outline">See VA Benefits →</a>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {[['18+','Years in Alaska'],['$1B+','Loans Closed'],['$0','Down Payment'],['$1.2M','AK Loan Limit'],['No PMI','Required']].map(([v,l])=>(
          <div key={l} className="stat"><span className="stat-num">{v}</span><div className="stat-label">{l}</div></div>
        ))}
      </div>

      <div id="benefits">
        <section className="section">
          <span className="eyebrow">Why VA</span>
          <h2>The <span>Best Mortgage</span> Most Veterans Never Fully Use</h2>
          <p className="section-lead">The VA loan program is the most powerful home financing tool available — zero down payment, no private mortgage insurance, and competitive rates. Here&apos;s exactly what you get in Alaska.</p>
          <div className="benefits-grid">
            {[
              ['🏠','Zero Down Payment','Finance up to 100% of your home\'s purchase price. In Alaska\'s market, that means buying a $500K home with nothing out of pocket.'],
              ['🚫','No PMI — Ever','Conventional loans with less than 20% down require private mortgage insurance. VA loans never do. That\'s $200–$400/month back in your pocket.'],
              ['📉','Lower Interest Rates','VA loans consistently carry rates 0.25–0.5% lower than conventional loans. On a $400K home, that\'s thousands saved over the life of your loan.'],
              ['🔄','Reusable Benefit','Used your VA benefit before? You can use it again. Bonus entitlement allows you to hold multiple VA loans simultaneously.'],
              ['🏗️','VA Renovation Loans','Alaska\'s older housing stock often needs updates. VA renovation loans let you finance repairs into your purchase — one loan, one close.'],
              ['📋','Limited Closing Costs','The VA limits what lenders can charge veterans. Combined with seller concessions, many Alaska veterans close with little to nothing due at the table.'],
            ].map(([icon,title,desc])=>(
              <div key={String(title)} className="benefit-card">
                <span className="benefit-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="section-alt">
        <section className="section">
          <span className="eyebrow">Alaska Advantage</span>
          <h2>VA Loans Work <span>Especially Well</span> in Alaska</h2>
          <p className="section-lead">Alaska&apos;s unique market creates specific advantages for VA borrowers. Here&apos;s what you need to know — from someone who&apos;s done it here for 18 years.</p>
          <div className="alaska-box">
            <h3>Alaska&apos;s Conforming Loan Limit: $1,209,750</h3>
            <p>Alaska is one of the highest-cost states in the nation. The 2025 conforming loan limit for Alaska is $1,209,750 — far above the $766,550 national baseline. This means VA jumbo loans are rarely needed here, and you can finance a high-value Alaska home with full VA benefits and no down payment.</p>
          </div>
          <div className="loan-types">
            {[
              ['VA Purchase Loans','Buy a home, condo, or multi-unit property (up to 4 units if you occupy one) with zero down payment anywhere in Alaska — Anchorage, Wasilla, Palmer, Fairbanks, Homer, and beyond.'],
              ['VA IRRRL Streamline Refinance','Already on a VA loan? The IRRRL lets you lower your rate with minimal paperwork, no appraisal, and no out-of-pocket costs in most cases.'],
              ['VA Cash-Out Refinance','Access your home\'s equity to pay off debt, fund improvements, or invest. Available up to 100% of your home\'s value.'],
              ['VA Renovation Loans','Alaska has thousands of older homes that need weatherization, roof repairs, or energy upgrades. Roll purchase price and renovation costs into one VA loan.'],
              ['VA + AHFC Programs','Alaska Housing Finance Corporation offers a Veterans Interest Rate Preference — a 1% rate reduction on the first $50,000 of your loan. Stack this with your VA benefit.'],
              ['Multi-Unit VA Loans','VA loans can be used to purchase duplexes, triplexes, and fourplexes as long as you occupy one unit — especially popular with JBER military members.'],
            ].map(([title,desc])=>(
              <div key={String(title)} className="loan-card"><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </section>
      </div>

      <section className="section">
        <span className="eyebrow">Who Qualifies</span>
        <h2>VA Loan <span>Eligibility</span> in Alaska</h2>
        <p className="section-lead">You likely qualify if any of the following apply. Not sure? Call us — we&apos;ll check your Certificate of Eligibility at no charge.</p>
        <ul className="req-list">
          {['Active Duty service member — 90 days during wartime or 181 days peacetime','Veteran honorably discharged after 24 months of service','National Guard or Reserve member — 6 years of service','Surviving spouse of a veteran who died in service or from a service-connected disability','Alaska National Guard member fulfilling federal requirements','Active duty at JBER (Joint Base Elmendorf-Richardson) in Anchorage','Retired military living anywhere in Alaska','Prior VA loan user — your benefit is reusable'].map(item=>(
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="section-alt">
        <section className="section">
          <div className="bio-block">
            <div className="bio-img">🏔️</div>
            <div className="bio-text">
              <span className="eyebrow">Your Alaska VA Specialist</span>
              <h2>Derek Huit</h2>
              <span className="credential">NMLS #203980 · Cardinal Financial · 18+ Years · $1B+ in Closings</span>
              <p>I&apos;ve been closing VA loans in Alaska since before some of my competitors were in the industry. I&apos;ve worked through every market condition this state has thrown at us — oil booms, rate spikes, military base expansions, and the unique logistical challenges that come with financing homes in the Last Frontier.</p>
              <p>I understand JBER military housing waitlists. I understand the 3-week contract timelines Alaska winter closings require. I know how VA appraisals work in rural Alaska, and how to get to the table fast for military families transferring on orders who can&apos;t wait 45 days.</p>
              <a href="tel:9072449368" className="btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Talk to Derek: (907) 244-9368</a>
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <span className="eyebrow">Common Questions</span>
        <h2>Alaska VA Loan <span>FAQ</span></h2>
        <div className="faq-list">
          {[
            ['How fast can I close a VA loan in Alaska?','With a complete file and a motivated seller, we target 21–30 days. Alaska\'s appraisal environment can extend timelines in some cases. I\'ll give you a realistic estimate upfront — and I\'ve closed VA loans in 15 days when the situation required it.'],
            ['Can I use my VA benefit if I\'m stationed at JBER?','Absolutely. JBER is one of Alaska\'s largest military installations and VA loans are the primary tool I use for active duty families there. I understand the specific challenges of military PCS timelines and on-base housing waitlists.'],
            ['What\'s the maximum VA loan amount in Alaska?','Alaska\'s conforming loan limit for 2025 is $1,209,750 — one of the highest in the nation. VA loans up to this amount require zero down payment for eligible veterans with full entitlement.'],
            ['Can I buy a rental property with a VA loan in Alaska?','Yes — if you occupy one of the units. VA loans allow purchase of up to 4-unit properties. This is an excellent strategy in Anchorage and Wasilla where rental demand from military families remains high year-round.'],
            ['Does AHFC work with VA loans?','Yes. AHFC\'s Veterans Interest Rate Preference provides a 1% rate reduction on the first $50,000 of your loan — completely stackable with your VA benefit. I\'ll help you qualify for both simultaneously.'],
            ['I used my VA benefit before. Can I use it again?','In most cases, yes. Once your original VA loan is paid off and the property sold, your full entitlement is restored. In some cases, bonus entitlement allows you to hold two VA loans at once.'],
          ].map(([q,a])=>(
            <div key={String(q)} className="faq-item"><h3>{q}</h3><p>{a}</p></div>
          ))}
        </div>
      </section>

      <div className="cta-section">
        <span className="eyebrow">Ready to Start</span>
        <h2>Your <span>Alaska VA Loan</span><br />Starts With One Call</h2>
        <p style={{color:'var(--light)',fontSize:'1rem',maxWidth:'560px',margin:'0 auto'}}>No pressure. No obligation. Just a straight conversation about your situation from someone who&apos;s been closing Alaska VA loans for 18 years.</p>
        <div className="cta-actions">
          <a href="tel:9072449368" className="btn-primary">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="btn-outline">Apply Online →</a>
        </div>
        <a href="tel:9072449368" className="phone-link">(907) 244-9368</a>
      </div>

      <footer>
        <p>Derek Huit · NMLS #203980 · Cardinal Financial Company, NMLS #66247 · Equal Housing Lender<br />
        Licensed in Alaska · Anchorage, AK · <a href="tel:9072449368">(907) 244-9368</a><br />
        This is not an offer to lend or extend credit. All loans subject to credit approval. VA loan eligibility requirements apply.</p>
      </footer>
    </>
  )
}
