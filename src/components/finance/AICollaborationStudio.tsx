
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, FileCode, Image, Music, FileText } from "lucide-react";
import { AICollaboration } from '@/services/wallet';

type AICollaborationStudioProps = {
  aiCollaborations: AICollaboration[];
  onCreateCollaboration?: (title: string, type: 'music' | 'visual' | 'text' | 'code', aiProvider: string, humanOwnershipPercent: number) => Promise<boolean>;
};

export const AICollaborationStudio: React.FC<AICollaborationStudioProps> = ({
  aiCollaborations,
  onCreateCollaboration
}) => {
  // Helper to get appropriate icon for content type
  const getTypeIcon = (type: 'music' | 'visual' | 'text' | 'code') => {
    switch (type) {
      case 'music': return <Music className="w-5 h-5" />;
      case 'visual': return <Image className="w-5 h-5" />;
      case 'text': return <FileText className="w-5 h-5" />;
      case 'code': return <FileCode className="w-5 h-5" />;
    }
  };
  
  // Helper to get status badge color
  const getStatusBadge = (status: 'draft' | 'published' | 'minted') => {
    switch (status) {
      case 'draft': 
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Draft</Badge>;
      case 'published': 
        return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">Published</Badge>;
      case 'minted': 
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Minted</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Zap className="w-5 h-5 mr-2 text-neura-cyan" />
            AI Collaboration Studio
          </CardTitle>
          <CardDescription>
            Co-create with decentralized AI tools and trace ownership
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {aiCollaborations.map((collab) => (
              <Card key={collab.id} className="bg-neura-dark border-neura-purple/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-3">
                        {getTypeIcon(collab.type)}
                      </div>
                      <div>
                        <div className="font-medium">{collab.title}</div>
                        <div className="text-xs text-white/70">{collab.aiProvider}</div>
                      </div>
                    </div>
                    {getStatusBadge(collab.status)}
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Human contribution</span>
                      <span>AI contribution</span>
                    </div>
                    <div className="h-2 w-full bg-neura-dark rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neura-purple to-neura-cyan" 
                        style={{ width: `${collab.ownership.human}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>{collab.ownership.human}%</span>
                      <span>{collab.ownership.ai}%</span>
                    </div>
                  </div>
                  <div className="text-xs text-white/50">Created: {collab.created}</div>
                </CardContent>
                <CardFooter className="border-t border-neura-purple/20 pt-3">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  >
                    {collab.status === 'draft' ? 'Continue Creating' : collab.status === 'published' ? 'Mint as NFT' : 'View Details'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="bg-neura-dark border-neura-purple/10 flex flex-col items-center justify-center p-6 hover:bg-neura-dark/70 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                <Zap className="w-7 h-7 text-neura-cyan" />
              </div>
              <div className="text-center">
                <div className="font-medium mb-1">New AI Collaboration</div>
                <div className="text-xs text-white/70">Music, visuals, text, or code</div>
              </div>
            </Card>
          </div>
          
          <Card className="bg-neura-dark/80 border-neura-purple/10 p-4">
            <div className="font-medium mb-3">Featured AI Tools</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Giza Protocol", type: "visual", logo: "G" },
                { name: "Bittensor", type: "music", logo: "B" },
                { name: "DeAI Network", type: "text", logo: "D" },
                { name: "Neural Protocol", type: "code", logo: "N" }
              ].map((tool, i) => (
                <Card key={i} className="bg-neura-dark border-neura-purple/10 p-3 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mb-2">
                    {tool.logo}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{tool.name}</div>
                    <div className="text-xs text-white/50">{tool.type}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </CardContent>
        <CardFooter className="border-t border-neura-purple/20 pt-4 flex justify-between">
          <Button 
            variant="outline" 
            className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
          >
            Browse AI Tools
          </Button>
          <Button 
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
          >
            Start New Collaboration
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
