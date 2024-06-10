import React from "react";
import FooterLogo from "../assets/img/FooterLogo.svg";

export default function Footer() {
  return (
    <>
      <footer className="pc">
        <img className="footer_img" src={FooterLogo} alt="" />
      </footer>
      <footer className="mobile">
        <button class="contact-button">Связаться с нами</button>
      </footer>
    </>
  );
}
