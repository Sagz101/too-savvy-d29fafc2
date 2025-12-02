
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
      color: "text-green-400"
    },
    {
      label: "Total Creators",
      sublabel: "Active Monthly",
      value: "12,847",
      icon: Users,
      color: "text-blue-400"
    },
    {
      label: "Content NFTs",
      sublabel: "Minted",
      value: "421,071",
      icon: Video,
      color: "text-purple-400"
    },
    {
      label: "Network Nodes",
      sublabel: "Validator",
      value: "3,518",
      icon: Globe,
      color: "text-orange-400"
    }
  ];

  const features = [
    {
      title: "Efficient. Scalable. Global.",
      subtitle: "Carbon Neutral",
      description: "Sustainability",
      icon: Zap
    },
    {
      title: "Creator Economy",
      subtitle: "Token-Powered",
      description: "Monetization",
      icon: TrendingUp
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-block grok-card px-6 py-3 mb-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-primary text-sm font-medium">NEW</span>
            <span className="text-muted-foreground text-sm ml-2">Introducing Creator Economy</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            The Creator-Scale Platform
          </h2>
          
          <p 
            className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            Diminga, the Web3 network, is a distributed platform for next-gen creators.
            <br />
            Decentralized via 3,000+ nodes, scalable through sharding, fast, secure & green.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <button className="grok-button-secondary text-lg px-8 py-4 flex items-center justify-center space-x-3">
              <Globe size={20} />
              <span>Explore the Ecosystem</span>
            </button>
            <button className="grok-button-primary text-lg px-8 py-4 flex items-center justify-center space-x-3 grok-glow">
              <Zap size={20} />
              <span>Start Creating</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`grok-card grok-card-hover p-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.8 + (index * 0.1)}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">{stat.label}</div>
                    <div className="text-muted-foreground/70 text-xs">{stat.sublabel}</div>
                  </div>
                  <div className={`${stat.color} p-3 rounded-xl bg-card/50`}>
                    <IconComponent size={24} />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`grok-card grok-card-hover p-10 relative overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${1.2 + (index * 0.2)}s` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-4">{feature.subtitle}</div>
                    <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-xl border border-primary/20">
                      <span className="font-medium text-sm">{feature.description}</span>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
