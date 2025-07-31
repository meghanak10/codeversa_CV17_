import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-name">JanaBhasha</span>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/flashcards">Flashcard</NavLink></li>
        <li><NavLink to="/quiz">Quiz</NavLink></li>
        <li><NavLink to="/progress">Progress</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
