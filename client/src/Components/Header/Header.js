import React from "react";
import "./Header.css";

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
        <a href="/">Home</a>
        <a href="/">Learn More</a>
        <a href="/">Book Now</a>
        <button> Logout </button>
      </nav>
    </header>
  );
}

export default Header;
