
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectsHub } from '@/components/projects/ProjectsHub';

const ProjectsCreator = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-neura-cyan to-yellow-400 bg-clip-text text-transparent">
          Decentralized Projects Hub
        </h1>
        <ProjectsHub />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsCreator;
