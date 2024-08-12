import React from 'react';
import styles from './MoneyShared.module.css';

export default function MoneyShared({ moneyShared }) {
  return (
    <div className={styles.moneyShared}>
      <h2>Money Shared</h2>
      <ul>
        {moneyShared.map((transaction, index) => (
          <li key={index} className={styles.transactionItem}>
            <span>{transaction.title}</span>
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
            <span>Status: {transaction.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
