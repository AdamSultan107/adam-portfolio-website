import Image from "next/image";

const experiences = [
  {
    company: "PNC Financial Services",
    role: "Software Engineering Intern · GenAI Engineering Team",
    period: "Jun 2026 — Aug 2026",
    location: "Pittsburgh, PA",
    featured: true,
    summary:
      "Built production GenAI and full-stack systems for enterprise knowledge workflows.",
    bullets: [
      "Designed an RFP response autobuilder using React, Django, and Microsoft Azure—automating question extraction, source-backed retrieval through PNC’s Knowledge Search RAG API, response generation, and publishing for roughly 80% of a 20-hour manual workflow.",
      "Built a backend orchestration layer for runtime routing, screening LLM-generated responses against risk and compliance criteria, proposing remediations, and routing flagged outputs to human review.",
      "Shipped persona-based chat personalization for Knowledge Search, a RAG platform serving about 20,000 users, with Django REST APIs for group management, bulk user assignments, and role-specific configurations.",
      "Improved reliability and observability by patching application vulnerabilities and instrumenting tenant-level usage and response-latency metrics in the React/Django Insights dashboard.",
    ],
    tags: ["React", "Django / DRF", "Microsoft Azure", "RAG", "LLM APIs"],
  },
  {
    company: "Allegheny County DHS",
    role: "Software Engineering Intern · Analytics, Technology & Planning",
    period: "Feb 2026 — Apr 2026",
    location: "Pittsburgh, PA",
    featured: false,
    summary:
      "Delivered full-stack features and internal developer tooling in a production public-service platform.",
    bullets: [
      "Built a permission-aware Starred Clients feature in Python and Django, spanning the data model, migration, and REST API endpoints.",
      "Engineered a TypeScript and Django bug-reporting and troubleshooting pipeline that turns user issues into Jira tickets with embedded session replay links.",
      "Wrote automated unit and integration tests covering core API flows and edge cases within the existing auditing, role, and provider test infrastructure.",
    ],
    tags: ["Python", "Django", "TypeScript", "REST APIs", "Jira"],
  },
  {
    company: "The Silicon Project",
    role: "Lead Developer & Board Director",
    period: "Jun 2022 — Present",
    location: "New York, NY",
    featured: false,
    summary:
      "Lead engineering for a nonprofit platform supporting device donation, e-commerce, and internal operations.",
    bullets: [
      "Lead a 10-person engineering team through planning, prototyping, code review, testing, and deployment of a JavaScript, React, and Node.js platform with PostgreSQL, Stripe-powered checkout, donor intake, and an employee portal serving 2,600+ users.",
      "Designed RESTful services for donor tracking and inventory management, supporting $420K+ in donations and diverting 34,000+ pounds of e-waste.",
    ],
    tags: ["JavaScript", "React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://www.thesiliconproject.org/",
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL", "Ruby", "HTML / CSS"],
  },
  {
    label: "AI / ML",
    skills: ["Azure OpenAI", "Azure AI Search", "RAG", "LLM APIs", "Multi-Agent Systems"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Django", "Node.js", "Ruby on Rails", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    label: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Microsoft Azure"],
  },
  {
    label: "Practices",
    skills: ["Agile", "Scrum", "Code Review", "Unit & Integration Testing", "CI/CD", "Technical Documentation"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Jenkins", "GitHub Actions", "Docker", "Postman", "Jira", "Cucumber", "Minitest"],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Computer Systems",
  "AI & Machine Learning",
  "Software Engineering Foundations",
  "Principles of Software Construction",
  "Database Design & Development",
  "Application Design & Development",
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Adam Sultan, back to top">
          Adam Sultan
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <h1 className="hero-title animate-in">Adam Sultan</h1>
            <p className="hero-subtitle animate-in delay-1">
              Full-Stack Software Engineer
            </p>
            <p className="hero-summary animate-in delay-2">
              Senior at Carnegie Mellon studying Information Systems and
              Human-Computer Interaction. Previously a software engineering
              intern on PNC’s GenAI team, working across backend, AI, and product.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a
                className="btn primary"
                href="/AdamSultanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a className="btn secondary" href="#experience">
                Explore My Work
              </a>
            </div>
            <div className="socials animate-in delay-4">
              <a
                className="social-pill"
                href="https://www.linkedin.com/in/aksultan05"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="social-pill"
                href="https://github.com/aksultan05"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a className="social-pill" href="mailto:aksultan05@gmail.com">
                Email ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <h2>Experience</h2>
            <p className="section-lead">
              Software engineering across financial services, public services,
              and nonprofit technology.
            </p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className={`experience-card${experience.featured ? " featured" : ""}`}
                key={experience.company}
              >
                <div className="experience-meta">
                  <div>
                    {experience.featured && <span className="lead-badge">Featured experience</span>}
                    <h3>{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                  </div>
                  <div className="experience-date">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-bullets">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-footer">
                  <div className="tag-row">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {experience.link && (
                    <a
                      className="text-link"
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit organization ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
            <p className="section-lead">
              Open-source, full-stack, and systems work.
            </p>
          </div>
          <div className="project-grid project-grid-featured">
            <article className="project-card project-card-dark">
              <div className="project-topline">
                <span className="project-number">01</span>
                <span className="project-type">Open Source</span>
              </div>
              <h3>NodeBB Contributor</h3>
              <p>
                Delivered a “Post Anonymously” plugin in a team fork using an
                Agile, peer-reviewed workflow. Implemented hooks, admin settings,
                and permission checks, then strengthened compatibility with CI/CD
                automation and mutation testing.
              </p>
              <div className="tag-row">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Redis</span>
                <span>GitHub Actions</span>
                <span>Docker</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/NodeBB/NodeBB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore NodeBB ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-topline">
                <span className="project-number">02</span>
                <span className="project-type">Full Stack</span>
              </div>
              <h3>Roi Du Pain Bakery</h3>
              <p>
                Built session-based authentication and role-based access across
                customers, managers, bakers, shippers, and guests. Delivered a
                catalog, persistent cart, shipping-aware checkout, fulfillment
                workflows, and versioned RESTful JSON APIs.
              </p>
              <div className="tag-row">
                <span>Ruby on Rails</span>
                <span>SQLite</span>
                <span>Cucumber</span>
                <span>Minitest</span>
              </div>
              <p className="project-note">100% verified Cucumber and Minitest coverage</p>
            </article>
          </div>

          <div className="project-subheading">
            <h3>Additional projects</h3>
          </div>
          <div className="project-grid project-grid-secondary">
            <article className="project-card compact">
              <div className="project-topline">
                <span className="project-number">03</span>
                <span className="project-type">Nonprofit Platform</span>
              </div>
              <div className="project-media">
                <Image
                  src="/projects/tsp.png"
                  alt="The Silicon Project website"
                  width={960}
                  height={500}
                />
              </div>
              <h3>The Silicon Project</h3>
              <p>
                Worked on development of a nonprofit platform for donor intake,
                e-commerce, inventory, and internal operations serving more than
                2,600 users.
              </p>
              <div className="tag-row">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Stripe</span>
              </div>
              <a
                className="text-link"
                href="https://www.thesiliconproject.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website ↗
              </a>
            </article>

            <article className="project-card compact">
              <div className="project-topline">
                <span className="project-number">04</span>
                <span className="project-type">Education</span>
              </div>
              <div className="project-media">
                <Image
                  src="/projects/intelliminds.png"
                  alt="Intelliminds website"
                  width={960}
                  height={500}
                />
              </div>
              <h3>Intelliminds</h3>
              <p>
                Co-founded an education service and built its website for
                affordable tutoring, college consulting, and SAT/ACT support.
              </p>
              <div className="tag-row">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <a
                className="text-link"
                href="https://intelliminds-sooty.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website ↗
              </a>
            </article>

            <article className="project-card compact project-card-no-preview">
              <div className="project-topline">
                <span className="project-number">05</span>
                <span className="project-type">HackCMU</span>
              </div>
              <h3>RestroomRanker</h3>
              <p>
                Built a crowd-sourced campus app for finding, rating, and
                reviewing restrooms by building, floor, and accessibility.
              </p>
              <div className="tag-row">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>Leaflet</span>
              </div>
            </article>

            <article className="project-card compact">
              <div className="project-topline">
                <span className="project-number">06</span>
                <span className="project-type">Biotechnology</span>
              </div>
              <div className="project-media">
                <Image
                  src="/projects/enyx.png"
                  alt="ENYX Therapeutics website"
                  width={960}
                  height={500}
                />
              </div>
              <h3>ENYX</h3>
              <p>
                Built a website for a New York gene therapy startup, focused on
                a clear product story, accessibility, and a trustworthy visual
                presence.
              </p>
              <div className="tag-row">
                <span>React</span>
                <span>TypeScript</span>
                <span>Accessibility</span>
              </div>
              <a
                className="text-link"
                href="https://enyxtherapeutics.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website ↗
              </a>
            </article>
          </div>

          <div className="project-subheading">
            <h3>Systems coursework</h3>
            <p>
              Source remains private in accordance with Carnegie Mellon course policies.
            </p>
          </div>
          <div className="project-grid project-grid-compact">
            <article className="project-card compact">
              <div className="project-topline">
                <span className="project-number">07</span>
                <span className="project-type">C · Networking</span>
              </div>
              <h3>Concurrent HTTP Proxy Server</h3>
              <p>
                Built a concurrent HTTP/1.0 proxy with robust request parsing,
                thread synchronization, POSIX sockets, and buffered I/O.
              </p>
              <div className="tag-row">
                <span>C</span>
                <span>POSIX Sockets</span>
                <span>Pthreads</span>
                <span>HTTP/1.0</span>
              </div>
            </article>
            <article className="project-card compact">
              <div className="project-topline">
                <span className="project-number">08</span>
                <span className="project-type">C · Memory</span>
              </div>
              <h3>Dynamic Memory Allocator</h3>
              <p>
                Implemented a 64-bit allocator with 16-byte alignment, block
                splitting and coalescing, and heap-consistency validation.
              </p>
              <div className="tag-row">
                <span>C</span>
                <span>64-bit</span>
                <span>Memory Management</span>
                <span>Heap Validation</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <h2>Skills</h2>
          </div>
          <div className="skills-stack">
            {skillGroups.map((group) => (
              <div className="skills-row" key={group.label}>
                <div className="skills-label">{group.label}</div>
                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span className="skill-item" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <h2>About</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                I study Information Systems and Human-Computer Interaction at
                Carnegie Mellon.
              </p>
              <p>
                My work sits where backend systems, applied AI, and thoughtful
                product design meet. I like turning ambiguous workflows into
                software that is observable, tested, and genuinely useful—from
                enterprise knowledge search to public-sector case management.
              </p>
              <p>
                I graduate in May 2027 and intend to pursue a master’s degree.
                I’m actively applying for Summer 2027 software engineering
                internships and am also open to full-time roles.
              </p>
            </div>
            <aside className="education-card">
              <span className="card-label">Education</span>
              <h3>Carnegie Mellon University</h3>
              <p>B.S. Information Systems & Human-Computer Interaction</p>
              <p className="education-date">Expected May 2027</p>
            </aside>
            <div className="coursework">
              <h3>Relevant Coursework</h3>
              <div className="coursework-list">
                {coursework.map((course) => <span key={course}>{course}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <h2>Contact</h2>
            <p>
              I’m actively applying for Summer 2027 software engineering
              internships and full-time roles. If you think I’d be a fit, I’d
              be glad to connect.
            </p>
            <a className="email-link" href="mailto:aksultan05@gmail.com">
              aksultan05@gmail.com ↗
            </a>
          </div>
          <form
            className="contact-form"
            action="https://formspree.io/f/xaqdoroa"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio message" />
            <label className="honeypot" aria-hidden="true">
              Leave this field empty
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              First Name
              <input type="text" name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" autoComplete="family-name" />
            </label>
            <label className="full">
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="full">
              Subject
              <input
                type="text"
                name="subject"
              />
            </label>
            <label className="full">
              I’m reaching out about
              <select name="opportunityType" defaultValue="" required>
                <option value="" disabled>Select one</option>
                <option value="summer-2027-internship">Summer 2027 internship</option>
                <option value="full-time-role">Full-time role</option>
                <option value="project-or-collaboration">Project or collaboration</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="full">
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn primary" type="submit">Send Message</button>
            <p className="form-fallback">
              If the form does not open, email me directly at{" "}
              <a href="mailto:aksultan05@gmail.com">aksultan05@gmail.com</a>.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Adam Sultan</p>
        <div>
          <a href="https://github.com/aksultan05" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aksultan05" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:aksultan05@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
