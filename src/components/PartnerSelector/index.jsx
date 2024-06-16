import React from 'react';
import switchBtn from '../../assets/img/switchBtn.svg';
import colorado from '../../assets/png/Colorado.png';
import volohova from '../../assets/png/Volohova.png';

import styles from './styles.module.css';

const PartnerSelector = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h1 className={styles.pageTitle}>Наши партнеры</h1>
      <div className={styles.cardWrapper}>
        <div className={styles.partnerCard}>
          <img
            className={styles.profileImg}
            src={colorado}
            alt="colorado"
          />
        </div>
        <div className={styles.partnerCard}>
          <img
            className={styles.profileImg}
            src={volohova}
            alt="volohova"
          />
        </div>
        <div className={styles.switchBtnWrapper}>
          <img
            className={styles.switchBtn}
            src={switchBtn}
            alt="Layer_bottom"
          />
        </div>
      </div>
    </div>
  )
};

export default PartnerSelector;
