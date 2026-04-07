import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Web3Provider } from "@/providers/Web3Provider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { EnhancedHeader } from "@/components/ui/enhanced-header";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import { UserFeedbackWidget } from "@/components/ui/user-feedback-widget";
import { SharedUserProvider } from "@/components/ui/shared-user-context";
import { ModuleIntegrationProvider } from "@/hooks/useModuleIntegration";
import { AnimatedRoutes } from "@/components/layout/AnimatedRoutes";
import { FloatingChatWidget } from "@/components/messaging/FloatingChatWidget";
import { AppErrorBoundary } from "@/components/shared/AppErrorBoundary";

const App = () => (
  <HelmetProvider>
    <AppErrorBoundary>
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
                    <AnimatedRoutes />
                    <AIChatbot />
                    <UserFeedbackWidget />
                    <FloatingChatWidget />
                  </div>
                </BrowserRouter>
              </TooltipProvider>
            </Web3Provider>
          </ModuleIntegrationProvider>
        </SharedUserProvider>
      </AuthProvider>
    </AppErrorBoundary>
  </HelmetProvider>
);

export default App;
