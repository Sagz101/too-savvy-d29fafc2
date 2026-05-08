
import React from 'react';
import { Shield, Award, Globe, CheckCircle, ExternalLink } from 'lucide-react';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { SecurityIndicator } from '@/components/ui/security-indicator';

export const TrustedByCreators: React.FC = () => {
  const trustSignals = [
    {
      icon: Shield,
      title: "Smart Contract Audited",
      description: "Verified by CertiK for maximum security",
      badge: "CertiK Verified",
      link: "https://skynet.certik.com/projects/renegade",
      reportId: "TSV-2024-001"
    },
    {
      icon: Award,
      title: "Carbon Neutral",
      description: "Certified sustainable blockchain practices",
      badge: "Carbon Trust",
      link: "https://carbontrust.com/our-clients/t/renegade",
      certId: "CT-CN-2024-TSV"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Regulatory compliant across jurisdictions",
      badge: "Compliant",
      link: "/whitepaper#compliance",
      details: "See compliance framework"
    }
  ];

  return (
    <section className="py-16 bg-card/10">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Trusted by Creators Worldwide
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto mb-4">
            Built with enterprise-grade security and sustainability at its core
          </ModernText>
          <ModernText variant="caption" className="text-muted-foreground">
            All certifications and audits are publicly verifiable
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {trustSignals.map((signal, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              size="md"
              className="text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <signal.icon size={24} className="text-green-400" />
                </div>
              </div>
              <ModernHeading level={5} className="mb-2 text-lg font-semibold">
                {signal.title}
              </ModernHeading>
              <ModernText variant="body" muted className="mb-3 text-sm">
                {signal.description}
              </ModernText>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400 text-xs mb-3">
                <CheckCircle size={12} />
                {signal.badge}
              </div>
              
              {/* Verification details */}
              <div className="text-xs text-muted-foreground space-y-1">
                {signal.reportId && <div>Report: {signal.reportId}</div>}
                {signal.certId && <div>Cert: {signal.certId}</div>}
                <a 
                  href={signal.link} 
                  target={signal.link.startsWith('http') ? "_blank" : "_self"}
                  rel={signal.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {signal.details || "Verify"}
                  <ExternalLink size={10} />
                </a>
              </div>
            </ModernCard>
          ))}
        </div>

        <div className="text-center">
          <ModernText variant="caption" className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <SecurityIndicator status="audited" />
            <span>Trusted by 10,000+ Web3 creators across 15+ networks</span>
          </ModernText>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a 
              href="https://skynet.certik.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Monitor Security Score
            </a>
            <a 
              href="/whitepaper" 
              className="text-primary hover:underline"
            >
              Read Technical Docs
            </a>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
