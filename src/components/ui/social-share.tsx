
import React from 'react';
import { Button } from "@/components/ui/button";
import { shareContent, type SocialPlatform } from "@/services/social-sharing";
import { toast } from "sonner";

interface SocialShareProps {
  url: string;
  title?: string;
  text?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title, text }) => {
  const platforms = [
    { name: 'Twitter', icon: 'twitter', color: 'bg-[#1DA1F2]' },
    { name: 'Facebook', icon: 'facebook', color: 'bg-[#4267B2]' },
    { name: 'LinkedIn', icon: 'linkedin', color: 'bg-[#0077B5]' },
    { name: 'Telegram', icon: 'telegram', color: 'bg-[#0088cc]' },
    { name: 'WhatsApp', icon: 'whatsapp', color: 'bg-[#25D366]' },
  ];

  const handleShare = async (platformName: string) => {
    const platform = platformName.toLowerCase() as SocialPlatform;
    const result = await shareContent({ url, title, text }, platform);
    
    if (result) {
      toast.success(`Shared on ${platformName}`, {
        description: "Your content has been shared successfully"
      });
    } else {
      toast.error("Sharing failed", {
        description: `Could not share to ${platformName}`
      });
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-medium text-white mb-1">Share On</h3>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <Button
            key={platform.name}
            variant="outline"
            size="sm"
            className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
            onClick={() => handleShare(platform.name.toLowerCase())}
          >
            {platform.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
