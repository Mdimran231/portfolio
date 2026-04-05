import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">Imran</div>

      {/* Hamburger menu button */}
      <div className="menu-btn" onClick={toggleMenu}>
        &#9776; {/* ☰ icon */}
      </div>

      {/* Links */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}