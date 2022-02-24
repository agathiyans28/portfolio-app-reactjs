import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { greeting } from "../../data";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Education", to: "/education" },
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md container-fluid py-3">
        <div className="container-fluid mx-lg-4 mx-1">
          <a
            href="/"
            className="navbar-brand"
            // data-aos="fade-up"
            // data-aos-duration="2000"
          >
            {greeting.logo_name}
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-md-none justify-content-around flex-column"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-icon"></span>
            <span className="toggler-icon mid-icon"></span>
            <span className="toggler-icon bottom-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto"
              // data-aos="fade-left"
              // data-aos-duration="2200"
            >
              {links.map((link, index) => (
                <li className="nav-item ms-lg-3" key={index.toString()}>
                  <Link className="nav-link px-3" to={link.to}>
                    {link.name} <FaArrowRight className="d-md-none arrow" />
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <Link className="nav-link px-3" to="/contact" id="contact-btn">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
