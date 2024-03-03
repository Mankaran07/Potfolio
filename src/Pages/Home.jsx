import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/home.svg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section id="home" className="home ">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__header">
            <h3>
              Hey 👋,
              <br /> I am <span>MANKARAN SINGH</span>
            </h3>
          </div>
          <div className="home__subtitle">
            <h4>Full Stack Developer</h4>
          </div>
          <div className="home__actionbtn">
            <Link to="project">
              <span className="btn workbtn">My Work</span>
            </Link>
            <Link to="contact">
              <span className="btn hirebtn">Hire Me</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <ReactLogo />
        </div>
      </div>
    </section>
  );
};

export default Home;
