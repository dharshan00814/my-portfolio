import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <h2 className="logo">Dharshan</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><a href="#about" onClick={()=>setOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={()=>setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar