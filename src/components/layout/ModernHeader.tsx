
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Github } from 'lucide-react';

export const ModernHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-[#00FFCC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="T00 Savvy" 
              className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
            />
          </Link>

          {/* Trust Indicators */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#00FFCC]/20 rounded-full px-4 py-2 text-sm">
              <Shield size={16} className="text-[#00FFCC]" />
              <span className="text-white/90 font-medium">CertiK Verified</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#FFFF00]/20 rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-[#00FFCC] rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Multi-Chain Active</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A2E]/60 backdrop-blur-sm border border-[#FF00FF]/20 rounded-full px-4 py-2 text-sm">
              <Github size={16} className="text-[#FF00FF]" />
              <span className="text-white/90 font-medium">Open Source</span>
            </div>
          </div>

          {/* Mobile Trust Indicators */}
          <div className="md:hidden flex items-center gap-2">
            <Shield size={16} className="text-[#00FFCC]" />
            <div className="w-2 h-2 bg-[#00FFCC] rounded-full animate-pulse"></div>
            <Github size={16} className="text-[#FF00FF]" />
          </div>
        </div>
      </div>
    </header>
  );
};
