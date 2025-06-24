
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Mic, ArrowRight, Sparkles, Wallet, Image, Users, HelpCircle, BookOpen, Code, FileText, Video, Music } from 'lucide-react';
import { AIContentAssistant } from '@/components/ai/AIContentAssistant';

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
      content: 'Hi! I\'m Too AI Savvy, your personal Web3 assistant. I can help you create content, learn about Web3, generate NFT ideas, write scripts, design tokenomics, and navigate Too Savvy. How can I help you today?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showFullAssistant, setShowFullAssistant] = useState(false);
  
  const suggestions = [
    { 
      text: "Generate NFT collection ideas", 
      icon: Image, 
      category: "NFT",
      action: () => handleSuggestionClick("Help me create a unique NFT collection concept with themes and utilities")
    },
    { 
      text: "Write a video script about Web3", 
      icon: Video, 
      category: "Content",
      action: () => handleSuggestionClick("Write a script for a 5-minute video explaining Web3 to creators")
    },
    { 
      text: "Explain smart contracts simply", 
      icon: Code, 
      category: "Learning",
      action: () => handleSuggestionClick("Explain smart contracts in simple terms with examples for creators")
    },
    { 
      text: "Design tokenomics for creators", 
      icon: Sparkles, 
      category: "DeFi",
      action: () => handleSuggestionClick("Help me design tokenomics for a creator platform")
    },
    { 
      text: "Podcast episode ideas", 
      icon: Music, 
      category: "Podcast",
      action: () => handleSuggestionClick("Generate 5 podcast episode ideas about Web3 for creators")
    },
    { 
      text: "Set up token-gated content", 
      icon: Wallet, 
      category: "Platform",
      action: () => handleSuggestionClick("How do I set up token-gated content on Too Savvy?")
    },
    { 
      text: "Blog post about DAOs", 
      icon: FileText, 
      category: "Writing",
      action: () => handleSuggestionClick("Help me write a blog post explaining DAOs to newcomers")
    },
    { 
      text: "Join creator communities", 
      icon: Users, 
      category: "Community",
      action: () => handleSuggestionClick("How do I find and join Web3 creator communities?")
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
    
    // Simulate AI response with enhanced Web3 and content creation responses
    setTimeout(() => {
      let response = '';
      let hasAction = false;
      
      if (messageText.toLowerCase().includes('nft collection') || messageText.toLowerCase().includes('nft concept')) {
        response = '🎨 Great! I can help you create an amazing NFT collection. I\'ll generate concepts with themes, rarity tiers, utility features, and roadmap ideas. For detailed collection planning, let me open the full AI assistant where I can provide comprehensive guidance!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('video script') || messageText.toLowerCase().includes('script')) {
        response = '🎬 Perfect! I can write engaging video scripts about Web3 topics. I\'ll create structured scripts with intros, key points, examples, and strong calls-to-action. Let me show you the full assistant for detailed script writing!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('smart contract')) {
        response = '🔗 Smart contracts are like digital vending machines - automated agreements that execute when conditions are met. For creators, they enable automatic payments, royalties, and access control. Want a detailed explanation with examples? Let me open the advanced assistant!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('tokenomics')) {
        response = '💰 Tokenomics design is crucial for creator platforms! I can help you plan token distribution, utility, governance, and economic models. For comprehensive tokenomics planning with charts and examples, let\'s use the full assistant!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('podcast')) {
        response = '🎙️ Podcast content about Web3 is super valuable! I can generate episode ideas, outlines, guest suggestions, and monetization strategies. For detailed podcast planning, let me open the content creation assistant!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('token-gated')) {
        response = '🛡️ Token-gating lets you create exclusive content for NFT or token holders! On Too Savvy, you can easily set access requirements using ERC-721 or ERC-1155 tokens. Want step-by-step setup instructions? Let\'s dive deeper!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('blog') || messageText.toLowerCase().includes('dao')) {
        response = '📝 Writing about DAOs is a great way to educate the community! I can help you structure articles, explain complex concepts simply, and create engaging content. For detailed writing assistance, let me open the full content assistant!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('community') || messageText.toLowerCase().includes('join')) {
        response = '🤝 Web3 creator communities are amazing for networking and learning! I can recommend Discord servers, Twitter spaces, DAOs, and platforms where creators collaborate. Want personalized community recommendations? Let\'s explore options!';
        hasAction = true;
      } else {
        response = 'I can help you with Web3 concepts, content creation, NFT strategies, smart contracts, tokenomics, and navigating Too Savvy! I specialize in making complex Web3 topics simple and actionable for creators. What specific area interests you most?';
        hasAction = true;
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

  if (showFullAssistant) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neura-cyan/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowFullAssistant(false)}
              variant="outline"
              className="mb-4 border-neura-purple/30 text-white hover:bg-neura-purple/10"
            >
              ← Back to Quick Chat
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
                AI Content & Web3 Assistant
              </span>
            </h2>
            <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
              Advanced AI assistance for content creation, Web3 learning, and platform optimization
            </p>
          </div>
          
          <AIContentAssistant />
        </div>
      </section>
    );
  }
  
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
            Your personal assistant for Web3 learning, content creation, and Too Savvy navigation
          </p>
          <p className="text-white/50 text-sm">
            Powered by Web3-optimized AI • Content Creation • Learning Assistant
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-neura-purple/20 p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-neura-purple/30 to-neura-cyan/30 p-2 rounded-full mr-3 relative">
                    <Bot className="w-5 h-5 text-neura-cyan" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-neura-dark"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Too AI Savvy</h3>
                    <p className="text-white/60 text-xs">Web3 & Content Assistant • Online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-neura-cyan/30 text-neura-cyan">
                    AI Powered
                  </Badge>
                  <Button
                    size="sm"
                    onClick={() => setShowFullAssistant(true)}
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white text-xs"
                  >
                    Full Assistant
                  </Button>
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
                          onClick={() => setShowFullAssistant(true)}
                        >
                          Open Full Assistant ➤
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
                    placeholder="Ask about Web3, content creation, NFTs, or Too Savvy features..." 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white placeholder:text-white/50"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
      case 'Content': return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300';
      case 'Learning': return 'border-green-400/30 bg-green-400/10 text-green-300';
      case 'DeFi': return 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300';
      case 'Podcast': return 'border-pink-400/30 bg-pink-400/10 text-pink-300';
      case 'Platform': return 'border-blue-400/30 bg-blue-400/10 text-blue-300';
      case 'Writing': return 'border-orange-400/30 bg-orange-400/10 text-orange-300';
      case 'Community': return 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300';
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
