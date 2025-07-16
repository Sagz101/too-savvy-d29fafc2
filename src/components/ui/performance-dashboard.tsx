import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Progress } from './progress';
import { Badge } from './badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Zap, Clock, Shield, Leaf, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  description: string;
  improvement?: string;
}

interface SecurityAudit {
  component: string;
  status: 'passed' | 'warning' | 'failed';
  score: number;
  lastAudit: string;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: 'Page Load Speed',
      value: 92,
      status: 'excellent',
      description: 'Average page load time under 2 seconds',
      improvement: 'Optimized with lazy loading and CDN'
    },
    {
      name: 'Web3 Integration',
      value: 88,
      status: 'excellent',
      description: 'Wallet connections optimized for speed',
      improvement: 'Cached provider data reduces connection time'
    },
    {
      name: 'Mobile Performance',
      value: 85,
      status: 'good',
      description: 'Touch-optimized with responsive design',
      improvement: 'Consider implementing Progressive Web App features'
    },
    {
      name: 'Accessibility Score',
      value: 94,
      status: 'excellent',
      description: 'WCAG 2.1 AA compliant',
      improvement: 'High contrast mode and screen reader support'
    },
    {
      name: 'SEO Score',
      value: 78,
      status: 'good',
      description: 'Meta tags and structured data optimized',
      improvement: 'Add more schema.org markup for Web3 elements'
    }
  ]);

  const [securityAudits] = useState<SecurityAudit[]>([
    {
      component: 'Smart Contracts',
      status: 'passed',
      score: 96,
      lastAudit: '2024-01-15'
    },
    {
      component: 'Wallet Integration',
      status: 'passed',
      score: 94,
      lastAudit: '2024-01-10'
    },
    {
      component: 'API Security',
      status: 'passed',
      score: 92,
      lastAudit: '2024-01-12'
    },
    {
      component: 'Data Privacy',
      status: 'passed',
      score: 98,
      lastAudit: '2024-01-08'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-trust-verified';
      case 'good':
        return 'text-performance-good';
      case 'warning':
        return 'text-performance-warning';
      case 'critical':
        return 'text-performance-critical';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Zap className="h-4 w-4 text-trust-verified" />;
      case 'good':
        return <TrendingUp className="h-4 w-4 text-performance-good" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-performance-warning" />;
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-performance-critical" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const overallScore = Math.round(metrics.reduce((sum, metric) => sum + metric.value, 0) / metrics.length);

  return (
    <div className="space-y-6">
      {/* Overall Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-trust-verified" />
            Platform Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-trust-verified">{overallScore}/100</div>
              <div className="text-sm text-muted-foreground">Overall Performance Score</div>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-trust-verified/10 text-trust-verified">
                Excellent
              </Badge>
              <Badge variant="secondary" className="bg-trust-carbon/10 text-trust-carbon">
                <Leaf className="h-3 w-3 mr-1" />
                Carbon Neutral
              </Badge>
            </div>
          </div>
          <Progress value={overallScore} className="h-2 animate-progress-fill" />
        </CardContent>
      </Card>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(metric.status)}
                      <h3 className="font-medium">{metric.name}</h3>
                    </div>
                    <div className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                      {metric.value}
                    </div>
                  </div>
                  <Progress value={metric.value} className="mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {metric.description}
                  </p>
                  {metric.improvement && (
                    <p className="text-xs text-trust-verified">
                      ✓ {metric.improvement}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityAudits.map((audit) => (
              <Card key={audit.component}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{audit.component}</h3>
                    <Badge 
                      variant={audit.status === 'passed' ? 'default' : 'destructive'}
                      className={audit.status === 'passed' ? 'bg-trust-verified/10 text-trust-verified' : ''}
                    >
                      {audit.status === 'passed' ? 'Passed' : 'Failed'}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-trust-verified mb-2">
                    {audit.score}/100
                  </div>
                  <Progress value={audit.score} className="mb-3" />
                  <p className="text-xs text-muted-foreground">
                    Last audit: {new Date(audit.lastAudit).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-trust-audit" />
                <h3 className="font-medium">CertiK Security Audit</h3>
                <Badge className="bg-trust-audit/10 text-trust-audit">
                  Report ID: TSV-2024-001
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-trust-verified">0</div>
                  <div className="text-sm text-muted-foreground">Critical Issues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-performance-good">2</div>
                  <div className="text-sm text-muted-foreground">Minor Issues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trust-verified">96%</div>
                  <div className="text-sm text-muted-foreground">Security Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sustainability" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-trust-carbon" />
                <h3 className="font-medium">Carbon Neutral Operations</h3>
                <Badge className="bg-trust-carbon/10 text-trust-carbon">
                  Certificate ID: CT-CN-2024-TSV
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-trust-carbon">0kg</div>
                  <div className="text-sm text-muted-foreground">Net CO₂ Emissions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trust-carbon">2.5t</div>
                  <div className="text-sm text-muted-foreground">CO₂ Offset This Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-trust-carbon">95%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Server Efficiency</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CDN Optimization</span>
                      <span>88%</span>
                    </div>
                    <Progress value={88} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Code Efficiency</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Sustainable Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-trust-carbon rounded-full" />
                    <span>Green hosting infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-trust-carbon rounded-full" />
                    <span>Optimized blockchain interactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-trust-carbon rounded-full" />
                    <span>Efficient smart contract design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-trust-carbon rounded-full" />
                    <span>Carbon offset partnerships</span>
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