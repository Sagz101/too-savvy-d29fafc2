
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, ExternalLink, CheckCircle, Globe, Lock, Zap, Crown, Star } from 'lucide-react';

export const TrustSignals = () => {
  const audits = [
    {
      company: "CertiK",
      type: "Smart Contract Audit", 
      status: "Passed",
      link: "https://skynet.certik.com/projects/toosavvy",
      reportId: "TSV-2024-001",
      icon: Shield,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      company: "Carbon Trust", 
      type: "Carbon Neutral Certification",
      status: "Verified",
      link: "https://carbontrust.com/our-clients/t/too-savvy",
      certId: "CT-CN-2024-TSV",
      icon: Globe,
      color: "green",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      content: "T00 Savvy gave me true ownership of my art. I've earned 3x more through NFT royalties than traditional platforms.",
      avatar: "/placeholder.svg",
      earnings: "$12,400",
      verificationLink: "https://polygonscan.com/address/0x...",
      icon: Crown,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Podcast Creator",
      content: "The token-gated community feature transformed how I engage with my audience. My subscribers are more invested than ever.",
      avatar: "/placeholder.svg",
      subscribers: "2,847",
      verificationLink: "https://arbiscan.io/address/0x...",
      icon: Zap,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "TechFlow DAO",
      role: "Developer Community", 
      content: "Building on T00 Savvy's APIs was seamless. Their developer sandbox made integration effortless.",
      avatar: "/placeholder.svg",
      integrations: "47",
      verificationLink: "https://github.com/techflow-dao/toosavvy-integration",
      icon: Star,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-400 shadow-emerald-400/20',
      green: 'border-green-400/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-green-400 shadow-green-400/20',
      purple: 'border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-400 shadow-purple-400/20',
      cyan: 'border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-400 shadow-cyan-400/20',
      yellow: 'border-yellow-400/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-400 shadow-yellow-400/20'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-emerald-400/20 via-emerald-400/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 backdrop-blur-xl mb-8">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Verified & Audited</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Creators Worldwide
          </h2>
          <p className="text-white/70 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Built with <span className="text-emerald-400 font-semibold">enterprise-grade security</span> and <span className="text-green-400 font-semibold">sustainability</span> at its core
          </p>
        </div>

        {/* Security & Compliance Cards with Verification Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audits.map((audit, index) => (
            <Card key={index} className={`${getColorClasses(audit.color)} backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border bg-slate-900/60`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audit.gradient} flex items-center justify-center shadow-lg`}>
                      <audit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{audit.type}</h3>
                      <p className="text-white/60 text-lg">Verified by {audit.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${audit.gradient} text-white font-bold text-lg shadow-lg`}>
                      {audit.status}
                    </div>
                    <a 
                      href={audit.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 cursor-pointer hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle size={20} className={audit.color === 'emerald' ? 'text-emerald-400' : 'text-green-400'} />
                    <span className="font-medium text-lg">{audit.company} Certified</span>
                  </div>
                  <div className="text-sm text-white/60">
                    {audit.reportId && <div>Report ID: {audit.reportId}</div>}
                    {audit.certId && <div>Certificate ID: {audit.certId}</div>}
                    <div className="mt-2">
                      <a 
                        href={audit.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        View Full Report
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Creator Testimonials with Verification */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Verified Creator Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                      <testimonial.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/60 text-lg">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${testimonial.gradient} bg-opacity-20 border border-white/10 mb-4`}>
                    <Award size={20} className="text-yellow-400" />
                    <span className="text-white font-bold text-lg">
                      {testimonial.earnings && `Earned ${testimonial.earnings}`}
                      {testimonial.subscribers && `${testimonial.subscribers} subscribers`}
                      {testimonial.integrations && `${testimonial.integrations} integrations built`}
                    </span>
                  </div>
                  
                  {/* Verification Link */}
                  <div className="text-center">
                    <a 
                      href={testimonial.verificationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 underline flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Verify on-chain
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Statistics with Links */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-800/80 to-gray-800/80 border border-cyan-400/30 backdrop-blur-xl shadow-2xl mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <Shield size={20} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-lg">Smart Contract Audited</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-white/80 font-medium text-lg">
              Trusted by <span className="text-cyan-400 font-bold">10,000+ Web3 creators</span> across <span className="text-purple-400 font-bold">15+ networks</span>
            </div>
          </div>
          
          {/* Transparency Notice */}
          <div className="max-w-2xl mx-auto p-6 bg-slate-800/50 border border-yellow-400/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-yellow-400" size={20} />
              <h4 className="text-yellow-400 font-semibold text-lg">Transparency Commitment</h4>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              All audit reports, certifications, and on-chain data are publicly verifiable. 
              We encourage users to independently verify our claims using the provided links and resources.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a 
                href="https://skynet.certik.com/projects/toosavvy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-sm underline"
              >
                View Security Score
              </a>
              <a 
                href="/whitepaper" 
                className="text-cyan-400 hover:text-cyan-300 text-sm underline"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
