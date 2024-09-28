import React from "react";

export default function Card({ item }) {
  const badgeText =
    item.locale === "Online"
      ? "ONLINE"
      : item.openSpots === 0
      ? "SOLD OUT"
      : null;

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${item.coverImg}`} alt="card-photo" />
      <div className="card--rating">
        <img src="./images/star.svg" alt="star" className="card--rating-logo" />
        <span>{item.stats.rating}</span>
        <span className="grey-text">({item.stats.reviewCount})</span>
        <span className="grey-text"> {item.locale}</span>
      </div>
      <p>{item.title}</p>
      <p>
        <span className="bold-text">From ${item.price}</span> / person
      </p>
    </div>
  );
}
