import React from "react";

const ProductCategory = ({ cardImg, cardAlt, cardOverlay }) => {
  return (
    <div className="featured-card">
      <img src={cardImg} className="featured-image" alt={cardAlt} />

      <p className="featured-overlay-text">{cardOverlay}</p>
    </div>
  );
};

export { ProductCategory };
