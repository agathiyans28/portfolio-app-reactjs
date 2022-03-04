import React, { useLayoutEffect } from "react";
import { greeting } from "../../data";
import HomeImg from "./HomeImg";
import Arrow from "../../components/arrow/Arrow";
import Typed from "react-typed";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "react-typed/dist/animatedCursor.css";
import anime from "animejs";

function Greeting() {
  useLayoutEffect(() => {
    var textWrapper = document.querySelectorAll(".title-text");
    for (let i = 0; i < textWrapper.length; i++) {
      const element = textWrapper[i];
      element.innerHTML = element.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime
      .timeline({ loop: 1 })
      .add({
        targets: ".title-text .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 150 * (i + 1),
      })

      .add({
        targets: ".role",
        opacity: [0, 1],
        easing: "easeOutExpo",
        
      })
      .add({
        targets: ".social-anime",
        opacity: [0, 1],
        translateX: [-20, 0],
        
      });

    anime.timeline({ loop: 1 }).add({
      targets: ".home-img",
      opacity: [0, 1],
      easing: "easeOutExpo",
      translateX: [50, 0],
      delay: 1500,
    });
  }, []);

  return (
    <div className="greeting-container mx-auto user-select-none" id="home">
      <div className="row greeting-main d-flex justify-content-around">
        <div className="order-1 col-md-6 mb-5 pt-5 mb-md-0 pt-md-5">
          <div className="greeting-text-div ">
            <h1 className="title-text">Hi,</h1>
            <h1 className="title-text mb-4">I'm {greeting.title}</h1>
            <br />
            <Typed
              className="role font-monospace fw-bold"
              strings={greeting.role}
              typeSpeed={80}
              backSpeed={80}
              delay={1500}
              loop
            />
          </div>
          <div className=" py-5 social-anime">
            <SocialMedia />
          </div>
        </div>
        <div className="order-2 order-md-3">
          <Arrow />
        </div>
        <div className="order-3 home-img order-md-2 home-img col-md-6 mt-5 pt-5 mt-md-0 pt-md-4 pe-4">
          <HomeImg />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
