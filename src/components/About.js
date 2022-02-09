import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        id="home"
        style={{ height: "90vh" }}
      >
        <p data-aos="fade-right">Hello World</p>
      </div>
    </>
  );
}

export default About;
