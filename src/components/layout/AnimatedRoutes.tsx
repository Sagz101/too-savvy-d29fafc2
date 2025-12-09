import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';

// Import all pages
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import StudioDashboard from '@/pages/StudioDashboard';
import Onboarding from '@/pages/Onboarding';
import Messaging from '@/pages/Messaging';
import Learn from '@/pages/Learn';
import StoreSuccess from '@/pages/StoreSuccess';
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

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/studio" element={<PageTransition><StudioDashboard /></PageTransition>} />
        <Route path="/creator-studio" element={<PageTransition><CreatorStudio /></PageTransition>} />
        <Route path="/onboarding" element={<PageTransition><Onboarding /></PageTransition>} />
        <Route path="/messaging" element={<PageTransition><Messaging /></PageTransition>} />
        <Route path="/learn" element={<PageTransition><Learn /></PageTransition>} />
        <Route path="/store-success" element={<PageTransition><StoreSuccess /></PageTransition>} />
        <Route path="/video-studio" element={<PageTransition><VideoStudio /></PageTransition>} />
        <Route path="/video-integration" element={<PageTransition><VideoIntegration /></PageTransition>} />
        <Route path="/video-marketplace" element={<PageTransition><VideoMarketplace /></PageTransition>} />
        <Route path="/video-nfts" element={<PageTransition><VideoNFTs /></PageTransition>} />
        <Route path="/global-innovators" element={<PageTransition><GlobalInnovators /></PageTransition>} />
        <Route path="/projects-creator" element={<PageTransition><ProjectsCreator /></PageTransition>} />
        <Route path="/commerce-studio" element={<PageTransition><CommerceStudio /></PageTransition>} />
        <Route path="/finance-hub" element={<PageTransition><FinanceHub /></PageTransition>} />
        <Route path="/threaditor" element={<PageTransition><Threaditor /></PageTransition>} />
        <Route path="/podcast-studio" element={<PageTransition><PodcastStudio /></PageTransition>} />
        <Route path="/music-creation" element={<PageTransition><MusicCreation /></PageTransition>} />
        <Route path="/live-streaming" element={<PageTransition><LiveStreaming /></PageTransition>} />
        <Route path="/ar-visualization" element={<PageTransition><ARVisualization /></PageTransition>} />
        <Route path="/streaming-dashboard" element={<PageTransition><StreamingDashboard /></PageTransition>} />
        <Route path="/neura-social" element={<PageTransition><NeuraSocial /></PageTransition>} />
        <Route path="/neurapathy" element={<PageTransition><Neurapathy /></PageTransition>} />
        <Route path="/whitepaper" element={<PageTransition><Whitepaper /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Whitepaper /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Whitepaper /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
