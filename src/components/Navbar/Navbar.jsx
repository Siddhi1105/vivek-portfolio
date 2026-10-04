import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Experience", path: "/experience" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        {/* Logo nantar add karu */}
      </Link>

      {/* Desktop + Mobile Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </div>

    </nav>
  );
}

export default Navbar;