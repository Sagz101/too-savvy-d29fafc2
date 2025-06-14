
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/services/auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Neurapathy from "./pages/Neurapathy";
import VideoStudio from "./pages/VideoStudio";
import VideoIntegration from "./pages/VideoIntegration";
import VideoMarketplace from "./pages/VideoMarketplace";
import ProjectsCreator from "./pages/ProjectsCreator";
import FinanceHub from "./pages/FinanceHub";
import StreamingDashboard from "./pages/StreamingDashboard";
import GlobalInnovators from "./pages/GlobalInnovators";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/neurapathy" element={<Neurapathy />} />
            <Route path="/video-studio" element={<VideoStudio />} />
            <Route path="/video-integration" element={<VideoIntegration />} />
            <Route path="/video-marketplace" element={<VideoMarketplace />} />
            <Route path="/projects-creator" element={<ProjectsCreator />} />
            <Route path="/finance-hub" element={<FinanceHub />} />
            <Route path="/streaming-dashboard" element={<StreamingDashboard />} />
            <Route path="/global-innovators" element={<GlobalInnovators />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
