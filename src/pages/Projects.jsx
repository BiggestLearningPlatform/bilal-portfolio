import React from "react";

const Projects = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">🛠️ Things I’ve Built So Far</h2>
          <p className="text-muted">
            A selection of projects demonstrating my skills in full stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {/* Project 1 - Task Manager App with Icon */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-check2-square mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="card-title">Task Manager App</h5>
                <p className="card-text">
                  A productivity app to manage daily tasks using Spring Boot and React.js.
                </p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a href="https://task-manager-local1.netlify.app/" target="_blank" className="btn btn-primary btn-sm">
                    🔗 Live Demo
                  </a>
                  <a href="https://github.com/BiggestLearningPlatform/task-manager-local" target="_blank" className="btn btn-outline-dark btn-sm">
                    🧠 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - E-Commerce Backend */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/400x250?text=Project+2" className="card-img-top" alt="E-Commerce Backend" />
              <div className="card-body text-center">
                <h5 className="card-title">E-Commerce Backend</h5>
                <p className="card-text">
                  Built a REST API for online store management using Java and Spring Data JPA.
                </p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a href="https://github.com/bilal/ecommerce-api" target="_blank" className="btn btn-outline-dark btn-sm">
                    🧠 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Portfolio Website */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/400x250?text=Project+3" className="card-img-top" alt="Portfolio Website" />
              <div className="card-body text-center">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">
                  A React + Bootstrap portfolio to showcase my work as a full stack Java developer.
                </p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a href="https://your-portfolio-link.netlify.app/" target="_blank" className="btn btn-primary btn-sm">
                    🔗 Live Demo
                  </a>
                  <a href="https://github.com/bilal/portfolio" target="_blank" className="btn btn-outline-dark btn-sm">
                    🧠 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
