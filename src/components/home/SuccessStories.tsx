import React from 'react';
import { Award, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CreatorStoryProps {
  name: string;
  handle: string;
  role: string;
  earnings: string;
  quote: string;
  image: string;
  tools: string[];
  growth: string;
  headline: string;
  online?: boolean;
}

const CreatorCard: React.FC<CreatorStoryProps> = ({
  name,
  handle,
  role,
  earnings,
  quote,
  image,
  tools,
  growth,
  headline,
  online
}) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
      {/* Headline Banner */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-3 mb-4">
        <p className="text-sm font-medium text-indigo-300 text-center">{headline}</p>
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-14 h-14 rounded-full ring-2 ring-indigo-500/30 object-cover"
          />
          {online && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
          )}
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{name}</h4>
          <p className="text-sm text-indigo-400">{handle}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-sm italic border-l-2 border-indigo-500 pl-4 mb-4">
        "{quote}"
      </blockquote>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800/40 rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-white">{earnings}</div>
          <div className="text-xs text-gray-400">Total Earnings</div>
        </div>
        <div className="bg-gray-800/40 rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {growth}
          </div>
          <div className="text-xs text-gray-400">Growth</div>
        </div>
      </div>

      {/* Tools Used */}
      <div className="border-t border-gray-800 pt-4 mb-4">
        <p className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-yellow-500" />
          Tools Used
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Button 
        variant="outline" 
        className="w-full border-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-colors"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Message Creator
      </Button>
    </div>
  );
};

export const SuccessStories: React.FC = () => {
  const stories: CreatorStoryProps[] = [
    {
      name: 'Maya Chen',
      handle: '@mayacreates',
      role: 'Digital Artist',
      earnings: '$12,847',
      quote: "Diminga helped me turn my traditional art into a thriving NFT business, earning 300% more than my gallery sales.",
      image: 'https://placehold.co/100x100/312e81/ffffff?text=MC',
      tools: ['Video Studio', 'E-commerce', 'AI Copilot'],
      growth: '+325%',
      headline: "Maya Chen: 300% More Earnings vs. Gallery Sales",
      online: true
    },
    {
      name: 'Alex Rodriguez',
      handle: '@alexmusic',
      role: 'Music Producer',
      earnings: '$8,934',
      quote: "I built a global fanbase through tokenized music releases and interactive live streaming on Diminga.",
      image: 'https://placehold.co/100x100/5b21b6/ffffff?text=AR',
      tools: ['Music Creator', 'Social Hub', 'Threaditor'],
      growth: '+189%',
      headline: "Alex Rodriguez: Built Global Fanbase with Tokenized Music",
      online: false
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-yellow-400">✨</span>
            Creator Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Meet the creators who are redefining their careers and earnings on Diminga's decentralized network.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {stories.map((story, index) => (
            <CreatorCard key={index} {...story} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Ready to write your own success story?</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-semibold"
            asChild
          >
            <Link to="/studio">
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
