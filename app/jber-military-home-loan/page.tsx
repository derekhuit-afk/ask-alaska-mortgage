import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JBER VA Home Loans | Joint Base Elmendorf-Richardson | Derek Huit – NMLS #203980',
  description: 'PCS to JBER? Derek Huit specializes in VA home loans for military families at Joint Base Elmendorf-Richardson. Fast closings, zero down, Alaska expertise. Call (907) 244-9368.',
  keywords: 'JBER VA loan, Joint Base Elmendorf-Richardson mortgage, JBER home loan, Anchorage military mortgage, PCS Alaska mortgage, military VA loan Anchorage',
  alternates: { canonical: 'https://askalaskamortgage.ai/jber-military-home-loan' },
}

export default function JBERMilitaryHomeLoan() {
  const steps = [
    ["Get Your Orders — Then Call Me Immediately","Don\'t wait until you arrive. The moment you have PCS orders, I can start your pre-approval. We work remotely and get your Certificate of Eligibility verified within 24 hours."],
    ["Check the JBER Housing Waitlist","On-base housing waitlists can run 3–12+ months depending on family size and rank. Many families are in temporary lodging — meaning your BAH is available while you\'re paying hotel rates. Buying is almost always faster and cheaper."],
    ["Find Your Anchorage Area","JBER sits at the edge of Anchorage. Eagle River (15 min) is extremely popular with military families. Wasilla and Palmer (40–50 min) offer lower home prices and more space. I\'ll help you compare."],
    ["Write a Competitive Offer","Alaska real estate contracts differ from the lower 48. I prepare sellers and their agents for VA appraisal requirements upfront — which is why agents prefer working with me on VA offers."],
    ["Close in 21 Days or Less","Military timelines don\'t wait. My target for JBER clients is 21 days from complete application to close. With Cardinal Financial\'s in-house underwriting, we move fast without cutting corners."],
    ["Use BAH to Cover Your Mortgage","Anchorage BAH rates for 2025 are generous. In many cases, your Basic Allowance for Housing will cover or nearly cover your entire mortgage payment on a VA loan."],
  ]
  const pros = [
    ["Zero Down Payment","Don\'t tie up your savings in a down payment you\'ll need when you PCS out. VA loans finance 100% of the purchase price."],
    ["No PMI on VA Loans","Conventional loans under 20% down require PMI — typically $150–$400/month. VA loans eliminate this entirely."],
    ["Alaska Appreciation","Anchorage and the Mat-Su Valley have shown consistent appreciation. Military families who bought near JBER 5+ years ago have built substantial equity."],
    ["Convert to Rental When You PCS","Alaska has strong rental demand year-round. Many JBER veterans own multiple Alaska properties converted to rentals."],
  ]
  const faqs = [
    ["How long is the JBER on-base housing waitlist?","Waitlists vary significantly by rank, family size, and current inventory. E-1 through E-4 with dependents often wait 6–12+ months. Meanwhile, you\'re burning BAH on temporary lodging. Buying is almost always faster and cheaper than waiting."],
    ["What neighborhoods are closest to JBER?","JBER is at the edge of north Anchorage. Eagle River (15 min) is extremely popular with military families — strong schools, outdoor access, good resale. Wasilla and Palmer (40–50 min) offer more square footage for lower prices."],
    ["Can I get pre-approved before arriving in Alaska?","Absolutely. The entire pre-approval process happens remotely. Once you have your orders, call me at (907) 244-9368 and we start that day. You can make an offer on a home before you even land in Anchorage."],
    ["What happens to my VA loan if I get PCS orders out of Alaska?","Three options: (1) Sell — VA loans have no prepayment penalty. (2) Convert to a rental. (3) Transfer your VA entitlement to a new purchase at your next duty station."],
    ["Is $1,209,750 really the loan limit in Alaska?","Yes. Alaska\'s 2025 conforming loan limit is $1,209,750. For veterans with full VA entitlement, you can finance a home up to this amount with zero down payment."],
  ]
  const compare = [
    ["Down Payment","$0","$22,500","$90,000"],
    ["Monthly PMI","None \u2713","~$200–350/mo","None \u2713"],
    ["Interest Rate","Typically lower","Standard","Standard"],
    ["Cash to Close","Minimal","$22,500+","$90,000+"],
    ["Credit Flexibility","More flexible \u2713","Standard","Standard"],
    ["Multi-Unit Eligible","Yes (up to 4 units)","Yes","Yes"],
  ]
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@300;400;500;600&display=swap');
        :root{--jblack:#07090e;--jdark:#0e1520;--jpanel:#141c2b;--jsteel:#1e2d45;--jgold:#c8a45a;--jice:#7ec8e3;--jalert:#e07b39;--jwhite:#edf1f5;--jmuted:#7a8ea6;--jlight:#c2cedd}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{font-family:Barlow,sans-serif;background:var(--jblack);color:var(--jwhite);overflow-x:hidden;line-height:1.6}
        .jtopbar{background:var(--jalert);text-align:center;padding:.5rem 1rem;font-size:.82rem;font-weight:600;letter-spacing:.06em;color:#fff}
        .jtopbar a{color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.5)}
        .jnav{background:var(--jdark);border-bottom:2px solid var(--jgold);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;position:sticky;top:0;z-index:100}
        .jnav-brand strong{font-family:Barlow Condensed,sans-serif;font-size:1.3rem;letter-spacing:.06em;color:var(--jwhite)}
        .jnav-brand span{display:block;font-size:.7rem;color:var(--jgold);letter-spacing:.12em;text-transform:uppercase}
        .jnav-cta{background:var(--jgold);color:var(--jblack);padding:.65rem 1.5rem;border-radius:3px;font-weight:700;font-size:.9rem;text-decoration:none}
        .jhero{position:relative;overflow:hidden;min-height:88vh;display:flex;align-items:center;padding:7rem 2rem 5rem}
        .jhero-bg{position:absolute;inset:0;background:linear-gradient(135deg,rgba(14,21,32,.97) 0%,rgba(30,45,69,.8) 50%,rgba(14,21,32,.95) 100%)}
        .jhero-grid{position:absolute;inset:0;opacity:.04;background-image:linear-gradient(var(--jice) 1px,transparent 1px),linear-gradient(90deg,var(--jice) 1px,transparent 1px);background-size:40px 40px}
        .jhero-stripe{position:absolute;top:0;left:0;width:6px;height:100%;background:linear-gradient(180deg,var(--jgold),var(--jalert),var(--jgold))}
        .jhero-content{position:relative;max-width:800px;padding-left:2rem;animation:slideIn .8s ease both}
        @keyframes slideIn{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
        .jmission{display:inline-flex;align-items:center;gap:.5rem;font-family:Barlow Condensed,sans-serif;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--jgold);border:1px solid rgba(200,164,90,.4);padding:.35rem 1rem;border-radius:2px;margin-bottom:1.8rem}
        .jh1{font-family:Barlow Condensed,sans-serif;font-size:clamp(2.8rem,6vw,5rem);font-weight:800;line-height:1;letter-spacing:.02em;text-transform:uppercase;color:var(--jwhite);margin-bottom:1.2rem}
        .jh1 .jg{color:var(--jgold)}.jh1 .ji{color:var(--jice)}
        .jhero-sub{font-size:clamp(1rem,2vw,1.15rem);color:var(--jlight);font-weight:300;max-width:620px;margin-bottom:2.5rem;line-height:1.7}
        .jactions{display:flex;gap:1rem;flex-wrap:wrap}
        .jbp{background:var(--jgold);color:var(--jblack);padding:.9rem 2.2rem;border-radius:3px;font-weight:700;font-size:.95rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
        .jbg{border:1px solid rgba(126,200,227,.5);color:var(--jice);padding:.9rem 2rem;border-radius:3px;font-weight:600;font-size:.95rem;text-decoration:none}
        .jurgency{background:var(--jsteel);border-top:1px solid rgba(200,164,90,.3);border-bottom:1px solid rgba(200,164,90,.3);padding:1.5rem 2rem;display:flex;flex-wrap:wrap;justify-content:center;gap:2rem;text-align:center}
        .jui{font-size:.88rem;color:var(--jlight)}.jui strong{color:var(--jgold);display:block;font-size:1.05rem}
        .jcon{max-width:1100px;margin:0 auto;padding:5rem 2rem}
        .jcon-alt{background:var(--jpanel)}
        .jh2{font-family:Barlow Condensed,sans-serif;font-size:clamp(1.9rem,3.5vw,2.8rem);font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--jwhite);margin-bottom:.8rem}
        .jh2 .jg{color:var(--jgold)}.jh2 .ji{color:var(--jice)}
        .jintro{font-size:1rem;color:var(--jlight);max-width:680px;margin-bottom:2.5rem;font-weight:300;line-height:1.7}
        .tstep{display:grid;grid-template-columns:56px 1fr;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid rgba(126,200,227,.12)}
        .tstep:last-child{border-bottom:none}
        .tnum{width:48px;height:48px;border-radius:50%;background:var(--jsteel);border:2px solid var(--jgold);display:flex;align-items:center;justify-content:center;font-family:Barlow Condensed,sans-serif;font-size:1.3rem;font-weight:700;color:var(--jgold);flex-shrink:0}
        .tcontent h3{font-size:1rem;font-weight:600;color:var(--jwhite);margin-bottom:.4rem}
        .tcontent p{font-size:.88rem;color:var(--jmuted);line-height:1.65}
        .bahbox{background:linear-gradient(135deg,rgba(61,90,64,.3),rgba(30,45,69,.5));border:1px solid rgba(200,164,90,.35);border-left:4px solid var(--jgold);border-radius:0 8px 8px 0;padding:2rem;margin:2rem 0}
        .bahbox h3{font-family:Barlow Condensed,sans-serif;font-size:1.4rem;letter-spacing:.06em;color:var(--jgold);text-transform:uppercase;margin-bottom:.8rem}
        .bahbox p{font-size:.92rem;color:var(--jlight);line-height:1.7}
        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2rem;margin-top:2rem}
        .pcard{background:rgba(255,255,255,.03);border:1px solid rgba(126,200,227,.15);border-top:3px solid var(--jice);border-radius:0 0 8px 8px;padding:1.5rem}
        .pcard h3{font-size:.95rem;font-weight:600;color:var(--jice);margin-bottom:.5rem}
        .pcard p{font-size:.85rem;color:var(--jmuted);line-height:1.6}
        .cwrap{overflow-x:auto;margin-top:2rem}
        table{width:100%;border-collapse:collapse;min-width:520px}
        th{background:var(--jsteel);color:var(--jwhite);padding:.9rem 1.2rem;text-align:left;font-family:Barlow Condensed,sans-serif;font-size:.9rem;letter-spacing:.1em;text-transform:uppercase}
        th.thl{background:var(--jgold);color:var(--jblack)}
        td{padding:.85rem 1.2rem;border-bottom:1px solid rgba(126,200,227,.1);font-size:.88rem;color:var(--jlight)}
        td.tdhl{color:var(--jgold);font-weight:600}
        .jfaq{border-bottom:1px solid rgba(126,200,227,.12);padding:1.3rem 0}
        .jfaq h3{font-size:.98rem;font-weight:600;color:var(--jwhite);margin-bottom:.5rem}
        .jfaq p{font-size:.88rem;color:var(--jmuted);line-height:1.65}
        .jcta{background:linear-gradient(135deg,var(--jsteel) 0%,var(--jdark) 100%);border-top:3px solid var(--jgold);padding:5rem 2rem;text-align:center}
        .jcta-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem}
        .jpbig{color:var(--jgold);font-family:Barlow Condensed,sans-serif;font-size:2rem;letter-spacing:.1em;text-decoration:none;display:block;margin-top:1.5rem}
        .jfoot{background:#040608;padding:2rem;border-top:1px solid rgba(200,164,90,.15);text-align:center}
        .jfoot p{font-size:.75rem;color:var(--jmuted);line-height:1.8;max-width:700px;margin:0 auto}
        .jfoot a{color:var(--jice);text-decoration:none}
        @media(max-width:768px){.jhero{padding:5rem 1.2rem 3rem;min-height:auto}.jcon{padding:3.5rem 1.2rem}.tstep{grid-template-columns:44px 1fr;gap:1rem}.jcta{padding:3.5rem 1.2rem}}
        @media(max-width:420px){.jh1{font-size:2.4rem}.jactions,.jcta-actions{flex-direction:column}}
      `}</style>

      <div className="jtopbar">PCS orders to Alaska? <a href="tel:9072449368">Call (907) 244-9368</a> — We close VA loans in 21 days or less.</div>

      <nav className="jnav">
        <div className="jnav-brand">
          <strong>Derek Huit | Cardinal Financial</strong>
          <span>JBER VA Home Loan Specialist · NMLS #203980</span>
        </div>
        <a href="tel:9072449368" className="jnav-cta">Call Now</a>
      </nav>

      <section className="jhero">
        <div className="jhero-bg" />
        <div className="jhero-grid" />
        <div className="jhero-stripe" />
        <div className="jhero-content">
          <div className="jmission">★ JBER VA Home Loan Specialist</div>
          <h1 className="jh1">PCS to <span className="ji">JBER</span>.<br />Own Your <span className="jg">Alaska</span><br />Home.</h1>
          <p className="jhero-sub">Military families at Joint Base Elmendorf-Richardson deserve a lender who knows Alaska. I’ve helped hundreds of servicemembers and veterans at JBER use their VA benefit to buy homes — fast, with zero down, and without the stress of starting over in a new market.</p>
          <div className="jactions">
            <a href="tel:9072449368" className="jbp">Get Pre-Approved</a>
            <a href="#pcs-guide" className="jbg">PCS Home Buying Guide →</a>
          </div>
        </div>
      </section>

      <div className="jurgency">
        {[["21-Day","Target Close Time"],["$0 Down","VA Purchase Loans"],["$1.2M","Alaska Loan Limit"],["No PMI","Required on VA Loans"],["18+ Years","Alaska Mortgage Experience"]].map(([v,l])=>(
          <div key={l} className="jui"><strong>{v}</strong>{l}</div>
        ))}
      </div>

      <div id="pcs-guide">
        <div className="jcon">
          <h2 className="jh2">The <span className="jg">JBER PCS</span> Home Buying Timeline</h2>
          <p className="jintro">Getting PCS orders to Alaska is exciting and stressful. Housing waitlists at JBER can be months long — which means buying makes financial sense faster than you think.</p>
          {steps.map(([title, desc], i)=>(
            <div key={i} className="tstep">
              <div className="tnum">{i+1}</div>
              <div className="tcontent"><h3>{title}</h3><p>{desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="jcon-alt">
        <div className="jcon">
          <h2 className="jh2">BAH + <span className="jg">VA Loan</span> = The Alaska Military Advantage</h2>
          <p className="jintro">Your Basic Allowance for Housing is one of the most powerful financial tools available to military members — and most people don’t use it aggressively enough.</p>
          <div className="bahbox">
            <h3>⚡ The BAH Math at JBER</h3>
            <p>A typical E-5 with dependents at JBER receives BAH designed to cover local rental costs. A $400,000–$500,000 home with a VA loan (zero down, no PMI) often has a monthly payment within that BAH rate — meaning you’re building equity at zero net cost. When you PCS out, sell for a potential gain or convert to a rental and let another military family’s BAH pay your mortgage.</p>
          </div>
          <div className="pgrid">
            {pros.map(([h,p])=>(<div key={h} className="pcard"><h3>{h}</h3><p>{p}</p></div>))}
          </div>
        </div>
      </div>

      <div className="jcon">
        <h2 className="jh2">VA vs. <span className="ji">Conventional</span> at JBER</h2>
        <p className="jintro">For military families at JBER, VA loans are almost always the better financial choice. Comparison on a $450,000 Anchorage home.</p>
        <div className="cwrap">
          <table>
            <thead><tr><th>Factor</th><th className="thl">VA Loan (Derek Huit)</th><th>Conventional 5% Down</th><th>Conventional 20% Down</th></tr></thead>
            <tbody>
              {compare.map(([f,va,c5,c20])=>(
                <tr key={f}><td>{f}</td><td className="tdhl">{va}</td><td>{c5}</td><td>{c20}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="jcon-alt">
        <div className="jcon">
          <h2 className="jh2">JBER Home Buying <span className="jg">FAQ</span></h2>
          {faqs.map(([q,a])=>(
            <div key={q} className="jfaq"><h3>{q}</h3><p>{a}</p></div>
          ))}
        </div>
      </div>

      <div className="jcta">
        <h2 className="jh2">Ready to <span className="jg">Own Your Alaska?</span></h2>
        <p style={{color:"var(--jlight)",maxWidth:"560px",margin:"0 auto"}}>PCS orders don’t wait. Neither should you. Get your VA pre-approval started today.</p>
        <div className="jcta-actions">
          <a href="tel:9072449368" className="jbp">Call Derek: (907) 244-9368</a>
          <a href="https://www.cardinalfinancial.com/find-a-loan-officer/" className="jbg">Start Application Online →</a>
        </div>
        <a href="tel:9072449368" className="jpbig">(907) 244-9368</a>
      </div>

      <footer className="jfoot">
        <p>Derek Huit · NMLS #203980 · Cardinal Financial Company, NMLS #66247 · Equal Housing Lender<br />
        Licensed in Alaska · Serving JBER and all of Anchorage · <a href="tel:9072449368">(907) 244-9368</a><br />
        All loans subject to credit approval. Not affiliated with the Department of Defense or Joint Base Elmendorf-Richardson.</p>
      </footer>
    </>
  )
}
