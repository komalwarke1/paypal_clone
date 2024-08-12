import React from 'react';
import styles from './AllSends.module.css';

export default function AllSends({ sends }) {
  return (
    <div className={styles.allSends}>
      <h2>All Sends</h2>
      <ul>
        {sends.map((send, index) => (
          <li key={index} className={styles.sendItem}>
            <span>{send.recipient}</span>
            <span>{send.date}</span>
            <span>{send.amount}</span>
            <span>Status: {send.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
