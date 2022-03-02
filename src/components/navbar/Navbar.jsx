import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { greeting } from "../../data";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Education", to: "/education" },
    { name: "Projects", to: "/projects" },
  ];

  useEffect(() => {
    const el_autohide = document.querySelector(".autohide");
    const navbar_collapse = document.querySelector(".navbar-collapse");
    const navbar_toggler = document.querySelector(".navbar-toggler");

    if (el_autohide) {
      var last_scroll_top = 0;

      window.addEventListener("scroll", function () {
        let scroll_top = window.scrollY;

        el_autohide.style.backgroundColor =
          scroll_top <= 1 ? "transparent" : "#e4e4e4";
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
        } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
          navbar_collapse.classList.remove("show");
          navbar_toggler.classList.add("collapsed");
        }
        last_scroll_top = scroll_top;
      });
    }

    if (navbar_collapse) {
      window.addEventListener("click", function () {
        if (navbar_collapse.classList.contains("show")) {
          navbar_collapse.classList.remove("show");
          navbar_toggler.classList.add("collapsed");
        }
        el_autohide.style.backgroundColor = "#e9e9f0";
      });
    }

    window.addEventListener("load", function () {
      if (navbar_toggler.classList.contains("collapsed")) {
        el_autohide.style.backgroundColor = "trasparent";
      }
    });
  }, []);

  return (
    <>
      <nav className="position-fixed autohide navbar navbar-expand-md container-fluid py-3 py-lg-1">
        <div className="container-fluid mx-lg-4 mx-1">
          <a
            href="/"
            className="navbar-brand"
            data-aos="fade-up"
            data-aos-duration="2000"
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
              className="navbar-nav ms-md-auto"
              data-aos="fade-left"
              data-aos-duration="2200"
            >
              {links.map((link, index) => (
                <li className="nav-item ms-lg-3" key={index.toString()}>
                  <Link
                    className="nav-link my-2 my-md-0 px-3 rounded"
                    to={link.to}
                  >
                    {link.name} <FaArrowRight className="d-md-none arrow" />
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <Link
                  className="nav-link mt-5 mt-md-0 px-3 rounded"
                  to="/contact"
                  id="contact-btn"
                >
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
