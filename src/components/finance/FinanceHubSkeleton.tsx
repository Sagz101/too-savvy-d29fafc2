import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { StatsSkeleton, TableSkeleton, CardSkeleton } from '@/components/ui/skeleton-patterns';

export const FinanceHubSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="text-center mb-6">
        <Skeleton className="h-10 w-96 mx-auto mb-2" />
        <Skeleton className="h-5 w-[600px] mx-auto" />
      </div>

      {/* Controls skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-64 rounded-md" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="mb-8">
        <div className="flex gap-2 p-1 bg-muted/20 rounded-lg overflow-x-auto">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-md shrink-0" />
          ))}
        </div>
      </div>

      {/* Dashboard content skeleton */}
      <div className="space-y-6">
        <StatsSkeleton count={4} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grok-card p-6 space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
          <div className="space-y-4">
            <CardSkeleton />
          </div>
        </div>

        <TableSkeleton rows={5} cols={5} />
      </div>
    </div>
  );
};

export const CreditScoringSkeleton: React.FC = () => (
  <div className="grok-card p-6 space-y-6">
    <div className="flex items-center justify-between">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-6 w-24 rounded-full" />
    </div>
    <div className="flex justify-center">
      <Skeleton className="h-40 w-40 rounded-full" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2 p-4 bg-muted/10 rounded-lg">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      ))}
    </div>
  </div>
);

export const ServiceMarketplaceSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-10 w-32 rounded-md" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="grok-card p-6 space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="h-20 w-full" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ReputationGraphSkeleton: React.FC = () => (
  <div className="grok-card p-6 space-y-6">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-64 w-full rounded-lg" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2 text-center">
          <Skeleton className="h-8 w-16 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  </div>
);
