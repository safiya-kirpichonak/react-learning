import React from "react";

import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: null,
    bottomText: null,
    randomImage: memesData.data.memes[0].url,
  });
  const [allMemeImages,] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMemeImage((oldMemeImage) => ({
      ...oldMemeImage,
      randomImage: url,
    }));
  }

  return (
    <section className="meme">
      <div className="inputs">
        <input className="input" type="text" placeholder="Top text" />
        <input className="input" type="text" placeholder="Bottom text" />
      </div>
      <button className="meme--button" onClick={getMemeImage}>
        Get a new meme image{" "}
        <img
          className="button--icon"
          src="./images/bottom-logo.png"
          alt="icon"
        />
      </button>
      <img src={memeImage.randomImage} alt="meme" className="meme--img" />
    </section>
  );
}
