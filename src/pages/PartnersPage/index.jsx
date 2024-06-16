import React from 'react';
import Header from '../../components/Header';
import LayerBottom from '../../assets/img/LayerBottom.svg';
import Layer1 from '../../assets/img/Layer1.svg';
import Layer2 from '../../assets/img/Layer2.svg';
import PartnerSelector from '../../components/PartnerSelector';
import FooterLogo from '../../assets/img/FooterLogo.svg';

import styles from './styles.module.css';

const PartnersPage = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageWrapper}>
        <PartnerSelector />
        <img className={styles.leftBackgroundComet} src={Layer1} alt="Layer1" />
        <img className={styles.rightBackgroundComet} src={Layer2} alt="Layer2" />
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
      </footer>
    </>
  );
};

export default PartnersPage ;
