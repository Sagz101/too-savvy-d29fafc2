import React, { useState } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { 
  Settings as SettingsIcon, Bell, Shield, Palette, Moon, Sun, Globe, Wallet, User, Mail
} from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState({ email: true, push: true, marketing: false });
  const [theme, setTheme] = useState('dark');

  if (!user) {
    return (
      <CosmicPageLayout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-white/60">Please sign in to access settings.</p>
        </div>
      </CosmicPageLayout>
    );
  }

  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2 text-white">
                <SettingsIcon className="w-8 h-8" />
                Settings
              </h1>
              <p className="text-white/60">Manage your account settings and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-2">
                {[
                  { icon: User, label: 'Account' },
                  { icon: Bell, label: 'Notifications' },
                  { icon: Palette, label: 'Appearance' },
                  { icon: Shield, label: 'Privacy & Security' },
                  { icon: Wallet, label: 'Wallet' },
                ].map(({ icon: Icon, label }) => (
                  <Button key={label} variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5">
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                ))}
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white"><User className="w-5 h-5" />Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="username" className="text-white/80">Username</Label>
                        <Input id="username" value={user.user_metadata?.username || ''} placeholder="Enter username" className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white/80">Email</Label>
                        <Input id="email" type="email" value={user.email || ''} readOnly className="bg-white/5 border-white/10 text-white" />
                        <Badge variant="secondary" className="mt-1 bg-white/10 text-white/70"><Mail className="w-3 h-3 mr-1" />Verified</Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600">Save Changes</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white"><Bell className="w-5 h-5" />Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { key: 'email' as const, title: 'Email Notifications', desc: 'Receive notifications via email' },
                      { key: 'push' as const, title: 'Push Notifications', desc: 'Receive push notifications in browser' },
                      { key: 'marketing' as const, title: 'Marketing Communications', desc: 'Receive updates about new features and offers' },
                    ].map(({ key, title, desc }, i) => (
                      <React.Fragment key={key}>
                        {i > 0 && <Separator className="bg-white/10" />}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-white">{title}</p>
                            <p className="text-sm text-white/50">{desc}</p>
                          </div>
                          <Switch checked={notifications[key]} onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, [key]: checked }))} />
                        </div>
                      </React.Fragment>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white"><Palette className="w-5 h-5" />Appearance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white/80">Theme</Label>
                      <div className="flex gap-2 mt-2">
                        {[
                          { value: 'light', icon: Sun, label: 'Light' },
                          { value: 'dark', icon: Moon, label: 'Dark' },
                          { value: 'system', icon: Globe, label: 'System' },
                        ].map(({ value, icon: Icon, label }) => (
                          <Button key={value} variant={theme === value ? 'default' : 'outline'} onClick={() => setTheme(value)} className={`flex-1 ${theme === value ? 'bg-purple-600' : 'border-white/10 text-white/70 hover:bg-white/5'}`}>
                            <Icon className="w-4 h-4 mr-2" />{label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white"><Shield className="w-5 h-5" />Privacy & Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div><p className="font-medium text-white">Profile Visibility</p><p className="text-sm text-white/50">Make your profile visible to other users</p></div>
                      <Switch defaultChecked />
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="flex items-center justify-between">
                      <div><p className="font-medium text-white">Activity Status</p><p className="text-sm text-white/50">Show when you're active on the platform</p></div>
                      <Switch defaultChecked />
                    </div>
                    <Separator className="bg-white/10" />
                    <Button variant="destructive">Delete Account</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CosmicPageLayout>
  );
};

export default Settings;
