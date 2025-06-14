
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  FileText, 
  Upload, 
  Eye, 
  Send,
  Image,
  Link2,
  DollarSign,
  Coins
} from 'lucide-react';

interface PostData {
  title: string;
  content: string;
  tags: string[];
  isThread: boolean;
  isPremium: boolean;
  mintAsNFT: boolean;
  enableTipping: boolean;
}

export const WriterDashboard: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    content: '',
    tags: [],
    isThread: false,
    isPremium: false,
    mintAsNFT: true,
    enableTipping: true
  });

  const [newTag, setNewTag] = useState('');

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

  const handlePublish = () => {
    console.log('Publishing post:', postData);
    // TODO: Implement IPFS upload and NFT minting logic
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Write New Post
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title</label>
            <Input
              placeholder="Enter your post title..."
              value={postData.title}
              onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              placeholder="Write your story... (Markdown supported)"
              rows={12}
              value={postData.content}
              onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Supports Markdown formatting, embedded media, and citations
            </p>
          </div>

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
                Add
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

          <div className="border-t pt-4">
            <h3 className="font-medium mb-3">Publishing Options</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Mint as NFT</label>
                  <p className="text-sm text-muted-foreground">
                    Create permanent, tradable record on-chain
                  </p>
                </div>
                <Switch 
                  checked={postData.mintAsNFT}
                  onCheckedChange={(checked) => setPostData(prev => ({ ...prev, mintAsNFT: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Thread Series</label>
                  <p className="text-sm text-muted-foreground">
                    Part of an ongoing report or investigation
                  </p>
                </div>
                <Switch 
                  checked={postData.isThread}
                  onCheckedChange={(checked) => setPostData(prev => ({ ...prev, isThread: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Premium Content</label>
                  <p className="text-sm text-muted-foreground">
                    Requires token payment to access
                  </p>
                </div>
                <Switch 
                  checked={postData.isPremium}
                  onCheckedChange={(checked) => setPostData(prev => ({ ...prev, isPremium: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Enable Tipping</label>
                  <p className="text-sm text-muted-foreground">
                    Allow readers to tip $NEURAX or ETH
                  </p>
                </div>
                <Switch 
                  checked={postData.enableTipping}
                  onCheckedChange={(checked) => setPostData(prev => ({ ...prev, enableTipping: checked }))}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Add Media
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Preview
        </Button>
        <Button onClick={handlePublish} className="flex items-center gap-2">
          <Send className="w-4 h-4" />
          Publish
        </Button>
      </div>
    </div>
  );
};
