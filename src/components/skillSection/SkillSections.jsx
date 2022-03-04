import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillSection.css";

function SkillSections(props) {
  const [{ title }, { skills }] = props.skills;

  return (
    <div
      className="skills-main mt-5"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <h4 className="text-center text-primary card-div-title">{title}</h4>
      <div className="row mx-auto mt-4">
        {skills.map((item, index) => {
          return (
            <div
              data-aos='slide-up'
              data-aos-duration='1000'
              className="col-6 col-sm-4 col-md-3 col-xl-2 p-2"
              key={index}
            >
              <div className="box mb-5 mb-sm-3">
                <div className="front-card">
                  <div className="inner p-4">
                    <img
                      src={require(`../../assets/logo/${item.logo}`)}
                      alt={item.name}
                      className="img"
                    />
                  </div>
                </div>
                <div className="back-card">
                  <div className="inner">
                    <div className="circuler-bar h-auto mx-auto mt-3">
                      <CircularProgressbar
                        value={item.percent}
                        text={`${item.percent}%`}
                        circleRatio={0.75}
                        styles={buildStyles({
                          rotation: 1 / 2 + 1 / 8,
                          strokeLinecap: "butt",
                          trailColor: "#eee",
                        })}
                      />
                    </div>
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSections;
