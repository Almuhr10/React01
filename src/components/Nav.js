import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width="200px"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="index.html"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <Link className="dropdown-item" to="/subscribe">
                    Subscribe
                  </Link>
                </div>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data">
                  Api Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
