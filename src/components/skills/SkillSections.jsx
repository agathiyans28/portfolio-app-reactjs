import React from "react";

function SkillSections(props) {
  const prop = props.skills;

  return (
    <div className="skills-main mt-4" style={{ color: "gray" }}>
      <h4 className="text-center">{prop[0].title}</h4>
      <div className="row mx-auto">
        {prop[1].skills.map((item, index) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-xl-2 slide-up"
            key={index}
          >
            <div className="box mb-3 p-lg-4 p-xl-0">
              <img
                className="w-50"
                src={require(`../../assets/logo/${item.logo}`)}
                alt={item.name}
                aria-hidden="true"
              />
              <div className="overlay pt-1">
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSections;
