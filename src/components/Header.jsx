import React, { useState } from "react";
import { Link } from "react-router-dom";
import animlogo from "../assets/img/anim.logo.gif";
import Menu from "../components/Menu/Menu";
import burger from "../assets/img/burger.svg";

export default function Header() {
  const items = [
    { value: "Наши партнёры", to: "/partners" },
    { value: "Услуги", to: "/services" },
    { value: "О нас", to: "/about" },
    { value: "ТОП-100", to: "/top100" },
  ];

  const [menuActive, setMenuActive] = useState(false)
  return (
    <>
      <header className="pc">
        <Link className="logo" to="/" src="">
          <img src={animlogo} alt="logo" />
          <span className="font_black">BEAUTYRANK</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/partners" src="">
                Наши партнёры
              </Link>
            </li>
            <li>
              <Link to="/services">Услуги</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/top100">ТОП-100</Link>
            </li>
          </ul>
        </nav>
        <button class="contact-button">Связаться с нами</button>
      </header>

      <header className="mobile">
        <Link className="logo" to="/" src="">
          <img src={animlogo} alt="logo" />
          <span className="font_black">BEAUTYRANK</span>
        </Link>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <img src={burger} alt="burger" />
        </div>
      </header>
      <div className="headerEmptyBox"></div>
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </>
  );
}
