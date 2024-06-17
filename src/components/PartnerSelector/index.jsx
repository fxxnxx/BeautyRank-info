import React, { useState } from 'react';
import switchBtn from '../../assets/img/switchBtn.svg';
import { PartnerCard } from '../PartnerCard';
import { PartnerTable } from '../PartnerTable';

import styles from './styles.module.css';

const PartnerSelector = () => {
  const [activePartner, setActivePartner] = useState(false);
  const setActiveCard = (value) => {
    setActivePartner(value)
  };

  return (
    <div className={styles.mainPageContainer}>
      {!activePartner && <h1 className={styles.pageTitle}>Наши партнеры</h1>}
      <div className={styles.cardWrapper}>
      {
        activePartner ? (
          <div className={styles.singleCardWrapper} style={{ margin: '70px 0 -70px 0' }}>
            <PartnerCard activePartner={activePartner} setActiveCard={setActiveCard} number={activePartner} />
            <span className={styles.partnerName} >{activePartner === 1 ? 'Игорь Колорадо' : 'Мария Волохова'}</span>
            <PartnerTable />
          </div>
        ) : (
          <>
            <PartnerCard activePartner={activePartner} setActiveCard={setActiveCard} number={1} />
            <PartnerCard activePartner={activePartner} setActiveCard={setActiveCard} number={2} />
            <div className={styles.switchBtnWrapper}>
              <img
                className={styles.switchBtn}
                src={switchBtn}
                alt="Layer_bottom"
              />
            </div>
          </>
        )
      }
      </div>
    </div>
  )
};

export default PartnerSelector;
