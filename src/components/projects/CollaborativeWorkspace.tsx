
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { FileText, MessageSquare, Calendar, Clock, Check, Key, Users, Gauge, GitBranch, FileCode } from "lucide-react";
import { BlockchainEmailPreview } from "@/components/ui/blockchain-email-preview";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CollaborativeWorkspaceProps {
  projectId: string;
}

// Sample data
const MOCK_TASKS = [
  { id: 1, title: "Create project roadmap", assignee: "0x7A...3F", status: "In Progress", deadline: "2025-05-15" },
  { id: 2, title: "Design token economics", assignee: "0x8B...2E", status: "To Do", deadline: "2025-05-20" },
  { id: 3, title: "Develop smart contracts", assignee: "0x7A...3F", status: "To Do", deadline: "2025-06-01" },
  { id: 4, title: "Community outreach plan", assignee: "0x9C...5D", status: "Completed", deadline: "2025-05-01" },
];

const MOCK_DOCUMENTS = [
  { id: 1, name: "Project Whitepaper.md", ipfsHash: "Qm...7a", lastModified: "2025-05-01", author: "0x7A...3F" },
  { id: 2, name: "Technical Architecture.md", ipfsHash: "Qm...3c", lastModified: "2025-05-02", author: "0x8B...2E" },
  { id: 3, name: "Token Distribution.md", ipfsHash: "Qm...9f", lastModified: "2025-05-03", author: "0x7A...3F" },
];

const MOCK_MESSAGES = [
  { id: 1, sender: "0x7A...3F", content: "I've completed the initial whitepaper draft.", timestamp: "2025-05-01 14:23" },
  { id: 2, sender: "0x8B...2E", content: "Great! I'll review it later today.", timestamp: "2025-05-01 15:01" },
  { id: 3, sender: "0x9C...5D", content: "Let's discuss the token economics in our next meeting.", timestamp: "2025-05-02 09:15" },
];

const MOCK_TEAM = [
  { id: 1, address: "0x7A...3F", role: "Project Lead", joinedOn: "2025-05-01", reputation: 95 },
  { id: 2, address: "0x8B...2E", role: "Technical Architect", joinedOn: "2025-05-01", reputation: 88 },
  { id: 3, address: "0x9C...5D", role: "Community Manager", joinedOn: "2025-05-02", reputation: 92 },
];

const MOCK_METRICS = [
  { name: "Task Completion Rate", value: "85%", change: "+5%", trend: "up" },
  { name: "Document Updates", value: "24", change: "+3", trend: "up" },
  { name: "Contributor Activity", value: "Daily", change: "Stable", trend: "neutral" },
  { name: "Milestone Progress", value: "60%", change: "+12%", trend: "up" },
];

const MOCK_CODE_REPOS = [
  { id: 1, name: "project-core", lastCommit: "2025-05-05", branches: 3, contributors: 2 },
  { id: 2, name: "smart-contracts", lastCommit: "2025-05-04", branches: 2, contributors: 1 },
  { id: 3, name: "frontend-dapp", lastCommit: "2025-05-03", branches: 4, contributors: 3 },
];

export const CollaborativeWorkspace: React.FC<CollaborativeWorkspaceProps> = ({ projectId }) => {
  const [newTask, setNewTask] = useState("");
  const [newDocument, setNewDocument] = useState<File | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [newMemberAddress, setNewMemberAddress] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("Contributor");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    
    toast.loading("Recording task on-chain...");
    
    // Simulate blockchain delay
    setTimeout(() => {
      toast.success("Task added successfully!", {
        description: "Task has been recorded on the blockchain."
      });
      setNewTask("");
    }, 1500);
  };

  const handleUploadDocument = () => {
    if (!newDocument) return;
    
    toast.loading(`Uploading ${newDocument.name} to IPFS...`);
    
    // Simulate IPFS upload delay
    setTimeout(() => {
      toast.success("Document uploaded to IPFS!", {
        description: `Document hash: Qm...${Math.random().toString(36).substring(7)}`
      });
      setNewDocument(null);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    toast.loading("Encrypting and sending message...");
    
    // Simulate encryption and sending
    setTimeout(() => {
      toast.success("Message sent!", {
        description: "Encrypted and stored on decentralized network."
      });
      setNewMessage("");
    }, 1000);
  };

  const handleAddMember = () => {
    if (!newMemberAddress.trim()) return;
    
    toast.loading("Adding member to DAO...");
    
    // Simulate blockchain delay
    setTimeout(() => {
      toast.success("Team member added!", {
        description: "New contributor added to the project DAO."
      });
      setNewMemberAddress("");
      setNewMemberRole("Contributor");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tasks" className="space-y-4">
          <Card className="bg-neura-dark/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-neura-cyan" />
                On-Chain Task Management
              </CardTitle>
              <CardDescription>
                All tasks are recorded on the blockchain for transparency and accountability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-6">
                <Input 
                  placeholder="Add a new task..." 
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="bg-neura-dark/40 border-yellow-500/20"
                />
                <Button 
                  onClick={handleAddTask}
                  className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium"
                >
                  Add Task
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Deadline</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_TASKS.map((task) => (
                    <TableRow key={task.id} className="hover:bg-neura-purple/10">
                      <TableCell>{task.title}</TableCell>
                      <TableCell className="font-mono">{task.assignee}</TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            task.status === "Completed" 
                              ? "bg-green-700/30 text-green-300 hover:bg-green-700/40" 
                              : task.status === "In Progress" 
                                ? "bg-yellow-700/30 text-yellow-300 hover:bg-yellow-700/40"
                                : "bg-blue-700/30 text-blue-300 hover:bg-blue-700/40"
                          }
                        >
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 opacity-70" />
                        {task.deadline}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-4">
          <Card className="bg-neura-dark/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-neura-cyan" />
                IPFS Document Management
              </CardTitle>
              <CardDescription>
                Decentralized document storage with cryptographic version control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-6">
                <Input 
                  type="file"
                  onChange={(e) => setNewDocument(e.target.files?.[0] || null)}
                  className="bg-neura-dark/40 border-yellow-500/20"
                />
                <Button 
                  onClick={handleUploadDocument}
                  disabled={!newDocument}
                  className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium whitespace-nowrap"
                >
                  Upload to IPFS
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>IPFS Hash</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Author</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_DOCUMENTS.map((doc) => (
                    <TableRow key={doc.id} className="hover:bg-neura-purple/10">
                      <TableCell className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-neura-cyan" />
                        {doc.name}
                      </TableCell>
                      <TableCell className="font-mono text-xs">{doc.ipfsHash}</TableCell>
                      <TableCell className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 opacity-70" />
                        {doc.lastModified}
                      </TableCell>
                      <TableCell className="font-mono">{doc.author}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="bg-neura-dark/50 border-yellow-500/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-neura-cyan" />
                    Encrypted Team Communication
                  </CardTitle>
                  <CardDescription>
                    End-to-end encrypted, decentralized messaging
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] overflow-y-auto">
                  <div className="space-y-4">
                    {MOCK_MESSAGES.map((message) => (
                      <div key={message.id} className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-neura-cyan">{message.sender}</span>
                          <span className="text-xs text-white/50">{message.timestamp}</span>
                        </div>
                        <div className="bg-neura-dark/80 p-3 rounded-lg border border-yellow-500/10">
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full space-x-2">
                    <Textarea 
                      placeholder="Type a secure message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="bg-neura-dark/40 border-yellow-500/20 min-h-[60px]"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium self-end"
                    >
                      Send
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <BlockchainEmailPreview />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-4">
          <Card className="bg-neura-dark/50 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-neura-cyan" />
                Project DAO Members
              </CardTitle>
              <CardDescription>
                Decentralized team management with on-chain governance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Input 
                  placeholder="Wallet address or ENS" 
                  value={newMemberAddress}
                  onChange={(e) => setNewMemberAddress(e.target.value)}
                  className="bg-neura-dark/40 border-yellow-500/20"
                />
                <Select value={newMemberRole} onValueChange={setNewMemberRole}>
                  <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Contributor">Contributor</SelectItem>
                    <SelectItem value="Developer">Developer</SelectItem>
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Reviewer">Reviewer</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleAddMember}
                  className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-medium"
                >
                  Add to DAO
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Reputation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_TEAM.map((member) => (
                    <TableRow key={member.id} className="hover:bg-neura-purple/10">
                      <TableCell className="font-mono">{member.address}</TableCell>
                      <TableCell>
                        <Badge className="bg-neura-purple/30 text-neura-cyan hover:bg-neura-purple/40">
                          {member.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{member.joinedOn}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className={
                            member.reputation > 90 
                              ? "text-green-400" 
                              : member.reputation > 80 
                                ? "text-yellow-400"
                                : "text-red-400"
                          }>
                            {member.reputation}/100
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gauge className="mr-2 h-5 w-5 text-neura-cyan" />
                  Project Performance
                </CardTitle>
                <CardDescription>
                  Real-time metrics from on-chain activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {MOCK_METRICS.map((metric, i) => (
                    <div key={i} className="bg-neura-dark/30 rounded-lg p-4 border border-yellow-500/10">
                      <div className="text-sm text-white/70">{metric.name}</div>
                      <div className="text-xl font-semibold mt-1">{metric.value}</div>
                      <div className={`text-xs mt-1 flex items-center ${
                        metric.trend === 'up' 
                          ? 'text-green-400' 
                          : metric.trend === 'down' 
                            ? 'text-red-400' 
                            : 'text-yellow-400'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCode className="mr-2 h-5 w-5 text-neura-cyan" />
                  Decentralized Repositories
                </CardTitle>
                <CardDescription>
                  Code repositories stored on decentralized storage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Repository</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead>Branches</TableHead>
                      <TableHead>Contributors</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_CODE_REPOS.map((repo) => (
                      <TableRow key={repo.id} className="hover:bg-neura-purple/10">
                        <TableCell className="flex items-center">
                          <GitBranch className="h-4 w-4 mr-2 text-neura-cyan" />
                          {repo.name}
                        </TableCell>
                        <TableCell>{repo.lastCommit}</TableCell>
                        <TableCell>{repo.branches}</TableCell>
                        <TableCell>{repo.contributors}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
