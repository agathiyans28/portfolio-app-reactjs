import React from "react";
import CollageLogo from "../../assets/logo/pondiuni.png";

function DegreeSection() {
  return (
    <div className="row degree-div px-2 px-lg-5 py-3">
      <div
        className="col-md-4 d-flex justify-content-end"
        style={{ height: "230px" }}
      >
        <img
          className="logo rounded-circle p-4 mx-auto h-auto"
          src={CollageLogo}
          alt="Collage Logo"
        />
      </div>
      <div className="col-md-8 degree-text-div p-0 mt-5 mt-md-0">
        <div className="body-header p-3 d-md-flex justify-content-between">
          <div className="body-header-title">
            <h4 className="card-title">Pondicherry University - Puducherry</h4>
            <h5 className="card-subtitle">Master of Computer Applications </h5>
          </div>
          <div className="body-header-duration d-md-flex align-items-center">
            <p className="duration mt-1 m-md-0">2018 - 2021</p>
          </div>
        </div>
        <div className="body-content p-3 p-md-4">
          <p>
            {" "}
            I have studied basic software engineering subjects like DS,
            Algorithms, DBMS, OS, CA, AI etc.{" "}
          </p>

          <p>
            {" "}
            Apart from this, I have done courses on Deep Learning, Data Science,
            Cloud Computing and Full Stack Development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DegreeSection;
