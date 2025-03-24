import React from "react";
const Card = ({ title, label, image, buttonText, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <div className="card__icon" style={{ backgroundColor: color }}>
        <img src={image} alt="icon" className="card__icon-image" />
      </div>
      <h1 className="card__title">{title}</h1>
      <p className="card__label">{label}</p>
      <button
        className="card__button"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
