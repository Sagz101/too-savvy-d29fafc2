
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Coins, 
  TrendingUp, 
  DollarSign,
  Gift,
  Users,
  Star
} from 'lucide-react';

interface EarningsData {
  totalEarnings: number;
  monthlyEarnings: number;
  tips: number;
  premiumSales: number;
  sponsorships: number;
  nftRoyalties: number;
}

export const MonetizationInterface: React.FC = () => {
  const [earningsData] = useState<EarningsData>({
    totalEarnings: 1247.50,
    monthlyEarnings: 234.80,
    tips: 89.30,
    premiumSales: 145.50,
    sponsorships: 0,
    nftRoyalties: 12.75
  });

  const sponsorshipTiers = [
    {
      name: 'Bronze Sponsor',
      price: 50,
      benefits: ['Sponsor tag on 1 post', 'Link in bio'],
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    {
      name: 'Silver Sponsor',
      price: 150,
      benefits: ['Sponsor tag on 3 posts', 'Newsletter mention', 'Link in bio'],
      color: 'bg-gray-100 text-gray-700 border-gray-200'
    },
    {
      name: 'Gold Sponsor',
      price: 500,
      benefits: ['Sponsor tag on 10 posts', 'Dedicated sponsored post', 'Newsletter mention', 'Priority support'],
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold">{earningsData.totalEarnings} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">{earningsData.monthlyEarnings} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Tips Received</p>
                <p className="text-2xl font-bold">{earningsData.tips} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">NFT Royalties</p>
                <p className="text-2xl font-bold">{earningsData.nftRoyalties} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Tips</span>
                <span>{earningsData.tips} $NEURAX</span>
              </div>
              <Progress value={(earningsData.tips / earningsData.monthlyEarnings) * 100} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Premium Content</span>
                <span>{earningsData.premiumSales} $NEURAX</span>
              </div>
              <Progress value={(earningsData.premiumSales / earningsData.monthlyEarnings) * 100} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>NFT Royalties</span>
                <span>{earningsData.nftRoyalties} $NEURAX</span>
              </div>
              <Progress value={(earningsData.nftRoyalties / earningsData.monthlyEarnings) * 100} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Sponsorships</span>
                <span>{earningsData.sponsorships} $NEURAX</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sponsorship Packages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sponsorshipTiers.map((tier) => (
              <div key={tier.name} className={`border rounded-lg p-4 ${tier.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{tier.name}</h3>
                  <div className="text-lg font-bold">{tier.price} $NEURAX</div>
                </div>
                <ul className="text-sm space-y-1">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
                <Button size="sm" className="mt-3 w-full" variant="outline">
                  Enable Package
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Premium Content Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Early Access</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribers get 24-48 hour early access to new posts
              </p>
              <div className="text-lg font-bold mb-2">10 $NEURAX/month</div>
              <Button size="sm" className="w-full">Enable</Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Premium Posts</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Gate specific high-value content behind token payment
              </p>
              <div className="text-lg font-bold mb-2">5-50 $NEURAX/post</div>
              <Button size="sm" className="w-full">Enable</Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Thread Access</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Complete thread series access with exclusive insights
              </p>
              <div className="text-lg font-bold mb-2">25 $NEURAX/thread</div>
              <Button size="sm" className="w-full">Enable</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
