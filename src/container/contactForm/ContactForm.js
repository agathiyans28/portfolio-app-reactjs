import React from "react";
import MailImg from "./MailImg";
import ContactFormCard from "../../components/contactFormCard/ContactFormCard";

function ContactForm() {
  return (
    <div
      className="contact-container mx-auto"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="row d-flex justify-content-around ">
        <div className="order-2 order-md-1 img-div col-md-6 pt-5 mt-4">
          <MailImg />
        </div>
        <div className="order-1 order-md-2 col-md-6 align-self-start mt-3">
          <h1 className="heading-text text-center">Contact Me</h1>

          <p className="sub-title text-center my-3">Feel free to contact with me</p>
          <ContactFormCard />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
