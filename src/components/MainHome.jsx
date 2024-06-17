import React from "react";
import HP2 from "../assets/img/HP2.png";
import HP1 from "../assets/img/HP1.png";
import Layer3 from "../assets/img/Layer3.png";
import Layer4 from "../assets/img/Layer4.png";
import right_gif from "../assets/img/right_gif.gif";
import phone1 from "../assets/img/phone.png";
import heart from "../assets/img/heart.png";

export default function Main() {
  return (
    <>
      <main>
        <img className="walpapper walpapperL pc" src={HP2} alt="HP2" />
        <img
          className="walpapper walpapperL mobile"
          src={Layer3}
          alt="Layer3"
        />
        <img
          className="walpapper walpapperRB mobile"
          src={Layer4}
          alt="Layer4"
        />
        <div className="main_left">
          <div className="main_top background_block">
            <img className="homePhone" src={phone1} alt="" />
            <div className="left_text">
              <span>BeautyRank предоставляет</span>
              <span>таблицу рейтинга:</span>
              <span>
                <span className="font_heavy">ТОП-100</span> лучших мастеров
              </span>
              <span>перманентного макияжа.</span>
              <img className="heart mobile" src={heart} alt="heart" />
            </div>
          </div>
          <div className="main_bottom background_block">
            <span className="font_heavy">
              Дайте своему таланту засветиться с{" "}
              <span className="font_black">BeautyRank:</span>
            </span>
            <span className="font_heavy">
              <span className="font_black">Ваш</span> путь к профессиональному
              признанию
            </span>
          </div>
        </div>
        <div className="main_right background_block">
          <img style={{ width: "100%" }} src={right_gif} alt="gif" />
        </div>
      </main>
      <img className="walpapper walpapperR pc" src={HP1} alt="HP1" />
    </>
  );
}
