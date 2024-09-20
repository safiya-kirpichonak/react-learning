import React from "react";

import logo from "../images/react-icon.svg";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav--logo" />
      <h1 className="nav--logo_text">ReactFacts</h1>
      <h3 className="nav--title">React Course - Project 1</h3>
    </nav>
  );
}
