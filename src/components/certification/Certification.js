import React from "react";
import { certificates } from "../../data";
import "./Certification.css";

function Cards(props) {
  const item = props.items;
  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-lg-4 mb-5"
      // data-aos="zoom-in-up"
      // data-aos-duration="1200"
    >
      <div className="flip">
        <div className="front">
          <h1 className="text-shadow">{item.name}</h1>
          <div className="d-flex justify-content-end">
            <img
              className="logo-box pt-2"
              src={require(`../../assets/logo/${item.logo}`)}
              alt="Course Logo"
            />
          </div>
        </div>
        <div className="back text-center">
          <h2>{item.certifyName}</h2>
          <h5 style={{ color: "green" }}>{item.siteName}</h5>
          <p className="overflow-auto">{item.about}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            type="button"
          >
            Check It
          </a>
        </div>
      </div>
    </div>
  );
}

function Certification() {
  return (
    <div className="certification-container mb-5">
      <h1
        className="text-center mb-5 certification-title"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        Certifications
      </h1>
      <div className="row mx-auto d-flex justify-content-center align-items-center">
        {certificates.map((item, index) => (
          <Cards items={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Certification;
