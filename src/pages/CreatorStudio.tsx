
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Create, stream, and monetize content with decentralized tools",
  "Platform Overview",
];

export default function CreatorStudio() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-neura-cyan">Creator Studio</h1>
        <div className="text-lg text-muted-foreground mb-5">
          {features[0]}
        </div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Cross-platform creation tools (NFT, video, podcast, music...)</li>
          <li>Analytics &amp; Monetization Module</li>
          <li>Integrated wallet and smart links</li>
        </ul>
      </main>
    </div>
  );
}
