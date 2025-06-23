// components/Card.jsx
import React from "react";

function Card({ image, title, text, link, buttonText }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Card;
