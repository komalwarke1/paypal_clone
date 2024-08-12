import React from 'react';
import styles from './RecentContacts.module.css';

export default function RecentContacts({ contacts }) {
  return (
    <div className={styles.recentContacts}>
      <h2>Recent Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
