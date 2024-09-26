import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img src={`./images/${img}`} alt="card-photo" />
      <div className="card--rating">
        <img src="./images/star.svg" alt="star" className="card--rating-logo" />
        <span>{rating}</span>
        <span className="grey-text">({reviewCount})</span>
        <span className="grey-text"> {country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold-text">From ${price}</span> / person
      </p>
    </div>
  );
}
