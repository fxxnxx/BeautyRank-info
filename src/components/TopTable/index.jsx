import React, { useEffect } from 'react';
import styles from './styles.module.css';

export default function TopTable({ users }) {
  useEffect(() => {
    console.log('[TopTable] users: ', users);
  }, [users]);

  return (
    <div className={styles.topTable}>
      <table>
        <thead>
        <tr>
          <th>User ID | </th>
          <th>User Avatar | </th>
          <th>User Name | </th>
          <th>Score</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={user.user_id}>
            <td>{user.user_id}</td>
            <td>
              <img src={user.user_avatar} alt={user.user_name} />
            </td>
            <td>{user.user_name}</td>
            <td>{user.score}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};
