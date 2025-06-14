import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Webhook, 
  Plus, 
  Settings, 
  Trash2, 
  Edit,
  Globe,
  MessageSquare,
  Zap
} from 'lucide-react';

interface CustomChannel {
  id: string;
  name: string;
  type: 'webhook' | 'api' | 'zapier';
  endpoint: string;
  method: string;
  headers: Record<string, string>;
  payload: string;
  enabled: boolean;
  lastUsed?: string;
  successRate: number;
}

export const CustomChannels: React.FC = () => {
  const [channels, setChannels] = useState<CustomChannel[]>([
    {
      id: '1',
      name: 'Discord Community',
      type: 'webhook',
      endpoint: 'https://discord.com/api/webhooks/...',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      payload: '{"content": "{{content}}", "username": "NeuraSocial"}',
      enabled: true,
      lastUsed: '2024-06-10',
      successRate: 98
    },
    {
      id: '2',
      name: 'Slack Workspace',
      type: 'webhook',
      endpoint: 'https://hooks.slack.com/services/...',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      payload: '{"text": "{{content}}", "channel": "#general"}',
      enabled: true,
      lastUsed: '2024-06-09',
      successRate: 95
    },
    {
      id: '3',
      name: 'Custom API',
      type: 'api',
      endpoint: 'https://api.myservice.com/posts',
      method: 'POST',
      headers: { 'Authorization': 'Bearer {{token}}', 'Content-Type': 'application/json' },
      payload: '{"title": "{{title}}", "body": "{{content}}", "author": "{{wallet}}"}',
      enabled: false,
      successRate: 87
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingChannel, setEditingChannel] = useState<CustomChannel | null>(null);
  const [newChannel, setNewChannel] = useState<Partial<CustomChannel>>({
    name: '',
    type: 'webhook',
    endpoint: '',
    method: 'POST',
    headers: {},
    payload: '',
    enabled: true
  });

  const templates = [
    {
      name: 'Discord Webhook',
      type: 'webhook' as const,
      endpoint: 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      payload: JSON.stringify({
        content: '{{content}}',
        username: 'NeuraSocial Bot',
        embeds: [{
          title: '{{title}}',
          description: '{{content}}',
          color: 5814783,
          footer: { text: 'Shared via NeuraSocial' }
        }]
      }, null, 2)
    },
    {
      name: 'Slack Webhook',
      type: 'webhook' as const,
      endpoint: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      payload: JSON.stringify({
        text: '{{content}}',
        channel: '#general',
        username: 'NeuraSocial',
        icon_emoji: ':rocket:'
      }, null, 2)
    },
    {
      name: 'Zapier Webhook',
      type: 'zapier' as const,
      endpoint: 'https://hooks.zapier.com/hooks/catch/YOUR_HOOK_ID',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      payload: JSON.stringify({
        title: '{{title}}',
        content: '{{content}}',
        author: '{{wallet}}',
        timestamp: '{{timestamp}}'
      }, null, 2)
    }
  ];

  const toggleChannel = (id: string) => {
    setChannels(channels.map(channel => 
      channel.id === id 
        ? { ...channel, enabled: !channel.enabled }
        : channel
    ));
  };

  const deleteChannel = (id: string) => {
    setChannels(channels.filter(channel => channel.id !== id));
  };

  const applyTemplate = (template: typeof templates[0]) => {
    setNewChannel({
      ...newChannel,
      ...template,
      name: template.name
    });
  };

  const saveChannel = () => {
    if (editingChannel) {
      setChannels(channels.map(channel => 
        channel.id === editingChannel.id 
          ? { ...editingChannel, ...newChannel }
          : channel
      ));
      setEditingChannel(null);
    } else {
      const channel: CustomChannel = {
        id: Date.now().toString(),
        ...newChannel as CustomChannel,
        successRate: 100
      };
      setChannels([...channels, channel]);
    }
    
    setNewChannel({
      name: '',
      type: 'webhook',
      endpoint: '',
      method: 'POST',
      headers: {},
      payload: '',
      enabled: true
    });
    setIsCreating(false);
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'webhook': return <Webhook className="w-4 h-4" />;
      case 'api': return <Globe className="w-4 h-4" />;
      case 'zapier': return <Zap className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Custom Channels</h2>
          <p className="text-muted-foreground">
            Connect to custom webhooks, APIs, and automation tools
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Channel
        </Button>
      </div>

      {isCreating || editingChannel ? (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingChannel ? 'Edit Channel' : 'Create New Channel'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Channel Name</label>
                <Input
                  placeholder="My Custom Channel"
                  value={newChannel.name}
                  onChange={(e) => setNewChannel(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newChannel.type}
                  onChange={(e) => setNewChannel(prev => ({ ...prev, type: e.target.value as any }))}
                >
                  <option value="webhook">Webhook</option>
                  <option value="api">REST API</option>
                  <option value="zapier">Zapier</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Endpoint URL</label>
              <Input
                placeholder="https://your-endpoint.com/webhook"
                value={newChannel.endpoint}
                onChange={(e) => setNewChannel(prev => ({ ...prev, endpoint: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">HTTP Method</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newChannel.method}
                  onChange={(e) => setNewChannel(prev => ({ ...prev, method: e.target.value }))}
                >
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="PATCH">PATCH</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Headers (JSON)</label>
              <Textarea
                placeholder='{"Content-Type": "application/json", "Authorization": "Bearer token"}'
                rows={3}
                value={JSON.stringify(newChannel.headers || {}, null, 2)}
                onChange={(e) => {
                  try {
                    const headers = JSON.parse(e.target.value);
                    setNewChannel(prev => ({ ...prev, headers }));
                  } catch (error) {
                    // Invalid JSON, keep the text for editing
                  }
                }}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Payload Template</label>
              <Textarea
                placeholder='{"content": "{{content}}", "title": "{{title}}"}'
                rows={6}
                value={newChannel.payload}
                onChange={(e) => setNewChannel(prev => ({ ...prev, payload: e.target.value }))}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Use variables: {"{{content}}"}, {"{{title}}"}, {"{{wallet}}"}, {"{{timestamp}}"}
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-3">Quick Templates</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {templates.map((template, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => applyTemplate(template)}
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={saveChannel}>
                {editingChannel ? 'Update Channel' : 'Create Channel'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsCreating(false);
                  setEditingChannel(null);
                  setNewChannel({
                    name: '',
                    type: 'webhook',
                    endpoint: '',
                    method: 'POST',
                    headers: {},
                    payload: '',
                    enabled: true
                  });
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid grid-cols-1 gap-4">
        {channels.map((channel) => (
          <Card key={channel.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {getChannelIcon(channel.type)}
                  </div>
                  <div>
                    <h3 className="font-medium">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground">{channel.endpoint}</p>
                  </div>
                  <Badge variant="outline">{channel.type}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingChannel(channel);
                      setNewChannel(channel);
                      setIsCreating(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteChannel(channel.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Switch 
                    checked={channel.enabled}
                    onCheckedChange={() => toggleChannel(channel.id)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-muted-foreground">Method</p>
                  <p className="font-medium">{channel.method}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Success Rate</p>
                  <p className="font-medium text-green-600">{channel.successRate}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Used</p>
                  <p className="font-medium">{channel.lastUsed || 'Never'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
