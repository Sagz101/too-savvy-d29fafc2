
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "@/providers/Web3Provider";
import Index from "./pages/Index";
import StudioDashboard from "./pages/StudioDashboard";
import Onboarding from "./pages/Onboarding";
import Messaging from "./pages/Messaging";

const App = () => (
  <Web3Provider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/studio" element={<StudioDashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/messaging" element={<Messaging />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </Web3Provider>
);

export default App;
