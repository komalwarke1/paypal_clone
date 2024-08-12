import React from 'react';
import styles from './ActivityCard.module.css';

export default function ActivityCard({ activity }) {
  return (
    <div className={styles.activityCard}>
      <h3>{activity.title}</h3>
      <p>{activity.date}</p>
      <p>{activity.amount}</p>
      <p>Status: {activity.status}</p>
    </div>
  );
}
