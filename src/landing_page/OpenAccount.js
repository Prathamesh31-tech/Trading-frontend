import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mt-5">Start Trading Today</h1>

      <p>
        Create your free trading account and start investing in stocks, track
        markets, and manage your portfolio easily.
      </p>

      <Link to="/Signup" ><button className="hero-btn">Create Account</button></Link>
    </div>
  );
}

export default OpenAccount;
