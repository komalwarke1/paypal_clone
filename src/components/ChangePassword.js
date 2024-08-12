import React from 'react';
import styles from './ChangePassword.module.css';

export default function ChangePassword() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Change Password</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="current-password" className={styles.label}>
            Current Password:
          </label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="new-password" className={styles.label}>
            New Password:
          </label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirm-password" className={styles.label}>
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Change Password
        </button>
      </form>
    </div>
  );
}
