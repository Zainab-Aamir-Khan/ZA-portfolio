'use client'

const educationData = [
  {
    category: 'UNIVERSITY',
    statusTag: 'Completed',
    title: "Bachelor's Computer Technology",
    subtitle: 'Computer Systems Technology',
    institution: 'Karachi University',
    location: 'Karachi, Sindh',
    period: 'Jan 2022 — Dec 2025',
    grade: 'GPA 3.6 / 4',
    accentColor: '#10B981', // Green accent
    badgeActive: true,
  },
  {
    category: 'COLLEGE',
    statusTag: 'Completed',
    title: 'Intermediate',
    subtitle: 'Pre-Medicine / Pre-Medical Studies',
    institution: 'Board of Secondary Education, Karachi',
    location: 'Karachi, Sindh',
    period: 'Jan 2018 — Dec 2020',
    grade: 'Grade: A',
    accentColor: '#8B5CF6', // Purple accent
    badgeActive: false,
  },
  {
    category: 'SCHOOL',
    statusTag: 'Completed',
    title: 'Matriculation',
    subtitle: 'Biology, General',
    institution: 'Board of Secondary Education, Karachi',
    location: 'Karachi, Sindh',
    period: 'Jan 2016 — Dec 2017',
    grade: 'Grade: A+',
    accentColor: '#64748B', // Muted accent
    badgeActive: false,
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 2rem', background: '#090D16', color: '#FDFBF7' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Section Title ── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.03em',
            fontFamily: 'sans-serif',
          }}>
            Education
          </h2>
          <p style={{
            margin: '0.5rem 0 0',
            fontSize: '0.9rem',
            color: '#64748B',
            fontFamily: 'monospace',
          }}>
            From school to university — building the foundation.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {educationData.map((edu, index) => (
            <div
              key={index}
              style={{
                background: '#111726',
                border: '1px solid #1E293B',
                borderRadius: '16px',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
              className="education-card"
            >
              {/* Card Header & Badge */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    letterSpacing: '0.15em',
                    fontWeight: 700,
                    color: edu.accentColor,
                  }}>
                    {edu.category}
                  </span>

                  {edu.statusTag && (
                    <span style={{
                      fontSize: '11px',
                      padding: '2px 10px',
                      borderRadius: '12px',
                      background: edu.badgeActive ? 'rgba(16, 185, 129, 0.12)' : '#1E293B',
                      color: edu.badgeActive ? '#10B981' : '#94A3B8',
                      border: `1px solid ${edu.badgeActive ? 'rgba(16, 185, 129, 0.3)' : '#334155'}`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}>
                      {edu.badgeActive && (
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981' }} />
                      )}
                      {edu.statusTag}
                    </span>
                  )}
                </div>

                {/* Degree Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  margin: '0 0 4px',
                  color: '#FDFBF7',
                  lineHeight: 1.25,
                }}>
                  {edu.title}
                </h3>

                {/* Major / Field */}
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '8px' }}>
                  {edu.subtitle}
                </div>

                {/* Institution */}
                <div style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: edu.accentColor,
                  marginBottom: '12px',
                }}>
                  {edu.institution}
                </div>
              </div>

              {/* Card Footer Info */}
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #1E293B',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: '#64748B',
                }}>
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#10B981',
                  textAlign: 'right',
                }}>
                  {edu.grade}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .education-card:hover {
          border-color: #334155 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}