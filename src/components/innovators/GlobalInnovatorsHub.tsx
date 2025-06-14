
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OnboardingFlow } from './OnboardingFlow';
import { ProjectLaunchInterface } from './ProjectLaunchInterface';
import { NFTOwnershipDashboard } from './NFTOwnershipDashboard';
import { DAOGovernance } from './DAOGovernance';
import { FundingTools } from './FundingTools';
import { CollaborationHub } from './CollaborationHub';
import { SocialReputation } from './SocialReputation';
import { UserPlus, Rocket, Shield, Users, Wallet, GitBranch, Star } from 'lucide-react';

export const GlobalInnovatorsHub = () => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  if (!isOnboarded) {
    return <OnboardingFlow onComplete={() => setIsOnboarded(true)} />;
  }
  
  return (
    <div className="bg-neura-dark/60 backdrop-blur-md border border-yellow-500/20 rounded-xl p-6">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid grid-cols-7 mb-8">
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            <span className="hidden sm:inline">Projects</span>
          </TabsTrigger>
          <TabsTrigger value="launch" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Launch</span>
          </TabsTrigger>
          <TabsTrigger value="ownership" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">NFTs</span>
          </TabsTrigger>
          <TabsTrigger value="governance" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">DAO</span>
          </TabsTrigger>
          <TabsTrigger value="funding" className="flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">Funding</span>
          </TabsTrigger>
          <TabsTrigger value="collaboration" className="flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            <span className="hidden sm:inline">Collab</span>
          </TabsTrigger>
          <TabsTrigger value="reputation" className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span className="hidden sm:inline">Social</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <ProjectLaunchInterface onSelectProject={setActiveProject} mode="browse" />
        </TabsContent>
        
        <TabsContent value="launch">
          <ProjectLaunchInterface onSelectProject={setActiveProject} mode="create" />
        </TabsContent>
        
        <TabsContent value="ownership">
          <NFTOwnershipDashboard activeProject={activeProject} />
        </TabsContent>
        
        <TabsContent value="governance">
          <DAOGovernance activeProject={activeProject} />
        </TabsContent>
        
        <TabsContent value="funding">
          <FundingTools activeProject={activeProject} />
        </TabsContent>
        
        <TabsContent value="collaboration">
          <CollaborationHub activeProject={activeProject} />
        </TabsContent>
        
        <TabsContent value="reputation">
          <SocialReputation />
        </TabsContent>
      </Tabs>
    </div>
  );
};
