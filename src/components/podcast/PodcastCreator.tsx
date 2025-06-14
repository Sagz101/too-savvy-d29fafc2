
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, Mic, Scissors, Volume2, Lock, Plus, X } from 'lucide-react';

export const PodcastCreator: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isTokenGated, setIsTokenGated] = useState(false);
  const [tags, setTags] = useState<string[]>(['Technology', 'Web3']);
  const [newTag, setNewTag] = useState('');

  const handleFileUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audio Recording & Upload */}
        <Card className="grok-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Recording & Upload
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Mic className="w-6 h-6 mb-2" />
                Record Audio
              </Button>
              <div 
                className="h-20 border-2 border-dashed border-border/50 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={handleFileUpload}
              >
                <Upload className="w-6 h-6 mb-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Upload File</span>
              </div>
            </div>

            {uploadProgress !== null && (
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Upload Progress</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
              </div>
            )}

            <div className="space-y-2">
              <Label>Audio Editing Tools</Label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Scissors className="w-4 h-4 mr-2" />
                  Trim
                </Button>
                <Button variant="outline" size="sm">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Effects
                </Button>
                <Button variant="outline" size="sm">
                  Add Intro/Outro
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Episode Metadata */}
        <Card className="grok-card">
          <CardHeader>
            <CardTitle>Episode Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="season">Season</Label>
                <Input id="season" placeholder="1" />
              </div>
              <div>
                <Label htmlFor="episode">Episode</Label>
                <Input id="episode" placeholder="12" />
              </div>
            </div>

            <div>
              <Label htmlFor="title">Episode Title</Label>
              <Input id="title" placeholder="Enter episode title" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Episode description..." rows={3} />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X size={12} className="cursor-pointer" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button variant="outline" size="sm" onClick={addTag}>
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Token-Gated Content */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Token-Gated Bonus Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Enable Token Gating</Label>
              <p className="text-sm text-muted-foreground">Restrict access to exclusive content</p>
            </div>
            <Switch checked={isTokenGated} onCheckedChange={setIsTokenGated} />
          </div>

          {isTokenGated && (
            <div className="space-y-4 border border-border/50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Access Requirements</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nft">Own Specific NFT</SelectItem>
                      <SelectItem value="token">Hold Token Amount</SelectItem>
                      <SelectItem value="wallet">Wallet Whitelist</SelectItem>
                      <SelectItem value="subscription">Active Subscription</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Minimum Amount/Address</Label>
                  <Input placeholder="e.g., 100 tokens or NFT address" />
                </div>
              </div>

              <div>
                <Label>Bonus Content</Label>
                <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload exclusive content for token holders
                  </p>
                  <Button variant="outline" size="sm">Choose Files</Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Show Notes & Links */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle>Show Notes & Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="shownotes">Show Notes</Label>
            <Textarea 
              id="shownotes" 
              placeholder="Detailed episode notes, timestamps, and key points..." 
              rows={6}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="website">Website/Blog Link</Label>
              <Input id="website" placeholder="https://..." />
            </div>
            <div>
              <Label htmlFor="social">Social Media</Label>
              <Input id="social" placeholder="@username or link" />
            </div>
          </div>

          <div>
            <Label>Transcript</Label>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Upload Transcript
              </Button>
              <Button variant="outline" className="flex-1">
                Auto-Generate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Save Draft</Button>
        <Button variant="outline">Schedule</Button>
        <Button className="grok-button-primary">Publish Episode</Button>
      </div>
    </div>
  );
};
