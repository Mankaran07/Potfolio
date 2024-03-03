import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Float = () => {
  return (
    <div className="float">
      <a
        href="https://drive.google.com/file/d/1YO-dNl6M1t4UsGFXV9eb9kJOzUAP-zMV/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFile} size="3x" />
        <span>My Resume</span>
      </a>
    </div>
  );
};

export default Float;
