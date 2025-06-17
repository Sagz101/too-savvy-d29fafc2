
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, ExternalLink } from 'lucide-react';

export const TrustSignals = () => {
  const audits = [
    {
      company: "CertiK",
      type: "Smart Contract Audit", 
      status: "Passed",
      link: "#"
    },
    {
      company: "Carbon Trust", 
      type: "Carbon Neutral Certification",
      status: "Verified",
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      content: "T00 Savvy gave me true ownership of my art. I've earned 3x more through NFT royalties than traditional platforms.",
      avatar: "/placeholder.svg",
      earnings: "$12,400"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Podcast Creator",
      content: "The token-gated community feature transformed how I engage with my audience. My subscribers are more invested than ever.",
      avatar: "/placeholder.svg",
      subscribers: "2,847"
    },
    {
      name: "TechFlow DAO",
      role: "Developer Community", 
      content: "Building on T00 Savvy's APIs was seamless. Their developer sandbox made integration effortless.",
      avatar: "/placeholder.svg",
      integrations: "47"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trusted by Creators Worldwide
            </span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Security audited, carbon verified, and loved by thousands of creators.
          </p>
        </div>

        {/* Security & Compliance */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audits.map((audit, index) => (
            <Card key={index} className="border border-green-500/20 bg-green-500/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-foreground">{audit.type}</h3>
                      <p className="text-sm text-muted-foreground">Verified by {audit.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-medium">{audit.status}</span>
                    <ExternalLink size={16} className="text-muted-foreground cursor-pointer hover:text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Creator Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Award size={16} className="text-yellow-500" />
                  <span className="text-primary font-medium">
                    {testimonial.earnings && `Earned ${testimonial.earnings}`}
                    {testimonial.subscribers && `${testimonial.subscribers} subscribers`}
                    {testimonial.integrations && `${testimonial.integrations} integrations built`}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
