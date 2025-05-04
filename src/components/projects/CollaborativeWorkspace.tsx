
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { FileText, MessageSquare, Calendar, Clock, Check, Key } from "lucide-react";
import { BlockchainEmailPreview } from "@/components/ui/blockchain-email-preview";

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

export const CollaborativeWorkspace: React.FC<CollaborativeWorkspaceProps> = ({ projectId }) => {
  const [newTask, setNewTask] = useState("");
  const [newDocument, setNewDocument] = useState<File | null>(null);
  const [newMessage, setNewMessage] = useState("");

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

  return (
    <div className="space-y-6">
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
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
      </Tabs>
    </div>
  );
};
