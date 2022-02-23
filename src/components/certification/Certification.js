import React from "react";
import "./Certification.css";

const datas = [
  {
    name: "Python",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
];

function Certification() {
  return (
    <div className="certification-container mb-5">
      <h1 className="text-center mb-5 certification-title">Certifications</h1>
      <div className="row mx-auto d-flex justify-content-center align-items-center">
        {datas.map((item, index) => (
          <div className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4">
            <div class="flip">
              <div
                class="front"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
                }}
              >
                <h1 class="text-shadow">{item.name}</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>
                  Good tools make application development quicker and easier to
                  maintain than if you did everything by hand..
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
