import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="custom-header">
      <div className="logo-rlr">
        <a href="/">
          <div className="IMG-header">
          <img
             src={require("./IMG/redlogo.png")}
            className="Logo"
            alt="logo"
            /></div>
        </a>
      </div>

      <nav className="Nav">
        <Link to='/'>Home</Link>
        <Link to='/contact'>Learn More</Link>
        <Link to='/book'>Book Now</Link>
        <button> Logout </button>
      </nav>
    </header>
  );
}

export default Header;
