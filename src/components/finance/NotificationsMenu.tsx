
import React, { useState } from 'react';
import { 
  Bell, 
  Check,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWallet } from '@/services/wallet';
import { Notification } from '@/services/wallet/types';

export const NotificationsMenu: React.FC = () => {
  const { wallet, markNotificationRead } = useWallet();
  const [open, setOpen] = useState(false);
  
  const unreadCount = wallet.notifications.filter(n => !n.read).length;
  
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500 mr-1 flex-shrink-0" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />;
      case 'info':
      default:
        return <Info className="h-4 w-4 text-blue-500 mr-1 flex-shrink-0" />;
    }
  };
  
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  };
  
  const handleNotificationClick = (id: string) => {
    markNotificationRead(id);
  };
  
  const markAllAsRead = () => {
    wallet.notifications.forEach(notification => {
      if (!notification.read) {
        markNotificationRead(notification.id);
      }
    });
  };
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-[1.2rem] w-[1.2rem] text-white/70" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <Badge className="bg-red-500 text-[0.65rem] h-5 min-w-5 flex items-center justify-center p-0 rounded-full">
                {unreadCount > 9 ? '9+' : unreadCount}
              </Badge>
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-background border-border shadow-lg" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="h-8 text-xs flex items-center gap-1"
            >
              <Check className="h-3 w-3" />
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          {wallet.notifications.length === 0 ? (
            <div className="py-6 text-center text-sm text-white/50">
              No notifications
            </div>
          ) : (
            wallet.notifications.slice(0, 10).map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`flex items-start py-2 px-4 cursor-pointer ${notification.read ? 'opacity-60' : ''}`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <div className="flex">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{notification.title}</div>
                    <p className="text-xs text-white/70 mt-0.5 break-words">{notification.message}</p>
                    <p className="text-[0.65rem] text-white/50 mt-1">
                      {formatTimestamp(notification.timestamp)}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
        {wallet.notifications.length > 10 && (
          <div className="p-2 text-center border-t border-white/10">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs w-full flex items-center justify-center"
            >
              View all
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
