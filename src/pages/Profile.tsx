import React, { useState, useEffect } from 'react';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ENSDisplay } from '@/components/wallet/ENSDisplay';
import { ChainSwitcher } from '@/components/wallet/ChainSwitcher';
import { SIWEButton } from '@/components/wallet/SIWEButton';
import { useSIWE } from '@/hooks/useSIWE';
import { 
  Wallet, 
  Activity, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Copy, 
  ExternalLink,
  Shield,
  Clock,
  Coins,
  TrendingUp,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

// Mock activity data - in production, fetch from blockchain APIs
const mockActivity = [
  { id: 1, type: 'send', amount: '0.5', token: 'ETH', to: '0x742d...9F3a', timestamp: '2 hours ago', status: 'confirmed', hash: '0xabc123...' },
  { id: 2, type: 'receive', amount: '100', token: 'USDC', from: '0x123d...4F2b', timestamp: '5 hours ago', status: 'confirmed', hash: '0xdef456...' },
  { id: 3, type: 'mint', amount: '1', token: 'NFT', collection: 'Diminga Creators', timestamp: '1 day ago', status: 'confirmed', hash: '0xghi789...' },
  { id: 4, type: 'swap', amountIn: '1', tokenIn: 'ETH', amountOut: '1850', tokenOut: 'USDC', timestamp: '2 days ago', status: 'confirmed', hash: '0xjkl012...' },
  { id: 5, type: 'send', amount: '0.1', token: 'ETH', to: '0x852d...3F1c', timestamp: '3 days ago', status: 'pending', hash: '0xmno345...' },
];

const chainNames: Record<number, string> = {
  1: 'Ethereum',
  137: 'Polygon',
  8453: 'Base',
  42161: 'Arbitrum',
  10: 'Optimism',
};

const Profile = () => {
  const { address, isConnected, connector } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({ address });
  const { openConnectModal } = useConnectModal();
  const { isSignedIn } = useSIWE();
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopiedAddress(true);
      toast.success('Address copied to clipboard');
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const formatBalance = (value: string | undefined) => {
    if (!value) return '0.00';
    const num = parseFloat(value);
    return num.toFixed(4);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black pt-24">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto bg-card/50 border-border/50 backdrop-blur-xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Wallet className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Connect your wallet to view your Web3 profile, ENS name, and on-chain activity.
              </p>
              <Button
                onClick={openConnectModal}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Header with ENS */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10" />
            <CardContent className="relative p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* ENS Avatar & Name */}
                <ENSDisplay size="lg" showBadge={true} />
                
                <div className="flex-1 space-y-3">
                  {/* Wallet Address */}
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg font-mono">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyAddress}
                      className="h-8 w-8 p-0"
                    >
                      {copiedAddress ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0"
                    >
                      <a
                        href={`https://etherscan.io/address/${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/50 bg-primary/10">
                      <Wallet className="w-3 h-3 mr-1" />
                      {connector?.name || 'Connected'}
                    </Badge>
                    <Badge variant="outline" className="border-border/50">
                      {chainNames[chainId] || `Chain ${chainId}`}
                    </Badge>
                    {isSignedIn && (
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10">
                        <Shield className="w-3 h-3 mr-1" />
                        SIWE Verified
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <ChainSwitcher />
                  <SIWEButton variant="compact" showENS={false} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Balance & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Balance</p>
                    <p className="text-xl font-bold">
                      {formatBalance(balance?.formatted)} {balance?.symbol}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">NFTs Owned</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                    <p className="text-xl font-bold">47</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Creator Score</p>
                    <p className="text-xl font-bold">850</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Tabs */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-xl">
            <Tabs defaultValue="activity" className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>On-Chain Activity</CardTitle>
                  <TabsList className="bg-muted/50">
                    <TabsTrigger value="activity">All Activity</TabsTrigger>
                    <TabsTrigger value="nfts">NFTs</TabsTrigger>
                    <TabsTrigger value="tokens">Tokens</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="activity" className="mt-0">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-3">
                      {mockActivity.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tx.type === 'send' ? 'bg-red-500/20' :
                              tx.type === 'receive' ? 'bg-emerald-500/20' :
                              tx.type === 'mint' ? 'bg-purple-500/20' :
                              'bg-amber-500/20'
                            }`}>
                              {tx.type === 'send' && <ArrowUpRight className="w-5 h-5 text-red-500" />}
                              {tx.type === 'receive' && <ArrowDownLeft className="w-5 h-5 text-emerald-500" />}
                              {tx.type === 'mint' && <Coins className="w-5 h-5 text-purple-500" />}
                              {tx.type === 'swap' && <Activity className="w-5 h-5 text-amber-500" />}
                            </div>
                            <div>
                              <p className="font-medium capitalize">{tx.type}</p>
                              <p className="text-sm text-muted-foreground">
                                {tx.type === 'send' && `To ${tx.to}`}
                                {tx.type === 'receive' && `From ${tx.from}`}
                                {tx.type === 'mint' && tx.collection}
                                {tx.type === 'swap' && `${tx.tokenIn} → ${tx.tokenOut}`}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              {tx.type === 'swap' 
                                ? `${tx.amountIn} ${tx.tokenIn}`
                                : `${tx.amount} ${tx.token}`
                              }
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {tx.timestamp}
                              {tx.status === 'confirmed' ? (
                                <CheckCircle className="w-3 h-3 text-emerald-500" />
                              ) : tx.status === 'pending' ? (
                                <Loader2 className="w-3 h-3 animate-spin text-amber-500" />
                              ) : (
                                <XCircle className="w-3 h-3 text-red-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="nfts" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square rounded-lg bg-muted/30 flex items-center justify-center">
                        <div className="text-center">
                          <Coins className="w-8 h-8 mx-auto mb-2 text-muted-foreground/50" />
                          <p className="text-sm text-muted-foreground">NFT #{i}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tokens" className="mt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-lg">Ξ</span>
                        </div>
                        <div>
                          <p className="font-medium">Ethereum</p>
                          <p className="text-sm text-muted-foreground">ETH</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatBalance(balance?.formatted)}</p>
                        <p className="text-sm text-muted-foreground">~$3,200</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-lg">$</span>
                        </div>
                        <div>
                          <p className="font-medium">USD Coin</p>
                          <p className="text-sm text-muted-foreground">USDC</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">1,250.00</p>
                        <p className="text-sm text-muted-foreground">~$1,250</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
