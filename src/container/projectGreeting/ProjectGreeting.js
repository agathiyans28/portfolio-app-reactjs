import React, { useLayoutEffect } from "react";
import ProjectImg from "./ProjectImg";
import Arrow from "../../components/arrow/Arrow";
import "./ProjectGreeting.css";
import anime from 'animejs'

function ProjectGreeting() {
  useLayoutEffect(() => {
    anime.timeline({ loop: 1 }).add({
      targets: ".img-div, .heading-text-div",
      opacity: [0, 1],
      easing: "easeOutExpo",
      translateY: [200, 0],
      duration: 2500,
      delay: 500,
    });
  });
  return (
    <div className="project-greeting mx-auto mb-5" id="project">
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
      <div className="pt-5 pt-md-2">
        <Arrow />
      </div>
    </div>
  );
}

export default ProjectGreeting;
