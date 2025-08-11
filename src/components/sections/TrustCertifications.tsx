
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Leaf, 
  CheckCircle, 
  ExternalLink, 
  Award,
  Globe,
  Users,
  TrendingUp,
  Eye
} from 'lucide-react';

export const TrustCertifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('security');

  const certifications = {
    security: [
      {
        icon: Shield,
        title: 'CertiK Security Audit',
        status: 'Verified',
        description: 'Smart contracts audited by leading blockchain security firm',
        id: 'TSV-2024-001',
        link: '#',
        color: 'text-green-400'
      },
      {
        icon: Award,
        title: 'Multi-Sig Treasury',
        status: 'Active',
        description: '3/5 multi-signature wallet for community funds',
        id: 'MSIG-001',
        link: '#',
        color: 'text-blue-400'
      }
    ],
    sustainability: [
      {
        icon: Leaf,
        title: 'Carbon Neutral Platform',
        status: 'Certified',
        description: '100% renewable energy for all operations',
        id: 'CN-2024-001',
        link: '#',
        color: 'text-green-400'
      },
      {
        icon: Globe,
        title: 'ESG Compliance',
        status: 'Verified',
        description: 'Environmental, Social, and Governance standards met',
        id: 'ESG-001',
        link: '#',
        color: 'text-purple-400'
      }
    ],
    transparency: [
      {
        icon: Eye,
        title: 'Public Treasury',
        status: 'Live',
        description: 'Real-time view of platform treasury and fund allocation',
        id: 'TREAS-001',
        link: '#',
        color: 'text-cyan-400'
      },
      {
        icon: TrendingUp,
        title: 'Performance Metrics',
        status: 'Public',
        description: 'Open dashboard of platform performance and growth',
        id: 'PERF-001',
        link: '#',
        color: 'text-orange-400'
      }
    ]
  };

  const tabs = [
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'sustainability', label: 'Sustainability', icon: Leaf },
    { id: 'transparency', label: 'Transparency', icon: Eye }
  ];

  const platformStats = [
    { label: 'Security Score', value: '98/100', subtext: 'CertiK Rating' },
    { label: 'Carbon Offset', value: '127%', subtext: 'Net Positive' },
    { label: 'Community Trust', value: '94%', subtext: 'Creator Satisfaction' },
    { label: 'Uptime', value: '99.9%', subtext: 'Last 12 Months' }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          Trust & Transparency
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Independently verified security, sustainability, and community governance standards.
        </p>
      </div>

      {/* Platform Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {platformStats.map((stat, index) => (
          <Card key={index} className="bg-background/40 backdrop-blur-sm text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.subtext}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-background/40 backdrop-blur-sm rounded-xl p-1 border border-border/50">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-web3-cyan text-cosmic-deep' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <IconComponent size={16} />
                {tab.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {certifications[activeTab as keyof typeof certifications].map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <Card
              key={index}
              className="bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${cert.color.split('-')[1]}-500/20 to-${cert.color.split('-')[1]}-600/20 flex items-center justify-center`}>
                    <IconComponent size={24} className={cert.color} />
                  </div>
                  <Badge className={`${cert.color} bg-${cert.color.split('-')[1]}-500/10 border-${cert.color.split('-')[1]}-500/30`}>
                    <CheckCircle size={12} className="mr-1" />
                    {cert.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-semibold text-white group-hover:text-web3-cyan transition-colors">
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">ID: {cert.id}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-web3-cyan hover:bg-web3-cyan/10"
                  >
                    View Report
                    <ExternalLink size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Community Governance CTA */}
      <div className="bg-gradient-to-r from-web3-purple/20 to-web3-cyan/20 rounded-2xl p-8 border border-web3-cyan/20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-web3-purple/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={24} className="text-web3-purple" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Community-Driven Governance
          </h3>
          <p className="text-gray-300 mb-6">
            All major platform decisions are voted on by the creator community. 
            Your voice matters in shaping the future of T00 Savvy.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-web3-purple to-web3-cyan hover:opacity-90 text-white font-semibold"
          >
            Join DAO Governance
            <ExternalLink size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
