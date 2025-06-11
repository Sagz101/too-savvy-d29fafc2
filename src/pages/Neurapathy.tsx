
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlockchainEmailPreview } from '@/components/ui/blockchain-email-preview';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, Inbox, Archive, Star, Trash, UserPlus, Settings } from 'lucide-react';

const Neurapathy = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <section className="py-16 relative">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AnimatedText
                  text="Messaging"
                  type="gradient"
                  gradientFrom="from-neura-purple"
                  gradientTo="to-neura-cyan"
                  tag="span"
                />
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Secure, encrypted, and decentralized communication platform built on blockchain technology.
                Take control of your digital correspondence with permanent storage and token-gated access.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto mb-16">
              <BlockchainEmailPreview />
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Sidebar */}
                    <div className="bg-neura-dark/90 border-r border-neura-purple/30 p-4">
                      <div className="mb-6">
                        <Button variant="outline" className="w-full justify-start bg-neura-purple/10 border-neura-purple/30 text-white">
                          <Mail className="mr-2 h-4 w-4" /> Compose
                        </Button>
                      </div>
                      
                      <div className="space-y-1">
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeTab === 'inbox' ? 'bg-neura-purple/20 text-white' : 'text-white/70'}`}
                          onClick={() => setActiveTab('inbox')}
                        >
                          <Inbox className="mr-2 h-4 w-4" /> Inbox
                        </Button>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeTab === 'sent' ? 'bg-neura-purple/20 text-white' : 'text-white/70'}`}
                          onClick={() => setActiveTab('sent')}
                        >
                          <Send className="mr-2 h-4 w-4" /> Sent
                        </Button>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeTab === 'starred' ? 'bg-neura-purple/20 text-white' : 'text-white/70'}`}
                          onClick={() => setActiveTab('starred')}
                        >
                          <Star className="mr-2 h-4 w-4" /> Starred
                        </Button>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeTab === 'archive' ? 'bg-neura-purple/20 text-white' : 'text-white/70'}`}
                          onClick={() => setActiveTab('archive')}
                        >
                          <Archive className="mr-2 h-4 w-4" /> Archive
                        </Button>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${activeTab === 'trash' ? 'bg-neura-purple/20 text-white' : 'text-white/70'}`}
                          onClick={() => setActiveTab('trash')}
                        >
                          <Trash className="mr-2 h-4 w-4" /> Trash
                        </Button>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-neura-purple/30">
                        <h3 className="text-sm font-medium text-white/50 mb-2 px-2">Settings</h3>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-white/70"
                        >
                          <UserPlus className="mr-2 h-4 w-4" /> Contacts
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-white/70"
                        >
                          <Settings className="mr-2 h-4 w-4" /> Settings
                        </Button>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="col-span-3 p-6">
                      <div className="mb-4">
                        <Input 
                          placeholder="Search messages..." 
                          className="bg-neura-dark/50 border-neura-purple/30 text-white"
                        />
                      </div>
                      
                      <div className="border-b border-neura-purple/30 mb-6">
                        <h2 className="text-xl font-bold text-white mb-4">
                          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </h2>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 border border-neura-purple/20 rounded-lg hover:bg-neura-purple/10 transition-colors cursor-pointer">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">0x7F3e...42b1</span>
                            <span className="text-sm text-white/50">12:45 PM</span>
                          </div>
                          <p className="text-white/70 truncate">Welcome to Blockchain Email! Get started by setting up your token access rules...</p>
                        </div>
                        
                        <div className="p-4 border border-neura-purple/20 rounded-lg hover:bg-neura-purple/10 transition-colors cursor-pointer">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">0x1A2b...F8c9</span>
                            <span className="text-sm text-white/50">Yesterday</span>
                          </div>
                          <p className="text-white/70 truncate">Invitation to join DeFi governance forum - holders of $ETH tokens get special voting rights...</p>
                        </div>
                        
                        <div className="p-4 border border-neura-purple/20 rounded-lg hover:bg-neura-purple/10 transition-colors cursor-pointer">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">0x9D4e...B3a5</span>
                            <span className="text-sm text-white/50">3 days ago</span>
                          </div>
                          <p className="text-white/70 truncate">Your encrypted message has been permanently stored on IPFS with transaction hash: 0x2c7a...</p>
                        </div>
                      </div>
                      
                      <div className="mt-8 text-center p-4">
                        <p className="text-white/50 text-sm">
                          End-to-end encrypted • Token-gated • Decentralized
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Neurapathy;
