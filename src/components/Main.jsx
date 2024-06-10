import React from "react";
import Layer1 from "../assets/img/Layer1.svg";
import Layer2 from "../assets/img/Layer2.svg";
import Layer3 from "../assets/img/Layer3.svg";
import Layer4 from "../assets/img/Layer4.svg";
import right_gif from "../assets/img/right_gif.gif";
import phone1 from "../assets/img/phone.svg";
import heart from "../assets/img/heart.svg";

export default function Main() {
  return (
    <>
      <main className="pc">
        <img className="walpapper walpapper1" src={Layer1} alt="Layer1" />
        <img className="walpapper walpapper2" src={Layer2} alt="Layer2" />
        <div className="main_left">
          <div className="main_top background_block">
            <div className="left_img">
              <img className="img" src={phone1} alt="" />
            </div>
            <div className="left_text">
              <span>BeautyRank предоставляет</span>
              <span>таблицу рейтинга:</span>
              <span>
                <span className="font_heavy">ТОП-100</span> лучших мастеров
              </span>
              <span>перманентного макияжа.</span>
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
          <img className="img" src={right_gif} alt="gif" />
        </div>
      </main>

      <main className="mobile">
        <img className="walpapper walpapper3" src={Layer3} alt="Layer3" />
        <div className="phone_block">
          <div className="phone_img">
            <img className="img phone1" src={phone1} alt="phone1" />
          </div>
          <div className="left_text">
            BeautyRank предоставляет таблицу рейтинга:{" "}
            <span className="font_heavy">ТОП-100</span> лучших мастеров
            перманентного макияжа.
          </div>
          <img className="heart" src={heart} alt="heart" />
        </div>
      </main>
      <div className="main_bottom_flex">
        <div className="main_bottom_mobile background_block">
          <span className="font_heavy">
            Дайте своему таланту засветиться с{" "}
            <span className="font_black">BeautyRank:</span>
          </span>
          <span className="font_heavy">
            <span className="font_black">Ваш</span> путь к профессиональному
            признанию
          </span>
        </div>
          <img className="walpapper walpapper4" src={Layer4} alt="Layer4" />
      </div>
    </>
  );
}
