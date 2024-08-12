import React from 'react';
import styles from './AllContacts.module.css';

export default function AllContacts({ contacts }) {
  return (
    <div className={styles.allContacts}>
      <h2>All Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.contactItem}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
