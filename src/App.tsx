import { useEffect, useMemo, useRef, useState } from 'react'
import { profileData } from './profileData'

type SectionId = 'about' | 'projects' | 'experience' | 'education' | 'hobbies' | 'appointment'

const sections: Array<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'appointment', label: 'Appointment' },
]

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId>(ids[0]!)
  const lastActive = useRef(active)

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        const top = inView[0]
        const next = top?.target?.id as SectionId | undefined
        if (next && next !== lastActive.current) {
          lastActive.current = next
          setActive(next)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -65% 0px',
      },
    )

    for (const el of els) observer.observe(el)
    return () => observer.disconnect()
  }, [ids])

  return active
}

function scrollToSection(id: SectionId) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = /^https?:\/\//i.test(href)
  return (
    <a
      className="chip"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(ids)

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-title">{profileData.name}</div>
            <div className="brand-sub">{profileData.headline}</div>
          </div>

          <nav className="nav" aria-label="Primary">
            {sections.map((s) => (
              <button
                key={s.id}
                className={cx('nav-link', active === s.id && 'is-active')}
                onClick={() => scrollToSection(s.id)}
                type="button"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <a className="cta" href={profileData.appointmentLink} target="_blank" rel="noreferrer">
            Make an appointment
          </a>
        </div>
      </header>

      <main className="content">
        <section className="hero" aria-label="Intro">
          <h1>{profileData.name}</h1>
          <p className="lede">{profileData.summary}</p>
          <div className="chips" aria-label="Links">
            {profileData.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <h2>About</h2>
            <p>Core strengths and how I work.</p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Strengths</h3>
              <ul className="list">
                {profileData.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Focus</h3>
              <p className="muted">
                Backend engineering, database performance, cloud delivery (AWS), and operational
                reliability—especially in fintech and data-intensive environments.
              </p>
              <div className="divider" />
              <p className="muted">
                Prefer clear written communication, pragmatic standards, and end-to-end ownership
                from requirements to production.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <h2>Projects</h2>
            <p>Selected products and impact.</p>
          </div>
          <div className="grid-3">
            {profileData.projects.map((p) => (
              <article key={p.name} className="card">
                <div className="card-titleRow">
                  <h3 className="card-title">{p.name}</h3>
                  {p.url ? (
                    <a className="card-link" href={p.url} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  ) : null}
                </div>
                <ul className="list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <h2>Work experience</h2>
            <p>Roles, dates, and highlights.</p>
          </div>
          <div className="timeline">
            {profileData.experience.map((r) => (
              <article key={`${r.company}-${r.dateRange}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-top">
                    <div>
                      <h3 className="timeline-title">
                        {r.title} · {r.company}
                      </h3>
                      <div className="muted">
                        {r.location ? `${r.location} · ` : ''}
                        {r.dateRange}
                      </div>
                    </div>
                  </div>
                  <ul className="list">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-head">
            <h2>Education</h2>
            <p>Degrees and programs.</p>
          </div>
          <div className="grid-2">
            {profileData.education.map((e) => (
              <article key={`${e.program}-${e.dateRange ?? ''}`} className="card">
                <h3>{e.program}</h3>
                <div className="muted">
                  {e.institution ? `${e.institution}${e.dateRange ? ' · ' : ''}` : ''}
                  {e.dateRange ?? ''}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="hobbies" className="section">
          <div className="section-head">
            <h2>Hobbies</h2>
            <p>A few things I enjoy outside work.</p>
          </div>
          <div className="card">
            <ul className="list">
              {profileData.hobbies.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="appointment" className="section">
          <div className="section-head">
            <h2>Make an appointment</h2>
            <p>Book time with me.</p>
          </div>
          <div className="card appointment">
            <p className="muted">
              Use the button below to book a meeting.
            </p>
            <a className="cta cta-large" href={profileData.appointmentLink} target="_blank" rel="noreferrer">
              Book an appointment
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="muted">
            © {new Date().getFullYear()} {profileData.name}
          </div>
        </footer>
      </main>
    </div>
  )
}
