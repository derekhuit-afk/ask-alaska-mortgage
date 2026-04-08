import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Palmer Mortgage Lender | Derek Huit | Cardinal Financial – NMLS #203980',
  description: 'Derek Huit is the most experienced mortgage lender serving Palmer, Alaska and the Mat-Su Valley — 18+ years, $1B+ closed. VA, FHA, AHFC, Conventional. Call (907) 244-9368.',
  keywords: 'Palmer mortgage lender, Palmer AK mortgage, Palmer Alaska home loan, Mat-Su mortgage Palmer, Palmer VA loan, Palmer first time homebuyer, Colony mortgage Alaska, Matanuska-Susitna mortgage',
  alternates: { canonical: 'https://askalaskamortgage.ai/palmer-mortgage-lender' },
  openGraph: {
    title: 'Palmer Mortgage Lender | Derek Huit | Cardinal Financial',
    description: '18+ years. $1B+ closed. Serving Palmer and the entire Mat-Su Valley.',
    type: 'website',
    url: 'https://askalaskamortgage.ai/palmer-mortgage-lender',
  },
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Derek Huit – Palmer Mortgage Lender | Cardinal Financial",
  "description": "Mortgage lending specialist serving Palmer, Wasilla, and the entire Mat-Su Valley. 18+ years Alaska experience, $1B+ in closings.",
  "url": "https://askalaskamortgage.ai/palmer-mortgage-lender",
  "telephone": "+19072449368",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palmer",
    "addressRegion": "AK",
    "postalCode": "99645",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "61.5994", "longitude": "-149.1128" },
  "areaServed": ["Palmer AK","Wasilla AK","Mat-Su Borough AK","Butte AK","Sutton AK"],
  "hasCredential": "NMLS #203980"
}

export default function PalmerMortgageLender() {
  const programs = [
    ["VA Loans","Zero down payment, no PMI. Palmer has a significant veteran and military family population. Alaska's $1,209,750 loan limit covers every Palmer home at zero down. I close VA loans here in 21 days or less."],
    ["AHFC First Home Program","Palmer is a strong AHFC market. The First Home Limited program offers below-market interest rates for first-time buyers. I'll tell you in 5 minutes if you qualify."],
    ["FHA Loans","3.5% down payment, flexible credit requirements. Palmer's mix of starter homes and older properties makes FHA a frequent tool here. I know which Palmer properties typically pass FHA appraisals."],
    ["Conventional Loans","Alaska's $1,209,750 conforming limit. Down payments from 3% for first-time buyers. Ideal for Palmer's growing mid-range market and acreage properties with strong equity."],
    ["Acreage & Rural Property Loans","Parcels with outbuildings, wells, septic, and raw land require specific underwriting expertise. I've closed hundreds of these in the Mat-Su Valley."],
    ["VA Renovation Loans","Palmer has a deep inventory of older Colony-era homes that need updates to meet VA property standards. VA renovation loans let you finance purchase and repairs in one closing."],
    ["Investment Property","Palmer's rental demand is growing with Valley population. I specialize in multi-unit properties and DSCR loans that qualify on rental income."],
    ["USDA Rural Development","Some Palmer-area parcels qualify for USDA Rural Development loans — zero down payment for eligible rural properties. I'll check eligibility maps against your target property."],
  ]

  const palmerfacts = [
    ["Founded","1935 as a federal agricultural colony — the only planned New Deal colony in the U.S. Palmer's historic identity gives it distinct character among Alaska cities."],
    ["Population Growth","Palmer and Wasilla are the two fastest-growing communities in Alaska. Mat-Su Borough population growth is steady and compounding."],
    ["Home Price Range","Palmer median home prices typically run below Wasilla, offering more value per square foot with strong appreciation over the past decade."],
    ["Military Connection","Palmer is 45-55 minutes from JBER. Many military families choose Palmer for the space, community feel, and lower prices vs. Anchorage or Eagle River."],
    ["Agricultural Land","Unique to Palmer: agricultural parcels, farm properties, and large acreage tracts that don't exist in Anchorage. These require lenders with rural property experience."],
    ["Oilfield Workers","Mat-Su Valley oilfield activity creates demand for the multi-unit strategy. Oilfield workers on rotation often buy duplexes and rent one side."],
  ]

  const neighborhoods = [
    ["Downtown Palmer","Historic Colony-era neighborhood. Walkable, charming. Mix of older homes with character and recent renovations. Strong FHA and conventional market."],
    ["Butte","Between Palmer and Wasilla on the Glenn Highway. Acreage properties, established neighborhoods, strong equity market."],
    ["Bodenburg Butte Area","Rural Palmer with mountain views. Larger parcels, agricultural flavor. Requires rural property lending expertise."],
    ["Palmer-Wasilla Corridor","Along the Parks Highway. Mix of residential and commercial. Growing fast with new development."],
    ["Sutton","Rural community east of Palmer on the Glenn Highway. Smaller market, acreage lots, off-grid considerations."],
    ["Chickaloon","Remote Mat-Su community. Unique property types including off-grid and alternative construction."],
    ["Colony Village","Palmer's newer developments. Modern construction, family-oriented. Strong first-time buyer and FHA market."],
    ["Trunk Road Corridor","Palmer's commercial and residential mix north of downtown. Convenient location, growing demand."],
  ]

  const faqs = [
    ["What makes Palmer different from Wasilla for homebuyers?",
     "Palmer tends to have slightly lower home prices than Wasilla with a more established, community-oriented feel. Downtown Palmer has historic character that Wasilla doesn't. Palmer also has more agricultural and acreage land available. If you want space and character at a lower price point, Palmer is worth a hard look."],
    ["Are Palmer properties harder to finance?",
     "Not harder — but different. Palmer's older Colony-era homes and agricultural parcels require a lender who knows rural Alaska underwriting. I've closed loans on properties with wells, septic, outbuildings, and non-standard construction that other lenders pass on. Bring me the property someone else said no to."],
    ["Can I use a VA loan in Palmer?",
     "Absolutely. VA loans are one of the most common products I close in Palmer. The full $1,209,750 Alaska loan limit applies with zero down payment and no PMI for eligible veterans. Palmer is popular with military families from JBER because you get more house for your VA benefit dollar than anywhere near Anchorage."],
    ["What is the AHFC First Home program and do I qualify?",
     "Alaska Housing Finance Corporation's First Home Limited program offers below-market interest rates for qualified first-time Alaska homebuyers. There are income limits and purchase price caps. Palmer properties typically fall well within those limits. Call me — I'll run your numbers against current AHFC guidelines in 5 minutes."],
    ["How do USDA loans work in the Palmer area?",
     "Some Palmer-area parcels fall within USDA Rural Development eligible zones, offering zero down payment for eligible borrowers. Eligibility depends on the specific property location and your household income. I pull the USDA eligibility map against your target address and let you know immediately."],
    ["Do you close loans on agricultural or acreage properties in Palmer?",
     "Yes — this is a Palmer specialty for me. Properties with agricultural zoning, large acreage, farm outbuildings, or rural land have specific requirements around well and septic inspection, appraisal complexity, and property type classification. I've closed hundreds of these across the Mat-Su Valley."],
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Nunito+Sans:wght@300;400;600&display=swap');
        :root{
          --colony:#2c1810;--copper:#8b4513;--copper-lt:#b8692a;--harvest:#d4a843;--harvest-lt:#e8c060;
          --cream:#faf6f0;--paper:#fff;--charcoal:#221a14;
          --muted:#7a6a58;--border:#e0d4c4;--sage:#4a6741;--frost:#f0ece4;--sky:#e8f0f8;
        }
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'Nunito Sans',sans-serif;background:var(--cream);color:var(--charcoal);overflow-x:hidden;line-height:1.65}
        .pnav{background:var(--colony);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100;border-bottom:2px solid var(--copper)}
        .pnav-brand strong{font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:#fff;letter-spacing:.02em}
        .pnav-brand span{display:block;font-size:.68rem;color:var(--harvest-lt);letter-spacing:.14em;text-transform:uppercase;margin-top:.1rem}
        .pnav-cta{background:var(--harvest);color:var(--colony);padding:.6rem 1.4rem;border-radius:3px;font-weight:700;font-size:.88rem;text-decoration:none}
        .phero{position:relative;overflow:hidden;min-height:88vh;display:flex;align-items:center;padding:6rem 2rem 5rem}
        .phero-bg{position:absolute;inset:0;background:linear-gradient(150deg,var(--colony) 0%,#3d2015 40%,#1e1008 100%)}
        .phero-pattern{position:absolute;inset:0;opacity:.05;background-image:repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%);background-size:20px 20px}
        .phero-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--harvest),var(--copper-lt),var(--harvest),transparent)}
        .phero-content{position:relative;max-width:820px;animation:pRise .9s ease both}
        @keyframes pRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .peyebrow{display:inline-flex;align-items:center;gap:.75rem;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:var(--harvest-lt);margin-bottom:1.6rem}
        .peyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--harvest-lt)}
        .ph1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.6rem,5.5vw,4.6rem);font-weight:700;line-height:1.08;color:#fff;margin-bottom:1.2rem}
        .ph1 em{font-style:italic;color:var(--harvest-lt)}
        .phero-sub{font-size:clamp(.95rem,2vw,1.12rem);color:rgba(255,255,255,.72);font-weight:300;max-width:640px;margin-bottom:2.5rem;line-height:1.78}
        .phero-actions{display:flex;gap:1rem;flex-wrap:wrap}
        .pbtn-p{background:var(--harvest);color:var(--colony);padding:.9rem 2.2rem;border-radius:3px;font-weight:700;font-size:.95rem;text-decoration:none;transition:all .2s}
        .pbtn-p:hover{background:var(--harvest-lt);transform:translateY(-2px)}
        .pbtn-o{border:1px solid rgba(255,255,255,.38);color:rgba(255,255,255,.82);padding:.9rem 2rem;border-radius:3px;font-weight:500;font-size:.95rem;text-decoration:none;transition:all .2s}
        .pbtn-o:hover{border-color:rgba(255,255,255,.75);color:#fff}
        .phband{background:var(--copper);padding:1.6rem 2rem;display:flex;flex-wrap:wrap;justify-content:center}
        .phstat{flex:1;min-width:140px;max-width:220px;text-align:center;padding:.75rem 1.2rem;border-right:1px solid rgba(255,255,255,.2)}
        .phstat:last-child{border-right:none}
        .phstat-val{font-family:'Cormorant Garamond',serif;font-size:1.9rem;color:#fff;display:block;line-height:1}
        .phstat-lbl{font-size:.7rem;color:rgba(255,255,255,.75);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
        .pcolony{background:var(--frost);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:3rem 2rem}
        .pcolony-inner{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start}
        .pcolony-text h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.6rem,3vw,2.2rem);color:var(--colony);margin-bottom:.8rem;line-height:1.2}
        .pcolony-text h2 em{font-style:italic;color:var(--copper)}
        .pcolony-text p{font-size:.92rem;color:var(--muted);line-height:1.72;margin-bottom:.8rem}
        .pfacts-grid{display:flex;flex-direction:column;gap:.8rem}
        .pfact{background:var(--paper);border:1px solid var(--border);border-left:3px solid var(--harvest);border-radius:0 6px 6px 0;padding:1rem 1.2rem}
        .pfact h3{font-size:.82rem;font-weight:600;color:var(--copper);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}
        .pfact p{font-size:.84rem;color:var(--muted);line-height:1.55}
        .psec{padding:5rem 2rem;max-width:1100px;margin:0 auto}
        .psec-alt{background:var(--sky)}
        .psec-dk{background:var(--colony)}
        .ph2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:700;color:var(--colony);margin-bottom:.8rem;line-height:1.15}
        .psec-dk .ph2{color:#fff}
        .ph2 em{font-style:italic;color:var(--copper)}
        .psec-dk .ph2 em{color:var(--harvest-lt)}
        .pintro{font-size:1rem;color:var(--muted);max-width:700px;margin-bottom:3rem;line-height:1.75;font-weight:300}
        .psec-dk .pintro{color:rgba(255,255,255,.6)}
        .ppgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(285px,1fr));gap:1.4rem;margin-top:2rem}
        .ppcard{background:var(--paper);border:1px solid var(--border);border-radius:8px;padding:1.8rem;transition:all .25s;position:relative;overflow:hidden}
        .ppcard::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--copper),var(--harvest))}
        .ppcard:hover{box-shadow:0 6px 24px rgba(44,24,16,.1);transform:translateY(-3px)}
        .ppcard h3{font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:var(--colony);margin-bottom:.6rem}
        .ppcard p{font-size:.87rem;color:var(--muted);line-height:1.65}
        .padvbox{background:linear-gradient(135deg,var(--copper) 0%,var(--colony) 100%);border-radius:10px;padding:2.5rem;margin:2rem 0;border:1px solid rgba(212,168,67,.25)}
        .padvbox h3{font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--harvest-lt);margin-bottom:.9rem}
        .padvbox p{font-size:.92rem;color:rgba(255,255,255,.78);line-height:1.72;margin-bottom:.8rem}
        .padvbox p:last-child{margin-bottom:0}
        .pngrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1rem;margin-top:2rem}
        .pnhood{background:var(--paper);border:1px solid var(--border);border-radius:8px;padding:1.3rem;transition:all .2s}
        .pnhood:hover{border-color:var(--copper-lt);background:var(--frost)}
        .pnhood h3{font-size:.95rem;font-weight:600;color:var(--colony);margin-bottom:.4rem}
        .pnhood p{font-size:.8rem;color:var(--muted);line-height:1.55}
        .pwgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem;margin-top:2rem}
        .pwitem{border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:1.7rem;background:rgba(255,255,255,.04)}
        .pwitem h3{font-size:1rem;font-weight:600;color:#fff;margin-bottom:.5rem}
        .pwitem p{font-size:.87rem;color:rgba(255,255,255,.58);line-height:1.65}
        .pfaqlist{margin-top:1.5rem}
        .pfaq{border-bottom:1px solid var(--border);padding:1.4rem 0}
        .pfaq h3{font-size:1rem;font-weight:600;color:var(--charcoal);margin-bottom:.5rem}
        .pfaq p{font-size:.88rem;color:var(--muted);line-height:1.65}
        .psweep{background:var(--frost);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:3rem 2rem;text-align:center}
        .psweep-inner{max-width:700px;margin:0 auto}
        .psweep h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.5rem,3vw,2rem);color:var(--colony);margin-bottom:.8rem}
        .psweep p{font-size:.92rem;color:var(--muted);line-height:1.7;margin-bottom:1.5rem}
        .psweep-links{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .psweep-link{background:var(--paper);border:1px solid var(--border);border-radius:6px;padding:.8rem 1.5rem;text-decoration:none;font-size:.88rem;font-weight:600;color:var(--colony);transition:all .2s}
        .psweep-link:hover{border-color:var(--copper);background:var(--cream)}
        .pcta{background:var(--colony);padding:6rem 2rem;text-align:center;position:relative;overflow:hidden}
        .pcta::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.015) 0,rgba(255,255,255,.015) 1px,transparent 0,transparent 50%);background-size:20px 20px}
        .pcta-inner{position:relative}
        .pcta h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4.5vw,3.2rem);color:#fff;margin-bottom:1rem;line-height:1.15}
        .pcta h2 em{font-style:italic;color:var(--harvest-lt)}
        .pcta p{color:rgba(255,255,255,.68);max-width:560px;margin:0 auto 2.5rem;line-height:1.75}
        .pcta-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
        .pphd{font-family:'Cormorant Garamond',serif;font-size:2.4rem;color:var(--harvest-lt);text-decoration:none;display:block;margin-top:1.5rem;transition:color .2s}
        .pphd:hover{color:#fff}
        .pnmls{font-size:.73rem;color:rgba(255,255,255,.28);margin-top:1.5rem}
        .pfoot{background:#100a06;padding:2rem;border-top:1px solid rgba(184,105,42,.15);text-align:center}
        .pfoot p{font-size:.74rem;color:var(--muted);line-height:1.8;max-width:720px;margin:0 auto}
        .pfoot a{color:var(--harvest-lt);text-decoration:none}
        @media(max-width:768px){
          .pnav{padding:.8rem 1.2rem}
          .phero{padding:5rem 1.2rem 3rem;min-height:auto}
          .psec{padding:3.5rem 1.2rem}
          .pcolony-inner{grid-template-columns:1fr}
          .phstat{min-width:120px;border-right:none;border-bottom:1px solid rgba(255,255,255,.2)}
          .phstat:last-child{border-bottom:none}
          .pcta{padding:4rem 1.2rem}
        }
        @media(max-width:420px){
          .ph1{font-size:2.2rem}
          .phero-actions,.pcta-actions,.psweep-links{flex-direction:column;align-items:center}
          .pbtn-p,.pbtn-o{text-align:center}
        }
      `}</style>

      <nav className="pnav">
        <div className="pnav-brand">
          <strong>Derek Huit</strong>
          <span>Cardinal Financial &middot; NMLS #203980</span>
        </div>
        <a href="tel:9072449368" className="pnav-cta">Call (907) 244-9368</a>
      </nav>

      <section className="phero">
        <div className="phero-bg" />
        <div className="phero-pattern" />
        <div className="phero-accent" />
        <div className="phero-content">
          <div className="peyebrow">
            <div className="peyebrow-dot" />
            Palmer &amp; Mat-Su Valley Mortgage Lender
          </div>
          <h1 className="ph1">
            Palmer Was Built<br />
            on <em>Community.</em><br />
            Your Mortgage Should Be Too.
          </h1>
          <p className="phero-sub">
            Derek Huit has been closing loans in Palmer and the Mat-Su Valley for 18+ years.
            From Colony-era homes to agricultural parcels to VA loans for military families choosing Palmer over Anchorage &mdash;
            there&apos;s no Palmer mortgage scenario I haven&apos;t seen. $1 billion in career closings. Built from Alaska.
          </p>
          <div className="phero-actions">
            <a href="tel:9072449368" className="pbtn-p">Get Pre-Approved Today</a>
            <a href="#programs" className="pbtn-o">See Loan Programs &rarr;</a>
          </div>
        </div>
      </section>

      <div className="phband">
        {[["18+","Years in Alaska"],["$1B+","Loans Closed"],["$0 Down","VA Purchases"],["1935","Palmer Founded"],["#1","Mat-Su Growth Rate"]]
          .map(([v,l]) => (
            <div key={l} className="phstat">
              <span className="phstat-val">{v}</span>
              <div className="phstat-lbl">{l}</div>
            </div>
          ))}
      </div>

      <div className="pcolony">
        <div className="pcolony-inner">
          <div className="pcolony-text">
            <h2>Palmer Isn&apos;t Just a Suburb.<br />It&apos;s <em>Alaska&apos;s Colony.</em></h2>
            <p>
              Founded in 1935 as the Matanuska Colony &mdash; the only federally planned agricultural settlement of the New Deal era &mdash;
              Palmer has a character and history that no other Alaska city shares. That heritage shows in the housing stock,
              the community values, and the unique property types that require a lender who actually knows the market.
            </p>
            <p>
              Colony-era homes, agricultural parcels, properties with wells and septic, rural acreage with outbuildings &mdash;
              Palmer has all of it. I&apos;ve financed all of it. When national call centers say no, I find a way.
            </p>
          </div>
          <div className="pfacts-grid">
            {palmerfacts.map(([label, desc]) => (
              <div key={label} className="pfact">
                <h3>{label}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="programs">
        <section className="psec">
          <span style={{display:"inline-block",fontSize:".7rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--copper)",marginBottom:"1rem"}}>Loan Programs</span>
          <h2 className="ph2">Every Loan <em>Palmer</em> Needs</h2>
          <p className="pintro">
            Palmer&apos;s unique property landscape &mdash; from historic Colony homes to rural agricultural parcels to growing suburban developments &mdash;
            requires a lender who can navigate every loan type with Alaska-specific expertise.
          </p>
          <div className="ppgrid">
            {programs.map(([title, desc]) => (
              <div key={title} className="ppcard">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="padvbox" style={{marginTop:"3rem"}}>
            <h3>The Palmer Price Advantage</h3>
            <p>
              Palmer median home prices typically run 5&ndash;10% below Wasilla and significantly below Anchorage &mdash;
              meaning your VA benefit, AHFC program, or FHA loan goes further here than anywhere else in the Mat-Su.
            </p>
            <p>
              A military family using a VA loan in Palmer can often buy 200&ndash;400 more square feet than the same loan buys in Eagle River &mdash;
              with the same $0 down, no PMI structure. Palmer appreciation has been strong and Mat-Su population growth shows no signs of slowing.
            </p>
          </div>
        </section>
      </div>

      <div className="psec-alt">
        <section className="psec">
          <span style={{display:"inline-block",fontSize:".7rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--sage)",marginBottom:"1rem"}}>Palmer Areas</span>
          <h2 className="ph2">Palmer &amp; <em>Surrounding Communities</em></h2>
          <p className="pintro">
            Palmer proper is surrounded by distinct communities, each with different property types, price points, and buyer profiles. I know all of them.
          </p>
          <div className="pngrid">
            {neighborhoods.map(([name, desc]) => (
              <div key={name} className="pnhood">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="psec-dk">
        <section className="psec">
          <span style={{display:"inline-block",fontSize:".7rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--harvest-lt)",marginBottom:"1rem"}}>Why Derek Huit</span>
          <h2 className="ph2">18 Years. <em>$1 Billion.</em><br />This Is My Market.</h2>
          <p className="pintro">
            I&apos;ve been closing mortgages in the Mat-Su Valley since before Palmer was on most national lenders&apos; radar.
            The Colony heritage, the agricultural land, the older housing stock &mdash; I know this market the way only someone who&apos;s worked it for nearly two decades can.
          </p>
          <div className="pwgrid">
            {[
              ["Palmer Property Expertise","Colony-era homes, agricultural parcels, properties with wells and septic, rural acreage — I've financed every type of Palmer property. When a lender in Anchorage or outside Alaska says no, I find the path that works."],
              ["Cardinal Financial Depth","I'm backed by one of the nation's top independent mortgage lenders. That means access to products and underwriting flexibility that franchise offices and small brokers simply don't have."],
              ["Alaska HMDA Data","I've analyzed 7+ years of Mat-Su Borough lending data. I know what approval rates look like in Palmer, which loan types close here, and what the market is doing before it shows in MLS data."],
              ["VA Loan Mastery","Palmer is a strong VA market. Military families from JBER increasingly choose Palmer for the value per dollar. I close VA loans here in 21 days or less, including on older Colony-era properties with renovation needs."],
              ["Rural Property Navigation","Agricultural zoning, outbuildings, well and septic certification, unusual construction — rural Palmer properties require a lender who's been down this road hundreds of times. I have."],
              ["Honest Advice","If a property won't qualify or a loan doesn't pencil out, I'll tell you before you waste time and money. Eighteen years means I've seen every scenario."],
            ].map(([title, desc]) => (
              <div key={title} className="pwitem">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="psec">
        <span style={{display:"inline-block",fontSize:".7rem",letterSpacing:".2em",textTransform:"uppercase",fontWeight:600,color:"var(--copper)",marginBottom:"1rem"}}>FAQ</span>
        <h2 className="ph2">Palmer Mortgage <em>FAQ</em></h2>
        <div className="pfaqlist">
          {faqs.map(([q, a]) => (
            <div key={q} className="pfaq">
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="psweep">
        <div className="psweep-inner">
          <h2>Serving the Entire Mat-Su Valley</h2>
          <p>
            Palmer is one piece of the Mat-Su. Whether you&apos;re comparing Palmer to Wasilla, buying near JBER,
            or looking at rural communities further out &mdash; I cover the entire region with 18 years of Alaska experience.
          </p>
          <div className="psweep-links">
            <a href="/wasilla-mortgage-lender" className="psweep-link">Wasilla Mortgage Guide &rarr;</a>
            <a href="/jber-military-home-loan" className="psweep-link">JBER Military VA Loans &rarr;</a>
            <a href="/va-loan-alaska" className="psweep-link">Alaska VA Loan Guide &rarr;</a>
            <a href="/anchorage-mortgage-lender" className="psweep-link">Anchorage Mortgage Guide &rarr;</a>
          </div>
        </div>
      </div>

      <div className="pcta">
        <div className="pcta-inner">
          <h2>Ready to Buy in <em>Palmer?</em></h2>
          <p>
            One call. Same-day response. Pre-approval in 24 hours.
            Whether it&apos;s a Colony-era home on a quiet Palmer street or rural acreage outside of town &mdash;
            let&apos;s get your loan done right.
          </p>
          <div className="pcta-actions">
            <a href="tel:9072449368" className="pbtn-p">Call Derek: (907) 244-9368</a>
            <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="pbtn-o">Apply Online &rarr;</a>
          </div>
          <a href="tel:9072449368" className="pphd">(907) 244-9368</a>
          <p className="pnmls">Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial &middot; Equal Housing Lender</p>
        </div>
      </div>

      <footer className="pfoot">
        <p>
          Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial Company, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br />
          Serving Palmer, Butte, Sutton, Chickaloon, and the entire Mat-Su Valley<br />
          <a href="tel:9072449368">(907) 244-9368</a> &middot; <a href="https://askalaskamortgage.ai">askalaskamortgage.ai</a><br />
          This is not a commitment to lend. All loans subject to credit approval.
          USDA and AHFC program availability subject to eligibility.
        </p>
      </footer>
    </>
  )
}
