import React from 'react';
import UserCard from '../UserCard';

import styles from './styles.module.css';

const TopTable = ({ tableData }) => (
  <div className={styles.topTable}>
    <div className={styles.cardMargin} />
    <table>
      <tbody>
        {tableData.map((user) => <UserCard user={user} rank={user.rank} />)}
      </tbody>
    </table>
  </div>
);

export default TopTable;
