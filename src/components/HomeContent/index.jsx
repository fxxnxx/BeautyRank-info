import React from "react";
import styles from ".//styles.module.css";
import Layer1 from "../../assets/img/Layer1.svg";
import Layer2 from "../../assets/img/Layer2.svg";
import phone1 from "../../assets/img/phone.svg";
import Layer3 from "../../assets/img/Layer3.svg";
import Layer4 from "../../assets/img/Layer4.svg";
import heart from "../../assets/img/heart.svg";
import heart2 from "../../assets/img/heart2.png";
import phone2 from "../../assets/img/phone2.png";
import right_gif from "../../assets/img/right_gif.gif";

const HomeContent
  = () => (
  <>
    <img className={styles.cometLeft} src={Layer1} alt="Layer1" />
    <img className={styles.cometRight} src={Layer2} alt="Layer2" />
    <section className={styles.homePc}>
      <div className={styles.firstWrapper}>

        <div className={styles.block1}>
          <img className={styles.homePhone} src={phone1} alt="" />
          <div className={styles.block1Text}>
            <p>BeautyRank предоставляет таблицу рейтинга:</p>
            <p>
              <span className="font_heavy">ТОП-100</span> лучших мастеров
            </p>
            <p>перманентного макияжа.</p>
          </div>
        </div>
        <div className={styles.block2}>
          <p>Дайте своему таланту засветиться с <span className={styles.pink}>BeautyRank:</span></p>
          <p><span className={styles.pink}>Ваш</span> путь к профессиональному признанию!</p>
        </div>
        <div className={styles.block3}>
          <img className={styles.gifImg} src={right_gif} alt="gif" />
        </div>
      </div>
      <div className={styles.secondWrapper}>
        <div className={styles.block3Text}>
          <p>
            <span className={styles.pink}>BeautyRank</span> предлагает удобство, точность, простоту, объективность, открытость судейства, адаптивность сервиса к каждому чемпионату и постоянную поддержку.
          </p>
          <p>
            Откройте для себя мир профессионального татуажа и совершенствуйтесь вместе с нами!
          </p>
        </div>
        <img className={styles.homePhone2} src={phone2} alt="phone2" />
      </div>
    </section>
    <section className={styles.homeModile}>
      <img className={styles.cometLeftM} src={Layer3} alt="Layer3" />
      <img className={styles.cometLeftR} src={Layer4} alt="Layer4" />
      <img className={styles.heart2} src={heart2} alt="Layer4" />
      <section className={styles.block1M}>
        <img className={styles.homePhoneM} src={phone1} alt="Phone" />
        <div>
          <div className={styles.text1M}>
            <p>BeautyRank предоставляет таблицу рейтинга:</p>
            <p>
            <span className="font_heavy">ТОП-100</span> лучших мастеров
            </p>
            <p>перманентного макияжа.</p>
            <img className={styles.heartMob} src={heart} alt="heart" />
          </div>
        </div>
      </section>
      <section className={styles.block2M}>
        <p>Дайте своему таланту засветиться с <span className={styles.pink}>BeautyRank:</span></p>
        <p><span className={styles.pink}>Ваш</span> путь к профессиональному признанию!</p>
      </section>
      <section className={styles.block3M}>
        <div className={styles.block3MText}>
          <p>
            <span>BeautyRank </span>
            предлагает удобство, точность, простоту, объективность, открытость судейства, адаптивность сервиса к каждому чемпионату и постоянную поддержку.
          </p>
          <p>
            Откройте для себя мир профессионального татуажа и совершенствуйтесь вместе с нами!
          </p>
        </div>
        <img className={styles.homePhone2M} src={phone2} alt="phone2" />
      </section>

    </section>
  </>
);

export default HomeContent;
