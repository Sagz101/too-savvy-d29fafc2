
import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";

const features = [
  "Create augmented reality experiences for your products and digital collectibles",
  "ARKit, ARCore, 3D Models, Create AR",
];

export default function ARVisualization() {
  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <main className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AR Visualization</h1>
          <div className="text-lg text-white/70 mb-5">{features[0]}</div>
          <ul className="list-disc ml-6 space-y-1 text-white/60">
            <li>ARKit &amp; ARCore integration</li>
            <li>3D model uploads and previews</li>
            <li>Mint, display, and interact with AR collectibles</li>
          </ul>
        </main>
      </div>
    </CosmicPageLayout>
  );
}
