import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <h2 className="heading">Education</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019-2020</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>
              Completed high school at <span className="spanning">B.S.M Sr. Sec. School</span>,
              specializing in science and mathematics.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020-2024</div>
          <div className="timeline-content">
            <h3>Bachelor's Degree</h3>
            <p>
              Completed a Bachelor of Technology (<span  className="spanning">B.Tech</span>) in
              Computer Science.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024-Continue</div>
          <div className="timeline-content">
            <h3>Master's Degree</h3>
            <p>
              Pursuing a Master of Technology (<span  className="spanning">M.Tech</span>) in Computer
              Science.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024-Continue</div>
          <div className="timeline-content">
            <h3>Internship</h3>
            <p>
              Currently doing an internship as a Web Developer at{" "}
              <span  className="spanning">DND Infotech</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
