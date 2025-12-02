
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
      content: 'Hi! I\'m Too AI Savvy, your personal Web3 assistant. I can help you create content, learn about Web3, generate NFT ideas, write scripts, design tokenomics, and navigate Diminga. How can I help you today?' 
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
      action: () => handleSuggestionClick("How do I set up token-gated content on Diminga?")
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
        response = '🛡️ Token-gating lets you create exclusive content for NFT or token holders! On Diminga, you can easily set access requirements using ERC-721 or ERC-1155 tokens. Want step-by-step setup instructions? Let\'s dive deeper!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('blog') || messageText.toLowerCase().includes('dao')) {
        response = '📝 Writing about DAOs is a great way to educate the community! I can help you structure articles, explain complex concepts simply, and create engaging content. For detailed writing assistance, let me open the full content assistant!';
        hasAction = true;
      } else if (messageText.toLowerCase().includes('community') || messageText.toLowerCase().includes('join')) {
        response = '🤝 Web3 creator communities are amazing for networking and learning! I can recommend Discord servers, Twitter spaces, DAOs, and platforms where creators collaborate. Want personalized community recommendations? Let\'s explore options!';
        hasAction = true;
      } else {
        response = 'I can help you with Web3 concepts, content creation, NFT strategies, smart contracts, tokenomics, and navigating Diminga! I specialize in making complex Web3 topics simple and actionable for creators. What specific area interests you most?';
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowFullAssistant(false)}
              variant="outline"
              className="mb-4 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-sm"
            >
              ← Back to Quick Chat
            </Button>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-hero-glow">
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-emerald-400/5 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-hero-glow">
              Meet Your AI Copilot
            </span>
          </h2>
          <p className="text-white/80 md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Your personal assistant for Web3 learning, content creation, and Diminga navigation
          </p>
          <p className="text-white/60 text-lg">
            Powered by Web3-optimized AI • Content Creation • Learning Assistant
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Chat Interface */}
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 rounded-2xl blur-sm"></div>
            
            <Card className="relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-cyan-400/30 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Enhanced Header */}
                <div className="border-b border-cyan-400/20 p-6 bg-gradient-to-r from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-cyan-400/30 to-purple-500/30 p-3 rounded-full mr-4 relative shadow-lg">
                        <Bot className="w-6 h-6 text-cyan-400" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-2 border-slate-800 animate-pulse"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                          Too AI Savvy
                        </h3>
                        <p className="text-white/70 text-sm">Web3 & Content Assistant • Online</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
                        AI Powered
                      </Badge>
                      <Button
                        size="sm"
                        onClick={() => setShowFullAssistant(true)}
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Full Assistant
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Chat Area */}
                <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-slate-900/30 via-gray-900/30 to-slate-800/30 backdrop-blur-sm">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-xl transition-all duration-300 ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-white border border-cyan-400/30 backdrop-blur-sm shadow-lg' 
                          : 'bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 border border-purple-500/20 backdrop-blur-sm shadow-xl'
                      }`}>
                        <p className="text-white leading-relaxed">{message.content}</p>
                        {message.hasAction && (
                          <Button 
                            size="sm" 
                            className="mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            onClick={() => setShowFullAssistant(true)}
                          >
                            Open Full Assistant →
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 border border-purple-500/20 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Enhanced Input Area */}
                <div className="p-6 border-t border-cyan-400/20 bg-gradient-to-r from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                    <Button 
                      type="button" 
                      size="icon" 
                      variant="outline"
                      className="border-cyan-400/30 text-white/70 hover:text-white hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-sm shadow-lg"
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Input 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about Web3, content creation, NFTs, or Diminga features..." 
                      className="bg-slate-800/50 border-cyan-400/30 text-white placeholder:text-white/50 backdrop-blur-sm shadow-lg focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                  
                  {/* Enhanced Suggestion Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
      </div>
    </section>
  );
};

const SuggestionChip = ({ text, icon: Icon, category, onClick }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'NFT': return 'border-purple-400/30 bg-gradient-to-r from-purple-400/10 to-pink-500/10 text-purple-300 hover:from-purple-400/20 hover:to-pink-500/20';
      case 'Content': return 'border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 text-cyan-300 hover:from-cyan-400/20 hover:to-blue-500/20';
      case 'Learning': return 'border-emerald-400/30 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 text-emerald-300 hover:from-emerald-400/20 hover:to-teal-500/20';
      case 'DeFi': return 'border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 text-yellow-300 hover:from-yellow-400/20 hover:to-orange-500/20';
      case 'Podcast': return 'border-pink-400/30 bg-gradient-to-r from-pink-400/10 to-rose-500/10 text-pink-300 hover:from-pink-400/20 hover:to-rose-500/20';
      case 'Platform': return 'border-blue-400/30 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 text-blue-300 hover:from-blue-400/20 hover:to-indigo-500/20';
      case 'Writing': return 'border-orange-400/30 bg-gradient-to-r from-orange-400/10 to-red-500/10 text-orange-300 hover:from-orange-400/20 hover:to-red-500/20';
      case 'Community': return 'border-indigo-400/30 bg-gradient-to-r from-indigo-400/10 to-purple-500/10 text-indigo-300 hover:from-indigo-400/20 hover:to-purple-500/20';
      default: return 'border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-white/70 hover:from-cyan-400/20 hover:to-purple-500/20';
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={onClick}
      className={`${getCategoryColor(category)} justify-start text-left h-auto p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm border group`}
    >
      <Icon className="mr-2 h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-xs truncate font-medium">{text}</span>
      <ArrowRight className="ml-auto h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </Button>
  );
};
