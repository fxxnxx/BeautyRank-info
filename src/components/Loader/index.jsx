import React from 'react';
import animlogo from '../../assets/img/anim.logo.gif';

import styles from './styles.module.css';

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <img src={animlogo} alt="logo" />
    <span className="font_black">Загрузка</span>
  </div>
);

export default Loader;
