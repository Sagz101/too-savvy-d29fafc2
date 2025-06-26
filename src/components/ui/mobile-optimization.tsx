
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  WifiOff,
  Battery,
  Signal
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  isOnline: boolean;
  connection: string;
  batteryLevel?: number;
}

export const MobileOptimization: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    isOnline: navigator.onLine,
    connection: 'unknown'
  });
  const [showOptimizationTips, setShowOptimizationTips] = useState(false);

  useEffect(() => {
    // Detect device type
    const detectDevice = (): DeviceInfo['type'] => {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    // Get connection info
    const getConnectionInfo = (): string => {
      const connection = (navigator as any).connection || 
                        (navigator as any).mozConnection || 
                        (navigator as any).webkitConnection;
      
      if (connection) {
        return connection.effectiveType || connection.type || 'unknown';
      }
      return 'unknown';
    };

    // Get battery info
    const getBatteryInfo = async (): Promise<number | undefined> => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          return Math.round(battery.level * 100);
        } catch (error) {
          return undefined;
        }
      }
      return undefined;
    };

    const updateDeviceInfo = async () => {
      const batteryLevel = await getBatteryInfo();
      
      setDeviceInfo({
        type: detectDevice(),
        isOnline: navigator.onLine,
        connection: getConnectionInfo(),
        batteryLevel
      });
    };

    updateDeviceInfo();

    // Listen for online/offline events
    const handleOnline = () => setDeviceInfo(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setDeviceInfo(prev => ({ ...prev, isOnline: false }));
    const handleResize = () => setDeviceInfo(prev => ({ ...prev, type: detectDevice() }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getDeviceIcon = () => {
    switch (deviceInfo.type) {
      case 'mobile': return <Smartphone size={16} />;
      case 'tablet': return <Tablet size={16} />;
      default: return <Monitor size={16} />;
    }
  };

  const getConnectionColor = () => {
    if (!deviceInfo.isOnline) return 'bg-red-500/20 text-red-400 border-red-500/30';
    
    switch (deviceInfo.connection) {
      case 'slow-2g':
      case '2g': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case '3g': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case '4g':
      case '5g': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const shouldShowOptimizations = () => {
    return deviceInfo.type === 'mobile' || 
           !deviceInfo.isOnline || 
           ['slow-2g', '2g', '3g'].includes(deviceInfo.connection) ||
           (deviceInfo.batteryLevel && deviceInfo.batteryLevel < 20);
  };

  const optimizationTips = [
    {
      condition: deviceInfo.type === 'mobile',
      title: 'Mobile Optimized',
      description: 'Using compressed images and reduced animations for better mobile performance.',
      action: 'Enable data saver mode'
    },
    {
      condition: !deviceInfo.isOnline,
      title: 'Offline Mode',
      description: 'Some features may be limited while offline. Content will sync when connection is restored.',
      action: 'View cached content'
    },
    {
      condition: ['slow-2g', '2g', '3g'].includes(deviceInfo.connection),
      title: 'Slow Connection Detected',
      description: 'Loading optimized content to improve your experience on slower connections.',
      action: 'Enable lite mode'
    },
    {
      condition: deviceInfo.batteryLevel && deviceInfo.batteryLevel < 20,
      title: 'Low Battery Mode',
      description: 'Reducing animations and background processes to conserve battery.',
      action: 'Activate power saver'
    }
  ];

  return (
    <div className="fixed top-20 right-4 z-40">
      {/* Device Status Badge */}
      <div className="flex items-center gap-2 mb-2">
        <Badge className="bg-slate-800/90 text-white border-gray-600 flex items-center gap-2">
          {getDeviceIcon()}
          <span className="capitalize">{deviceInfo.type}</span>
        </Badge>
        
        <Badge className={getConnectionColor()}>
          {deviceInfo.isOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
          <span className="ml-1">
            {deviceInfo.isOnline ? deviceInfo.connection.toUpperCase() : 'Offline'}
          </span>
        </Badge>

        {deviceInfo.batteryLevel && (
          <Badge className={`${
            deviceInfo.batteryLevel < 20 
              ? 'bg-red-500/20 text-red-400 border-red-500/30'
              : 'bg-green-500/20 text-green-400 border-green-500/30'
          }`}>
            <Battery size={12} />
            <span className="ml-1">{deviceInfo.batteryLevel}%</span>
          </Badge>
        )}
      </div>

      {/* Optimization Notification */}
      {shouldShowOptimizations() && (
        <Card className="w-80 bg-slate-800/95 border border-yellow-400/30 backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-yellow-400 flex items-center gap-2">
              <Signal size={16} />
              Performance Optimizations Active
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {optimizationTips
              .filter(tip => tip.condition)
              .map((tip, index) => (
                <div key={index} className="text-sm">
                  <h4 className="text-white font-medium mb-1">{tip.title}</h4>
                  <p className="text-gray-300 mb-2">{tip.description}</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs h-7 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
                  >
                    {tip.action}
                  </Button>
                </div>
              ))}
            
            <div className="pt-2 border-t border-gray-700">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowOptimizationTips(false)}
                className="text-xs text-gray-400 hover:text-white w-full"
              >
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Progressive Web App features
export const PWAFeatures = {
  // Service Worker registration for offline functionality
  registerServiceWorker: () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  },

  // Install prompt for PWA
  showInstallPrompt: () => {
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show install button
      const installButton = document.getElementById('install-pwa');
      if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', () => {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
          });
        });
      }
    });
  },

  // Cache strategies for different content types
  cacheStrategies: {
    // Static assets - cache first
    staticAssets: ['/images/', '/fonts/', '/css/', '/js/'],
    
    // API calls - network first with fallback
    apiCalls: ['/api/'],
    
    // Images - cache with update
    images: ['.jpg', '.png', '.webp', '.svg']
  }
};
