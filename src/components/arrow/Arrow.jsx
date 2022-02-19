import React from "react";
import "./Arrow.css";
import arrow from '../../assets/arrow.svg'

function Arrow() {
  return (
    <div className="text-center">
      <img className="down-arrow bounce" src={arrow} alt="arrow-icon" aria-hidden='true' />
    </div>
  );
}

export default Arrow;
