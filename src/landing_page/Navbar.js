import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        padding: "0",
        zIndex: "1000",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="media/images/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/Signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/Product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/Pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/Support">
                Support
              </Link>
            </li>

            {/* Login Button */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link className="btn btn-primary px-4" to="/Login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
