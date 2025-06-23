import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Skills() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">💼 My Skills</h2>
      <p className="text-center text-muted mb-5">
        Full Stack Java Developer with hands-on expertise across the stack.
      </p>

      <div className="row g-4">
        {/* Frontend */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-code"></i>
            </div>
            <h5>Frontend Development</h5>
            <p>HTML5, CSS3, Bootstrap, JavaScript, React.js, Thymeleaf</p>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-server"></i>
            </div>
            <h5>Backend Development</h5>
            <p>Java, Spring Boot, REST APIs, Microservices, Spring MVC</p>
          </div>
        </div>

        {/* Databases */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-database"></i>
            </div>
            <h5>Databases</h5>
            <p>MySQL, PostgreSQL, MongoDB, Hibernate, JPA</p>
          </div>
        </div>

        {/* Tools */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-tools"></i>
            </div>
            <h5>Dev Tools</h5>
            <p>Git, GitHub, Maven, Gradle, IntelliJ, VS Code</p>
          </div>
        </div>

        {/* DevOps */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h5>DevOps</h5>
            <p>Docker, Jenkins, CI/CD, Heroku, AWS (EC2, S3)</p>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="col-md-6 col-lg-4">
          <div className="skill-box text-center p-4 bg-white rounded shadow-sm">
            <div className="icon fs-2 text-primary mb-3">
              <i className="fas fa-users"></i>
            </div>
            <h5>Soft Skills</h5>
            <p>Problem Solving, Teamwork, Communication, Agile/Scrum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
