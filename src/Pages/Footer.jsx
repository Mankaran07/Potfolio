import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__icons">
            <span>
              <a
                href="https://www.linkedin.com/in/mankaran07/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </span>
            <span>
              <a href="mailto:mankaransingh39@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </span>
            <span>
              <a href="tel:+919103479398">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </span>
            <span>
              <a
                href="http://github.com/mankaran07"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/mankaran__01/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </span>
          </div>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            Copyright Mankaran Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
