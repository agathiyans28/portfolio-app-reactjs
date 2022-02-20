import React from "react";
import DegreeSection from "./DegreeSection";
import './Degree.css'

function Degree() {
  return (
    <div className="degree-main mb-5">
      <h1 className="text-center mb-3 degree-title">Degrees Received</h1>
      <DegreeSection />
    </div>
  );
}

export default Degree;
