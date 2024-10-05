import React from "react";

import "./style.css";

import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((oldMode) => !oldMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
