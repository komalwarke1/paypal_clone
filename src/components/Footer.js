import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <ul className={`${styles.footerList} ${styles.footerListRow}`}>
            <li className={styles.footerListItem}><Link to="/help-and-contact" className={styles.footerLink}>Help and Contact</Link></li>
            <li className={styles.footerListItem}><Link to="/fees" className={styles.footerLink}>Fees</Link></li>
            <li className={styles.footerListItem}><Link to="/security" className={styles.footerLink}>Security</Link></li>
            <li className={styles.footerListItem}><Link to="/features" className={styles.footerLink}>Features</Link></li>
            <li className={styles.footerListItem}><Link to="/shop" className={styles.footerLink}>Shop</Link></li>
            <li className={styles.footerListItem}><Link to="/feedback" className={styles.footerLink}>Feedback</Link></li>
          </ul>
        </div>

        <hr />

        <div className={`${styles.footerSection} ${styles.footerListRow}`}>
          <ul className={`${styles.footerList} ${styles.footerListRow}`}>
            <li className={styles.footerListItem}><Link to="/about" className={styles.footerLink}>About</Link></li>
            <li className={styles.footerListItem}><Link to="/newsroom" className={styles.footerLink}>Newsroom</Link></li>
            <li className={styles.footerListItem}><Link to="/jobs" className={styles.footerLink}>Jobs</Link></li>
            <li className={styles.footerListItem}><Link to="/developers" className={styles.footerLink}>Developers</Link></li>
            <li className={styles.footerListItem}><Link to="/partners" className={styles.footerLink}>Partners</Link></li>
          </ul>

          <ul className={`${styles.footerList} ${styles.footerListRow}`}>
            <li className={styles.footerListItem}><Link to="/contact-us" className={styles.footerLink}>Contact Us</Link></li>
            <li className={styles.footerListItem}><Link to="/terms-of-service" className={styles.footerLink}>Terms of Service</Link></li>
            <li className={styles.footerListItem}><Link to="/investor-relations" className={styles.footerLink}>Investor Relations</Link></li>
            <li className={styles.footerListItem}><Link to="/corporate-responsibility" className={styles.footerLink}>Corporate Responsibility</Link></li>
            <li className={styles.footerListItem}><Link to="/accessibility" className={styles.footerLink}>Accessibility</Link></li>
            <li className={styles.footerListItem}><Link to="/privacy" className={styles.footerLink}>Privacy</Link></li>
            <li className={styles.footerListItem}><Link to="/legal" className={styles.footerLink}>Legal</Link></li>
          </ul>
        </div>

        <p className={styles.footerDisclaimer}>
          PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
          Payment Services Act (“PS Act”) with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </footer>

      {/* Fixed Notification Button */}
      <div className={styles.notificationButton}>
        <Link
          to="/notifications"
          className={styles.notificationLink}
        >
          <FontAwesomeIcon icon={faBell} className={styles.notificationIcon} />
          {/* Notification Badge */}
          <span className={styles.notificationBadge}>
            5
          </span>
        </Link>
      </div>
    </>
  );
}
