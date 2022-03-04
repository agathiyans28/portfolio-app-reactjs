import React, { Component, useLayoutEffect } from "react";
import { Navigate } from "react-router-dom";
import "./AnimatedLogo.css";
import anime from "animejs";

function AnimatedLogo() {
  useLayoutEffect (() => {
    anime.timeline({ loop: 1 }).add({
      targets: ".loading-container .circle-white",
      scale: [1, 10],
      opacity: [0, 1],
      easing: "easeInOutExpo",
      duration: 6000,
      delay: 800
    });
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-logo">AGATHIYAN</div>
      <span className="circle circle-white"></span>
    </div>
  );
}

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(
      () =>
        this.setState({
          redirect: true,
        }),
      5600
    );
  }

  componentDidUpdate() {
    clearTimeout(this.id);
  }

  render() {
    
    return this.state.redirect ? <Navigate to='/home' /> : <AnimatedLogo />;
  }
}
