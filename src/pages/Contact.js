import React from "react";
import Navbar from "../components/navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        id="home"
        style={{ height: "90vh" }}
      >
        <p data-aos="fade-down">Hello World</p>
      </div>
    </>
  );
}

export default Contact;
