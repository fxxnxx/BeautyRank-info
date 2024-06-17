import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/MainAbout';
import WalpapperBottom from '../../ui/WalpapperImg';
import FooterLogo from '../../assets/img/FooterLogo.svg';
import LayerBottom from '../../assets/img/LayerBottom.svg';
import Layer1 from '../../assets/img/Layer1.svg';
import Layer2 from '../../assets/img/Layer2.svg';
import Background from '../../assets/img/Background.png';
import BackAboutRight from '../../assets/img/BackAboutRight.png';
import BackAboutLeft from '../../assets/img/BackAboutLeft.png';
import phoneAbout1 from "../../assets/img/phoneAbout1.png";
import phoneAbout2 from "../../assets/img/phoneAbout2.png";
import heartDouble from "../../assets/img/heartDouble.png";
import switchBtn from '../../assets/img/switchBtn.svg';
import like from '../../assets/png/like.png'

import styles from './styles.module.css';

const AboutPage = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <>
      <Header />
      <div className={styles.aboutPageWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <div className={styles.phoneWrapper}>
                {isFirstImage ? (
                  <img
                    src={phoneAbout1}
                    alt="First Image"
                    className="image aboutPhone"
                  />
                ) : (
                  <img
                    src={phoneAbout2}
                    alt="Second Image"
                    className="image aboutPhone"
                  />
                )}
              </div>
              <div className={styles.sideContent}>
                <div className={styles.switchBtn}>
                  <img onClick={toggleImage} className="switchBtn" src={switchBtn} alt="switchBtn" />
                </div>
                <div>
                  <span className={styles.sideText}>
                    Видео делает оценки судей максимально  
                  </span>
                  <div className={styles.sideText} style={{ color: "#FF3E9B" }}>
                    объективными!
                  </div>
                </div>
                <div className={styles.heartWrapper}>
                  <img className={styles.heartDouble} src={heartDouble} alt="heartDouble" />
                </div>
              </div>
            </div>
            <div className={styles.phraseBlock}>
              <div>
                <span className={styles.phraseText}>Несколько отличных</span>
                <span className={styles.phraseText} style={{ color: "#FF3E9B" }}> фото</span>
              </div>
              <div>
                <span className={styles.phraseText} >Не могут показать больше чем одно</span>
                <span className={styles.phraseText} style={{ color: "#FF3E9B" }}> видео</span>
              </div>
            </div>
            <div className={styles.likeWrapper}>
              <img className="like" src={like} alt="like" />
            </div>
            <div className={styles.summaryBlock} style={{ width: '926px', height: '400px', padding: '89px 30px', marginTop: 0 }}>
              <div>
                <span className={styles.phraseText} style={{ fontSize: '32px' }}>Объективная оценка качества:</span>
              </div>
              <div>
                <span className={styles.phraseText} style={{ fontSize: '32px',  color: "#FF3E9B" }}>BeautyRank </span>
                <span className={styles.phraseText} style={{ fontSize: '32px' }}> использует продвинутую систему судейства, основанную на объективных критериях и мнениях экспертов. Это гарантирует, что каждый специалист оценивается справедливо и честно.</span>
              </div>
            </div>
          </div>
        </div>
        

        <img className={styles.leftBackgroundComet} src={BackAboutLeft} alt="img" />
        <img className={styles.rightBackgroundComet} src={BackAboutRight} alt="img" />
        <div className={styles.backgroundImgWrapper}>
          <img
            className={styles.backgroundImg}
            src={Background}
            alt="Background"
          />
        </div>
        <div className={styles.footerBackgroundWrapper}>
          <img
            className={styles.footerBackground}
            src={LayerBottom}
            alt="Layer_bottom"
          />
        </div>
      </div>
      <footer className={styles.partnersPageFooter}>
        <img className={styles.footerLogo} src={FooterLogo} alt="" />
        <button class={styles.contactUsBtn}>Связаться с нами</button>
      </footer>
    </>
  );
};

export default AboutPage;
