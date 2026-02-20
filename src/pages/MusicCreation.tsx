import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";
import { MusicCreator } from "@/components/audio/MusicCreator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Users, Disc, TrendingUp, Play } from "lucide-react";

export default function MusicCreation() {
  return (
    <CosmicPageLayout>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Music Studio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Music Creation
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Compose, produce, and release music with AI assistance and blockchain technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                <Music className="w-5 h-5 mr-2" /> Start Creating
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" /> Listen to Demos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Tracks Created", value: "100K+", icon: Music },
              { label: "Active Artists", value: "15K+", icon: Users },
              { label: "NFTs Minted", value: "25K+", icon: Disc },
              { label: "Royalties Paid", value: "$2.5M+", icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <MusicCreator />
        </div>
      </section>
    </CosmicPageLayout>
  );
}
