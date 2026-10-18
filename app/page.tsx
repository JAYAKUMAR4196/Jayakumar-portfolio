'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const capabilities = [
  { index: '01', title: 'Computer vision', copy: 'Real-time visual systems built with Python, OpenCV, and MediaPipe.' },
  { index: '02', title: 'Intelligent systems', copy: 'Human-centered AI that turns behavioral signals into useful decisions.' },
  { index: '03', title: 'Secure by design', copy: 'Security-aware engineering shaped by threat analysis and incident response.' },
]

const technicalSkills = [
  { category: 'AI & Machine Learning', skills: 'Artificial Intelligence · Machine Learning · Computer Vision · OpenCV · MediaPipe' },
  { category: 'Data & Analysis', skills: 'Data Analysis · Data Visualization · SQL' },
  { category: 'Security', skills: 'Information Security' },
  { category: 'Development', skills: 'Python · Application Development · Project Coordination' },
]

const certifications = [
  { title: 'Cloud Computing Fundamentals', issuer: 'IBM', date: 'Issued Sep 2026' },
  { title: 'Bharatiya Antariksh Hackathon 2026', issuer: 'Hack2skill', date: 'Issued Aug 2026', id: '2026H2S06BAH-P34304' },
  { title: 'Adobe University Hackathon 2026 — Round 1', issuer: 'Unstop', date: 'Issued Aug 2026', id: 'ddc8fd0e-0ace-4d8c-b4a7-bc2ca1ec9264' },
  { title: 'Introduction to Python', issuer: 'IBM Career Education Program', date: 'Issued Nov 2025', id: '99f05cdc6c05443697ecc90ae472689b' },
  { title: 'Java Fundamentals', issuer: 'IBM Career Education Program', date: 'Issued Nov 2025', id: 'b28f9105507a479ba367c281aaa324ea' },
  { title: 'Tata — Cybersecurity Analyst Job Simulation', issuer: 'Forage', date: 'Issued Jun 2026', id: 'Q7J4fQmB6Zy7dTJ8k' },
  { title: 'Deloitte Australia — Cyber Job Simulation', issuer: 'Forage', date: 'Issued Jun 2026', id: 'SJqrDGa5TjPkJqZh7' },
]

const projects = [
  {
    number: '01',
    title: 'AMPUS',
    subtitle: 'AI-based monitoring of productivity and user state',
    description: 'Designed and built an AI-driven system that monitors user productivity and mental/emotional state in real time through webcam-based analysis.',
    details: [
      'Integrated activity monitoring, face detection, and fatigue detection into a unified AI fusion engine for continuous user-state assessment.',
      'Applied Python, OpenCV, and MediaPipe to process live video streams and extract facial and behavioral signals.',
      'Converted behavioral signals into quantified productivity scores and generated intelligent, real-time suggestions for the user.',
    ],
    tags: ['Python', 'OpenCV', 'MediaPipe', 'AI Fusion'],
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Jaya Kumar home">
          <span className="brand-mark">JK<span>.</span></span>
          <span className="brand-label">Portfolio / 2026</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-link" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> AI / ML engineering student</p>
          <h1>Building intelligence<br /><em>with intention.</em></h1>
          <p className="hero-description">I&apos;m Jaya Kumar — a computer science student exploring the space where computer vision, data, and secure software meet.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2c4VQIWcFaECSePYom6bgop03hJ2BO.png" alt="Graphite portrait of Jaya Kumar wearing glasses and a blazer" />
          </div>
          <div className="portrait-caption"><span>01 /</span> curious by nature<br /><span>02 /</span> precise by practice</div>
          <div className="hero-index">01 — 04</div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <p className="section-kicker">/ A point of view</p>
        <div className="intro-copy">
          <h2>Technology should feel <span>human.</span></h2>
          <p>I like building systems that do more than work. They should make sense, respond clearly, and solve something real — from understanding user state to spotting a security threat.</p>
        </div>
      </section>

      <section className="summary-section" id="summary">
        <div className="section-heading"><p className="section-kicker">/ Summary</p><span>Profile overview</span></div>
        <p className="summary-copy">I&apos;m a Computer Science and Engineering student focused on Artificial Intelligence and Machine Learning, building practical tools that connect intelligent systems with real-world needs. My experience spans real-time computer vision with Python, OpenCV, and MediaPipe, alongside cybersecurity work in threat detection, incident response, and digital forensics. I&apos;m driven to create thoughtful, reliable software across AI, data, and security.</p>
      </section>

      <section className="education-section" id="education">
        <div className="section-heading"><p className="section-kicker">/ Education</p><span>Academic background</span></div>
        <div className="education-list">
          <article className="education-item">
            <span className="education-year">2023 — 2027</span>
            <div><h3>Bachelor of Engineering (B.E.)</h3><p>Computer Science &amp; Engineering — AI &amp; Machine Learning</p><strong>Chaitanya Deemed to be University</strong></div>
            <span className="education-status">Expected May 2027</span>
          </article>
          <article className="education-item">
            <span className="education-year">Class XII</span>
            <div><h3>PCMB</h3><p>Karnataka Pre-University Education Board</p></div>
          </article>
          <article className="education-item">
            <span className="education-year">Class X</span>
            <div><h3>SSLC</h3><p>Karnataka Secondary Education Examination Board</p></div>
          </article>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading"><p className="section-kicker">/ Technical skills</p><span>Tools and focus areas</span></div>
        <div className="skills-list">
          {technicalSkills.map((group) => (
            <article className="skill-row" key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.skills}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications-section" id="certifications">
        <div className="section-heading"><p className="section-kicker">/ Certifications</p><span>Credentials and milestones</span></div>
        <div className="certifications-list">
          {certifications.map((certification) => (
            <article className="certification-row" key={certification.title}>
              <div><h3>{certification.title}</h3><p>{certification.issuer}</p></div>
              <span>{certification.date}</span>
              {certification.id && <small>Credential ID {certification.id}</small>}
            </article>
          ))}
        </div>
      </section>

      <section className="interests-section" id="interests">
        <div className="section-heading"><p className="section-kicker">/ Interests</p><span>What keeps me curious</span></div>
        <div className="interest-content">
          <p className="interest-list">Artificial Intelligence <span>·</span> Computer Vision <span>·</span> Machine Learning <span>·</span> Cybersecurity <span>·</span> Data Science</p>
          <p className="interest-statement">Building technology-driven solutions for real-world challenges.</p>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading"><p className="section-kicker">/ What I bring</p><span>Selected capabilities</span></div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <ChevronDown className="card-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><p className="section-kicker">/ Selected work</p><span>01 project / personal</span></div>
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual"><div className="signal-orbit orbit-one" /><div className="signal-orbit orbit-two" /><div className="signal-orbit orbit-three" /><div className="signal-core" /><span className="visual-label">LIVE / SIGNAL FUSION</span></div>
            <div className="project-info"><span className="project-number">{project.number}</span><p className="project-type">Personal project / 2025</p><h2>{project.title}</h2><h3>{project.subtitle}</h3><p className="project-description">{project.description}</p><ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact">Discuss the project <ArrowUpRight size={16} /></a></div>
          </article>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">/ Start a conversation</p>
        <h2>Have a problem worth<br /><em>thinking about?</em></h2>
        <div className="contact-details">
          <a className="contact-email" href="#contact">kumarjaya4196@gmail.com <ArrowUpRight size={20} /></a>
          <a className="contact-phone" href="tel:+918660603923">+91 86606 03923</a>
          <a className="contact-phone" href="https://github.com/JAYAKUMAR4196" target="_blank" rel="noreferrer">github.com/JAYAKUMAR4196 <ArrowUpRight size={18} /></a>
        </div>
        <form className="conversation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          </div>
          <label>What can I help with?<textarea name="message" placeholder="Tell me a little about the problem or idea..." rows={5} required /></label>
          <div className="form-actions">
            <button className="button button-dark" type="submit">Submit the problem <ArrowUpRight size={16} /></button>
            {submitted && <p className="form-note" role="status">Thanks — your message was captured. Jaya can be reached at <strong>kumarjaya4196@gmail.com</strong> or <strong>+91 86606 03923</strong>.</p>}
          </div>
        </form>
      </section>

      <footer className="footer"><span>© 2026 Jaya Kumar</span><span>AI / ML · Vision · Security</span><div className="footer-links"><a href="https://www.linkedin.com/in/jayakumar-s-3788363ba" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/JAYAKUMAR4196" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  )
}

