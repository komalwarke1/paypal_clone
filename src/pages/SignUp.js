import React from "react";
import { Link } from "react-router-dom";
import socials from "../images/signup/socials.jpg";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <section className={styles.container}>
      <article className={styles.imageSection}>
        <img src={socials} alt="Social Media" />
        <h1 className={styles.headingPrimary}>
          See for yourself why millions of people love PayPal.
        </h1>
      </article>

      <article>
        <h2 className={`${styles.headingSecondary} lg:hidden`}>
          See for yourself why millions of people love PayPal.
        </h2>

        <h2 className={styles.headingSecondary}>
          Sign up for PayPal, it's free.
        </h2>

        <h4 className={styles.headingTertiary}>
          Choose from 2 types of accounts:
        </h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link
              to="/personal-account"
              className={styles.listItemLink}
            >
              Personal Account
              <span className={styles.listItemDescription}>
                Shop in your country and around the world from your computer
                or on your mobile - all without sharing your financial info
                with the sellers.
              </span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              to="/business-account"
              className={styles.listItemLink}
            >
              Business Account
              <span className={styles.listItemDescription}>
                Accept payments and send invoices to your customers. It’s
                easier and more secure to sell to anyone, anywhere, and any
                time.
              </span>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
