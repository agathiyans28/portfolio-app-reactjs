import React from "react";
import { greeting } from "../../data";
import HomeImg from "./HomeImg";
import Arrow from "../../components/arrow/Arrow";
import Typed from "react-typed";
import "./Greeting.css";
import SocialMedia from "./SocialMedia";
import 'react-typed/dist/animatedCursor.css';

function Greeting() {
  return (
    <div
      className="greeting-container mx-auto"
      id="home"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row greeting-main d-flex justify-content-around">
        <div className="order-1 col-md-6 mb-5 pt-5 mb-md-0 pt-md-5">
          <div className="greeting-text-div mt-5 pt-5 mt-md-0 pt-md-0">
            <h3 class="text-title user-select-none mt-5 pt-3 pb-3 mt-md-5 pt-md-0">
              {greeting.title}
            </h3>
            <br />
            <Typed className="h2" strings={greeting.role} typeSpeed={80} backSpeed={80} loop />
          </div>
          <SocialMedia />
        </div>
        <div className="order-2 order-md-3">
          <Arrow />
        </div>
        <div className="order-3 order-md-2 home-img col-md-6 mt-5 pt-5 mt-md-0 pt-md-4 pe-4">
          <HomeImg className="h-auto w-100" />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
