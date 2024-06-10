import React from "react";
import Layer3 from "../assets/img/Layer3.svg";
import Layer4 from "../assets/img/Layer4.svg";

export default function MainPartners() {
  return (
    <>
      <img className="walpapper walpapper3" src={Layer3} alt="Layer3" />
      <img className="walpapper walpapper4" src={Layer4} alt="Layer4" />
      <div className="section">
        <div class="section_text font_heavy">Наши партнёры</div>
      </div>
    </>
  );
}
