import React from "react";
import Footer from "../../components/footer/Footer";
import Greeting from "../../components/greeting/Greeting";
import Navbar from "../../components/navbar/Navbar";
import ProjectComponent from "../../components/projectContainer/ProjectComponent";
import Skill from "../../components/skills/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Skill />
      <ProjectComponent />
      <Footer />
    </>
  );
}

export default Home;
