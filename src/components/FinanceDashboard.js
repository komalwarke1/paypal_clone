import React from 'react';
import SendRequest from './SendRequest';
import RecentContacts from './RecentContacts';
import MoneyShared from './MoneyShared';
import styles from './FinanceDashboard.module.css';

const contacts = [
  { name: 'Jane Doe', email: 'janedoe@example.com' },
  { name: 'John Smith', email: 'johnsmith@example.com' },
  // Add more contacts as needed
];

const moneyShared = [
  { title: 'Payment to Freelancer', date: 'August 8, 2024', amount: '$500.00', status: 'Completed' },
  { title: 'Refund Processed', date: 'August 7, 2024', amount: '$120.00', status: 'Completed' },
  // Add more money shared records as needed
];

export default function FinanceDashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Finance Dashboard</h1>

      <div className={styles.section}>
        <SendRequest />
      </div>

      <div className={styles.section}>
        <RecentContacts contacts={contacts} />
      </div>

      <div className={styles.section}>
        <MoneyShared moneyShared={moneyShared} />
      </div>
    </div>
  );
}
