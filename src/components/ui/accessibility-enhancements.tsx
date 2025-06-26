
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reduceMotion: boolean;
  soundEnabled: boolean;
  screenReaderMode: boolean;
}

export const AccessibilityEnhancements: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reduceMotion: false,
    soundEnabled: true,
    screenReaderMode: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply settings to document
    applySettings(settings);
  }, []);

  useEffect(() => {
    // Save settings to localStorage and apply them
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.classList.remove('text-small', 'text-medium', 'text-large');
    root.classList.add(`text-${newSettings.fontSize}`);
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduce motion
    if (newSettings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Screen reader mode
    if (newSettings.screenReaderMode) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        size="lg"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility size={20} />
        <span className="sr-only">Accessibility Settings</span>
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white border shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Accessibility size={24} className="text-blue-600" />
                  Accessibility
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close accessibility settings"
                >
                  ×
                </Button>
              </div>

              <div className="space-y-6">
                {/* Font Size */}
                <div role="group" aria-labelledby="font-size-label">
                  <h3 id="font-size-label" className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Type size={16} />
                    Text Size
                  </h3>
                  <div className="flex gap-2">
                    {[
                      { value: 'small', label: 'Small', size: 'text-sm' },
                      { value: 'medium', label: 'Medium', size: 'text-base' },
                      { value: 'large', label: 'Large', size: 'text-lg' }
                    ].map(({ value, label, size }) => (
                      <Button
                        key={value}
                        variant={settings.fontSize === value ? "default" : "outline"}
                        size="sm"
                        onClick={() => updateSetting('fontSize', value as AccessibilitySettings['fontSize'])}
                        className={size}
                        aria-pressed={settings.fontSize === value}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Contrast size={16} />
                    <label htmlFor="high-contrast" className="text-sm font-medium text-gray-900">
                      High Contrast
                    </label>
                  </div>
                  <Button
                    id="high-contrast"
                    variant={settings.highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    aria-pressed={settings.highContrast}
                    aria-describedby="high-contrast-desc"
                  >
                    {settings.highContrast ? <Eye size={16} /> : <EyeOff size={16} />}
                  </Button>
                  <p id="high-contrast-desc" className="sr-only">
                    Increases color contrast for better visibility
                  </p>
                </div>

                {/* Reduce Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings size={16} />
                    <label htmlFor="reduce-motion" className="text-sm font-medium text-gray-900">
                      Reduce Motion
                    </label>
                  </div>
                  <Button
                    id="reduce-motion"
                    variant={settings.reduceMotion ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting('reduceMotion', !settings.reduceMotion)}
                    aria-pressed={settings.reduceMotion}
                    aria-describedby="reduce-motion-desc"
                  >
                    {settings.reduceMotion ? 'ON' : 'OFF'}
                  </Button>
                  <p id="reduce-motion-desc" className="sr-only">
                    Reduces animations and transitions for those sensitive to motion
                  </p>
                </div>

                {/* Sound */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {settings.soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    <label htmlFor="sound-enabled" className="text-sm font-medium text-gray-900">
                      Sound Effects
                    </label>
                  </div>
                  <Button
                    id="sound-enabled"
                    variant={settings.soundEnabled ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                    aria-pressed={settings.soundEnabled}
                  >
                    {settings.soundEnabled ? 'ON' : 'OFF'}
                  </Button>
                </div>

                {/* Screen Reader Mode */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Accessibility size={16} />
                    <label htmlFor="screen-reader" className="text-sm font-medium text-gray-900">
                      Screen Reader Mode
                    </label>
                  </div>
                  <Button
                    id="screen-reader"
                    variant={settings.screenReaderMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting('screenReaderMode', !settings.screenReaderMode)}
                    aria-pressed={settings.screenReaderMode}
                  >
                    {settings.screenReaderMode ? 'ON' : 'OFF'}
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  Settings are automatically saved and will persist across sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

// CSS to be added to your global styles
export const accessibilityCSS = `
/* Text size classes */
.text-small { font-size: 14px; }
.text-medium { font-size: 16px; }
.text-large { font-size: 18px; }

/* High contrast mode */
.high-contrast {
  --background: #000000;
  --foreground: #ffffff;
  --card: #1a1a1a;
  --border: #ffffff;
  --primary: #00ffff;
}

/* Reduce motion */
.reduce-motion * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}

/* Screen reader mode */
.screen-reader-mode .sr-only {
  position: static !important;
  width: auto !important;
  height: auto !important;
  padding: 0.25rem 0.5rem !important;
  margin: 0 !important;
  overflow: visible !important;
  clip: auto !important;
  white-space: normal !important;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

/* Focus indicators */
*:focus-visible {
  outline: 2px solid #00ffff !important;
  outline-offset: 2px !important;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 6px;
}
`;
