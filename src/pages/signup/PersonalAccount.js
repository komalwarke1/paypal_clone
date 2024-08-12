import React from "react";
import logo from "../../images/login/logo.png";
import styles from "./PersonalAccount.module.css";

export default function PersonalAccount() {
  return (
    <div className={styles.container}>
      <article>
        <img src={logo} alt="Logo" className={styles.logo} />
      </article>

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
          <p className={styles.noticeText}>
            By continuing, you confirm that you’re the owner or primary user
            of this mobile phone number. You agree to receive automated texts
            to confirm your phone number. Message and data rates may apply.
          </p>
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
        </form>
      </article>
    </div>
  );
}
