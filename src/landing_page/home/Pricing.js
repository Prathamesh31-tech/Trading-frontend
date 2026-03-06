import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="home-card pricing-section">
      <div className="pricing-grid">
        <div className="pricing-content">
          <h2>Simple & Transparent Pricing</h2>

          <p>
            Our trading platform offers affordable and transparent pricing so
            you can focus on growing your investments.
          </p>

          <Link to="/pricing" className="pricing-link">
            View Pricing →
          </Link>
        </div>

        <div className="price-boxes">
          <div className="price-box">
            <h1>₹0</h1>
            <p>Free account opening and portfolio tracking</p>
          </div>

          <div className="price-box">
            <h1>₹20</h1>
            <p>Flat fee per trade</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
