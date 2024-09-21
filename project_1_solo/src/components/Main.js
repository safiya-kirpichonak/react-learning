import React from "react";

import gmail from "../images/gmail.svg";
import avatar from "../images/avatar.jpeg";

export default function Main() {
  return (
    <main>
      <img src={avatar} alt="avatar" className="main--logo" />
      <h1>Sophia Kirpichonak</h1>
      <h4>Backend Developer</h4>

      <a href="mailto:sophiakirpichenok@gmail.com" className="gmail">
        <img src={gmail} alt="gmail" />
        Gmail
      </a>

      <div className="description">
        <h2>About</h2>
        <p>
          I work as a backend developer using Node.js. I have experience in
          writing REST APIs, working with PostgreSQL, MySQL, Redis databases,
          Git and Docker tools, as well as AWS services. I plan to continue
          growing as a backend developer, but for broader development, I’m
          learning React because I’d like to create good front-end parts for my
          own projects.
        </p>
      </div>

      <div className="description">
        <h2>Interests</h2>
        <p>
          In addition to my work as a programmer, I write code for myself, study
          foreign languages, and want to revisit mathematics and physics, as
          these subjects seem interesting to me. I also occasionally participate
          in CTF challenges.
        </p>
      </div>
    </main>
  );
}
