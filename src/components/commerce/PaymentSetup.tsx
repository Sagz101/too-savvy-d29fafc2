
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Zap, 
  DollarSign, 
  Settings,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface PaymentSetupProps {
  storeConfig: any;
  onUpdate: (updates: any) => void;
}

export const PaymentSetup: React.FC<PaymentSetupProps> = ({ storeConfig, onUpdate }) => {
  const [uniswapConfig, setUniswapConfig] = useState({
    enabled: true,
    slippage: '0.5',
    deadline: '20'
  });

  const supportedTokens = [
    { symbol: 'ETH', name: 'Ethereum', enabled: true },
    { symbol: 'USDT', name: 'Tether USD', enabled: true },
    { symbol: 'USDC', name: 'USD Coin', enabled: true },
    { symbol: 'DAI', name: 'Dai Stablecoin', enabled: false },
    { symbol: 'WBTC', name: 'Wrapped Bitcoin', enabled: false }
  ];

  const [tokens, setTokens] = useState(supportedTokens);

  const toggleToken = (symbol: string) => {
    setTokens(tokens.map(token => 
      token.symbol === symbol 
        ? { ...token, enabled: !token.enabled }
        : token
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            UniswapX Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Enable UniswapX Routing</h3>
              <p className="text-sm text-muted-foreground">
                Automatically route payments through UniswapX for best prices
              </p>
            </div>
            <Switch 
              checked={uniswapConfig.enabled}
              onCheckedChange={(enabled) => setUniswapConfig({ ...uniswapConfig, enabled })}
            />
          </div>

          {uniswapConfig.enabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <label className="text-sm font-medium mb-2 block">Max Slippage (%)</label>
                <Input
                  type="number"
                  step="0.1"
                  value={uniswapConfig.slippage}
                  onChange={(e) => setUniswapConfig({ ...uniswapConfig, slippage: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Deadline (minutes)</label>
                <Input
                  type="number"
                  value={uniswapConfig.deadline}
                  onChange={(e) => setUniswapConfig({ ...uniswapConfig, deadline: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">UniswapX RFQ endpoint configured</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Accepted Tokens
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tokens.map((token) => (
              <div key={token.symbol} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{token.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{token.symbol}</h4>
                    <p className="text-sm text-muted-foreground">{token.name}</p>
                  </div>
                </div>
                <Switch 
                  checked={token.enabled}
                  onCheckedChange={() => toggleToken(token.symbol)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Smart Contract Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">ERC-721M Contract</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Modified ERC-721 for product authentication and metadata tracking
            </p>
            <div className="flex gap-2">
              <Badge variant="outline">Upgradeable</Badge>
              <Badge variant="outline">OpenZeppelin</Badge>
              <Badge variant="outline">NFT Minting</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Contract Address</label>
              <Input placeholder="0x..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Network</label>
              <Input placeholder="Polygon" value="Polygon Mainnet" readOnly />
            </div>
          </div>

          <div className="flex items-center gap-2 text-orange-600">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Contract deployment required for production</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
