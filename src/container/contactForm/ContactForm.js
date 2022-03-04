import React, { useLayoutEffect } from "react";
import MailImg from "./MailImg";
import ContactFormCard from "../../components/contactFormCard/ContactFormCard";
import anime from "animejs";

function ContactForm() {
  useLayoutEffect(() => {
    anime.timeline({ loop: 1 }).add({
      targets: ".img-div, .heading-text-div",
      opacity: [0, 1],
      easing: "easeOutExpo",
      translateY: [200, 0],
      duration: 2500,
      delay: 500,
    });
  });
  return (
    <div className="contact-container mx-auto">
      <div className="row d-flex justify-content-around ">
        <div className=" img-div col-md-6 py-5 my-4">
          <MailImg />
        </div>
        <div className=" col-md-6 align-self-start mt-3 heading-text-div">
          <h1 className="heading-text text-center">Contact Me</h1>

          <p className="sub-title text-center my-3">
            Feel free to contact with me
          </p>
          <ContactFormCard />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
