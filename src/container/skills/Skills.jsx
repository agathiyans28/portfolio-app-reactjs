import React from "react";
import { skills } from "../../data";
import SkillSections from "../../components/skillSection/SkillSections";
import './Skills.css'

function Skills() {
  return (
    <div className="mb-5 mx-auto skill-main" style={{ padding: "0 15px", width: "90%" }}>
      <h1 className="text-center mb-3 div-title"
      data-aos="fade-up"
      data-aos-duration="1000"
      >Professional Skillset</h1>
      {skills.map((items, index) => (
        <SkillSections skills={items} key={index} />
      ))}
    </div>
  );
}

export default Skills;
