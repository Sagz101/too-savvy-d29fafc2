import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';

const PlatformFeatureSkeleton = () => (
  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
    <CardContent className="p-4 text-center">
      <Skeleton className="w-8 h-8 mx-auto mb-3 rounded-lg" />
      <Skeleton className="h-4 w-24 mx-auto mb-2" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-3/4 mx-auto mt-1" />
    </CardContent>
  </Card>
);

const ModuleCardSkeleton = () => (
  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="p-3 w-14 h-14 rounded-xl" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent className="space-y-4">
      <SkeletonText lines={2} />
      
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center">
            <Skeleton className="w-1.5 h-1.5 rounded-full mr-3" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>
      
      <Skeleton className="h-10 w-full mt-6 rounded-md" />
    </CardContent>
  </Card>
);

const AnalyticsSkeleton = () => (
  <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700">
    <CardContent className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <Skeleton className="h-8 w-64 mb-4" />
          <SkeletonText lines={3} className="mb-6" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
        <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-20" />
              </div>
            ))}
            <Skeleton className="w-full h-2 rounded-full" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const CreatorStudioSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      {/* Header Skeleton */}
      <div className="h-16 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
      
      <main>
        {/* Hero Section Skeleton */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Skeleton className="h-14 w-80 mx-auto mb-6" />
              <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
              <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto mb-8" />
              
              <div className="flex flex-wrap justify-center gap-4">
                <Skeleton className="h-12 w-40 rounded-md" />
                <Skeleton className="h-12 w-36 rounded-md" />
              </div>
            </div>
            
            {/* Platform Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {Array.from({ length: 4 }).map((_, i) => (
                <PlatformFeatureSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Creator Modules Section Skeleton */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Skeleton className="h-10 w-56 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <ModuleCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Analytics Section Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnalyticsSkeleton />
          </div>
        </section>
      </main>
      
      {/* Footer Skeleton */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <div className="flex gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorStudioSkeleton;
