
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff,
  Users,
  Settings
} from 'lucide-react';
import { toast } from 'sonner';

interface VideoCallProps {
  isCallActive: boolean;
  onStartCall: () => void;
  onEndCall: () => void;
  participants?: string[];
}

export const VideoCall: React.FC<VideoCallProps> = ({ 
  isCallActive, 
  onStartCall, 
  onEndCall,
  participants = []
}) => {
  const [hasVideo, setHasVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isCallActive && !localStream) {
      initializeMedia();
    }
    
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCallActive]);

  const initializeMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: hasVideo,
        audio: !isMuted
      });
      
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      toast.success('Camera and microphone accessed');
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast.error('Failed to access camera/microphone');
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

  const toggleMute = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  const handleStartCall = () => {
    onStartCall();
    toast.success('Video call started');
  };

  const handleEndCall = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }
    onEndCall();
    toast.success('Video call ended');
  };

  if (!isCallActive) {
    return (
      <Card className="bg-neura-dark/60 border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-green-400" />
            Video Call
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">
                {participants.length} participants ready
              </span>
            </div>
            <Badge variant="outline" className="border-green-500/50 text-green-400">
              WebRTC Ready
            </Badge>
          </div>
          
          <Button 
            onClick={handleStartCall}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Phone className="w-4 h-4 mr-2" />
            Start Video Call
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-neura-dark/80 border-green-500/30">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-green-400" />
            Active Call
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
            Connected
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Video Streams */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
              You
            </div>
          </div>
          
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
              Remote User
            </div>
          </div>
        </div>

        {/* Call Controls */}
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant={isMuted ? "destructive" : "outline"}
            onClick={toggleMute}
          >
            {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          
          <Button
            size="sm"
            variant={hasVideo ? "outline" : "destructive"}
            onClick={toggleVideo}
          >
            {hasVideo ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
          </Button>
          
          <Button size="sm" variant="outline">
            <Settings className="w-4 h-4" />
          </Button>
          
          <Button
            size="sm"
            variant="destructive"
            onClick={handleEndCall}
          >
            <PhoneOff className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
