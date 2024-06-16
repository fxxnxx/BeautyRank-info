import React from 'react';

import styles from './styles.module.css';

const  UserCard = ({ user, rank }) => {
  let prizePlace;
  switch (rank) {
  case 1:
    prizePlace = '#FFFFA7';
    break;
  case 2:
    prizePlace = '#DADADB';
    break;
  case 3:
    prizePlace = '#D4B85D';
    break;

  default:
    prizePlace = '#FADFDA';
  }

  return (
    <div className={styles.userCardWrapper}>
      <div className={styles.userCard} style={{ background: prizePlace }}>
        <div className={styles.userRank}>
          <span>№{rank}</span>
        </div>
        <div className={styles.userInfoWrapper}>
          <span className={styles.userName}>{user.user_name}</span>
          <span className={styles.userScore}>{user.score}</span>
        </div>
        <div className={styles.userAvatar}>
          <img src={user.user_avatar} alt={user.user_name} />
        </div>
      </div>
      <div className={styles.cardMargin} />
    </div>
  )
};

export default UserCard;
