import React from "react";
import "./index.css";
import Folderimg from "./Pagemediafiles/folder.png";
import Github from './Pagemediafiles/github (1).png';
import CloudComputing from './Pagemediafiles/cloud-computing.png';
import Animgif from './Pagemediafiles/dazzle-line-man-programmer-writing-code-on-a-laptop-1.gif'

function Projects() {
  return (
      <section className="projects" id="projects">
        <h1 id="heading">My Projects</h1>

        <img
          src={ Animgif }
          alt=""
          id="product"
        />

        <div className="work $1">
          <div className="folderimg">
            <img src={Folderimg} alt="" id="project-folder" />
            <a href="https://github.com/Andile-Nqabelele/Netflix-clone.git">
              <img src={ Github } alt="" id="git-hub" />
            </a>
            <a href="https://netflix-website-clone-a975b.web.app/">
              <img src={ CloudComputing } alt="" id="project-link" />
            </a>
          </div>

          <h1 id="work-header">Netflix Clone Website</h1>
          <p id="work-paragraph">
            A simple clone of the Netflix SA website built to be as identical as
            can be to the original.
          </p>

          <div className="code">
            <code>Html</code>
            <code>CSS</code>
          </div>
        </div>

        <div className="work $1">
          <div className="folderimg">
            <img src={Folderimg} alt="" id="project-folder" />
            <a href="https://github.com/Andile-Nqabelele/Netflix-clone.git">
              <img
                href="https://github.com/Andile-Nqabelele/Netflix-clone.git"
                src={ Github }
                alt=""
                id="git-hub"
              />
            </a>
            <a href="https://netflix-website-clone-a975b.web.app">
              <img src={ CloudComputing } alt="" id="project-link" />
            </a>
          </div>

          <h1 id="work-header">Counter App</h1>
          <p id="work-paragraph">
            Easy to use counter app with some CSS animation and Javascript
          </p>

          <div className="code">
            <code>Html</code>
            <code>CSS</code>
            <code>Javascript</code>
          </div>
        </div>

        <div className="work $1">
          <div className="folderimg">
            <img src={Folderimg} alt="" id="project-folder" />
            <a href="https://github.com/Andile-Nqabelele/counterApp.git">
              <img src={ Github } alt="" id="git-hub" />
            </a>
            <a href="/#">
              <img
                src={ CloudComputing }
                alt=""
                id="project-link"
              />
            </a>
          </div>

          <h1 id="work-header">Form User Validation Project </h1>
          <p id="work-paragraph">
          A type of project where a web-form checks if the information provided by a user is correct.
          </p>

          <div className="code">
            <code>Html</code>
            <code>CSS</code>
          </div>
        </div>

        <div className="work $1">
          <div className="folderimg">
            <img src={Folderimg} alt="" id="project-folder" />
            <a href="/#">
              <img src={ Github } alt="" id="git-hub" />
            </a>
            <a href="/#">
              <img src={ CloudComputing } alt="" id="project-link" />
            </a>
          </div>

          <h1 id="work-header">Netflix Clone Website</h1>
          <p id="work-paragraph">
            A simple clone of the Netflix SA website built to be as identical as
            can be to the original.
          </p>

          <div className="code">
            <code>Html</code>
            <code>CSS</code>
          </div>
        </div>
      </section>
  );
}

export default Projects;
