import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service" id="service">
      <h2 className="heading">Services</h2>

      <div className="service-container">
        <div className="service-box">
          <div className="service-info">
            <h4>Frontend developer</h4>
            <p>
              As a Frontend Developer, I specialize in creating visually
              appealing and user-friendly interfaces using technologies like
              HTML, CSS, JavaScript and React JS. I focus on building responsive designs,
              ensuring compatibility across different devices and browsers, and
              implementing interactive features to enhance user experience.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <h4>Backend developer</h4>
            <p>
              As a Backend Developer, I handle server-side logic, database
              interactions, and API development. My expertise includes building
              robust and scalable server applications using technologies like
              Node.js and Express. I ensure efficient data processing,
              secure authentication, and seamless integration with frontend
              services.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <h4>DataBase</h4>
            <p>
              I specialize in designing and managing databases to store,
              organize, and retrieve data efficiently. I work with NoSQL (MongoDB) databases. My focus is on
              creating optimized data models, ensuring data integrity, and
              implementing secure data access for seamless backend operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
