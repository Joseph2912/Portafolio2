import React, { useState } from "react";
import "../Styles/Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" id="nav">
      <div className={`nav_items ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Inicio</a>
        <a href="#web" onClick={closeMenu}>Web Developer</a>
        <a href="#game-developer" onClick={closeMenu}>Game Developer</a>
        <a href="#app-developer" onClick={closeMenu}>App Developer</a>
        <a
          href="https://drive.google.com/file/d/1k21-RV5W1mBdGJxAwem5QDH-kVk6zuug/view"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Viate
        </a>
        <a
          href="https://wa.me/+573132435910"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Contáctame
        </a>
      </div>
      <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
