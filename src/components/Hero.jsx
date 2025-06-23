import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

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
            <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
              <button
                onClick={() => navigate('/skills')}
                className="btn btn-primary btn-lg"
                aria-label="View My Skills"
              >
                View My Skills
              </button>

              <button
                onClick={() => navigate('/projects')}
                className="btn btn-outline-secondary btn-lg"
                aria-label="See My Projects"
              >
                See My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
