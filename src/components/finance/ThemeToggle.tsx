
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useWallet } from '@/services/wallet';

export const ThemeToggle: React.FC = () => {
  const { wallet, toggleTheme } = useWallet();
  
  const handleToggle = () => {
    toggleTheme();
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleToggle} 
      className="rounded-full w-9 h-9"
      title={wallet.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {wallet.theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-white/70 hover:text-white transition-colors" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-white/70 hover:text-white transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
