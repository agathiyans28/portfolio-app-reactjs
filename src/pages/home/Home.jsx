import React from "react";
import Footer from "../../components/footer/Footer";
import Greeting from "../../container/greeting/Greeting";
import Navbar from "../../components/navbar/Navbar";
import Skill from "../../container/skills/Skills";
import About from "../../container/about/About";
import ContactForm from "../../container/contactForm/ContactForm";
import ProjectContainer from "../../container/projectContainer/ProjectContainer";

function Home() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Skill />
      <ProjectContainer />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
