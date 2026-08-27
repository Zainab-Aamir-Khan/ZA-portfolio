'use client'
import { useState, useEffect } from 'react'

// desktopHide: true = only shows in mobile drawer, not desktop nav
const navLinks = [
  { label: 'Home',       href: '#home',       desktopHide: false },
  { label: 'About',      href: '#about',      desktopHide: false },
  { label: 'Skills',     href: '#skills',     desktopHide: false },
  { label: 'Experience', href: '#experience', desktopHide: false },
  { label: 'Projects',   href: '#projects',   desktopHide: false },
  { label: 'Education',  href: '#education',  desktopHide: false },
  { label: 'Services',   href: '#services',   desktopHide: false },
  { label: 'Contact',    href: '#contact',    desktopHide: false },
]

export default function Navbar() {
  // Default to dark mode state
  const [theme, setTheme]           = useState('dark')
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Sync state with HTML data attributes and Tailwind dark class
  const applyTheme = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Load theme on mount: default to dark unless saved as light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      applyTheme(savedTheme)
    } else {
      applyTheme('dark')
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!drawerOpen) return
    const handler = (e) => {
      if (
        !e.target.closest('#side-drawer') &&
        !e.target.closest('#hamburger-btn')
      ) setDrawerOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [drawerOpen])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  const isDark = theme === 'dark'

  // Dynamic Theme Colors
  const navBg = scrolled 
    ? (isDark ? 'rgba(9, 13, 22, 0.92)' : 'rgba(253, 251, 247, 0.92)') 
    : 'transparent'
  const navBorder = scrolled 
    ? (isDark ? '1px solid #242F47' : '1px solid #E2D8CE') 
    : '1px solid transparent'
  const textColor = isDark ? '#FDFBF7' : '#0F172A'
  const textMuted = isDark ? '#94A3B8' : '#334155'
  const accentColor = '#1E9E75' // Teal/Green accent color
  const cardBg = isDark ? '#131B2E' : '#F5F0EB'
  const borderSubtle = isDark ? '#242F47' : '#E2D8CE'

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: navBg,
        borderBottom: navBorder,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          fontSize: '1.4rem', fontWeight: 800,
          color: textColor, textDecoration: 'none',
          letterSpacing: '-0.02em', flexShrink: 0,
        }}>
          ZA<span style={{ color: accentColor }}>.</span>
        </a>

        {/* Desktop links */}
        <ul id="desktop-nav" style={{
          display: 'flex', gap: '1.2rem',
          listStyle: 'none', margin: 0, padding: 0, alignItems: 'center',
        }}>
          {navLinks.filter(l => !l.desktopHide).map(link => (
            <li key={link.label}>
              <a href={link.href} style={{
                color: textMuted, textDecoration: 'none',
                fontSize: '0.82rem', fontWeight: 500,
                letterSpacing: '0.03em', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = accentColor}
                onMouseLeave={e => e.target.style.color = textMuted}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>

          {/* Theme toggle — desktop */}
          <button id="theme-btn-desktop" onClick={toggleTheme} style={{
            background: cardBg, 
            border: `1px solid ${borderSubtle}`,
            borderRadius: '50px', padding: '6px 14px', cursor: 'pointer',
            color: textColor, fontSize: '13px',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.3s',
          }}>
            <span>{isDark ? '☀️' : '🌙'}</span>
            <span style={{ color: textMuted, fontSize: '12px', fontWeight: 600 }}>
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Hire Me */}
          <a href="#contact" style={{
            background: accentColor,
            color: '#FFFFFF',
            padding: '8px 18px', borderRadius: '6px',
            textDecoration: 'none', fontSize: '13px', fontWeight: 700,
            whiteSpace: 'nowrap', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Hire Me
          </a>

          {/* Hamburger — mobile */}
          <button id="hamburger-btn" onClick={() => setDrawerOpen(v => !v)} style={{
            display: 'none',
            background: cardBg, border: `1px solid ${borderSubtle}`,
            borderRadius: '6px', width: '38px', height: '38px',
            cursor: 'pointer', color: textColor, fontSize: '1.1rem',
            alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
          }}>
            {drawerOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* ── BACKDROP ── */}
      <div onClick={() => setDrawerOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 150,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)',
        opacity: drawerOpen ? 1 : 0,
        pointerEvents: drawerOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }} />

      {/* ── SIDE DRAWER (mobile) ── */}
      <aside id="side-drawer" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '270px', zIndex: 200,
        background: isDark ? '#090D16' : '#FDFBF7',
        borderLeft: `1px solid ${borderSubtle}`,
        display: 'flex', flexDirection: 'column',
        padding: '1.5rem',
        transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: drawerOpen ? '-24px 0 60px rgba(0,0,0,0.5)' : 'none',
      }}>

        {/* Drawer header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: '2rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            fontWeight: 800, fontSize: '1.3rem', color: textColor,
          }}>
            KS<span style={{ color: accentColor }}>.</span>
          </span>
          <button onClick={() => setDrawerOpen(false)} style={{
            background: cardBg, border: `1px solid ${borderSubtle}`,
            borderRadius: '6px', width: '32px', height: '32px',
            cursor: 'pointer', color: textColor, fontSize: '1rem',
          }}>✕</button>
        </div>

        {/* Drawer navigation links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setDrawerOpen(false)}
              style={{
                color: textMuted, textDecoration: 'none',
                fontSize: '0.95rem', fontWeight: 500,
                padding: '0.7rem 1rem', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = cardBg
                e.currentTarget.style.color = accentColor
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = textMuted
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: accentColor, opacity: 0.6, fontSize: '0.75rem' }}>→</span>
            </a>
          ))}
        </nav>

        {/* Drawer Theme Toggle */}
        <div style={{
          borderTop: `1px solid ${borderSubtle}`,
          paddingTop: '1.25rem', marginTop: '1rem',
        }}>
          <p style={{
            fontSize: '11px', color: textMuted, marginBottom: '0.6rem',
            textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600
          }}>Theme</p>
          <button onClick={toggleTheme} style={{
            width: '100%', background: cardBg,
            border: `1px solid ${borderSubtle}`, borderRadius: '8px',
            padding: '10px 14px', cursor: 'pointer', color: textColor,
            fontSize: '13px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', transition: 'border-color 0.2s',
          }}>
            <span>{isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}</span>
            <span style={{
              background: accentColor, color: '#FFFFFF',
              fontSize: '10px', fontWeight: 800,
              padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.05em',
            }}>
              {isDark ? 'LIGHT' : 'DARK'}
            </span>
          </button>
        </div>
      </aside>

      {/* ── RESPONSIVE MEDIA QUERIES ── */}
      <style>{`
        @media (max-width: 1024px) {
          #desktop-nav       { display: none !important; }
          #theme-btn-desktop { display: none !important; }
          #hamburger-btn     { display: flex !important; }
        }
      `}</style>
    </>
  )
}