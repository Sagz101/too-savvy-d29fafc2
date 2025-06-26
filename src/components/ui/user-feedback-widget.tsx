
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useUserFeedback } from '@/hooks/useUserFeedback';
import { 
  MessageSquare, 
  Star, 
  Bug, 
  Lightbulb, 
  MessageCircle,
  X,
  Send
} from 'lucide-react';

export const UserFeedbackWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'bug' | 'feature' | 'general'>('general');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const { submitFeedback, isSubmitting } = useUserFeedback();

  const feedbackTypes = [
    { id: 'general' as const, label: 'General', icon: MessageCircle, color: 'bg-blue-500/20 text-blue-400' },
    { id: 'bug' as const, label: 'Bug Report', icon: Bug, color: 'bg-red-500/20 text-red-400' },
    { id: 'feature' as const, label: 'Feature Request', icon: Lightbulb, color: 'bg-green-500/20 text-green-400' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      return;
    }

    const success = await submitFeedback({
      type: feedbackType,
      rating,
      message: message.trim()
    });

    if (success) {
      setMessage('');
      setRating(0);
      setFeedbackType('general');
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-xl rounded-full w-14 h-14 p-0"
        aria-label="Open feedback form"
      >
        <MessageSquare size={24} />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 z-50 w-96 bg-slate-900/95 border border-purple-400/30 backdrop-blur-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <MessageSquare size={20} className="text-purple-400" />
            <span className="text-lg">Feedback</span>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white w-8 h-8 p-0"
          >
            <X size={16} />
          </Button>
        </div>
        <p className="text-sm text-gray-300">
          Help us improve T00 Savvy with your feedback
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Feedback Type */}
          <div>
            <label className="text-sm font-medium text-white mb-2 block">
              What type of feedback is this?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {feedbackTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Button
                    key={type.id}
                    type="button"
                    variant={feedbackType === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFeedbackType(type.id)}
                    className={`justify-start h-10 ${
                      feedbackType === type.id 
                        ? 'bg-purple-500 text-white' 
                        : 'border-gray-600 text-gray-300 hover:text-white hover:border-purple-400/50'
                    }`}
                  >
                    <Icon size={16} className="mr-2" />
                    {type.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm font-medium text-white mb-2 block">
              How would you rate your experience?
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setRating(star)}
                  className="w-8 h-8 p-0 hover:bg-transparent"
                >
                  <Star
                    size={20}
                    className={`${
                      star <= rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-400 hover:text-yellow-300'
                    }`}
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-white mb-2 block">
              Tell us more
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts, report issues, or suggest improvements..."
              className="bg-slate-800 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
              required
            />
          </div>

          {/* Submit */}
          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              disabled={!message.trim() || isSubmitting}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Feedback
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              Cancel
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-400">
            Your feedback helps us build a better platform for all creators
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
