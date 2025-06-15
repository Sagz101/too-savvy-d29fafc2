
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Video,
  Users,
  Radio,
  Mic2,
  Music,
  Rocket,
  ImagePlus,
  Store,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    icon: Home,
    to: "/",
  },
  {
    name: "Creator Studio",
    icon: Video,
    to: "/creator-studio",
  },
  {
    name: "Global Innovators",
    icon: Rocket,
    to: "/global-innovators",
  },
  {
    name: "Live Streaming",
    icon: Mic2,
    to: "/live-streaming",
  },
  {
    name: "Video NFTs",
    icon: Store,
    to: "/video-nfts",
  },
  {
    name: "AR Visualization",
    icon: ImagePlus,
    to: "/ar-visualization",
  },
  {
    name: "Podcast Studio",
    icon: Radio,
    to: "/podcast-studio",
  },
  {
    name: "Music Creation",
    icon: Music,
    to: "/music-creation",
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <aside className="bg-background border-r border-border/40 h-screen px-3 pt-8 flex flex-col w-64 fixed z-40">
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-3 px-3">
          <span className="text-2xl font-porscha text-neura-cyan">T00 Savvy</span>
        </Link>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-neura-cyan/10 transition-colors ${
                  location.pathname === item.to ? "bg-neura-cyan/20 text-neura-cyan" : "text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
