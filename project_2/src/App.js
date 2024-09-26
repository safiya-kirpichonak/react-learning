import React from "react";

import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card
        img="card1-photo.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
