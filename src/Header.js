import React from "react";
import "./index.css";

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <nav>
          <input type="checkbox" id="sidebartoggler" name="" value={true} />

          <div className="page-wrap">
            <label htmlFor="sidebartoggler" className="toggle">
              ☰
            </label>

            <div className="page-content"></div>

            <div className="sidebar">
              <ul>
                <li>
                  <a href="#introduction" id="sidebar-btn">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" id="sidebar-btn">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" id="sidebar-btn">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" id="sidebar-btn">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button type="button" className="hamburger">
          <div className="bar" />
        </button>
      </div>
    </header>
  );
}

export default Header;
