
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Users, Zap, Shield, Globe, Coins, Target } from 'lucide-react';

export const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              T00 Savvy Whitepaper
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decentralized Creator Economy Platform - Empowering Digital Sovereignty
          </p>
          <div className="mt-8">
            <Button size="lg" className="mr-4">
              <Download className="mr-2" size={20} />
              Download PDF
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="mr-2" size={20} />
              View Full Document
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Target className="mr-3 text-primary" />
            Executive Summary
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            T00 Savvy is a revolutionary decentralized platform that empowers creators to own, monetize, and distribute their content without intermediaries. Built on Web3 principles, our ecosystem combines video streaming, NFT creation, social networking, e-commerce, and collaborative innovation tools.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By leveraging blockchain technology, smart contracts, and decentralized storage, T00 Savvy eliminates traditional gatekeepers and gives creators full control over their digital assets and revenue streams.
          </p>
        </Card>

        {/* Problem Statement */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Creator Exploitation</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Platform fees ranging from 15-50%</li>
                <li>• Algorithm manipulation</li>
                <li>• Content censorship</li>
                <li>• Limited monetization options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Centralized Control</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Platform dependency</li>
                <li>• Data ownership issues</li>
                <li>• Revenue sharing inequity</li>
                <li>• Limited creative freedom</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Solution */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Zap className="mr-3 text-primary" />
            Our Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Creator Sovereignty</h3>
              <p className="text-muted-foreground mb-4">
                Complete ownership of content, data, and revenue streams through blockchain technology and smart contracts.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Shield className="mr-2 text-green-400" size={16} />
                  <span>100% creator ownership</span>
                </div>
                <div className="flex items-center">
                  <Coins className="mr-2 text-yellow-400" size={16} />
                  <span>Direct monetization</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2 text-blue-400" size={16} />
                  <span>Global distribution</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Decentralized Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Built on Web3 principles with decentralized storage, smart contracts, and cross-chain compatibility.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Users className="mr-2 text-purple-400" size={16} />
                  <span>Community governance</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 text-green-400" size={16} />
                  <span>Censorship resistance</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-2 text-orange-400" size={16} />
                  <span>Cross-platform interoperability</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Platform Features */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-neura-cyan">Video Studio</h3>
              <p className="text-sm text-muted-foreground">
                Create, mint, and manage Video NFTs with integrated streaming capabilities.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">E-Commerce Store</h3>
              <p className="text-sm text-muted-foreground">
                Build storefronts with Web3 payments and NFT integration.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Threaditor</h3>
              <p className="text-sm text-muted-foreground">
                Long-form content creation with tokenized monetization.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-pink-400">NeuraSocial</h3>
              <p className="text-sm text-muted-foreground">
                Decentralized social networking with token-gated communities.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Global Innovators</h3>
              <p className="text-sm text-muted-foreground">
                Collaborative project workspace with DAO governance.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Dev Sandbox</h3>
              <p className="text-sm text-muted-foreground">
                APIs, SDKs, and integration tools for developers.
              </p>
            </div>
          </div>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Blockchain Layer</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Ethereum mainnet</li>
                <li>• Polygon scaling</li>
                <li>• Cross-chain bridges</li>
                <li>• Smart contracts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Storage & CDN</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• IPFS for content</li>
                <li>• Arweave for permanence</li>
                <li>• Livepeer for streaming</li>
                <li>• Edge distribution</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Frontend & APIs</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• React + TypeScript</li>
                <li>• Web3 wallet integration</li>
                <li>• GraphQL APIs</li>
                <li>• Progressive Web App</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Tokenomics */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Coins className="mr-3 text-yellow-400" />
            Tokenomics
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SAVVY Token Utility</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Platform governance voting</li>
                <li>• Creator incentive rewards</li>
                <li>• Premium feature access</li>
                <li>• NFT marketplace transactions</li>
                <li>• Staking for yield generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Token Distribution</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Creator Rewards</span>
                  <span className="text-primary">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Development Fund</span>
                  <span className="text-primary">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Community Treasury</span>
                  <span className="text-primary">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Team & Advisors</span>
                  <span className="text-primary">15%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Roadmap */}
        <Card className="mb-12 p-8">
          <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold text-primary">Phase 1: Foundation (Q1 2024)</h3>
              <p className="text-muted-foreground">Core platform launch with Video Studio and basic NFT functionality</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-semibold text-yellow-400">Phase 2: Expansion (Q2-Q3 2024)</h3>
              <p className="text-muted-foreground">E-commerce integration, social features, and mobile apps</p>
            </div>
            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-lg font-semibold text-green-400">Phase 3: Ecosystem (Q4 2024)</h3>
              <p className="text-muted-foreground">DAO governance, cross-chain expansion, and developer tools</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-lg font-semibold text-purple-400">Phase 4: Scale (2025)</h3>
              <p className="text-muted-foreground">Global expansion, enterprise solutions, and AI integration</p>
            </div>
          </div>
        </Card>

        {/* Team & Contact */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6">Team & Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Team</h3>
              <p className="text-muted-foreground mb-4">
                Our team combines expertise in blockchain technology, creator economy, and decentralized systems to build the future of digital content ownership.
              </p>
              <div className="space-y-2">
                <div>
                  <strong>Engineering:</strong> Full-stack Web3 developers
                </div>
                <div>
                  <strong>Product:</strong> Creator economy specialists
                </div>
                <div>
                  <strong>Business:</strong> Strategic partnerships & growth
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <div className="space-y-3">
                <div>
                  <strong>Developers:</strong> Join our GitHub and contribute to the open-source ecosystem
                </div>
                <div>
                  <strong>Creators:</strong> Apply for early access and shape the platform
                </div>
                <div>
                  <strong>Investors:</strong> Contact us for partnership opportunities
                </div>
                <div className="pt-4">
                  <Button className="mr-4">
                    Join Community
                  </Button>
                  <Button variant="outline">
                    Contact Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
