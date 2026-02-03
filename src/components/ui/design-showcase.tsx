import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe, ArrowRight, Star } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';

export const DesignShowcase: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Glassmorphism',
      description: 'Frosted glass effects with subtle blur and transparency',
      gradient: 'from-primary/20 to-accent/20',
    },
    {
      icon: Zap,
      title: 'Mesh Gradients',
      description: 'Dynamic multi-color gradients that shift and animate',
      gradient: 'from-accent/20 to-secondary/20',
    },
    {
      icon: Shield,
      title: 'Micro-Interactions',
      description: 'Smooth hover states, focus rings, and click feedback',
      gradient: 'from-secondary/20 to-primary/20',
    },
    {
      icon: Globe,
      title: 'Aurora Effects',
      description: 'Rotating conic gradients for ambient backgrounds',
      gradient: 'from-primary/20 to-secondary/20',
    },
  ];

  return (
    <div className="min-h-screen mesh-gradient-hero p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section with Aurora */}
        <motion.section 
          className="text-center space-y-6 aurora-bg py-20 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="badge-glow bg-primary/10 text-primary border-primary/30">
            <Sparkles className="w-3 h-3 mr-1" />
            2025 Design System
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space text-gradient-animated">
            Modern Web3 UI
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized interfaces with glassmorphism, 
            mesh gradients, and delightful micro-interactions.
          </p>
          
          <div className="flex gap-4 justify-center pt-4">
            <Button className="btn-morph px-8 py-6 text-lg">
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button variant="outline" className="gradient-border px-8 py-6 text-lg hover-lift">
              Learn More
            </Button>
          </div>
        </motion.section>

        {/* Feature Cards with Glassmorphism */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`glass-card spotlight hover-lift h-full bg-gradient-to-br ${feature.gradient}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover-glow">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-space">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '99%', label: 'Performance' },
            { value: '50ms', label: 'Response Time' },
            { value: '100+', label: 'Components' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-card-elevated p-6 text-center rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 font-space">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Interactive Elements Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-space text-center">Interactive Elements</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-micro ripple-effect">
              Micro Button
            </Button>
            <Button variant="outline" className="gradient-border-animated">
              Gradient Border
            </Button>
            <Button className="organic-button">
              Organic Style
            </Button>
            <Button variant="ghost" className="animated-underline">
              Underline Effect
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Badge className="hover-scale cursor-pointer">Default</Badge>
            <Badge variant="outline" className="badge-glow">Glowing</Badge>
            <Badge className="bg-primary/20 text-primary shimmer-effect">Shimmer</Badge>
            <Badge variant="secondary" className="float">Floating</Badge>
          </div>
        </section>

        {/* Gradient Border Card */}
        <motion.section
          className="gradient-border-animated rounded-3xl p-8 text-center space-y-4"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Star className="w-12 h-12 mx-auto text-primary animate-cosmic-pulse" />
          <h3 className="text-2xl font-bold font-space">Animated Gradient Border</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            This card features a continuously rotating gradient border, 
            creating a mesmerizing visual effect that draws attention.
          </p>
        </motion.section>

        {/* Skeleton Loading Demo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-space text-center">Loading States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-4 space-y-3 rounded-xl">
                <div className="skeleton h-32 w-full rounded-lg" />
                <div className="skeleton h-4 w-3/4" />
                <div className="skeleton h-4 w-1/2" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignShowcase;
