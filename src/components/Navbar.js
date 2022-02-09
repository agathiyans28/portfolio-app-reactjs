import React from "react";
import $ from "jquery";
import { Link, Outlet } from "react-router-dom";

$(function () {
  $("li").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
});

function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Education", to: "/education" },
    { name: "Projects", to: "/projects" },
    { name: "About", to: "/about" },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-md container-fluid py-3 fixed-top"
        
      >
        <div className="container-fluid mx-lg-4 mx-1">
          <a
            href="/"
            className="navbar-brand fs-5"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Agathiyan Sivakumar
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-md-none justify-content-around flex-column"
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
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              {links.map((link, index) => (
                <li className="nav-item ms-lg-3" key={index.toString()}>
                  <Link className="nav-link btn" to={link.to}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <Link className="nav-link btn" id="contact-btn" to="/contact">
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
