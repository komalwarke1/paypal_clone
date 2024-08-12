import React from 'react';
import styles from './HelpPage.module.css';

export default function HelpPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Help & Support</h1>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>Frequently Asked Questions (FAQs)</h2>
        <div className={styles.faq}>
          <details className={styles.faqItem}>
            <summary>How do I reset my password?</summary>
            <p>You can reset your password by going to the "Forgot Password" page and following the instructions. You'll receive an email with a link to reset your password.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>How do I check my account balance?</summary>
            <p>You can view your account balance on the dashboard after logging in. The balance will be displayed at the top of the page.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>What should I do if I notice unauthorized transactions?</summary>
            <p>If you notice any unauthorized transactions, please contact our support team immediately and report the issue.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>How do I contact customer support?</summary>
            <p>You can contact customer support by emailing us at support@financewebsite.com or calling us at 1-800-123-4567.</p>
          </details>
          {/* Add more FAQs as needed */}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>Contact Us</h2>
        <p>If you have any questions or need further assistance, please don't hesitate to reach out to us:</p>
        <ul className={styles.contactList}>
          <li>Email: <a href="mailto:support@financewebsite.com" className={styles.contactLink}>support@financewebsite.com</a></li>
          <li>Phone: 1-800-123-4567</li>
          <li>Address: 123 Finance St, Money City, CA 90210</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeader}>Helpful Resources</h2>
        <ul className={styles.resourcesList}>
          <li><a href="/user-guide" className={styles.resourceLink}>User Guide</a></li>
          <li><a href="/privacy-policy" className={styles.resourceLink}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" className={styles.resourceLink}>Terms of Service</a></li>
          <li><a href="/security-tips" className={styles.resourceLink}>Security Tips</a></li>
        </ul>
      </section>
    </div>
  );
}
