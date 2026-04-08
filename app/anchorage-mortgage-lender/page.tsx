import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anchorage Mortgage Lender | Derek Huit | Cardinal Financial – NMLS #203980',
  description: "Derek Huit is Anchorage's most experienced mortgage lender — 18+ years, $1B+ closed, and built from Alaska. VA, Conventional, FHA, Jumbo, AHFC. Call (907) 244-9368.",
  keywords: 'Anchorage mortgage lender, Anchorage mortgage broker, mortgage Anchorage AK, home loan Anchorage Alaska, best mortgage lender Anchorage, Anchorage VA loan, AHFC lender Anchorage',
  alternates: { canonical: 'https://askalaskamortgage.ai/anchorage-mortgage-lender' },
}

export default function AnchorageMortgageLender() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        :root{--bg:#f5f2ee;--cream:#ede9e2;--white:#ffffff;--dark:#1a1710;--charcoal:#2e2b24;--brown:#5c4f3a;--gold:#a07c3a;--gold-lt:#c8a45a;--teal:#2a6e6e;--teal-lt:#3d9898;--muted:#7a7162;--border:#d9d3c8}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:"DM Sans",sans-serif;background:var(--bg);color:var(--dark);overflow-x:hidden;line-height:1.65}
        .anav{background:var(--dark);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .anav-brand strong{font-family:"DM Serif Display",serif;font-size:1.15rem;color:#fff}
        .anav-brand span{display:block;font-size:0.7rem;color:var(--gold-lt);letter-spacing:0.12em;text-transform:uppercase}
        .anav-cta{background:var(--gold-lt);color:var(--dark);padding:0.6rem 1.4rem;border-radius:4px;font-weight:600;font-size:0.88rem;letter-spacing:0.03em;text-decoration:none;transition:all 0.2s}
        .ahero{background:var(--dark);position:relative;overflow:hidden;padding:7rem 2rem 6rem;display:flex;align-items:center;min-height:80vh}
        .ahero-deco{position:absolute;top:2rem;right:2rem;font-size:9rem;opacity:0.06;line-height:1;font-family:"DM Serif Display",serif;color:var(--gold-lt);user-select:none}
        .ahero-content{position:relative;max-width:780px;animation:riseIn 0.9s ease both}
        @keyframes riseIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .aeyebrow{display:inline-block;font-size:0.74rem;letter-spacing:0.22em;text-transform:uppercase;font-weight:600;color:var(--gold-lt);margin-bottom:1.5rem}
        .ah1{font-family:"DM Serif Display",serif;font-size:clamp(2.6rem,5.5vw,4.4rem);line-height:1.08;color:#fff;margin-bottom:1.2rem}
        .ah1 em{font-style:italic;color:var(--gold-lt)}
        .ahero-sub{font-size:clamp(1rem,2vw,1.15rem);color:rgba(255,255,255,0.72);font-weight:300;max-width:600px;margin-bottom:2.5rem;line-height:1.75}
        .aactions{display:flex;gap:1rem;flex-wrap:wrap}
        .abtn-d{background:var(--gold-lt);color:var(--dark);padding:0.9rem 2.2rem;border-radius:4px;font-weight:600;font-size:0.95rem;text-decoration:none;transition:all 0.2s}
        .abtn-o{border:1px solid rgba(255,255,255,0.35);color:rgba(255,255,255,0.85);padding:0.9rem 2rem;border-radius:4px;font-weight:500;font-size:0.95rem;text-decoration:none;transition:all 0.2s}
        .creds-bar{background:var(--cream);border-bottom:1px solid var(--border);padding:1.8rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .acred{flex:1;min-width:150px;max-width:230px;text-align:center;padding:0.8rem 1.5rem;border-right:1px solid var(--border)}
        .acred:last-child{border-right:none}
        .acred-val{font-family:"DM Serif Display",serif;font-size:1.9rem;color:var(--gold);display:block}
        .acred-lbl{font-size:0.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;margin-top:0.3rem}
        .asection{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .asection-alt{background:var(--white)}
        .asection-dark{background:var(--dark);color:#fff}
        .ah2{font-family:"DM Serif Display",serif;font-size:clamp(1.9rem,3.5vw,2.7rem);color:var(--dark);margin-bottom:0.8rem;line-height:1.2}
        .asection-dark .ah2{color:#fff}
        .ah2 em{font-style:italic;color:var(--gold)}
        .aintro{font-size:1rem;color:var(--brown);max-width:680px;margin-bottom:3rem;line-height:1.75;font-weight:300}
        .asection-dark .aintro{color:rgba(255,255,255,0.65)}
        .programs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.5rem;margin-top:2rem}
        .program-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.8rem;transition:all 0.25s}
        .program-card:hover{border-color:var(--gold);box-shadow:0 4px 20px rgba(160,124,58,0.12);transform:translateY(-3px)}
        .prog-badge{display:inline-block;background:var(--cream);border:1px solid var(--border);border-radius:20px;font-size:0.72rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);padding:0.25rem 0.75rem;margin-bottom:0.9rem}
        .program-card h3{font-family:"DM Serif Display",serif;font-size:1.3rem;color:var(--dark);margin-bottom:0.6rem}
        .program-card p{font-size:0.88rem;color:var(--muted);line-height:1.65}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;margin-top:2rem}
        .why-item{display:flex;gap:1.2rem;align-items:flex-start}
        .why-icon{width:44px;height:44px;border-radius:8px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
        .why-item h3{font-size:0.97rem;font-weight:600;color:#fff;margin-bottom:0.4rem}
        .why-item p{font-size:0.86rem;color:rgba(255,255,255,0.55);line-height:1.6}
        .neighborhoods{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem}
        .hood{background:var(--cream);border:1px solid var(--border);border-radius:8px;padding:1.2rem;transition:all 0.2s}
        .hood:hover{background:var(--white);border-color:var(--gold-lt)}
        .hood h3{font-size:0.95rem;font-weight:600;color:var(--dark);margin-bottom:0.4rem}
        .hood p{font-size:0.8rem;color:var(--muted);line-height:1.55}
        .ahfc-box{background:linear-gradient(135deg,#1e3a3a,#152a2a);border-radius:12px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(61,152,152,0.3)}
        .ahfc-badge{background:var(--teal);color:#fff;font-size:0.72rem;font-weight:700;letter-spacing:0.1em;padding:0.3rem 0.8rem;border-radius:20px;display:inline-block;text-transform:uppercase;margin-bottom:1rem}
        .ahfc-box h3{font-family:"DM Serif Display",serif;font-size:1.5rem;color:#fff;margin-bottom:0.8rem}
        .ahfc-box p{font-size:0.9rem;color:rgba(255,255,255,0.7);line-height:1.7}
        .ahfc-box ul{list-style:none;margin-top:1rem;display:flex;flex-direction:column;gap:0.5rem}
        .ahfc-box li{font-size:0.88rem;color:rgba(255,255,255,0.75);padding-left:1.5rem;position:relative}
        .ahfc-box li::before{content:"→";position:absolute;left:0;color:var(--teal-lt)}
        .process{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-top:2rem;counter-reset:steps}
        .process-step{text-align:center;padding:1.8rem 1.2rem;background:var(--white);border:1px solid var(--border);border-radius:10px;counter-increment:steps;position:relative}
        .process-step::before{content:counter(steps);position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:32px;height:32px;border-radius:50%;background:var(--gold);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem}
        .process-step h3{font-size:0.95rem;font-weight:600;color:var(--dark);margin-bottom:0.5rem;margin-top:0.5rem}
        .process-step p{font-size:0.82rem;color:var(--muted);line-height:1.6}
        .reviews{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}
        .review-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.8rem}
        .stars{color:var(--gold);font-size:1rem;margin-bottom:0.8rem;letter-spacing:0.1em}
        .review-card p{font-size:0.88rem;color:var(--charcoal);line-height:1.7;font-style:italic;margin-bottom:1rem}
        .reviewer{font-size:0.8rem;color:var(--muted);font-weight:600;font-style:normal}
        .acta{background:var(--dark);padding:6rem 2rem;text-align:center}
        .acta h2{font-family:"DM Serif Display",serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:1rem}
        .acta h2 em{color:var(--gold-lt);font-style:italic}
        .acta p{color:rgba(255,255,255,0.65);max-width:540px;margin:0 auto 2.5rem;line-height:1.75}
        .acta-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phone-display{font-family:"DM Serif Display",serif;font-size:2.2rem;color:var(--gold-lt);text-decoration:none;display:block;margin-top:1.5rem;transition:color 0.2s}
        .phone-display:hover{color:#fff}
        .nmls-note{font-size:0.76rem;color:rgba(255,255,255,0.3);margin-top:1.5rem}
        afooter{display:block;background:#0d0c09;padding:2rem;border-top:1px solid rgba(160,124,58,0.2);text-align:center}
        .afoot-p{font-size:0.75rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        .afoot-p a{color:var(--gold-lt);text-decoration:none}
        @media(max-width:768px){.anav{padding:0.8rem 1.2rem}.ahero{padding:5rem 1.2rem 3.5rem;min-height:auto}.asection{padding:3.5rem 1.2rem}.acred{min-width:120px;border-right:none;border-bottom:1px solid var(--border)}.acred:last-child{border-bottom:none}.acta{padding:4rem 1.2rem}}
        @media(max-width:420px){.ah1{font-size:2.2rem}.aactions,.acta-actions{flex-direction:column}}
      `}</style>

      <nav className="anav">
        <div className="anav-brand">
          <strong>Derek Huit</strong>
          <span>Cardinal Financial · NMLS #203980</span>
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
            <a href="tel:9072449368" className="abtn-d">Get Pre-Approved Today</a>
            <a href="#programs" className="abtn-o">See Loan Programs →</a>
          </div>
        </div>
      </section>

      <div className="creds-bar">
        {[['18+','Years in Alaska'],['$1B+','Loans Closed'],['All','Loan Types'],['AHFC','Approved Programs'],['AK','Licensed Statewide']].map(([v,l])=>(
          <div key={l} className="acred"><span className="acred-val">{v}</span><div className="acred-lbl">{l}</div></div>
        ))}
      </div>

      <div id="programs">
        <section className="asection">
          <span className="aeyebrow">What We Offer</span>
          <h2 className="ah2">Every Loan <em>Anchorage</em> Needs</h2>
          <p className="aintro">Whether you&apos;re buying your first home near JBER, refinancing in South Anchorage, or investing in a multi-unit near UAA — I have the loan program and the Alaska experience to close it right.</p>
          <div className="programs-grid">
            {[
              ['Military','VA Home Loans','Zero down payment, no PMI, competitive rates. Anchorage has Alaska's largest military population — VA loans are my most-used product. I close VA loans in 21 days or less.'],
              ['Purchase','Conventional Loans','Alaska's 2025 conforming loan limit is $1,209,750. Flexible down payment options from 3% for first-time buyers to 20% to eliminate PMI.'],
              ['First-Time','FHA Loans','3.5% down payment, flexible credit requirements. Ideal for first-time Anchorage homebuyers building their financial foundation.'],
              ['State Program','AHFC Loans','Alaska Housing Finance Corporation offers below-market rates and down payment assistance to eligible Alaska homebuyers. I'm experienced with every AHFC program.'],
              ['High Value','Jumbo Loans','Above $1,209,750? Anchorage has high-value neighborhoods that require jumbo financing. I offer competitive jumbo products for qualified borrowers.'],
              ['Investment','Investment & STR Loans','Anchorage's rental market is strong year-round. I specialize in financing investment properties and short-term rentals — including programs using Airbnb income data.'],
              ['Refinance','Rate & Term Refinance','Lower your rate, shorten your term, or restructure your loan. I'll run the math honestly — if it doesn't make sense for you, I'll tell you that too.'],
              ['Equity','Cash-Out Refinance','Anchorage homeowners have built significant equity over the past decade. Access that equity for renovations, investments, or debt consolidation.'],
            ].map(([badge,title,desc])=>(
              <div key={String(title)} className="program-card">
                <span className="prog-badge">{badge}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="ahfc-box" style={{marginTop:'3rem'}}>
            <span className="ahfc-badge">Alaska-Only Advantage</span>
            <h3>Alaska Housing Finance Corporation (AHFC) Programs</h3>
            <p>AHFC offers interest rate reductions and down payment assistance programs exclusively for Alaska residents. As an experienced Alaska lender, I&apos;ve closed hundreds of AHFC loans and know these programs inside and out.</p>
            <ul>
              {['First Home Program — below-market rates for first-time buyers','Veterans Interest Rate Preference — 1% rate reduction on first $50,000','Supplemental Loan — stack with your primary mortgage for renovations','Energy Efficiency programs — rate reductions for energy-efficient properties','Manufactured Home programs — financing for eligible AK manufactured housing'].map(item=>(
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="asection-dark">
        <section className="asection">
          <span className="aeyebrow" style={{color:'var(--gold-lt)'}}>Why Derek Huit</span>
          <h2 className="ah2" style={{color:'#fff'}}>18 Years.<br /><em style={{color:'var(--gold-lt)'}}>$1 Billion.</em><br />Built from Alaska.</h2>
          <p className="aintro">I&apos;m not a call center. I&apos;m not a national lender who parachuted into Alaska. I&apos;ve been closing mortgages in this state since 2006 — through oil booms, rate spikes, and every market condition Alaska has thrown at us.</p>
          <div className="why-grid">
            {[
              ['🏔️','Genuine Alaska Experience','I understand Anchorage's neighborhoods, military base dynamics, rural property challenges, and the seasonal timing that affects Alaska real estate closings. You can't learn this from a zip code lookup.'],
              ['⚡','Cardinal Financial Infrastructure','I'm backed by Cardinal Financial — one of the nation's top independent mortgage lenders. Deep product shelf, in-house underwriting, and the speed to compete with any lender in the state.'],
              ['📊','Data-Driven Advice','I've analyzed 7+ years of Alaska HMDA lending data. I know which programs perform best in this market, what approval rates look like by neighborhood, and where rates are trending.'],
              ['🤝','No Pressure, No Games','I've been in this industry long enough to know that honest advice builds lasting relationships. If a refinance doesn't pencil out, I'll tell you. If you're better off waiting, I'll say that too.'],
              ['📱','Modern Process','Digital application, real-time loan status, e-signatures, remote closing options. Alaska's geography shouldn't create friction in your mortgage process.'],
              ['🎖️','Military Specialist','VA loans are one of my primary specialties. I understand PCS timelines, JBER housing waitlists, BAH math, and how to close a VA loan in 21 days for a military family under time pressure.'],
            ].map(([icon,title,desc])=>(
              <div key={String(title)} className="why-item">
                <div className="why-icon">{icon}</div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="asection">
        <span className="aeyebrow">Anchorage Service Areas</span>
        <h2 className="ah2">Every <em>Anchorage</em> Neighborhood,<br />One Lender.</h2>
        <p className="aintro">I know these neighborhoods because I&apos;ve closed loans in all of them. Each area has different buyer profiles, price points, and considerations — and I&apos;ll match your loan to where you want to live.</p>
        <div className="neighborhoods">
          {[
            ['Eagle River','Popular with military families. Strong schools, outdoor access, lower prices than midtown. 20 min from JBER.'],
            ['South Anchorage','Higher-value homes, Hillside neighborhoods, proximity to trails. Strong appreciation history.'],
            ['Midtown','Central location, condo market, investment properties near UAA. Active rental market year-round.'],
            ['Airport Heights','Established neighborhood close to JBER and downtown. Strong starter-home and FHA market.'],
            ['Government Hill','Closest civilian neighborhood to JBER. Strong military buyer and VA loan market.'],
            ['Girdwood','Resort community 40 min south. Strong short-term rental market — I specialize in STR financing here.'],
            ['Wasilla / Palmer','Mat-Su Valley suburbs with strong growth. More square footage per dollar. 45 min from Anchorage.'],
            ['Statewide Alaska','Licensed statewide. Fairbanks, Juneau, Homer, Kenai, and beyond. Remote closings available.'],
          ].map(([name,desc])=>(
            <div key={String(name)} className="hood"><h3>{name}</h3><p>{desc}</p></div>
          ))}
        </div>
      </section>

      <div className="asection-alt">
        <section className="asection">
          <span className="aeyebrow">How It Works</span>
          <h2 className="ah2">From Call to <em>Keys</em></h2>
          <p className="aintro">My process is built around Alaska&apos;s realities — fast timelines, remote closings, military PCS schedules, and seasonal urgency.</p>
          <div className="process">
            {[
              ['Call or Apply','One conversation or an online application. I respond same day — always.'],
              ['Pre-Approval','Fast pre-approval letter in 24 hours. Strong enough to compete in any Anchorage market.'],
              ['Find Your Home','I work alongside your agent. Sellers and agents know my pre-approvals close.'],
              ['Submit & Process','Cardinal Financial's in-house underwriting moves fast. I keep you updated in real time.'],
              ['Close on Time','21–30 day target close. I've closed VA loans in 15 days when timelines demanded it.'],
            ].map(([title,desc])=>(
              <div key={String(title)} className="process-step"><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </section>
      </div>

      <section className="asection">
        <span className="aeyebrow">Client Reviews</span>
        <h2 className="ah2">What Anchorage <em>Borrowers</em> Say</h2>
        <div className="reviews">
          {[
            ['"Derek was incredibly knowledgeable and very helpful during our purchase and underwriting process. He worked with us diligently and was always willing to answer any questions."','Anchorage Homebuyer'],
            ['"The application process was fast and easy and I was grateful to receive the pre-approval letter in a short time period."','Anchorage First-Time Buyer'],
            ['"Derek understands the entire process and his expertise gave my wife and I assurance and confidence for our home buying process."','Anchorage Homeowner'],
          ].map(([quote,name])=>(
            <div key={String(name)} className="review-card">
              <div className="stars">★★★★★</div>
              <p>{quote}</p>
              <span className="reviewer">— {name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="acta">
        <h2>Ready to Buy in <em>Anchorage?</em></h2>
        <p>One call. Same-day response. Pre-approval in 24 hours. Let&apos;s build your path to homeownership in Alaska&apos;s largest city.</p>
        <div className="acta-actions">
          <a href="tel:9072449368" className="abtn-d">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="abtn-o">Apply Online →</a>
        </div>
        <a href="tel:9072449368" className="phone-display">(907) 244-9368</a>
        <p className="nmls-note">Derek Huit · NMLS #203980 · Cardinal Financial · Equal Housing Lender</p>
      </div>

      <afooter>
        <p className="afoot-p">Derek Huit · NMLS #203980 · Cardinal Financial Company, NMLS #66247 · Equal Housing Lender · Licensed in Alaska<br />
        Serving Anchorage, Eagle River, South Anchorage, Girdwood, Wasilla, Palmer, and statewide Alaska<br />
        <a href="tel:9072449368">(907) 244-9368</a><br />
        This is not a commitment to lend. All loans subject to credit approval. Alaska Housing Finance Corporation program availability subject to eligibility.</p>
      </afooter>
    </>
  )
}
