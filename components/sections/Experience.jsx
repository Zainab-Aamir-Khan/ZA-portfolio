'use client'
import { useState, useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Digital Experts Dev',
    role: 'Web Application Developer',
    employmentType: 'Full-time',
    period: 'Mar 2025 — Present',
    duration: '1 yr 6 mos',
    location: 'Karāchi, Sindh, Pakistan • Remote',
    description: 'Developing responsive web applications and interactive client solutions using modern frontend technologies and frameworks.',
    tags: ['Web Application Development', 'Web Projects', 'Frontend Architecture'],
    status: 'Active',
    statusColor: '#10B981', // Green dot
  },
  {
    company: 'Potentials Dev+',
    role: 'Frontend Developer',
    employmentType: 'Full-time',
    period: 'Feb 2024 — Feb 2025',
    duration: '1 yr 1 mo',
    location: 'Karāchi, Sindh, Pakistan • On-site',
    description: 'Built scalable user interfaces and modular web components using React.js and the MERN stack ecosystem.',
    tags: ['React.js', 'MERN Stack', 'Tailwind CSS', 'REST APIs'],
    status: 'Completed',
    statusColor: '#8B5CF6', // Purple dot
  },
  {
    company: 'Checkmate Digital',
    role: 'Web Content Writer',
    employmentType: 'Part-time',
    period: 'Aug 2023 — Jan 2024',
    duration: '6 mos',
    location: 'Karāchi, Sindh, Pakistan • Remote',
    description: 'Authored structured web content, technical documentation, and optimized digital assets for client platforms.',
    tags: ['Web Content Writing', 'Content Creation', 'SEO'],
    status: 'Completed',
    statusColor: '#6B7280', // Gray hollow dot
  },
]

export default function Experience() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} style={{ padding: '6rem 2rem', background: '#090D16', color: '#FDFBF7' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', fontFamily: 'var(--font-body, DM Sans), sans-serif' }}>
              Experience
            </h2>
            <div style={{ display: 'inline-block', marginTop: '0.5rem', background: '#131B2E', border: '1px solid #242F47', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', color: '#94A3B8' }}>
              Building modern web experiences
            </div>
          </div>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: '#10B981', fontSize: '13px', fontFamily: 'var(--font-body, DM Sans), sans-serif', textDecoration: 'none', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 14px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.05)' }}
          >
            LinkedIn Profile ↗
          </a>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          
          {/* Vertical Connecting Line */}
          <div style={{ position: 'absolute', left: '7px', top: '12px', bottom: '12px', width: '2px', background: '#242F47' }} />

          {/* Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, index) => (
              <div key={exp.company + index} style={{ position: 'relative' }}>
                
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '24px',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: exp.status === 'Active' ? exp.statusColor : '#090D16',
                  border: `2px solid ${exp.statusColor}`,
                  boxShadow: exp.status === 'Active' ? `0 0 10px ${exp.statusColor}` : 'none',
                  zIndex: 2,
                }} />

                {/* Card Outer */}
                <div style={{
                  background: '#111726',
                  border: '1px solid #1E293B',
                  borderRadius: '12px',
                  padding: '1.5rem 1.8rem',
                  transition: 'border-color 0.2s',
                }}>
                  
                  {/* Company & Date */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#FDFBF7' }}>
                      {exp.company}
                    </h3>
                    <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748B' }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.95rem', marginTop: '4px' }}>
                    {exp.role} <span style={{ color: '#64748B', fontWeight: 400 }}>({exp.employmentType})</span>
                  </div>

                  {/* Location & Duration */}
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px', marginBottom: '12px' }}>
                    • {exp.location} <span style={{ opacity: 0.6 }}>({exp.duration})</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, margin: '0 0 1rem' }}>
                    {exp.description}
                  </p>

                  {/* Tags & Status Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {exp.tags.map(tag => (
                        <span key={tag} style={{ background: '#1E293B', color: '#94A3B8', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: '1px solid #334155' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.status === 'Active' && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                        Active
                      </span>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}