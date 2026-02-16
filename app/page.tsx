export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">Adam Sultan</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/Adam_Sultan_Resume.pdf" target="_blank" rel="noopener">
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-visual animate-in">
            <div className="hero-portrait">
              <div className="hero-portrait-inner">
                <span>Portrait Placeholder</span>
              </div>
            </div>
            <p className="hero-note">Based in New York + Pittsburgh</p>
          </div>
          <div className="hero-content">
            <p className="eyebrow animate-in">Hello, I'm</p>
            <h1 className="hero-title animate-in delay-1">Adam Sultan</h1>
            <p className="hero-subtitle animate-in delay-2">
              Full-Stack Software Engineer
            </p>
            <p className="hero-summary animate-in delay-3">
              Building reliable, mission-driven software that helps communities
              access technology, services, and support at scale.
            </p>
            <div className="hero-actions animate-in delay-4">
              <a
                className="btn primary"
                href="/Adam_Sultan_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                Download Resume
              </a>
              <a className="btn secondary" href="#contact">
                Contact
              </a>
            </div>
            <div className="socials animate-in delay-5">
              <a
                className="social-pill"
                href="https://www.linkedin.com/in/adamksultan/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                className="social-pill"
                href="https://github.com/AdamSultan107"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              <a className="social-pill" href="mailto:aksultan05@gmail.com">
                Email
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Builder for nonprofit + civic tech</h2>
            <p className="section-lead">
              I focus on clean UX and dependable systems, shipping platforms that
              help real people.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Experience</h3>
              <p>Nonprofit & Civic Tech Builder</p>
              <p>Board Director, The Silicon Project</p>
              <p>Software Engineering Intern, Allegheny County DHS</p>
            </div>
            <div className="about-card">
              <h3>Education</h3>
              <p>B.S. Information Systems + HCI</p>
              <p>Carnegie Mellon University</p>
              <p>GPA 3.56/4.0 · Expected May 2027</p>
            </div>
            <div className="about-text">
              <p>
                I am a junior at Carnegie Mellon University studying Information
                Systems and Human-Computer Interaction. I build mission-driven
                platforms with Next.js, TypeScript, Django, and Supabase,
                focusing on clean UX and dependable systems.
              </p>
              <p>
                I am based in New York and Pittsburgh and love shipping products
                that help real people. My nonprofit work with The Silicon
                Project centers on expanding access to technology through
                repaired hardware and community programs.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>What I Build With</h2>
            <p className="section-lead">
              A mix of product engineering, systems, and community-facing work.
            </p>
          </div>
          <div className="skills-stack">
            <div className="skills-row">
              <div className="skills-label">Programming</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-python-plain" aria-hidden="true" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-javascript-plain" aria-hidden="true" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-typescript-plain" aria-hidden="true" />
                  <span>TypeScript</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-c-plain" aria-hidden="true" />
                  <span>C</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Frontend</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-react-original" aria-hidden="true" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-nextjs-original" aria-hidden="true" />
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-html5-plain" aria-hidden="true" />
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-css3-plain" aria-hidden="true" />
                  <span>CSS3</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Backend</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-rails-plain" aria-hidden="true" />
                  <span>Ruby on Rails</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-nodejs-plain" aria-hidden="true" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-django-plain" aria-hidden="true" />
                  <span>Django</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-ruby-plain" aria-hidden="true" />
                  <span>Ruby</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Database</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-mongodb-plain" aria-hidden="true" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-postgresql-plain" aria-hidden="true" />
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-firebase-plain" aria-hidden="true" />
                  <span>Firebase</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-redis-plain" aria-hidden="true" />
                  <span>Redis</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Tools</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-git-plain" aria-hidden="true" />
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-docker-plain" aria-hidden="true" />
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-github-original" aria-hidden="true" />
                  <span>GitHub</span>
                </div>
                <div className="skill-item">
                  <i
                    className="devicon-amazonwebservices-plain"
                    aria-hidden="true"
                  />
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected Work</h2>
            <p className="section-lead">A snapshot of what I've shipped lately.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>Beats Store Template</h3>
              <p>
                Responsive storefront template for music and merch with reusable
                UI sections and clean layout structure.
              </p>
              <div className="tag-row">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>UI</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/AdamSultan107/beats-store-template"
                target="_blank"
                rel="noopener"
              >
                View repo
              </a>
            </article>
            <article className="project-card">
              <h3>Enyx</h3>
              <p>
                Product-focused app experience emphasizing accessibility,
                modular architecture, and polished UI.
              </p>
              <div className="tag-row">
                <span>TypeScript</span>
                <span>React</span>
                <span>Accessibility</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/AdamSultan107/enyx"
                target="_blank"
                rel="noopener"
              >
                View repo
              </a>
            </article>
            <article className="project-card">
              <h3>RestroomRanker</h3>
              <p>
                Civic-minded app that helps university students find and rate
                clean, accessible restrooms in public spaces.
              </p>
              <div className="tag-row">
                <span>React</span>
                <span>Maps</span>
                <span>Community UX</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/AdamSultan107/restroomranker"
                target="_blank"
                rel="noopener"
              >
                View repo
              </a>
            </article>
            <article className="project-card">
              <h3>The Silicon Project Platform</h3>
              <p>
                Nonprofit operations platform for donations, inventory, and
                community programs supporting technology access.
              </p>
              <div className="tag-row">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>Stripe</span>
              </div>
              <a
                className="text-link"
                href="https://www.thesiliconproject.org/"
                target="_blank"
                rel="noopener"
              >
                View website
              </a>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s Build Something Useful</h2>
            <p className="section-lead">
              Open to new opportunities, collaborations, and civic tech
              partnerships.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Let’s Connect</h3>
              <p>
                I’m always open to discussing new opportunities, interesting
                projects, or just saying hello.
              </p>
              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <strong>aksultan05@gmail.com</strong>
                </div>
                <div>
                  <span>Response Time</span>
                  <strong>Within 24 hours</strong>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <label>
                First Name
                <input type="text" name="firstName" placeholder="Adam" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" placeholder="Sultan" />
              </label>
              <label className="full">
                Email
                <input type="email" name="email" placeholder="adam@email.com" />
              </label>
              <label className="full">
                Subject
                <input type="text" name="subject" placeholder="Let’s collaborate" />
              </label>
              <label className="full">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or how I can help..."
                />
              </label>
              <button className="btn primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Let’s connect and build something amazing.</p>
        <a href="mailto:aksultan05@gmail.com">aksultan05@gmail.com</a>
      </footer>
    </div>
  );
}
