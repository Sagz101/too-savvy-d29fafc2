
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Search, Calendar, Users, ArrowRight, FileText } from "lucide-react";

interface ProjectsListProps {
  onSelectProject: (projectId: string) => void;
}

// Sample project data
const MOCK_PROJECTS = [
  { 
    id: "project-1652534985", 
    name: "Neura DeFi Analytics", 
    description: "Decentralized finance analytics and visualization platform",
    members: 4,
    created: "2025-04-15",
    status: "Active",
    type: "Team",
    blockchain: "Ethereum"
  },
  { 
    id: "project-1652532345", 
    name: "Web3 Social Network", 
    description: "Decentralized social media platform with token incentives",
    members: 6,
    created: "2025-04-01",
    status: "Active",
    type: "DAO",
    blockchain: "Polygon"
  },
  { 
    id: "project-1652539876", 
    name: "DID Identity Protocol", 
    description: "Self-sovereign identity solution for Web3 applications",
    members: 3,
    created: "2025-03-22",
    status: "Funding",
    type: "Open Source",
    blockchain: "Optimism"
  },
];

export const ProjectsList: React.FC<ProjectsListProps> = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  
  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || project.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <Input 
            placeholder="Search projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-neura-dark/40 border-yellow-500/20 pl-10"
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-neura-dark border-yellow-500/20">
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="funding">Funding</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card key={project.id} className="bg-neura-dark/60 border-yellow-500/20 hover:border-neura-cyan/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <p className="text-sm text-white/70 mt-1">{project.description}</p>
                  </div>
                  <Badge 
                    className={
                      project.status === "Active" 
                        ? "bg-green-700/30 text-green-300" 
                        : project.status === "Funding" 
                          ? "bg-yellow-700/30 text-yellow-300"
                          : "bg-blue-700/30 text-blue-300"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-neura-cyan/70" />
                    <span>{project.members} Members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-neura-cyan/70" />
                    <span>{project.created}</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-neura-cyan/70" />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-neura-cyan">{project.blockchain}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="ml-auto bg-gradient-to-r from-neura-cyan/90 to-yellow-400/90 text-black"
                  onClick={() => {
                    onSelectProject(project.id);
                    toast.success(`Project ${project.name} selected`, {
                      description: "You can now access the workspace and funding tabs."
                    });
                  }}
                >
                  Open Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center p-12 bg-neura-dark/30 rounded-lg border border-yellow-500/10">
            <h3 className="text-lg font-medium">No projects found</h3>
            <p className="text-white/70 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};
