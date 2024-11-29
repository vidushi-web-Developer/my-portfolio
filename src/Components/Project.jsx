import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project" id="project">
      <div className="project-box">
        <h2 className="heading">Project</h2>
        <div className="wrapper">
          <div className="project-item">
            <h2>My-Portfolio</h2>
            <div className="rating">
              <link></link>
            </div>
            <p>
              I created this portfolio using HTML, CSS, JavaScript, React.js,
              and MongoDB. It includes details about my education and
              professional journey. The portfolio highlights my academic
              background, including the courses I've studied, as well as the
              internship experience.
            </p>
          </div>

          <div className="project-item">
            <h2>UserHub</h2>
            <div className="rating">
            <link></link>
            </div>
            <p>
              I created this site using HTML, CSS, JavaScript, React.js, and
              MongoDB. It includes a registration page, where users can sign up,
              and a login page that redirects to the dashboard upon successful
              login. The dashboard features various categorized courts for users
              to explore.
            </p>
          </div>

          <div className="project-item">
            <h2>56-Secure</h2>
            <div className="rating">
            <link></link>
            </div>
            <p>
              56-Secure is a security-based project designed to provide
              real-time safety solutions. The platform enables users to monitor and protect their assets
              through a user-friendly interface built with React.js. This project showcases my
              ability to create scalable, and secure systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
