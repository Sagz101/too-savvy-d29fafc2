
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Create augmented reality experiences for your products and digital collectibles",
  "ARKit, ARCore, 3D Models, Create AR",
];

export default function ARVisualization() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-pink-400">AR Visualization</h1>
        <div className="text-lg text-muted-foreground mb-5">{features[0]}</div>
        <ul className="list-disc ml-6 space-y-1">
          <li>ARKit &amp; ARCore integration</li>
          <li>3D model uploads and previews</li>
          <li>Mint, display, and interact with AR collectibes</li>
        </ul>
      </main>
    </div>
  );
}
