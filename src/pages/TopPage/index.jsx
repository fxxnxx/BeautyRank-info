import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import TopTable from '../../components/TopTable';
import search from '../../assets/img/search.svg';
import LayerBottom from '../../assets/img/LayerBottom.svg';
import Layer1 from '../../assets/img/Layer1.svg';
import Layer2 from '../../assets/img/Layer2.svg';
import Loader from '../../components/Loader';

import styles from './styles.module.css';

const TopPage = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tableDataForm = (data) => {
    const users = new Map();
    data.forEach((item) => {
      item.categories.forEach((category) => {
        category.nominations.forEach((nomination) => {
          nomination.members.forEach((member) => {
            const userId = member.user_id;
            const foundUser = users.get(userId);
            if (foundUser) {
              foundUser.score = foundUser.score + member.score;
              users.set(userId, foundUser);
            } else {
              users.set(userId, member);
            }
          })
        })
      })
    })

    return Array.from(users.values()).sort((a,b) => b.score - a.score);
  }

  const getTableData = () => {
    fetch('https://beautyrank.ru/api/v1/event/top_100/')
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        setTableData(tableDataForm(data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.mainPageWrapper}>
        <div className={styles.mainPageContainer}>
        <h1 className={styles.pageTitle}>Таблица рейтинга мастеров</h1>
        <h3 className={styles.textInfo}>топ 100</h3>
        <form className={styles.masterInputWrapper}>
          <input className={styles.masterInput} type="text" placeholder="Введите имя мастера" name="name" />
          <img className={styles.searchIcon} src={search} alt="search" />
        </form>
        {isLoading ? <Loader /> :<TopTable tableData={tableData} />}
        </div>
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
    </>
  );
};

export default TopPage;
