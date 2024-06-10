import React from "react";
import phone2 from "../assets/img/phone2.svg";
import heart2 from "../assets/img/heart2.svg"

export default function article() {
  return (
    <>
      <article>
        <div className="article_block background_block">
          <span>
            <span className="font_black">BeautyRank</span> предлагает удобство,
            точность, простоту, объективность, открытость судейства,
            адаптивность сервиса к каждому чемпионату и постоянную поддержку.
          </span>
          <span>&#8203;</span>
          <span>
            Откройте для себя мир профессионального татуажа и совершенствуйтесь
            вместе с нами!
          </span>
        </div>
        <img className="phone2" src={phone2} alt="phone2" />
          <img className="heart2" src={heart2} alt="heart" />
      </article>
    </>
  );
}
