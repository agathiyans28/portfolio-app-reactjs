import React from 'react';
import Navbar from './Navbar';

function Education() {
  return (
    <>
    <Navbar />
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      id="home"
      style={{ height: "90vh" }}
    >
      <p data-aos="fade-up">Hello World</p>
    </div>
  </>
  );
}

export default Education;
