
import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";

const features = [
  "Turn video content into collectible NFTs with royalty structures and ownership rights",
  "IPFS, ERC-721M, ERC-2981, Create NFT",
];

export default function VideoNFTs() {
  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <main className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Video NFTs</h1>
          <div className="text-lg text-white/70 mb-5">{features[0]}</div>
          <ul className="list-disc ml-6 space-y-1 text-white/60">
            <li>Mint and share on-chain video NFTs</li>
            <li>Configurable royalties (ERC-2981)</li>
            <li>Decentralized storage with IPFS</li>
          </ul>
        </main>
      </div>
    </CosmicPageLayout>
  );
}
