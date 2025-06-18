
import React from 'react';
import { Shield, CheckCircle, Lock, Globe } from 'lucide-react';
import { ModernCard } from '@/components/ui/modern-card';

export const Web3TrustSignals: React.FC = () => {
  const trustSignals = [
    {
      icon: Shield,
      title: "Audited Smart Contracts",
      description: "Security verified by leading auditors",
      status: "Verified",
    },
    {
      icon: CheckCircle,
      title: "Decentralized Ownership",
      description: "You control your digital assets",
      status: "Guaranteed",
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Privacy",
      description: "Your data stays private",
      status: "Protected",
    },
    {
      icon: Globe,
      title: "Cross-Chain Compatible",
      description: "Works across multiple networks",
      status: "Enabled",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {trustSignals.map((signal, index) => (
        <ModernCard 
          key={index}
          variant="filled"
          size="sm"
          className="text-center hover:scale-105 transition-transform duration-200"
        >
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <signal.icon size={20} className="text-green-400" />
            </div>
          </div>
          <h4 className="font-medium text-sm mb-2">{signal.title}</h4>
          <p className="text-xs text-muted-foreground mb-2">{signal.description}</p>
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
            {signal.status}
          </div>
        </ModernCard>
      ))}
    </div>
  );
};
