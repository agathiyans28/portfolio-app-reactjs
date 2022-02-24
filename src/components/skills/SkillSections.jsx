import React from "react";

function SkillSections(props) {
  const prop = props.skills;

  return (
    <div className="skills-main mt-5">
      <h4 className="text-center text-primary">{prop[0].title}</h4>
      <div className="row mx-auto">
        {prop[1].skills.map((item, index) => {
          const setProgress = (progress) => {
            const value = `${progress}%`;
            document.documentElement.style.setProperty("--progress", value);
            // radialProgress.innerHTML = value;
            // radialProgress.setAttribute("aria-valuenow", value);
          };

          return (
            <div
              // data-aos='slide-up'
              // data-aos-duration='1500'
              className="col-6 col-sm-4 col-md-3 col-xl-2 p-2"
              key={index}
            >
              <div className="box mb-5" onLoad={setProgress(item.percent)}>
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
                    <div
                      className="radial-progress mx-auto mt-3 percent pt-5"
                      role="progressbar"
                      aria-valuenow={item.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{background : `conic-gradient(hsl(210 100% 70%), hsl(220 100% 40%), hsl(220 100% 70%) ${item.percent}%,  hsl(233 34% 92%) ${item.percent}% 100%`}}
                    >
                      {item.percent + "%"}
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
