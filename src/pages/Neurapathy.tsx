import React, { useState } from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { BlockchainEmailPreview } from '@/components/ui/blockchain-email-preview';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, Inbox, Archive, Star, Trash, UserPlus, Settings } from 'lucide-react';

const Neurapathy = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <CosmicPageLayout>
      <section className="py-16 pt-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Messaging
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              End-to-end encrypted messaging with token gating. Secure, decentralized communication built on blockchain technology with permanent storage and exclusive access control.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <BlockchainEmailPreview />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-white/5 border-r border-white/10 p-4">
                    <div className="mb-6">
                      <Button variant="outline" className="w-full justify-start bg-purple-600/10 border-white/10 text-white">
                        <Mail className="mr-2 h-4 w-4" /> Compose
                      </Button>
                    </div>
                    <div className="space-y-1">
                      {[
                        { key: 'inbox', icon: Inbox, label: 'Inbox' },
                        { key: 'sent', icon: Send, label: 'Sent' },
                        { key: 'starred', icon: Star, label: 'Starred' },
                        { key: 'archive', icon: Archive, label: 'Archive' },
                        { key: 'trash', icon: Trash, label: 'Trash' },
                      ].map(({ key, icon: Icon, label }) => (
                        <Button key={key} variant="ghost" className={`w-full justify-start ${activeTab === key ? 'bg-purple-600/20 text-white' : 'text-white/60'}`} onClick={() => setActiveTab(key)}>
                          <Icon className="mr-2 h-4 w-4" /> {label}
                        </Button>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h3 className="text-sm font-medium text-white/40 mb-2 px-2">Settings</h3>
                      <Button variant="ghost" className="w-full justify-start text-white/60"><UserPlus className="mr-2 h-4 w-4" /> Contacts</Button>
                      <Button variant="ghost" className="w-full justify-start text-white/60"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
                    </div>
                  </div>
                  
                  <div className="col-span-3 p-6">
                    <div className="mb-4">
                      <Input placeholder="Search messages..." className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <div className="border-b border-white/10 mb-6">
                      <h2 className="text-xl font-bold text-white mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        { addr: '0x7F3e...42b1', time: '12:45 PM', msg: 'Welcome to Blockchain Email! Get started by setting up your token access rules...' },
                        { addr: '0x1A2b...F8c9', time: 'Yesterday', msg: 'Invitation to join DeFi governance forum - holders of $ETH tokens get special voting rights...' },
                        { addr: '0x9D4e...B3a5', time: '3 days ago', msg: 'Your encrypted message has been permanently stored on IPFS with transaction hash: 0x2c7a...' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">{item.addr}</span>
                            <span className="text-sm text-white/40">{item.time}</span>
                          </div>
                          <p className="text-white/60 truncate">{item.msg}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center p-4">
                      <p className="text-white/40 text-sm">End-to-end encrypted • Token-gated • Decentralized</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
};

export default Neurapathy;
