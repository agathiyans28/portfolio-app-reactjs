import React from "react";
import DegreeSection from "../../components/degreeSections/DegreeSection";
import { degrees } from "../../data";
import "./DegreeContainer.css";

function DegreeContainer() {
  return (
    <div
      className="degree-main mb-5 mx-auto"
      style={{ width: "90%", padding: "0 15px" }}
    >
      <h1
        className="text-center mb-5 div-title"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        Degrees Received
      </h1>
      {degrees.map((items, index) => (
        <DegreeSection source={items} key={index} />
      ))}
    </div>
  );
}

export default DegreeContainer;
