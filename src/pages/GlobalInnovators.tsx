
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Create collaborative projects with NFT-based ownership and decentralized funding",
  "Multi-Chain, NFT Ownership, DAO Governance, Launch Project",
];

export default function GlobalInnovators() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">Global Innovators</h1>
        <div className="text-lg text-muted-foreground mb-5">
          {features[0]}
        </div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Multi-chain collaboration workspace</li>
          <li>NFT and DAO enabled ownership</li>
          <li>Decentralized funding tools</li>
        </ul>
      </main>
    </div>
  );
}
