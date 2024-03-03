import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCogs,
  faEnvelope,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__contents">
        <center>
          <img src={Logo} alt="logo" />
          <h3>
            MANKARAN <span>SINGH</span>
          </h3>
        </center>
        <div className="sidebar__links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth="easeInOutCubic"
            duration={100}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth="easeInOutCubic"
            duration={100}
            to="about"
          >
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth="easeInOutCubic"
            duration={100}
            to="skills"
          >
            <FontAwesomeIcon icon={faHeart} /> Skills
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth="easeInOutCubic"
            offset={40}
            duration={100}
            to="projects"
          >
            <FontAwesomeIcon icon={faCogs} /> Project
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth="easeInOutCubic"
            offset={50}
            duration={100}
            to="contact"
          >
            <FontAwesomeIcon icon={faAddressCard} /> Contact
          </Link>
        </div>
      </div>
      <div className="sidebar__contact">
        <a
          href="https://www.linkedin.com/in/mankaran07/"
          target="_blank"
          data-tip="LinkedIn Profile"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a href="mailto:mankaransingh39@gmail.com" data-tip="Email ID">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a href="tel:+919103479398" data-tip="Whatsapp Number">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/mankaran__01/"
          target="_blank"
          data-tip="Instagram Profile"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
