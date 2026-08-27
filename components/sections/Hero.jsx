'use client'
import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'Web App Builder',
  'JavaScript & Python Developer',
  'UI/UX & Web Developer',
]

const carouselItems = [
  { label: 'Role', value: 'Full Stack Dev', sub: 'Building Modern Web Apps', color: '#6EE7B7' },
  { label: 'Focus', value: 'Web Development', sub: 'Responsive UI & Interactivity', color: '#818CF8' },
  { label: 'Education', value: 'BS Graduate', sub: 'University of Karachi', color: '#6EE7B7' },
  { label: 'Status', value: '● Available', sub: 'Open for projects / hire', color: '#4ADE80' },
  { label: 'Currently Learning', value: 'Full Stack Tech', sub: 'Advanced Frameworks & APIs', color: '#818CF8' },
  { label: 'Crafting', value: 'Interactive Apps', sub: 'Games, Tools & Web Interfaces', color: '#6EE7B7' },
  { label: 'Goal', value: 'Software Engineer', sub: 'Building clean, scalable web tools', color: '#6EE7B7' },
  { label: 'Projects', value: 'Web Applications', sub: 'JS Games & Python Utilities', color: '#818CF8' },
  { label: 'Stack', value: 'Web & Scripting', sub: 'HTML · CSS · JS · Python', color: '#6EE7B7' },
  { label: 'Specialty', value: 'Frontend & UI', sub: 'Bootstrap · Responsive Design', color: '#818CF8' },
  { label: 'Version Control', value: 'Git & GitHub', sub: 'Code Management & Deployments', color: '#6EE7B7' },
  { label: 'Based In', value: 'Karachi', sub: 'Sindh, Pakistan 🇵🇰', color: '#818CF8' },
  { label: 'Open To', value: 'Remote & Hybrid', sub: 'Worldwide opportunities', color: '#4ADE80' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  // Duplicate for seamless loop
  const items = [...carouselItems, ...carouselItems]

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.18,
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '400px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(110,231,183,0.05) 0%, transparent 70%)',
      }} />

      {/* ── MAIN CONTENT ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 2rem 2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>

        {/* Available badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '50px',
          padding: '5px 16px',
          marginTop: '-65px',
          marginBottom: '1.3rem',
          fontSize: '12px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4ADE80', display: 'inline-block',
            boxShadow: '0 0 6px #4ADE80',
            animation: 'pulse 2s infinite',
          }} />
          Available for hire · Open to work
        </div>

        {/* Name + location — small, monospace */}
        <div style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          display: 'flex', alignItems: 'center', gap: '10px',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <span>Zainab Aamir</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Karachi, Pakistan</span>
        </div>

        {/* Main headline — DM Sans, not too heavy */}
        <h1 style={{
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: 'var(--text)',
          maxWidth: '680px',
        }}>
          I Build Things for the{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Web</span>
          {' '}&amp; the{' '}
          <span style={{ color: 'var(--accent-2)', fontWeight: 700 }}>Future.</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: 'var(--text-muted)',
          maxWidth: '500px',
          lineHeight: 1.8,
          marginTop: '-0.2rem',
          marginBottom: '1.5rem',
        }}>
          Full Stack Developer engineering responsive web platforms, dynamic user interfaces, and custom web tools — built for performance and user experience.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '1rem',
        }}>
          <a href="#projects" style={{
            background: 'var(--accent)', color: 'var(--bg)',
            padding: '10px 24px', borderRadius: '7px',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            display: 'inline-block', transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See My Work →
          </a>
          <a href="#contact" style={{
            background: 'transparent', color: 'var(--text)',
            padding: '10px 24px', borderRadius: '7px',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            border: '1px solid var(--border)', display: 'inline-block',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Hire Me
          </a>
          
        </div>
      </div>

      {/* ── INFINITE CAROUSEL ── */}
      <div style={{
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease 0.5s',
      }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '80px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(90deg, var(--bg), transparent)',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '80px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(270deg, var(--bg), transparent)',
        }} />

        {/* Scrolling track */}
        <div style={{
          display: 'flex',
          animation: 'scroll 35s linear infinite',
          width: 'max-content',
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              flexShrink: 0,
              padding: '1rem 1.5rem',
              borderRight: '1px solid var(--border)',
              textAlign: 'center',
              minWidth: '160px',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-surface)'
                e.currentTarget.parentElement.style.animationPlayState = 'paused'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.parentElement.style.animationPlayState = 'running'
              }}
            >
              <div style={{
                fontSize: '10px', color: 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                marginBottom: '5px',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '13px', fontWeight: 600,
                color: item.color, marginBottom: '3px',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: '11px', color: 'var(--text-muted)',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ADE80; }
          50%       { opacity: 0.5; box-shadow: 0 0 14px #4ADE80; }
        }
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}