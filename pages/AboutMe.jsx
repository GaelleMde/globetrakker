import React from "react";
import "../pages/AboutMe.css";

function AboutMe() {
  return (
    <div id="about-ctn">
      <div id="inside-ctn">
        <img id="about-img" src="Suitecase.svg" alt="Profile" />
        <h1>Gaëlle Madelaine</h1>
        <h4>Web developer | UX UI designer </h4>

        <p>
          GlobeTrakker is a project I created during the Web Development Module
          2 at Ironhack. Having lived in different countries, I’ve always loved
          traveling. This app is my way of combining that passion with my skills
          in web development and design.
        </p>
        <p>
          I hope you enjoy this project! Feel free to reach out, check my
          GitHub, LinkedIn, or contact me
        </p>
        <br />

        <div id="all-redes">
          <div className="ctn-redes">
            <img className="img-redes" src="Gmail-logo.svg" alt="Profile" />
            <a href="mailto:gaelle.madelaine.com">Gmail </a>
          </div>

          <div className="ctn-redes">
            <img className="img-redes" src="Linkedin-logo.svg" alt="Profile" />
            <a href="https://www.linkedin.com/in/gaellemadelaine/">LinkedIn </a>
          </div>

          <div className="ctn-redes">
            <img className="img-redes" src="Github-logo.svg" alt="Profile" />
            <a href="https://github.com/GaelleMde">Github </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
