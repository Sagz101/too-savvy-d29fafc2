
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Compose, mint and sell music as NFTs with built-in royalties and collaboration tools",
  "Stems, Royalties, Split Rights, Create Music",
];

export default function MusicCreation() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-emerald-400">Music Creation</h1>
        <div className="text-lg text-muted-foreground mb-5">{features[0]}</div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Compose &amp; upload music tracks and stems</li>
          <li>Mint music NFTs and set royalties</li>
          <li>Collaborate on split-rights and projects</li>
        </ul>
      </main>
    </div>
  );
}
