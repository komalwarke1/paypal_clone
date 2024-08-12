import React from 'react';
import styles from './FinanceCards.module.css';

export default function FinanceCards({ cards }) {
  return (
    <div className={styles.financeCards}>
      <h2>Your Finance Cards</h2>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3>{card.type}</h3>
            <p>Card Number: **** **** **** {card.last4}</p>
            <p>Expiry: {card.expiry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
