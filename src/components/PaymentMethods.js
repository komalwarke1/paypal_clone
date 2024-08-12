import React from 'react';
import LinkBank from './LinkBank';
import LinkCard from './LinkCard';
import WalletBalance from './WalletBalance';
import styles from './PaymentMethods.module.css';

export default function PaymentMethods() {
  const walletBalance = "$1,234.56"; // Example balance

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Payment Methods</h1>

      <div className={styles.section}>
        <WalletBalance balance={walletBalance} />
      </div>

      <div className={styles.section}>
        <LinkBank />
      </div>

      <div className={styles.section}>
        <LinkCard />
      </div>
    </div>
  );
}
