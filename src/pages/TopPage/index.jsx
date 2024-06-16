import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopTable from '../../components/TopTable';

import styles from './styles.module.css';

const TopPage = () => {
  const [top, setTop] = useState([]);

  const formTop = (data) => {
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

    return Array.from(users.values());
  }

  useEffect(() => {
    fetch('https://beautyrank.ru/api/v1/event/top_100/')
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        setTop(formTop(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.mainPageWrapper}>
        <div className="">
        <h1 className={styles.pageTitle}>Таблица рейтинга мастеров</h1>
        <h3 className={styles.textInfo}>топ 100</h3>
        <input className={styles.masterInput} type="Введите имя мастера" />
        <TopTable users={top} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopPage;
