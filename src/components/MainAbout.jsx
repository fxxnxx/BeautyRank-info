import React, { useState } from "react";
import BackAboutRight from "../assets/img/BackAboutRight.png";
import BackAboutLeft from "../assets/img/BackAboutLeft.png";
import BackAboutMob1 from "../assets/img/BackAboutMob1.png";
import BackAboutMob2 from "../assets/img/BackAboutMob2.png";
import Background from "../assets/img/Background.png";
import phoneAbout1 from "../assets/img/phoneAbout1.png";
import phoneAbout2 from "../assets/img/phoneAbout2.png";
import heartDouble from "../assets/img/heartDouble.png";

export default function About() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <img className="walpapper walpapperLB pc" src={BackAboutLeft} alt="img" />
      <img className="walpapper mobile" src={BackAboutMob1} alt="img" />
      <img className="walpapper walpapperR pc" src={BackAboutRight} alt="img" />
      <img className="walpapper mobile" src={BackAboutMob2} alt="img" />

      <main style={{ marginTop: "91px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="main_left"
        >
          <div
            className="main_top background_block"
            style={{ marginBottom: "180px", paddingLeft: "5%" }}
          >
            <div>
              {isFirstImage ? (
                <img
                  src={phoneAbout1}
                  alt="First Image"
                  className="image aboutPhone"
                />
              ) : (
                <img
                  src={phoneAbout2}
                  alt="Second Image"
                  className="image aboutPhone"
                />
              )}
            </div>
            <div className="left_text_flexblock">
              <div className="left_text about_text">
                <button onClick={toggleImage}>Switch Image</button>
                Видео делает оценки судей максимально
                <div style={{ color: "#FF3E9B" }} className="font_medium">
                  объективными!
                </div>
              </div>
            </div>
            <img className="heartDouble" src={heartDouble} alt="heartDouble" />
          </div>
          <div
            className="main_bottom background_block"
            style={{
              width: "1016px",
              height: "165px",
              fontSize: "40px",
              padding: "45px",
            }}
          >
            <span className="font_heavy">
              Несколько отличных <span className="font_black">фото</span>
            </span>
            <span className="font_heavy">
              Не могут показать больше чем одно
              <span className="font_black">видео</span>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
