import React from "react";

import star from "../images/star.svg";

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
      <img src={img} alt="card-photo" />
      <div className="card--rating">
        <img src={star} alt="star" className="card--rating-logo" />
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
