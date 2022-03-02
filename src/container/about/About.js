import React from "react";
import HelloImg from "./HelloImg";
import "./About.css";

function About() {
  return (
    <div
      className="about-container mx-auto"
      id="about"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row d-md-flex justify-content-around">
        <div className="col-md-6 heading-text-div">
          <h1 className="heading-text mb-5 text-center">About Me</h1>
          <p className="sub-title pb-4 px-sm-4 px-md-1 px-lg-3">
            I'm a passionate learner who's always willing to learn and work
            across technologies and domains.
          </p>
          <p className="sub-title px-sm-4 px-md-1 px-lg-3">
            My field of Interest's are building new Web Technologies and
            Products and also in areas related to Deep Learning and Natural
            Launguage Processing.
          </p>
        </div>
        <div className="col-md-6 img-div mt-5 pt-5">
          <HelloImg />
        </div>
      </div>
    </div>
  );
}

export default About;
