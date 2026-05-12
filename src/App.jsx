import "./App.css";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import profile from "./assets/profile.jpg";
import expenseTrackerImg from "./assets/expense-tracker.png";
import portfolioImg from "./assets/portfolio.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

  const RevealSection = ({ children, className = "", id = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} reveal ${inView ? "show" : ""}`}
    >
      {children}
    </section>
  );
};

  const projects = [
  {
    title: "Personal Expense Tracker",
    stack: "MERN Stack",
    image: expenseTrackerImg,
    description:
      "Full-stack app with user authentication, JWT login, MongoDB database, and expense management features.",
  },
  {
    title: "Portfolio Website",
    stack: "React + Vite",
    image: portfolioImg,
    description:
      "Professional developer portfolio built to showcase projects, skills, GitHub, LinkedIn, and career readiness.",
  },
];

  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "REST APIs",
    "Full-Stack Development",
    "C#",
    "Java",
  ];

  return (
    <div className="app">
      <nav className="navbar">
  <h2>Teboho Lebia</h2>

  <div
    className={`hamburger ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </div>
  </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">
            Available for Junior Full-Stack Developer Roles
          </p>

          <h1>
            Hi, I’m <span>Teboho</span>
            <br />

            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="hero-text">
            I build modern web applications using React, Node.js,
            Express, and MongoDB. I am focused on creating
            real-world projects, solving business problems,
            and growing into a professional software engineer.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href="/Teboho-Lebia-CV.pdf"
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image-container">
  <div className="glow"></div>

  <img
    src={profile}
    alt="Teboho Lebia"
    className="profile-image"
  />

  <div className="hero-card">
    <h3>Tech Focus</h3>

    <p>React</p>
    <p>Node.js</p>
    <p>MongoDB</p>
    <p>Express</p>
    <p>C#</p>
    <p>Java</p>
  </div>
  </div>
      </section>

      <RevealSection id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a passionate Full-Stack Developer with a
          3-year IT diploma and a strong focus on building
          practical MERN stack applications. My goal is
          to become job-ready, contribute to real software
          teams, and build professional systems that solve
          real problems.
        </p>
      </RevealSection>

      <RevealSection id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
              <p className="project-stack">{project.stack}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-actions">
                <a
                  href={
                    project.title === "Personal Expense Tracker"
                      ? "https://github.com/TechBoho/personal-expense-tracker"
                      : "https://github.com/TechBoho/teboho-portfolio"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>

                {project.title === "Portfolio Website" ? (
                  <a
                    href="https://teboho-portfolio-rho.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Live Demo</button>
                  </a>
                ) : (
                  <button disabled>Deploying Soon</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section job-ready">
        <h2>Why Hire Me?</h2>

        <div className="reason-grid">
          <div>
            <h3>Project Builder</h3>

            <p>
              I learn by building real applications,
              not only tutorials.
            </p>
          </div>

          <div>
            <h3>Full-Stack Mindset</h3>

            <p>
              I understand both frontend design
              and backend logic.
            </p>
          </div>

          <div>
            <h3>Career Focused</h3>

            <p>
              I am disciplined, consistent,
              and serious about software growth.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <h2>
            <AnimatedCounter end={5} suffix="+" />
          </h2>
          <p>Projects Built</p>
        </div>

        <div className="stat-card">
          <h2>
            <AnimatedCounter end={10} suffix="+" />
          </h2>
          <p>Technologies Learned</p>
        </div>

        <div className="stat-card">
          <h2>
            <AnimatedCounter end={100} suffix="%" />
          </h2>
          <p>Career Focused</p>
        </div>

        <div className="stat-card">
          <h2>
            <AnimatedCounter end={1000} suffix="+" />
          </h2>
          <p>Hours of Learning</p>
        </div>
      </div>
    </RevealSection>

      <RevealSection id="resume" className="section resume-section">
        <h2>Resume</h2>

        <p>
          I am currently building my career as a
          Full-Stack Developer, focusing on MERN stack
          applications, Java, C#, GitHub, and real-world
          software projects.
        </p>

        <a
          href="/Teboho-Lebia-CV.pdf"
          download
          className="primary-btn resume-btn"
        >
          Download My CV
        </a>
      </RevealSection>

          <section className="section services-section">
  <h2>Services</h2>

  <div className="services-grid">
    <div className="service-card">
      <h3>Frontend Development</h3>
      <p>
        Responsive React websites with modern UI/UX and mobile-friendly layouts.
      </p>
    </div>

    <div className="service-card">
      <h3>Backend Development</h3>
      <p>
        REST APIs, authentication systems, MongoDB integration, and server logic.
      </p>
    </div>

    <div className="service-card">
      <h3>Full-Stack Applications</h3>
      <p>
        Complete MERN stack systems with frontend, backend, database, and deployment.
      </p>
    </div>
  </div>
</section>

      <RevealSection id="contact" className="section contact">
        <h2>Let’s Work Together</h2>

        <p>Email: lebiateboho@gmail.com</p>

        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/teboho-lebia-88a9b6320"
            target="_blank"
            rel="noreferrer"
          >
            {" "}View Profile
          </a>
        </p>

        <p>
          GitHub:
          <a
            href="https://github.com/TechBoho"
            target="_blank"
            rel="noreferrer"
          >
            {" "}Visit GitHub
          </a>
        </p>
      </RevealSection>

      <footer className="footer">
  <div className="footer-icons">
    <a
      href="https://github.com/TechBoho"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/teboho-lebia-88a9b6320"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>

    <a href="mailto:lebiateboho@gmail.com">
      <FaEnvelope />
    </a>
  </div>

  <p>
    © 2026 Teboho Lebia — Full-Stack Developer Portfolio
  </p>
</footer>

    </div>
  );
}

export default App;