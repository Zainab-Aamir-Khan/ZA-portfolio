'use client'
import { useEffect, useState, useRef } from 'react'

const HTMLIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><path fill="#E44D26" d="M5 3l1.5 17L16 23l9.5-3L27 3z"/><path fill="#F16529" d="M16 21.5V5H5.5L7 20z"/><path fill="#EBEBEB" d="M11 10h5V8H9l.3 3.5H14v2H9.6l.3 3.5 6.1 1.7V13h-5z"/><path fill="#fff" d="M16 10h4.7l-.4 4h-4.3v2h4l-.4 3.5-3.6 1V17h.3v-1H16z"/></svg>
)
const CSSIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><path fill="#1572B6" d="M5 3l1.5 17L16 23l9.5-3L27 3z"/><path fill="#33A9DC" d="M16 21.5V5H5.5L7 20z"/><path fill="#fff" d="M11 13h5v-2h-5.2L10.5 8H21l-.3 2h-5v2h4.8l-.5 5.5-4 1.1-4-1.1-.3-2.5h2l.1 1.2 2.2.6 2.2-.6.2-2.7H11z"/></svg>
)
const JSIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path fill="#323330" d="M20.8 22.4c.4.7.9 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5.9c-.3-.6-.6-.8-1.2-.8-.5 0-.9.3-.9.8 0 .6.3.8 1.2 1.2l.5.2c1.6.7 2.6 1.4 2.6 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.9-.9-3.4-2l1.3-.6zm-7 .2c.3.5.5.9 1.1.9.6 0 .9-.2.9-1.1v-6h1.9v6c0 1.8-1.1 2.7-2.6 2.7-1.4 0-2.2-.7-2.6-1.6l1.3-.9z"/></svg>
)
const PythonIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><path fill="#3776AB" d="M16 3c-4 0-7 1-7 3v2h7v1H6C4 9 3 11 3 14s1 5 3 5h2v-3c0-2 2-3 4-3h8c2 0 3-1 3-3V6c0-2-3-3-7-3zm-2 2.5a1 1 0 110 2 1 1 0 010-2z"/><path fill="#FFD43B" d="M16 29c4 0 7-1 7-3v-2h-7v-1h10c2 0 3-2 3-5s-1-5-3-5h-2v3c0 2-2 3-4 3H12c-2 0-3 1-3 3v4c0 2 3 3 7 3zm2-2.5a1 1 0 110-2 1 1 0 010 2z"/></svg>
)
const BootstrapIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><rect width="32" height="32" rx="6" fill="#7952B3"/><path fill="#fff" d="M10 8h7.5c3 0 5 1.5 5 4 0 1.8-1 3-2.5 3.5C21.5 16 23 17.5 23 20c0 2.8-2 4-5.5 4H10zm3 5h4c1.2 0 2-.6 2-1.7 0-1-.8-1.6-2-1.6h-4zm0 6h4.5c1.4 0 2.2-.7 2.2-1.8s-.8-1.8-2.2-1.8H13z"/></svg>
)
const GitIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><path fill="#F05032" d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.7 5l3 3a2 2 0 012.5 2.5l2.9 2.9a2 2 0 11-1.2 1.2L17.2 12v7a2 2 0 11-1.6.1L15.5 19l-3.3-3.3a2 2 0 01-2.4-2.7L6.8 10 2.5 14.3a1.7 1.7 0 000 2.4L14.5 28.7a1.7 1.7 0 002.4 0L29.5 17a1.7 1.7 0 000-2.4z"/></svg>
)
const GitHubIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><rect width="32" height="32" rx="16" fill="#24292E"/><path fill="#fff" d="M16 3a13 13 0 00-4.1 25.3c.6.1.8-.3.8-.6v-2c-3.5.8-4.2-1.5-4.2-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.6 11.6 0 016.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.1 3.2.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A13 13 0 0016 3z"/></svg>
)
const VSCodeIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><path fill="#007ACC" d="M23.5 3.5l-8 7.5L9 6 3.5 8.5v15L9 26l6.5-5 8 7.5 5-2V5.5zm0 19.5l-8-7 8-7z"/><path fill="#fff" d="M9 22l4-6-4-6-2.5 1.5v9z"/></svg>
)
const NextIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><circle cx="16" cy="16" r="13" fill="#000"/><path fill="#fff" d="M12 11h2v8.5l7-8.5h2L16 19.5 23 27h-2.5L16 22l-4 5H9.5l6.5-8L12 11z"/></svg>
)
const LeadershipIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><circle cx="16" cy="10" r="5" fill="#9896A8"/><path fill="#9896A8" d="M8 26c0-4 3-7 8-7s8 3 8 7H8z"/><path fill="#6EE7B7" d="M22 8l2 3h3l-2.5 2 1 3L23 14l-2.5 2 1-3L19 11h3z"/></svg>
)
const ContentIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><rect x="6" y="5" width="20" height="24" rx="2" fill="#1A1D27" stroke="#9896A8" strokeWidth="1.5"/><line x1="10" y1="11" x2="22" y2="11" stroke="#9896A8" strokeWidth="1.5"/><line x1="10" y1="15" x2="22" y2="15" stroke="#9896A8" strokeWidth="1.5"/><line x1="10" y1="19" x2="17" y2="19" stroke="#9896A8" strokeWidth="1.5"/><path fill="#6EE7B7" d="M20 23l4-2-4-2z"/></svg>
)
const ResearchIcon = () => (
  <svg viewBox="0 0 32 32" width="100%" height="100%"><circle cx="14" cy="14" r="8" fill="none" stroke="#9896A8" strokeWidth="2"/><line x1="20" y1="20" x2="27" y2="27" stroke="#9896A8" strokeWidth="2.5" strokeLinecap="round"/><line x1="11" y1="14" x2="17" y2="14" stroke="#6EE7B7" strokeWidth="1.5"/><line x1="14" y1="11" x2="14" y2="17" stroke="#6EE7B7" strokeWidth="1.5"/></svg>
)

const categories = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    color: '#6EE7B7',
    desc: 'Crafting responsive, interactive interfaces and user experiences.',
    skills: [
      { Icon: HTMLIcon, name: 'HTML5', big: true, bg: '#E44D2615' },
      { Icon: CSSIcon, name: 'CSS3', big: true, bg: '#1572B615' },
      { Icon: JSIcon, name: 'JavaScript', big: true, bg: '#F7DF1E15' },
      { Icon: BootstrapIcon, name: 'Bootstrap', big: false, bg: '#7952B315' },
      { Icon: VSCodeIcon, name: 'VS Code', big: false, bg: '#007ACC15' },
    ]
  },
  {
    id: 'backend',
    label: 'SCRIPTING & TOOLS',
    color: '#818CF8',
    desc: 'Writing functional scripts, application logic, and managing code.',
    skills: [
      { Icon: PythonIcon, name: 'Python', big: true, bg: '#3776AB15' },
      { Icon: GitIcon, name: 'Git', big: true, bg: '#F0503215' },
      { Icon: GitHubIcon, name: 'GitHub', bg: '#24292E30' },
    ]
  },
  {
    id: 'human',
    label: 'CORE SKILLS',
    color: '#9896A8',
    desc: 'Problem solving and practical analytical thinking skills.',
    skills: [
      { Icon: LeadershipIcon, name: 'Problem Solving', big: true, bg: '#9896A815' },
      { Icon: ResearchIcon, name: 'Analytical Thinking', big: true, bg: '#9896A815' },
      { Icon: ContentIcon, name: 'Time Management', big: false, bg: '#9896A815' },
    ]
  },
  {
    id: 'learning',
    label: 'LEARNING NOW',
    color: '#4ADE80',
    desc: 'Constantly building — expanding my full stack development toolkit.',
    skills: [
      { Icon: NextIcon, name: 'Next.js', big: true, bg: '#00000030' },
      { Icon: JSIcon, name: 'Full Stack Tech', big: false, bg: '#F7DF1E15' },
    ]
  },
]

export default function Skills() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % categories.length)
        setFading(false)
      }, 300)
    }, 4500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (idx) => {
    if (idx === current) return
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, 300)
    if (!paused) startTimer()
  }

  const cat = categories[current]
  const sidePositions = ['8%', '30%', '57%', '78%']

  return (
    <section id="skills" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section label */}
        <div style={{
          fontSize: '11px', color: 'var(--text-muted, #888)',
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: '2.5rem',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ color: 'var(--accent, #6EE7B7)' }}>03</span>
          <span style={{ width: '40px', height: '1px', background: 'var(--border, #333)' }} />
          What I Do
        </div>

        {/* Main container */}
        <div
          className="skills-container"
          onMouseEnter={() => { setPaused(true); clearInterval(timerRef.current) }}
          onMouseLeave={() => { setPaused(false); startTimer() }}
          style={{
            border: '1px solid var(--border, #333)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '44px 1fr',
          }}
        >

          {/* Side ticker */}
          <div style={{
            background: 'var(--bg-surface, #111)',
            borderRight: '1px solid var(--border, #333)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '24px 0',
          }}>
            {/* Active indicator line */}
            <div style={{
              position: 'absolute',
              left: 0, width: '3px',
              height: '40px',
              background: cat.color,
              top: sidePositions[current],
              transition: 'top 0.5s cubic-bezier(0.4,0,0.2,1), background 0.4s',
              borderRadius: '0 2px 2px 0',
            }} />
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => goTo(i)}
                title={c.label}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  writingMode: 'vertical-rl',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: i === current ? c.color : 'var(--text-muted, #888)',
                  transition: 'color 0.3s',
                  whiteSpace: 'nowrap',
                  opacity: i === current ? 1 : 0.5,
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{ padding: '28px', background: 'var(--bg-surface, #111)' }}>

            {/* Header row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h2 style={{
                  fontFamily: 'sans-serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--text, #fff)',
                  margin: '0 0 4px',
                  letterSpacing: '-0.03em',
                }}>
                  What I Do.
                </h2>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted, #888)',
                  margin: 0,
                  opacity: fading ? 0 : 1,
                  transition: 'opacity 0.3s',
                }}>
                  {cat.desc}
                </p>
              </div>

              {/* Dot indicators */}
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '4px' }}>
                {categories.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: i === current ? cat.color : 'var(--border, #333)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Icon bento grid */}
            <div
              className="skills-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '8px',
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {cat.skills.map((skill, i) => (
                <SkillCard key={`${cat.id}-${i}`} skill={skill} color={cat.color} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-container {
            grid-template-columns: 1fr !important;
          }
          .skills-container > div:first-child {
            display: none !important;
          }
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

function SkillCard({ skill, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: skill.big ? 'span 2' : 'span 1',
        background: hovered ? skill.bg : 'var(--bg-surface-2, #1a1a1a)',
        border: `1px solid ${hovered ? color : 'var(--border, #333)'}`,
        borderRadius: '10px',
        padding: skill.big ? '18px 12px' : '14px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '7px',
        cursor: 'default',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 24px ${color}20` : 'none',
      }}
    >
      <div style={{ width: skill.big ? '36px' : '26px', height: skill.big ? '36px' : '26px' }}>
        <skill.Icon />
      </div>
      <span style={{
        fontSize: skill.big ? '11px' : '9px',
        color: hovered ? color : 'var(--text-muted, #888)',
        textAlign: 'center',
        fontWeight: 500,
        transition: 'color 0.2s',
        lineHeight: 1.3,
      }}>
        {skill.name}
      </span>
    </div>
  )
}