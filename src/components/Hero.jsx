import React from 'react';

function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Profile Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="/bilal.png"
              alt="Bilal Asghar"
              className="rounded-circle shadow-lg border border-3 border-primary"
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text Info */}
          <div className="col-12 col-md-8">
            <h1 className="display-5 fw-bold">Bilal Asghar</h1>
            <h2 className="fs-3 text-muted mb-3">Full Stack Java Developer</h2>
            <p className="lead">
              I build scalable full-stack web applications using Java, Spring Boot, React, and modern tools. Passionate about clean code, performance, and learning new technologies.
            </p>

            {/* Call to Action */}
            <div className="mt-4">
              <a href="/skills" className="btn btn-primary btn-lg me-2">
                View My Skills
              </a>
              <a href="/projects" className="btn btn-outline-secondary btn-lg">
                See My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
