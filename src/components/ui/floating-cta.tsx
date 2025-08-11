
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { session } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  // Don't show if user is already authenticated
  if (session || isDismissed) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
    }`}>
      <div className="bg-gradient-to-r from-web3-cyan to-web3-purple rounded-xl p-4 shadow-2xl backdrop-blur-sm border border-white/10 max-w-xs">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
        
        <div className="text-center">
          <h4 className="text-white font-semibold mb-2">Ready to Create?</h4>
          <p className="text-gray-200 text-sm mb-4">
            Join 12,847+ creators building their Web3 empire
          </p>
          
          <div className="space-y-2">
            <Button 
              asChild 
              className="w-full bg-white text-gray-900 hover:bg-gray-100"
            >
              <Link to="/onboarding">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="ghost" 
              className="w-full text-white hover:bg-white/10"
              size="sm"
            >
              <Link to="/auth">
                <Wallet size={16} className="mr-2" />
                Connect Wallet
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
