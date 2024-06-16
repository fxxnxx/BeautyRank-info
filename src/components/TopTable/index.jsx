import React from 'react';
import UserCard from '../UserCard';

import styles from './styles.module.css';

const TopTable = ({ tableData }) => (
  <div className={styles.topTable}>
    <div className={styles.cardMargin} />
    <table>
      <tbody>
        {tableData.map((user, rank) => <UserCard user={user} rank={rank} />)}
      </tbody>
    </table>
  </div>
);

export default TopTable;
