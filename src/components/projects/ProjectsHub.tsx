
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCreationModule } from './ProjectCreationModule';
import { CollaborativeWorkspace } from './CollaborativeWorkspace';
import { FundingMechanism } from './FundingMechanism';
import { ProjectsList } from './ProjectsList';

export const ProjectsHub = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  return (
    <div className="bg-neura-dark/60 backdrop-blur-md border border-yellow-500/20 rounded-xl p-6">
      <Tabs defaultValue="my-projects" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="create">Create Project</TabsTrigger>
          <TabsTrigger value="workspace" disabled={!activeProject}>Workspace</TabsTrigger>
          <TabsTrigger value="funding" disabled={!activeProject}>Funding</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-projects" className="space-y-6">
          <ProjectsList onSelectProject={(projectId) => setActiveProject(projectId)} />
        </TabsContent>
        
        <TabsContent value="create">
          <ProjectCreationModule onProjectCreated={(projectId) => {
            setActiveProject(projectId);
          }} />
        </TabsContent>
        
        <TabsContent value="workspace">
          {activeProject ? (
            <CollaborativeWorkspace projectId={activeProject} />
          ) : (
            <div className="text-center p-12">Please select a project first</div>
          )}
        </TabsContent>
        
        <TabsContent value="funding">
          {activeProject ? (
            <FundingMechanism projectId={activeProject} />
          ) : (
            <div className="text-center p-12">Please select a project first</div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
