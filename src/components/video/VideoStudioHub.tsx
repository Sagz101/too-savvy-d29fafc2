import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/services/auth';
import { 
  Video, 
  Upload, 
  Play, 
  Pause, 
  Settings, 
  Zap,
  Lock,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

interface VideoData {
  id: string;
  title: string;
  content: string;
  is_nft: boolean;
  view_count: number;
  like_count: number;
  created_at: string;
  tags: string[];
}

export const VideoStudioHub: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [uploading, setUploading] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    description: '',
    tags: '',
    is_nft: false,
  });

  const handleVideoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      // Simulate video upload and processing
      const videoId = Date.now().toString();
      const mockVideoData: VideoData = {
        id: videoId,
        title: newVideo.title || `Video ${videoId}`,
        content: newVideo.description,
        is_nft: newVideo.is_nft,
        view_count: 0,
        like_count: 0,
        created_at: new Date().toISOString(),
        tags: newVideo.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      };

      // Store in Supabase
      const { error } = await supabase
        .from('content')
        .insert([{
          title: mockVideoData.title,
          content: mockVideoData.content,
          creator_id: user?.id,
          content_type: 'video',
          tags: mockVideoData.tags,
          is_nft: mockVideoData.is_nft,
          is_published: true
        }]);

      if (error) throw error;

      setVideos(prev => [mockVideoData, ...prev]);
      setNewVideo({ title: '', description: '', tags: '', is_nft: false });
      
      toast({
        title: "Success",
        description: "Video uploaded successfully!",
      });
    } catch (error) {
      console.error('Error uploading video:', error);
      toast({
        title: "Error",
        description: "Failed to upload video",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="store-title mb-8">
          <span className="word">Video</span>
          <span className="word">Studio</span>
        </div>

        {/* Upload Section */}
        <Card className="bg-slate-800/50 border-cyan-400/20 mb-8">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload & Mint Video NFT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Video Title</label>
                <Input
                  placeholder="Enter video title..."
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Tags</label>
                <Input
                  placeholder="gaming, tutorial, nft"
                  value={newVideo.tags}
                  onChange={(e) => setNewVideo({...newVideo, tags: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">Description</label>
              <Input
                placeholder="Describe your video..."
                value={newVideo.description}
                onChange={(e) => setNewVideo({...newVideo, description: e.target.value})}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={newVideo.is_nft}
                  onChange={(e) => setNewVideo({...newVideo, is_nft: e.target.checked})}
                  className="rounded"
                />
                Mint as Video NFT
              </label>
            </div>
            <div className="flex gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleVideoUpload}
                accept="video/*"
                className="hidden"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-300 hover:to-purple-500 buy-button"
              >
                <Upload className="w-4 h-4 mr-2" />
                {uploading ? 'Uploading...' : 'Upload Video'}
                <svg className="wobbly-spotlight" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="rgba(0, 209, 255, 0.3)" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Videos Grid */}
        <div className="product-grid">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="product-card"
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="product-image bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                <Video className="w-12 h-12 text-purple-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="flex items-center gap-2">
                  {video.title}
                  {video.is_nft && <Lock className="w-4 h-4 text-yellow-400" />}
                </h3>
                <p>{video.content}</p>
                
                <div className="flex gap-2 mb-4 flex-wrap">
                  {video.tags?.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-purple-400 border-purple-400">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.view_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {video.like_count}
                    </span>
                  </div>
                  <span>{new Date(video.created_at).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Settings className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="empty-store">
            <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3>No videos yet</h3>
            <p>Upload your first video and mint it as an NFT!</p>
          </div>
        )}
      </div>
    </div>
  );
};