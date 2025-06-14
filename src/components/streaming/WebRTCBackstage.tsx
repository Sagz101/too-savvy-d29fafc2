
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mic, MicOff, Video, VideoOff, Users, MessageSquare, Phone, PhoneOff } from 'lucide-react';
import { toast } from 'sonner';

interface Participant {
  id: string;
  name: string;
  isHost: boolean;
  isMuted: boolean;
  hasVideo: boolean;
  isConnected: boolean;
}

interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: Date;
}

export const WebRTCBackstage: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: '1',
      name: 'Host (You)',
      isHost: true,
      isMuted: false,
      hasVideo: true,
      isConnected: true
    }
  ]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      userId: '1',
      userName: 'Host',
      message: 'Welcome to the backstage area! Feel free to ask questions.',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // Initialize WebRTC when component mounts
    return () => {
      // Cleanup streams when component unmounts
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const joinBackstage = async () => {
    try {
      toast.loading('Joining backstage area...');
      
      // Request user media
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      setLocalStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setIsConnected(true);
      setHasVideo(true);
      
      // Simulate joining
      const newParticipant: Participant = {
        id: Date.now().toString(),
        name: 'You',
        isHost: false,
        isMuted: false,
        hasVideo: true,
        isConnected: true
      };
      
      setParticipants(prev => [...prev, newParticipant]);
      
      toast.success('Connected to backstage area');
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast.error('Failed to access camera/microphone');
    }
  };

  const leaveBackstage = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    
    setIsConnected(false);
    setHasVideo(false);
    setIsMuted(false);
    
    // Remove from participants
    setParticipants(prev => prev.filter(p => p.name !== 'You'));
    
    toast.success('Left backstage area');
  };

  const toggleMute = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !hasVideo;
        setHasVideo(!hasVideo);
      }
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      userId: 'user',
      userName: 'You',
      message: newMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Area */}
      <div className="lg:col-span-2">
        <Card className="grok-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              Backstage WebRTC Room
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isConnected ? (
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Join Backstage Area</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with the host and other VIP members for an exclusive experience
                  </p>
                  <Button onClick={joinBackstage} className="grok-button-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Join Backstage
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-center gap-2">
                  <Button
                    variant={isMuted ? "destructive" : "outline"}
                    size="sm"
                    onClick={toggleMute}
                  >
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant={hasVideo ? "outline" : "destructive"}
                    size="sm"
                    onClick={toggleVideo}
                  >
                    {hasVideo ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={leaveBackstage}
                  >
                    <PhoneOff className="w-4 h-4 mr-2" />
                    Leave
                  </Button>
                </div>
              </div>
            )}

            <Separator />

            {/* Participants */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">
                Participants ({participants.length})
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center gap-2 p-2 bg-muted/50 rounded-md"
                  >
                    <div className={`w-2 h-2 rounded-full ${participant.isConnected ? 'bg-emerald-400' : 'bg-red-400'}`} />
                    <span className="text-sm text-foreground">{participant.name}</span>
                    {participant.isHost && (
                      <Badge variant="outline" className="text-xs">Host</Badge>
                    )}
                    {participant.isMuted && <MicOff className="w-3 h-3 text-muted-foreground" />}
                    {!participant.hasVideo && <VideoOff className="w-3 h-3 text-muted-foreground" />}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Panel */}
      <div>
        <Card className="grok-card h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Backstage Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-[500px]">
            <div className="flex-1 space-y-3 overflow-y-auto mb-4">
              {chatMessages.map((message) => (
                <div key={message.id} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {message.userName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-2 border-l-2 border-primary/20">
                    {message.message}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="grok-input"
                disabled={!isConnected}
              />
              <Button 
                onClick={sendMessage} 
                size="sm" 
                className="grok-button-primary"
                disabled={!isConnected || !newMessage.trim()}
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
