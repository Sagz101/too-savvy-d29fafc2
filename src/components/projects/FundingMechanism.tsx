
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { DollarSign, BadgeDollarSign, Award, TrendingUp, Key, ArrowRight } from "lucide-react";

interface FundingMechanismProps {
  projectId: string;
}

// Form schema for funding setup
const fundingSchema = z.object({
  fundingType: z.enum(["donation", "equity", "token"]),
  fundingGoal: z.string().regex(/^\d+(\.\d{1,2})?$/, { message: "Enter a valid amount" }),
  tokenTicker: z.string().optional(),
  useMilestones: z.boolean().default(false),
});

type FundingFormValues = z.infer<typeof fundingSchema>;

// Mock milestone data
const MOCK_MILESTONES = [
  { id: 1, title: "MVP Launch", fundingPercentage: 20, status: "Released", date: "2025-06-15" },
  { id: 2, title: "Beta Testing", fundingPercentage: 30, status: "Pending", date: "2025-07-30" },
  { id: 3, title: "Public Launch", fundingPercentage: 50, status: "Pending", date: "2025-09-01" },
];

// Mock contributors data
const MOCK_CONTRIBUTORS = [
  { id: 1, address: "0x8B...2E", amount: "2.5 ETH", timestamp: "2025-05-01 09:23" },
  { id: 2, address: "0x3F...9A", amount: "1.2 ETH", timestamp: "2025-05-02 14:35" },
  { id: 3, address: "0x7D...C4", amount: "0.8 ETH", timestamp: "2025-05-03 11:14" },
];

export const FundingMechanism: React.FC<FundingMechanismProps> = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState<"setup" | "dashboard">("setup");
  const [fundingDistribution, setFundingDistribution] = useState<number[]>([33, 33, 34]);
  
  const form = useForm<FundingFormValues>({
    resolver: zodResolver(fundingSchema),
    defaultValues: {
      fundingType: "donation",
      fundingGoal: "10",
      tokenTicker: "",
      useMilestones: false,
    },
  });
  
  const onSubmit = async (data: FundingFormValues) => {
    try {
      // In a real implementation, we would deploy a funding contract to the blockchain
      console.log("Setting up funding:", data);
      
      // Simulate blockchain interaction
      toast.loading("Deploying funding contract...");
      
      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Funding setup complete!", {
        description: "Your funding contract has been deployed."
      });
      
      setActiveTab("dashboard");
    } catch (error) {
      console.error("Failed to setup funding:", error);
      toast.error("Failed to setup funding", {
        description: "There was an error deploying your funding contract. Please try again."
      });
    }
  };
  
  const handleDistributionChange = (index: number, value: number[]) => {
    // Adjust other values to maintain total of 100%
    const newDistribution = [...fundingDistribution];
    const diff = value[0] - newDistribution[index];
    
    newDistribution[index] = value[0];
    
    // Distribute the difference proportionally among other segments
    const othersTotal = 100 - value[0];
    let remaining = othersTotal;
    
    for (let i = 0; i < newDistribution.length; i++) {
      if (i !== index) {
        const adjustedValue = Math.max(0, newDistribution[i] - (diff * newDistribution[i] / (100 - newDistribution[index] + diff)));
        newDistribution[i] = i === newDistribution.length - 1 ? remaining : Math.round(adjustedValue);
        remaining -= newDistribution[i];
      }
    }
    
    setFundingDistribution(newDistribution);
  };
  
  const watchFundingType = form.watch("fundingType");
  const watchUseMilestones = form.watch("useMilestones");
  
  return (
    <div className="space-y-6">
      {activeTab === "setup" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card className="bg-neura-dark/50 border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BadgeDollarSign className="mr-2 h-5 w-5 text-neura-cyan" />
                      Project Funding Setup
                    </CardTitle>
                    <CardDescription>
                      Configure how your project will receive funding on-chain
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fundingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Funding Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                                <SelectValue placeholder="Select funding type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neura-dark border-yellow-500/20">
                              <SelectItem value="donation">Donation-based</SelectItem>
                              <SelectItem value="equity">Equity-based</SelectItem>
                              <SelectItem value="token">Token-based</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {watchFundingType === "donation" && "Receive donations without giving ownership or tokens."}
                            {watchFundingType === "equity" && "Smart contracts automatically assign equity to investors."}
                            {watchFundingType === "token" && "Contributors receive utility tokens for your project."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fundingGoal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Funding Goal (ETH)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="10.00" 
                                {...field}
                                className="bg-neura-dark/40 border-yellow-500/20"
                                type="number"
                                step="0.01"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {watchFundingType === "token" && (
                        <FormField
                          control={form.control}
                          name="tokenTicker"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Token Ticker</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="e.g., PRJ" 
                                  {...field}
                                  className="bg-neura-dark/40 border-yellow-500/20"
                                  maxLength={5}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="useMilestones"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-yellow-500/20 p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Milestone-Based Funding</FormLabel>
                            <FormDescription>
                              Funds are released when project milestones are verified on-chain
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-neura-cyan"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    {watchUseMilestones && (
                      <div className="space-y-4 pt-2">
                        <h3 className="font-medium">Fund Distribution by Milestone</h3>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>MVP Completion</span>
                              <span>{fundingDistribution[0]}%</span>
                            </div>
                            <Slider
                              value={[fundingDistribution[0]]}
                              min={5}
                              max={90}
                              step={1}
                              onValueChange={(value) => handleDistributionChange(0, value)}
                              className="data-[state=checked]:bg-neura-cyan"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Beta Release</span>
                              <span>{fundingDistribution[1]}%</span>
                            </div>
                            <Slider
                              value={[fundingDistribution[1]]}
                              min={5}
                              max={90}
                              step={1}
                              onValueChange={(value) => handleDistributionChange(1, value)}
                              className="data-[state=checked]:bg-neura-cyan"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Public Launch</span>
                              <span>{fundingDistribution[2]}%</span>
                            </div>
                            <Slider
                              value={[fundingDistribution[2]]}
                              min={5}
                              max={90}
                              step={1}
                              onValueChange={(value) => handleDistributionChange(2, value)}
                              className="data-[state=checked]:bg-neura-cyan"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Separator className="my-2 bg-yellow-500/20" />
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium"
                      >
                        Deploy Funding Contract
                        <Key className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>
          
          <div>
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Funding Options</CardTitle>
                <CardDescription>Choose the right funding model for your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium">Donation-based</h4>
                    <p className="text-sm text-white/70">Perfect for open-source and social impact projects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium">Equity-based</h4>
                    <p className="text-sm text-white/70">Smart contract-managed equity allocation for startups</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium">Token-based</h4>
                    <p className="text-sm text-white/70">Reward contributors with utility or governance tokens</p>
                  </div>
                </div>
              </CardContent>
              <Separator className="my-2 bg-yellow-500/20" />
              <CardFooter className="flex flex-col items-start pt-4">
                <h4 className="font-medium mb-2">Key Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-neura-cyan" />
                    <span>Smart contract-enforced transparency</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-neura-cyan" />
                    <span>Automated milestone-based releases</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-neura-cyan" />
                    <span>Immutable record of all contributions</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-neura-cyan" />
                    <span>No intermediaries or payment processors</span>
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-neura-dark/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <BadgeDollarSign className="mr-2 h-5 w-5 text-neura-cyan" />
                  Funding Status
                </div>
                <Badge className="bg-yellow-600/50 text-yellow-200">Active</Badge>
              </CardTitle>
              <CardDescription>
                Project is currently accepting contributions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/70">Progress</span>
                  <span className="text-sm font-medium">4.5 ETH / 10 ETH</span>
                </div>
                <Progress value={45} className="h-2 bg-neura-dark/50" indicatorClassName="bg-gradient-to-r from-neura-cyan to-yellow-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-neura-dark/40 rounded-lg p-4 border border-yellow-500/10">
                  <div className="text-sm text-white/70">Contributors</div>
                  <div className="text-2xl font-semibold mt-1">12</div>
                </div>
                <div className="bg-neura-dark/40 rounded-lg p-4 border border-yellow-500/10">
                  <div className="text-sm text-white/70">Days Remaining</div>
                  <div className="text-2xl font-semibold mt-1">28</div>
                </div>
              </div>
              
              {watchUseMilestones && (
                <div className="space-y-3">
                  <h3 className="font-medium mb-2">Milestones</h3>
                  {MOCK_MILESTONES.map((milestone) => (
                    <div key={milestone.id} className="flex items-center justify-between p-3 bg-neura-dark/30 rounded-lg border border-yellow-500/10">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{milestone.title}</span>
                          <Badge 
                            className={milestone.status === "Released" 
                              ? "ml-2 bg-green-700/30 text-green-300 text-xs" 
                              : "ml-2 bg-yellow-700/30 text-yellow-300 text-xs"
                            }
                          >
                            {milestone.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-white/60 mt-1 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {milestone.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-neura-cyan">{milestone.fundingPercentage}%</div>
                        <div className="text-xs text-white/60">{(milestone.fundingPercentage * 10 / 100).toFixed(2)} ETH</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex justify-end space-x-3">
                <Button 
                  className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium"
                  onClick={() => setActiveTab("setup")}
                >
                  Modify Settings
                </Button>
                <Button 
                  variant="outline" 
                  className="border-yellow-500/20 hover:bg-neura-purple/10"
                >
                  View Contract
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-neura-dark/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-neura-cyan" />
                Recent Contributions
              </CardTitle>
              <CardDescription>
                On-chain record of all project funding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {MOCK_CONTRIBUTORS.map((contributor) => (
                  <div
                    key={contributor.id}
                    className="flex justify-between items-center p-3 bg-neura-dark/30 rounded-lg border border-yellow-500/10"
                  >
                    <div>
                      <div className="font-mono text-sm">{contributor.address}</div>
                      <div className="text-xs text-white/60 mt-1">{contributor.timestamp}</div>
                    </div>
                    <div className="text-lg font-medium text-neura-cyan">{contributor.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
