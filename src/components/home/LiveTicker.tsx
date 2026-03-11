import React from 'react';

const tickerItems = [
  { name: '@mayacreates', action: 'minted Genesis Print #221', amount: '+$80' },
  { name: '@alexbuilds', action: 'sold NeuraTech Hoodie', amount: '+$240' },
  { name: 'DAO Proposal #47', action: 'Fee reduction passed', amount: '94% YES' },
  { name: '@priyagreen', action: 'SolarPulse hit 1,400 backers', amount: '+$28.9K' },
  { name: '@alexmusic', action: 'tokenized album drop', amount: '+$1.2K' },
  { name: 'New Creator', action: 'first mint verified on-chain', amount: '+$45' },
];

export const LiveTicker: React.FC = () => {
  const items = [...tickerItems, ...tickerItems]; // Duplicate for seamless loop

  return (
    <div
      className="relative z-[2] overflow-hidden py-3"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: '#0d0d14',
      }}
    >
      <div
        className="flex gap-12 w-max"
        style={{ animation: 'ticker-scroll 25s linear infinite' }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap font-space-mono text-xs">
            <span className="text-foreground font-bold">{item.name}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{item.action}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-emerald-400 font-bold">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
