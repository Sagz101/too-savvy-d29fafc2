
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface FeedbackData {
  type: 'bug' | 'feature' | 'general';
  rating: number;
  message: string;
  page: string;
  userAgent: string;
}

export const useUserFeedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFeedback = useCallback(async (feedbackData: Omit<FeedbackData, 'page' | 'userAgent'>) => {
    setIsSubmitting(true);
    
    try {
      const fullFeedbackData: FeedbackData = {
        ...feedbackData,
        page: window.location.pathname,
        userAgent: navigator.userAgent
      };

      // In a real implementation, you would send this to your backend
      console.log('Feedback submitted:', fullFeedbackData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for your feedback!', {
        description: 'Your input helps us improve the platform.'
      });
      
      return true;
    } catch (error) {
      toast.error('Failed to submit feedback', {
        description: 'Please try again later.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return {
    submitFeedback,
    isSubmitting
  };
};
