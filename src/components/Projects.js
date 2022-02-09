import React from 'react';
import Navbar from './Navbar';

function Projects() {
  return (
    <>
    <Navbar />
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      id="home"
      style={{ height: "90vh" }}
    >
      <p data-aos="fade-left">Hello World</p>
    </div>
  </>
  );
}

export default Projects;
