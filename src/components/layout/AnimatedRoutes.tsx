import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Import all pages
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import StudioDashboard from '@/pages/StudioDashboard';
import Onboarding from '@/pages/Onboarding';
import Messaging from '@/pages/Messaging';
import Learn from '@/pages/Learn';
import StoreSuccess from '@/pages/StoreSuccess';
import ProductDetail from '@/pages/ProductDetail';
import NotFound from '@/pages/NotFound';
import CreatorStudio from '@/pages/CreatorStudio';
import VideoStudio from '@/pages/VideoStudio';
import VideoIntegration from '@/pages/VideoIntegration';
import VideoMarketplace from '@/pages/VideoMarketplace';
import VideoNFTs from '@/pages/VideoNFTs';
import GlobalInnovators from '@/pages/GlobalInnovators';
import ProjectsCreator from '@/pages/ProjectsCreator';
import CommerceStudio from '@/pages/CommerceStudio';
import FinanceHub from '@/pages/FinanceHub';
import Threaditor from '@/pages/Threaditor';
import PodcastStudio from '@/pages/PodcastStudio';
import MusicCreation from '@/pages/MusicCreation';
import LiveStreaming from '@/pages/LiveStreaming';
import ARVisualization from '@/pages/ARVisualization';
import StreamingDashboard from '@/pages/StreamingDashboard';
import NeuraSocial from '@/pages/NeuraSocial';
import Neurapathy from '@/pages/Neurapathy';
import Whitepaper from '@/pages/Whitepaper';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import SkeletonDemo from '@/pages/SkeletonDemo';

// New pages
import Platform from '@/pages/Platform';
import Features from '@/pages/Features';
import UserTypes from '@/pages/UserTypes';
import DAOGovernance from '@/pages/DAOGovernance';
import DAOGovernanceRules from '@/pages/DAOGovernanceRules';
import Resources from '@/pages/Resources';
import Community from '@/pages/Community';
import Analytics from '@/pages/Analytics';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

// Diminga pages
import DimingaDashboard from '@/pages/DimingaDashboard';
import DimingaAuth from '@/pages/DimingaAuth';
import DimingaProfile from '@/pages/DimingaProfile';
import DimingaSettings from '@/pages/DimingaSettings';
import Pricing from '@/pages/Pricing';
import Docs from '@/pages/Docs';
import { Store, StudioThreaditor, StudioVideoStudio, Podcast, StudioNeuraSocial, Hub } from '@/pages/studios/index';

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Core */}
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/onboarding" element={<PageTransition><Onboarding /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/settings" element={<PageTransition><DimingaSettings /></PageTransition>} />

        {/* Platform & Features */}
        <Route path="/platform" element={<PageTransition><Platform /></PageTransition>} />
        <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
        <Route path="/user-types" element={<PageTransition><UserTypes /></PageTransition>} />

        {/* Studio */}
        <Route path="/studio" element={<PageTransition><StudioDashboard /></PageTransition>} />
        <Route path="/creator-studio" element={<PageTransition><CreatorStudio /></PageTransition>} />
        <Route path="/video-studio" element={<PageTransition><VideoStudio /></PageTransition>} />
        <Route path="/podcast-studio" element={<PageTransition><PodcastStudio /></PageTransition>} />
        <Route path="/music-creation" element={<PageTransition><MusicCreation /></PageTransition>} />
        <Route path="/live-streaming" element={<PageTransition><LiveStreaming /></PageTransition>} />
        <Route path="/streaming-dashboard" element={<PageTransition><StreamingDashboard /></PageTransition>} />

        {/* Studio sub-routes */}
        <Route path="/studio/music" element={<Navigate to="/music-creation" replace />} />

        {/* Video */}
        <Route path="/video-integration" element={<PageTransition><VideoIntegration /></PageTransition>} />
        <Route path="/video-marketplace" element={<PageTransition><VideoMarketplace /></PageTransition>} />
        <Route path="/video-nfts" element={<PageTransition><VideoNFTs /></PageTransition>} />
        <Route path="/ar-visualization" element={<PageTransition><ARVisualization /></PageTransition>} />

        {/* Commerce */}
        <Route path="/commerce-studio" element={<PageTransition><CommerceStudio /></PageTransition>} />
        <Route path="/store-success" element={<PageTransition><StoreSuccess /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />

        {/* Social & Content */}
        <Route path="/threaditor" element={<PageTransition><Threaditor /></PageTransition>} />
        <Route path="/neura-social" element={<PageTransition><NeuraSocial /></PageTransition>} />
        <Route path="/messaging" element={<PageTransition><Messaging /></PageTransition>} />

        {/* Innovation & Finance */}
        <Route path="/projects-creator" element={<PageTransition><ProjectsCreator /></PageTransition>} />
        <Route path="/global-innovators" element={<PageTransition><GlobalInnovators /></PageTransition>} />
        <Route path="/finance-hub" element={<PageTransition><FinanceHub /></PageTransition>} />

        {/* DAO Governance */}
        <Route path="/dao-governance" element={<PageTransition><DAOGovernance /></PageTransition>} />
        <Route path="/dao-governance-rules" element={<PageTransition><DAOGovernanceRules /></PageTransition>} />

        {/* Resources & Community */}
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
        <Route path="/analytics" element={<PageTransition><Analytics /></PageTransition>} />

        {/* Learning & Documentation */}
        <Route path="/learn" element={<PageTransition><Learn /></PageTransition>} />
        <Route path="/whitepaper" element={<PageTransition><Whitepaper /></PageTransition>} />
        <Route path="/neurapathy" element={<PageTransition><Neurapathy /></PageTransition>} />

        {/* Legal */}
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />

        {/* Demo */}
        <Route path="/skeleton-demo" element={<PageTransition><SkeletonDemo /></PageTransition>} />

        {/* Diminga App Pages */}
        <Route path="/dashboard" element={<PageTransition><DimingaDashboard /></PageTransition>} />
        <Route path="/diminga-auth" element={<PageTransition><DimingaAuth /></PageTransition>} />
        <Route path="/profile/:username" element={<PageTransition><DimingaProfile /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><Docs /></PageTransition>} />
        <Route path="/studio/store" element={<PageTransition><Store /></PageTransition>} />
        <Route path="/studio/threaditor" element={<PageTransition><StudioThreaditor /></PageTransition>} />
        <Route path="/studio/video" element={<PageTransition><StudioVideoStudio /></PageTransition>} />
        <Route path="/studio/podcast" element={<PageTransition><Podcast /></PageTransition>} />
        <Route path="/studio/social" element={<PageTransition><StudioNeuraSocial /></PageTransition>} />
        <Route path="/studio/hub" element={<PageTransition><Hub /></PageTransition>} />

        {/* 404 */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
