// src/components/Navbar.jsx
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navibar">
      <nav className="nav-container">
        <a id="logo" className="logo" href="#">My Logo</a>
        <ul className="nav-list">
          <li className="navi-item"><a href="#Portfolio">Portofolio</a></li>
          <li className="navi-item"><a href="#About">About</a></li>
          <li className="navi-item"><a href="#Contact">Contact</a></li>
        </ul>
        <button type="button" id="menu-btn">
          <img className="mobile-menu" src="images/Union.png" alt="navigation" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
