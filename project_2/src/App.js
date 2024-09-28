import React from "react";

import cardsData from "./cardsData.js";

import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";

export default function App() {
  const cards = cardsData.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
