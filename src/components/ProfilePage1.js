import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfilePage1.module.css';

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <div className={styles.avatar}>
          <img src="https://via.placeholder.com/150" alt="User Avatar" />
        </div>
        <div className={styles.userInfo}>
          <h1>John Doe</h1>
          <p>Email: johndoe@example.com</p>
          <p>Member since: January 2020</p>
        </div>
        <div className={styles.editProfile}>
          <Link to="/edit-profile" className={styles.editButton}>
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Account Information */}
      <div className={styles.section}>
        <h2>Account Information</h2>
        <div className={styles.accountInfo}>
          <div className={styles.infoBox}>
            <h3>Account Balance</h3>
            <p>$12,345.67</p>
          </div>
          <div className={styles.infoBox}>
            <h3>Account Type</h3>
            <p>Premium</p>
          </div>
          <div className={styles.infoBox}>
            <h3>Last Login</h3>
            <p>August 9, 2024</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className={styles.section}>
        <h2>Recent Transactions</h2>
        <div className={styles.transactions}>
          <div className={styles.transactionItem}>
            <p><strong>Transaction ID:</strong> 1234567890</p>
            <p><strong>Date:</strong> August 8, 2024</p>
            <p><strong>Amount:</strong> $500.00</p>
            <p><strong>Status:</strong> Completed</p>
          </div>
          <div className={styles.transactionItem}>
            <p><strong>Transaction ID:</strong> 0987654321</p>
            <p><strong>Date:</strong> August 7, 2024</p>
            <p><strong>Amount:</strong> $120.00</p>
            <p><strong>Status:</strong> Completed</p>
          </div>
          {/* Add more transactions as needed */}
        </div>
      </div>

      {/* Security Settings */}
      <div className={styles.section}>
        <h2>Security Settings</h2>
        <div className={styles.securitySettings}>
          <p>Password: ••••••••</p>
          <Link to="/change-password" className={styles.changePasswordButton}>
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
}
