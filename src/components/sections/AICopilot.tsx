
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, Mic, ArrowRight } from 'lucide-react';

export const AICopilot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi! I\'m your Neura AI Copilot. How can I help you today?' }
  ]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      if (input.toLowerCase().includes('nft')) {
        response = 'To create a new NFT collection, go to Creator Studio -> NFT Gallery and click "Create New Collection". Would you like me to guide you through the process?';
      } else if (input.toLowerCase().includes('wallet')) {
        response = 'Your wallet is connected! You currently have 0.5 ETH, 200 $NEURAX tokens, and 3 NFTs in your collection.';
      } else {
        response = 'I can help you with creating content, managing your portal, setting up NFTs, and navigating Neura features. What would you like to know more about?';
      }
      
      setMessages(prev => [...prev, { role: 'system', content: response }]);
    }, 1000);
    
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
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Your personal assistant for navigating Web3 and creating on Neura
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-neura-dark/50 border-neura-purple/30 backdrop-blur-md overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-neura-purple/20 p-4 flex items-center">
                <div className="bg-gradient-to-br from-neura-purple/30 to-neura-cyan/30 p-2 rounded-full mr-3">
                  <Bot className="w-5 h-5 text-neura-cyan" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Neura AI Copilot</h3>
                  <p className="text-white/60 text-xs">Powered by Web3-optimized AI</p>
                </div>
                <Button variant="ghost" className="ml-auto text-white/60 hover:text-white hover:bg-neura-purple/10" size="sm">
                  Examples
                </Button>
              </div>
              
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-neura-dark/30">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-neura-purple/30 text-white' 
                        : 'bg-neura-dark/60 border border-neura-purple/20'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-neura-purple/20">
                <form onSubmit={handleSubmit} className="flex gap-2">
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
                    placeholder="Ask anything about Neura features..." 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <SuggestionButton text="Create a new NFT collection" />
            <SuggestionButton text="Set up token-gated content" />
            <SuggestionButton text="Show me my wallet analytics" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SuggestionButton = ({ text }) => {
  return (
    <Button 
      variant="outline" 
      className="border-neura-purple/30 bg-neura-dark/30 text-white/70 hover:bg-neura-purple/10 hover:text-white justify-between"
    >
      {text}
      <ArrowRight className="ml-2 h-3 w-3" />
    </Button>
  );
};
