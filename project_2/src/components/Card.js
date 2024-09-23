import React from "react";

import star from "../images/star.svg";
import cardPhoto from "../images/card1-photo.png";

export default function Card() {
  return (
    <div className="card">
      <img src={cardPhoto} alt="card-photo" />
      <div className="card--rating">
        <img src={star} alt="star" className="card--rating-logo" />
        <span>5.0</span>
        <span className="grey-text">(6)</span>
        <span className="grey-text"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold-text">From $136</span> / person
      </p>
    </div>
  );
}
