const FAQS = [
  {
    q: "What are current mortgage rates in Anchorage, Alaska?",
    a: "Alaska mortgage rates typically run 25–50 basis points above national averages. VA and AHFC loans offer below-market rates. Rates change daily — contact Derek Huit at loanak.com for today's exact rate."
  },
  {
    q: "What is the minimum down payment to buy a home in Anchorage?",
    a: "VA loans: 0% down. USDA rural loans: 0%. AHFC First Home: 3% down. FHA: 3.5% down. Conventional: 3–20% down. Jumbo loans: 10–20% down."
  },
  {
    q: "What is the AHFC First Home Program?",
    a: "AHFC (Alaska Housing Finance Corporation) offers below-market rates for first-time buyers with 3% minimum down payment. Income limits apply — typically $115,000–$145,000 depending on family size and location. Can be combined with Alaska's MCC tax credit worth up to $2,000/year."
  },
  {
    q: "Can I get a VA loan near JBER in Anchorage?",
    a: "Yes. VA loans are available anywhere in Alaska. JBER houses 25,000+ military personnel — Alaska has one of the highest VA loan utilization rates per capita in the US. VA requires 0% down, no PMI. No loan limits for borrowers with full entitlement."
  },
  {
    q: "What is the jumbo loan limit in Anchorage for 2025?",
    a: "The 2025 conforming loan limit in Anchorage is $766,550 — higher than the national baseline due to Alaska's high-cost area designation. Loans above this are jumbo, typically requiring 10–20% down and a 700+ credit score."
  },
  {
    q: "How do investment property loans work in Alaska?",
    a: "Conventional investment property loans require 15–25% down. DSCR loans qualify based on rental income (not personal income) — ideal for investors. Multi-family properties (2–4 units) have lower down requirements if you occupy one unit. VA loans allow 0% down on 1–4 unit properties if you live in one."
  },
]

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }

  return (
    <section style={{ padding: '60px 16px', background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: 8 }}>
          Common Alaska Mortgage Questions
        </h2>
        <p style={{ color: '#6B7280', textAlign: 'center', fontSize: 14, marginBottom: 36 }}>
          Based on 18+ years answering questions from Alaska homebuyers
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((f, i) => (
            <details key={i} style={{ border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
              <summary style={{
                padding: '16px 20px', cursor: 'pointer', fontWeight: 600,
                fontSize: 14, color: '#111827', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: '#fff'
              }}>
                {f.q}
                <span style={{ color: '#3B82F6', marginLeft: 12, flexShrink: 0 }}>▼</span>
              </summary>
              <div style={{ padding: '0 20px 16px', fontSize: 14, color: '#4B5563', lineHeight: 1.7, borderTop: '1px solid #F3F4F6' }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 16 }}>
            Have a question not covered here? Ask the AI above — or apply directly.
          </p>
          <a
            href="https://www.loanak.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0F2D6B', color: '#fff', fontWeight: 700,
              padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15
            }}
          >
            Start My Application at loanak.com →
          </a>
        </div>
      </div>
    </section>
  )
}
