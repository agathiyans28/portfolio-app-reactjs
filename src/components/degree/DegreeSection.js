import React from "react";

function DegreeSection(props) {
  const degrees = props.source;

  return (
    <div className="row degree-div px-2 px-lg-5 py-3">
      <div className="col-md-4 d-flex justify-content-center">
        <div className="position-relative img-div">
          <img
            className="logo rounded-circle p-4"
            src={require(`../../assets/logo/${degrees.logo}`)}
            alt="Collage Logo"
          />
          <a
            href={degrees.link}
            target='_blank'
            rel="noreferrer"
            className="position-absolute translate-middle logo-link py-2 px-4 rounded-pill"
          >
            Visit
          </a>
        </div>
      </div>
      <div className="col-md-8 degree-text-div p-0 mt-5 mt-md-0">
        <div className="wave"></div>
        <div className="body-header p-3 d-md-flex justify-content-between">
          <div className="body-header-title">
            <h4 className="card-title">{degrees.title}</h4>
            <h4 className="card-title">{degrees.location}</h4>
            <h5 className="card-subtitle">{degrees.subTitle}</h5>
          </div>
          <div className="body-header-duration d-md-flex align-items-center">
            <p className="duration mt-1 m-md-0">{degrees.duration}</p>
          </div>
        </div>
        <div className="body-content p-3 p-md-4">
          {degrees.content.map((item, index) => (
            <p key={index}> ⚡ {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DegreeSection;
