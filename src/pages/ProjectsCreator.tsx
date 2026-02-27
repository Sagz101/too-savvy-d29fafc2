
import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { ProjectsHub } from '@/components/projects/ProjectsHub';

const ProjectsCreator = () => {
  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Decentralized Projects Hub
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Build, collaborate, and scale your projects with decentralized funding and community support.
            </p>
          </div>
          <ProjectsHub />
        </main>
      </div>
    </CosmicPageLayout>
  );
};

export default ProjectsCreator;
