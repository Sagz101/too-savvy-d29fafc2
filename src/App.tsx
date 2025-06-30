
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "@/providers/Web3Provider";
import { AuthProvider } from "@/services/auth";
import { EnhancedHeader } from "@/components/ui/enhanced-header";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import { UserFeedbackWidget } from "@/components/ui/user-feedback-widget";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudioDashboard from "./pages/StudioDashboard";
import Onboarding from "./pages/Onboarding";
import Messaging from "./pages/Messaging";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";

const App = () => (
  <AuthProvider>
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
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/video-studio" element={<StudioDashboard />} />
              <Route path="/video-integration" element={<Learn />} />
              <Route path="/global-innovators" element={<StudioDashboard />} />
              <Route path="/whitepaper" element={<Learn />} />
              <Route path="/privacy" element={<Learn />} />
              <Route path="/terms" element={<Learn />} />
              <Route path="/finance-hub" element={<StudioDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChatbot />
            <UserFeedbackWidget />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </Web3Provider>
  </AuthProvider>
);

export default App;
