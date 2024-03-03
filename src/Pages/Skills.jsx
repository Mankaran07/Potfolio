import React from "react";
import js from "../assets/images/js.svg";
import cplus from "../assets/images/c++.svg";
import node from "../assets/images/nodejs.svg";
import react from "../assets/images/reactjs.svg";
import redux from "../assets/images/redux.svg";
import mysql from "../assets/images/mysql.svg";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import git from "../assets/images/git.svg";
import typescript from "../assets/images/typescript.svg";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h3>Skills </h3>
        </div>
        <div className="skills__content">
          <div className="row">
            <div className="col">
              <img src={html} alt="" data-tip="HTML 5" />
            </div>
            <div className="col">
              <img src={css} alt="" data-tip="CSS 3" />
            </div>
            <div className="col">
              <img src={js} alt="" data-tip="JavaScript" />
            </div>
            <div className="col">
              <img src={cplus} alt="" data-tip="C++" />
            </div>
            <div className="col">
              <img src={typescript} alt="" data-tip="TypeScript" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={node} alt="" data-tip="NodeJS" />
            </div>
            <div className="col">
              <img src={react} alt="" data-tip="ReactJS" />
            </div>
            <div className="col">
              <img src={redux} alt="" data-tip="Redux" />
            </div>
            <div className="col">
              <img src={mysql} alt="" data-tip="MYSQL" />
            </div>

            <div className="col">
              <img src={git} alt="" data-tip="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
