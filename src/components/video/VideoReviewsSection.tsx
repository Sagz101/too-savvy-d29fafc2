
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Users, MessageSquare, DollarSign, Video, ThumbsUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const VideoReviewsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden h-full">
            <div className="h-64 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Video className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-white">User-Generated Video Reviews</h3>
              <p className="text-white/70 mb-6">
                Empower your community to create authentic video testimonials about your products and services. 
                Incentivize high-quality reviews with $Neurax token rewards and store content permanently on IPFS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-neura-purple/10 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Upload className="w-5 h-5 text-neura-cyan" />
                    <h4 className="font-medium text-white">IPFS Storage</h4>
                  </div>
                  <p className="text-sm text-white/70">Customer review videos are stored on decentralized IPFS/Filecoin</p>
                </div>
                
                <div className="bg-neura-purple/10 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-neura-cyan" />
                    <h4 className="font-medium text-white">Token Rewards</h4>
                  </div>
                  <p className="text-sm text-white/70">Creators earn $Neurax tokens for engaging video content</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">IPFS Storage</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Filecoin</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">$Neurax Rewards</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Community Verification</span>
              </div>
              
              <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
                Upload Video Review <Upload className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
            <CardContent className="p-4">
              <h3 className="font-medium text-white mb-3">Reward Structure</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-neura-purple/20">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-neura-cyan" />
                    <p className="text-sm text-white">Video Upload</p>
                  </div>
                  <Badge className="bg-neura-purple/20 hover:bg-neura-purple/30">2 $NRAX</Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neura-purple/20">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-neura-cyan" />
                    <p className="text-sm text-white">10+ Likes</p>
                  </div>
                  <Badge className="bg-neura-purple/20 hover:bg-neura-purple/30">5 $NRAX</Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neura-purple/20">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neura-cyan" />
                    <p className="text-sm text-white">Featured Review</p>
                  </div>
                  <Badge className="bg-neura-purple/20 hover:bg-neura-purple/30">25 $NRAX</Badge>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-neura-purple/30">
                <p className="text-xs text-white/60">
                  $NRAX tokens can be used for purchases, staked for discounts, or traded on supported exchanges.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
            <CardContent className="p-4">
              <h3 className="font-medium text-white mb-3">Featured Reviews</h3>
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video bg-neura-dark/70 flex items-center justify-center">
                    <Video className="w-8 h-8 text-neura-purple/50" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-xs text-white font-medium">Product Review: Neural Headset</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video bg-neura-dark/70 flex items-center justify-center">
                    <Video className="w-8 h-8 text-neura-purple/50" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-xs text-white font-medium">Unboxing: AR Glasses</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  View All Reviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Community Verification System</h3>
              <p className="text-white/70 mb-4">
                Our decentralized verification system ensures authenticity while allowing for genuine criticism.
                Community members stake tokens to verify reviews, earning rewards for accurate assessments.
              </p>
              
              <div className="bg-neura-purple/10 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-neura-cyan" />
                  <h4 className="font-medium text-white">Verification Flow</h4>
                </div>
                <ol className="space-y-2 text-sm text-white/70 list-decimal list-inside">
                  <li>Community member uploads video review</li>
                  <li>Validators stake tokens to verify authenticity</li>
                  <li>Consensus determines verification status</li>
                  <li>Rewards distributed to honest validators</li>
                </ol>
              </div>
              
              <Button className="bg-neura-purple/20 hover:bg-neura-purple/30 text-white">
                Become a Validator
              </Button>
            </div>
            
            <div>
              <Card className="bg-neura-dark/80 border-neura-purple/20 mb-4">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white mb-3">Activity Feed</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 pb-2 border-b border-neura-purple/20">
                      <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">JD</span>
                      </div>
                      <div>
                        <p className="text-sm text-white">John D. uploaded a new review</p>
                        <p className="text-xs text-white/50">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-2 border-b border-neura-purple/20">
                      <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">AS</span>
                      </div>
                      <div>
                        <p className="text-sm text-white">Alice S. earned 7 $NRAX</p>
                        <p className="text-xs text-white/50">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">MR</span>
                      </div>
                      <div>
                        <p className="text-sm text-white">Mike R. became a validator</p>
                        <p className="text-xs text-white/50">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-neura-dark/30 border border-neura-purple/20 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Current Stats</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-semibold text-white">127</p>
                    <p className="text-xs text-white/60">Video Reviews</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">43</p>
                    <p className="text-xs text-white/60">Validators</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">1.2K</p>
                    <p className="text-xs text-white/60">$NRAX Earned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
