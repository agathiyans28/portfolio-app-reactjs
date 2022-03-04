import React from "react";
import PageImg from "../../assets/images/not-found.png";

export default function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img src={PageImg} alt="Page not found." />
    </div>
  );
}
