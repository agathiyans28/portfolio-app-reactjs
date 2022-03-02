import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ContactForm from "../../container/contactForm/ContactForm";
import Footer from '../../components/footer/Footer'
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
