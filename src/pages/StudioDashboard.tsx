
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useWallet } from '@/services/wallet';
import { PodcastCreator } from '@/components/podcast/PodcastCreator';
import { GlobalInnovatorsHub } from '@/components/innovators/GlobalInnovatorsHub';
import { StoreBuilder } from '@/components/commerce/StoreBuilder';
import { ThreaditorHub } from '@/components/threaditor/ThreaditorHub';
import { VideoStudioHub } from '@/components/video/VideoStudioHub';
import { NeuraSocialHub } from '@/components/social/NeuraSocialHub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Video, 
  Mic, 
  Store, 
  FileText, 
  Share2, 
  Users, 
  ArrowLeft,
  Wallet,
  Zap
} from 'lucide-react';

const StudioDashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { wallet, connectWallet, isConnecting } = useWallet();
  const [activeModule, setActiveModule] = useState<string | null>(null);

  useEffect(() => {
    const module = searchParams.get('module');
    if (module) {
      setActiveModule(module);
    }
  }, [searchParams]);

  const modules = [
    {
      id: 'video-studio',
      icon: <Video className="w-8 h-8" />,
      title: 'Video Studio',
      description: 'Create, mint, and manage Video NFTs or streams',
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      component: <VideoStudioHub />
    },
    {
      id: 'podcast-studio',
      icon: <Mic className="w-8 h-8" />,
      title: 'Podcast Studio',
      description: 'Distribute podcasts and mint Podcast NFTs',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      component: <PodcastCreator />
    },
    {
      id: 'store-builder',
      icon: <Store className="w-8 h-8" />,
      title: 'Store Builder',
      description: 'Build a storefront to sell content, NFTs, and products',
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      component: <StoreBuilder />
    },
    {
      id: 'threaditor',
      icon: <FileText className="w-8 h-8" />,
      title: 'Threaditor',
      description: 'Create and monetize long-form content threads',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      component: <ThreaditorHub />
    },
    {
      id: 'neura-social',
      icon: <Share2 className="w-8 h-8" />,
      title: 'NeuraSocial',
      description: 'Social networking with decentralized features',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      component: <NeuraSocialHub />
    },
    {
      id: 'global-innovators',
      icon: <Users className="w-8 h-8" />,
      title: 'Global Innovators',
      description: 'Collaborative, tokenized project creation at scale',
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      component: <GlobalInnovatorsHub />
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule);

  if (!wallet.isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/30 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 w-fit">
              <Wallet className="w-12 h-12 text-cyan-400" />
            </div>
            <CardTitle className="text-2xl text-white">Connect Your Wallet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/70 text-center">
              Connect your wallet to access Too Savvy Creator Studio and start building your Web3 presence.
            </p>
            <Button 
              onClick={connectWallet}
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-300"
            >
              {isConnecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => setActiveModule(null)}
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentModule.gradient}`}>
                {currentModule.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{currentModule.title}</h1>
                <p className="text-white/70">{currentModule.description}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6">
            {currentModule.component}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Creator Studio Dashboard</h1>
            <p className="text-white/70">Welcome to your Web3 creative workspace</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-full border border-emerald-400/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium">Connected</span>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card 
              key={module.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/20 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setActiveModule(module.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-xl`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.gradient} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {module.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                  {module.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Zap className="w-4 h-4" />
                    Ready to Launch
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400">
                      Launch Studio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioDashboard;
