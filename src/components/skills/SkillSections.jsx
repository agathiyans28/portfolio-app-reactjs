import React from "react";

function SkillSections(props) {
  const skills = props.skills;
  return (
    <div className="skills-main mt-4" style={{ color: "gray" }}>
      <h3 className="text-center">Front End Skills</h3>
      <div className="row mx-auto">
        {skills.map((item, index) => (
          <div
            className={`col-6 col-sm-4 col-md-3 col-xl-2 ${item.animation}`}
            key={index}
          >
            <div className="box mb-3">
              <span className="original">
                <h1>{item.name}</h1>
              </span>
              <div className="overlay">
                <i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i>
                <h1>{item.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSections;
