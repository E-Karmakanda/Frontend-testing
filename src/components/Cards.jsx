import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, label, image, buttonText, buttonPath, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <div className="card__icon" style={{ backgroundColor: color }}>
        <img src={image} alt="icon" className="card__icon-image" />
      </div>
      <h1 className="card__title">{title}</h1>
      <p className="card__label">{label}</p>
      <Link to={buttonPath}><button
        className="card__button"
        style={{ backgroundColor: `${color}20`, color }}
      > {buttonText}
      </button></Link>


    </div>
  );
};

export default Card;
