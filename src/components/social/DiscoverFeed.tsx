import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Store, Link2, Lock, Star, Zap, StarOff, UsersRound, BarChart3, Video,
  Podcast,
  BookOpen,
  ShoppingCart,
} from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Mock data simulating cross-component visibility
const mockContent = [
  {
    id: "nft-video-123",
    type: "Video NFT",
    component: "Creator Studio",
    title: "Neo-Genesis",
    creator: "0xAbc...789",
    creatorName: "AlexVision",
    reputation: 82,
    preview: "/placeholder.svg",
    ipfsHash: "QmNeoGEN",
    smartLink: "/nft/video123?ref=0xAbc",
    price: "0.05 ETH",
    royalty: "5%",
    gated: false,
    engagement: { clicks: 24, reposts: 10 },
    snippet: "AI-enhanced digital short. Own onchain.",
  },
  {
    id: "podcast-ep-19",
    type: "Podcast Episode",
    component: "Podcast Studio",
    title: "Web3 Creator Economy",
    creator: "0xDdd...147",
    creatorName: "LunaCast",
    reputation: 71,
    preview: "/placeholder.svg",
    ipfsHash: "QmPodEp19",
    smartLink: "/podcast/ep19?ref=0xDdd",
    price: "Free",
    royalty: "0%",
    gated: true,
    engagement: { clicks: 12, reposts: 6 },
    snippet: "Dive into the new frontier of creative freedom.",
  },
  {
    id: "thread-post-777",
    type: "Threaditor Post",
    component: "Threaditor",
    title: "Surviving Bear Markets",
    creator: "0xFac...333",
    creatorName: "EchoThink",
    reputation: 61,
    preview: "/placeholder.svg",
    ipfsHash: "QmThread777",
    smartLink: "/thread/777?ref=0xFac",
    price: "2 $Neurax",
    royalty: "0%",
    gated: true,
    engagement: { clicks: 32, reposts: 18 },
    snippet: "Lessons on resilience from top creators.",
  },
  {
    id: "shop-44",
    type: "Product",
    component: "E-Commerce",
    title: "AR Limited Tee",
    creator: "0xBac...321",
    creatorName: "RinaDesigns",
    reputation: 75,
    preview: "/placeholder.svg",
    ipfsHash: "QmShop44",
    smartLink: "/shop/44?ref=0xBac",
    price: "$38.00",
    royalty: "10%",
    gated: false,
    engagement: { clicks: 8, reposts: 3 },
    snippet: "Futuristic apparel with AR unlockables.",
  },
];

const componentIcons = {
  "Video NFT": <Video className="w-5 h-5 text-blue-400" />,
  "Podcast Episode": <Podcast className="w-5 h-5 text-pink-400" />,
  "Threaditor Post": <BookOpen className="w-5 h-5 text-emerald-400" />,
  "Product": <Store className="w-5 h-5 text-yellow-300" />,
};

const filters = [
  { label: "All", value: "all" },
  { label: "Video NFTs", value: "Video NFT" },
  { label: "Podcasts", value: "Podcast Episode" },
  { label: "Threaditor Posts", value: "Threaditor Post" },
  { label: "Products", value: "Product" },
];

export function DiscoverFeed() {
  const [selected, setSelected] = useState("all");
  const { toast } = useToast();

  const filteredContent =
    selected === "all"
      ? mockContent
      : mockContent.filter((item) => item.type === selected);

  // Action Handlers (stubs)
  const onBoost = (title: string) =>
    toast({
      title: "Boost Content (Coming Soon)",
      description: `You will be able to boost "${title}" by staking $Neurax.`,
    });
  const onBuyUnlock = (item: any) =>
    toast({
      title: item.gated ? "Unlock Content (Soon)" : "Buy Content (Soon)",
      description: `Access for ${item.price} or with tokens/NFTs coming soon!`,
    });
  const onEngage = (title: string) =>
    toast({
      title: "Earn by Engaging (Soon)",
      description: `Like, share, repost "${title}" to earn $Neurax rewards.`,
    });
  const onViewAnalytics = (title: string) =>
    toast({
      title: "Coming Soon",
      description: `Analytics dashboard for "${title}" will be available soon!`,
    });

  return (
    <section className="py-4">
      <div className="mb-6 flex flex-wrap gap-3 items-center">
        {filters.map((f) => (
          <Button
            size="sm"
            key={f.value}
            variant={selected === f.value ? "default" : "outline"}
            className={selected === f.value ? "bg-neura-cyan" : "border-neura-cyan/40 text-white"}
            onClick={() => setSelected(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredContent.map((item) => (
          <Card key={item.id} className="bg-neura-dark/80 border border-neura-cyan/30 hover:border-neura-cyan/60 transition-all duration-200 shadow-xl">
            <CardContent className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {componentIcons[item.type]}
                <span className="font-semibold text-base text-white">
                  {item.title}
                </span>
                <Badge className="bg-neura-cyan/20 text-neura-cyan ml-auto">
                  {item.type}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">{item.snippet}</div>
              <div className="flex items-center gap-2">
                <UsersRound className="w-4 h-4 text-neura-cyan/80" />
                <span className="text-xs text-white">{item.creatorName}</span>
                <span className="text-xs text-muted-foreground">
                  ({item.creator.slice(0, 7)}... · Rep: {item.reputation})
                </span>
              </div>
              {item.gated && (
                <div className="flex items-center mt-2 mb-1">
                  <Lock className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-xs text-yellow-300">
                    Token-Gated Content
                  </span>
                </div>
              )}
              <div className="flex gap-3 items-center">
                <Badge className="bg-neura-cyan/10 text-neura-cyan">
                  {item.component}
                </Badge>
                <Badge className="bg-neura-cyan/10 text-neura-cyan">
                  {item.price}
                </Badge>
                <Badge className="bg-emerald-600/20 text-emerald-400">
                  {item.royalty} Royalty
                </Badge>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Link2 className="w-4 h-4 text-neura-cyan/70" />
                  Smart Link:
                  <a
                    href={item.smartLink}
                    className="underline text-neura-cyan/80 font-mono"
                  >
                    {item.smartLink}
                  </a>
                </span>
                <span className="ml-auto text-xs flex gap-2">
                  <span className="text-neura-cyan/80">
                    +{item.engagement.clicks} Clicks
                  </span>
                  <span className="text-purple-400">
                    +{item.engagement.reposts} Reposts
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2 md:grid-cols-4">
                {/* Boost Content */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => onBoost(item.title)}
                      className="bg-[#FF5733] hover:bg-[#FF8954] text-white font-bold w-full"
                      size="sm"
                    >
                      <Zap className="w-4 h-4" /> Boost
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    Boost your content's visibility by staking $Neurax!
                  </TooltipContent>
                </Tooltip>
                {/* Buy/Unlock */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => onBuyUnlock(item)}
                      className="bg-[#2FA36B] hover:bg-[#30d281] text-white font-bold w-full"
                      size="sm"
                    >
                      <Lock className="w-4 h-4" /> {item.gated ? "Unlock" : "Buy"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    {item.gated ? "Unlock token-gated content" : "Buy this content"}
                  </TooltipContent>
                </Tooltip>
                {/* Engage & Earn */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => onEngage(item.title)}
                      className="bg-[#F8CC00] hover:bg-[#FFE066] text-black font-bold w-full"
                      size="sm"
                    >
                      <Star className="w-4 h-4" /> Engage &amp; Earn
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    Interact, repost, or engage to earn $Neurax rewards!
                  </TooltipContent>
                </Tooltip>
                {/* View Analytics */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => onViewAnalytics(item.title)}
                      className="bg-[#0086EF] hover:bg-[#00B2FF] text-white font-bold w-full"
                      size="sm"
                    >
                      <BarChart3 className="w-4 h-4" /> Analytics
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    View smart link & engagement analytics
                  </TooltipContent>
                </Tooltip>
              </div>
              <Button
                className="grok-button-primary mt-3 flex-grow"
                asChild
                size="sm"
              >
                <a href={item.smartLink}>View Details</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-xs text-muted-foreground mt-8 text-center">
        Content and metrics above simulate true cross-component, on-chain aggregation. To enable live content, integrate a backend (e.g., Supabase) and The Graph for indexing.
      </div>
    </section>
  );
}
