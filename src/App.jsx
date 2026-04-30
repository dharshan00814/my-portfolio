import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Dharshan</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Dharshan 👋</h1>
        <p>Cybersecurity Learner | React Developer</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate student learning cybersecurity and web development.
          I build projects using React and explore ethical hacking concepts.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Built using React + Vite</p>
        </div>

        <div className="project-card">
          <h3>Discord Cybersecurity Bot</h3>
          <p>Bot that shares security tips</p>
        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Dharshan. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App