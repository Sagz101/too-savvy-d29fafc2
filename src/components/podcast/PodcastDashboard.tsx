
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Users, TrendingUp, Calendar, Plus, MoreHorizontal } from 'lucide-react';

export const PodcastDashboard: React.FC = () => {
  const shows = [
    {
      id: 1,
      title: "Tech Talks Weekly",
      episodes: 45,
      subscribers: 12500,
      status: "active",
      lastEpisode: "2 days ago",
      growth: "+12%"
    },
    {
      id: 2,
      title: "Crypto Conversations",
      episodes: 23,
      subscribers: 8300,
      status: "draft",
      lastEpisode: "1 week ago",
      growth: "+8%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-foreground">Your Shows</h2>
        <Button className="grok-button-primary">
          <Plus size={16} className="mr-2" />
          New Show
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Listens</p>
                <p className="text-2xl font-bold text-foreground">125.4K</p>
              </div>
              <Play className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Subscribers</p>
                <p className="text-2xl font-bold text-foreground">20.8K</p>
              </div>
              <Users className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Token Revenue</p>
                <p className="text-2xl font-bold text-foreground">Ξ 12.4</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Episodes</p>
                <p className="text-2xl font-bold text-foreground">68</p>
              </div>
              <Calendar className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shows List */}
      <div className="space-y-4">
        {shows.map((show) => (
          <Card key={show.id} className="grok-card grok-card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{show.title}</h3>
                    <Badge variant={show.status === 'active' ? 'default' : 'secondary'}>
                      {show.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{show.episodes}</span> episodes
                    </div>
                    <div>
                      <span className="font-medium">{show.subscribers.toLocaleString()}</span> subscribers
                    </div>
                    <div>
                      Last episode: <span className="font-medium">{show.lastEpisode}</span>
                    </div>
                    <div className="text-emerald-400">
                      Growth: <span className="font-medium">{show.growth}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Monthly Goal</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-muted-foreground">New episode published:</span>
              <span className="font-medium text-foreground">"The Future of DeFi"</span>
              <span className="text-muted-foreground ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-muted-foreground">Token-gated content unlocked by:</span>
              <span className="font-medium text-foreground">15 new listeners</span>
              <span className="text-muted-foreground ml-auto">5 hours ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-muted-foreground">Subscription milestone:</span>
              <span className="font-medium text-foreground">20K subscribers</span>
              <span className="text-muted-foreground ml-auto">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
