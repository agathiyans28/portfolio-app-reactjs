import React from "react";
import "./Skills.css";
import { skills } from "../../data";
import SkillSections from "./SkillSections";

function Skills() {
  return (
    <div className="skillset-main mb-5">
      <h1 className="text-center mb-3 skill-title">Professional Skillset</h1>
      {skills.map((items, index) => (
        <SkillSections skills={items} key={index} />
      ))}
    </div>
  );
}

export default Skills;
