import React from 'react';
import styles from './WalletBalance.module.css';

export default function WalletBalance({ balance }) {
  return (
    <div className={styles.walletBalance}>
      <h2>Wallet Balance</h2>
      <p>{balance}</p>
    </div>
  );
}
