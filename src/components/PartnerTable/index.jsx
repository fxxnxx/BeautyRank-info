import React from 'react';
import { Achievement } from '../Achievement';
import { achievements } from '../../utils/constants';

import styles from './styles.module.css';

export const PartnerTable = () => {

  return (
    <div className={styles.partnerTable}>
      {achievements.map((achievement) => <Achievement achievement={achievement} />)}
    </div>
  )
};
