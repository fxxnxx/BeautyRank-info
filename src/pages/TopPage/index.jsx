import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopTable from '../../components/TopTable';
import search from '../../assets/img/search.svg';
import LayerBottom from '../../assets/img/LayerBottom.svg';
import styles from './styles.module.css';
import Layer1 from '../../assets/img/Layer1.svg';
import Layer2 from '../../assets/img/Layer2.svg';
import Loader from '../../components/Loader';

const TopPage = () => {
  const [tableData, setTableData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

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

    const sortedUsers = Array.from(users.values()).sort((a, b) => b.score - a.score);

    sortedUsers.forEach((user, index) => {
      user.rank = index + 1;
    });

    return sortedUsers;
  }

  const getTableData = () => {
    fetch('https://beautyrank.ru/api/v1/event/top_100/')
      .then((response) => response.json())
      .then((data) => {
        !tableData.length && setTableData(tableDataForm(data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  const searchHandler = () => {
    setSearchData(tableData.filter(user => {
      return user.user_name.toLowerCase().includes(searchValue.toLowerCase())
    }))
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
          <h3 className={styles.textInfo}>Топ 100</h3>
          {
            isLoading
              ? <Loader />
              : <div>
                <form className={styles.masterInputWrapper}>
                  <input
                    className={styles.masterInput}
                    type="text"
                    placeholder="Введите имя мастера"
                    name="name"
                    onChange={event => setSearchValue(event.target.value)}
                  />
                  <img className={styles.searchIcon} src={search} alt="search" onClick={searchHandler} />
                </form>
                <TopTable tableData={searchData.length ? searchData : tableData} />
              </div>
          }
          <button className={styles.footerButton}>Связаться с нами</button>
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
