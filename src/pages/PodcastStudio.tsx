
import React from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

const features = [
  "Create, distribute and monetize podcasts with token-gated bonus content for supporters",
  "RSS, Subscription, Analytics, Create Podcast",
];

export default function PodcastStudio() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <main className="flex-1 ml-64 p-10">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">Podcast Studio</h1>
        <div className="text-lg text-muted-foreground mb-5">{features[0]}</div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Create and distribute token-gated podcasts</li>
          <li>Built-in analytics dashboard</li>
          <li>Subscription &amp; one-time monetization</li>
        </ul>
      </main>
    </div>
  );
}
