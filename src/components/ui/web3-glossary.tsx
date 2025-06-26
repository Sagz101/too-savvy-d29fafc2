
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, ExternalLink } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'basics' | 'advanced' | 'platform';
  examples?: string[];
  relatedTerms?: string[];
}

export const Web3Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const glossaryTerms: GlossaryTerm[] = [
    {
      term: 'NFT',
      definition: 'Non-Fungible Token - A unique digital certificate stored on blockchain that proves ownership of a specific digital item or content.',
      category: 'basics',
      examples: ['Digital art', 'Music tracks', 'Video content', 'Collectibles'],
      relatedTerms: ['Smart Contract', 'Blockchain', 'Token']
    },
    {
      term: 'Smart Contract',
      definition: 'Self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met.',
      category: 'basics',
      examples: ['Automatic royalty payments', 'Token distribution', 'Access control'],
      relatedTerms: ['NFT', 'DAO', 'DeFi']
    },
    {
      term: 'DAO',
      definition: 'Decentralized Autonomous Organization - A community-led organization with no central authority, governed by smart contracts and token holders.',
      category: 'advanced',
      examples: ['Community voting', 'Funding decisions', 'Platform governance'],
      relatedTerms: ['Governance Token', 'Smart Contract']
    },
    {
      term: 'Gas Fees',
      definition: 'Transaction fees paid to process operations on blockchain networks. Think of it as the cost to use the blockchain highway.',
      category: 'basics',
      examples: ['Minting NFTs', 'Trading tokens', 'Smart contract execution'],
      relatedTerms: ['Blockchain', 'Transaction']
    },
    {
      term: 'Wallet',
      definition: 'A digital tool that stores your cryptocurrencies and NFTs. It\'s like your account and identity in the Web3 world.',
      category: 'basics',
      examples: ['MetaMask', 'WalletConnect', 'Coinbase Wallet'],
      relatedTerms: ['Private Key', 'Public Address']
    },
    {
      term: 'Token-Gated Content',
      definition: 'Exclusive content that can only be accessed by owning specific tokens or NFTs. It\'s like having a VIP pass.',
      category: 'platform',
      examples: ['Premium tutorials', 'Exclusive community access', 'Early content releases'],
      relatedTerms: ['NFT', 'Access Control']
    },
    {
      term: 'Royalties',
      definition: 'Automatic payments creators receive every time their NFT is sold or traded. Set once, earn forever.',
      category: 'platform',
      examples: ['5% on each resale', 'Automatic creator payments', 'Passive income'],
      relatedTerms: ['Smart Contract', 'NFT']
    },
    {
      term: 'DeFi',
      definition: 'Decentralized Finance - Financial services built on blockchain without traditional banks or intermediaries.',
      category: 'advanced',
      examples: ['Decentralized exchanges', 'Lending protocols', 'Yield farming'],
      relatedTerms: ['Smart Contract', 'Token']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Terms', color: 'bg-gray-500' },
    { id: 'basics', label: 'Basics', color: 'bg-green-500' },
    { id: 'platform', label: 'Platform', color: 'bg-blue-500' },
    { id: 'advanced', label: 'Advanced', color: 'bg-purple-500' }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basics': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'platform': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'advanced': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Web3 Glossary</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Master Web3 terminology with our comprehensive glossary. From basics to advanced concepts, 
          understand the language of decentralized creation.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search terms or definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedCategory === category.id 
                  ? 'bg-cyan-400 text-black' 
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Glossary Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((item, index) => (
          <Card key={index} className="bg-slate-800/50 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl text-white">{item.term}</CardTitle>
                <Badge className={getCategoryColor(item.category)}>
                  {item.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {item.definition}
              </p>

              {item.examples && (
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Examples:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.relatedTerms && (
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Related Terms:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.relatedTerms.map((related, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs bg-slate-700/30 text-gray-400 border-gray-600 cursor-pointer hover:border-cyan-400/50"
                        onClick={() => setSearchTerm(related)}
                      >
                        {related}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No terms found matching your search.</p>
          <p className="text-gray-500 text-sm mt-2">Try a different search term or category.</p>
        </div>
      )}

      {/* Additional Resources */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 border border-cyan-400/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Need More Help?</h3>
            <p className="text-gray-300 mb-4">
              Explore our comprehensive learning resources and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge 
                className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30 cursor-pointer hover:bg-cyan-400/20 transition-colors px-4 py-2"
                onClick={() => window.open('#tutorials', '_blank')}
              >
                <ExternalLink size={14} className="mr-2" />
                Video Tutorials
              </Badge>
              <Badge 
                className="bg-blue-400/10 text-blue-400 border-blue-400/30 cursor-pointer hover:bg-blue-400/20 transition-colors px-4 py-2"
                onClick={() => window.open('#community', '_blank')}
              >
                <ExternalLink size={14} className="mr-2" />
                Community Support
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
