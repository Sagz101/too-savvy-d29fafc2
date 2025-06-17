
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Podcast, Store, Music2, Code2, ShoppingBag, FileText, Users } from "lucide-react";

const studioComponents = [
  {
    key: "video-studio",
    icon: <Video className="w-7 h-7 text-solar-core" />,
    label: "Video Studio",
    description: "Create, mint, and manage Video NFTs or streams.",
  },
  {
    key: "podcast-studio",
    icon: <Podcast className="w-7 h-7 text-neura-cyan" />,
    label: "Podcast Studio",
    description: "Distribute podcasts and mint Podcast NFTs.",
  },
  {
    key: "store-builder",
    icon: <Store className="w-7 h-7 text-solar-radiative" />,
    label: "Store Builder",
    description: "Build a storefront to sell content, NFTs, and products.",
  },
  {
    key: "music-creator",
    icon: <Music2 className="w-7 h-7 text-green-400" />,
    label: "Music Creator",
    description: "Mint, stream, and monetize audio content.",
  },
  {
    key: "dev-sandbox",
    icon: <Code2 className="w-7 h-7 text-blue-400" />,
    label: "Dev Sandbox",
    description: "APIs, SDKs, integrations for builders.",
  },
  {
    key: "e-commerce-store",
    icon: <ShoppingBag className="w-7 h-7 text-emerald-400" />,
    label: "E-Commerce Store",
    description: "Advanced commerce solutions with Web3 payments.",
  },
  {
    key: "threaditor",
    icon: <FileText className="w-7 h-7 text-purple-400" />,
    label: "Threaditor",
    description: "Create and monetize long-form content threads.",
  },
  {
    key: "neura-social",
    icon: <Users className="w-7 h-7 text-pink-400" />,
    label: "NeuraSocial",
    description: "Social networking with decentralized features.",
  }
];

interface CreatorStudioInterestsProps {
  onContinue: (interest: string) => void;
}

export function CreatorStudioInterests({ onContinue }: CreatorStudioInterestsProps) {
  const [interest, setInterest] = useState<string | null>(null);

  return (
    <section className="py-16 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-solar-core to-solar-photosphere bg-clip-text text-transparent">
              Welcome! Choose what interests you in the Creator Studio
            </span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-xl mx-auto mt-3">
            Select one component you'd like to start with. You can always add or change your interests as a returning user.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {studioComponents.map(comp => (
            <button
              key={comp.key}
              onClick={() => setInterest(comp.key)}
              className={`group border-2 rounded-xl px-6 py-7 bg-card/70 shadow-xl hover:shadow-2xl text-center transition-all duration-150 outline-none focus-visible:ring-2 ${
                interest === comp.key
                  ? "border-solar-core ring-2 ring-solar-core"
                  : "border-card/0 hover:border-solar-core/60"
              }`}
              type="button"
              aria-pressed={interest === comp.key}
            >
              <div className="flex flex-col items-center">
                {comp.icon}
                <span className="font-bold text-lg mt-3 mb-1">{comp.label}</span>
                <p className="text-muted-foreground text-sm">{comp.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-2">
          <Button
            size="lg"
            className="bg-solar-core hover:bg-solar-photosphere/80 text-white rounded-xl px-10 disabled:opacity-60"
            onClick={() => interest && onContinue(interest)}
            disabled={!interest}
          >
            Continue
          </Button>
          <div className="text-xs text-muted-foreground mt-3">
            You can update your interests later in your profile.
          </div>
        </div>
      </div>
    </section>
  );
}
