import React, { useState, useEffect } from 'react';

const Notification = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const notificationStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    opacity: isVisible ? '1' : '0',
    transition: 'opacity 0.5s ease-in-out',
    pointerEvents: isVisible ? 'auto' : 'none',
    zIndex: '9999',  // Ensure it is above other components
  };

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
