import React from "react";
import './Navbar.scss'
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Jobly</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Make money</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};
