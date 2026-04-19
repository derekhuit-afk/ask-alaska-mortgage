'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Message { id: string; role: 'user' | 'assistant'; content: string }
interface LeadData { name: string; email: string; phone: string; loanType: string; purchasePrice: string }

const STARTERS = [
  "What are current mortgage rates in Alaska?",
  "How do VA loans work for JBER military?",
  "What is the AHFC First Home Program?",
  "How much down payment do I need in Anchorage?",
  "Can I buy an investment property with 10% down?",
  "What credit score do I need for a jumbo loan?",
]

const LOAN_TYPES = ['Purchase','Refinance','VA Purchase','VA Refi','Investment Property','Jumbo','AHFC / First Time Buyer']
const NAV = '#0F2D6B'
const GREEN = '#10B981'

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '0', role: 'assistant',
    content: "Hi — I'm Derek Huit, Alaska mortgage lender with 18+ years and $1B+ in career production. Ask me anything about Alaska home loans, rates, AHFC programs, VA loans, or investment property financing."
  }])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalShown, setModalShown] = useState(false) // prevent double-trigger
  const [submitted, setSubmitted] = useState(false)
  const [lead, setLead] = useState<LeadData>({ name: '', email: '', phone: '', loanType: '', purchasePrice: '' })
  const [leadLoading, setLeadLoading] = useState(false)
  const [sessionId] = useState(() => Math.random().toString(36).slice(2))
  const msgCount = useRef(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const taRef = useRef<HTMLTextAreaElement>(null)

  // Scroll to bottom on new messages
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  // Fix iPhone keyboard pushing content — use visualViewport
  useEffect(() => {
    const handleViewport = () => {
      if (!containerRef.current) return
      const vv = (window as typeof window & { visualViewport?: { height: number } }).visualViewport
      if (vv) {
        const keyboardHeight = window.innerHeight - vv.height
        containerRef.current.style.paddingBottom = keyboardHeight > 0 ? `${keyboardHeight}px` : '0'
      }
    }
    const vv = (window as typeof window & { visualViewport?: { addEventListener: Function; removeEventListener: Function } }).visualViewport
    vv?.addEventListener('resize', handleViewport)
    return () => vv?.removeEventListener('resize', handleViewport)
  }, [])

  const triggerModal = useCallback(() => {
    if (!modalShown && !submitted) {
      setModalShown(true)
      setShowModal(true)
    }
  }, [modalShown, submitted])

  const sendMessage = useCallback(async (text?: string) => {
    const content = (text || input).trim()
    if (!content || streaming) return

    setInput('')
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content }
    const allMsgs = [...messages, userMsg]
    setMessages(allMsgs)
    setStreaming(true)
    msgCount.current++

    // Show modal after 4 exchanges (not 3 — less jarring)
    if (msgCount.current === 4) setTimeout(triggerModal, 3000)

    const aId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: aId, role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMsgs.map(m => ({ role: m.role, content: m.content })) }),
      })

      if (res.status === 429) {
        setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: "Please wait a moment before asking another question." } : m))
        setStreaming(false)
        return
      }
      if (!res.ok || !res.body) throw new Error()

      if (res.headers.get('X-Lead-Intent') === 'true') setTimeout(triggerModal, 2000)

      // Safari-compatible streaming without TextDecoder {stream:true}
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      const pump = async (): Promise<void> => {
        const { done, value } = await reader.read()
        if (done) return
        accumulated += decoder.decode(value)
        setMessages(prev => prev.map(m => m.id === aId ? { ...m, content: accumulated } : m))
        return pump()
      }
      await pump()

    } catch {
      setMessages(prev => prev.map(m => m.id === aId
        ? { ...m, content: "Something went wrong. Visit loanak.com to connect with Derek directly." }
        : m))
    } finally {
      setStreaming(false)
    }
  }, [input, streaming, messages, triggerModal])

  const submitLead = async () => {
    if (!lead.email && !lead.phone) return
    setLeadLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'ask-alaska-mortgage', sessionId }),
      })
      setSubmitted(true)
      setShowModal(false)
      const first = lead.name.split(' ')[0]
      setMessages(prev => [...prev, {
        id: Date.now().toString(), role: 'assistant',
        content: `Got it${first ? ', ' + first : ''}! I'll reach out within the hour. In the meantime, start your application at loanak.com — takes about 3 minutes.`
      }])
    } catch { /* silent */ } finally { setLeadLoading(false) }
  }

  const dotStyle = (delay: string) => ({
    width: 8, height: 8, borderRadius: '50%', background: '#9CA3AF',
    animation: 'bounce 1.2s infinite', animationDelay: delay, display: 'inline-block', margin: '0 2px'
  })

  return (
    <>
      <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${NAV}, #1e3a8a)`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>DH</div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, background: '#34d399', borderRadius: '50%', border: '2px solid #fff' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>Derek Huit — Alaska Mortgage Expert</div>
            <div style={{ color: '#93c5fd', fontSize: 11 }}>18+ yrs · $1B+ production · NMLS #203980</div>
          </div>
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer"
            style={{ background: GREEN, color: '#fff', fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Apply →
          </a>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 14, background: '#F9FAFB', display: 'flex', flexDirection: 'column', gap: 12, WebkitOverflowScrolling: 'touch' }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display: 'flex', gap: 9, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, background: msg.role === 'assistant' ? NAV : GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>
                {msg.role === 'assistant' ? 'DH' : 'You'}
              </div>
              <div style={{ maxWidth: '80%', borderRadius: 14, padding: '10px 13px', fontSize: 14, lineHeight: 1.65, background: msg.role === 'assistant' ? '#fff' : NAV, color: msg.role === 'assistant' ? '#1F2937' : '#fff', boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none', border: msg.role === 'assistant' ? '1px solid #F3F4F6' : 'none', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {msg.content === '' && streaming
                  ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0, padding: '3px 0' }}>
                      <span style={dotStyle('0ms')} /><span style={dotStyle('200ms')} /><span style={dotStyle('400ms')} />
                    </span>
                  : msg.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} style={{ height: 1 }} />
        </div>

        {/* Starters */}
        {messages.length === 1 && (
          <div style={{ padding: '4px 12px 6px', background: '#F9FAFB', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {STARTERS.map(s => (
              <button key={s} onClick={() => sendMessage(s)}
                style={{ fontSize: 11, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '4px 11px', color: '#4B5563', cursor: 'pointer', lineHeight: 1.4 }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding: '10px 12px', background: '#fff', borderTop: '1px solid #F3F4F6', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
            <textarea ref={taRef} value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
              placeholder="Ask about Alaska mortgage rates, programs, or loans..."
              rows={1} style={{ flex: 1, resize: 'none', border: '1px solid #E5E7EB', borderRadius: 10, padding: '9px 13px', fontSize: 16, outline: 'none', fontFamily: 'inherit', maxHeight: 100, overflowY: 'auto', WebkitAppearance: 'none' }} />
            <button onClick={() => sendMessage()} disabled={streaming || !input.trim()}
              style={{ background: streaming || !input.trim() ? '#E5E7EB' : NAV, color: streaming || !input.trim() ? '#9CA3AF' : '#fff', border: 'none', borderRadius: 10, padding: '9px 14px', cursor: streaming || !input.trim() ? 'not-allowed' : 'pointer', fontSize: 18, flexShrink: 0 }}>
              {streaming ? '…' : '→'}
            </button>
          </div>
          <div style={{ marginTop: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 10, color: '#9CA3AF' }}>Powered by Huit.AI · HMDA data</span>
            {!submitted && <button onClick={triggerModal} style={{ fontSize: 11, color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0 }}>Get a rate quote →</button>}
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 420, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ background: `linear-gradient(135deg, ${NAV}, #1e40af)`, padding: '20px 24px', position: 'relative' }}>
              <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: 22, lineHeight: 1 }}>×</button>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>Get Your Alaska Rate Quote</div>
              <div style={{ color: '#93c5fd', fontSize: 13, marginTop: 4 }}>Derek reviews every Alaska inquiry personally</div>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 13 }}>
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'First & Last' },
                { label: 'Email ✱', key: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone (optional)', key: 'phone', type: 'tel', placeholder: '(907) 555-0100' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    value={lead[f.key as keyof LeadData]}
                    onChange={e => setLead(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 12px', fontSize: 16, boxSizing: 'border-box', outline: 'none', WebkitAppearance: 'none' }} />
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>Loan Type</label>
                  <select value={lead.loanType} onChange={e => setLead(p => ({ ...p, loanType: e.target.value }))}
                    style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 12px', fontSize: 14, background: '#fff', boxSizing: 'border-box' }}>
                    <option value="">Select…</option>
                    {LOAN_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>Price</label>
                  <input type="text" placeholder="$400,000" value={lead.purchasePrice}
                    onChange={e => setLead(p => ({ ...p, purchasePrice: e.target.value }))}
                    style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 12px', fontSize: 14, boxSizing: 'border-box', outline: 'none' }} />
                </div>
              </div>
              <button onClick={submitLead} disabled={leadLoading || (!lead.email && !lead.phone)}
                style={{ background: leadLoading || (!lead.email && !lead.phone) ? '#D1FAE5' : GREEN, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700, cursor: leadLoading ? 'wait' : 'pointer', width: '100%' }}>
                {leadLoading ? 'Sending…' : 'Get My Rate Quote →'}
              </button>
              <div style={{ textAlign: 'center', fontSize: 12, color: '#9CA3AF' }}>
                Or apply now at{' '}
                <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color: NAV, fontWeight: 700 }}>loanak.com</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
