import React from "react";
import "./navBar.css";
import { SiWebmoney } from "react-icons/si";
import LogInButton from "../LogIn/Button/LogInButton";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">
            <SiWebmoney className="navLogo" />
          </p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link active">Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Features</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Pricing</p>
              </li>
              <li className="nav-item">
                <p className="nav-link disabled">Disabled</p>
              </li>
            </ul>
          </div>
          <Link to="/login">
            <LogInButton />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
