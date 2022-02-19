import React from "react";
import Navbar from "../../components/navbar/Navbar";
import degree from "../../assets/degree.png";
import Arrow from "../../components/arrow/Arrow";
import Footer from "../../components/footer/Footer";
import "./Education.css";

function Education() {
  return (
    <>
      <Navbar />
      <div
        className="education-container mx-auto"
        id="education"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <div className="row heading-div">
          <div className="col-md-6">
            <img className="h-auto w-100" src={degree} alt="" />
          </div>
          <div className="col-md-5 text-center heading-text-div">
            <h1 className="heading-text">Education</h1>
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>Learning is a treasure that follows its owner everywhere.</p>
              </blockquote>
              <figcaption class="blockquote-footer text-end">
                Chinese Proverb
              </figcaption>
            </figure>
          </div>
        </div>
        <Arrow />
      </div>
      <Footer />
    </>
  );
}

export default Education;
