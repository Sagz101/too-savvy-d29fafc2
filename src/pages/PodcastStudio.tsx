
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PodcastStudio as PodcastStudioComponent } from "@/components/podcast/PodcastStudio";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Users, Download, TrendingUp, Play } from "lucide-react";

export default function PodcastStudio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      <Header />
      
      <main>
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
                Podcast Studio
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Podcast Studio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Create, distribute, and monetize podcasts with professional tools and Web3 technology.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Mic className="w-5 h-5 mr-2" />
                  Start Recording
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Play className="w-5 h-5 mr-2" />
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { label: "Episodes Created", value: "500K+", icon: Mic },
                { label: "Active Podcasters", value: "25K+", icon: Users },
                { label: "Monthly Downloads", value: "50M+", icon: Download },
                { label: "Revenue Generated", value: "$10M+", icon: TrendingUp }
              ].map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-green-400" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <PodcastStudioComponent />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
