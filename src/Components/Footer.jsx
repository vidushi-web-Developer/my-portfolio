import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
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
      <ul className="list">
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
      </ul>
      <p className="copyright">© Vidushi Kaushik | All Right Reserved</p>
    </div>
  );
}

export default Footer;
