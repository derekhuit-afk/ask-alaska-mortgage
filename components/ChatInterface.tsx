'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface LeadData {
  name: string
  email: string
  phone: string
  loanType: string
  purchasePrice: string
}

const STARTERS = [
  "What are current mortgage rates in Alaska?",
  "How do VA loans work for JBER military?",
  "What is the AHFC First Home Program?",
  "How much down payment do I need in Anchorage?",
  "Can I buy an investment property in Alaska with 10% down?",
  "What credit score do I need for a jumbo loan?",
]

const LOAN_TYPES = ['Purchase','Refinance','VA Purchase','VA Refi','Investment Property','Jumbo','AHFC / First Time Buyer']

const NAV = '#0F2D6B'
const GREEN = '#10B981'
const GREEN_DK = '#059669'

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '0', role: 'assistant',
    content: "Hi — I'm Derek Huit, Alaska mortgage lender with 18+ years and $1B+ in career production. Ask me anything about Alaska home loans, rates, AHFC programs, VA loans, or investment property financing. I'm here to give you straight answers."
  }])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [leadData, setLeadData] = useState<LeadData>({ name:'', email:'', phone:'', loanType:'', purchasePrice:'' })
  const [leadLoading, setLeadLoading] = useState(false)
  const [sessionId] = useState(() => Math.random().toString(36).slice(2))
  const msgCount = useRef(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const taRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const sendMessage = useCallback(async (text?: string) => {
    const content = (text || input).trim()
    if (!content || streaming) return
    setInput('')
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content }
    const allMsgs = [...messages, userMsg]
    setMessages(allMsgs)
    setStreaming(true)
    msgCount.current++
    if (msgCount.current === 3 && !submitted) setTimeout(() => setShowModal(true), 2000)

    const aId = (Date.now()+1).toString()
    setMessages(prev => [...prev, { id: aId, role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMsgs.map(m => ({ role: m.role, content: m.content })) }),
      })
      if (!res.ok) throw new Error()
      if (res.headers.get('X-Lead-Intent') === 'true' && !submitted) setTimeout(() => setShowModal(true), 1500)

      const reader = res.body?.getReader()
      const dec = new TextDecoder()
      let acc = ''
      while (reader) {
        const { done, value } = await reader.read()
        if (done) break
        acc += dec.decode(value, { stream: true })
        const cur = acc
        setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: cur } : m))
      }
    } catch {
      setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: "Something went wrong. Please try again or visit loanak.com." } : m))
    } finally {
      setStreaming(false)
    }
  }, [input, streaming, messages, submitted])

  const submitLead = async () => {
    if (!leadData.email && !leadData.phone) return
    setLeadLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...leadData, source: 'ask-alaska-mortgage', sessionId }),
      })
      setSubmitted(true)
      setShowModal(false)
      const first = leadData.name.split(' ')[0]
      setMessages(prev => [...prev, {
        id: Date.now().toString(), role: 'assistant',
        content: `Got it${first ? ', ' + first : ''}! I'll reach out within the hour. In the meantime, you can start your application now at loanak.com — takes about 3 minutes.`
      }])
    } catch { /* silent */ } finally { setLeadLoading(false) }
  }

  return (
    <>
      {/* Chat */}
      <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'#fff', borderRadius:16, boxShadow:'0 4px 24px rgba(0,0,0,0.12)', overflow:'hidden', border:'1px solid #E5E7EB' }}>
        {/* Header */}
        <div style={{ background:`linear-gradient(135deg, ${NAV}, #1e3a8a)`, padding:'12px 16px', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ position:'relative', flexShrink:0 }}>
            <div style={{ width:40, height:40, borderRadius:'50%', background:GREEN, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:13 }}>DH</div>
            <div style={{ position:'absolute', bottom:0, right:0, width:12, height:12, background:'#34d399', borderRadius:'50%', border:'2px solid #fff' }} />
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ color:'#fff', fontWeight:600, fontSize:14 }}>Derek Huit — Alaska Mortgage Expert</div>
            <div style={{ color:'#93c5fd', fontSize:12 }}>18+ years · $1B+ production · Cardinal Financial NMLS #203980</div>
          </div>
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
            style={{ background:GREEN, color:'#fff', fontSize:12, fontWeight:700, padding:'7px 14px', borderRadius:8, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0 }}>
            Apply →
          </a>
        </div>

        {/* Messages */}
        <div style={{ flex:1, overflowY:'auto', padding:16, background:'#F9FAFB', display:'flex', flexDirection:'column', gap:14 }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display:'flex', gap:10, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{
                width:32, height:32, borderRadius:'50%', flexShrink:0,
                background: msg.role === 'assistant' ? NAV : GREEN,
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#fff', fontSize:11, fontWeight:700
              }}>
                {msg.role === 'assistant' ? 'DH' : 'You'}
              </div>
              <div style={{
                maxWidth:'80%', borderRadius:14, padding:'10px 14px', fontSize:14, lineHeight:1.65,
                background: msg.role === 'assistant' ? '#fff' : NAV,
                color: msg.role === 'assistant' ? '#1F2937' : '#fff',
                boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                border: msg.role === 'assistant' ? '1px solid #F3F4F6' : 'none',
                whiteSpace:'pre-wrap'
              }}>
                {msg.content === '' && streaming ? (
                  <div style={{ display:'flex', gap:4, padding:'4px 0' }}>
                    {[0,150,300].map(d => (
                      <div key={d} style={{ width:8, height:8, borderRadius:'50%', background:'#9CA3AF', animation:'bounce 1s infinite', animationDelay:`${d}ms` }} />
                    ))}
                  </div>
                ) : msg.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick starters */}
        {messages.length === 1 && (
          <div style={{ padding:'0 12px 10px', background:'#F9FAFB', display:'flex', flexWrap:'wrap', gap:6 }}>
            {STARTERS.map(s => (
              <button key={s} onClick={() => sendMessage(s)} style={{
                fontSize:12, background:'#fff', border:'1px solid #E5E7EB', borderRadius:20,
                padding:'5px 12px', color:'#4B5563', cursor:'pointer'
              }}>{s}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding:12, background:'#fff', borderTop:'1px solid #F3F4F6' }}>
          <div style={{ display:'flex', gap:8, alignItems:'flex-end' }}>
            <textarea
              ref={taRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }}}
              placeholder="Ask about Alaska mortgage rates, programs, or loans..."
              rows={1}
              style={{
                flex:1, resize:'none', border:'1px solid #E5E7EB', borderRadius:10,
                padding:'10px 14px', fontSize:14, outline:'none', fontFamily:'inherit',
                maxHeight:100, overflowY:'auto'
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={streaming || !input.trim()}
              style={{
                background: streaming || !input.trim() ? '#E5E7EB' : NAV,
                color: streaming || !input.trim() ? '#9CA3AF' : '#fff',
                border:'none', borderRadius:10, padding:'10px 14px',
                cursor: streaming || !input.trim() ? 'not-allowed' : 'pointer',
                fontSize:16, flexShrink:0
              }}
            >
              {streaming ? '...' : '→'}
            </button>
          </div>
          <div style={{ marginTop:6, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:11, color:'#9CA3AF' }}>Powered by Huit.AI · Real Alaska HMDA data</span>
            {!submitted && (
              <button onClick={() => setShowModal(true)} style={{ fontSize:11, color:'#3B82F6', background:'none', border:'none', cursor:'pointer', fontWeight:600 }}>
                Get a rate quote →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      {showModal && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, padding:16 }}>
          <div style={{ background:'#fff', borderRadius:20, width:'100%', maxWidth:420, boxShadow:'0 20px 60px rgba(0,0,0,0.3)', overflow:'hidden' }}>
            <div style={{ background:`linear-gradient(135deg, ${NAV}, #1e40af)`, padding:'20px 24px', position:'relative' }}>
              <button onClick={() => setShowModal(false)} style={{ position:'absolute', top:12, right:16, background:'none', border:'none', color:'rgba(255,255,255,0.6)', cursor:'pointer', fontSize:20 }}>×</button>
              <div style={{ color:'#fff', fontWeight:700, fontSize:18 }}>Get Your Alaska Rate Quote</div>
              <div style={{ color:'#93c5fd', fontSize:13, marginTop:4 }}>Derek will contact you within the hour</div>
            </div>
            <div style={{ padding:24, display:'flex', flexDirection:'column', gap:14 }}>
              {([
                { label:'Your Name', key:'name', type:'text', placeholder:'First & Last Name' },
                { label:'Email *', key:'email', type:'email', placeholder:'your@email.com' },
                { label:'Phone (Optional)', key:'phone', type:'tel', placeholder:'(907) 555-0100' },
              ] as const).map(f => (
                <div key={f.key}>
                  <label style={{ fontSize:11, fontWeight:600, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:4 }}>{f.label}</label>
                  <input
                    type={f.type} placeholder={f.placeholder}
                    value={leadData[f.key as keyof LeadData]}
                    onChange={e => setLeadData(p => ({...p, [f.key]: e.target.value}))}
                    style={{ width:'100%', border:'1px solid #E5E7EB', borderRadius:8, padding:'9px 12px', fontSize:14, boxSizing:'border-box', outline:'none', fontFamily:'inherit' }}
                  />
                </div>
              ))}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <div>
                  <label style={{ fontSize:11, fontWeight:600, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:4 }}>Loan Type</label>
                  <select value={leadData.loanType} onChange={e => setLeadData(p => ({...p, loanType: e.target.value}))}
                    style={{ width:'100%', border:'1px solid #E5E7EB', borderRadius:8, padding:'9px 12px', fontSize:14, background:'#fff', boxSizing:'border-box' }}>
                    <option value="">Select...</option>
                    {LOAN_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize:11, fontWeight:600, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.05em', display:'block', marginBottom:4 }}>Purchase Price</label>
                  <input type="text" placeholder="$400,000"
                    value={leadData.purchasePrice} onChange={e => setLeadData(p => ({...p, purchasePrice: e.target.value}))}
                    style={{ width:'100%', border:'1px solid #E5E7EB', borderRadius:8, padding:'9px 12px', fontSize:14, boxSizing:'border-box', outline:'none', fontFamily:'inherit' }} />
                </div>
              </div>
              <button onClick={submitLead} disabled={leadLoading || (!leadData.email && !leadData.phone)}
                style={{
                  background: leadLoading || (!leadData.email && !leadData.phone) ? '#D1FAE5' : GREEN,
                  color: '#fff', border:'none', borderRadius:12, padding:'14px',
                  fontSize:15, fontWeight:700, cursor: leadLoading ? 'wait' : 'pointer', width:'100%'
                }}>
                {leadLoading ? 'Sending...' : 'Get My Rate Quote →'}
              </button>
              <div style={{ textAlign:'center', fontSize:12, color:'#9CA3AF' }}>
                Or apply now at{' '}
                <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color:'#3B82F6', fontWeight:600 }}>loanak.com</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
