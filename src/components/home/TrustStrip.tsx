import React from 'react';

const partners = ['Ethereum', 'Polygon', 'Solana', 'CertiK', 'IPFS', 'Chainlink', 'Base', 'Arbitrum'];

export const TrustStrip: React.FC = () => {
  return (
    <div className="bg-white py-5" style={{ borderTop: '1px solid rgba(17,17,16,0.06)', borderBottom: '1px solid rgba(17,17,16,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center gap-8 flex-wrap">
        <span className="font-dm-sans font-semibold text-[0.65rem] tracking-[0.06em] uppercase text-diminga-muted shrink-0">
          Trusted by
        </span>
        {partners.map(p => (
          <span key={p} className="font-dm-sans text-sm text-diminga-muted/60">{p}</span>
        ))}
      </div>
    </div>
  );
};
