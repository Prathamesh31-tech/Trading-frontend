import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="media/images/logo.png" alt="logo" />
            <p>© 2010-2024 Trading Platform Pvt Ltd.</p>
            <p>All rights reserved.</p>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <a href="#">Contact</a>
            <a href="#">Support Portal</a>
            <a href="#">Downloads</a>
            <a href="#">Resources</a>
          </div>

          <div className="footer-links">
            <h4>Account</h4>
            <a href="#">Open Account</a>
            <a href="#">Fund Transfer</a>
            <a href="#">Trading Guide</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            Investments in securities market are subject to market risks. Please
            read all related documents carefully before investing.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclosure</a>
          <a href="#">Investor Charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
