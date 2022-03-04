import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const prop = props.item;
  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-xl-4 mt-5"
      data-aos="zoom-in-up"
      data-aos-duration="1200"
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

        <div className="overlay user-select-none">
          <h2 className="title">{prop.title}</h2>
          <h3 className="date">Created on {prop.date}</h3>

          <p className="details overflow-auto">{prop.details}</p>

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
              // target="_blank"
              // rel="noreferrer"
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

export default ProjectCard;
