import React from 'react';
import ActivityCard from './ActivityCard';
import SendRequest from './SendRequest';
import RecentContacts from './RecentContacts';
import FinanceCards from './FinanceCards';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const activities = [
    { title: 'Payment Received', date: 'August 10, 2024', amount: '$150.00', status: 'Completed' },
    { title: 'Bill Payment', date: 'August 9, 2024', amount: '$200.00', status: 'Completed' },
    { title: 'Money Sent', date: 'August 7, 2024', amount: '$75.00', status: 'Completed' },
    { title: 'Refund Issued', date: 'August 6, 2024', amount: '$30.00', status: 'Pending' },
    { title: 'Payment Received', date: 'August 5, 2024', amount: '$120.00', status: 'Completed' },
    { title: 'Transfer to Bank', date: 'August 4, 2024', amount: '$500.00', status: 'Completed' },
    // Add more activities
  ];

  const contacts = [
    { name: 'Jane Doe', email: 'jane.doe@example.com' },
    { name: 'John Smith', email: 'john.smith@example.com' },
    { name: 'Charlie Davis', email: 'charlie.davis@example.com' },
    { name: 'Diana Evans', email: 'diana.evans@example.com' },
    { name: 'Ethan Fox', email: 'ethan.fox@example.com' },
    { name: 'Fiona Green', email: 'fiona.green@example.com' },
    { name: 'George Harris', email: 'george.harris@example.com' },
    { name: 'Hannah Isaac', email: 'hannah.isaac@example.com' },
    { name: 'Ian Jenkins', email: 'ian.jenkins@example.com' },
    { name: 'Julia King', email: 'julia.king@example.com' },
    { name: 'Kyle Lee', email: 'kyle.lee@example.com' },
    { name: 'Laura Miller', email: 'laura.miller@example.com' },
    { name: 'Mike Nelson', email: 'mike.nelson@example.com' },
    { name: 'Natalie O’Brien', email: 'natalie.obrien@example.com' },
    { name: 'Oscar Peterson', email: 'oscar.peterson@example.com' },
    { name: 'Paul Quinn', email: 'paul.quinn@example.com' },
    { name: 'Rachel Roberts', email: 'rachel.roberts@example.com' },
    { name: 'Samuel Thompson', email: 'samuel.thompson@example.com' },
    { name: 'Tina Underwood', email: 'tina.underwood@example.com' },
    { name: 'Victor Valdez', email: 'victor.valdez@example.com' },
    { name: 'Wendy Wilson', email: 'wendy.wilson@example.com' },
    { name: 'Xander Young', email: 'xander.young@example.com' },
    { name: 'Yvonne Zimmerman', email: 'yvonne.zimmerman@example.com' },
    { name: 'Zachary Adams', email: 'zachary.adams@example.com' }
    // Add more contacts
  ];

  const cards = [
    { type: 'Visa', last4: '1234', expiry: '08/24' },
    { type: 'Mastercard', last4: '5678', expiry: '11/25' },
    
    // Add more cards
  ];

  return (
    <div className={styles.dashboard}>
      
      <div className={styles.topSection}>
        <div className={styles.activities}>
          <h2>Recent Activities</h2>
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
        <RecentContacts contacts={contacts} />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.sendRequest}>
          <SendRequest />
        </div>
        <div className={styles.financeCards}>
          <FinanceCards cards={cards} />
        </div>
      </div>
    </div>
  );
}
