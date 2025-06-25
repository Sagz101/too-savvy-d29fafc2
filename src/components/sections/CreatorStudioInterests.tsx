
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Podcast, Store, Music2, Code2, ShoppingBag, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const studioComponents = [
  {
    key: "video-studio",
    icon: <Video className="w-7 h-7 text-white" />,
    label: "Video Studio",
    description: "Create, mint, and manage Video NFTs or streams.",
    gradient: "from-cyan-400 via-blue-500 to-purple-600"
  },
  {
    key: "podcast-studio",
    icon: <Podcast className="w-7 h-7 text-white" />,
    label: "Podcast Studio",
    description: "Distribute podcasts and mint Podcast NFTs.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600"
  },
  {
    key: "store-builder",
    icon: <Store className="w-7 h-7 text-white" />,
    label: "Store Builder",
    description: "Build a storefront to sell content, NFTs, and products.",
    gradient: "from-pink-400 via-rose-500 to-red-600"
  },
  {
    key: "music-creator",
    icon: <Music2 className="w-7 h-7 text-white" />,
    label: "Music Creator",
    description: "Mint, stream, and monetize audio content.",
    gradient: "from-violet-400 via-purple-500 to-indigo-600"
  },
  {
    key: "dev-sandbox",
    icon: <Code2 className="w-7 h-7 text-white" />,
    label: "Dev Sandbox",
    description: "APIs, SDKs, integrations for builders.",
    gradient: "from-yellow-400 via-orange-500 to-red-600"
  },
  {
    key: "e-commerce-store",
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    label: "E-Commerce Store",
    description: "Advanced commerce solutions with Web3 payments.",
    gradient: "from-green-400 via-emerald-500 to-teal-600"
  },
  {
    key: "threaditor",
    icon: <FileText className="w-7 h-7 text-white" />,
    label: "Threaditor",
    description: "Create and monetize long-form content threads.",
    gradient: "from-blue-400 via-indigo-500 to-purple-600"
  },
  {
    key: "neura-social",
    icon: <Users className="w-7 h-7 text-white" />,
    label: "NeuraSocial",
    description: "Social networking with decentralized features.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600"
  }
];

interface CreatorStudioInterestsProps {
  onContinue: (interest: string) => void;
}

export function CreatorStudioInterests({ onContinue }: CreatorStudioInterestsProps) {
  const [interest, setInterest] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (interest) {
      onContinue(interest);
      // Navigate to studio with the selected module
      navigate(`/studio?module=${interest}`);
    }
  };

  return (
    <section className="py-16 min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-hero-glow">
              Welcome to Creator Studio
            </span>
          </h2>
          <p className="text-white/80 md:text-xl lg:text-2xl max-w-3xl mx-auto mt-4 leading-relaxed">
            Choose what interests you in the Creator Studio
          </p>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mt-3">
            Select one component you'd like to start with. You can always add or change your interests as a returning user.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {studioComponents.map(comp => (
            <button
              key={comp.key}
              onClick={() => setInterest(comp.key)}
              className={`group relative overflow-hidden rounded-2xl p-1 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                interest === comp.key
                  ? "ring-2 ring-cyan-400 shadow-2xl shadow-cyan-400/25"
                  : "hover:shadow-2xl hover:shadow-purple-500/20"
              }`}
              type="button"
              aria-pressed={interest === comp.key}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${comp.gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Inner content container */}
              <div className="relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-slate-700/90 group-hover:via-gray-700/90 group-hover:to-slate-800/90">
                {/* Icon container with glow effect */}
                <div className={`relative mb-4 p-4 rounded-full bg-gradient-to-r ${comp.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {comp.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${comp.gradient} rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10`}></div>
                </div>
                
                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-cyan-100 transition-colors duration-300">
                  {comp.label}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {comp.description}
                </p>
                
                {/* Selection indicator */}
                {interest === comp.key && (
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            className={`relative overflow-hidden px-12 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              interest 
                ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-2xl shadow-cyan-400/25 hover:shadow-purple-500/30" 
                : "bg-gray-700/50 text-gray-400 cursor-not-allowed"
            }`}
            onClick={handleContinue}
            disabled={!interest}
          >
            {interest && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            )}
            <span className="relative z-10 flex items-center gap-3">
              Continue to Studio
              <div className={`w-2 h-2 rounded-full ${interest ? 'bg-white animate-pulse' : 'bg-gray-500'}`}></div>
            </span>
          </Button>
          
          <div className="text-sm text-white/50 mt-4 flex items-center justify-center gap-2">
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            You can update your interests later in your profile
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
