import React from "react";
import logo from "../../images/login/logo.png";
import styles from "./BusinessAccount.module.css";

export default function BusinessAccount() {
  return (
    <div className={styles.container}>
      <article>
        <img src={logo} alt="Logo" className={styles.logo} />
      </article>

      <h2 className={styles.heading}>
        Sign up for a Business account
      </h2>

      <article className={styles.formSection}>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or mobile number"
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.submitButton}>
            Continue
          </button>
        </form>
      </article>
    </div>
  );
}
