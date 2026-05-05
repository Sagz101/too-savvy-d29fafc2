
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  X, 
  Minimize2,
  Maximize2,
  HelpCircle,
  Zap,
  Book
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatbotProps {
  onClose?: () => void;
}

export const AIChatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { text: 'How do I create my first NFT?', icon: HelpCircle },
    { text: 'What are gas fees?', icon: Zap },
    { text: 'Explain Web3 wallets', icon: Book },
    { text: 'How to monetize content?', icon: HelpCircle }
  ];

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: 'Hi! I\'m your Web3 assistant. I can help you with:\n\n• Creating and minting NFTs\n• Understanding blockchain concepts\n• Platform features and tutorials\n• Monetization strategies\n\nWhat would you like to know?',
        timestamp: new Date(),
        suggestions: [
          'Getting started guide',
          'Connect wallet help',
          'NFT creation process',
          'Community guidelines'
        ]
      };
      setMessages([welcomeMessage]);
    }
  }, [messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse = generateBotResponse(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse.content,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateBotResponse = (userInput: string): { content: string; suggestions?: string[] } => {
    const input = userInput.toLowerCase();

    if (input.includes('nft') || input.includes('create')) {
      return {
        content: 'To create your first NFT on Renegade:\n\n1. Connect your Web3 wallet\n2. Go to Creator Studio\n3. Upload your content (image, video, audio)\n4. Add metadata (title, description, properties)\n5. Choose your blockchain (Polygon for low fees)\n6. Mint your NFT!\n\nThe process typically costs $2-5 in gas fees on Polygon.',
        suggestions: ['Show me Creator Studio', 'Explain metadata', 'Gas fee calculator', 'Wallet setup guide']
      };
    }

    if (input.includes('gas') || input.includes('fee')) {
      return {
        content: 'Gas fees are payments to blockchain networks for processing transactions.\n\n💡 **Tips to save on fees:**\n• Use Polygon (98% cheaper than Ethereum)\n• Batch multiple transactions\n• Mint during off-peak hours\n• Use our gas fee estimator\n\nTypical costs:\n• Ethereum: $20-100\n• Polygon: $0.01-2\n• Binance Smart Chain: $0.50-5',
        suggestions: ['Check current gas prices', 'Switch to Polygon', 'Fee comparison chart']
      };
    }

    if (input.includes('wallet')) {
      return {
        content: 'A Web3 wallet is your digital identity and bank account combined!\n\n**Popular wallets:**\n• MetaMask (browser extension)\n• WalletConnect (mobile-friendly)\n• Coinbase Wallet (beginner-friendly)\n\n**Important:** Never share your seed phrase! It\'s like your password and bank PIN combined.',
        suggestions: ['Install MetaMask', 'Wallet security tips', 'How to add funds']
      };
    }

    if (input.includes('monetize') || input.includes('money') || input.includes('earn')) {
      return {
        content: 'Renegade offers multiple monetization options:\n\n🎨 **NFT Sales** - Sell unique content\n💎 **Royalties** - Earn from resales (up to 10%)\n🔒 **Token-gated content** - Premium subscriptions\n💬 **Community tokens** - Fan engagement rewards\n📊 **Creator fund** - Performance bonuses\n\n**Best part:** No platform fees on direct sales!',
        suggestions: ['Set up royalties', 'Create premium content', 'Launch community token']
      };
    }

    // Default response
    return {
      content: 'I\'d be happy to help! Here are some things I can assist you with:\n\n• **NFT Creation** - Step-by-step guides\n• **Wallet Integration** - Setup and troubleshooting\n• **Platform Features** - Tutorials and tips\n• **Web3 Concepts** - Beginner-friendly explanations\n\nWhat specific topic interests you most?',
      suggestions: ['Platform tour', 'Beginner\'s guide', 'Advanced features', 'Community support']
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white shadow-xl rounded-full w-14 h-14 p-0"
        aria-label="Open AI assistant"
      >
        <MessageCircle size={24} />
      </Button>
    );
  }

  return (
    <Card 
      className={`fixed bottom-6 right-6 z-50 bg-slate-900/95 border border-cyan-400/30 backdrop-blur-xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}
    >
      {/* Header */}
      <CardHeader className="pb-2 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <span className="text-sm">AI Assistant</span>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
              Online
            </Badge>
          </CardTitle>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white w-8 h-8 p-0"
            >
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white w-8 h-8 p-0"
            >
              <X size={14} />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                )}
                
                <div className={`max-w-[75%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-cyan-400 text-black'
                    : 'bg-slate-800 text-white border border-gray-700'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                  
                  {message.suggestions && (
                    <div className="mt-3 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs h-7 w-full justify-start text-cyan-400 hover:text-white hover:bg-slate-700"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                
                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-slate-800 border border-gray-700 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => sendMessage(action.text)}
                    className="text-xs h-8 border-gray-600 text-gray-300 hover:text-white hover:border-cyan-400/50 flex items-center gap-1"
                  >
                    <action.icon size={12} />
                    <span className="truncate">{action.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Web3..."
                className="flex-1 bg-slate-800 border-gray-600 text-white placeholder-gray-400 text-sm"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400 px-3"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
