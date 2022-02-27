import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectImg from "./ProjectImg";
import Arrow from "../../components/arrow/Arrow";
import "./Projects.css";
import ProjectComponent from "../../components/projectContainer/ProjectComponent";
import Footer from "../../components/footer/Footer";

function ProjectGreeting() {
  return (
    <div
      className="project-container mx-auto "
      id="project"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row d-md-flex justify-content-around mt-5">
        <div className="col-md-6 p-3 pt-5 p-md-5 img-div">
          <ProjectImg className="h-auto w-100" />
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

function Projects() {
  return (
    <>
      <Navbar />
      <ProjectGreeting />
      <ProjectComponent />
      <Footer />
    </>
  );
}

export default Projects;
