
import React from 'react';
import { Check, Wallet, Shield, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OnboardingStepperProps {
  currentStep: number;
  className?: string;
}

const steps = [
  {
    id: 1,
    title: "Connect Wallet",
    description: "Link your Web3 wallet",
    icon: Wallet,
  },
  {
    id: 2,
    title: "Verify Network",
    description: "Confirm blockchain network",
    icon: Shield,
  },
  {
    id: 3,
    title: "Start Building",
    description: "Begin your Web3 journey",
    icon: Rocket,
  },
];

export const OnboardingStepper: React.FC<OnboardingStepperProps> = ({ 
  currentStep, 
  className 
}) => {
  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isUpcoming = currentStep < step.id;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                {/* Step Circle */}
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  {
                    "bg-primary border-primary text-primary-foreground": isCompleted,
                    "bg-primary/20 border-primary text-primary": isCurrent,
                    "bg-muted border-muted-foreground/30 text-muted-foreground": isUpcoming,
                  }
                )}>
                  {isCompleted ? (
                    <Check size={20} />
                  ) : (
                    <step.icon size={20} />
                  )}
                </div>

                {/* Step Content */}
                <div className="mt-3 text-center">
                  <div className={cn(
                    "text-sm font-medium transition-colors",
                    {
                      "text-primary": isCompleted || isCurrent,
                      "text-muted-foreground": isUpcoming,
                    }
                  )}>
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={cn(
                  "h-0.5 flex-1 mx-4 transition-colors duration-300",
                  {
                    "bg-primary": currentStep > step.id,
                    "bg-muted-foreground/30": currentStep <= step.id,
                  }
                )} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
