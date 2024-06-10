import React from "react";
import Card1 from "../assets/img/Card1.svg";
import Card2 from "../assets/img/Card2.svg";

export default function Header() {
  return (
    <>
    <div className="section">
      <div class="section_text font_heavy">Наши услуги</div>
      <div class="section_img">
        <img src={Card1} alt="Card1" />
        <img src={Card2} alt="Card2" />
      </div>
    </div>
    </>
  );
}