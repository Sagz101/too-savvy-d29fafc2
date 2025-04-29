
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Neurapathy from "./pages/Neurapathy";
import VideoStudio from "./pages/VideoStudio";
import VideoIntegration from "./pages/VideoIntegration";
import VideoMarketplace from "./pages/VideoMarketplace";
import SocialHub from "./pages/SocialHub";
import EcommerceStore from "./pages/EcommerceStore";
import Web3Monetization from "./pages/Web3Monetization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/neurapathy" element={<Neurapathy />} />
        <Route path="/video-studio" element={<VideoStudio />} />
        <Route path="/video-integration" element={<VideoIntegration />} />
        <Route path="/video-marketplace" element={<VideoMarketplace />} />
        <Route path="/social-hub" element={<SocialHub />} />
        <Route path="/ecommerce" element={<EcommerceStore />} />
        <Route path="/monetization" element={<Web3Monetization />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
