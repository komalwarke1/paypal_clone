import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/login/logo.png";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <form className={styles.form}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email or mobile number"
          required
          className={styles.input}
        />
        <a href="/forgot-password" className={styles.forgotLink}>
          Forgot Email?
        </a>
        <button type="submit" className={styles.submitButton}>
          Next
        </button>
      </form>
      <p className={styles.orText}>or</p>
      <Link
        to="/sign-up"
        className={styles.signUpLink}
      >
        Sign Up
      </Link>
    </div>
  );
}
