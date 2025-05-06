
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useWallet } from '@/services/wallet';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, TrendingUp, CreditCard, Wallet as WalletIcon, DollarSign, Users, Handshake, Award } from "lucide-react";

export const Dashboard: React.FC = () => {
  const { wallet } = useWallet();
  
  // Color palette
  const colors = {
    primary: '#9b87f5',
    secondary: '#7E69AB',
    teal: '#4ade80',
    red: '#f43f5e',
    orange: '#fb923c',
    blue: '#60a5fa',
    yellow: '#fcd34d',
    neutral: '#8E9196'
  };

  // Sample portfolio data
  const portfolioData = [
    { name: 'USDC', value: wallet.tokens[0].balance ? parseFloat(wallet.tokens[0].balance) : 0 },
    { name: 'NEURA', value: wallet.tokens[2].balance ? parseFloat(wallet.tokens[2].balance) : 0 },
    { name: 'EUROC', value: wallet.tokens[1].balance ? parseFloat(wallet.tokens[1].balance) : 0 },
    { name: 'Vault', value: wallet.vaults.reduce((sum, v) => sum + parseFloat(v.balance), 0) }
  ];
  
  // Chart data
  const assetPerformanceData = [
    { name: 'Jan', usdc: 400, neura: 240, eth: 320 },
    { name: 'Feb', usdc: 430, neura: 260, eth: 380 },
    { name: 'Mar', usdc: 450, neura: 290, eth: 410 },
    { name: 'Apr', usdc: 470, neura: 340, eth: 390 },
    { name: 'May', usdc: 540, neura: 380, eth: 420 },
    { name: 'June', usdc: 580, neura: 450, eth: 450 }
  ];
  
  const transactionData = [
    { name: '1', value: 20 },
    { name: '5', value: 35 },
    { name: '10', value: 25 },
    { name: '15', value: 40 },
    { name: '20', value: 30 },
    { name: '25', value: 45 },
    { name: '30', value: 25 },
  ];

  // Stats calculations
  const totalBalance = wallet.tokens.reduce((sum, token) => {
    return token.balance ? sum + parseFloat(token.balance) : sum;
  }, 0);
  
  const totalVaultBalance = wallet.vaults.reduce((sum, vault) => {
    return sum + parseFloat(vault.balance);
  }, 0);
  
  const activeServices = wallet.serviceItems.length;
  const totalProjects = wallet.impactProjects.length;
  const averageReputation = wallet.reputationStats?.reputation || 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Balance */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/70">Total Balance</p>
                <h3 className="text-2xl font-semibold mt-1">${totalBalance.toFixed(2)}</h3>
                <div className="flex items-center mt-2">
                  <Badge className="flex items-center bg-green-500/20 text-green-500 border-green-500/30">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+8.2%</span>
                  </Badge>
                </div>
              </div>
              <div className="bg-neura-purple/20 p-3 rounded-full">
                <WalletIcon className="h-6 w-6 text-neura-purple" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vault Balance */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/70">Vault Balance</p>
                <h3 className="text-2xl font-semibold mt-1">${totalVaultBalance.toFixed(2)}</h3>
                <div className="flex items-center mt-2">
                  <Badge className="flex items-center bg-blue-500/20 text-blue-500 border-blue-500/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+5.8% APY</span>
                  </Badge>
                </div>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Stats */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/70">Active Services</p>
                <h3 className="text-2xl font-semibold mt-1">{activeServices}</h3>
                <div className="flex items-center mt-2">
                  <Badge className="flex items-center bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                    <Handshake className="h-3 w-3 mr-1" />
                    <span>{totalProjects} Projects</span>
                  </Badge>
                </div>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <Users className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reputation Score */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/70">Reputation</p>
                <h3 className="text-2xl font-semibold mt-1">{averageReputation}/100</h3>
                <div className="flex items-center mt-2">
                  <Badge className="flex items-center bg-purple-500/20 text-purple-400 border-purple-500/30">
                    <Award className="h-3 w-3 mr-1" />
                    <span>Top 10%</span>
                  </Badge>
                </div>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-full">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Portfolio Breakdown */}
        <Card className="bg-neura-dark/80 border-neura-purple/20 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Portfolio Breakdown</CardTitle>
            <CardDescription>Asset allocation by value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={[colors.primary, colors.blue, colors.teal, colors.yellow][index % 4]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {portfolioData.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span 
                    className="inline-block w-3 h-3 mr-2 rounded-full" 
                    style={{ backgroundColor: [colors.primary, colors.blue, colors.teal, colors.yellow][i % 4] }}
                  ></span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Asset Performance */}
        <Card className="bg-neura-dark/80 border-neura-purple/20 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Asset Performance</CardTitle>
            <CardDescription>Value trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="area">
              <TabsList className="bg-neura-dark/50 mb-4">
                <TabsTrigger value="area">Area</TabsTrigger>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="bar">Bar</TabsTrigger>
              </TabsList>

              <TabsContent value="area" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={assetPerformanceData}>
                    <defs>
                      <linearGradient id="colorUsdc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={colors.primary} stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorNeura" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colors.blue} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={colors.blue} stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colors.teal} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={colors.teal} stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <Tooltip />
                    <Area type="monotone" dataKey="usdc" stroke={colors.primary} fillOpacity={1} fill="url(#colorUsdc)" />
                    <Area type="monotone" dataKey="neura" stroke={colors.blue} fillOpacity={1} fill="url(#colorNeura)" />
                    <Area type="monotone" dataKey="eth" stroke={colors.teal} fillOpacity={1} fill="url(#colorEth)" />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="line" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={assetPerformanceData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <Tooltip />
                    <Line type="monotone" dataKey="usdc" stroke={colors.primary} />
                    <Line type="monotone" dataKey="neura" stroke={colors.blue} />
                    <Line type="monotone" dataKey="eth" stroke={colors.teal} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="bar" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={assetPerformanceData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <Tooltip />
                    <Bar dataKey="usdc" fill={colors.primary} />
                    <Bar dataKey="neura" fill={colors.blue} />
                    <Bar dataKey="eth" fill={colors.teal} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Transaction Activity */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Transaction Activity</CardTitle>
            <CardDescription>Number of transactions per day</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={transactionData}>
                <defs>
                  <linearGradient id="colorTx" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#9b87f5" fillOpacity={1} fill="url(#colorTx)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Credit Score Metrics */}
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardHeader>
            <CardTitle className="text-lg">Credit Score Metrics</CardTitle>
            <CardDescription>Key factors affecting your score</CardDescription>
          </CardHeader>
          <CardContent>
            {wallet.creditScore && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/70">Repayment History</span>
                    <span className="text-sm">{wallet.creditScore.repaymentHistory}%</span>
                  </div>
                  <div className="h-2 w-full bg-neura-dark rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: `${wallet.creditScore.repaymentHistory}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/70">Community Trust</span>
                    <span className="text-sm">{wallet.creditScore.communityTrust}%</span>
                  </div>
                  <div className="h-2 w-full bg-neura-dark rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500" 
                      style={{ width: `${wallet.creditScore.communityTrust}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/70">Wallet Activity</span>
                    <span className="text-sm">{wallet.creditScore.walletActivity}%</span>
                  </div>
                  <div className="h-2 w-full bg-neura-dark rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500" 
                      style={{ width: `${wallet.creditScore.walletActivity}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-2 flex items-center">
                  <CreditCard className="w-5 h-5 text-neura-cyan mr-2" />
                  <span className="text-sm text-white/70">
                    Credit Limit: <span className="text-white font-medium">${wallet.creditScore.maxCredit}</span>
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
