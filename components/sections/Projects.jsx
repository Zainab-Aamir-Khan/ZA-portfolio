'use client'
import { useEffect, useState, useRef } from 'react'

// Screenshot fallback from live URL — using screenshot API
function getScreenshot(url) {
  if (!url) return null
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

const featuredProjects = [
  {
    name: 'Scientific Calculator',
    title: 'Scientific Calculator',
    desc: 'A feature-rich scientific calculator with a clean and intuitive interface.',
    image: 'images/projects/p1.png', // Add your image path here
    live: 'https://scientific-calculator-blush-theta.vercel.app/',
    github: 'https://github.com/Zainab-Aamir-Khan/scientific-calculator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#6EE7B7',
    cat: ['all', 'featured', 'frontend'],
  },
  {
    name: 'Student Management System',
    title: 'Student Management System',
    desc: 'Full SMS designed using HTML, CSS, JS and React.',
    image: '/images/projects/p2.png', // Add your image path here
     live: '',
     github: '',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#4ADE80',
    cat: ['all', 'featured', 'frontend'],
  },
  {
    name: 'Literary Publishers',
    title: 'Literary Publishers',
    desc: 'A platform for literary enthusiasts to share and discover new publications.',
    image: '/images/projects/p3.png', // Add your image path here
     live: 'https://literary-publishers.vercel.app/',
     github: 'https://github.com/Zainab-Aamir-Khan/LiteraryPublishers',
    tags: ['React', 'TypeScript', 'Emailjs'],
    color: '#4ADE80',
    cat: ['all', 'featured', 'frontend'],
  },
]

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
]

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  
  // Uses specified custom image first, falls back to live screenshot API
  const displayImage = project.image || getScreenshot(project.live)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? project.color : 'var(--border)'}`,
        background: 'var(--bg-surface)',
        transition: 'all 0.25s',
        transform: inView
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(20px)',
        boxShadow: hovered ? `0 12px 32px ${project.color}20` : 'none',
        opacity: inView ? 1 : 0,
        cursor: 'pointer',
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      {/* Screenshot / Custom image area */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg-surface-2)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Skeleton shimmer while loading */}
        {!imgLoaded && !imgError && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, var(--bg-surface-2) 25%, var(--bg-surface) 50%, var(--bg-surface-2) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }} />
        )}

        {displayImage && !imgError ? (
          <img
            src={displayImage}
            alt={project.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transition: 'transform 0.4s, opacity 0.3s',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              opacity: imgLoaded ? 1 : 0,
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true) }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '36px',
            background: `linear-gradient(135deg, ${project.color}15, var(--bg-surface-2))`,
          }}>🌐</div>
        )}

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,12,16,0.93)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          padding: '18px',
        }}>
          <p style={{
            fontSize: '11px', color: '#E8E6F0',
            textAlign: 'center', lineHeight: 1.75,
            margin: 0,
          }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  flex: 1, textAlign: 'center',
                  background: project.color,
                  color: ['#4ADE80', '#6EE7B7'].includes(project.color) ? '#0F1117' : '#fff',
                  fontSize: '11px', fontWeight: 700,
                  padding: '8px', borderRadius: '5px',
                  textDecoration: 'none',
                }}
              >
                Live Preview →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  flex: 1, textAlign: 'center',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#E8E6F0',
                  fontSize: '11px',
                  padding: '8px', borderRadius: '5px',
                  textDecoration: 'none',
                }}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div style={{ padding: '14px' }}>
        <div style={{
          fontSize: '13px', fontWeight: 700,
          color: 'var(--text)', marginBottom: '7px',
        }}>
          {project.title}
        </div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '9px',
              background: 'var(--bg-surface-2)',
              border: `1px solid ${project.color}40`,
              color: project.color,
              padding: '2px 7px', borderRadius: '3px',
              fontFamily: 'var(--font-body, DM Sans), sans-serif',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
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

  const filtered = featuredProjects.filter(p => p.cat.includes(activeTab))

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '28px',
          flexWrap: 'wrap', gap: '16px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-body, DM Sans), sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 4px',
              letterSpacing: '-0.04em',
            }}>
              My Projects
            </h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Things I've built — from web apps to tools
            </p>
          </div>
          <a
            href="https://github.com/Zainab-Aamir-Khan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px', color: 'var(--accent)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body, DM Sans), sans-serif',
              border: '1px solid var(--border)',
              padding: '6px 14px', borderRadius: '6px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            github.com/Zainab-Aamir-Khan →
          </a>
        </div>

        {/* Filter tabs — scrollable on mobile */}
        <div style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.1s',
          marginBottom: '24px',
        }}>
          <div
            className="tabs-scroll"
            style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '4px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  border: `1px solid ${activeTab === tab.key ? 'var(--accent)' : 'var(--border)'}`,
                  background: activeTab === tab.key ? 'var(--bg-surface)' : 'transparent',
                  color: activeTab === tab.key ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: '11px',
                  fontWeight: activeTab === tab.key ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      </div>

      <style>{`
        .tabs-scroll::-webkit-scrollbar { display: none; }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .projects-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}