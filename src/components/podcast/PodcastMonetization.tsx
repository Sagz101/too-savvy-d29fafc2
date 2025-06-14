
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Wallet, Lock, CreditCard, Gift, Zap, DollarSign } from 'lucide-react';

export const PodcastMonetization: React.FC = () => {
  const [tokenGatingEnabled, setTokenGatingEnabled] = useState(true);
  const [subscriptionsEnabled, setSubscriptionsEnabled] = useState(true);
  const [tippingEnabled, setTippingEnabled] = useState(true);
  const [subscriptionPrice, setSubscriptionPrice] = useState([9.99]);

  return (
    <div className="space-y-6">
      {/* Token-Gated Access */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Token-Gated Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Enable Token Gating</Label>
              <p className="text-sm text-muted-foreground">Require Web3 wallet connection for premium content</p>
            </div>
            <Switch checked={tokenGatingEnabled} onCheckedChange={setTokenGatingEnabled} />
          </div>

          {tokenGatingEnabled && (
            <div className="space-y-4 border border-border/50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Wallet Integration</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        <span className="text-sm">MetaMask</span>
                      </div>
                      <Badge variant="default">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        <span className="text-sm">WalletConnect</span>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Access Requirements</Label>
                  <div className="space-y-3 mt-2">
                    <div>
                      <Label className="text-sm">NFT Collection</Label>
                      <Input placeholder="0x... or collection name" />
                    </div>
                    <div>
                      <Label className="text-sm">Token Amount</Label>
                      <div className="flex gap-2">
                        <Input placeholder="100" />
                        <Select>
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="Token" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eth">ETH</SelectItem>
                            <SelectItem value="usdc">USDC</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">1,247</p>
                  <p className="text-xs text-muted-foreground">Token Holders</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">Ξ 15.6</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">89%</p>
                  <p className="text-xs text-muted-foreground">Conversion</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">24h</p>
                  <p className="text-xs text-muted-foreground">Avg Access Time</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Subscription Options */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Subscription Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Enable Subscriptions</Label>
              <p className="text-sm text-muted-foreground">Monthly/annual recurring payments</p>
            </div>
            <Switch checked={subscriptionsEnabled} onCheckedChange={setSubscriptionsEnabled} />
          </div>

          {subscriptionsEnabled && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-border/50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground">Basic</h4>
                      <p className="text-2xl font-bold text-foreground mt-2">$4.99</p>
                      <p className="text-sm text-muted-foreground">/month</p>
                      <ul className="text-sm text-muted-foreground mt-4 space-y-1">
                        <li>• Ad-free episodes</li>
                        <li>• Early access</li>
                        <li>• Show notes</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4">Configure</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <Badge className="mb-2">Popular</Badge>
                      <h4 className="font-semibold text-foreground">Premium</h4>
                      <p className="text-2xl font-bold text-foreground mt-2">$9.99</p>
                      <p className="text-sm text-muted-foreground">/month</p>
                      <ul className="text-sm text-muted-foreground mt-4 space-y-1">
                        <li>• Everything in Basic</li>
                        <li>• Bonus episodes</li>
                        <li>• Q&A access</li>
                        <li>• Community chat</li>
                      </ul>
                      <Button className="w-full mt-4">Configure</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground">VIP</h4>
                      <p className="text-2xl font-bold text-foreground mt-2">$19.99</p>
                      <p className="text-sm text-muted-foreground">/month</p>
                      <ul className="text-sm text-muted-foreground mt-4 space-y-1">
                        <li>• Everything in Premium</li>
                        <li>• 1-on-1 calls</li>
                        <li>• NFT perks</li>
                        <li>• Custom content</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4">Configure</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Payment Methods</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">Crypto Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">PayPal</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Subscription Analytics</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="text-center p-3 bg-card/20 rounded-lg">
                      <p className="text-lg font-bold text-foreground">1,892</p>
                      <p className="text-xs text-muted-foreground">Active Subscribers</p>
                    </div>
                    <div className="text-center p-3 bg-card/20 rounded-lg">
                      <p className="text-lg font-bold text-foreground">$18.7K</p>
                      <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tipping & Donations */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Tipping & Donations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Enable Tipping</Label>
              <p className="text-sm text-muted-foreground">One-time token-based contributions</p>
            </div>
            <Switch checked={tippingEnabled} onCheckedChange={setTippingEnabled} />
          </div>

          {tippingEnabled && (
            <div className="space-y-4 border border-border/50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Quick Tip Amounts</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <Button variant="outline" size="sm">$5</Button>
                    <Button variant="outline" size="sm">$10</Button>
                    <Button variant="outline" size="sm">$25</Button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <Button variant="outline" size="sm">0.01 ETH</Button>
                    <Button variant="outline" size="sm">0.05 ETH</Button>
                    <Button variant="outline" size="sm">0.1 ETH</Button>
                  </div>
                </div>

                <div>
                  <Label>Tip Goals</Label>
                  <div className="space-y-3 mt-2">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Monthly Goal</span>
                        <span>$1,200 / $2,000</span>
                      </div>
                      <div className="w-full bg-card/20 rounded-full h-2 mt-1">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm">Custom Goal</Label>
                      <Input placeholder="Enter goal amount" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">347</p>
                  <p className="text-xs text-muted-foreground">Total Tips</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">$3.2K</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">$12.7</p>
                  <p className="text-xs text-muted-foreground">Avg Tip</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dynamic Ad Insertion */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Dynamic Ad Insertion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Token-Sponsored Ad Slots</Label>
            <p className="text-sm text-muted-foreground mb-4">Allow advertisers to pay with tokens for ad placements</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Pre-roll (30s)</span>
                  <p className="text-sm text-muted-foreground">Beginning of episode</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">0.5 ETH</p>
                  <p className="text-sm text-muted-foreground">per placement</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Mid-roll (60s)</span>
                  <p className="text-sm text-muted-foreground">Middle of episode</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">1.2 ETH</p>
                  <p className="text-sm text-muted-foreground">per placement</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div>
                  <span className="font-medium text-foreground">Post-roll (15s)</span>
                  <p className="text-sm text-muted-foreground">End of episode</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">0.3 ETH</p>
                  <p className="text-sm text-muted-foreground">per placement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">Ξ 24.8</p>
              <p className="text-xs text-muted-foreground">Ad Revenue (30d)</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">18</p>
              <p className="text-xs text-muted-foreground">Active Campaigns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Summary */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Revenue Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-card/20 rounded-lg">
              <p className="text-2xl font-bold text-foreground">$47.2K</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-xs text-emerald-400">+23% vs last month</p>
            </div>
            <div className="text-center p-4 bg-card/20 rounded-lg">
              <p className="text-2xl font-bold text-foreground">$31.5K</p>
              <p className="text-sm text-muted-foreground">Subscriptions</p>
              <p className="text-xs text-emerald-400">+15% vs last month</p>
            </div>
            <div className="text-center p-4 bg-card/20 rounded-lg">
              <p className="text-2xl font-bold text-foreground">$8.9K</p>
              <p className="text-sm text-muted-foreground">Token Gates</p>
              <p className="text-xs text-emerald-400">+45% vs last month</p>
            </div>
            <div className="text-center p-4 bg-card/20 rounded-lg">
              <p className="text-2xl font-bold text-foreground">$6.8K</p>
              <p className="text-sm text-muted-foreground">Tips & Ads</p>
              <p className="text-xs text-emerald-400">+12% vs last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
