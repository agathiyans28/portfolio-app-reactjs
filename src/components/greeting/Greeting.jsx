import React from "react";
import { greeting } from "../../data";
import { ReactComponent as Image } from "../../assets/home_image.svg";
import "./Greeting.css";
import SocialMedia from "./SocialMedia";

function Greeting() {
  return (
    <div
      className="greeting-container mx-auto"
      id="home"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row greeting-main">
        <div className="col-md-6 mb-5">
          <div className="greeting-text-div">
            <h1 className="greeting-text-name">{greeting.title}</h1>
            <h2 className="fs-1 greeting-text-role">{greeting.role}</h2>
            <p className="text-muted">{greeting.subTitle}</p>
          </div>
          <SocialMedia />
        </div>
        <div className="col-md-6 mt-3">
          <Image className="h-auto mw-100" />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
