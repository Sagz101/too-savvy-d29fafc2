import React, { useState } from 'react';
import { Skeleton, SkeletonText, SkeletonCircle } from '@/components/ui/skeleton';
import {
  CardSkeleton,
  CardGridSkeleton,
  ListSkeleton,
  StatsSkeleton,
  ProfileSkeleton,
  TableSkeleton,
  DashboardSkeleton,
  VideoCardSkeleton,
  ConversationSkeleton,
  FormSkeleton,
} from '@/components/ui/skeleton-patterns';
import { Button } from '@/components/ui/button';
import { usePageLoading } from '@/hooks/useLoading';

const SkeletonDemo = () => {
  const isLoading = usePageLoading(2000);
  const [showSkeletons, setShowSkeletons] = useState(true);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Skeleton Loading Demo</h1>
          <p className="text-muted-foreground">Testing shimmer animations and loading states</p>
          <Button onClick={() => setShowSkeletons(!showSkeletons)}>
            {showSkeletons ? 'Hide Skeletons' : 'Show Skeletons'}
          </Button>
        </div>

        {showSkeletons && (
          <div className="space-y-16">
            {/* Base Skeleton Variants */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Base Skeleton Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Shimmer (default)</p>
                  <Skeleton variant="shimmer" className="h-20 w-full" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Pulse</p>
                  <Skeleton variant="pulse" className="h-20 w-full" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Default</p>
                  <Skeleton variant="default" className="h-20 w-full" />
                </div>
              </div>
            </section>

            {/* Text and Circle Skeletons */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Text & Circle Skeletons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">SkeletonText (3 lines)</p>
                  <SkeletonText lines={3} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">SkeletonCircle (all sizes)</p>
                  <div className="flex items-center gap-4">
                    <SkeletonCircle size="sm" />
                    <SkeletonCircle size="md" />
                    <SkeletonCircle size="lg" />
                    <SkeletonCircle size="xl" />
                  </div>
                </div>
              </div>
            </section>

            {/* Card Skeletons */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Card Skeletons</h2>
              <CardGridSkeleton count={3} />
            </section>

            {/* Stats Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Stats Skeleton</h2>
              <StatsSkeleton count={4} />
            </section>

            {/* Profile Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Profile Skeleton</h2>
              <ProfileSkeleton />
            </section>

            {/* List Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">List Skeleton</h2>
              <ListSkeleton count={3} />
            </section>

            {/* Table Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Table Skeleton</h2>
              <TableSkeleton rows={4} cols={4} />
            </section>

            {/* Video Card Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Video Card Skeleton</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
              </div>
            </section>

            {/* Conversation Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Conversation Skeleton</h2>
              <div className="max-w-md border border-border rounded-lg">
                <ConversationSkeleton />
              </div>
            </section>

            {/* Form Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Form Skeleton</h2>
              <div className="max-w-md">
                <FormSkeleton fields={3} />
              </div>
            </section>

            {/* Dashboard Skeleton */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Dashboard Skeleton</h2>
              <DashboardSkeleton />
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkeletonDemo;
