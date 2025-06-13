
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, DollarSign, Video, Zap, Globe } from 'lucide-react';

export const ModularStats = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    {
      label: "Average Cost",
      sublabel: "per Transaction",
      value: "~$0.002",
      icon: DollarSign,
      color: "from-green-400 to-emerald-500"
    },
    {
      label: "Total Creators",
      sublabel: "Active Monthly",
      value: "12,847",
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    },
    {
      label: "Content NFTs",
      sublabel: "Minted",
      value: "421,071",
      icon: Video,
      color: "from-purple-400 to-violet-500"
    },
    {
      label: "Network Nodes",
      sublabel: "Validator",
      value: "3,518",
      icon: Globe,
      color: "from-orange-400 to-yellow-500"
    }
  ];

  const features = [
    {
      title: "Efficient. Scalable. Global.",
      subtitle: "Carbon Neutral",
      description: "Sustainability",
      background: "from-green-900/50 to-emerald-800/30",
      icon: Zap
    },
    {
      title: "Creator Economy",
      subtitle: "Token-Powered",
      description: "Monetization",
      background: "from-blue-900/50 to-cyan-800/30",
      icon: TrendingUp
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-40"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-cyan-300 text-sm font-medium">NEW</span>
            <span className="text-white/80 text-sm ml-2">Introducing Creator Economy</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            The Creator-Scale Platform
          </h2>
          
          <p 
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            T00 Savvy, the Web3 network, is a distributed platform for next-gen creators.
            <br />
            Decentralized via 3,000+ nodes, scalable through sharding, fast, secure & green.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <button className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 rounded-xl border border-gray-600/50 transition-all duration-300 flex items-center justify-center space-x-2">
              <Globe size={20} />
              <span>Explore the Ecosystem</span>
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25">
              <Zap size={20} />
              <span>Start Creating</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-1000 hover:transform hover:scale-105 hover:border-gray-600/50 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.8 + (index * 0.1)}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                  </div>
                  <div className={`bg-gradient-to-r ${stat.color} p-2 rounded-lg`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.background} backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-1000 hover:transform hover:scale-[1.02] ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${1.2 + (index * 0.2)}s` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <IconComponent size={32} className="text-white/80" />
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">{feature.subtitle}</div>
                    <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 rounded-lg">
                      <span className="text-white font-medium text-sm">{feature.description}</span>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
