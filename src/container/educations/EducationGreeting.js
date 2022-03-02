import React from "react";
import DegreeImg from "../../assets/images/degree.png";
import Arrow from "../../components/arrow/Arrow";
import "./Education.css";

function EducationGreeting() {
  return (
    <div
      className="education-container mx-auto"
      id="education"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row heading-div d-md-flex justify-content-around">
        <div className="col-md-6 p-3 d-flex justify-content-center">
          <img className="edu-img w-100" src={DegreeImg} alt="Degree Logo" />
        </div>
        <div className="col-md-6 p-2 p-md-5 text-center heading-text-div">
          <h1 className="heading-text user-select-none">Education</h1>
          <p className="sub-title">
            Learning is a treasure that follows its owner everywhere.
          </p>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

export default EducationGreeting;
