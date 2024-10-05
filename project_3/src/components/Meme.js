import React from "react";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState([]);
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomIndex].url;
    setMemeImage((oldMemeImage) => ({
      ...oldMemeImage,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    setMemeImage((oldMemeImage) => ({
      ...oldMemeImage,
      [event.target.name]: event.target.value,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then(({ data }) => {
        setAllMemeImages(data.memes);
      });
  }, []);

  return (
    <section className="meme-section">
      <div className="inputs">
        <input
          className="input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="meme--button" onClick={getMemeImage}>
        Get a new meme image{" "}
        <img
          className="button--icon"
          src="./images/bottom-logo.png"
          alt="icon"
        />
      </button>
      <div className="meme">
        <img src={memeImage.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </section>
  );
}
