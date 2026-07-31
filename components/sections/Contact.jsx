'use client'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [inView, setInView] = useState(true)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    
    setSending(true)
    setError('')

    // EmailJS Send Form Call
    emailjs.send(
      'service_20bydqr',   // Replace with your EmailJS Service ID
      'template_xnbvros',  // Replace with your EmailJS Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'xBeGP8SkwMFT2sgBx'    // Replace with your EmailJS Public Key
    )
    .then(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    })
    .catch((err) => {
      console.error('EmailJS Error:', err)
      setSending(false)
      setError('Failed to send message. Please try again.')
    })
  }

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Big centered statement ── */}
        <div style={{
          textAlign: 'center',
          marginBottom: '56px',
          position: 'relative',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(163,118,162,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            fontSize: '9px',
            color: 'var(--accent-orchid, #A376A2)',
            fontFamily: '"Courier New", monospace',
            letterSpacing: '0.18em',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}>
            Get In Touch
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 800,
            color: 'var(--text-main, #FFFFFF)',
            margin: '0 0 14px',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
          }}>
            Have an idea?<br/>
            <span style={{ color: 'var(--accent-orchid, #A376A2)' }}>Let's build it.</span>
          </h2>

          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted, #D8C4D6)',
            margin: '0 auto',
            maxWidth: '440px',
            lineHeight: 1.75,
          }}>
            Whether it's a project, a collaboration, or just a question — I'm always open to a good conversation. I respond within 24 hours.
          </p>
        </div>

        {/* ── Open borderless form ── */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >

          {/* Name row */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-plum, #835281)',
            padding: '14px 0',
            transition: 'border-color 0.2s',
          }}>
            <label style={{
              fontSize: '11px',
              color: 'var(--text-muted, #D8C4D6)',
              width: '80px',
              flexShrink: 0,
              letterSpacing: '0.04em',
            }}>
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                fontSize: '13px',
                color: 'var(--text-main, #FFFFFF)',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Email row */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-plum, #835281)',
            padding: '14px 0',
          }}>
            <label style={{
              fontSize: '11px',
              color: 'var(--text-muted, #D8C4D6)',
              width: '80px',
              flexShrink: 0,
              letterSpacing: '0.04em',
            }}>
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              type="email"
              required
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                fontSize: '13px',
                color: 'var(--text-main, #FFFFFF)',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Message row */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
            borderBottom: '1px solid var(--border-plum, #835281)',
            padding: '14px 0',
          }}>
            <label style={{
              fontSize: '11px',
              color: 'var(--text-muted, #D8C4D6)',
              width: '80px',
              flexShrink: 0,
              paddingTop: '2px',
              letterSpacing: '0.04em',
            }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              rows={4}
              required
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                fontSize: '13px',
                color: 'var(--text-main, #FFFFFF)',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit',
                lineHeight: 1.7,
              }}
            />
          </div>

          {error && (
            <div style={{ color: '#F87171', fontSize: '12px', marginTop: '12px' }}>
              {error}
            </div>
          )}

          {/* Submit row */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#4ADE80',
                boxShadow: '0 0 6px #4ADE80',
                display: 'inline-block',
                animation: 'glow 2s infinite',
              }} />
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #D8C4D6)' }}>
                Available · Responds within 24h
              </span>
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              style={{
                background: sent ? 'transparent' : 'var(--accent-orchid, #A376A2)',
                color: '#FFFFFF',
                border: sent ? '1px solid var(--accent-orchid, #A376A2)' : 'none',
                padding: '11px 28px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: sending || sent ? 'default' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                opacity: sending ? 0.7 : 1,
              }}
            >
              {sent ? '✓ Message Sent!' : sending ? 'Sending...' : 'Send Message →'}
            </button>
          </div>

          {/* Quick links */}
          <div style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-plum, #835281)',
            display: 'flex',
            justify: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'zaamir427@gmail.com', href: 'mailto:zaamir427@gmail.com' },
              { label: 'GitHub ↗', href: 'https://github.com/kiranShamsHere' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/kiranshams' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted, #D8C4D6)',
                  textDecoration: 'none',
                  fontFamily: '"Courier New", monospace',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-orchid, #A376A2)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted, #D8C4D6)'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </form>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ADE80; }
          50% { opacity: 0.5; box-shadow: 0 0 12px #4ADE80; }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted, #D8C4D6);
          opacity: 0.5;
        }
      `}</style>
    </section>
  )
}