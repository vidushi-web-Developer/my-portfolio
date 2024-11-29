import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import me from "../images/me.jpg";
import "./Home.css";

function Home() {
  return (
      <div className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Vidushi</span>
          </h1>
          <p>
            As a dedicated and creative web developer, I bring a wealth of
            experience in designing and building dynamic, user-centric websites
            and web applications. Proficient in modern front-end technologies
            such as HTML, CSS, and JavaScript, as well as popular frameworks
            like React, I strive to deliver responsive and accessible
            interfaces that elevate the user experience. Whether working
            independently or as part of a team, my goal is to build engaging,
            high-quality websites that drive user engagement and business
            growth.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vidushi-kaushik-4261b82b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbvlWurZPTgS7SmurWf%2FGpA%3D%3D">
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a href="https://github.com/vidushi-web-Developer">
              <i>
                <FaGithub />
              </i>
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={me} alt="img" />
        </div>
      </div>
  );
}

export default Home;
