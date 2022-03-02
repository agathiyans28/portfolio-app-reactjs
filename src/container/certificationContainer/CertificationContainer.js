import React from "react";
import CertificationCard from "../../components/certificationCards/CertificationCard";
import { certificates } from "../../data";
import './CertificationContainer.css'

function CertificationContainer() {
    
  return (
    <div className="certification-container mb-5">
      <h1
        className="text-center mb-5 div-title"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        Certifications
      </h1>
      <div className="row mx-auto d-flex justify-content-center align-items-center">
        {certificates.map((item, index) => (
          <CertificationCard items={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CertificationContainer;
