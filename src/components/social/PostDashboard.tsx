
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Upload, 
  Calendar, 
  Tag, 
  Eye, 
  Send,
  Image,
  Video,
  FileText
} from 'lucide-react';

interface PostData {
  content: string;
  title: string;
  tags: string[];
  scheduledTime: string;
  mediaFiles: File[];
  selectedPlatforms: string[];
  enableSmartLink: boolean;
}

export const PostDashboard: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    content: '',
    title: '',
    tags: [],
    scheduledTime: '',
    mediaFiles: [],
    selectedPlatforms: [],
    enableSmartLink: true
  });

  const [newTag, setNewTag] = useState('');

  const platforms = [
    { id: 'twitter', name: 'Twitter/X', enabled: true },
    { id: 'linkedin', name: 'LinkedIn', enabled: true },
    { id: 'telegram', name: 'Telegram', enabled: false },
    { id: 'discord', name: 'Discord', enabled: false },
    { id: 'reddit', name: 'Reddit', enabled: false }
  ];

  const addTag = () => {
    if (newTag && !postData.tags.includes(newTag)) {
      setPostData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPostData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const togglePlatform = (platformId: string) => {
    setPostData(prev => ({
      ...prev,
      selectedPlatforms: prev.selectedPlatforms.includes(platformId)
        ? prev.selectedPlatforms.filter(id => id !== platformId)
        : [...prev.selectedPlatforms, platformId]
    }));
  };

  const handlePublish = () => {
    console.log('Publishing post:', postData);
    // TODO: Implement publishing logic with smart contract integration
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Compose Post
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              placeholder="Enter post title..."
              value={postData.title}
              onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              placeholder="What's on your mind?"
              rows={4}
              value={postData.content}
              onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Tags</label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button onClick={addTag} variant="outline" size="sm">
                  <Tag className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-1">
                {postData.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => removeTag(tag)}
                  >
                    #{tag} ×
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Schedule</label>
              <Input
                type="datetime-local"
                value={postData.scheduledTime}
                onChange={(e) => setPostData(prev => ({ ...prev, scheduledTime: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Media Upload</label>
            <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag & drop files here, or click to browse
              </p>
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm">
                  <Image className="w-4 h-4 mr-1" />
                  Image
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4 mr-1" />
                  Video
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-1" />
                  Document
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Platform Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{platform.name.slice(0, 2)}</span>
                  </div>
                  <span className="font-medium">{platform.name}</span>
                  {!platform.enabled && <Badge variant="outline">Coming Soon</Badge>}
                </div>
                <Switch 
                  checked={postData.selectedPlatforms.includes(platform.id)}
                  onCheckedChange={() => togglePlatform(platform.id)}
                  disabled={!platform.enabled}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Smart Link Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Enable Smart Link Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Generate trackable links with $Neurax rewards
              </p>
            </div>
            <Switch 
              checked={postData.enableSmartLink}
              onCheckedChange={(enabled) => setPostData(prev => ({ ...prev, enableSmartLink: enabled }))}
            />
          </div>

          {postData.enableSmartLink && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Smart link will be generated with format:
              </p>
              <code className="text-sm bg-background p-2 rounded block">
                https://neurasocial.xyz/link/abc123?ref=0xAb3...
              </code>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button onClick={handlePublish} className="flex-1">
          <Send className="w-4 h-4 mr-2" />
          Publish Now
        </Button>
      </div>
    </div>
  );
};
