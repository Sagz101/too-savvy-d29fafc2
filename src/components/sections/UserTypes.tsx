
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Code, TrendingUp, Sparkles, Wrench, BarChart } from 'lucide-react';
import { EnhancedIcon } from '@/components/ui/enhanced-icon';
import { Link } from 'react-router-dom';

export const UserTypes = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Who is Too Savvy For?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're creating, building, or investing, Too Savvy provides the tools and insights you need to succeed in the Web3 creator economy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* For Creators */}
          <div className="grok-card grok-card-hover p-8 text-center">
            <div className="flex justify-center mb-6">
              <EnhancedIcon icon={Users} variant="primary" size="lg" animated />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">For Creators</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore Too Savvy if you're interested in Web3, NFTs, or decentralized monetization. Start with the traditional login to test features before diving into Web3-native tools.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <Sparkles size={16} className="mr-2 text-primary" />
                <span>Web3 & NFT monetization</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Sparkles size={16} className="mr-2 text-primary" />
                <span>Traditional login for testing</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Sparkles size={16} className="mr-2 text-primary" />
                <span>Decentralized creator tools</span>
              </div>
            </div>
            <Button className="grok-button-primary w-full" asChild>
              <Link to="/video-studio">
                Start Creating
              </Link>
            </Button>
          </div>

          {/* For Developers */}
          <div className="grok-card grok-card-hover p-8 text-center">
            <div className="flex justify-center mb-6">
              <EnhancedIcon icon={Code} variant="secondary" size="lg" animated />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">For Developers</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leverage the platform's SDKs and documentation to build custom integrations or contribute to the ecosystem.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <Wrench size={16} className="mr-2 text-secondary" />
                <span>Platform SDKs & APIs</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Wrench size={16} className="mr-2 text-secondary" />
                <span>Custom integrations</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Wrench size={16} className="mr-2 text-secondary" />
                <span>Ecosystem contributions</span>
              </div>
            </div>
            <Button className="grok-button-secondary w-full" asChild>
              <Link to="/video-integration">
                View Documentation
              </Link>
            </Button>
          </div>

          {/* For Investors */}
          <div className="grok-card grok-card-hover p-8 text-center">
            <div className="flex justify-center mb-6">
              <EnhancedIcon icon={TrendingUp} variant="warning" size="lg" animated />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">For Investors</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Monitor Too Savvy's adoption metrics (e.g., creator growth, NFT minting volume) and $Neurax token performance to assess its potential in the Web3 creator space.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <BarChart size={16} className="mr-2 text-warning" />
                <span>Creator growth metrics</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BarChart size={16} className="mr-2 text-warning" />
                <span>NFT minting volume</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BarChart size={16} className="mr-2 text-warning" />
                <span>$Neurax token performance</span>
              </div>
            </div>
            <Button className="grok-button-warning w-full" asChild>
              <Link to="/finance-hub">
                View Analytics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
