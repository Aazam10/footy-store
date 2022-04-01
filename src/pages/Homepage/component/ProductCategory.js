import React from "react";

const ProductCategory = ({
  categoryName,
  cardImg,
  cardAlt,
  cardOverlay,
  categoryCardClickHandler,
}) => {
  return (
    <div
      className="featured-card"
      onClick={() => categoryCardClickHandler(categoryName)}
    >
      <img src={cardImg} className="featured-image" alt={cardAlt} />

      <p className="featured-overlay-text">{cardOverlay}</p>
    </div>
  );
};

export { ProductCategory };
