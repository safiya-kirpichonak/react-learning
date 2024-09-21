import React from "react";

import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import telegram from "../images/telegram.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/trudy418">
        <img src={github} alt="github" />
      </a>
      <a href="https://t.me/trudy418">
        <img src={telegram} alt="telegram" />
      </a>
      <a href="https://www.linkedin.com/in/sophia-kirpichonak-001340277/">
        <img src={linkedin} alt="linkedin" />
      </a>
    </footer>
  );
}
