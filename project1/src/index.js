import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Footer from "./Footer.js";
import Header from "./Header.js";
import MainContent from "./MainContent.js";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
