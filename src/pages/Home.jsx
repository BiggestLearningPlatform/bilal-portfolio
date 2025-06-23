import React from 'react';
import Hero from '../components/Hero.jsx';

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="mb-4">👨‍💻 About Me</h2>
          <p className="lead text-muted">
            I'm Bilal Asghar, a passionate Full Stack Java Developer with experience building modern web apps using Spring Boot, React, REST APIs, and more. I love transforming complex problems into elegant, efficient solutions.
          </p>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">🛠️ Skills Snapshot</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="text-primary">Frontend</h5>
              <p>HTML, CSS, JavaScript, Bootstrap, React.js</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-primary">Backend</h5>
              <p>Java, Spring Boot, REST APIs, Microservices</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-primary">Database</h5>
              <p>MySQL, MongoDB, Hibernate, JPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">🚀 Latest Projects</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Task Manager App</h5>
                  <p className="card-text">
                    A full-stack app for managing daily tasks built with Spring Boot and React.js.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Portfolio Website</h5>
                  <p className="card-text">
                    My personal portfolio to showcase my full stack skills and projects.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">E-Commerce Backend</h5>
                  <p className="card-text">
                    A Java Spring Boot REST API backend for managing e-commerce orders and users.
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">View Project</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2>📬 Let's Work Together!</h2>
          <p className="lead">Need a professional full stack developer? I'm open to freelance or full-time opportunities.</p>
          <a href="/contact" className="btn btn-outline-light btn-lg mt-3">Contact Me</a>
        </div>
      </section>

    </div>
  );
}

export default Home;
