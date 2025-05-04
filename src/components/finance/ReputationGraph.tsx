
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { UsersRound, ArrowRight, ShieldCheck, CircleCheck } from "lucide-react";

type Endorsement = {
  user: string;
  relationship: string;
  avatar?: string;
};

type Collaboration = {
  project: string;
  date: string;
  collaborators: number;
  status: 'completed' | 'ongoing' | 'upcoming';
};

type ReputationStats = {
  reputation: number;
  completionRate: number;
  qualityScore: number;
  responsiveness: number;
  endorsements: Endorsement[];
  collaborations: Collaboration[];
};

export const ReputationGraph: React.FC<{ stats: ReputationStats }> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <UsersRound className="w-5 h-5 mr-2 text-neura-cyan" /> 
              Creator Reputation Graph
            </CardTitle>
            <div className="text-2xl font-bold">
              {stats.reputation}/100
            </div>
          </div>
          <CardDescription>
            Your Web3 reputation powers discovery and credit opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Completion Rate</span>
              <span>{stats.completionRate}%</span>
            </div>
            <Progress value={stats.completionRate} className="h-2 bg-neura-dark" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Quality Score</span>
              <span>{stats.qualityScore}%</span>
            </div>
            <Progress value={stats.qualityScore} className="h-2 bg-neura-dark" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Responsiveness</span>
              <span>{stats.responsiveness}%</span>
            </div>
            <Progress value={stats.responsiveness} className="h-2 bg-neura-dark" />
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardHeader>
            <CardTitle className="text-base">Recent Endorsements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.endorsements.map((endorsement, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-3">
                    {endorsement.avatar ? (
                      <img src={endorsement.avatar} alt={endorsement.user} className="w-full h-full rounded-full" />
                    ) : (
                      endorsement.user.charAt(0)
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{endorsement.user}</div>
                    <div className="text-xs text-white/50">{endorsement.relationship}</div>
                  </div>
                  <div className="ml-auto">
                    <CircleCheck className="w-5 h-5 text-neura-cyan" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-neura-purple/20 pt-4">
            <Button variant="ghost" size="sm" className="text-neura-cyan w-full">
              View All Endorsements
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-neura-dark/80 border-neura-purple/20">
          <CardHeader>
            <CardTitle className="text-base">Recent Collaborations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.collaborations.map((collab, i) => (
                <div key={i} className="p-3 border border-neura-purple/10 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{collab.project}</div>
                    <div className={`px-2 py-0.5 rounded-full text-xs ${
                      collab.status === 'completed' ? 'bg-green-500/20 text-green-500' : 
                      collab.status === 'ongoing' ? 'bg-blue-500/20 text-blue-500' : 
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {collab.status}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">{collab.date}</span>
                    <span className="flex items-center">
                      <UsersRound className="w-3 h-3 mr-1" />
                      {collab.collaborators} collaborators
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-neura-purple/20 pt-4">
            <Button variant="ghost" size="sm" className="text-neura-cyan w-full">
              View All Collaborations
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
