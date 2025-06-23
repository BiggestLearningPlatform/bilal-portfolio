import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const About = () => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Bilal_Asghar_Resume',
  });

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div ref={printRef}>
          {/* Heading */}
          <h2 className="text-center mb-4 fw-bold">👨‍💻 About Me</h2>

          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/bilal.png"
                alt="Bilal Asghar"
                className="img-fluid rounded-circle shadow"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>

            {/* Bio */}
            <div className="col-md-8">
              <h4>Hi, I'm Bilal Asghar</h4>
              <p className="text-muted">
                I'm a <strong>Full Stack Java Developer</strong> with expertise in Java, Spring Boot, React.js, and MySQL.
              </p>
              <p className="text-muted">
                I love building scalable backend systems and beautiful, responsive frontends.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-4">
            <h5 className="fw-bold text-center">💼 Tech Stack I Work With</h5>
            <div className="row justify-content-center mt-3">
              {[
                "Java", "Spring Boot", "Hibernate", "MySQL", "React.js", "Bootstrap", "HTML5", "CSS3", "Git", "REST APIs"
              ].map((skill, index) => (
                <div
                  className="col-auto m-2 px-3 py-2 border rounded text-muted bg-light shadow-sm"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-5 d-flex flex-wrap gap-2 justify-content-center">
            <a href="https://www.linkedin.com/in/bilal-asghar-285b49327/" className="btn btn-outline-primary" target="_blank">🔗 LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~01786b15ba5765c4a6" className="btn btn-outline-success" target="_blank">💼 Upwork</a>
            <a href="https://www.fiverr.com/sellers/bilal_javadev/edit" className="btn btn-outline-dark" target="_blank">🎯 Fiverr</a>
            <a href="https://wa.me/923466230256" className="btn btn-outline-success" target="_blank">📱 WhatsApp</a>
            <a href="https://github.com/BiggestLearningPlatform" className="btn btn-outline-secondary" target="_blank">💻 GitHub</a>
            <a href="mailto:your.biggestlearingplatform@gmail.com" className="btn btn-outline-danger">✉️ Email</a>
          </div>
        </div>

        {/* Print Resume Button */}
        <div className="text-center mt-4">
          <button onClick={handlePrint} className="btn btn-primary">
            📄 Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
