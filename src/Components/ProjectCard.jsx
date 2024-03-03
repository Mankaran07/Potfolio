import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({ data }) => {
  return (
    <div className="project__card">
      <div className="card__details">
        <h3>{data.title}</h3>
        <p>{data.detail}</p>
        <div className="chips-container">
          {data.tech.split(",").map((t, ind) => (
            <div key={ind} className="chip">
              {"#" + t.toLowerCase()}
            </div>
          ))}
        </div>
        <div className="project__cardlinks">
          <a href={data.git} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            Github
          </a>
          {data.live && (
            <a href={data.live} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCirclePlay} size="lg" />
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
