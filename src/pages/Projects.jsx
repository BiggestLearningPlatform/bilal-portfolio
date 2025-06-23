import React from "react";
import Card from "../components/Card";

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
          <div className="col-md-6 col-lg-4">
            <Card
              image="https://via.placeholder.com/400x250?text=Project+1"
              title="Task Manager App"
              text="A productivity app to manage daily tasks using Spring Boot and React.js."
              link="https://github.com/bilal/task-manager"
              buttonText="View on GitHub"
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card
              image="https://via.placeholder.com/400x250?text=Project+2"
              title="E-Commerce Backend"
              text="Built a REST API for online store management using Java and Spring Data JPA."
              link="https://github.com/bilal/ecommerce-api"
              buttonText="View on GitHub"
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card
              image="https://via.placeholder.com/400x250?text=Project+3"
              title="Portfolio Website"
              text="A React + Bootstrap portfolio to showcase my work as a full stack Java developer."
              link=""
              buttonText="Visit Website"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
