import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">📬 Contact Me</h2>
        <p className="text-center text-muted mb-5">
          Let's connect for collaboration, freelance work, or just to chat!
        </p>

        {/* Contact Info Cards */}
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-envelope-paper-fill fs-2 text-primary mb-2"></i>
              <h5>Email</h5>
              <p>biggestlearningplatform@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-phone-fill fs-2 text-success mb-2"></i>
              <h5>Phone</h5>
              <p>+92 346 6230256</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-geo-alt-fill fs-2 text-danger mb-2"></i>
              <h5>Location</h5>
              <p>Gujrat, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="text-center mb-5">
          <h5 className="mb-3 fw-bold">🌐 Connect With Me</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/bilal-asghar-285b49327/" className="btn btn-outline-primary shadow-sm" target="_blank">
              <i className="bi bi-linkedin me-1"></i> LinkedIn
            </a>
            <a href="https://www.upwork.com/freelancers/~01786b15ba5765c4a6" className="btn btn-outline-success shadow-sm" target="_blank">
              <i className="bi bi-briefcase-fill me-1"></i> Upwork
            </a>
            <a href="https://www.fiverr.com/sellers/bilal_javadev/edit" className="btn btn-outline-dark shadow-sm" target="_blank">
              <i className="bi bi-stars me-1"></i> Fiverr
            </a>
            <a href="https://wa.me/923466230256" className="btn btn-outline-success shadow-sm" target="_blank">
              <i className="bi bi-whatsapp me-1"></i> WhatsApp
            </a>
            <a href="https://github.com/BiggestLearningPlatform" className="btn btn-outline-secondary shadow-sm" target="_blank">
              <i className="bi bi-github me-1"></i> GitHub
            </a>
            <a href="mailto:biggestlearningplatform@gmail.com" className="btn btn-outline-danger shadow-sm">
              <i className="bi bi-envelope-open-fill me-1"></i> Email
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
