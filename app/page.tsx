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
              Information Systems + Human-Computer Interaction student at
              Carnegie Mellon University and software engineering intern focused
              on reliable, user-centered systems.
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
            <h2>Information Systems + Human-Computer Interaction @ CMU</h2>
            <p className="section-lead">
              Student @ Carnegie Mellon University focused on full-stack
              engineering and shipping reliable, user-centered, and scalable
              products.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Experience</h3>
              <p>Board Director & Developer - The Silicon Project</p>
              <p>
                Software Engineering Intern - Allegheny County DHS (Dept. of
                Analytics, Technology, and Planning)
              </p>
            </div>
            <div className="about-card">
              <h3>Education</h3>
              <p>B.S. Information Systems + HCI</p>
              <p>Carnegie Mellon University</p>
              <p>Expected May 2027</p>
            </div>
            <div className="about-text">
              <p>
                I am a Junior at Carnegie Mellon University studying Information
                Systems and Human-Computer Interaction, with a concentration in
                AI Management. I build full-stack platforms with Next.js,
                TypeScript, Supabase, and more, focusing on clean UX and
                dependable systems.
              </p>
              <p>
                I am based in New York and Pittsburgh and love shipping products
                that make technology simpler and more useful for real people.
                I’m currently a Software Engineering intern and enjoy working
                across the stack from interface to infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>What I Build With</h2>
          </div>
          <div className="skills-stack">
            <div className="skills-row">
              <div className="skills-label">Programming</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-java-plain" aria-hidden="true" />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-c-plain" aria-hidden="true" />
                  <span>C</span>
                </div>
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
                  <i className="devicon-r-plain" aria-hidden="true" />
                  <span>R</span>
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
                  <i className="devicon-tailwindcss-plain" aria-hidden="true" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-html5-plain" aria-hidden="true" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-css3-plain" aria-hidden="true" />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Backend</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-nodejs-plain" aria-hidden="true" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-rails-plain" aria-hidden="true" />
                  <span>Ruby on Rails</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Database</div>
              <div className="skill-items">
                <div className="skill-item">
                  <i className="devicon-postgresql-plain" aria-hidden="true" />
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-supabase-plain" aria-hidden="true" />
                  <span>Supabase</span>
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
                  <i className="devicon-github-original" aria-hidden="true" />
                  <span>GitHub</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-docker-plain" aria-hidden="true" />
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-linux-plain" aria-hidden="true" />
                  <span>Linux/Unix</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-figma-plain" aria-hidden="true" />
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-vercel-original" aria-hidden="true" />
                  <span>Vercel</span>
                </div>
              </div>
            </div>
            <div className="skills-row">
              <div className="skills-label">Concepts</div>
              <div className="skill-items">
                <div className="skill-item">
                  <span>Systems Programming</span>
                </div>
                <div className="skill-item plain">
                  <span>Agile/Scrum</span>
                </div>
                <div className="skill-item plain">
                  <span>CI/CD</span>
                </div>
                <div className="skill-item plain">
                  <span>MVC Architecture</span>
                </div>
                <div className="skill-item plain">
                  <span>Database Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected Work</h2>
            <p className="section-lead">
              A snapshot of what I've shipped lately.
            </p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>The Silicon Project Platform</h3>
              <div className="project-media">
                <img
                  src="/projects/tsp.png"
                  alt="The Silicon Project homepage"
                  loading="lazy"
                />
              </div>
              <p>
                Nonprofit operations platform I’ve co-developed with a team for
                the past four years, supporting donations, inventory, and
                community programs.
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
            <article className="project-card">
              <h3>Intelliminds</h3>
              <div className="project-media">
                <img
                  src="/projects/intelliminds.png"
                  alt="Intelliminds homepage"
                  loading="lazy"
                />
              </div>
              <p>
                Tutoring company I started with friends to bring affordable
                tutoring options to students in NYC and beyond, including
                college consulting plus SAT/ACT tutoring.
              </p>
              <div className="tag-row">
                <span>Education</span>
                <span>Tutoring</span>
                <span>SAT/ACT</span>
                <span>College Consulting</span>
              </div>
              <a
                className="text-link"
                href="https://intelliminds-sooty.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                View website
              </a>
            </article>
            <article className="project-card">
              <h3>ENYX</h3>
              <div className="project-media">
                <img
                  src="/projects/enyx.png"
                  alt="ENYX homepage"
                  loading="lazy"
                />
              </div>
              <p>
                Website for a gene therapy startup in NYC, focused on a clean
                product story and trustworthy brand presence.
              </p>
              <div className="tag-row">
                <span>React</span>
                <span>Branding</span>
                <span>UX</span>
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
              <h3>Beats Store Template</h3>
              <div className="project-media">
                <img
                  src="/projects/beats.png"
                  alt="Beats Store template homepage"
                  loading="lazy"
                />
              </div>
              <p>
                Built for a friend and then generalized into a reusable
                storefront template for music and merch.
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
                <input
                  type="text"
                  name="subject"
                  placeholder="Let’s collaborate"
                />
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
        <p>Let’s connect and build something.</p>
        <a href="mailto:aksultan05@gmail.com">aksultan05@gmail.com</a>
      </footer>
    </div>
  );
}
