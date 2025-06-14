
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Star, Award, Users, Search, TrendingUp, GitBranch } from "lucide-react";

export const SocialReputation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const myProfile = {
    name: 'Alex Thompson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    reputation: 92,
    level: 'Expert Innovator',
    totalProjects: 8,
    totalContributions: 234,
    endorsements: 47,
    followers: 1243
  };

  const mockProfiles = [
    {
      id: 'user-1',
      name: 'Sarah Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      reputation: 96,
      level: 'Master Innovator',
      specialties: ['AI/ML', 'Blockchain'],
      projects: ['Quantum AI Research', 'DeFi Protocol'],
      endorsements: 89,
      followers: 2341
    },
    {
      id: 'user-2',
      name: 'Marcus Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus',
      reputation: 88,
      level: 'Expert Innovator',
      specialties: ['Climate Tech', 'IoT'],
      projects: ['Smart Energy Grid', 'Carbon Tracking'],
      endorsements: 67,
      followers: 1876
    },
    {
      id: 'user-3',
      name: 'Priya Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      reputation: 91,
      level: 'Expert Innovator',
      specialties: ['Biotech', 'Healthcare'],
      projects: ['Gene Therapy Research', 'Medical AI'],
      endorsements: 73,
      followers: 1654
    }
  ];

  const myBadges = [
    { name: 'Pioneer', description: 'First project founder', rarity: 'Legendary', color: 'gold' },
    { name: 'Collaborator', description: '50+ contributions', rarity: 'Epic', color: 'purple' },
    { name: 'Mentor', description: 'Guided 10+ projects', rarity: 'Rare', color: 'blue' },
    { name: 'Innovator', description: 'Published breakthrough research', rarity: 'Epic', color: 'green' }
  ];

  const contributionHistory = [
    {
      project: 'AI Climate Solutions',
      type: 'Code Contribution',
      impact: 'High',
      date: '2 days ago',
      endorsements: 12
    },
    {
      project: 'Quantum Computing Research',
      type: 'Research Paper',
      impact: 'Very High',
      date: '1 week ago',
      endorsements: 28
    },
    {
      project: 'Decentralized Energy Grid',
      type: 'Technical Review',
      impact: 'Medium',
      date: '2 weeks ago',
      endorsements: 8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-neura-cyan" />
              My Reputation Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={myProfile.avatar} alt={myProfile.name} />
                <AvatarFallback>{myProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{myProfile.name}</h3>
                <p className="text-muted-foreground">{myProfile.level}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-2xl font-bold text-neura-cyan">{myProfile.reputation}</div>
                  <div className="text-sm text-muted-foreground">Reputation Score</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-neura-dark/40 rounded-lg">
                <div className="text-2xl font-bold">{myProfile.totalProjects}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-3 bg-neura-dark/40 rounded-lg">
                <div className="text-2xl font-bold">{myProfile.totalContributions}</div>
                <div className="text-sm text-muted-foreground">Contributions</div>
              </div>
              <div className="text-center p-3 bg-neura-dark/40 rounded-lg">
                <div className="text-2xl font-bold">{myProfile.endorsements}</div>
                <div className="text-sm text-muted-foreground">Endorsements</div>
              </div>
              <div className="text-center p-3 bg-neura-dark/40 rounded-lg">
                <div className="text-2xl font-bold">{myProfile.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Achievement Badges</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {myBadges.map((badge, index) => (
                  <div key={index} className="text-center p-3 bg-neura-dark/40 rounded-lg">
                    <Award className={`w-8 h-8 mx-auto mb-2 text-${badge.color}-400`} />
                    <div className="font-medium text-sm">{badge.name}</div>
                    <div className="text-xs text-muted-foreground">{badge.rarity}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contributionHistory.map((activity, index) => (
              <div key={index} className="p-3 bg-neura-dark/40 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{activity.type}</h4>
                  <Badge variant={activity.impact === 'Very High' ? 'default' : activity.impact === 'High' ? 'secondary' : 'outline'}>
                    {activity.impact}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{activity.project}</p>
                <div className="flex items-center justify-between text-xs">
                  <span>{activity.date}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {activity.endorsements}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discover">Discover Innovators</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="network">My Network</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discover" className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neura-dark/40 border-yellow-500/20"
              />
            </div>
            <Button variant="outline">
              Filter by Category
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProfiles.map((profile) => (
              <Card key={profile.id} className="bg-neura-dark/60 border-yellow-500/20 hover:border-neura-cyan/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{profile.name}</CardTitle>
                      <CardDescription>{profile.level}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reputation</span>
                    <div className="flex items-center gap-2">
                      <Progress value={profile.reputation} className="w-16 h-2" />
                      <span className="font-bold text-neura-cyan">{profile.reputation}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {profile.specialties.map((specialty, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Notable Projects</h4>
                    <div className="space-y-1">
                      {profile.projects.map((project, i) => (
                        <div key={i} className="text-xs text-muted-foreground">• {project}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {profile.endorsements} endorsements
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {profile.followers} followers
                    </span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="space-y-4">
          <Card className="bg-neura-dark/60 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-neura-cyan" />
                Global Reputation Leaderboard
              </CardTitle>
              <CardDescription>Top innovators ranked by reputation and contributions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[...mockProfiles, myProfile].sort((a, b) => b.reputation - a.reputation).map((profile, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-neura-dark/40 rounded-lg">
                  <div className="text-2xl font-bold text-neura-cyan">#{index + 1}</div>
                  <Avatar>
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground">{profile.level}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-neura-cyan">{profile.reputation}</div>
                    <div className="text-sm text-muted-foreground">reputation</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="network" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>My Connections</CardTitle>
                <CardDescription>Innovators in your network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockProfiles.slice(0, 2).map((profile) => (
                  <div key={profile.id} className="flex items-center gap-3 p-3 bg-neura-dark/40 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium">{profile.name}</h4>
                      <p className="text-sm text-muted-foreground">{profile.level}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Message
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Collaboration Invites</CardTitle>
                <CardDescription>Recent project invitations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg">
                  <h4 className="font-medium text-blue-400">AI Ethics Research</h4>
                  <p className="text-sm text-muted-foreground">Invited by Sarah Chen</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Accept</Button>
                    <Button size="sm" variant="outline">Decline</Button>
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg">
                  <h4 className="font-medium text-green-400">Climate Data Platform</h4>
                  <p className="text-sm text-muted-foreground">Invited by Marcus Rodriguez</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Accept</Button>
                    <Button size="sm" variant="outline">Decline</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
