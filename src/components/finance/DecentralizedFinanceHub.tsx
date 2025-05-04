
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Wallet, 
  Send, 
  CreditCard, 
  BarChart3, 
  Banknote, 
  Clock, 
  Users, 
  UserPlus, 
  RefreshCw, 
  Globe,
  HandCoins,
  PiggyBank,
  ShoppingCart,
  ArrowRight,
  Plus
} from "lucide-react";
import { useWallet, Token } from "@/services/wallet";
import { Progress } from "@/components/ui/progress";

export const DecentralizedFinanceHub: React.FC = () => {
  const { 
    wallet, 
    sendTokens, 
    createVault,
    groupWallets,
    savingsCircles,
    createGroupWallet,
    createSavingsCircle,
    barterListings,
    createBarterListing
  } = useWallet();
  
  const { toast } = useToast();
  
  const [selectedTab, setSelectedTab] = useState("individual");
  
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  
  const [newVaultName, setNewVaultName] = useState("");
  const [newVaultToken, setNewVaultToken] = useState("");
  const [newVaultAutoDeposit, setNewVaultAutoDeposit] = useState(false);
  
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [isVaultDialogOpen, setIsVaultDialogOpen] = useState(false);
  const [isGroupWalletDialogOpen, setIsGroupWalletDialogOpen] = useState(false);
  const [isSavingsCircleDialogOpen, setIsSavingsCircleDialogOpen] = useState(false);
  const [isBarterDialogOpen, setIsBarterDialogOpen] = useState(false);
  
  // Group wallet form
  const [groupWalletName, setGroupWalletName] = useState("");
  const [groupWalletMembers, setGroupWalletMembers] = useState("");
  const [groupWalletToken, setGroupWalletToken] = useState("");
  
  // Savings circle form
  const [circleTitle, setCircleTitle] = useState("");
  const [circleMembers, setCircleMembers] = useState("");
  const [circleAmount, setCircleAmount] = useState("");
  const [circleToken, setCircleToken] = useState("");
  
  // Barter listing form
  const [barterTitle, setBarterTitle] = useState("");
  const [barterDescription, setBarterDescription] = useState("");
  const [barterLocation, setBarterLocation] = useState("");
  const [barterWanted, setBarterWanted] = useState("");
  
  if (!wallet.isConnected) {
    return (
      <div className="p-8 text-center">
        <div className="w-20 h-20 bg-neura-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wallet className="w-10 h-10 text-neura-purple" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Connect Your Wallet</h2>
        <p className="text-white/70 mb-4">Connect your wallet to access the Decentralized Finance Hub</p>
      </div>
    );
  }
  
  const handleTransfer = async () => {
    if (!selectedToken || !recipient || !amount) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await sendTokens(selectedToken.address, recipient, amount);
      setIsTransferDialogOpen(false);
      setSelectedToken(null);
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error("Transfer error:", error);
    }
  };
  
  const handleCreateVault = async () => {
    if (!newVaultName || !newVaultToken) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await createVault(newVaultName, newVaultToken, newVaultAutoDeposit);
      setIsVaultDialogOpen(false);
      setNewVaultName("");
      setNewVaultToken("");
      setNewVaultAutoDeposit(false);
    } catch (error) {
      console.error("Create vault error:", error);
    }
  };
  
  const handleCreateGroupWallet = async () => {
    if (!groupWalletName || !groupWalletMembers || !groupWalletToken) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Split the members string into an array of addresses
      const members = groupWalletMembers.split(',').map(m => m.trim());
      
      await createGroupWallet(groupWalletName, members, groupWalletToken);
      setIsGroupWalletDialogOpen(false);
      setGroupWalletName("");
      setGroupWalletMembers("");
      setGroupWalletToken("");
    } catch (error) {
      console.error("Create group wallet error:", error);
    }
  };
  
  const handleCreateSavingsCircle = async () => {
    if (!circleTitle || !circleMembers || !circleAmount || !circleToken) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Split the members string into an array of addresses
      const members = circleMembers.split(',').map(m => m.trim());
      
      await createSavingsCircle(circleTitle, members, circleAmount, circleToken);
      setIsSavingsCircleDialogOpen(false);
      setCircleTitle("");
      setCircleMembers("");
      setCircleAmount("");
      setCircleToken("");
    } catch (error) {
      console.error("Create savings circle error:", error);
    }
  };
  
  const handleCreateBarterListing = async () => {
    if (!barterTitle || !barterDescription || !barterLocation || !barterWanted) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Split the wanted items into an array
      const wanted = barterWanted.split(',').map(item => item.trim());
      
      // For this demo, we'll use placeholder images
      const images = ["https://via.placeholder.com/150"];
      
      await createBarterListing(barterTitle, barterDescription, images, barterLocation, wanted);
      setIsBarterDialogOpen(false);
      setBarterTitle("");
      setBarterDescription("");
      setBarterLocation("");
      setBarterWanted("");
    } catch (error) {
      console.error("Create barter listing error:", error);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Decentralized Finance Hub
            </span>
          </h1>
          <p className="text-white/70">
            Manage your finances, create shared wallets, and trade with your community
          </p>
        </div>
        
        <div className="mb-6 bg-neura-dark/50 border border-neura-purple/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium">Your Wallet</h2>
              <p className="text-white/50 text-sm">
                {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
              </p>
            </div>
            <div className="bg-neura-purple/20 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-neura-cyan">
                {wallet.chainId === 1 ? 'Ethereum Mainnet' : `Chain ID: ${wallet.chainId}`}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-neura-dark/80 border-neura-purple/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Native Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{parseFloat(wallet.nativeBalance).toFixed(4)} ETH</div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/80 border-neura-purple/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Token Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {wallet.tokens.map((token) => (
                    <div key={token.address} className="flex justify-between items-center">
                      <span>{token.symbol}</span>
                      <span className="font-medium">{token.balance || '0.00'}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <Dialog open={isTransferDialogOpen} onOpenChange={setIsTransferDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  <Send className="w-4 h-4 mr-2" /> Send
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-neura-dark border-neura-purple/30 text-white">
                <DialogHeader>
                  <DialogTitle>Send Tokens</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="token">Select Token</Label>
                    <select 
                      id="token" 
                      className="w-full bg-neura-dark/80 border border-neura-purple/30 rounded-md p-2 text-white"
                      value={selectedToken?.address || ""}
                      onChange={(e) => {
                        const token = wallet.tokens.find(t => t.address === e.target.value);
                        setSelectedToken(token || null);
                      }}
                    >
                      <option value="">Select a token</option>
                      {wallet.tokens.map((token) => (
                        <option key={token.address} value={token.address}>
                          {token.symbol} ({token.balance || '0.00'})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="recipient">Recipient Address</Label>
                    <Input 
                      id="recipient" 
                      placeholder="0x..." 
                      className="bg-neura-dark/80 border-neura-purple/30"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input 
                      id="amount" 
                      type="number"
                      placeholder="0.00" 
                      className="bg-neura-dark/80 border-neura-purple/30"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    {selectedToken && (
                      <div className="text-xs text-white/50">
                        Available: {selectedToken.balance || '0.00'} {selectedToken.symbol}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button 
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                    onClick={handleTransfer}
                  >
                    Send Transaction
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog open={isVaultDialogOpen} onOpenChange={setIsVaultDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  <PiggyBank className="w-4 h-4 mr-2" /> Create Vault
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-neura-dark border-neura-purple/30 text-white">
                <DialogHeader>
                  <DialogTitle>Create Savings Vault</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="vaultName">Vault Name</Label>
                    <Input 
                      id="vaultName" 
                      placeholder="My Savings" 
                      className="bg-neura-dark/80 border-neura-purple/30"
                      value={newVaultName}
                      onChange={(e) => setNewVaultName(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="vaultToken">Select Token</Label>
                    <select 
                      id="vaultToken" 
                      className="w-full bg-neura-dark/80 border border-neura-purple/30 rounded-md p-2 text-white"
                      value={newVaultToken}
                      onChange={(e) => setNewVaultToken(e.target.value)}
                    >
                      <option value="">Select a token</option>
                      {wallet.tokens.map((token) => (
                        <option key={token.address} value={token.address}>
                          {token.symbol}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="autoDeposit"
                      className="rounded border-neura-purple/30"
                      checked={newVaultAutoDeposit}
                      onChange={(e) => setNewVaultAutoDeposit(e.target.checked)}
                    />
                    <Label htmlFor="autoDeposit">Enable auto-deposit from earnings</Label>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button 
                    className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                    onClick={handleCreateVault}
                  >
                    Create Vault
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Tabs 
          defaultValue="individual" 
          value={selectedTab} 
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 gap-2 bg-neura-dark/50 border border-neura-purple/30 p-1 rounded-lg">
            <TabsTrigger 
              value="individual" 
              className="data-[state=active]:bg-neura-purple/20 data-[state=active]:text-white"
            >
              <Wallet className="w-4 h-4 mr-2" /> Individual
            </TabsTrigger>
            <TabsTrigger 
              value="community" 
              className="data-[state=active]:bg-neura-purple/20 data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" /> Community
            </TabsTrigger>
            <TabsTrigger 
              value="barter" 
              className="data-[state=active]:bg-neura-purple/20 data-[state=active]:text-white"
            >
              <HandCoins className="w-4 h-4 mr-2" /> Barter
            </TabsTrigger>
          </TabsList>
          
          {/* Individual Banking Tab */}
          <TabsContent value="individual" className="mt-6">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle>Individual Banking</CardTitle>
                <CardDescription className="text-white/70">
                  Manage your personal finances, savings, and transfers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Multi-Currency Section */}
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Banknote className="w-5 h-5 mr-2 text-neura-cyan" />
                    Multi-Currency Wallet
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wallet.tokens.map(token => (
                      <Card key={token.address} className="bg-neura-dark/80 border-neura-purple/20">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">{token.symbol}</CardTitle>
                            {token.logo && (
                              <div className="w-6 h-6 rounded-full overflow-hidden">
                                <img src={token.logo} alt={token.symbol} className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                          <CardDescription className="text-xs">{token.name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-xl font-bold">{token.balance || '0.00'}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10"
                            onClick={() => {
                              setSelectedToken(token);
                              setIsTransferDialogOpen(true);
                            }}
                          >
                            <Send className="w-4 h-4 mr-1" /> Send
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <Separator className="bg-neura-purple/20" />
                
                {/* Savings Vaults Section */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium flex items-center">
                      <PiggyBank className="w-5 h-5 mr-2 text-neura-cyan" />
                      Savings Vaults
                    </h3>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      onClick={() => setIsVaultDialogOpen(true)}
                    >
                      <Plus className="w-4 h-4 mr-1" /> New Vault
                    </Button>
                  </div>
                  
                  {wallet.vaults.length === 0 ? (
                    <Card className="bg-neura-dark/80 border-neura-purple/20 p-6 text-center">
                      <p className="text-white/70 mb-4">You don't have any savings vaults yet.</p>
                      <Button 
                        variant="outline" 
                        className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        onClick={() => setIsVaultDialogOpen(true)}
                      >
                        Create Your First Vault
                      </Button>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wallet.vaults.map(vault => {
                        const token = wallet.tokens.find(t => t.address === vault.tokenAddress);
                        return (
                          <Card key={vault.id} className="bg-neura-dark/80 border-neura-purple/20">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">{vault.name}</CardTitle>
                                <div className="px-2 py-1 rounded-full bg-neura-purple/20 text-xs text-neura-cyan">
                                  {vault.apy}% APY
                                </div>
                              </div>
                              <CardDescription className="text-xs">
                                {token?.symbol} • {vault.lockPeriod ? `${vault.lockPeriod} day lock` : 'Flexible'}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-xl font-bold">{vault.balance} {token?.symbol}</div>
                              {vault.autoDeposit && (
                                <div className="text-xs text-neura-cyan mt-1 flex items-center">
                                  <Refresh className="w-3 h-3 mr-1" /> Auto-deposit enabled
                                </div>
                              )}
                            </CardContent>
                            <CardFooter className="pt-0">
                              <div className="grid grid-cols-2 gap-2 w-full">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                                >
                                  Deposit
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                                >
                                  Withdraw
                                </Button>
                              </div>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <Separator className="bg-neura-purple/20" />
                
                {/* Global Transfers Section */}
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-neura-cyan" />
                    Global Transfers
                  </h3>
                  
                  <Card className="bg-neura-dark/80 border-neura-purple/20">
                    <CardHeader>
                      <CardTitle className="text-base">Transfer Options</CardTitle>
                      <CardDescription className="text-white/70">
                        Send money globally with minimal fees
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 border border-neura-purple/20 rounded-lg cursor-pointer hover:bg-neura-purple/5">
                        <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-4">
                          <Wallet className="w-5 h-5 text-neura-cyan" />
                        </div>
                        <div>
                          <h4 className="font-medium">Wallet Address</h4>
                          <p className="text-xs text-white/70">Send to any wallet address</p>
                        </div>
                        <Button 
                          className="ml-auto bg-neura-purple/20 text-white hover:bg-neura-purple/30"
                          size="sm"
                          onClick={() => setIsTransferDialogOpen(true)}
                        >
                          Send
                        </Button>
                      </div>
                      
                      <div className="flex items-center p-3 border border-neura-purple/20 rounded-lg cursor-pointer hover:bg-neura-purple/5">
                        <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-4">
                          <Globe className="w-5 h-5 text-neura-cyan" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email or ENS</h4>
                          <p className="text-xs text-white/70">Send to email or ENS domain</p>
                        </div>
                        <div className="ml-auto">
                          <Button variant="ghost" size="sm" className="text-white/50 cursor-not-allowed">
                            Coming Soon
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Community Banking Tab */}
          <TabsContent value="community" className="mt-6">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle>Community Banking</CardTitle>
                <CardDescription className="text-white/70">
                  Collective finances, group savings, and community lending
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Group Wallets Section */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium flex items-center">
                      <Users className="w-5 h-5 mr-2 text-neura-cyan" />
                      Group Wallets
                    </h3>
                    
                    <Dialog open={isGroupWalletDialogOpen} onOpenChange={setIsGroupWalletDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        >
                          <Plus className="w-4 h-4 mr-1" /> New Group Wallet
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-neura-dark border-neura-purple/30 text-white">
                        <DialogHeader>
                          <DialogTitle>Create Group Wallet</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="groupName">Group Name</Label>
                            <Input 
                              id="groupName" 
                              placeholder="Creator Collective" 
                              className="bg-neura-dark/80 border-neura-purple/30"
                              value={groupWalletName}
                              onChange={(e) => setGroupWalletName(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="members">Member Addresses (comma separated)</Label>
                            <Input 
                              id="members" 
                              placeholder="0x123..., 0x456..." 
                              className="bg-neura-dark/80 border-neura-purple/30"
                              value={groupWalletMembers}
                              onChange={(e) => setGroupWalletMembers(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="groupToken">Primary Currency</Label>
                            <select 
                              id="groupToken" 
                              className="w-full bg-neura-dark/80 border border-neura-purple/30 rounded-md p-2 text-white"
                              value={groupWalletToken}
                              onChange={(e) => setGroupWalletToken(e.target.value)}
                            >
                              <option value="">Select a token</option>
                              {wallet.tokens.map((token) => (
                                <option key={token.address} value={token.address}>
                                  {token.symbol}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                            onClick={handleCreateGroupWallet}
                          >
                            Create Group Wallet
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {groupWallets.length === 0 ? (
                    <Card className="bg-neura-dark/80 border-neura-purple/20 p-6 text-center">
                      <p className="text-white/70 mb-4">You're not part of any group wallets yet.</p>
                      <Button 
                        variant="outline" 
                        className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        onClick={() => setIsGroupWalletDialogOpen(true)}
                      >
                        Create Your First Group Wallet
                      </Button>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {groupWallets.map(group => {
                        const token = wallet.tokens.find(t => t.address === group.tokenAddress);
                        return (
                          <Card key={group.id} className="bg-neura-dark/80 border-neura-purple/20">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">{group.name}</CardTitle>
                                {group.isAdmin && (
                                  <div className="px-2 py-1 rounded-full bg-neura-purple/20 text-xs text-neura-cyan">
                                    Admin
                                  </div>
                                )}
                              </div>
                              <CardDescription className="text-xs">
                                {group.members.length} members • {token?.symbol}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-xl font-bold">{group.balance} {token?.symbol}</div>
                              <div className="mt-2">
                                <div className="text-xs text-white/50 mb-1">Members</div>
                                <div className="flex -space-x-2 overflow-hidden">
                                  {group.members.slice(0, 4).map((member, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-neura-purple/30 border border-neura-dark flex items-center justify-center text-xs">
                                      {member.slice(2, 4)}
                                    </div>
                                  ))}
                                  {group.members.length > 4 && (
                                    <div className="w-6 h-6 rounded-full bg-neura-purple/30 border border-neura-dark flex items-center justify-center text-xs">
                                      +{group.members.length - 4}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <div className="grid grid-cols-2 gap-2 w-full">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                                >
                                  Deposit
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                                >
                                  Manage
                                </Button>
                              </div>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <Separator className="bg-neura-purple/20" />
                
                {/* Savings Circles Section */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-neura-cyan" />
                      Savings Circles
                    </h3>
                    
                    <Dialog open={isSavingsCircleDialogOpen} onOpenChange={setIsSavingsCircleDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        >
                          <Plus className="w-4 h-4 mr-1" /> New Savings Circle
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-neura-dark border-neura-purple/30 text-white">
                        <DialogHeader>
                          <DialogTitle>Create Savings Circle</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="circleTitle">Circle Name</Label>
                            <Input 
                              id="circleTitle" 
                              placeholder="Creator Circle" 
                              className="bg-neura-dark/80 border-neura-purple/30"
                              value={circleTitle}
                              onChange={(e) => setCircleTitle(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="circleMembers">Member Addresses (comma separated)</Label>
                            <Input 
                              id="circleMembers" 
                              placeholder="0x123..., 0x456..." 
                              className="bg-neura-dark/80 border-neura-purple/30"
                              value={circleMembers}
                              onChange={(e) => setCircleMembers(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="circleAmount">Contribution Amount</Label>
                            <Input 
                              id="circleAmount" 
                              placeholder="100.00" 
                              className="bg-neura-dark/80 border-neura-purple/30"
                              value={circleAmount}
                              onChange={(e) => setCircleAmount(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="circleToken">Token</Label>
                            <select 
                              id="circleToken" 
                              className="w-full bg-neura-dark/80 border border-neura-purple/30 rounded-md p-2 text-white"
                              value={circleToken}
                              onChange={(e) => setCircleToken(e.target.value)}
                            >
                              <option value="">Select a token</option>
                              {wallet.tokens.map((token) => (
                                <option key={token.address} value={token.address}>
                                  {token.symbol}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                            onClick={handleCreateSavingsCircle}
                          >
                            Create Savings Circle
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {savingsCircles.length === 0 ? (
                    <Card className="bg-neura-dark/80 border-neura-purple/20 p-6 text-center">
                      <p className="text-white/70 mb-4">You're not part of any savings circles yet.</p>
                      <Button 
                        variant="outline" 
                        className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        onClick={() => setIsSavingsCircleDialogOpen(true)}
                      >
                        Create Your First Savings Circle
                      </Button>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {savingsCircles.map(circle => {
                        const token = wallet.tokens.find(t => t.address === circle.tokenAddress);
                        return (
                          <Card key={circle.id} className="bg-neura-dark/80 border-neura-purple/20">
                            <CardHeader>
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">{circle.name}</CardTitle>
                                {circle.isActive && (
                                  <div className="px-2 py-1 rounded-full bg-neura-purple/20 text-xs text-neura-cyan">
                                    Active
                                  </div>
                                )}
                              </div>
                              <CardDescription className="text-xs">
                                {circle.members.length} members • {token?.symbol}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <div className="text-sm text-white/70 mb-1">Contribution Amount</div>
                                <div className="text-xl font-bold">{circle.contributionAmount} {token?.symbol}</div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-white/70 mb-1">Next Withdrawal</div>
                                <div className="flex items-center">
                                  <div className="w-6 h-6 rounded-full bg-neura-purple/30 border border-neura-dark flex items-center justify-center text-xs mr-2">
                                    {circle.nextWithdrawal.slice(2, 4)}
                                  </div>
                                  <span>{circle.nextWithdrawal.slice(0, 6)}...{circle.nextWithdrawal.slice(-4)}</span>
                                </div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-white/70 mb-1">Schedule</div>
                                <div className="space-y-2">
                                  {circle.schedule.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-neura-purple/30 border border-neura-dark flex items-center justify-center text-xs mr-2">
                                          {item.address.slice(2, 4)}
                                        </div>
                                        <span className="text-sm">{item.address.slice(0, 4)}...{item.address.slice(-4)}</span>
                                      </div>
                                      <span className="text-sm text-white/70">{item.date}</span>
                                    </div>
                                  ))}
                                  {circle.schedule.length > 3 && (
                                    <div className="text-center text-white/50 text-sm">
                                      +{circle.schedule.length - 3} more
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button 
                                variant="outline" 
                                className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10"
                              >
                                Make Contribution
                              </Button>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <Separator className="bg-neura-purple/20" />
                
                {/* P2P Lending Section */}
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <HandCoins className="w-5 h-5 mr-2 text-neura-cyan" />
                    P2P Lending
                  </h3>
                  
                  <Card className="bg-neura-dark/80 border-neura-purple/20 p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neura-purple/20 flex items-center justify-center">
                      <HandCoins className="w-8 h-8 text-neura-cyan" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">Community Lending Coming Soon</h4>
                    <p className="text-white/70 mb-4">
                      Enable peer-to-peer loans with customizable terms and DAO-enforced agreements.
                    </p>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Join Waitlist
                    </Button>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Barter Trade Tab */}
          <TabsContent value="barter" className="mt-6">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle>Barter Trade</CardTitle>
                <CardDescription className="text-white/70">
                  Exchange goods and services directly with other members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-neura-cyan" />
                    Available Listings
                  </h3>
                  
                  <Dialog open={isBarterDialogOpen} onOpenChange={setIsBarterDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      >
                        <Plus className="w-4 h-4 mr-1" /> Create Listing
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <DialogHeader>
                        <DialogTitle>Create Barter Listing</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="barterTitle">Title</Label>
                          <Input 
                            id="barterTitle" 
                            placeholder="Professional Video Editing" 
                            className="bg-neura-dark/80 border-neura-purple/30"
                            value={barterTitle}
                            onChange={(e) => setBarterTitle(e.target.value)}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="barterDescription">Description</Label>
                          <textarea 
                            id="barterDescription" 
                            placeholder="Describe what you're offering..." 
                            className="w-full bg-neura-dark/80 border border-neura-purple/30 rounded-md p-2 text-white min-h-[100px]"
                            value={barterDescription}
                            onChange={(e) => setBarterDescription(e.target.value)}
                          ></textarea>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="barterLocation">Location</Label>
                          <Input 
                            id="barterLocation" 
                            placeholder="New York Area" 
                            className="bg-neura-dark/80 border-neura-purple/30"
                            value={barterLocation}
                            onChange={(e) => setBarterLocation(e.target.value)}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="barterWanted">Looking For (comma separated)</Label>
                          <Input 
                            id="barterWanted" 
                            placeholder="Graphic Design, Music Production" 
                            className="bg-neura-dark/80 border-neura-purple/30"
                            value={barterWanted}
                            onChange={(e) => setBarterWanted(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button 
                          className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                          onClick={handleCreateBarterListing}
                        >
                          Create Listing
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {barterListings.length === 0 ? (
                  <Card className="bg-neura-dark/80 border-neura-purple/20 p-6 text-center">
                    <p className="text-white/70 mb-4">No barter listings available in your area.</p>
                    <Button 
                      variant="outline" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      onClick={() => setIsBarterDialogOpen(true)}
                    >
                      Create Your First Listing
                    </Button>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {barterListings.map(listing => (
                      <Card key={listing.id} className="bg-neura-dark/80 border-neura-purple/20">
                        <div className="md:flex">
                          {listing.images.length > 0 && (
                            <div className="w-full md:w-1/4 h-48 md:h-auto">
                              <img 
                                src={listing.images[0]} 
                                alt={listing.title}
                                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none" 
                              />
                            </div>
                          )}
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-medium">{listing.title}</h3>
                              <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-neura-purple/30 mr-1"></div>
                                <div className="w-4 h-4 rounded-full bg-neura-purple/30 mr-1"></div>
                                <div className="w-4 h-4 rounded-full bg-neura-purple/30"></div>
                                <span className="ml-1 text-xs text-white/70">Level {listing.verificationLevel}</span>
                              </div>
                            </div>
                            
                            <p className="text-white/70 mb-4">{listing.description}</p>
                            
                            <div className="flex items-center text-sm text-white/50 mb-3">
                              <Globe className="w-4 h-4 mr-1" />
                              <span>{listing.location}</span>
                            </div>
                            
                            <div className="mb-4">
                              <div className="text-sm text-white/70 mb-2">Looking for:</div>
                              <div className="flex flex-wrap gap-2">
                                {listing.lookingFor.map((item, i) => (
                                  <span key={i} className="px-2 py-1 bg-neura-purple/20 text-neura-cyan rounded-full text-xs">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                              Propose Trade <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 p-4 border border-neura-purple/20 rounded-lg bg-neura-dark/30">
                  <h4 className="font-medium mb-2">About Verified Barter</h4>
                  <p className="text-white/70 text-sm">
                    All trades are backed by smart contracts that ensure fair exchange. Both parties must confirm receipt before assets are released.
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-neura-purple/20 flex items-center justify-center mr-3">
                      <HandCoins className="w-4 h-4 text-neura-cyan" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Secure Escrow Trading</div>
                      <div className="text-white/50">Smart contract-backed barter system</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
