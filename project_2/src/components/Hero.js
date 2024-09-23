import React from "react";

import heroPhoto from "../images/hero-photo.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroPhoto} alt="hero-photo" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
