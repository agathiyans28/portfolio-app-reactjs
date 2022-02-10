import React from "react";
import { greeting } from "../../data";
import { ReactComponent as Image } from "../../assets/home_image.svg";
import "./Greeting.css";

function Greeting() {
  return (
    <div className="greeting-container mx-auto px-3" id="home">
      <div
        className="row greeting-main "
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <div className="col-md-6">
          <div className="greeting-text-div">
            <h1 className="greeting-text-name">{greeting.title}</h1>
            <h2>{greeting.role}</h2>
            <p className="text-muted">{greeting.subTitle}</p>
          </div>
        </div>
        <div className="col-md-6">
          <Image className="h-auto mw-100 mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
