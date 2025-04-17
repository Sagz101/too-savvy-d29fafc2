
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Shield, Lock, Key, Clock } from 'lucide-react';

export const BlockchainEmailPreview: React.FC = () => {
  return (
    <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-neura-purple/20 to-neura-cyan/20 border-b border-neura-purple/30 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-neura-cyan" />
            <h3 className="font-bold text-white">Blockchain Email</h3>
          </div>
          <Badge className="bg-neura-purple text-white">Beta</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <Shield className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">End-to-End Encryption</h4>
              <p className="text-white/70 text-sm mt-1">Your messages are encrypted using your wallet's keys, ensuring only intended recipients can read them.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <Lock className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">Token-Gated Access</h4>
              <p className="text-white/70 text-sm mt-1">Control who can contact you by requiring senders to hold specific tokens or NFTs.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <Key className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">Decentralized Identity</h4>
              <p className="text-white/70 text-sm mt-1">Your blockchain address serves as your unique email identity, verified through cryptographic signatures.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <Clock className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">Permanent Storage</h4>
              <p className="text-white/70 text-sm mt-1">Messages are stored permanently on IPFS and referenced through blockchain transactions, ensuring data longevity.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
