
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, AlertCircle, Info, X } from 'lucide-react';

interface UXFeedbackProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  message: string;
  className?: string;
  onDismiss?: () => void;
  dismissible?: boolean;
}

export const UXFeedback: React.FC<UXFeedbackProps> = ({
  type,
  title,
  message,
  className,
  onDismiss,
  dismissible = false
}) => {
  const baseClasses = "flex items-start gap-3 p-4 rounded-xl border transition-all duration-300";
  
  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300",
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300",
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300"
  };
  
  const icons = {
    success: Check,
    error: AlertCircle,
    warning: AlertCircle,
    info: Info
  };
  
  const Icon = icons[type];
  
  return (
    <div 
      className={cn(baseClasses, typeStyles[type], className)}
      role="alert"
      aria-live="polite"
    >
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold mb-1 text-sm">{title}</h4>
        )}
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
