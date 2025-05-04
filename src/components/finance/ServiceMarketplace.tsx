
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Users, ShieldCheck, CircleCheck } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  creator: string;
  creatorAddress: string;
  category: string;
  price: string;
  currency: string;
  deadline: string;
  completions: number;
  rating: number;
  image?: string;
};

type ServiceMarketplaceProps = {
  services: ServiceItem[];
  onPurchase: (serviceId: string) => void;
};

export const ServiceMarketplace: React.FC<ServiceMarketplaceProps> = ({
  services,
  onPurchase
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2 text-neura-cyan" />
          Service NFTs
        </h3>
        <Button 
          variant="outline"
          size="sm"
          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
        >
          List Your Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="bg-neura-dark/80 border-neura-purple/20 overflow-hidden">
            <div className="relative">
              {service.image && (
                <div className="h-40 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <Badge className="absolute top-2 right-2 bg-neura-purple/80 text-white">
                {service.category}
              </Badge>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{service.title}</CardTitle>
              <CardDescription className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-neura-purple/20 mr-2 flex items-center justify-center text-xs">
                  {service.creator.charAt(0)}
                </div>
                <span>{service.creator}</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-white/50">Price</div>
                  <div className="text-xl font-bold">{service.price} {service.currency}</div>
                </div>
                <div>
                  <div className="text-xs text-white/50">Deadline</div>
                  <div className="text-sm">{service.deadline}</div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center space-x-4 text-xs text-white/70">
                <div className="flex items-center">
                  <CircleCheck className="w-4 h-4 mr-1 text-neura-cyan" />
                  <span>{service.completions} completed</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <div 
                        key={i}
                        className={`w-3 h-3 rounded-full ${i < service.rating ? 'bg-neura-cyan' : 'bg-neura-dark'} mr-0.5`} 
                      />
                    ))}
                  </div>
                  <span className="ml-1">{service.rating}/5</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="border-t border-neura-purple/20 pt-3">
              <Button 
                className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                onClick={() => onPurchase(service.id)}
              >
                Purchase Service NFT
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card className="bg-neura-dark/80 border-neura-purple/20 p-6">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-4">
            <ShieldCheck className="w-5 h-5 text-neura-cyan" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Dispute Resolution</h4>
            <p className="text-sm text-white/70 mb-3">
              All service NFTs are backed by smart contracts with built-in dispute resolution.
              Disputes are handled by a decentralized arbitration system using the Neura DAO.
            </p>
            <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
              Learn More
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
