import React from "react";

import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(null);

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    setMemeImage(memesData.data.memes[randomIndex].url);
  }

  return (
    <section className="meme">
      <div className="inputs">
        <input className="input" type="text" placeholder="Top text" />
        <input className="input" type="text" placeholder="Bottom text" />
      </div>
      <button className="meme--button" onClick={getRandomMeme}>
        Get a new meme image{" "}
        <img
          className="button--icon"
          src="./images/bottom-logo.png"
          alt="icon"
        />
      </button>
      <img src={memeImage} alt="meme" className="meme--img" />
    </section>
  );
}
