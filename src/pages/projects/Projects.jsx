import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectGreeting from "../../container/projectGreeting/ProjectGreeting";
import ProjectContainer from '../../container/projectContainer/ProjectContainer'
import Footer from "../../components/footer/Footer";


function Projects() {
  return (
    <>
      <Navbar />
      <ProjectGreeting />
      <ProjectContainer />
      <Footer />
    </>
  );
}

export default Projects;
