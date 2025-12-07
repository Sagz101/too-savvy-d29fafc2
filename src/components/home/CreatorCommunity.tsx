import React from 'react';
import { Users, Award, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CreatorCommunity: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Join Our Creator Community
            </h2>
            
            <p className="text-lg text-gray-400 max-w-lg">
              Connect with 13,000+ monthly active creators sharing tips, 
              collaboration opportunities, and growing together on Diminga.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Join TooSavvey Pro Community</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold mt-4"
              asChild
            >
              <Link to="/neura-social">
                Enter Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right - Success Stories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Creator Success Stories</h3>
            <p className="text-gray-400">Real creators building sustainable income through our DAO-governed platform.</p>

            {/* Community Stats */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-white">15,247 Members</div>
                  <div className="text-sm text-gray-500">Monthly Active Community</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">• Members</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">• 24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Creator Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://placehold.co/48x48/6366f1/ffffff?text=MC" 
                    alt="Maya Chen"
                    className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20"
                  />
                  <div>
                    <div className="font-semibold text-white">Maya Chen</div>
                    <div className="text-xs text-gray-500">E-commerce Creator</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-3">Digital Artist & Store Owner</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-500">Top Creator</span>
                  <span className="text-xs text-indigo-400">• Creator Award</span>
                </div>
                
                <Button size="sm" variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Profile
                </Button>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://placehold.co/48x48/8b5cf6/ffffff?text=JK" 
                    alt="Jordan Kim"
                    className="w-12 h-12 rounded-full ring-2 ring-purple-500/20"
                  />
                  <div>
                    <div className="font-semibold text-white">Jordan Kim</div>
                    <div className="text-xs text-gray-500">Music Producer</div>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-white mb-2">$15,934</div>
                <p className="text-sm text-gray-400 mb-3">• Best Seller</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Tech Used:</span>
                  <span className="text-xs text-gray-500">Music Studio, Social</span>
                </div>
                
                <Button size="sm" variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Profile
                </Button>
              </div>
            </div>

            {/* Passive Income CTA */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-300">
                Earn passive income by sharing your <span className="text-indigo-400 font-medium">success story!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
