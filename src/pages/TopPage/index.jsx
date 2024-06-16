import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles.module.css';

const TopPage = () => {
  return (
    <>
      <Header />
      Таблица рейтинга мастеров
      топ 100
      введите имя мастера
      №1
      №2
      №3
      №4
      <div className={styles.mainPageWrapper}>123123123</div>
      <Footer />
    </>
  );
};

export default TopPage;
