import type { WalletState } from './walletState';

import type { Notification } from './types';

export const createNotificationHelpers = (
  setWallet: React.Dispatch<React.SetStateAction<WalletState>>
) => {
  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif-${Date.now()}`,
      timestamp: new Date(),
      read: false
    };
    
    setWallet((prev: WalletState) => ({
      ...prev,
      notifications: [newNotification, ...prev.notifications].slice(0, 50) // Keep last 50 notifications
    }));
    
    return newNotification;
  };

  // Mark notification as read
  const markNotificationRead = (id: string) => {
    setWallet((prev: WalletState) => ({
      ...prev,
      notifications: prev.notifications.map((notif: Notification) => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    }));
  };

  return {
    addNotification,
    markNotificationRead
  };
};
