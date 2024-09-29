import React from "react";

export default function Card({ item }) {
  return (
    <div className="card">
      <img
        className="card--image"
        alt="location"
        src={`./images/${item.imagePath}`}
      />
      <div className="card-information">
        <div className="card-location">
          <img src="./images/logo-location.svg" alt="logo location" />
          <p>{item.location.toUpperCase()}</p>
          <a href={item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h1>{item.title}</h1>

        <p className="card-information--date">
          {item.startDate} - {item.endDate}
        </p>
        <p className="card-information--description">{item.description}</p>
      </div>
    </div>
  );
}
