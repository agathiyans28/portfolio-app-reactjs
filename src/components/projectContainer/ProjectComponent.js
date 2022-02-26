import React from "react";
import "./ProjectComponent.css";

function ProjectCard() {
  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-xl-4 mt-5"
      // data-aos="zoom-in-up"
      // data-aos-duration="1200"
    >
      <div class="project-card mx-auto">
        <div class="thumb"></div>
        <div class="overlay">
          <h2 class="title">
            Plant AI
          </h2>
          <h3 class="date">Created on 04-02-2022</h3>
          <h3 class="seats">seats remaining: 2</h3>
          <p class="details">
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </p>
          <a href="#" class="goto-btn">view details</a>
        </div>
      </div>
    </div>
  );
}

function ProjectComponent() {
  return (
    <div className="project-main mb-5 mx-auto">
      <h1
        className="text-center my-3 project-title"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        My Recent Works
      </h1>
      <div className="row mx-auto d-flex justify-content-center align-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectComponent;
