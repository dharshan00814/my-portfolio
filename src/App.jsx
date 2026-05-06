import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="main">

        {/* Hero */}
        <section className="hero">
          <h1>Hi, I'm Dharshan</h1>
          <p>Cybersecurity Learner | React Developer</p>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2>About</h2>
          <p>I am learning React and cybersecurity.</p>
        </section>

        {/* Projects (simple, no card component) */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Portfolio Website - React</p>
          <p>Cybersecurity Bot - Discord</p>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: jdharshan2@email.com</p>
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App