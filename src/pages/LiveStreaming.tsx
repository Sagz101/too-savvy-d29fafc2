
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Host live streams with token-gating and NFT access passes via decentralized protocols",
  "Livepeer, WebRTC, ERC-1155, Schedule Stream",
];

export default function LiveStreaming() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Live Streaming</h1>
        <div className="text-lg text-muted-foreground mb-5">{features[0]}</div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Livepeer powered decentralized streams</li>
          <li>Token-gated events with NFT passes</li>
          <li>WebRTC backstage and scheduling</li>
        </ul>
      </main>
    </div>
  );
}
