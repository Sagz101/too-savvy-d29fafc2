
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Video, 
  Mic, 
  Shield, 
  Users, 
  Phone,
  Headphones,
  Camera,
  Lock,
  Zap
} from 'lucide-react';
import { SecureMessaging } from './SecureMessaging';
import { VoiceRecorder } from './VoiceRecorder';
import { VideoCall } from './VideoCall';
import { useEnhancedWallet } from '@/services/wallet/useEnhancedWallet';
import { toast } from 'sonner';

export const Web3MessagingHub: React.FC = () => {
  const { isConnected, address } = useEnhancedWallet();
  const [activeCall, setActiveCall] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');

  const handleVoiceMessage = async (audioBlob: Blob, duration: number) => {
    if (!isConnected) {
      toast.error('Please connect your wallet to send voice messages');
      return;
    }
    
    console.log('Voice message received:', { audioBlob, duration });
    // Here you would upload to IPFS and send via XMTP
    toast.success('Voice message processing...');
  };

  const handleStartCall = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet to start video calls');
      return;
    }
    setActiveCall(true);
  };

  const handleEndCall = () => {
    setActiveCall(false);
  };

  if (!isConnected) {
    return (
      <Card className="bg-neura-dark/60 border-red-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-400" />
            Web3 Messaging Hub
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Wallet Required</h3>
            <p className="text-white/70 max-w-md mx-auto">
              Connect your Web3 wallet to access secure, decentralized messaging with voice and video capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                <MessageCircle className="w-3 h-3 mr-1" />
                E2E Encrypted
              </Badge>
              <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                <Mic className="w-3 h-3 mr-1" />
                Voice Messages
              </Badge>
              <Badge variant="outline" className="border-green-500/50 text-green-400">
                <Video className="w-3 h-3 mr-1" />
                Video Calls
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Web3 Messaging Hub</h2>
          <p className="text-white/70">
            Secure, decentralized communication with voice and video
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-green-500/50 text-green-400">
            <Zap className="w-3 h-3 mr-1" />
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Voice
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Video
          </TabsTrigger>
          <TabsTrigger value="contacts" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Contacts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <SecureMessaging />
        </TabsContent>

        <TabsContent value="voice" className="space-y-4">
          <div className="grid gap-4">
            <Card className="bg-neura-dark/60 border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-400" />
                  Voice Messaging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">
                  Record and send encrypted voice messages directly to wallet addresses.
                </p>
                <VoiceRecorder onVoiceMessage={handleVoiceMessage} />
              </CardContent>
            </Card>

            {/* Voice Call History */}
            <Card className="bg-neura-dark/60 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-sm">Recent Voice Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-white/50 py-4">
                  No voice messages yet. Start recording to send your first message!
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="video" className="space-y-4">
          <div className="grid gap-4">
            <VideoCall
              isCallActive={activeCall}
              onStartCall={handleStartCall}
              onEndCall={handleEndCall}
              participants={['0x1234...5678']}
            />

            {/* Video Call Features */}
            <Card className="bg-neura-dark/60 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-green-400" />
                  Video Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">P2P Encrypted</h4>
                      <p className="text-xs text-white/70">WebRTC security</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Group Calls</h4>
                      <p className="text-xs text-white/70">Up to 8 participants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Voice Only</h4>
                      <p className="text-xs text-white/70">Audio-only mode</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contacts" className="space-y-4">
          <Card className="bg-neura-dark/60 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                Web3 Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Mock contacts */}
                {[
                  { address: '0xAbc...123', ens: 'alice.eth', status: 'online' },
                  { address: '0xDef...456', ens: 'bob.eth', status: 'offline' },
                  { address: '0xGhi...789', ens: 'charlie.eth', status: 'busy' }
                ].map((contact, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        contact.status === 'online' ? 'bg-green-400' :
                        contact.status === 'busy' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`} />
                      <div>
                        <p className="font-medium text-white">{contact.ens}</p>
                        <p className="text-xs text-white/50">{contact.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
