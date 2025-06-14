
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { GitBranch, Users, FileText, MessageSquare, Award, Plus, Clock } from "lucide-react";

interface CollaborationHubProps {
  activeProject: string | null;
}

export const CollaborationHub: React.FC<CollaborationHubProps> = ({ activeProject }) => {
  const [showCreateBounty, setShowCreateBounty] = useState(false);
  const [bountyData, setBountyData] = useState({
    title: '',
    description: '',
    reward: '',
    skill: '',
    deadline: ''
  });

  const mockBounties = [
    {
      id: 'bounty-1',
      title: 'Implement OAuth Integration',
      description: 'Add OAuth login support for major providers (Google, GitHub, Twitter)',
      reward: '2.5 ETH',
      skill: 'Backend Development',
      deadline: '7 days',
      status: 'Open',
      applicants: 12,
      creator: '0x123...789'
    },
    {
      id: 'bounty-2',
      title: 'Design Landing Page UI',
      description: 'Create modern, responsive landing page design with dark theme',
      reward: '1.8 ETH',
      skill: 'UI/UX Design',
      deadline: '5 days',
      status: 'In Progress',
      applicants: 8,
      assignee: '0x456...012'
    },
    {
      id: 'bounty-3',
      title: 'Write Technical Documentation',
      description: 'Complete API documentation and developer guides',
      reward: '1.2 ETH',
      skill: 'Technical Writing',
      deadline: '10 days',
      status: 'Review',
      applicants: 3,
      assignee: '0x789...345'
    }
  ];

  const mockTasks = [
    {
      id: 'task-1',
      title: 'Smart Contract Security Audit',
      assignee: 'Alice Chen',
      priority: 'High',
      progress: 75,
      deadline: '2025-06-20',
      status: 'In Progress'
    },
    {
      id: 'task-2',
      title: 'Frontend Performance Optimization',
      assignee: 'Bob Smith',
      priority: 'Medium',
      progress: 40,
      deadline: '2025-06-25',
      status: 'In Progress'
    },
    {
      id: 'task-3',
      title: 'Database Migration Scripts',
      assignee: 'Carol Johnson',
      priority: 'Low',
      progress: 100,
      deadline: '2025-06-15',
      status: 'Completed'
    }
  ];

  const mockMilestones = [
    {
      id: 'milestone-1',
      title: 'Alpha Release',
      description: 'Core functionality and basic UI',
      progress: 85,
      deadline: '2025-07-01',
      reward: '10 ETH',
      status: 'In Progress'
    },
    {
      id: 'milestone-2',
      title: 'Beta Release',
      description: 'Feature complete with testing',
      progress: 20,
      deadline: '2025-08-15',
      reward: '15 ETH',
      status: 'Planning'
    },
    {
      id: 'milestone-3',
      title: 'Production Launch',
      description: 'Full deployment and documentation',
      progress: 0,
      deadline: '2025-09-30',
      reward: '25 ETH',
      status: 'Planning'
    }
  ];

  const handleCreateBounty = () => {
    if (!bountyData.title || !bountyData.description || !bountyData.reward) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.loading("Creating bounty...");
    
    setTimeout(() => {
      toast.success("Bounty Created!", {
        description: "Your bounty is now live and accepting applications"
      });
      setShowCreateBounty(false);
      setBountyData({ title: '', description: '', reward: '', skill: '', deadline: '' });
    }, 2000);
  };

  const handleApplyToBounty = (bountyId: string) => {
    toast.loading("Submitting application...");
    
    setTimeout(() => {
      toast.success("Application Submitted!", {
        description: "The project team will review your application"
      });
    }, 1500);
  };

  if (!activeProject) {
    return (
      <div className="text-center p-12">
        <GitBranch className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Select a Project</h3>
        <p className="text-muted-foreground">Choose a project to access collaboration tools</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Collaboration Hub</h2>
          <p className="text-muted-foreground">Manage bounties, tasks, and project milestones</p>
        </div>
        <Button 
          onClick={() => setShowCreateBounty(!showCreateBounty)}
          className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Bounty
        </Button>
      </div>

      {showCreateBounty && (
        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle>Create New Bounty</CardTitle>
            <CardDescription>Post a task for community contributors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Bounty Title"
              value={bountyData.title}
              onChange={(e) => setBountyData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20"
            />
            
            <Textarea
              placeholder="Detailed description of the task..."
              value={bountyData.description}
              onChange={(e) => setBountyData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20 min-h-[100px]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Reward (ETH)"
                value={bountyData.reward}
                onChange={(e) => setBountyData(prev => ({ ...prev, reward: e.target.value }))}
                className="bg-neura-dark/40 border-yellow-500/20"
              />
              
              <Select onValueChange={(value) => setBountyData(prev => ({ ...prev, skill: value }))}>
                <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                  <SelectValue placeholder="Required Skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend Development</SelectItem>
                  <SelectItem value="backend">Backend Development</SelectItem>
                  <SelectItem value="design">UI/UX Design</SelectItem>
                  <SelectItem value="writing">Technical Writing</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                placeholder="Deadline (days)"
                value={bountyData.deadline}
                onChange={(e) => setBountyData(prev => ({ ...prev, deadline: e.target.value }))}
                className="bg-neura-dark/40 border-yellow-500/20"
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleCreateBounty} className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black">
                Create Bounty
              </Button>
              <Button variant="outline" onClick={() => setShowCreateBounty(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="bounties" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="bounties">Bounties</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bounties" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockBounties.map((bounty) => (
              <Card key={bounty.id} className="bg-neura-dark/60 border-yellow-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{bounty.title}</CardTitle>
                      <CardDescription className="mt-1">{bounty.description}</CardDescription>
                    </div>
                    <Badge variant={bounty.status === 'Open' ? 'default' : bounty.status === 'In Progress' ? 'secondary' : 'outline'}>
                      {bounty.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Reward</div>
                      <div className="text-lg font-semibold text-green-400">{bounty.reward}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Deadline</div>
                      <div className="font-medium">{bounty.deadline}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{bounty.skill}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {bounty.applicants} applicant{bounty.applicants !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  {bounty.status === 'Open' && (
                    <Button 
                      onClick={() => handleApplyToBounty(bounty.id)}
                      className="w-full"
                      variant="outline"
                    >
                      Apply for Bounty
                    </Button>
                  )}
                  
                  {bounty.assignee && (
                    <div className="text-sm text-muted-foreground">
                      Assigned to: {bounty.assignee}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <div className="space-y-4">
            {mockTasks.map((task) => (
              <Card key={task.id} className="bg-neura-dark/60 border-yellow-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}>
                        {task.priority}
                      </Badge>
                      <Badge variant={task.status === 'Completed' ? 'default' : 'outline'}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-neura-cyan to-yellow-400 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Due: {task.deadline}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="milestones" className="space-y-4">
          <div className="space-y-6">
            {mockMilestones.map((milestone) => (
              <Card key={milestone.id} className="bg-neura-dark/60 border-yellow-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      <CardDescription className="mt-1">{milestone.description}</CardDescription>
                    </div>
                    <Badge variant={milestone.status === 'In Progress' ? 'default' : 'outline'}>
                      {milestone.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Progress</div>
                      <div className="text-lg font-semibold">{milestone.progress}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Deadline</div>
                      <div className="font-medium">{milestone.deadline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Reward</div>
                      <div className="text-lg font-semibold text-green-400">{milestone.reward}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-neura-cyan to-yellow-400 h-3 rounded-full"
                        style={{ width: `${milestone.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="files" className="space-y-4">
          <Card className="bg-neura-dark/60 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-neura-cyan" />
                IPFS File Storage
              </CardTitle>
              <CardDescription>Decentralized document sharing and version control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <div>
                      <h4 className="font-medium">Project Whitepaper v2.1</h4>
                      <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Public</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-green-400" />
                    <div>
                      <h4 className="font-medium">Technical Specifications</h4>
                      <p className="text-sm text-muted-foreground">Last updated 5 days ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Token-Gated</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-purple-400" />
                    <div>
                      <h4 className="font-medium">Design Assets Package</h4>
                      <p className="text-sm text-muted-foreground">Last updated 1 week ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Contributors Only</Badge>
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Upload New Document
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
