import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectImg from "./ProjectImg";
import './Projects.css'

function Projects() {
  return (
    <>
      <Navbar />
      <div
        className="project-container mx-auto"
        id="project"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <div className="row d-md-flex justify-content-around">
          <div className="col-md-6 p-3 pt-5 p-md-5 img-div">
            <ProjectImg className="h-auto w-100" />
          </div>
          <div className="col-md-6 text-center heading-text-div">
            <h1 className="heading-text">Projects</h1>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Learning is a treasure that follows its owner everywhere.</p>
              </blockquote>
              <figcaption className="blockquote-footer text-end">
                Chinese Proverb
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
