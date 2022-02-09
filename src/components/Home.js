import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Image } from "../assets/home_image.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid " id="home" style={{ height: "100vh" }}>
        <div className="container-xl">
          <div
            className="row d-flex align-items-center"
            id="greetings"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="col-md-6">
              <h4>Hey There..!</h4>
              <h1 className="display-1">I'm Agathiyan</h1>
              <h2>Software Doveloper</h2>
              <p>
                A passionate individual who always thrive to work on end to end
                products which develop sustainable and scalable social and
                technical systems to create impact
              </p>
            </div>
            <div className="col-md-6">
              <Image className="pt-5" width={"100%"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center h-100"
        id="home"
        style={{ backgroundColor: "blue" }}
      >
        <div
          className="container-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="row">
            <div className="col-md-6">
              <h1>Hello World!</h1>
            </div>
            <div className="col-md-5 mx-auto">
              <Image width={"500px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
