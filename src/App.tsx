
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "@/providers/Web3Provider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { EnhancedHeader } from "@/components/ui/enhanced-header";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import { UserFeedbackWidget } from "@/components/ui/user-feedback-widget";
import { SharedUserProvider } from "@/components/ui/shared-user-context";
import { ModuleIntegrationProvider } from "@/hooks/useModuleIntegration";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudioDashboard from "./pages/StudioDashboard";
import Onboarding from "./pages/Onboarding";
import Messaging from "./pages/Messaging";
import Learn from "./pages/Learn";
import StoreSuccess from "./pages/StoreSuccess";
import NotFound from "./pages/NotFound";
import CreatorStudio from "./pages/CreatorStudio";
import VideoStudio from "./pages/VideoStudio";
import VideoIntegration from "./pages/VideoIntegration";
import VideoMarketplace from "./pages/VideoMarketplace";
import VideoNFTs from "./pages/VideoNFTs";
import GlobalInnovators from "./pages/GlobalInnovators";
import ProjectsCreator from "./pages/ProjectsCreator";
import CommerceStudio from "./pages/CommerceStudio";
import FinanceHub from "./pages/FinanceHub";
import Threaditor from "./pages/Threaditor";
import PodcastStudio from "./pages/PodcastStudio";
import MusicCreation from "./pages/MusicCreation";
import LiveStreaming from "./pages/LiveStreaming";
import ARVisualization from "./pages/ARVisualization";
import StreamingDashboard from "./pages/StreamingDashboard";
import NeuraSocial from "./pages/NeuraSocial";
import Neurapathy from "./pages/Neurapathy";
import Whitepaper from "./pages/Whitepaper";

const App = () => (
  <AuthProvider>
    <SharedUserProvider>
      <ModuleIntegrationProvider>
        <Web3Provider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen w-full">
                <EnhancedHeader />
                <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/studio" element={<StudioDashboard />} />
              <Route path="/creator-studio" element={<CreatorStudio />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/store-success" element={<StoreSuccess />} />
              <Route path="/video-studio" element={<VideoStudio />} />
              <Route path="/video-integration" element={<VideoIntegration />} />
              <Route path="/video-marketplace" element={<VideoMarketplace />} />
              <Route path="/video-nfts" element={<VideoNFTs />} />
              <Route path="/global-innovators" element={<GlobalInnovators />} />
              <Route path="/projects-creator" element={<ProjectsCreator />} />
              <Route path="/commerce-studio" element={<CommerceStudio />} />
              <Route path="/finance-hub" element={<FinanceHub />} />
              <Route path="/threaditor" element={<Threaditor />} />
              <Route path="/podcast-studio" element={<PodcastStudio />} />
              <Route path="/music-creation" element={<MusicCreation />} />
              <Route path="/live-streaming" element={<LiveStreaming />} />
              <Route path="/ar-visualization" element={<ARVisualization />} />
              <Route path="/streaming-dashboard" element={<StreamingDashboard />} />
              <Route path="/neura-social" element={<NeuraSocial />} />
              <Route path="/neurapathy" element={<Neurapathy />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/privacy" element={<Learn />} />
              <Route path="/terms" element={<Learn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
                <AIChatbot />
                <UserFeedbackWidget />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </Web3Provider>
      </ModuleIntegrationProvider>
    </SharedUserProvider>
  </AuthProvider>
);

export default App;
