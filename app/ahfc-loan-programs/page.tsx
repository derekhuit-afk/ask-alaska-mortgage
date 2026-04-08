import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AHFC Loan Programs Alaska | Alaska Housing Finance Corporation | Derek Huit – NMLS #203980',
  description: 'Complete guide to Alaska Housing Finance Corporation (AHFC) loan programs — First Home, Veterans Mortgage, Supplemental Loan, energy efficiency. Expert guidance from Derek Huit. Call (907) 244-9368.',
  keywords: 'AHFC loan Alaska, Alaska Housing Finance Corporation, AHFC First Home program, AHFC veterans mortgage, Alaska first time homebuyer loan, AHFC supplemental loan, AHFC energy efficiency loan',
  alternates: { canonical: 'https://askalaskamortgage.ai/ahfc-loan-programs' },
}
const SCHEMA = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity:[
    {"@type":"Question","name":"What is the AHFC First Home Limited program?","acceptedAnswer":{"@type":"Answer","text":"The AHFC First Home Limited program offers below-market interest rates to first-time Alaska homebuyers who meet income and purchase price limits. Rates are typically 0.5-1% below conventional rates. Contact Derek Huit at (907) 244-9368 to check current rates and eligibility."}},
    {"@type":"Question","name":"Can veterans use AHFC programs?","acceptedAnswer":{"@type":"Answer","text":"Yes. AHFC's Veterans Mortgage program provides a 1% interest rate reduction on the first $50,000 of a qualified veteran's loan. This can be stacked with a VA loan for maximum savings. Derek Huit specializes in combining AHFC and VA benefits."}},
    {"@type":"Question","name":"What is the income limit for AHFC First Home in Anchorage?","acceptedAnswer":{"@type":"Answer","text":"AHFC income limits vary by household size and location. In Anchorage, limits typically range from $115,000-$145,000 for 1-4 person households. Targeted areas have higher limits. Derek Huit will check your specific eligibility in minutes."}},
  ]
}
export default function AHFCLoanPrograms() {
  const programs = [
    {name:"First Home Limited",rate:"Below-market (-0.5% to -1%)",down:"3%",who:"First-time buyers not owning a home in 3+ years",note:"Income & purchase price limits apply. Combinable with MCC tax credit worth up to $2,000/year."},
    {name:"Veterans Mortgage",rate:"1% reduction on first $50K",down:"Varies",who:"Qualified Alaska veterans",note:"Stackable with VA loan benefit for maximum savings. Must meet AHFC veteran eligibility."},
    {name:"Supplemental Loan",rate:"AHFC second mortgage",down:"N/A — second lien",who:"Existing AHFC borrowers needing repairs",note:"Finance home improvements on top of your primary AHFC mortgage. Single closing."},
    {name:"Energy Efficiency",rate:"Up to 0.75% reduction",down:"Varies by primary loan",who:"Buyers of energy-efficient properties",note:"Rate reduction based on energy rating tier. Alaska's climate makes this highly valuable — lower energy costs and lower mortgage rate."},
    {name:"Manufactured Home",rate:"Competitive AHFC rate",down:"5%+",who:"Buyers of AHFC-eligible manufactured homes",note:"Specific requirements on foundation type, park ownership, and property age. I'll check eligibility fast."},
    {name:"First Home Targeted Areas",rate:"Enhanced First Home rate",down:"3%",who:"Buyers in federally designated targeted areas",note:"Higher income and purchase price limits than standard First Home. Covers specific census tracts in Anchorage, Fairbanks, and rural Alaska."},
  ]
  const faqs = [
    ["What is the AHFC First Home Limited program?","AHFC's First Home Limited offers below-market interest rates to eligible first-time buyers. Rates are typically 0.5-1% below conventional, meaning significant monthly savings over the life of the loan. Income limits apply: roughly $115K-$145K in Anchorage depending on household size. I check your eligibility in minutes."],
    ["Can I use AHFC and VA together?","Yes — this is one of the best combinations available. AHFC's Veterans Interest Rate Preference gives qualified veterans a 1% rate reduction on the first $50,000 of the loan. Stack this on top of a VA loan's already-competitive rate and you're getting the best possible terms available to any Alaska borrower."],
    ["Does AHFC work for new construction in Alaska?","AHFC offers programs for new construction, but the property must meet AHFC standards. New construction loans close differently than resale — the timeline and draw process require a lender experienced with AHFC construction protocols. I've done hundreds of these."],
    ["What is the MCC (Mortgage Credit Certificate) and how does it stack with AHFC?","Alaska's MCC program gives qualified first-time buyers a federal tax credit worth up to $2,000/year on mortgage interest paid. It stacks directly with AHFC's below-market rate. A first-time buyer using AHFC First Home + MCC gets both a reduced rate and an annual tax credit. Very few lenders know how to structure both together."],
    ["What's the AHFC purchase price limit in Anchorage?","AHFC purchase price limits change periodically but are typically in the $400K-$550K range for Anchorage. Targeted areas allow higher prices. Mat-Su and rural Alaska often have lower limits. I pull current AHFC limits against your target purchase price before we even discuss rates."],
    ["How long does AHFC approval take?","AHFC-backed loans add 5-10 days to a standard timeline because they require AHFC underwriting review in addition to the lender's review. I submit to AHFC in parallel with the lender review to minimize delay. Target 30-40 days to close from complete application."],
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(SCHEMA)}}/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Open+Sans:wght@300;400;600&display=swap');
        :root{--teal:#004d40;--teal-mid:#00695c;--teal-lt:#26a69a;--gold:#ff8f00;--gold-lt:#ffb300;--cream:#f9f6f0;--white:#fff;--charcoal:#1a2a2a;--muted:#5a6e6e;--border:#c8d8d4;--frost:#e8f5f2}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:'Open Sans',sans-serif;background:var(--cream);color:var(--charcoal);overflow-x:hidden;line-height:1.65}
        nav{background:var(--teal);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        nav strong{font-family:'Merriweather',serif;font-size:1.1rem;color:#fff}
        nav span{display:block;font-size:.68rem;color:#80cbc4;letter-spacing:.12em;text-transform:uppercase}
        .ncta{background:var(--gold);color:var(--teal);padding:.6rem 1.4rem;border-radius:3px;font-weight:700;font-size:.88rem;text-decoration:none}
        .hero{background:linear-gradient(135deg,var(--teal) 0%,#002e27 100%);padding:5rem 2rem 4rem;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-50%;right:-10%;width:600px;height:600px;border-radius:50%;background:rgba(38,166,154,.08);pointer-events:none}
        .hero-inner{max-width:860px;margin:0 auto;animation:rise .8s ease both}
        @keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .badge{display:inline-block;background:rgba(255,143,0,.2);border:1px solid rgba(255,179,0,.4);color:var(--gold-lt);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:.35rem .9rem;border-radius:2px;margin-bottom:1.4rem}
        h1{font-family:'Merriweather',serif;font-size:clamp(2.2rem,5vw,3.8rem);font-weight:900;color:#fff;line-height:1.12;margin-bottom:1rem}
        h1 em{font-style:normal;color:#80cbc4}
        .hero p{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.75);max-width:640px;font-weight:300;margin-bottom:2rem;line-height:1.78}
        .hbtns{display:flex;gap:1rem;flex-wrap:wrap}
        .bp{background:var(--gold);color:var(--teal);padding:.9rem 2rem;border-radius:3px;font-weight:700;text-decoration:none;transition:all .2s}
        .bp:hover{background:var(--gold-lt);transform:translateY(-2px)}
        .bo{border:1px solid rgba(255,255,255,.4);color:rgba(255,255,255,.85);padding:.9rem 2rem;border-radius:3px;font-weight:500;text-decoration:none;transition:all .2s}
        .sbar{background:var(--teal-mid);padding:1.4rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .sitem{flex:1;min-width:150px;max-width:220px;text-align:center;padding:.6rem 1rem;border-right:1px solid rgba(255,255,255,.15)}
        .sitem:last-child{border-right:none}
        .sv{font-family:'Merriweather',serif;font-size:1.7rem;color:#fff;display:block;line-height:1}
        .sl{font-size:.7rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .sec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .sec-alt{background:var(--frost)}
        .sec-dk{background:var(--teal)}
        h2{font-family:'Merriweather',serif;font-size:clamp(1.7rem,3.5vw,2.5rem);color:var(--charcoal);margin-bottom:.8rem;line-height:1.2}
        .sec-dk h2{color:#fff}
        h2 span{color:var(--teal-lt)}
        .sec-dk h2 span{color:#80cbc4}
        .intro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:2.5rem;line-height:1.75;font-weight:300}
        .sec-dk .intro{color:rgba(255,255,255,.65)}
        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:2rem}
        .pcard{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:1.8rem;border-top:3px solid var(--teal-lt);transition:all .25s}
        .pcard:hover{border-top-color:var(--gold);box-shadow:0 6px 20px rgba(0,77,64,.1);transform:translateY(-3px)}
        .pcard-name{font-family:'Merriweather',serif;font-size:1.1rem;color:var(--teal);margin-bottom:.6rem}
        .pcard-rate{font-size:.82rem;font-weight:600;color:var(--teal-mid);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.8rem}
        .pcard-meta{display:flex;gap:1rem;margin-bottom:.8rem;font-size:.8rem;flex-wrap:wrap}
        .pcard-meta span{background:var(--frost);border:1px solid var(--border);padding:.2rem .6rem;border-radius:20px;color:var(--muted)}
        .pcard p{font-size:.87rem;color:var(--muted);line-height:1.6}
        .faqlist{margin-top:1.5rem}
        .faq{border-bottom:1px solid rgba(255,255,255,.12);padding:1.4rem 0}
        .faq:last-child{border-bottom:none}
        .faq h3{font-size:1rem;font-weight:600;color:#fff;margin-bottom:.5rem}
        .faq p{font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.65}
        .expert{background:linear-gradient(135deg,#002e27,var(--teal));border-radius:10px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(38,166,154,.3)}
        .expert h3{font-family:'Merriweather',serif;font-size:1.4rem;color:#80cbc4;margin-bottom:.8rem}
        .expert p{font-size:.92rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:.8rem}
        .cta{background:var(--teal);padding:5rem 2rem;text-align:center}
        .cta h2{color:#fff;margin-bottom:.8rem}
        .cta p{color:rgba(255,255,255,.7);max-width:540px;margin:0 auto 2rem;line-height:1.75}
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .phd{font-family:'Merriweather',serif;font-size:2rem;color:var(--gold-lt);text-decoration:none;display:block;margin-top:1.5rem}
        footer{background:#001a16;padding:2rem;text-align:center}
        footer p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        footer a{color:var(--teal-lt);text-decoration:none}
        @media(max-width:768px){.hero{padding:4rem 1.2rem 3rem}.sec{padding:3.5rem 1.2rem}.sitem{min-width:120px;border-right:none;border-bottom:1px solid rgba(255,255,255,.15)}.sitem:last-child{border-bottom:none}.cta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){h1{font-size:2rem}.hbtns,.cta-btns{flex-direction:column}}
      `}</style>
      <nav>
        <div><strong>Derek Huit</strong><span>Cardinal Financial &middot; NMLS #203980</span></div>
        <a href="tel:9072449368" className="ncta">Call (907) 244-9368</a>
      </nav>
      <div className="hero">
        <div className="hero-inner">
          <div className="badge">Alaska-Only Programs</div>
          <h1>AHFC Loan Programs:<br />Alaska&apos;s <em>Hidden Rate</em> Advantage</h1>
          <p>Alaska Housing Finance Corporation offers below-market interest rates and down payment assistance programs that most Alaska homebuyers never fully use &mdash; because most lenders don&apos;t know them well enough to structure them correctly. I do.</p>
          <div className="hbtns">
            <a href="tel:9072449368" className="bp">Check Your AHFC Eligibility</a>
            <a href="#programs" className="bo">See All Programs &rarr;</a>
          </div>
        </div>
      </div>
      <div className="sbar">
        {[["6","AHFC Programs"],["3%","Min Down Payment"],["18+","Yrs Alaska Exp"],["$1B+","Loans Closed"],["0","Eligible Overlap"]].map(([v,l])=>(
          <div key={l} className="sitem"><span className="sv">{v}</span><div className="sl">{l}</div></div>
        ))}
      </div>
      <div id="programs">
        <section className="sec">
          <h2>Every <span>AHFC Program</span> Explained</h2>
          <p className="intro">AHFC programs are exclusive to Alaska residents and offer rate reductions not available anywhere else. Here&apos;s every program, what it does, and who qualifies.</p>
          <div className="pgrid">
            {programs.map(pg=>(
              <div key={pg.name} className="pcard">
                <div className="pcard-name">{pg.name}</div>
                <div className="pcard-rate">{pg.rate}</div>
                <div className="pcard-meta">
                  <span>Down: {pg.down}</span>
                  <span>Eligible: {pg.who.substring(0,30)}{pg.who.length>30?'...':''}</span>
                </div>
                <p>{pg.note}</p>
              </div>
            ))}
          </div>
          <div className="expert" style={{marginTop:"3rem"}}>
            <h3>Why Most Buyers Miss Their AHFC Benefit</h3>
            <p>AHFC programs require specific lender training, state approval, and underwriting knowledge that most national lenders and franchise offices simply don&apos;t have. A buyer who qualifies for AHFC First Home + MCC tax credit + Veterans Mortgage could be saving $300-$500/month compared to a standard conventional loan &mdash; and most never find out because their lender doesn&apos;t know how to stack these programs.</p>
            <p>I&apos;ve closed hundreds of AHFC loans across Alaska. I know the income tables, the purchase price caps, the targeted area maps, and how to combine AHFC with VA, FHA, and conventional products for maximum benefit.</p>
          </div>
        </section>
      </div>
      <div className="sec-dk">
        <section className="sec">
          <h2><span>AHFC FAQ</span></h2>
          <p className="intro">The most common questions about Alaska Housing Finance Corporation programs.</p>
          <div className="faqlist">
            {faqs.map(([q,a])=>(<div key={q} className="faq"><h3>{q}</h3><p>{a}</p></div>))}
          </div>
        </section>
      </div>
      <div className="cta">
        <h2>Ready to Stack Your <span>Alaska Advantages?</span></h2>
        <p>AHFC programs, VA benefits, MCC tax credits &mdash; I&apos;ll find every program you qualify for and structure them together for the lowest possible payment.</p>
        <div className="cta-btns">
          <a href="tel:9072449368" className="bp">Call (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="bo">Apply Online &rarr;</a>
        </div>
        <a href="tel:9072449368" className="phd">(907) 244-9368</a>
      </div>
      <footer>
        <p>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
        <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br/>
        AHFC program availability, rates, and eligibility limits subject to change. Contact AHFC or an approved lender for current program details. All loans subject to credit approval.</p>
      </footer>
    </>
  )
}
