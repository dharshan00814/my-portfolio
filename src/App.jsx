import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="main-content">
        <section className="hero">
          <h1>Hi, I'm Dharshan</h1>
          <p>Some content here...</p>
        </section>
      </div>

      <Footer />

    </div>
  )
}

export default App