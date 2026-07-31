'use client'
import { useEffect, useState, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'Crafting responsive, high-performance web interfaces using modern React, Next.js, and clean CSS/Tailwind. Optimized for all modern viewports.',
    color: '#6EE7B7',
  },
  {
    num: '02',
    title: '3D Web Experiences',
    desc: 'Building interactive 3D web features and product configurators using Three.js and Canvas elements for engaging user experiences.',
    color: '#818CF8',
  },
  {
    num: '03',
    title: 'Scripting & Automation',
    desc: 'Writing efficient Python scripts for problem-solving, data manipulation, and custom logic to automate workflow steps.',
    color: '#6EE7B7',
  },
  {
    num: '04',
    title: 'UI Tweaks & Fixes',
    desc: 'Debugging existing frontend code, improving layout responsiveness, upgrading CSS/JS styling, and fixing cross-browser visual bugs.',
    color: '#818CF8',
  },
]

const included = [
  'Responsive Layouts',
  'Clean Code',
  'Git / Version Control',
  'Interactive Motion',
  'Cross-browser Compatible',
  'UI/UX Polish',
]

const faqs = [
  {
    q: 'What kind of web applications do you build?',
    a: 'I specialize in interactive web applications, custom frontend interfaces, 3D product tools, and single-page apps using modern JavaScript, React, Next.js, HTML5, CSS3, and Python.',
  },
  {
    q: 'What main technologies are in your toolkit?',
    a: 'My primary frontend stack includes HTML, CSS, JavaScript, React, Next.js, Bootstrap, and Three.js. For version control and deployment, I use Git, GitHub, and Vercel, alongside Python for backend logic.',
  },
  {
    q: 'Where can I see live demos of your projects?',
    a: 'You can check out the featured applications in the Projects section above, or visit my GitHub account to view source code repositories and deployment links.',
  },
  {
    q: 'How do you handle project deployment?',
    a: 'I manage code using Git/GitHub workflows and deploy frontend projects to platforms like Vercel to ensure fast loading times and seamless continuous integration.',
  },
  {
    q: 'How can we connect or start a project?',
    a: 'Feel free to send a direct message using the Contact section below or drop an email. I always respond as soon as possible to discuss new ideas or questions!',
  }
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{
        padding: '18px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        transition: 'color 0.2s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{
            fontSize: '10px',
            color: open ? 'var(--accent)' : 'var(--text-muted)',
            fontFamily: '"Courier New", monospace',
            fontWeight: 700,
            flexShrink: 0,
            transition: 'color 0.2s',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.4,
          }}>
            {faq.q}
          </span>
        </div>
        <span style={{
          fontSize: '20px',
          color: open ? 'var(--accent)' : 'var(--text-muted)',
          flexShrink: 0,
          transition: 'color 0.2s, transform 0.3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          lineHeight: 1,
        }}>
          +
        </span>
      </div>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <p style={{
          fontSize: '12px',
          color: 'var(--text-muted)',
          lineHeight: 1.85,
          margin: '0 0 18px',
          paddingLeft: '30px',
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
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
    <section id="services" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── HEADER ── */}
        <div style={{
          marginBottom: '48px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display, Syne), sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            margin: '0 0 10px',
            letterSpacing: '-0.04em',
          }}>
            Services
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            margin: 0,
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            I turn ideas into functional web experiences — clean component structures, modern design, and reactive code.
          </p>
        </div>

        {/* ── SERVICES GRID ── */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '20px',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} inView={inView} />
          ))}
        </div>

        {/* ── ALWAYS INCLUDED ── */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.3s',
        }}>
          <span style={{
            fontSize: '10px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginRight: '4px',
            flexShrink: 0,
          }}>
            Always included →
          </span>
          {included.map(item => (
            <span key={item} style={{
              fontSize: '11px',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: '20px',
              padding: '3px 12px',
              opacity: 0.8,
            }}>
              {item}
            </span>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div style={{
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display, Syne), sans-serif',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            margin: '0 0 28px',
            letterSpacing: '-0.03em',
          }}>
            Frequently Asked Questions
          </h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          position: 'relative',
          overflow: 'hidden',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(110,231,183,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '11px',
              color: 'var(--accent)',
              fontFamily: '"Courier New", monospace',
              letterSpacing: '0.12em',
              marginBottom: '14px',
            }}>
              AVAILABLE FOR PROJECTS
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display, Syne), sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 10px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              Let's Work Together
            </h3>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              margin: '0 auto 28px',
              maxWidth: '420px',
              lineHeight: 1.7,
            }}>
              Have a project or web application idea in mind? Let's build something interactive together.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'opacity 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Start a Project →
              </a>
              <a
                href="#contact"
                style={{
                  background: 'transparent',
                  color: 'var(--text)',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .services-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ svc, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-surface)',
        borderLeft: `1px solid ${hovered ? svc.color : 'var(--border)'}`,
        borderRight: `1px solid ${hovered ? svc.color : 'var(--border)'}`,
        borderBottom: `1px solid ${hovered ? svc.color : 'var(--border)'}`,
        borderTop: `2px solid ${svc.color}`,
        borderRadius: '10px',
        padding: '22px 18px',
        transition: 'all 0.25s',
        transform: inView
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(20px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${0.1 + index * 0.08}s`,
        boxShadow: hovered ? `0 12px 28px ${svc.color}15` : 'none',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <span style={{
        fontSize: '11px',
        fontFamily: '"Courier New", monospace',
        color: svc.color,
        fontWeight: 700,
        letterSpacing: '0.05em',
      }}>
        {svc.num}
      </span>
      <h3 style={{
        fontSize: '14px',
        fontWeight: 700,
        color: 'var(--text)',
        margin: 0,
        lineHeight: 1.3,
      }}>
        {svc.title}
      </h3>
      <p style={{
        fontSize: '11px',
        color: 'var(--text-muted)',
        lineHeight: 1.75,
        margin: 0,
        flex: 1,
      }}>
        {svc.desc}
      </p>
    </div>
  )
}