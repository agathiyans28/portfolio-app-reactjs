import React, { useLayoutEffect } from "react";
import "./Arrow.css";
import arrow from "../../assets/logo/arrow.svg";
import anime from 'animejs'

function Arrow() {

  useLayoutEffect(() => {
    anime({
      targets: '.down-arrow',
      opacity: [0, 1],
      delay: 4500
    })
  })

  return (
    <div className="text-center">
      <img
        className="down-arrow bounce"
        src={arrow}
        alt="arrow-icon"
        aria-hidden="true"
      />
    </div>
  );
}

export default Arrow;
