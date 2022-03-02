import React from "react";
import ProjectImg from "./ProjectImg";
import Arrow from "../../components/arrow/Arrow";
import "./ProjectGreeting.css";

function ProjectGreeting() {
  return (
    <div
      className="project-greeting mx-auto mb-5"
      id="project"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row d-md-flex justify-content-around">
        <div className="col-md-6 p-2 pt-5 p-md-5 img-div">
          <ProjectImg />
        </div>
        <div className="col-md-6 text-center heading-text-div p-md-5">
          <h1 className="heading-text">Projects</h1>
          <p className="sub-title">
            Here are a few projects, I've worked on recently.
          </p>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

export default ProjectGreeting;
