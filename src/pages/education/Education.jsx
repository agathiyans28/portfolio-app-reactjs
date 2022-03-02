import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EducationGreeting from '../../container/educations/EducationGreeting'
import DegreeContainer from "../../container/degreeContainer/DegreeContainer";
import CertificationContainer from "../../container/certificationContainer/CertificationContainer";
import Footer from "../../components/footer/Footer";



function Education() {
  return (
    <>
      <Navbar />
      <EducationGreeting />
      <DegreeContainer />
      <CertificationContainer />
      <Footer />
    </>
  );
}

export default Education;
