
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Turn video content into collectible NFTs with royalty structures and ownership rights",
  "IPFS, ERC-721M, ERC-2981, Create NFT",
];

export default function VideoNFTs() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Video NFTs</h1>
        <div className="text-lg text-muted-foreground mb-5">{features[0]}</div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Mint and share on-chain video NFTs</li>
          <li>Configurable royalties (ERC-2981)</li>
          <li>Decentralized storage with IPFS</li>
        </ul>
      </main>
    </div>
  );
}
