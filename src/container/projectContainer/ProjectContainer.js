import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { project } from "../../data";

function ProjectContainer() {
  return (
    <div
      className="project-container mb-5 mx-auto"
      style={{ width: "90%", padding: "0 15px" }}
    >
      <h1
        className="text-center div-title"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        My Recent Works
      </h1>
      <div className="row mx-auto d-flex justify-content-center align-items-center pb-5">
        {project.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
