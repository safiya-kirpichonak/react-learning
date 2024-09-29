import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img className="nav--logo" src="./images/logo.svg" alt="logo" />
        <h1 className="nav--title">Meme Generator</h1>
      </div>
      <h3 className="nav--subtitle">React Course - Project 3</h3>
    </nav>
  );
}
