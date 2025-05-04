
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { FileText, Users, Key, Shield } from "lucide-react";
import { WalletButton } from "@/components/ui/wallet-button";

// Form schema for project creation
const projectSchema = z.object({
  name: z.string().min(3, { message: "Project name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Please provide a meaningful description." }),
  projectType: z.enum(["personal", "team", "dao", "opensourc"]),
  isPublic: z.boolean().default(false),
  blockchain: z.enum(["ethereum", "polygon", "optimism", "arbitrum"]),
  collaborators: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectCreationModuleProps {
  onProjectCreated: (projectId: string) => void;
}

export const ProjectCreationModule: React.FC<ProjectCreationModuleProps> = ({ onProjectCreated }) => {
  const [isConnected, setIsConnected] = useState(false);
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      projectType: "personal",
      isPublic: false,
      blockchain: "ethereum",
      collaborators: "",
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    try {
      // In a real implementation, we would call a smart contract to create the project
      // and mint ownership NFTs
      console.log("Creating project:", data);
      
      // Simulate blockchain interaction
      toast.loading("Creating your project on-chain...");
      
      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a mock project ID (in production this would come from the blockchain)
      const projectId = `project-${Date.now()}`;
      
      toast.success("Project created successfully!", {
        description: "Your ownership NFT has been minted."
      });
      
      onProjectCreated(projectId);
    } catch (error) {
      console.error("Failed to create project:", error);
      toast.error("Failed to create project", {
        description: "There was an error creating your project. Please try again."
      });
    }
  };
  
  const handleConnectWallet = () => {
    // In a real implementation, this would connect to the user's wallet
    setIsConnected(true);
    toast.success("Wallet connected successfully!");
  };
  
  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Card className="w-full max-w-md bg-neura-dark/80 border-neura-purple/30">
          <CardHeader>
            <CardTitle className="text-center">Connect Your Wallet</CardTitle>
            <CardDescription className="text-center">
              You need to connect your wallet to create and manage projects
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button 
              className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-semibold"
              onClick={handleConnectWallet}
            >
              <Key className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter project name" 
                        {...field}
                        className="bg-neura-dark/40 border-yellow-500/20 focus:border-neura-cyan"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your project's goals and vision"
                        {...field}
                        className="bg-neura-dark/40 border-yellow-500/20 focus:border-neura-cyan min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-neura-dark border-yellow-500/20">
                          <SelectItem value="personal">Personal</SelectItem>
                          <SelectItem value="team">Team</SelectItem>
                          <SelectItem value="dao">DAO</SelectItem>
                          <SelectItem value="opensource">Open Source</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="blockchain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blockchain</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                            <SelectValue placeholder="Select blockchain" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-neura-dark border-yellow-500/20">
                          <SelectItem value="ethereum">Ethereum</SelectItem>
                          <SelectItem value="polygon">Polygon</SelectItem>
                          <SelectItem value="optimism">Optimism</SelectItem>
                          <SelectItem value="arbitrum">Arbitrum</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="isPublic"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-yellow-500/20 p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Public Project
                      </FormLabel>
                      <FormDescription>
                        Make this project visible to everyone on the platform.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="collaborators"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collaborators (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter wallet addresses, separated by commas"
                        {...field}
                        className="bg-neura-dark/40 border-yellow-500/20 focus:border-neura-cyan"
                      />
                    </FormControl>
                    <FormDescription>
                      Add team members by their wallet addresses. You can change this later.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-semibold"
            >
              Create Project & Mint Ownership NFT
            </Button>
          </form>
        </Form>
      </div>
      
      <div>
        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle>Project Benefits</CardTitle>
            <CardDescription>Key features of your decentralized project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-neura-cyan" />
              </div>
              <div>
                <h4 className="font-medium">NFT-based Ownership</h4>
                <p className="text-sm text-white/70">Smart contracts enforce ownership rights and access control</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-neura-cyan" />
              </div>
              <div>
                <h4 className="font-medium">Decentralized Collaboration</h4>
                <p className="text-sm text-white/70">Work together with secure, transparent coordination</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-gradient-to-br from-neura-cyan/20 to-yellow-400/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-neura-cyan" />
              </div>
              <div>
                <h4 className="font-medium">IPFS Document Storage</h4>
                <p className="text-sm text-white/70">Immutable, distributed storage with version history</p>
              </div>
            </div>
          </CardContent>
          <Separator className="my-2 bg-yellow-500/20" />
          <CardFooter className="flex flex-col items-start pt-4">
            <h4 className="font-medium mb-2">Supported Blockchains</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-neura-cyan text-neura-cyan">Ethereum</Badge>
              <Badge variant="outline" className="border-purple-400 text-purple-400">Polygon</Badge>
              <Badge variant="outline" className="border-red-400 text-red-400">Optimism</Badge>
              <Badge variant="outline" className="border-blue-400 text-blue-400">Arbitrum</Badge>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
