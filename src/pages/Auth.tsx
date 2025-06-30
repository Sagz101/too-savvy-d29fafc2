
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DualOnboarding } from '@/components/auth/DualOnboarding';
import { useAuth } from '@/services/auth';

const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to home page
    if (isAuthenticated && !isLoading) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleComplete = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-solar-core"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <main id="main-content" className="py-20">
        <DualOnboarding onComplete={handleComplete} />
      </main>
    </div>
  );
};

export default Auth;
