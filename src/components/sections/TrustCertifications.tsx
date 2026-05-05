import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Leaf, 
  CheckCircle, 
  ExternalLink, 
  Award,
  Users,
  Clock,
  Vote
} from 'lucide-react';

export const TrustCertifications: React.FC = () => {
  const trustMetrics = [
    { 
      icon: Shield, 
      value: '98/100', 
      label: 'Security Score', 
      subtext: 'CertiK Audited',
      color: 'text-web3-green',
      bgColor: 'bg-web3-green/10'
    },
    { 
      icon: Leaf, 
      value: '127%', 
      label: 'Carbon Offset', 
      subtext: 'Net Positive',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    { 
      icon: Users, 
      value: '94%', 
      label: 'Creator Satisfaction', 
      subtext: 'Community Trust',
      color: 'text-web3-cyan',
      bgColor: 'bg-web3-cyan/10'
    },
    { 
      icon: Clock, 
      value: '99.9%', 
      label: 'Platform Uptime', 
      subtext: 'Last 12 Months',
      color: 'text-web3-purple',
      bgColor: 'bg-web3-purple/10'
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: 'CertiK Security Audit',
      status: 'Verified',
      description: 'Smart contracts audited by leading blockchain security firm. Full audit report available.',
      id: 'TSV-2024-001',
      link: '/whitepaper',
      badgeIcon: '/lovable-uploads/634f305e-cf77-4d27-98b3-a69661d66e96.png'
    },
    {
      icon: Award,
      title: 'Multi-Sig Treasury',
      status: 'Active',
      description: '3/5 multi-signature wallet protects community funds with transparent on-chain governance.',
      id: 'MSIG-001',
      link: '/finance-hub'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Trust & Transparency
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Independently verified security and community-driven governance
        </p>
      </div>

      {/* Trust Metrics - Large Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {trustMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="bg-background/40 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300 border-border/30">
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent size={28} className={metric.color} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.subtext}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Certification Cards - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <Card
              key={index}
              className="bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 group border-border/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-web3-cyan/20 to-web3-purple/20 flex items-center justify-center">
                      <IconComponent size={28} className="text-web3-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-web3-cyan transition-colors">
                        {cert.title}
                      </h3>
                      <Badge className="mt-1 bg-web3-green/20 text-web3-green border-web3-green/30">
                        <CheckCircle size={12} className="mr-1" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">ID: {cert.id}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-web3-cyan hover:bg-web3-cyan/10"
                    asChild
                  >
                    <Link to={cert.link}>
                      View Report
                      <ExternalLink size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Community Governance - Elevated Callout */}
      <div className="bg-gradient-to-r from-web3-purple/20 via-web3-cyan/10 to-web3-purple/20 rounded-2xl p-8 border border-web3-purple/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-web3-purple/30 to-web3-cyan/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Vote size={36} className="text-web3-purple" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            True Decentralization
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6">
            All platform decisions are voted on by the creator community. 
            Join our DAO and shape the future of Renegade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-background/30 rounded-full px-4 py-2">
              <Users size={16} className="text-web3-cyan" />
              <span className="text-sm text-foreground">15,247 DAO Members</span>
            </div>
            <div className="flex items-center gap-2 bg-background/30 rounded-full px-4 py-2">
              <Vote size={16} className="text-web3-purple" />
              <span className="text-sm text-foreground">127 Proposals Passed</span>
            </div>
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-web3-purple to-web3-cyan hover:opacity-90 text-white font-semibold"
            asChild
          >
            <Link to="/global-innovators">
              Join DAO Governance
              <ExternalLink size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};