import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Mic, ArrowRight, Sparkles, Wallet, Image, Users, HelpCircle } from 'lucide-react';

interface Message {
  role: string;
  content: string;
  hasAction?: boolean;
}

export const AICopilot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'system', 
      content: 'Hi! I\'m Too AI Savvy. Your personal assistant for navigating Web3 and creating on Too Savvy. How can I help you today?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const suggestions = [
    { 
      text: "Create a new NFT collection", 
      icon: Image, 
      category: "NFT",
      action: () => handleSuggestionClick("I want to create a new NFT collection")
    },
    { 
      text: "Set up token-gated content", 
      icon: Wallet, 
      category: "Access",
      action: () => handleSuggestionClick("How do I set up token-gated content?")
    },
    { 
      text: "Show me my wallet analytics", 
      icon: Sparkles, 
      category: "Analytics",
      action: () => handleSuggestionClick("Show me my wallet analytics")
    },
    { 
      text: "What can I do with MediaNFTs?", 
      icon: HelpCircle, 
      category: "Learn",
      action: () => handleSuggestionClick("What can I do with MediaNFTs?")
    },
    { 
      text: "How do I join a DAO on Too Savvy?", 
      icon: Users, 
      category: "DAO",
      action: () => handleSuggestionClick("How do I join a DAO on Too Savvy?")
    }
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSubmit(undefined, suggestion);
  };
  
  const handleSubmit = (e?: React.FormEvent, suggestionText?: string) => {
    e?.preventDefault();
    const messageText = suggestionText || input;
    if (!messageText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: messageText }]);
    setIsTyping(true);
    
    // Simulate AI response with Too Savvy specific responses
    setTimeout(() => {
      let response = '';
      let hasAction = false;
      
      if (messageText.toLowerCase().includes('nft collection')) {
        response = 'Perfect! I can help you create an NFT collection. You\'ll need to choose your blockchain, set up metadata, and configure minting rules. Ready to get started?';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('token-gated')) {
        response = 'Token-gating lets you create exclusive content for NFT holders! I can help you set up access controls using ERC-721 or ERC-1155 tokens. Would you like to start with a specific collection?';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('wallet analytics')) {
        response = 'Your wallet analytics show: 0.5 ETH, 200 $NEURAX tokens, 3 NFTs, and 5 DAO memberships. Your portfolio has grown 15% this month! Want detailed insights?';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('medianfts')) {
        response = 'MediaNFTs on Too Savvy let you mint videos, audio, and interactive content! You can create collections, set royalties, enable tipping, and build communities around your media. What type of content are you planning?';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('dao')) {
        response = 'Joining DAOs on Too Savvy is easy! Browse active DAOs in the Global Innovators section, check membership requirements, and participate in governance. I can guide you through the process step-by-step.';
        hasAction = true;
      } else {
        response = 'I can help you with creating content, managing your portal, setting up NFTs, navigating DAOs, and optimizing your Web3 presence on Too Savvy. What would you like to explore?';
      }
      
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: response,
        hasAction 
      }]);
      setIsTyping(false);
    }, 1500);
    
    // Clear input
    setInput('');
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neura-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Meet Your AI Copilot
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto mb-2">
            Your personal assistant for navigating Web3 and creating on Too Savvy
          </p>
          <p className="text-white/50 text-sm">
            Powered by Web3-optimized AI
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-neura-purple/20 p-4 flex items-center">
                <div className="bg-gradient-to-br from-neura-purple/30 to-neura-cyan/30 p-2 rounded-full mr-3 relative">
                  <Bot className="w-5 h-5 text-neura-cyan" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-neura-dark"></div>
                </div>
                <div>
                  <h3 className="font-medium text-white">Too AI Savvy</h3>
                  <p className="text-white/60 text-xs">Web3 Assistant • Online</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <Badge variant="outline" className="text-xs border-neura-cyan/30 text-neura-cyan">
                    AI Powered
                  </Badge>
                </div>
              </div>
              
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-neura-dark/30">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-neura-purple/30 text-white' 
                        : 'bg-neura-dark/60 border border-neura-purple/20'
                    }`}>
                      <p className="text-white">{message.content}</p>
                      {message.hasAction && (
                        <Button 
                          size="sm" 
                          className="mt-2 bg-gradient-to-r from-neura-purple to-neura-cyan text-white"
                        >
                          Continue ➤
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-neura-dark/60 border border-neura-purple/20 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-neura-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-neura-purple/20">
                <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline"
                    className="border-neura-purple/30 text-white/70 hover:text-white hover:bg-neura-purple/10"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about NFTs, DAOs, token-gating, or anything Too Savvy..." 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white placeholder:text-white/50"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {suggestions.map((suggestion, index) => (
                    <SuggestionChip 
                      key={index} 
                      text={suggestion.text}
                      icon={suggestion.icon}
                      category={suggestion.category}
                      onClick={suggestion.action}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const SuggestionChip = ({ text, icon: Icon, category, onClick }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'NFT': return 'border-purple-400/30 bg-purple-400/10 text-purple-300';
      case 'Access': return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300';
      case 'Analytics': return 'border-green-400/30 bg-green-400/10 text-green-300';
      case 'Learn': return 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300';
      case 'DAO': return 'border-blue-400/30 bg-blue-400/10 text-blue-300';
      default: return 'border-neura-purple/30 bg-neura-purple/10 text-white/70';
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={onClick}
      className={`${getCategoryColor(category)} hover:bg-opacity-20 justify-start text-left h-auto p-2 transition-all duration-200 hover:scale-105`}
    >
      <Icon className="mr-2 h-3 w-3 flex-shrink-0" />
      <span className="text-xs truncate">{text}</span>
      <ArrowRight className="ml-auto h-3 w-3 opacity-50" />
    </Button>
  );
};
