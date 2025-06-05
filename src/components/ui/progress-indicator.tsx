
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Play } from 'lucide-react';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
  variant?: 'circular' | 'linear' | 'mini';
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  variant = 'linear',
  className = ''
}) => {
  if (variant === 'circular') {
    return (
      <div className={`flex items-center justify-center space-x-4 ${className}`}>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
              ${index < currentStep 
                ? 'bg-dzuwa-cyan border-dzuwa-cyan text-white soft-glow' 
                : index === currentStep 
                ? 'bg-dzuwa-purple/20 border-dzuwa-purple text-dzuwa-purple animate-gentle-pulse'
                : 'bg-dzuwa-gentle-blue border-dzuwa-cyan/30 text-gray-400'
              }
            `}>
              {index < currentStep ? (
                <CheckCircle size={20} />
              ) : index === currentStep ? (
                <Play size={20} />
              ) : (
                <Circle size={20} />
              )}
            </div>
            <span className={`text-xs font-medium ${
              index <= currentStep ? 'text-gray-700' : 'text-gray-400'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'mini') {
    return (
      <div className={`flex space-x-2 ${className}`}>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-dzuwa-cyan animate-soft-glow' 
                : 'bg-dzuwa-cyan/20'
            }`}
          />
        ))}
      </div>
    );
  }

  // Linear variant
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="progress-indicator h-2">
        <div 
          className="progress-bar animate-progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-600">
        <span>Step {currentStep + 1} of {steps.length}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <p className="text-center text-gray-700 font-medium">{steps[currentStep]}</p>
    </div>
  );
};
