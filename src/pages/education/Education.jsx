import React from "react";
import Navbar from "../../components/navbar/Navbar";
import degree from "../../assets/images/degree.png";
import Arrow from "../../components/arrow/Arrow";
import Degree from "../../components/degree/Degree";
import Certification from "../../components/certification/Certification";
import Footer from "../../components/footer/Footer";
import "./Education.css";

function EducationGreeting() {
  return (
    <div
      className="education-container mx-auto"
      id="education"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row heading-div mb-4 d-md-flex justify-content-around">
        <div className="col-md-6 p-3 d-flex justify-content-center">
          <img className="edu-img w-100" src={degree} alt="Degree Logo" />
        </div>
        <div className="col-md-6 p-3 p-md-5 text-center heading-text-div">
          <h1 className="heading-text">Education</h1>
          <figure className="text-center">
            <p className="sub-title">
              Learning is a treasure that follows its owner everywhere.
            </p>
            <figcaption className="blockquote-footer text-end">
              Chinese Proverb
            </figcaption>
          </figure>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

function Education() {
  return (
    <>
      <Navbar />
      <EducationGreeting />
      <Degree />
      <Certification />
      <Footer />
    </>
  );
}

export default Education;
