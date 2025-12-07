import React from 'react';
import { Shield, Leaf, Heart, Clock, Award, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TrustMetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const TrustMetric: React.FC<TrustMetricProps> = ({ icon: Icon, value, label, color }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  const trustMetrics: TrustMetricProps[] = [
    {
      icon: Shield,
      value: '98/100',
      label: 'Security Score (CertiK)',
      color: 'bg-blue-500/20',
    },
    {
      icon: Leaf,
      value: '127%',
      label: 'Carbon Offset',
      color: 'bg-green-500/20',
    },
    {
      icon: Heart,
      value: '94%',
      label: 'Community Trust',
      color: 'bg-pink-500/20',
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Platform Uptime',
      color: 'bg-purple-500/20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Trust & Transparency</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built on security, sustainability, and community-first principles.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {trustMetrics.map((metric, index) => (
            <TrustMetric key={index} {...metric} />
          ))}
        </div>

        {/* Verification Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* CertiK Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">CertiK Security Audit</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our smart contracts have been audited by CertiK, the leading blockchain security firm. 
                  All critical vulnerabilities addressed.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    Verified ✓
                  </span>
                  <span className="text-xs text-gray-500">Audit ID: TSV-2024-001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Sig Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Multi-Sig Treasury</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Platform funds are secured in a multi-signature wallet requiring 3/5 key holders 
                  to approve any transaction.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    3/5 Multisig
                  </span>
                  <span className="text-xs text-gray-500">Gnosis Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DAO Governance Callout */}
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">True Decentralization</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            All platform decisions are voted on by the creator community. 
            Join our DAO and shape the future of Diminga.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 text-green-400" />
              <span>Community Proposals</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 text-green-400" />
              <span>Token-Weighted Voting</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 text-green-400" />
              <span>Transparent Treasury</span>
            </div>
          </div>
          <Button 
            size="lg"
            className="mt-6 bg-indigo-500 hover:bg-indigo-400 text-white"
            asChild
          >
            <Link to="/global-innovators">
              Join DAO Governance
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
