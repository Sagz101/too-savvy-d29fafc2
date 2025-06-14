
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Package, 
  Truck, 
  MapPin,
  Link2,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export const ShippingConfig: React.FC = () => {
  const [shipbobConfig, setShipbobConfig] = useState({
    enabled: false,
    apiKey: '',
    warehouseId: ''
  });

  const [chainlinkConfig, setChainlinkConfig] = useState({
    enabled: true,
    nodeAddress: '',
    jobId: ''
  });

  const trackingStatuses = [
    'ordered',
    'processing', 
    'shipped',
    'in_transit',
    'out_for_delivery',
    'delivered'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            ShipBob Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Enable ShipBob Fulfillment</h3>
              <p className="text-sm text-muted-foreground">
                Automatically create orders and sync inventory
              </p>
            </div>
            <Switch 
              checked={shipbobConfig.enabled}
              onCheckedChange={(enabled) => setShipbobConfig({ ...shipbobConfig, enabled })}
            />
          </div>

          {shipbobConfig.enabled && (
            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <label className="text-sm font-medium mb-2 block">ShipBob API Key</label>
                <Input
                  type="password"
                  placeholder="sb_api_..."
                  value={shipbobConfig.apiKey}
                  onChange={(e) => setShipbobConfig({ ...shipbobConfig, apiKey: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Warehouse ID</label>
                <Input
                  placeholder="12345"
                  value={shipbobConfig.warehouseId}
                  onChange={(e) => setShipbobConfig({ ...shipbobConfig, warehouseId: e.target.value })}
                />
              </div>
              <Button className="w-full">
                Test Connection
              </Button>
            </div>
          )}

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Automatic Order Flow</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                NFT mint triggers ShipBob order creation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                Buyer address automatically passed to fulfillment
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-500" />
                Inventory levels sync with product availability
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="w-5 h-5" />
            Chainlink Oracle Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Enable Supply Chain Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Update NFT metadata with real-world shipping status
              </p>
            </div>
            <Switch 
              checked={chainlinkConfig.enabled}
              onCheckedChange={(enabled) => setChainlinkConfig({ ...chainlinkConfig, enabled })}
            />
          </div>

          {chainlinkConfig.enabled && (
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-3">Oracle Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Node Address</label>
                    <Input
                      placeholder="0x..."
                      value={chainlinkConfig.nodeAddress}
                      onChange={(e) => setChainlinkConfig({ ...chainlinkConfig, nodeAddress: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job ID</label>
                    <Input
                      placeholder="abc123..."
                      value={chainlinkConfig.jobId}
                      onChange={(e) => setChainlinkConfig({ ...chainlinkConfig, jobId: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">Tracking Status Updates</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {trackingStatuses.map((status) => (
                    <Badge key={status} variant="outline" className="justify-center">
                      {status.replace('_', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-blue-600">
            <Truck className="w-4 h-4" />
            <span className="text-sm">External adapter ready for ShipBob webhooks</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Shipping Zones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium">United States</h4>
                <p className="text-sm text-muted-foreground">Standard shipping available</p>
              </div>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium">Canada</h4>
                <p className="text-sm text-muted-foreground">International shipping</p>
              </div>
              <Badge variant="secondary">Pending</Badge>
            </div>
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium">European Union</h4>
                <p className="text-sm text-muted-foreground">Cross-border shipping</p>
              </div>
              <Badge variant="outline">Disabled</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
