import React from "react";

import cardsData from "./cardsData.js";

import Nav from "./components/Nav.js";
import Card from "./components/Card.js";

export default function App() {
  const cards = cardsData.map((item) => <Card key={item.key} item={item} />);

  return (
    <div>
      <Nav />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
