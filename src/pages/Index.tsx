
import React, { useState, useEffect } from 'react';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { EnhancedHeroSection } from '@/components/ui/enhanced-hero-section';
import { ModuleOverviewTable } from '@/components/ui/module-overview-table';
import { LiveStatsDashboard } from '@/components/ui/live-stats-dashboard';
import { CreatorStudioInterests } from '@/components/sections/CreatorStudioInterests';
import { UnifiedCreatorSection } from '@/components/sections/UnifiedCreatorSection';
import { CommunityGovernance } from '@/components/ui/community-governance';
import { TrustedByCreators } from '@/components/ui/trusted-by-creators';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNavigation } from '@/components/ui/mobile-optimized-navigation';
import { TrustSignals } from '@/components/ui/trust-signals';
import { InteractiveAnalytics } from '@/components/ui/interactive-analytics';
import { PerformanceDashboard } from '@/components/ui/performance-dashboard';
import { GasFeeTracker } from '@/components/ui/gas-fee-tracker';
import { useAuth } from '@/services/auth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const handleInterestSelection = (interests: string[]) => {
    setSelectedInterests(interests);
    console.log('Selected interests:', interests);
  };

  // Enhanced scroll tracking for performance
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      // Add any scroll-based optimizations here
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <StickyNavigation />
      <main>
        {/* Enhanced Hero Section */}
        <section id="hero">
          <EnhancedHeroSection />
          
          {/* Show welcome message for authenticated users */}
          {isAuthenticated && user && (
            <div className="container mx-auto px-4 py-8">
              <div className="text-center bg-gradient-to-r from-web3-cyan/10 to-web3-purple/10 border border-web3-cyan/20 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome back, {user.profile?.name || user.email?.split('@')[0]}!
                </h2>
                <p className="text-gray-300 mb-4">
                  Ready to continue your creative journey? Access your dashboard or explore new features.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild className="bg-web3-cyan hover:bg-web3-cyan/80">
                    <Link to="/studio">Go to Studio</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/messaging">Messages</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Live Platform Statistics */}
        <section id="live-stats" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 py-16">
            <LiveStatsDashboard />
          </div>
        </section>

        {/* Module Overview Table */}
        <section id="modules-overview" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Creator Studio Modules</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive tools for every type of creator, optimized for Web3 with minimal gas fees.
              </p>
            </div>
            <ModuleOverviewTable />
          </div>
        </section>

        {/* Real-time Gas Fees */}
        <section id="gas-fees" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Real-time Gas Optimization</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Live gas fee tracking across multiple networks, optimized for creator activities.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GasFeeTracker variant="detailed" showTrends={true} />
            </div>
          </div>
        </section>
        
        {/* Creator Studio Interests Selection */}
        <section id="creator-interests" className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <CreatorStudioInterests onContinue={handleInterestSelection} />
        </section>
        
        {/* Unified Creator Section - Create, Own, Thrive */}
        <section id="create" className="bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <UnifiedCreatorSection />
        </section>
        
        <section id="get-started" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <OnboardingGuide />
        </section>
        
        <section id="dashboard" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <CreatorDashboard />
        </section>
        
        <section id="video-showcase" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <VideoShowcase />
        </section>
        
        <section id="commerce-studio" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <AICopilot />
        </section>
        
        <section id="trusted-creators" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <CommunityGovernance />
        </section>
        
        {/* Interactive Analytics Section */}
        {isAuthenticated && (
          <section id="analytics" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Your Creator Analytics</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real-time insights into your content performance and community growth.
                </p>
              </div>
              <InteractiveAnalytics />
            </div>
          </section>
        )}

        {/* Performance Dashboard */}
        <section id="performance" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Platform Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent metrics showing our commitment to security, performance, and sustainability.
              </p>
            </div>
            <PerformanceDashboard />
          </div>
        </section>

        {/* Enhanced Trust Signals Section */}
        <section id="trust-signals" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Trust & Security</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Independently verified security, compliance, and sustainability certifications.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <TrustSignals variant="footer" showLabels={true} />
            </div>
          </div>
        </section>

        <section id="developer-resources" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Developer Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build on Too Savvy with our comprehensive developer tools and documentation.
              </p>
            </div>
          </div>
        </section>
        
        <section id="cta" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <Cta />
        </section>
      </main>
      <Footer />
      <MobileBottomNavigation />
    </div>
  );
};

export default Index;
