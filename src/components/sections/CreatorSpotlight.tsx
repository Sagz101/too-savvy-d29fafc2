
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  TrendingUp,
  Award,
  Users,
  ExternalLink
} from 'lucide-react';

export const CreatorSpotlight: React.FC = () => {
  const [activeCreator, setActiveCreator] = useState(0);

  const creators = [
    {
      name: 'Maya Chen',
      handle: '@mayacreates',
      category: 'Digital Artist',
      avatar: '/placeholder.svg',
      earnings: '$12,847',
      followers: '8.2K',
      story: 'Turned her traditional art into a thriving NFT business, earning 300% more than her gallery sales.',
      achievements: ['Top Creator 2024', 'Community Choice Award'],
      modules: ['Video Studio', 'E-commerce', 'AI Copilot'],
      featured_work: {
        title: 'Cosmic Dreams Collection',
        views: '24.7K',
        likes: '1.2K',
        comments: '89'
      }
    },
    {
      name: 'Alex Rodriguez',
      handle: '@alexmusic',
      category: 'Music Producer',
      avatar: '/placeholder.svg',
      earnings: '$8,934',
      followers: '12.1K',
      story: 'Built a global fanbase through tokenized music releases and interactive live streaming.',
      achievements: ['Rising Star', 'Innovation Award'],
      modules: ['Music Creator', 'Social Hub', 'Threaditor'],
      featured_work: {
        title: 'Web3 Symphony #1',
        views: '31.2K',
        likes: '2.1K',
        comments: '156'
      }
    },
    {
      name: 'Jordan Kim',
      handle: '@jordanwrites',
      category: 'Content Creator',
      avatar: '/placeholder.svg',
      earnings: '$15,623',
      followers: '15.7K',
      story: 'Created a decentralized newsletter that generates passive income through community governance.',
      achievements: ['Thought Leader', 'Best Content 2024'],
      modules: ['Threaditor', 'Social Hub', 'Commerce Store'],
      featured_work: {
        title: 'The Future of Work',
        views: '45.3K',
        likes: '3.7K',
        comments: '243'
      }
    }
  ];

  const communityStats = [
    { label: 'Total Creator Earnings', value: '$2.1M+', growth: '+24.3%' },
    { label: 'Active Communities', value: '847', growth: '+18.2%' },
    { label: 'NFTs Minted', value: '421K+', growth: '+15.7%' },
    { label: 'Cross-Platform Reach', value: '12.8M', growth: '+31.4%' }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          Creator Success Stories
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Real creators, real success. See how our community is building sustainable Web3 businesses.
        </p>
      </div>

      {/* Community Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {communityStats.map((stat, index) => (
          <Card key={index} className="bg-background/40 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300 mb-2">{stat.label}</div>
              <Badge className="text-xs bg-web3-green/20 text-web3-green border-web3-green/30">
                <TrendingUp size={10} className="mr-1" />
                {stat.growth}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Creator Spotlight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {creators.map((creator, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
              activeCreator === index 
                ? 'ring-2 ring-web3-cyan bg-web3-cyan/5 scale-105' 
                : 'bg-background/40 backdrop-blur-sm hover:bg-background/60'
            }`}
            onClick={() => setActiveCreator(index)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-web3-cyan to-web3-purple flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{creator.name}</h3>
                  <p className="text-sm text-gray-400">{creator.handle}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {creator.category}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-web3-green">{creator.earnings}</div>
                  <div className="text-xs text-gray-400">Monthly Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-web3-cyan">{creator.followers}</div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">{creator.story}</p>

              {/* Featured Work */}
              <div className="bg-background/60 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{creator.featured_work.title}</span>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                    <Play size={12} />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Play size={10} />
                    {creator.featured_work.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={10} />
                    {creator.featured_work.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={10} />
                    {creator.featured_work.comments}
                  </span>
                </div>
              </div>

              {/* Modules Used */}
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">Tools Used:</div>
                <div className="flex flex-wrap gap-1">
                  {creator.modules.map((module, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {module}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap gap-2">
                {creator.achievements.map((achievement, idx) => (
                  <Badge key={idx} className="text-xs bg-web3-accent/20 text-web3-accent border-web3-accent/30">
                    <Award size={10} className="mr-1" />
                    {achievement}
                  </Badge>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Community CTA */}
      <div className="bg-gradient-to-r from-web3-purple/20 to-web3-cyan/20 rounded-2xl p-8 border border-web3-cyan/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Creator Community
            </h3>
            <p className="text-gray-300 mb-6">
              Connect with successful creators, share strategies, and grow together. 
              Our Discord community has over 15,000 active members sharing tips and collaborating.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Users size={16} className="text-web3-cyan" />
                15,247 Members
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={16} className="text-web3-purple" />
                24/7 Support
              </span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <Button
              size="lg"
              className="bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90 text-white font-semibold mb-4"
              asChild
            >
              <Link to="/neura-social">
                Join Community
                <ExternalLink size={20} className="ml-2" />
              </Link>
            </Button>
            <div className="text-sm text-gray-400">
              Get exclusive insights and early access to new features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
