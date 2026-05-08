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
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-[2] overflow-hidden py-3 bg-renegade-text">
      <div
        className="flex gap-12 w-max"
        style={{ animation: 'ticker-scroll 28s linear infinite' }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap font-dm-sans text-xs">
            <span className="text-white/90 font-semibold">{item.name}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/50">{item.action}</span>
            <span className="text-white/30">·</span>
            <span className="text-renegade-ticker font-semibold">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
