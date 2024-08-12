import React from 'react';
import styles from './FinanceDashboard.module.css';

export default function FinanceDashboard() {
  const transactions = [
    { id: 'T123456', date: '2024-08-08', description: 'Grocery Shopping', amount: '-$150.00', status: 'Completed' },
    { id: 'T123457', date: '2024-08-07', description: 'Salary Credit', amount: '+$3,000.00', status: 'Completed' },
    { id: 'T123458', date: '2024-08-06', description: 'Electricity Bill', amount: '-$100.00', status: 'Completed' },
    { id: 'T123459', date: '2024-08-05', description: 'Rent Payment', amount: '-$1,200.00', status: 'Completed' },
    { id: 'T123465', date: '2024-07-30', description: 'Investment Income', amount: '+$500.00', status: 'Completed' },
    { id: 'T123466', date: '2024-07-29', description: 'Coffee Shop', amount: '-$15.00', status: 'Completed' },
    { id: 'T123467', date: '2024-07-28', description: 'Movie Tickets', amount: '-$25.00', status: 'Completed' },
    { id: 'T123468', date: '2024-07-27', description: 'Car Maintenance', amount: '-$200.00', status: 'Completed' },
    { id: 'T123469', date: '2024-07-26', description: 'Travel Reimbursement', amount: '+$75.00', status: 'Completed' },
    { id: 'T123470', date: '2024-07-25', description: 'Health Insurance', amount: '-$180.00', status: 'Completed' },
    { id: 'T123471', date: '2024-07-24', description: 'Mobile Phone Bill', amount: '-$70.00', status: 'Completed' },
    { id: 'T123472', date: '2024-07-23', description: 'Online Course', amount: '-$120.00', status: 'Completed' },
    { id: 'T123473', date: '2024-07-22', description: 'Freelance Payment', amount: '+$250.00', status: 'Completed' },
    { id: 'T123474', date: '2024-07-21', description: 'Gift Purchase', amount: '-$40.00', status: 'Completed' },
    { id: 'T123475', date: '2024-07-20', description: 'Charity Donation', amount: '-$100.00', status: 'Completed' },
    { id: 'T123476', date: '2024-07-19', description: 'Pet Supplies', amount: '-$35.00', status: 'Completed' },
    { id: 'T123477', date: '2024-07-18', description: 'Subscription Service', amount: '-$15.00', status: 'Completed' },
    { id: 'T123478', date: '2024-07-17', description: 'Home Repairs', amount: '-$250.00', status: 'Completed' },
    { id: 'T123479', date: '2024-07-16', description: 'New Electronics', amount: '-$300.00', status: 'Completed' },
    { id: 'T123480', date: '2024-07-15', description: 'Bookstore Purchase', amount: '-$40.00', status: 'Completed' },
    { id: 'T123481', date: '2024-07-14', description: 'Restaurant Meal', amount: '-$70.00', status: 'Completed' },
    { id: 'T123482', date: '2024-07-13', description: 'Holiday Bonus', amount: '+$500.00', status: 'Completed' },
    { id: 'T123483', date: '2024-07-12', description: 'Music Concert', amount: '-$90.00', status: 'Completed' },
    { id: 'T123484', date: '2024-07-11', description: 'Bank Fee', amount: '-$10.00', status: 'Completed' },
    { id: 'T123485', date: '2024-07-10', description: 'Utility Bill', amount: '-$65.00', status: 'Completed' },
    { id: 'T123486', date: '2024-07-09', description: 'Online Shopping', amount: '-$150.00', status: 'Completed' },
    { id: 'T123487', date: '2024-07-08', description: 'Interest Earned', amount: '+$20.00', status: 'Completed' },
    { id: 'T123488', date: '2024-07-07', description: 'Rent Payment', amount: '-$1,200.00', status: 'Completed' },
    { id: 'T123489', date: '2024-07-06', description: 'Groceries', amount: '-$75.00', status: 'Completed' },
    { id: 'T123490', date: '2024-07-05', description: 'Restaurant Dinner', amount: '-$90.00', status: 'Completed' },
    { id: 'T123491', date: '2024-07-04', description: 'Freelance Project', amount: '+$400.00', status: 'Completed' },
    { id: 'T123492', date: '2024-07-03', description: 'Subscription Renewal', amount: '-$50.00', status: 'Completed' },
    { id: 'T123493', date: '2024-07-02', description: 'New Furniture', amount: '-$500.00', status: 'Completed' },
    { id: 'T123494', date: '2024-07-01', description: 'Gift Card Reload', amount: '+$100.00', status: 'Completed' },
    { id: 'T123495', date: '2024-06-30', description: 'Clothing Purchase', amount: '-$120.00', status: 'Completed' },
    { id: 'T123496', date: '2024-06-29', description: 'Home Decor', amount: '-$200.00', status: 'Completed' },
    { id: 'T123497', date: '2024-06-28', description: 'Fitness Tracker', amount: '-$80.00', status: 'Completed' },
    { id: 'T123498', date: '2024-06-27', description: 'Office Supplies', amount: '-$45.00', status: 'Completed' },
    { id: 'T123499', date: '2024-06-26', description: 'Meal Delivery', amount: '-$50.00', status: 'Completed' },
    { id: 'T123500', date: '2024-06-25', description: 'Health Insurance Payment', amount: '-$200.00', status: 'Completed' },
    { id: 'T123501', date: '2024-06-24', description: 'Subscription Service', amount: '-$15.00', status: 'Completed' },
    { id: 'T123502', date: '2024-06-23', description: 'Utility Bill Payment', amount: '-$90.00', status: 'Completed' },
    { id: 'T123503', date: '2024-06-22', description: 'Income Tax Refund', amount: '+$350.00', status: 'Completed' },
    { id: 'T123504', date: '2024-06-21', description: 'Home Improvement', amount: '-$800.00', status: 'Completed' },
    { id: 'T123505', date: '2024-06-20', description: 'Travel Reimbursement', amount: '+$60.00', status: 'Completed' },
    { id: 'T123506', date: '2024-06-19', description: 'Educational Expense', amount: '-$200.00', status: 'Completed' },
    { id: 'T123507', date: '2024-06-18', description: 'Grocery Delivery', amount: '-$95.00', status: 'Completed' },
    { id: 'T123508', date: '2024-06-17', description: 'Personal Loan Payment', amount: '-$300.00', status: 'Completed' },
    { id: 'T123509', date: '2024-06-16', description: 'Subscription Service', amount: '-$30.00', status: 'Completed' },
    { id: 'T123510', date: '2024-06-15', description: 'Health Checkup', amount: '-$120.00', status: 'Completed' },
    { id: 'T123511', date: '2024-06-14', description: 'Freelance Payment', amount: '+$350.00', status: 'Completed' },
    { id: 'T123512', date: '2024-06-13', description: 'Office Rent', amount: '-$1,000.00', status: 'Completed' },
    { id: 'T123513', date: '2024-06-12', description: 'Electricity Bill', amount: '-$110.00', status: 'Completed' },
    { id: 'T123514', date: '2024-06-11', description: 'Gift Purchase', amount: '-$50.00', status: 'Completed' },
    { id: 'T123515', date: '2024-06-10', description: 'Bank Interest', amount: '+$25.00', status: 'Completed' },
    { id: 'T123516', date: '2024-06-09', description: 'Gym Membership', amount: '-$55.00', status: 'Completed' },
    { id: 'T123517', date: '2024-06-08', description: 'Bookstore Purchase', amount: '-$70.00', status: 'Completed' },
    { id: 'T123518', date: '2024-06-07', description: 'Rental Income', amount: '+$600.00', status: 'Completed' },
    { id: 'T123519', date: '2024-06-06', description: 'Dinner Out', amount: '-$90.00', status: 'Completed' },
    { id: 'T123520', date: '2024-06-05', description: 'Subscription Renewal', amount: '-$45.00', status: 'Completed' },
    { id: 'T123521', date: '2024-06-04', description: 'Freelance Work', amount: '+$250.00', status: 'Completed' },
    { id: 'T123522', date: '2024-06-03', description: 'Online Shopping', amount: '-$130.00', status: 'Completed' }
    // Add more transactions here
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.transactions}>
        <h2>Recent Transactions</h2>
        <ul className={styles.transactionList}>
          {transactions.map(transaction => (
            <li key={transaction.id} className={styles.transactionItem}>
              <span className={styles.transactionId}>{transaction.id}</span>
              <span className={styles.transactionDate}>{transaction.date}</span>
              <span className={styles.transactionDescription}>{transaction.description}</span>
              <span className={`${styles.transactionAmount} ${transaction.status === 'Completed' ? styles.transactionCompleted : styles.transactionPending}`}>
                {transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
