import React from 'react';
import styles from './AllRequests.module.css';

export default function AllRequests({ requests }) {
  return (
    <div className={styles.allRequests}>
      <h2>All Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index} className={styles.requestItem}>
            <span>{request.sender}</span>
            <span>{request.date}</span>
            <span>{request.amount}</span>
            <span>Status: {request.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
