import React from "react";
import "./index.css";
import CSS from './Pagemediafiles/cascading-style-sheets.png'
import HTML from './Pagemediafiles/html.png'
import Javascript from './Pagemediafiles/java-script.png'
import ReactLogo from './Pagemediafiles/physics.png'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 id="heading">My Skills</h1>

      <p id="summary">
        Hello! My name is Andile and I enjoy creating things that live on the
        internet. My interest in web development started back in 2011 when our
        primary teacher decided to teach us about how they make cover pages for
        us in Ms Word — turns out constructing together a cover page taught me a
        lot about HTML & CSS!
      </p>

      <p id="summary-2">
        Here are a few technologies I have been working on recently:
      </p>

      <div className="skill-wrapper">
        <div className="project-1 card css">
          <img src={ CSS } alt="css" />`
          {/* <p className="project-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis cumque nemo saepe aut culpa tenetur quia hic? Quis
            tenetur modi est at.
          </p> */}
        </div>

        <div className="project-2 card css">
          <img src={ HTML } alt="css" />
          {/* <p className="project-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis cumque nemo saepe aut culpa tenetur quia hic? Quis
            tenetur modi est at.
          </p> */}
        </div>

        <div className="project-3 card css">
          <img src={ Javascript} alt="css" />
          {/* <p className="project-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis cumque nemo saepe aut culpa tenetur quia hic? Quis
            tenetur modi est at.
          </p> */}
        </div>

        <div className="project-4 card css">
          <img src={ ReactLogo } alt="css" />
          {/* <p className="project-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis cumque nemo saepe aut culpa tenetur quia hic? Quis
            tenetur modi est at.
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
