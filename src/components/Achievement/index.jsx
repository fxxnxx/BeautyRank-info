import React from 'react';

import styles from './styles.module.css';

export const Achievement = ({ achievement }) => {
  return (
    <>
      <div className={styles.cardMargin} />
      <div className={styles.achievementWrapper}>
        <span className={styles.number}>№{achievement.id}</span>
        <div className={styles.achievementContent}>
          <span className={styles.grade}>{achievement.grade}</span>
          <span className={styles.year}>{achievement.year}</span>
        </div>
      </div>
    </>
  )
};
