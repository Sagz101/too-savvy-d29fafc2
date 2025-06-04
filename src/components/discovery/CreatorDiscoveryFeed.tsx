
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Plus, 
  Heart,
  MessageSquare,
  Share2,
  Star,
  Zap,
  Music,
  Palette,
  Mic,
  Camera,
  Code,
  Shirt,
  BookOpen,
  Coffee
} from 'lucide-react';

interface Creator {
  id: string;
  name: string;
  avatar: string;
  sector: string;
  followers: number;
  recentDrop: string;
  isFollowing: boolean;
  isVerified: boolean;
  engagement: number;
  earnings: string;
}

const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'Alex Chen',
    avatar: '/placeholder.svg',
    sector: 'Art',
    followers: 2500,
    recentDrop: 'Digital Dreamscape #42',
    isFollowing: false,
    isVerified: true,
    engagement: 92,
    earnings: '12.5 ETH'
  },
  {
    id: '2',
    name: 'Maya Sound',
    avatar: '/placeholder.svg',
    sector: 'Music',
    followers: 8200,
    recentDrop: 'Cosmic Frequencies EP',
    isFollowing: true,
    isVerified: true,
    engagement: 87,
    earnings: '24.8 ETH'
  },
  {
    id: '3',
    name: 'Dev Thompson',
    avatar: '/placeholder.svg',
    sector: 'Tech',
    followers: 1800,
    recentDrop: 'Smart Contract Tutorial Series',
    isFollowing: false,
    isVerified: false,
    engagement: 76,
    earnings: '8.2 ETH'
  },
  {
    id: '4',
    name: 'Luna Podcast',
    avatar: '/placeholder.svg',
    sector: 'Podcasts',
    followers: 5600,
    recentDrop: 'Future of Web3 - Episode 23',
    isFollowing: false,
    isVerified: true,
    engagement: 94,
    earnings: '15.7 ETH'
  }
];

const sectors = [
  { name: 'Art', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Music', icon: Music, color: 'from-blue-500 to-cyan-500' },
  { name: 'Writing', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
  { name: 'Tech', icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'Podcasts', icon: Mic, color: 'from-indigo-500 to-purple-500' },
  { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-rose-500' },
  { name: 'Photography', icon: Camera, color: 'from-yellow-500 to-orange-500' },
  { name: 'Lifestyle', icon: Coffee, color: 'from-teal-500 to-blue-500' }
];

export const CreatorDiscoveryFeed = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [filterBy, setFilterBy] = useState<string>('trending');
  const [searchTerm, setSearchTerm] = useState('');
  const [creators, setCreators] = useState<Creator[]>(mockCreators);

  const handleFollow = (creatorId: string) => {
    setCreators(prev => 
      prev.map(creator => 
        creator.id === creatorId 
          ? { ...creator, isFollowing: !creator.isFollowing }
          : creator
      )
    );
  };

  const filteredCreators = creators.filter(creator => {
    const matchesSector = selectedSector === 'All' || creator.sector === selectedSector;
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.sector.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const sortedCreators = [...filteredCreators].sort((a, b) => {
    switch (filterBy) {
      case 'trending':
        return b.engagement - a.engagement;
      case 'followers':
        return b.followers - a.followers;
      case 'earnings':
        return parseFloat(b.earnings) - parseFloat(a.earnings);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Discover Global Creators</h2>
          <p className="text-white/70">Explore and connect with creators across DzuwaVerse</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neura-dark/60 border border-neura-purple/30 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-neura-purple/60"
            />
          </div>
          
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="bg-neura-dark/60 border border-neura-purple/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neura-purple/60"
          >
            <option value="trending">Trending</option>
            <option value="followers">Most Followers</option>
            <option value="earnings">Top Earners</option>
          </select>
        </div>
      </div>

      {/* Sector Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedSector === 'All' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedSector('All')}
          className={selectedSector === 'All' ? 'bg-neura-purple' : 'border-neura-purple/30 text-white hover:bg-neura-purple/20'}
        >
          All Sectors
        </Button>
        {sectors.map((sector) => {
          const IconComponent = sector.icon;
          return (
            <Button
              key={sector.name}
              variant={selectedSector === sector.name ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedSector(sector.name)}
              className={selectedSector === sector.name ? 'bg-neura-purple' : 'border-neura-purple/30 text-white hover:bg-neura-purple/20'}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {sector.name}
            </Button>
          );
        })}
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCreators.map((creator) => (
          <Card key={creator.id} className="bg-neura-dark/60 border-neura-purple/30 hover:border-neura-purple/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                    <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{creator.name}</h3>
                      {creator.isVerified && (
                        <Star className="w-4 h-4 text-neura-cyan fill-current" />
                      )}
                    </div>
                    <Badge variant="outline" className="border-neura-purple/30 text-neura-cyan text-xs">
                      {creator.sector}
                    </Badge>
                  </div>
                </div>
                
                <Button
                  size="sm"
                  variant={creator.isFollowing ? 'default' : 'outline'}
                  onClick={() => handleFollow(creator.id)}
                  className={creator.isFollowing 
                    ? 'bg-neura-purple hover:bg-neura-purple/80' 
                    : 'border-neura-purple/30 text-white hover:bg-neura-purple/20'
                  }
                >
                  {creator.isFollowing ? 'Following' : 'Follow'}
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-white/70 text-sm">Latest Drop:</p>
                  <p className="text-white font-medium text-sm">{creator.recentDrop}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-white/70">
                    <Users className="w-4 h-4" />
                    <span>{creator.followers.toLocaleString()} followers</span>
                  </div>
                  <div className="flex items-center gap-1 text-neura-cyan">
                    <TrendingUp className="w-4 h-4" />
                    <span>{creator.engagement}% engagement</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neura-purple/20">
                  <div className="text-sm">
                    <span className="text-white/70">Earned: </span>
                    <span className="text-white font-medium">{creator.earnings}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-white/70 hover:text-white p-2">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white/70 hover:text-white p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-neura-purple to-neura-cyan hover:from-neura-purple/80 hover:to-neura-cyan/80 text-white px-3"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Collaborate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Suggestions */}
      <Card className="bg-gradient-to-r from-neura-purple/20 to-neura-cyan/20 border-neura-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Zap className="w-5 h-5 text-neura-cyan" />
            AI-Powered Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-4">Based on your activity and interests, you might want to connect with:</p>
          <div className="flex flex-wrap gap-2">
            {mockCreators.slice(0, 3).map((creator) => (
              <Badge 
                key={creator.id}
                variant="outline" 
                className="border-neura-cyan/30 text-neura-cyan hover:bg-neura-cyan/10 cursor-pointer"
              >
                {creator.name} ({creator.sector})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
