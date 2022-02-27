import React from "react";
import "./ProjectComponent.css";
import { project } from "../../data";

function ProjectCard(props) {
  const prop = props.item;
  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-xl-4 mt-5"
      // data-aos="zoom-in-up"
      // data-aos-duration="1200"
    >
      <div className="project-card mx-auto">
        <div className="thumb">
          <img
            className="w-100 h-100 rounded-3"
            src={require(process.env.PUBLIC_URL +
              "../../assets/images/" +
              prop.thumb)}
            alt=""
          />
        </div>

        <div className="overlay">
          <h2 className="title">{prop.title}</h2>
          <h3 className="date">Created on {prop.date}</h3>

          <p className="details overflow-auto">{prop.details}</p>
          <h3 className="seats mt-3 mt-md-0">Language's: </h3>
          <div className="lang-div mx-auto">
            <span className="lang-tag d-flex justify-content-center pb-3">
              {prop.lang.map((item, index) => (
                <img
                  className="lang-logo mx-2"
                  src={require("../../assets/logo/" + item)}
                  alt="programming language logo"
                  key={index}
                />
              ))}
            </span>

            <a
              href={prop.link}
              target="_blank"
              rel="noreferrer"
              className="goto-btn btn btn-success mt-2 mt-sm-3"
              role="button"
            >
              view details
            </a>
          </div>
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
        {project.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectComponent;
