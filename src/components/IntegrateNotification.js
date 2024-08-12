import React, { useState } from 'react';
import Notification from './Notification';

export default function App() {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div>
      <button onClick={handleShowNotification}>Show Notification</button>
      {showNotification && (
        <Notification message="Transaction completed successfully!" type="success" />
      )}
    </div>
  );
}
