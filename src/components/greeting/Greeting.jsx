import React from "react";
import { greeting } from "../../data";
import HomeImg from "./HomeImg";
import Arrow from "../../components/arrow/Arrow";
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
      <div className="row greeting-main d-flex justify-content-around">
        <div className="col-md-6 mb-5 pt-5 mb-md-0 pt-md-5">
          <div className="greeting-text-div mt-5 pt-5 mt-md-0 pt-md-0">
            <h3 class="text-title user-select-none mt-5 pt-3 pb-3 mt-md-5 pt-md-0">
              {greeting.title}
            </h3>
            <h2 className="fs-1 greeting-text-role">{greeting.role}</h2>
          </div>
          <SocialMedia />
        </div>
        <div className="img-div col-md-6 mt-5 pt-5 mt-md-0 pt-md-4">
          <HomeImg className="h-75 mw-100" />
        </div>
        <Arrow />
      </div>
    </div>
  );
}

export default Greeting;
