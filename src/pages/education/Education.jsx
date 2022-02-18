import React from "react";
import Navbar from "../../components/navbar/Navbar";
import im from "../../assets/degree.png";
import './Education.css'

function Education() {
  return (
    <>
      <Navbar />
      <div className="education-container" id="education">
        <div className="row">
          <div className="col-md-5">
            <img className="h-100 w-100" src={im} alt="" />
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
}

export default Education;
