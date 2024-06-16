import React, { useState } from "react";
import Card1 from "../assets/img/Card1.svg";
import Card2 from "../assets/img/Card2.svg";
import ButtonImage2 from "../assets/img/ButtonImage1.svg";
import ButtonImage1 from "../assets/img/ButtonImage2.svg";

export default function Services() {
  const [showFirstCard, setShowFirstCard] = useState(true);
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
    if (animating) return;
    setAnimating(true);
    setShowFirstCard(!showFirstCard);
    setButtonImage(buttonImage === ButtonImage1 ? ButtonImage2 : ButtonImage1); // Переключение между ButtonImage1 и ButtonImage2
    setTimeout(() => {
      setAnimating(false);
    }, 500); // Время, соответствующее длительности transition в CSS
  };

  const [buttonImage, setButtonImage] = useState(ButtonImage1);

  return (
    <>
      <div className="section pc">
        <div class="section_text font_heavy">Наши услуги</div>
        <div class="section_img">
          <img src={Card1} alt="Card1" />
          <img src={Card2} alt="Card2" />
        </div>
      </div>

      <div className="mobile">
        <div className="section">
          <div className="section_text font_heavy">Наши услуги</div>
          <div className="section_img">
            <div className="full_card">
              <img
                className={`card ${
                  showFirstCard ? "card1 exit-left" : "card2 enter-left"
                }`}
                src={Card1}
                alt="Card1"
              />
              <button onClick={handleToggle} disabled={animating}>
                <img src={buttonImage} alt="" />
              </button>
            </div>
            <div className="full_card">
              <img
                className={`card ${
                  showFirstCard ? "card2 enter-right" : "card1 exit-right"
                }`}
                src={Card2}
                alt="Card2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
