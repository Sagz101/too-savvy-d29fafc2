
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Send, 
  Sparkles, 
  FileText, 
  Video, 
  Music, 
  Image, 
  Code,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Copy,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'content-idea' | 'web3-tutorial' | 'code-snippet';
  metadata?: {
    category?: string;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
  };
}

interface ContentSuggestion {
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  prompt: string;
}

const contentSuggestions: ContentSuggestion[] = [
  {
    title: "NFT Collection Concept",
    description: "Generate unique NFT collection ideas with themes, rarity tiers, and utility",
    icon: Image,
    category: "NFT",
    prompt: "Help me create a unique NFT collection concept including theme, art style, rarity tiers, and utility features for holders"
  },
  {
    title: "Video Content Script",
    description: "Create engaging scripts for Web3 educational content",
    icon: Video,
    category: "Content",
    prompt: "Write a script for a 5-minute video explaining [topic] in simple terms for newcomers to Web3"
  },
  {
    title: "Podcast Episode Ideas",
    description: "Generate podcast topics about DeFi, DAOs, and Web3 trends",
    icon: Music,
    category: "Podcast",
    prompt: "Suggest 5 engaging podcast episode topics about current Web3 trends with detailed outlines"
  },
  {
    title: "Smart Contract Explanation",
    description: "Learn how smart contracts work with simple examples",
    icon: Code,
    category: "Learning",
    prompt: "Explain smart contracts in simple terms with a practical example relevant to content creators"
  },
  {
    title: "Token Economics Design",
    description: "Design tokenomics for your creator economy project",
    icon: Sparkles,
    category: "DeFi",
    prompt: "Help me design tokenomics for a creator platform including token distribution, utility, and governance mechanisms"
  },
  {
    title: "Blog Post Ideas",
    description: "Generate Web3 blog post topics and outlines",
    icon: FileText,
    category: "Writing",
    prompt: "Generate 3 blog post ideas about Web3 for creators with detailed outlines and key points to cover"
  }
];

export const AIContentAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your AI assistant for Renegade. I can help you generate content ideas, learn about Web3 concepts, write scripts, design tokenomics, and much more. What would you like to create or learn about today?",
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'NFT', 'Content', 'Learning', 'DeFi', 'Writing', 'Podcast'];

  const filteredSuggestions = selectedCategory === 'all' 
    ? contentSuggestions 
    : contentSuggestions.filter(s => s.category === selectedCategory);

  const handleSuggestionClick = (suggestion: ContentSuggestion) => {
    setInput(suggestion.prompt);
    handleSubmit(undefined, suggestion.prompt);
  };

  const handleSubmit = async (e?: React.FormEvent, customInput?: string) => {
    e?.preventDefault();
    const messageContent = customInput || input;
    if (!messageContent.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageContent,
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response with Web3 and content creation context
    setTimeout(() => {
      let response = '';
      let responseType: Message['type'] = 'text';
      let metadata: Message['metadata'] = {};

      if (messageContent.toLowerCase().includes('nft')) {
        response = generateNFTResponse(messageContent);
        responseType = 'content-idea';
        metadata = { category: 'NFT', difficulty: 'intermediate' };
      } else if (messageContent.toLowerCase().includes('smart contract')) {
        response = generateSmartContractResponse();
        responseType = 'web3-tutorial';
        metadata = { category: 'Smart Contracts', difficulty: 'beginner' };
      } else if (messageContent.toLowerCase().includes('tokenomics')) {
        response = generateTokenomicsResponse();
        responseType = 'content-idea';
        metadata = { category: 'DeFi', difficulty: 'advanced' };
      } else if (messageContent.toLowerCase().includes('video') || messageContent.toLowerCase().includes('script')) {
        response = generateVideoScriptResponse();
        responseType = 'content-idea';
        metadata = { category: 'Content', difficulty: 'beginner' };
      } else if (messageContent.toLowerCase().includes('podcast')) {
        response = generatePodcastResponse();
        responseType = 'content-idea';
        metadata = { category: 'Podcast', difficulty: 'intermediate' };
      } else {
        response = generateGeneralResponse(messageContent);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        type: responseType,
        metadata
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const generateNFTResponse = (input: string) => {
    return `🎨 **NFT Collection Concept: "Cosmic Creators"**

**Theme**: Space-age digital artists and their creative tools
**Art Style**: Cyberpunk meets cosmic art with vibrant neon colors
**Supply**: 10,000 unique NFTs

**Rarity Tiers**:
• **Common (60%)**: Basic cosmic artists with standard tools
• **Rare (25%)**: Artists with enhanced abilities and special effects
• **Epic (10%)**: Master creators with legendary tools and auras
• **Legendary (4%)**: Cosmic beings with reality-bending creative powers
• **Mythic (1%)**: The original creators of the digital universe

**Utility Features**:
✅ Access to exclusive creator workshops and masterclasses
✅ Voting rights in the Cosmic Creators DAO
✅ Commercial usage rights for your NFT
✅ Early access to new platform features
✅ Staking rewards in $COSMIC tokens
✅ Collaboration opportunities with other holders

**Roadmap Highlights**:
📱 Mobile app for NFT holders
🎮 Play-to-earn game integration
🏛️ Virtual gallery spaces in the metaverse
🤝 Partnership with major Web3 platforms

Would you like me to develop any specific aspect further?`;
  };

  const generateSmartContractResponse = () => {
    return `🔗 **Understanding Smart Contracts for Creators**

A **smart contract** is like a digital vending machine - you put something in (like cryptocurrency), and if conditions are met, you automatically get something out (like an NFT or access to content).

**Real Example for Creators**:
Imagine you're selling access to exclusive content:

\`\`\`solidity
// Simplified smart contract example
contract CreatorContent {
    mapping(address => bool) public hasAccess;
    uint256 public price = 0.01 ether;
    
    function buyAccess() public payable {
        require(msg.value >= price, "Not enough payment");
        hasAccess[msg.sender] = true;
    }
}
\`\`\`

**How it works**:
1. **Condition**: User pays 0.01 ETH
2. **Action**: Contract automatically grants access
3. **No middleman**: No platform fees or delays

**Benefits for Creators**:
✅ **Automated payments** - No manual processing
✅ **Global reach** - Anyone with crypto can participate
✅ **Transparent** - All transactions are public
✅ **Programmable** - Set complex rules and conditions
✅ **Composable** - Integrate with other Web3 tools

**Use Cases**:
• Token-gated content access
• Automatic royalty distribution
• NFT minting and sales
• Fan funding and donations
• Collaborative project management

Want to learn about a specific smart contract use case?`;
  };

  const generateTokenomicsResponse = () => {
    return `💰 **Creator Platform Tokenomics Design**

**Token**: $CREATE (Total Supply: 1,000,000,000)

**Distribution**:
• **Community & Creators (40%)**: Rewards, incentives, airdrops
• **Platform Development (25%)**: Team, advisors, development fund
• **Ecosystem Growth (20%)**: Partnerships, marketing, grants
• **Liquidity & Exchange (10%)**: DEX liquidity, CEX listings
• **Reserve Fund (5%)**: Emergency fund, future development

**Token Utility**:
🎯 **Governance**: Vote on platform upgrades and policies
💸 **Payment**: Pay for premium features and services
🏆 **Staking**: Earn rewards by staking tokens
🎁 **Rewards**: Earn tokens for creating quality content
🛡️ **Access**: Token-gate exclusive features and content

**Earning Mechanisms**:
• **Content Creation**: Earn tokens for posts, videos, streams
• **Community Engagement**: Rewards for comments, likes, shares
• **Referral Program**: Earn when you bring new creators
• **Staking Rewards**: 8-12% APY for long-term holders
• **Governance Participation**: Bonus tokens for active voters

**Spending Mechanisms**:
• **Premium Features**: Advanced analytics, custom themes
• **Promotion**: Boost content visibility
• **NFT Minting**: Pay fees in $CREATE tokens
• **Marketplace Fees**: Reduced fees when paying with tokens

**Deflationary Mechanisms**:
• **Token Burns**: 2% of platform fees burned monthly
• **Achievement Burns**: Burn tokens for exclusive badges
• **Governance Costs**: Small token burn for proposal submissions

Would you like me to detail any specific aspect of the tokenomics?`;
  };

  const generateVideoScriptResponse = () => {
    return `🎬 **Video Script: "Web3 for Creators in 5 Minutes"**

**[INTRO - 0:00-0:30]**
*[Upbeat music, creator at desk with Web3 graphics]*

"Hey creators! Tired of platforms taking huge cuts from your work? What if I told you there's a way to truly own your content, connect directly with fans, and earn more? Welcome to Web3 for creators!"

**[PROBLEM - 0:30-1:30]**
*[Screen showing traditional platform issues]*

"Traditional platforms control everything:
- They keep 30-50% of your earnings
- They can ban or shadow-ban you anytime  
- You don't own your audience or content
- Algorithm changes can kill your reach overnight"

**[SOLUTION - 1:30-3:00]**
*[Web3 graphics and examples]*

"Web3 changes the game completely:

**NFTs**: Turn your art, music, or videos into unique digital assets you truly own
**Crypto Payments**: Get paid directly by fans worldwide, instantly
**DAOs**: Build communities where fans have voting power
**Token-Gating**: Create exclusive content for your biggest supporters"

**[REAL EXAMPLES - 3:00-4:00]**
*[Show actual Web3 creator success stories]*

"Creators like Beeple sold NFT art for $69 million, musicians like 3LAU made $11 million from tokenized albums, and thousands of creators now earn more through Web3 than traditional platforms!"

**[CALL TO ACTION - 4:00-5:00]**
*[Show Renegade platform]*

"Ready to join the Web3 creator revolution? Renegade makes it easy - no coding required! Create NFTs, set up token-gated content, and build your Web3 presence today.

Link in description - let's build the future of creativity together!"

**[END SCREEN]**
*Subscribe for more Web3 creator tips!*

**Production Notes**:
- Keep energy high throughout
- Use visual examples for each Web3 concept
- Include actual dollar amounts/statistics
- Strong call-to-action with clear next steps`;
  };

  const generatePodcastResponse = () => {
    return `🎙️ **5 Hot Podcast Episode Ideas for Web3 Creators**

**Episode 1: "From Zero to NFT Hero"**
*Interview format with successful NFT artists*
- Guest: Artist who made first $100k from NFTs
- Topics: Common mistakes, pricing strategies, community building
- Duration: 45 minutes
- Key takeaway: Practical steps to launch first NFT collection

**Episode 2: "DAO or Don't? Building Creator Communities"**
*Deep dive into creator DAOs*
- Case studies: Friends with Benefits, ConstitutionDAO
- How to structure governance tokens
- Legal considerations and best practices
- Guest: DAO founder or governance expert

**Episode 3: "The Metaverse Gold Rush: Where Creators Fit In"**
*Exploring opportunities in virtual worlds*
- Virtual real estate for creators
- Hosting events in Decentraland/Sandbox
- Creating wearables and digital goods
- Monetization strategies in virtual spaces

**Episode 4: "Web3 Fails an Lessons Learned"**
*Honest discussion about Web3 pitfalls*
- Common scams to avoid
- Project failures and why they happened
- Gas fees and transaction costs reality
- When Web2 might still be better

**Episode 5: "The Future of Creator Economics"**
*Forward-looking discussion*
- AI + Web3 collaboration opportunities
- Prediction markets for content
- Cross-chain creator tools
- What Web4 might look like

**Recurring Segments**:
🔥 **"Mint of the Week"**: Highlight interesting NFT drops
📊 **"Token Tracker"**: Creator token price movements
🤝 **"Collab Corner"**: Successful creator partnerships
⚡ **"Quick Tip"**: 60-second Web3 creator hack

**Monetization**:
- Sponsor reads from Web3 tools/platforms
- Premium subscriber-only episodes
- NFT drops for listeners
- Token-gated bonus content

Which episode would you like me to develop a full outline for?`;
  };

  const generateGeneralResponse = (input: string) => {
    return `I'd be happy to help you with that! As your Web3 creator assistant, I can help you with:

🎨 **Content Creation**: Scripts, ideas, NFT concepts, social media content
📚 **Web3 Education**: Blockchain basics, DeFi, NFTs, smart contracts  
💡 **Platform Features**: How to use Renegade's tools effectively
🚀 **Creator Strategy**: Monetization, community building, marketing
💰 **Tokenomics**: Design token systems for your projects

Could you be more specific about what you'd like help with? For example:
- "Help me create an NFT collection about..."
- "Explain how to set up token-gated content"
- "Write a script for a video about..."
- "Design tokenomics for my creator project"

I'm here to make Web3 creation easier for you!`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Content Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredSuggestions.map((suggestion, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border border-neura-purple/20 bg-neura-dark/50" onClick={() => handleSuggestionClick(suggestion)}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-neura-purple/20 p-2 rounded-lg">
                  <suggestion.icon className="w-5 h-5 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{suggestion.title}</h3>
                  <p className="text-sm text-white/70 mb-2">{suggestion.description}</p>
                  <Badge variant="outline" className="text-xs border-neura-cyan/30 text-neura-cyan">
                    {suggestion.category}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chat Interface */}
      <Card className="bg-neura-dark/50 border-neura-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-neura-cyan" />
            <span className="text-white">AI Content Assistant</span>
            <Badge className="bg-green-500/20 text-green-400">Online</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Messages */}
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-neura-purple/30 text-white' 
                    : 'bg-neura-dark/60 border border-neura-purple/20 text-white'
                }`}>
                  {message.metadata && (
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-neura-cyan/30 text-neura-cyan">
                        {message.metadata.category}
                      </Badge>
                      {message.metadata.difficulty && (
                        <Badge variant="outline" className="text-xs border-neura-purple/30 text-neura-purple">
                          {message.metadata.difficulty}
                        </Badge>
                      )}
                    </div>
                  )}
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  {message.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-white/10">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(message.content)}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neura-dark/60 border border-neura-purple/20 p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Web3, content creation, or Renegade..."
              className="flex-1 bg-neura-dark/50 border-neura-purple/30 text-white placeholder:text-white/50"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-neura-purple to-neura-cyan">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
