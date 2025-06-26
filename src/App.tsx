
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "@/providers/Web3Provider";
import { EnhancedHeader } from "@/components/ui/enhanced-header";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import { UserFeedbackWidget } from "@/components/ui/user-feedback-widget";
import Index from "./pages/Index";
import StudioDashboard from "./pages/StudioDashboard";
import Onboarding from "./pages/Onboarding";
import Messaging from "./pages/Messaging";
import Learn from "./pages/Learn";

const App = () => (
  <Web3Provider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <EnhancedHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/studio" element={<StudioDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
          <AIChatbot />
          <UserFeedbackWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </Web3Provider>
);

export default App;
