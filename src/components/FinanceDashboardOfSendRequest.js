import React from 'react';
import AllSends from './AllSends';
import AllRequests from './AllRequests';
import AllContacts from './AllContacts';
import styles from './FinanceDashboardOfSendRequest.module.css';

export default function FinanceDashboard() {
  const sends = [
    { recipient: 'John Doe', date: 'August 10, 2024', amount: '$500.00', status: 'Completed' },
    { recipient: 'Jane Smith', date: 'August 9, 2024', amount: '$200.00', status: 'Pending' },
    { recipient: 'Robert Brown', date: 'August 8, 2024', amount: '$350.00', status: 'Completed' },
    { recipient: 'Emily Johnson', date: 'August 7, 2024', amount: '$150.00', status: 'Completed' },
    { recipient: 'Michael Davis', date: 'August 6, 2024', amount: '$400.00', status: 'Pending' },
    { recipient: 'Sarah Wilson', date: 'August 5, 2024', amount: '$275.00', status: 'Completed' },
    { recipient: 'David Miller', date: 'August 4, 2024', amount: '$600.00', status: 'Completed' },
    { recipient: 'Linda Martinez', date: 'August 3, 2024', amount: '$120.00', status: 'Pending' },
    { recipient: 'Christopher Garcia', date: 'August 2, 2024', amount: '$330.00', status: 'Completed' },
    { recipient: 'Jessica Rodriguez', date: 'August 1, 2024', amount: '$290.00', status: 'Completed' },
    { recipient: 'William Hernandez', date: 'July 31, 2024', amount: '$520.00', status: 'Completed' },
    { recipient: 'Elizabeth Lee', date: 'July 30, 2024', amount: '$450.00', status: 'Pending' },
    { recipient: 'Daniel White', date: 'July 29, 2024', amount: '$310.00', status: 'Completed' },
    { recipient: 'Ashley Thompson', date: 'July 28, 2024', amount: '$220.00', status: 'Completed' },
    { recipient: 'Matthew Clark', date: 'July 27, 2024', amount: '$480.00', status: 'Pending' },
    { recipient: 'Amanda Lewis', date: 'July 26, 2024', amount: '$370.00', status: 'Completed' },
    { recipient: 'Joshua Young', date: 'July 25, 2024', amount: '$340.00', status: 'Completed' },
    { recipient: 'Olivia Walker', date: 'July 24, 2024', amount: '$260.00', status: 'Pending' },
    { recipient: 'James Hall', date: 'July 23, 2024', amount: '$530.00', status: 'Completed' },
    { recipient: 'Patricia Allen', date: 'July 22, 2024', amount: '$410.00', status: 'Completed' },
];


const requests = [
  { sender: 'Jane Doe', date: 'August 8, 2024', amount: '$150.00', status: 'Completed' },
  { sender: 'John Smith', date: 'August 7, 2024', amount: '$100.00', status: 'Pending' },
  { sender: 'Alice Johnson', date: 'August 6, 2024', amount: '$250.00', status: 'Completed' },
  { sender: 'Bob Brown', date: 'August 5, 2024', amount: '$300.00', status: 'Pending' },
  { sender: 'Charlie Green', date: 'August 4, 2024', amount: '$400.00', status: 'Completed' },
  { sender: 'Diana White', date: 'August 3, 2024', amount: '$120.00', status: 'Pending' },
  { sender: 'Ethan Black', date: 'August 2, 2024', amount: '$500.00', status: 'Completed' },
  { sender: 'Fiona Blue', date: 'August 1, 2024', amount: '$50.00', status: 'Completed' },
  { sender: 'George Red', date: 'July 31, 2024', amount: '$75.00', status: 'Pending' },
  { sender: 'Hannah Purple', date: 'July 30, 2024', amount: '$600.00', status: 'Completed' }
];


const contacts = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { name: 'Bob Brown', email: 'bob.brown@example.com' },
  { name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { name: 'Diana Evans', email: 'diana.evans@example.com' },
  { name: 'Ethan Fox', email: 'ethan.fox@example.com' },
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
  { name: 'Zachary Adams', email: 'zachary.adams@example.com' },
  { name: 'Aaron Bennett', email: 'aaron.bennett@example.com' },
  { name: 'Betty Campbell', email: 'betty.campbell@example.com' },
  { name: 'Chris Daniels', email: 'chris.daniels@example.com' },
  { name: 'Donna Edwards', email: 'donna.edwards@example.com' },
  { name: 'Evan Foster', email: 'evan.foster@example.com' },
  { name: 'Grace Hall', email: 'grace.hall@example.com' },
  { name: 'Henry Ingram', email: 'henry.ingram@example.com' },
  { name: 'Isabella Johnson', email: 'isabella.johnson@example.com' },
  { name: 'Jack Kelly', email: 'jack.kelly@example.com' },
  { name: 'Karen Lewis', email: 'karen.lewis@example.com' },
  { name: 'Liam Martin', email: 'liam.martin@example.com' },
  { name: 'Mia Norris', email: 'mia.norris@example.com' },
  { name: 'Noah Owens', email: 'noah.owens@example.com' },
  { name: 'Olivia Parker', email: 'olivia.parker@example.com' },
  { name: 'Peter Quinn', email: 'peter.quinn@example.com' },
  { name: 'Quinn Reed', email: 'quinn.reed@example.com' },
  { name: 'Ruby Scott', email: 'ruby.scott@example.com' },
  { name: 'Steve Turner', email: 'steve.turner@example.com' },
  { name: 'Tara Upton', email: 'tara.upton@example.com' },
  { name: 'Ulysses Vance', email: 'ulysses.vance@example.com' },
  { name: 'Vanessa White', email: 'vanessa.white@example.com' },
  { name: 'Walter Xander', email: 'walter.xander@example.com' },
  { name: 'Xena Young', email: 'xena.young@example.com' },
  { name: 'Yasmine Zane', email: 'yasmine.zane@example.com' },
  { name: 'Zane Allen', email: 'zane.allen@example.com' },
  { name: 'Amy Brooks', email: 'amy.brooks@example.com' },
  { name: 'Brian Carter', email: 'brian.carter@example.com' },
  { name: 'Cindy Diaz', email: 'cindy.diaz@example.com' },
  { name: 'Derek Evans', email: 'derek.evans@example.com' },
  { name: 'Ella Flores', email: 'ella.flores@example.com' },
 
 
];
  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <AllSends sends={sends} />
        <AllRequests requests={requests} />
      </div>
      <div className={styles.column}>
        <AllContacts contacts={contacts} />
      </div>
    </div>
  );
}
