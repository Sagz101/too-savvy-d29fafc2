
import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";

const features = [
  "Host live streams with token-gating and NFT access passes via decentralized protocols",
  "Livepeer, WebRTC, ERC-1155, Schedule Stream",
];

export default function LiveStreaming() {
  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <main className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Live Streaming</h1>
          <div className="text-lg text-white/70 mb-5">{features[0]}</div>
          <ul className="list-disc ml-6 space-y-1 text-white/60">
            <li>Livepeer powered decentralized streams</li>
            <li>Token-gated events with NFT passes</li>
            <li>WebRTC backstage and scheduling</li>
          </ul>
        </main>
      </div>
    </CosmicPageLayout>
  );
}
