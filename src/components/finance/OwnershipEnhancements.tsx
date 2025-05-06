
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link2, Users, Shield, Zap } from "lucide-react";
import { CrossPlatformIdentity, ProvenanceNode } from "@/services/wallet";

type OwnershipEnhancementsProps = {
  provenanceGraph: ProvenanceNode[];
  crossPlatformIdentities: CrossPlatformIdentity[];
};

export const OwnershipEnhancements: React.FC<OwnershipEnhancementsProps> = ({
  provenanceGraph,
  crossPlatformIdentities
}) => {
  return (
    <div className="space-y-6">
      {/* Cross-Platform Identity Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Link2 className="w-5 h-5 mr-2 text-neura-cyan" />
            Cross-Platform Identity
          </CardTitle>
          <CardDescription>
            Connect and verify your identity across Web3 platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {crossPlatformIdentities.map((identity, index) => (
              <Card key={index} className="bg-neura-dark border-neura-purple/10 p-3">
                <div className="flex items-center">
                  {identity.iconUrl ? (
                    <img src={identity.iconUrl} alt={identity.provider} className="w-8 h-8 rounded-full mr-3" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center mr-3">
                      <Link2 className="w-4 h-4 text-neura-cyan" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium">{identity.provider}</div>
                    <div className="text-xs text-white/70 truncate max-w-[150px]">{identity.displayName}</div>
                  </div>
                  {identity.verified && (
                    <Badge className="ml-auto bg-green-500/20 text-green-500 border-green-500/30">
                      Verified
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
            <Card className="bg-neura-dark border-neura-purple/10 p-3 flex items-center justify-center hover:bg-neura-dark/70 cursor-pointer">
              <div className="text-center">
                <div className="text-sm font-medium">Connect New</div>
                <div className="text-xs text-white/50">Add identity</div>
              </div>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="border-t border-neura-purple/20 pt-4">
          <Button 
            variant="outline" 
            className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10"
          >
            Manage Identities
          </Button>
        </CardFooter>
      </Card>
      
      {/* On-Chain Provenance Graph Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Shield className="w-5 h-5 mr-2 text-neura-cyan" />
            On-Chain Provenance
          </CardTitle>
          <CardDescription>
            Track the origin and derivatives of your creative work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              {provenanceGraph.map((node, index) => (
                <div 
                  key={node.id} 
                  className={`
                    border border-neura-purple/30 rounded-lg p-3 mb-4
                    ${index > 0 ? 'ml-8' : ''}
                  `}
                >
                  {index > 0 && (
                    <div className="absolute -left-4 top-1/2 h-8 w-4 border-l-2 border-b-2 border-neura-purple/30 rounded-bl-lg -mt-10"></div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">{node.title}</div>
                      <div className="text-xs text-white/70">By: {node.creator}</div>
                      <div className="text-xs text-white/50">Created: {node.creationDate}</div>
                    </div>
                    <div>
                      {node.verified && (
                        <Badge className="bg-neura-cyan/20 text-neura-cyan border-neura-cyan/30">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 text-xs flex justify-between">
                    <div>
                      {node.descendants > 0 && `${node.descendants} derivatives`}
                    </div>
                    {node.transactionHash && (
                      <div className="text-neura-cyan cursor-pointer">
                        View on-chain
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-neura-purple/20 pt-4">
          <Button 
            variant="outline" 
            className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10"
          >
            Register New Work
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
