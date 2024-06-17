import React from 'react';
import colorado from '../../assets/png/Colorado.png';
import volohova from '../../assets/png/Volohova.png';

import styles from './styles.module.css';

export const PartnerCard = ({ activePartner, setActiveCard, number }) => (
  <div className={styles.partnerCard} onClick={() => setActiveCard(activePartner === number ? false : number)}>
    <img
      src={number === 1 ? colorado : volohova}
      alt={number === 1 ? 'colorado' : 'volohova'}
      />
  </div>
);
