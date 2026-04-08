import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wasilla Mortgage Lender | Derek Huit | Cardinal Financial – NMLS #203980',
  description: 'Derek Huit is the most experienced mortgage lender serving Wasilla and the Mat-Su Valley — 18+ years, $1B+ closed. VA, FHA, Conventional, AHFC. Call (907) 244-9368.',
  keywords: 'Wasilla mortgage lender, Wasilla mortgage broker, Mat-Su Valley mortgage, home loan Wasilla AK, Wasilla VA loan, Palmer mortgage, Mat-Su mortgage, Alaska mortgage Wasilla, best mortgage lender Wasilla',
  alternates: { canonical: 'https://askalaskamortgage.ai/wasilla-mortgage-lender' },
  openGraph: {
    title: 'Wasilla Mortgage Lender | Derek Huit',
    description: '18+ years. $1B+ closed. Serving Wasilla and the Mat-Su Valley.',
    type: 'website',
    url: 'https://askalaskamortgage.ai/wasilla-mortgage-lender',
  },
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Derek Huit – Wasilla Mortgage Lender | Cardinal Financial",
  "description": "Mortgage lending specialist serving Wasilla, Palmer, and the entire Mat-Su Valley. 18+ years Alaska experience, $1B+ in closings.",
  "url": "https://askalaskamortgage.ai/wasilla-mortgage-lender",
  "telephone": "+19072449368",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wasilla",
    "addressRegion": "AK",
    "postalCode": "99654",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "61.5814", "longitude": "-149.4406" },
  "areaServed": ["Wasilla AK", "Palmer AK", "Mat-Su Borough AK", "Eagle River AK", "Anchorage AK"],
  "hasCredential": "NMLS #203980"
}

export default function WasillaMortgageLender() {
  const programs = [
    ["VA Loans","The #1 loan product in the Mat-Su Valley. Zero down payment, no PMI, competitive rates. I close VA loans in Wasilla in 21 days or less — including for military families transferring to JBER who are buying in the Valley."],
    ["FHA Loans","Wasilla is a strong FHA market. 3.5% down payment, flexible credit requirements, and Alaska-specific underwriting guidance for first-time Mat-Su buyers."],
    ["Conventional Loans","Alaska\'s $1,209,750 conforming limit covers nearly every Wasilla and Palmer home. Fixed and adjustable rate options with down payments from 3%."],
    ["AHFC Programs","Alaska Housing Finance Corporation programs offer below-market interest rates exclusively for Alaska residents. I know every AHFC program and can stack these with VA or conventional loans."],
    ["Investment Property","Wasilla\'s rental market is growing fast. I specialize in financing multi-unit properties, vacation rentals, and the \'rent-free, live-free\' strategy popular with Mat-Su military families."],
    ["Jumbo Loans","High-value Mat-Su properties above $1,209,750 require jumbo financing. I offer competitive jumbo products for qualified borrowers in the Valley."],
    ["VA Renovation Loans","Wasilla and Palmer have a large inventory of older homes that need updates to meet VA standards. VA renovation loans let you finance purchase and repairs in one closing."],
    ["Refinance","Whether you\'re lowering your rate, pulling cash out, or restructuring your loan, I\'ll run the honest math. If refinancing doesn\'t benefit you, I\'ll say so."],
  ]

  const neighborhoods = [
    ["Wasilla","The heart of the Mat-Su Valley. Mix of starter homes, growing developments, and investment properties. Strong VA and FHA market."],
    ["Palmer","Historic downtown, family-oriented, slightly smaller market than Wasilla. Growing fast. Strong conventional buyer base."],
    ["Big Lake","Lakefront properties, recreational lifestyle. Unique financing considerations I know well."],
    ["Houston","Rural Mat-Su community. USDA-eligible areas, acreage properties, unique appraisal dynamics."],
    ["Meadow Lakes","Growing suburban community west of Wasilla. Newer developments, strong demand from Anchorage commuters."],
    ["Sutton / Chickaloon","Rural properties, larger lots, off-grid considerations. Remote closings available."],
    ["Butte","Between Palmer and Wasilla. Mix of acreage and residential. Strong equity market."],
    ["Eagle River","Mat-Su commuters often compare Eagle River. 15 min from JBER, 45 min from Wasilla. I serve both markets."],
  ]

  const whyItems = [
    ["18+ Years in Alaska","I\'ve been closing loans in the Mat-Su Valley since before Wasilla was a household name outside Alaska. I know the local appraisers, the title companies, the seasonal timing, and the neighborhoods."],
    ["vs. Motto Mortgage Aurora","The Mat-Su Valley deserves more than a franchise playbook. I bring 18 years and $1 billion in production to every Wasilla transaction. That\'s experience that can\'t be replicated."],
    ["Cardinal Financial Firepower","I\'m backed by Cardinal Financial — one of the nation\'s top independent mortgage lenders. Deep product shelf, in-house underwriting, and the speed to close on even tight Mat-Su timelines."],
    ["Mat-Su Market Data","I\'ve analyzed 7+ years of HMDA lending data across the Mat-Su Borough. I know what loan types close, what approval rates look like, and where the market is heading."],
    ["Military Families Specialist","Wasilla and Palmer are popular destinations for military families from JBER. I understand PCS timelines, VA loan nuances, and the BAH math that makes owning in the Valley smarter than renting."],
    ["Remote & Fast Process","Digital application, real-time status updates, e-signatures, remote closings. The Mat-Su Valley\'s distance from Anchorage should never slow down your mortgage."],
  ]

  const faqs = [
    ["Why is Wasilla growing so fast?","The Mat-Su Valley has been booming while Anchorage\'s population has declined. Wasilla and Palmer offer more square footage per dollar, space, and a quality of life that appeals to families, military members, and remote workers. Population growth drives home demand — and appreciation."],
    ["Is it better to buy in Wasilla or Anchorage?","It depends on your priorities. Wasilla and Palmer offer more home for the money — but add 45–60 minutes to an Anchorage commute. For military families using a VA loan, Wasilla is often the better financial decision: lower prices, more space, same zero-down benefit."],
    ["Can I use a VA loan in Wasilla?","Absolutely. VA loans are one of the most common products I close in the Mat-Su Valley. Wasilla qualifies for the full $1,209,750 Alaska conforming loan limit with zero down payment and no PMI for eligible veterans."],
    ["What\'s the AHFC First Home program?","Alaska Housing Finance Corporation\'s First Home Limited program offers below-market interest rates for first-time buyers in Alaska. There are income and purchase price limits — call me and I\'ll tell you in 5 minutes whether you qualify. It\'s one of the best deals in Alaska homebuying."],
    ["How long does it take to close a mortgage in Wasilla?","My target is 21–30 days from complete application to close. Wasilla appraisals can occasionally extend timelines due to rural property access, but I manage this proactively by engaging appraisers early. I\'ve closed Mat-Su Valley loans in 15 days when PCS orders required it."],
    ["Do you serve rural Mat-Su properties?","Yes — acreage properties, parcels with outbuildings, off-grid homes, and properties with wells and septic systems all have specific underwriting considerations. I\'ve closed hundreds of these in Alaska and know how to navigate them."],
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap');
        :root{
          --forest:#1a2e1a;--pine:#2d4a2d;--bark:#4a3728;--gold:#b8860b;--gold-lt:#d4a017;--cream:#f4f1eb;--paper:#faf8f4;--white:#ffffff;
          --sage:#6b8f6b;--mist:#e8ede8;--charcoal:#2a2520;--muted:#6b6158;--border:#ddd8ce;--accent:#8b1a1a;
        }
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'Inter',sans-serif;background:var(--paper);color:var(--charcoal);overflow-x:hidden;line-height:1.65}

        /* NAV */
        .wnav{background:var(--forest);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .wnav-brand strong{font-family:'Lora',serif;font-size:1.15rem;color:#fff;letter-spacing:.01em}
        .wnav-brand span{display:block;font-size:.68rem;color:#a8c4a8;letter-spacing:.14em;text-transform:uppercase;margin-top:.1rem}
        .wnav-cta{background:var(--gold-lt);color:var(--forest);padding:.6rem 1.4rem;border-radius:3px;font-weight:600;font-size:.88rem;text-decoration:none;transition:background .2s}
        .wnav-cta:hover{background:#e8b420}

        /* HERO */
        .whero{position:relative;overflow:hidden;min-height:85vh;display:flex;align-items:center;padding:6rem 2rem 5rem;background:var(--forest)}
        .whero-texture{position:absolute;inset:0;opacity:.06;background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:28px 28px}
        .whero-gradient{position:absolute;inset:0;background:linear-gradient(160deg,rgba(26,46,26,.6) 0%,rgba(45,74,45,.4) 50%,rgba(26,46,26,.8) 100%)}
        .whero-stripe{position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--gold-lt),transparent)}
        .whero-content{position:relative;max-width:820px;animation:wRise .9s ease both}
        @keyframes wRise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .weyebrow{display:inline-flex;align-items:center;gap:.5rem;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;color:var(--gold-lt);margin-bottom:1.6rem}
        .weyebrow::before{content:'';display:block;width:24px;height:1px;background:var(--gold-lt)}
        .wh1{font-family:'Lora',serif;font-size:clamp(2.5rem,5.5vw,4.2rem);font-weight:700;line-height:1.1;color:#fff;margin-bottom:1.2rem}
        .wh1 em{font-style:italic;color:#c8e4a8}
        .whero-sub{font-size:clamp(.95rem,2vw,1.15rem);color:rgba(255,255,255,.75);font-weight:300;max-width:640px;margin-bottom:2.5rem;line-height:1.75}
        .whero-actions{display:flex;gap:1rem;flex-wrap:wrap}
        .wbtn-p{background:var(--gold-lt);color:var(--forest);padding:.9rem 2.2rem;border-radius:3px;font-weight:700;font-size:.95rem;text-decoration:none;transition:all .2s}
        .wbtn-p:hover{background:#e8b420;transform:translateY(-2px)}
        .wbtn-o{border:1px solid rgba(255,255,255,.4);color:rgba(255,255,255,.85);padding:.9rem 2rem;border-radius:3px;font-weight:500;font-size:.95rem;text-decoration:none;transition:all .2s}
        .wbtn-o:hover{border-color:rgba(255,255,255,.8);color:#fff}

        /* STATS */
        .wstats{background:var(--cream);border-bottom:1px solid var(--border);padding:1.8rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .wstat{flex:1;min-width:145px;max-width:220px;text-align:center;padding:.8rem 1.2rem;border-right:1px solid var(--border)}
        .wstat:last-child{border-right:none}
        .wstat-val{font-family:'Lora',serif;font-size:2rem;color:var(--gold);display:block;line-height:1}
        .wstat-lbl{font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-top:.35rem}

        /* COMPETITOR CALLOUT */
        .wcompete{background:var(--pine);padding:2.5rem 2rem;text-align:center}
        .wcompete-inner{max-width:800px;margin:0 auto}
        .wcompete h2{font-family:'Lora',serif;font-size:clamp(1.4rem,3vw,2rem);color:#fff;margin-bottom:.8rem}
        .wcompete p{color:rgba(255,255,255,.75);font-size:.95rem;line-height:1.7;max-width:680px;margin:0 auto 1.5rem}
        .wcompete-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:1.5rem;align-items:center;margin-top:1.5rem}
        .wvs-box{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:1.4rem}
        .wvs-box h3{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.8rem}
        .wvs-box.them h3{color:#f4a261}
        .wvs-box.us h3{color:#a8e6a8}
        .wvs-box ul{list-style:none;display:flex;flex-direction:column;gap:.4rem}
        .wvs-box li{font-size:.84rem;line-height:1.5}
        .wvs-box.them li{color:rgba(255,255,255,.6)}
        .wvs-box.us li{color:rgba(255,255,255,.85)}
        .wvs-box.us li::before{content:'\u2713 ';color:#a8e6a8;font-weight:700}
        .wvs-box.them li::before{content:'\u2022 ';color:#f4a261}
        .wvs-label{font-family:'Lora',serif;font-size:2.5rem;font-weight:700;color:var(--gold-lt);text-align:center}

        /* SECTIONS */
        .wsec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .wsec-alt{background:var(--mist)}
        .wsec-dk{background:var(--forest)}
        .wh2{font-family:'Lora',serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:var(--charcoal);margin-bottom:.8rem;line-height:1.2}
        .wsec-dk .wh2{color:#fff}
        .wh2 em{font-style:italic;color:var(--gold)}
        .wsec-dk .wh2 em{color:#c8e4a8}
        .wintero{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:3rem;line-height:1.75;font-weight:300}
        .wsec-dk .wintero{color:rgba(255,255,255,.65)}

        /* PROGRAMS */
        .wpgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.4rem;margin-top:2rem}
        .wpcard{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.8rem;border-left:3px solid var(--gold);transition:all .25s}
        .wpcard:hover{border-left-color:var(--pine);box-shadow:0 4px 20px rgba(0,0,0,.08);transform:translateY(-3px)}
        .wpcard h3{font-family:'Lora',serif;font-size:1.15rem;color:var(--forest);margin-bottom:.6rem}
        .wpcard p{font-size:.87rem;color:var(--muted);line-height:1.65}

        /* NEIGHBORHOODS */
        .whgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1rem;margin-top:2rem}
        .whood{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.3rem;transition:all .2s}
        .whood:hover{border-color:var(--sage);background:var(--mist)}
        .whood h3{font-size:.95rem;font-weight:600;color:var(--forest);margin-bottom:.4rem}
        .whood p{font-size:.8rem;color:var(--muted);line-height:1.55}

        /* WHY */
        .wwgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .wwitem{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.6rem}
        .wwitem h3{font-size:1rem;font-weight:600;color:#fff;margin-bottom:.5rem}
        .wwitem p{font-size:.87rem;color:rgba(255,255,255,.6);line-height:1.65}
        .wwitem h3 span{display:inline-block;margin-right:.5rem}

        /* MAT-SU ADVANTAGE */
        .wmatsu{background:linear-gradient(135deg,var(--bark),#3a2a1a);border-radius:10px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(180,134,11,.25)}
        .wmatsu h3{font-family:'Lora',serif;font-size:1.5rem;color:var(--gold-lt);margin-bottom:.8rem}
        .wmatsu p{font-size:.92rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:.8rem}
        .wmatsu p:last-child{margin-bottom:0}

        /* FAQ */
        .wfaqlist{margin-top:1.5rem}
        .wfaq{border-bottom:1px solid var(--border);padding:1.4rem 0}
        .wsec-alt .wfaq{border-bottom-color:#d0d8d0}
        .wfaq h3{font-size:1rem;font-weight:600;color:var(--charcoal);margin-bottom:.5rem}
        .wfaq p{font-size:.88rem;color:var(--muted);line-height:1.65}

        /* CTA */
        .wcta{background:var(--forest);padding:6rem 2rem;text-align:center;position:relative;overflow:hidden}
        .wcta::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.04) 1px,transparent 1px);background-size:24px 24px}
        .wcta-inner{position:relative}
        .wcta h2{font-family:'Lora',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin-bottom:1rem}
        .wcta h2 em{font-style:italic;color:#c8e4a8}
        .wcta p{color:rgba(255,255,255,.7);max-width:560px;margin:0 auto 2.5rem;line-height:1.75}
        .wcta-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .wphd{font-family:'Lora',serif;font-size:2.2rem;color:var(--gold-lt);text-decoration:none;display:block;margin-top:1.5rem;transition:color .2s}
        .wphd:hover{color:#fff}
        .wnmls{font-size:.74rem;color:rgba(255,255,255,.3);margin-top:1.5rem}

        /* FOOTER */
        .wfoot{background:#0d1510;padding:2rem;border-top:1px solid rgba(180,134,11,.15);text-align:center}
        .wfoot p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        .wfoot a{color:var(--gold-lt);text-decoration:none}

        @media(max-width:768px){
          .wnav{padding:.8rem 1.2rem}
          .whero{padding:5rem 1.2rem 3rem;min-height:auto}
          .wsec{padding:3.5rem 1.2rem}
          .wstat{min-width:120px;border-right:none;border-bottom:1px solid var(--border)}
          .wstat:last-child{border-bottom:none}
          .wcompete-grid{grid-template-columns:1fr;gap:1rem}
          .wvs-label{font-size:1.8rem}
          .wcta{padding:4rem 1.2rem}
        }
        @media(max-width:420px){
          .wh1{font-size:2.1rem}
          .whero-actions,.wcta-actions{flex-direction:column}
          .wbtn-p,.wbtn-o{text-align:center}
        }
      `}</style>

      {/* NAV */}
      <nav className="wnav">
        <div className="wnav-brand">
          <strong>Derek Huit</strong>
          <span>Cardinal Financial &middot; NMLS #203980</span>
        </div>
        <a href="tel:9072449368" className="wnav-cta">Call (907) 244-9368</a>
      </nav>

      {/* HERO */}
      <section className="whero">
        <div className="whero-texture" />
        <div className="whero-gradient" />
        <div className="whero-stripe" />
        <div className="whero-content">
          <div className="weyebrow">Wasilla &amp; Mat-Su Valley Mortgage Lender</div>
          <h1 className="wh1">
            The Mat-Su Valley Deserves<br />
            an <em>Experienced</em> Lender.<br />
            Not a Franchise.
          </h1>
          <p className="whero-sub">
            Derek Huit has been closing mortgages in Wasilla, Palmer, and the Mat-Su Valley long before it became the fastest-growing region in Alaska.
            18+ years. $1 billion in closings. Built from Alaska &mdash; not a national franchise playbook.
          </p>
          <div className="whero-actions">
            <a href="tel:9072449368" className="wbtn-p">Get Pre-Approved Today</a>
            <a href="#programs" className="wbtn-o">See Loan Programs &rarr;</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="wstats">
        {[["18+","Years in Alaska"],["$1B+","Loans Closed"],["$0 Down","VA Purchases"],["$1.2M","AK Loan Limit"],["21 Days","Target Close"]]
          .map(([v,l])=>(
            <div key={l} className="wstat">
              <span className="wstat-val">{v}</span>
              <div className="wstat-lbl">{l}</div>
            </div>
          ))}
      </div>

      {/* COMPETITOR CALLOUT */}
      <div className="wcompete">
        <div className="wcompete-inner">
          <h2>The Mat-Su Valley Has Options.<br />Here&apos;s Why Experience Wins.</h2>
          <p>The Mat-Su Valley has attracted new mortgage offices in recent years. When choosing a lender for one of the biggest financial decisions of your life, experience and production volume aren&apos;t just credentials &mdash; they&apos;re the difference between a loan that closes and one that doesn&apos;t.</p>
          <div className="wcompete-grid">
            <div className="wvs-box them">
              <h3>New Valley Brokers</h3>
              <ul>
                <li>Franchise system, limited flexibility</li>
                <li>Limited Alaska market history</li>
                <li>Template-driven loan approach</li>
                <li>Small local review footprint</li>
                <li>New to Mat-Su market dynamics</li>
              </ul>
            </div>
            <div className="wvs-label">VS</div>
            <div className="wvs-box us">
              <h3>Derek Huit | Cardinal Financial</h3>
              <ul>
                <li>18+ years Alaska experience</li>
                <li>$1B+ in career closings</li>
                <li>Deep Mat-Su market knowledge</li>
                <li>Cardinal Financial product depth</li>
                <li>HMDA data-driven advice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* LOAN PROGRAMS */}
      <div id="programs">
        <section className="wsec">
          <span style={{display:"inline-block",fontSize:".72rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--sage)",marginBottom:"1rem"}}>Loan Programs</span>
          <h2 className="wh2">Every Loan the <em>Mat-Su Valley</em> Needs</h2>
          <p className="wintero">
            From Wasilla starter homes to Palmer acreage properties, from VA loans for JBER families choosing the Valley over Anchorage to investment properties in Big Lake &mdash;
            I have the product and the Alaska experience to close it.
          </p>
          <div className="wpgrid">
            {programs.map(([title, desc]) => (
              <div key={title} className="wpcard">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MAT-SU ADVANTAGE */}
      <div className="wsec-alt">
        <section className="wsec">
          <span style={{display:"inline-block",fontSize:".72rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--sage)",marginBottom:"1rem"}}>Why the Mat-Su</span>
          <h2 className="wh2">Why Wasilla &amp; Palmer Are <em>Alaska&apos;s</em> Fastest-Growing Markets</h2>
          <p className="wintero">
            The Mat-Su Valley isn&apos;t just growing &mdash; it&apos;s transforming. Understanding this market requires more than a Wasilla zip code lookup.
          </p>
          <div className="wmatsu">
            <h3>The Mat-Su Growth Story</h3>
            <p>
              While Anchorage&apos;s population has declined in recent years, the Mat-Su Borough has grown consistently. Families, military members, and remote workers are choosing the Valley for the combination of space, affordability, and Alaska lifestyle that Anchorage can no longer offer at accessible price points.
            </p>
            <p>
              New oilfield activity near the Valley is creating employment growth. Military families at JBER increasingly choose Wasilla and Palmer &mdash; paying less per square foot and building more equity with the same VA benefit.
              Wasilla&apos;s mix of residential developments, rural acreage, and lakefront properties creates diverse buyer opportunities at every price point.
            </p>
          </div>
          <div className="whgrid">
            {neighborhoods.map(([name, desc]) => (
              <div key={name} className="whood">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* WHY DEREK */}
      <div className="wsec-dk">
        <section className="wsec">
          <span style={{display:"inline-block",fontSize:".72rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"#a8c4a8",marginBottom:"1rem"}}>Why Derek Huit</span>
          <h2 className="wh2">18 Years. <em>$1 Billion.</em><br />Built from Alaska.</h2>
          <p className="wintero">
            The Mat-Su Valley has seen mortgage offices come and go. I&apos;ve been here through all of it &mdash; and I&apos;ll be here long after the franchise offices move on.
          </p>
          <div className="wwgrid">
            {whyItems.map(([title, desc]) => (
              <div key={title} className="wwitem">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="wsec-alt">
        <section className="wsec">
          <span style={{display:"inline-block",fontSize:".72rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--sage)",marginBottom:"1rem"}}>FAQ</span>
          <h2 className="wh2">Wasilla &amp; Mat-Su Valley <em>Mortgage FAQ</em></h2>
          <div className="wfaqlist">
            {faqs.map(([q, a]) => (
              <div key={q} className="wfaq">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="wcta">
        <div className="wcta-inner">
          <h2>Ready to Buy in the <em>Mat-Su Valley?</em></h2>
          <p>
            One call. Same-day response. Pre-approval in 24 hours.
            Let&apos;s get you into a Wasilla or Palmer home with the most experienced lender in the Valley.
          </p>
          <div className="wcta-actions">
            <a href="tel:9072449368" className="wbtn-p">Call Derek: (907) 244-9368</a>
            <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="wbtn-o">Apply Online &rarr;</a>
          </div>
          <a href="tel:9072449368" className="wphd">(907) 244-9368</a>
          <p className="wnmls">Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial &middot; Equal Housing Lender</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="wfoot">
        <p>
          Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br />
          Serving Wasilla, Palmer, Big Lake, Houston, Meadow Lakes, Sutton, and the entire Mat-Su Valley<br />
          <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br />
          This is not a commitment to lend. All loans subject to credit approval.
          Alaska Housing Finance Corporation program availability subject to eligibility. Rates and terms subject to change without notice.
        </p>
      </footer>
    </>
  )
}
