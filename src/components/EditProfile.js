import React from 'react';
import styles from './EditProfile.module.css';

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Profile</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" className={styles.button}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
