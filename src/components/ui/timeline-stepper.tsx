import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface TimelineStep {
  title: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

interface TimelineStepperProps {
  steps: TimelineStep[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const TimelineStepper: React.FC<TimelineStepperProps> = ({
  steps,
  orientation = 'horizontal',
  className = ''
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={`space-y-6 ${className}`}>
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-600" />
            )}
            
            {/* Step Icon */}
            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              step.completed 
                ? 'bg-web3-green border-web3-green'
                : step.current
                ? 'bg-web3-cyan border-web3-cyan animate-pulse'
                : 'bg-gray-800 border-gray-600'
            }`}>
              {step.completed ? (
                <CheckCircle size={20} className="text-white" />
              ) : (
                <Circle size={20} className={step.current ? 'text-white' : 'text-gray-400'} />
              )}
            </div>
            
            {/* Step Content */}
            <div className="ml-4 flex-1">
              <h3 className={`font-semibold ${
                step.completed || step.current ? 'text-white' : 'text-gray-400'
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm ${
                step.completed || step.current ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="contents">
          <div className="flex flex-col items-center text-center flex-1">
            {/* Step Icon */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 mb-3 ${
              step.completed 
                ? 'bg-web3-green border-web3-green'
                : step.current
                ? 'bg-web3-cyan border-web3-cyan animate-pulse'
                : 'bg-gray-800 border-gray-600'
            }`}>
              {step.completed ? (
                <CheckCircle size={20} className="text-white" />
              ) : (
                <span className={`font-bold ${step.current ? 'text-white' : 'text-gray-400'}`}>
                  {index + 1}
                </span>
              )}
            </div>
            
            {/* Step Content */}
            <div>
              <h3 className={`font-semibold mb-1 ${
                step.completed || step.current ? 'text-white' : 'text-gray-400'
              }`}>
                {step.title}
              </h3>
              <p className={`text-xs ${
                step.completed || step.current ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {step.description}
              </p>
            </div>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
              steps[index + 1].completed ? 'bg-web3-green' : 'bg-gray-600'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};