import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // Close navbar on link click
  const closeNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    const bsCollapse = new window.bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  };

  // Close navbar on outside click
  const handleClickOutside = (event) => {
    const nav = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    if (
      nav.classList.contains('show') &&
      !nav.contains(event.target) &&
      !toggler.contains(event.target)
    ) {
      const bsCollapse = new window.bootstrap.Collapse(nav, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        {/* Brand Logo and Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img
            src="/bilal.png"
            alt="Bilal"
            style={{ width: '35px', height: '35px', objectFit: 'cover', borderRadius: '50%', marginRight: '10px' }}
          />
          <span className="fw-bold">Bilal Asghar</span>
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/projects', label: 'Projects' },
              { path: '/skills', label: 'Skills' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li className="nav-item" key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link active fw-semibold border-bottom border-2 border-primary'
                      : 'nav-link'
                  }
                  onClick={closeNavbar}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
