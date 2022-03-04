import React from "react";
import "./CertificationCard.css";

function CertificationCard(props) {
  const item = props.items;

  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-xl-4 mb-5 px-0 px-sm-3"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="flip mx-auto">
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

export default CertificationCard;
