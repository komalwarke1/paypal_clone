import React, { useState } from "react";
import styles from './SendRequest.module.css';

export default function SendRequest() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Request sent to:", email, "Amount:", amount);
  };

  return (
    <div className={styles.sendRequest}>
      <h2>Send Request</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Recipient Email:</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>Amount:</label>
          <input
            type="number"
            id="amount"
            className={styles.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
}
