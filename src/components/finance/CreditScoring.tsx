
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Users, ShieldCheck } from "lucide-react";

type CreditScoreProps = {
  score: number;
  repaymentHistory: number;
  communityTrust: number;
  walletActivity: number;
  maxCredit: number;
  approvedProtocols: string[];
};

export const CreditScoring: React.FC<CreditScoreProps> = ({
  score,
  repaymentHistory,
  communityTrust,
  walletActivity,
  maxCredit,
  approvedProtocols
}) => {
  // Calculate credit score colors
  const getScoreColor = (score: number) => {
    if (score >= 700) return "text-green-500";
    if (score >= 500) return "text-yellow-500";
    return "text-red-500";
  };

  // Calculate credit score level
  const getScoreLevel = (score: number) => {
    if (score >= 700) return "Excellent";
    if (score >= 500) return "Good";
    if (score >= 300) return "Fair";
    return "Building";
  };

  return (
    <div className="space-y-6">
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-neura-cyan" /> 
              Creator Credit Score
            </CardTitle>
            <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}
            </div>
          </div>
          <CardDescription>
            {getScoreLevel(score)} - On-chain reputation and credit worthiness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Repayment History</span>
              <span>{repaymentHistory}%</span>
            </div>
            <Progress value={repaymentHistory} className="h-2 bg-neura-dark" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Community Trust</span>
              <span>{communityTrust}%</span>
            </div>
            <Progress value={communityTrust} className="h-2 bg-neura-dark" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Wallet Activity</span>
              <span>{walletActivity}%</span>
            </div>
            <Progress value={walletActivity} className="h-2 bg-neura-dark" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-neura-purple/20 pt-4">
          <div>
            <div className="text-sm text-white/50">Available Credit</div>
            <div className="text-xl font-bold">{maxCredit} USDC</div>
          </div>
          <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
            Apply for Credit <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-base flex items-center">
            <ShieldCheck className="w-5 h-5 mr-2 text-neura-cyan" /> 
            DeFi Protocol Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {approvedProtocols.map((protocol, index) => (
              <Card key={index} className="bg-neura-dark border-neura-purple/10 p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-neura-purple/20 mr-3 flex items-center justify-center">
                  {protocol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{protocol}</div>
                  <div className="text-xs text-neura-cyan">Approved</div>
                </div>
              </Card>
            ))}
            <Card className="bg-neura-dark border-neura-purple/10 p-4 flex items-center justify-center opacity-60 cursor-pointer hover:opacity-80">
              <div className="text-center">
                <div>More Protocols</div>
                <div className="text-xs text-white/50">Coming Soon</div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
