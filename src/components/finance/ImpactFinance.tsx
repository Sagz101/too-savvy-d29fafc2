
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, Globe, ArrowRight } from "lucide-react";

type ImpactProject = {
  id: string;
  title: string;
  description: string;
  sdgGoals: string[];
  fundingTarget: number;
  fundingRaised: number;
  currency: string;
  image?: string;
  creator: string;
  escVerified: boolean;
  deadline: string;
};

type ImpactBond = {
  id: string;
  title: string;
  impact: string;
  returnRate: number;
  termMonths: number;
  minInvestment: number;
  currency: string;
  totalRaised: number;
  target: number;
  verified: boolean;
};

export const ImpactFinance: React.FC<{
  impactProjects: ImpactProject[];
  impactBonds: ImpactBond[];
}> = ({ impactProjects, impactBonds }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-neura-cyan" />
          SDG-Aligned Creator Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {impactProjects.map(project => (
            <Card key={project.id} className="bg-neura-dark/80 border-neura-purple/20 overflow-hidden">
              <div className="relative">
                {project.image && (
                  <div className="h-40 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {project.escVerified && (
                  <div className="absolute top-2 right-2 bg-neura-purple/80 text-white px-2 py-1 rounded-md text-xs flex items-center">
                    <ShieldCheck className="w-3 h-3 mr-1" /> ESG Verified
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription>By {project.creator}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-3">
                <p className="text-sm text-white/70 mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.sdgGoals.map((goal, i) => (
                    <Badge key={i} variant="outline" className="border-neura-purple/30 text-white">
                      {goal}
                    </Badge>
                  ))}
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{project.fundingRaised} {project.currency} raised</span>
                    <span>{Math.round((project.fundingRaised / project.fundingTarget) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(project.fundingRaised / project.fundingTarget) * 100} 
                    className="h-2 bg-neura-dark" 
                  />
                  <div className="mt-1 text-xs text-white/50 flex justify-between">
                    <span>Target: {project.fundingTarget} {project.currency}</span>
                    <span>Deadline: {project.deadline}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-neura-purple/20 pt-3">
                <Button 
                  className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                >
                  Fund This Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3 flex items-center">
          <ShieldCheck className="w-5 h-5 mr-2 text-neura-cyan" />
          Tokenized Impact Bonds
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {impactBonds.map(bond => (
            <Card key={bond.id} className="bg-neura-dark/80 border-neura-purple/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">{bond.title}</CardTitle>
                  {bond.verified && (
                    <Badge className="bg-neura-purple/80 text-white">
                      Verified
                    </Badge>
                  )}
                </div>
                <CardDescription>{bond.impact}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-white/50">Return Rate</div>
                    <div className="text-xl font-bold text-neura-cyan">{bond.returnRate}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Term</div>
                    <div className="text-xl font-bold">{bond.termMonths} months</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Min Investment</div>
                    <div className="text-lg font-bold">{bond.minInvestment} {bond.currency}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Progress</div>
                    <div className="text-lg font-bold">
                      {Math.round((bond.totalRaised / bond.target) * 100)}%
                    </div>
                  </div>
                </div>
                
                <Progress 
                  value={(bond.totalRaised / bond.target) * 100} 
                  className="h-2 bg-neura-dark mb-2" 
                />
                <div className="text-xs text-white/50 flex justify-between">
                  <span>Raised: {bond.totalRaised} {bond.currency}</span>
                  <span>Target: {bond.target} {bond.currency}</span>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-neura-purple/20 pt-3">
                <Button 
                  className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                >
                  Invest Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
