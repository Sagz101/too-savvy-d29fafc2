import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { websiteRoutes, buttonTargets, validateNavigation } from '@/utils/navigationTest';

export const NavigationValidator: React.FC = () => {
  const [validationResults, setValidationResults] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const runValidation = () => {
    const results = validateNavigation();
    setValidationResults(results);
    setShowDetails(true);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink size={20} />
          Navigation System Test
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button onClick={runValidation}>
            Validate Navigation
          </Button>
          {validationResults && (
            <Badge variant={validationResults.isValid ? "default" : "destructive"}>
              {validationResults.isValid ? (
                <CheckCircle size={16} className="mr-1" />
              ) : (
                <AlertCircle size={16} className="mr-1" />
              )}
              {validationResults.isValid ? 'All Good' : 'Issues Found'}
            </Badge>
          )}
        </div>

        {showDetails && validationResults && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Route Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Routes:</span>
                      <Badge>{validationResults.totalRoutes}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Duplicates:</span>
                      <Badge variant={validationResults.duplicates.length > 0 ? "destructive" : "default"}>
                        {validationResults.duplicates.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Missing Routes:</span>
                      <Badge variant={validationResults.missingRoutes.length > 0 ? "destructive" : "default"}>
                        {validationResults.missingRoutes.length}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {['/auth', '/creator-studio', '/video-studio', '/messaging'].map((route) => (
                      <div key={route} className="flex items-center justify-between">
                        <Link to={route} className="text-primary hover:underline text-sm">
                          {route}
                        </Link>
                        <CheckCircle size={16} className="text-green-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">All Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                  {websiteRoutes.map((route) => (
                    <div key={route.path} className="flex items-center justify-between p-2 rounded border">
                      <Link to={route.path} className="text-sm text-primary hover:underline">
                        {route.name}
                      </Link>
                      <Badge variant="outline" className="text-xs">
                        {route.path}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Button Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                  {buttonTargets.map((target, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded border">
                      <span className="text-sm">{target.text}</span>
                      <Badge variant="outline" className="text-xs">
                        {target.expectedRoute}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};