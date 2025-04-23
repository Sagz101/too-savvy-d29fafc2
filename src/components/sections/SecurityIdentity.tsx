
import React from 'react';
import { Shield, Fingerprint, UserCheck, FileDigit } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Shield className="w-10 h-10 text-neura-cyan" />,
    name: "Zero-Knowledge Access Logs",
    description: "Verified activity with privacy protection - log access events with zk-proofs to verify usage without exposing user behavior"
  },
  {
    icon: <UserCheck className="w-10 h-10 text-neura-cyan" />,
    name: "Decentralized Identity (DID)",
    description: "Cross-platform, pseudonymous verification - W3C DID integration for user verification and enhanced privacy"
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-neura-cyan" />,
    name: "Multi-Factor Wallet Authentication",
    description: "Hardware, biometrics, passkeys - enhanced access security for your digital assets"
  },
  {
    icon: <FileDigit className="w-10 h-10 text-neura-cyan" />,
    name: "File Fingerprinting (Merkle Trees)",
    description: "Tamper-proof media verification - ensure file integrity for all media assets and digital content"
  }
];

export const SecurityIdentity = () => {
  return (
    <section id="security" className="py-24 bg-gradient-to-b from-neura-dark via-neura-dark/90 to-neura-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              🔐 Security & Identity
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Advanced protection for your digital assets and personal information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-neura-dark/50 backdrop-blur-sm border border-neura-purple/20 rounded-xl p-8 hover:border-neura-purple/40 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/20 p-4 rounded-xl border border-neura-purple/30">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.name}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
