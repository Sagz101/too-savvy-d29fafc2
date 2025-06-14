
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Settings } from 'lucide-react';
import { toast } from 'sonner';

interface ScheduledStream {
  id: string;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  tier: 'standard' | 'vip' | 'backstage';
  maxViewers?: number;
  status: 'scheduled' | 'live' | 'ended';
}

export const StreamScheduler: React.FC = () => {
  const [streams, setStreams] = useState<ScheduledStream[]>([
    {
      id: '1',
      name: 'Weekly Tech Talk',
      description: 'Discussion about latest Web3 developments',
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endTime: new Date(Date.now() + 25 * 60 * 60 * 1000),
      tier: 'standard',
      maxViewers: 100,
      status: 'scheduled'
    },
    {
      id: '2',
      name: 'VIP Product Demo',
      description: 'Exclusive preview of new features',
      startTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // Day after tomorrow
      endTime: new Date(Date.now() + 49 * 60 * 60 * 1000),
      tier: 'vip',
      maxViewers: 50,
      status: 'scheduled'
    }
  ]);

  const [newStream, setNewStream] = useState({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    tier: 'standard' as const,
    maxViewers: 100
  });

  const [countdowns, setCountdowns] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdowns: { [key: string]: string } = {};
      
      streams.forEach(stream => {
        const now = new Date().getTime();
        const streamTime = stream.startTime.getTime();
        const difference = streamTime - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newCountdowns[stream.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          newCountdowns[stream.id] = 'LIVE NOW';
        }
      });

      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, [streams]);

  const createScheduledStream = () => {
    if (!newStream.name || !newStream.startTime || !newStream.endTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    const stream: ScheduledStream = {
      id: Date.now().toString(),
      ...newStream,
      startTime: new Date(newStream.startTime),
      endTime: new Date(newStream.endTime),
      status: 'scheduled'
    };

    setStreams([...streams, stream]);
    setNewStream({
      name: '',
      description: '',
      startTime: '',
      endTime: '',
      tier: 'standard',
      maxViewers: 100
    });

    toast.success('Stream scheduled successfully');
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'vip': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'backstage': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default: return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule New Stream
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="streamName">Stream Name</Label>
              <Input
                id="streamName"
                value={newStream.name}
                onChange={(e) => setNewStream({ ...newStream, name: e.target.value })}
                placeholder="Enter stream name"
                className="grok-input"
              />
            </div>
            <div>
              <Label htmlFor="tier">Access Tier</Label>
              <Select value={newStream.tier} onValueChange={(value: any) => setNewStream({ ...newStream, tier: value })}>
                <SelectTrigger className="grok-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="grok-dropdown">
                  <SelectItem value="standard">Standard (0.02 ETH)</SelectItem>
                  <SelectItem value="vip">VIP (0.1 ETH)</SelectItem>
                  <SelectItem value="backstage">Backstage (0.05 ETH)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={newStream.description}
              onChange={(e) => setNewStream({ ...newStream, description: e.target.value })}
              placeholder="Stream description"
              className="grok-input"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="datetime-local"
                value={newStream.startTime}
                onChange={(e) => setNewStream({ ...newStream, startTime: e.target.value })}
                className="grok-input"
              />
            </div>
            <div>
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="datetime-local"
                value={newStream.endTime}
                onChange={(e) => setNewStream({ ...newStream, endTime: e.target.value })}
                className="grok-input"
              />
            </div>
            <div>
              <Label htmlFor="maxViewers">Max Viewers</Label>
              <Input
                id="maxViewers"
                type="number"
                value={newStream.maxViewers}
                onChange={(e) => setNewStream({ ...newStream, maxViewers: parseInt(e.target.value) })}
                className="grok-input"
              />
            </div>
          </div>

          <Button onClick={createScheduledStream} className="grok-button-primary">
            Schedule Stream
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Scheduled Streams</h3>
        {streams.map((stream) => (
          <Card key={stream.id} className="grok-card grok-card-hover">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{stream.name}</h4>
                  <p className="text-sm text-muted-foreground">{stream.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={stream.status === 'live' ? 'default' : 'secondary'}>
                    {stream.status.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={`text-white ${getTierColor(stream.tier)}`}>
                    {stream.tier.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {stream.startTime.toLocaleDateString()} at {stream.startTime.toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Max {stream.maxViewers} viewers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Duration: {Math.round((stream.endTime.getTime() - stream.startTime.getTime()) / (1000 * 60))} mins
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">
                    {countdowns[stream.id] || 'Calculating...'}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                {stream.status === 'scheduled' && (
                  <Button size="sm" className="grok-button-primary">
                    Go Live Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
