import ChatInterface from '@/components/ChatInterface'
import FAQSection from '@/components/FAQSection'
import { getAlaskaStats } from '@/lib/hmda'

const NAV = '#0F2D6B'
const GREEN = '#10B981'

export default async function Home() {
  const stats = await getAlaskaStats()

  return (
    <main style={{ minHeight:'100vh' }}>
      {/* Nav */}
      <nav style={{
        background:'#fff', borderBottom:'1px solid #F3F4F6', padding:'12px 16px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:40, boxShadow:'0 1px 4px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:32, height:32, borderRadius:8, background:NAV, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ color:'#fff', fontSize:11, fontWeight:700 }}>AK</span>
          </div>
          <span style={{ fontWeight:700, color:'#111827', fontSize:15 }}>AskAlaskaMortgage.ai</span>
        </div>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ background:NAV, color:'#fff', fontSize:13, fontWeight:700, padding:'8px 18px', borderRadius:8, textDecoration:'none' }}>
          Apply Now →
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background:`linear-gradient(135deg, ${NAV} 0%, #1e3a8a 60%, #0a1f4e 100%)`, color:'#fff', padding:'48px 16px 40px' }}>
        <div style={{ maxWidth:720, margin:'0 auto', textAlign:'center' }}>
          <div style={{
            display:'inline-block', background:'rgba(16,185,129,0.2)', border:'1px solid rgba(16,185,129,0.4)',
            color:'#34d399', fontSize:12, fontWeight:600, padding:'4px 14px', borderRadius:20, marginBottom:18
          }}>
            Powered by 7 Years of Federal HMDA Data · Built in Alaska
          </div>
          <h1 style={{ fontSize:'clamp(28px,5vw,48px)', fontWeight:800, lineHeight:1.15, margin:'0 0 16px' }}>
            Ask Alaska&rsquo;s #1 Mortgage AI
          </h1>
          <p style={{ color:'#93c5fd', fontSize:'clamp(15px,2vw,18px)', maxWidth:580, margin:'0 auto 28px', lineHeight:1.6 }}>
            Instant expert answers about Alaska home loans, VA programs, AHFC, jumbo mortgages, and investment property financing — from 18+ years of real Alaska lending experience.
          </p>
          {/* Stats */}
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'16px 32px', marginTop:8 }}>
            {[
              { val:'$1B+', lbl:'Career Production' },
              { val:'18+', lbl:'Years in Alaska' },
              { val:`${stats.vaLoanPct}%`, lbl:'AK Loans Are VA', green: true },
              { val:stats.totalLoans.toLocaleString(), lbl:'AK Loans Analyzed' },
            ].map(s => (
              <div key={s.lbl} style={{ textAlign:'center' }}>
                <div style={{ fontSize:22, fontWeight:800, color: s.green ? '#34d399' : '#fff' }}>{s.val}</div>
                <div style={{ fontSize:11, color:'#93c5fd', marginTop:2 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat */}
      <section style={{ maxWidth:760, margin:'0 auto', padding:'24px 16px 16px' }}>
        <div style={{ height:580 }}>
          <ChatInterface />
        </div>
        <div style={{ marginTop:10, display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'6px 20px', fontSize:12, color:'#9CA3AF' }}>
          <span>🏔️ Alaska-specific answers</span>
          <span>📊 Real HMDA federal data</span>
          <span>⚡ Instant expert responses</span>
          <span>🔒 Your info is private</span>
        </div>
      </section>


      {/* Market Data Teaser */}
      <section style={{ background: '#fff', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', padding: '20px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#6B7280', fontWeight: 600 }}>📊 Anchorage Market (Feb 2026):</span>
          <a href="/anchorage-housing-market/single-family" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '6px 14px', fontSize: 13, color: '#1E3A8A', fontWeight: 700, textDecoration: 'none' }}>🏠 SFR: $490K median →</a>
          <a href="/anchorage-housing-market/condos" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '6px 14px', fontSize: 13, color: '#065F46', fontWeight: 700, textDecoration: 'none' }}>🏢 Condos: $230K median →</a>
          <a href="/anchorage-housing-market/multi-family" style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 8, padding: '6px 14px', fontSize: 13, color: '#92400E', fontWeight: 700, textDecoration: 'none' }}>🏘️ Multi-family: $530K →</a>
          <a href="/anchorage-housing-market" style={{ fontSize: 12, color: '#6B7280', textDecoration: 'underline' }}>Full market report →</a>
        </div>
      </section>

      {/* HMDA Data Strip */}
      <section style={{ background:`linear-gradient(135deg, #111827, ${NAV})`, color:'#fff', padding:'44px 16px', marginTop:12 }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:28 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>
              Alaska HMDA Federal Mortgage Data · {stats.yearRange} · {stats.totalLoans.toLocaleString()} Loans
            </div>
            <h2 style={{ fontSize:20, fontWeight:700, margin:0 }}>What the Data Shows About Alaska Mortgages</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:14 }}>
            {[
              { label:'VA Loan Share', value:`${stats.vaLoanPct}%`, sub:'of all AK mortgages' },
              { label:'Avg Loan Amount', value:`$${(stats.avgLoanAmount/1000).toFixed(0)}K`, sub:'Alaska average' },
              { label:'Approval Rate', value:`${stats.approvalRate}%`, sub:'overall AK approvals' },
              { label:'Purchase Share', value:`${stats.purchasePct}%`, sub:'of AK originations' },
            ].map(s => (
              <div key={s.label} style={{ background:'rgba(255,255,255,0.1)', borderRadius:12, padding:'18px 16px', textAlign:'center' }}>
                <div style={{ fontSize:28, fontWeight:800, color:'#34d399' }}>{s.value}</div>
                <div style={{ fontSize:12, color:'#D1D5DB', fontWeight:600, marginTop:4 }}>{s.label}</div>
                <div style={{ fontSize:11, color:'#6B7280', marginTop:2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign:'center', fontSize:11, color:'#4B5563', marginTop:18 }}>
            Source: Federal HMDA data 2017–2024. Alaska state code 02. Data loaded and analyzed by Huit.AI.
          </p>
        </div>
      </section>

      <FAQSection />


      {/* Network Strip */}
      <section style={{ background: '#F3F4F6', padding: '28px 20px', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
            Alaska Mortgage Authority Network — Powered by Huit.AI
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {[
              { label: 'Anchorage Mortgage Guide', href: 'https://anchoragemortgageguide.com' },
              { label: 'Alaska Investor Guide', href: 'https://alaskainvestorguide.com' },
              { label: 'AK Military Home Loans', href: 'https://akmilitaryhomeloans.com' },
              { label: 'Alaska Mortgage Data', href: 'https://alaskamortgagedata.com' },
              { label: 'Alaska Lender Rankings', href: 'https://alaskalenderrankings.com' },
            ].map(l => (
              <a key={l.label} href={l.href}
                style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8, padding: '7px 14px', fontSize: 12, fontWeight: 600, color: '#0F2D6B', textDecoration: 'none' }}>
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background:NAV, color:'#fff', padding:'56px 16px', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(22px,4vw,32px)', fontWeight:800, margin:'0 0 12px' }}>Ready to Get Pre-Approved?</h2>
        <p style={{ color:'#93c5fd', marginBottom:28, fontSize:16 }}>Apply takes 3 minutes. I personally review every Alaska application.</p>
        <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:8, background:GREEN, color:'#fff', fontWeight:800, padding:'16px 32px', borderRadius:14, textDecoration:'none', fontSize:17 }}>
          Start My Application at loanak.com →
        </a>
        <div style={{ marginTop:20, fontSize:12, color:'#6B7280' }}>
          Derek Huit · Cardinal Financial · NMLS #203980 · Licensed AK · WA · MT<br />
          Equal Housing Lender · Not affiliated with AHFC or any government agency
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:'#111827', color:'#6B7280', fontSize:11, padding:'20px 16px', textAlign:'center' }}>
        <p style={{ margin:'0 0 4px' }}>© 2026 AskAlaskaMortgage.ai — A Huit.AI Product | Derek Huit, VP Retail Market Leader, NMLS #203980</p>
        <p style={{ margin:"4px 0 0" }}><a href="https://huit.ai/terms" style={{ color:"#6B7280" }}>Terms</a> · <a href="https://huit.ai/privacy" style={{ color:"#6B7280" }}>Privacy</a></p>
        <p style={{ margin:0 }}>This AI provides general mortgage information only and does not constitute a loan commitment or rate lock. Rates and program availability change daily.</p>
      </footer>
    </main>
  )
}
