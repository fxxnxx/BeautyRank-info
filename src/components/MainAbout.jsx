import React, { useState } from "react";
import About1 from "../assets/img/about1.svg";
import About2 from "../assets/img/about2.svg";
import heartDouble from "../assets/img/heartDouble.svg"

export default function About() {
  const [currentImage, setCurrentImage] = useState(About1);

  const toggleImage = () => {
    setCurrentImage(currentImage === About1 ? About2 : About1);
  };

  return (
    <>
      <div className="aboutTop">
        <img src={currentImage} alt="Toggle" />
        <div className="aboutTop-text background_block">
          Видео делает оценки судей максимально&nbsp;
          <span className="font_medium" style={{ color: "#FF3E9B" }}>
            объективными!
          </span>
          <button className="aboutTop-button" onClick={toggleImage}></button>
          <img className="heartDouble" src={heartDouble} alt="heart" />
        </div>
      </div>
    </>
  );
}
