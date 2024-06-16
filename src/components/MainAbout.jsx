import React from "react";
// import About1 from "../assets/img/about1.svg";
// import About2 from "../assets/img/about2.svg";
// import heartDouble from "../assets/img/heartDouble.svg";
import BackAboutRight from "../assets/img/BackAboutRight.svg";
import BackAboutLeft from "../assets/img/BackAboutLeft.svg";
import BackAboutMob1 from "../assets/img/BackAboutMob1.svg";
import BackAboutMob2 from "../assets/img/BackAboutMob2.svg";
import Background from "../assets/img/Background.svg";
import phone3 from "../assets/img/phone3.svg";
import heartDouble from "../assets/img/heartDouble.svg";

export default function About() {
  return (
    <>
      <img className="background" src={Background} alt="Background" />
      <img className="walpapper wallpaperL pc" src={BackAboutLeft} alt="img" />
      <img className="walpapper mobile" src={BackAboutMob1} alt="img" />
      <img className="walpapper walpapperR pc" src={BackAboutRight} alt="img" />
      <img className="walpapper mobile" src={BackAboutMob2} alt="img" />

      <main style={{ marginTop: "91px" }}>
        <div
          className="main_left"
        >
          <div
            className="main_top background_block"
            style={{ marginBottom: "180px" }}
          >
            <img className="aboutPhone" src={phone3} alt="phone3" />
            <div
              className="left_text"
              style={{ padding: "0 97px", fontSize: "40px" }}
            >
              Видео делает оценки судей максимально
              <span style={{ color: "#FF3E9B" }} className="font_medium">
                объективными!
              </span>
            </div>
            <img className="heartDouble" src={heartDouble} alt="heartDouble" />
          </div>
          <div
            className="main_bottom background_block"
            style={{ width: "1016px" }}
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
