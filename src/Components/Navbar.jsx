import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faBars,
  faCogs,
  faHeart,
  faHome,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };
  const handleClick2 = () => {
    setTimeout(() => {
      setOpen(!isOpen);
    }, 1000);
  };
  return (
    <div className="nav__container">
      <nav className="navbar">
        <div className="navbar__left">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar__right">
          <li>
            <a
              href="https://www.linkedin.com/in/mankaran07"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
          <li>
            <a
              href="http://github.com/mankaran07"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <button onClick={handleClick}>
              {isOpen === false ? (
                <FontAwesomeIcon icon={faBars} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faTimes} size="lg" />
              )}
            </button>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="navbar__full">
          <div className="navbar__fullContent">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth="easeInOutCubic"
              onClick={handleClick2}
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
              onClick={handleClick2}
            >
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              duration={100}
              to="skills"
              onClick={handleClick2}
            >
              <FontAwesomeIcon icon={faHeart} />
              Skills
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth="easeInOutCubic"
              offset={40}
              duration={100}
              onClick={handleClick2}
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
              onClick={handleClick2}
              to="contact"
            >
              <FontAwesomeIcon icon={faAddressCard} /> Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
