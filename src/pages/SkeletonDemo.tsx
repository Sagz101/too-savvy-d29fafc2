import React, { useState } from 'react';
import { Skeleton, SkeletonText, SkeletonCircle } from '@/components/ui/skeleton';
import {
  CardGridSkeleton, StatsSkeleton, ProfileSkeleton, ListSkeleton, TableSkeleton,
  DashboardSkeleton, VideoCardSkeleton, ConversationSkeleton, FormSkeleton,
} from '@/components/ui/skeleton-patterns';
import { Button } from '@/components/ui/button';
import { usePageLoading } from '@/hooks/useLoading';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';

const SkeletonDemo = () => {
  const isLoading = usePageLoading(2000);
  const [showSkeletons, setShowSkeletons] = useState(true);

  return (
    <CosmicPageLayout>
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Skeleton Loading Demo</h1>
            <p className="text-white/60">Testing shimmer animations and loading states</p>
            <Button onClick={() => setShowSkeletons(!showSkeletons)}>
              {showSkeletons ? 'Hide Skeletons' : 'Show Skeletons'}
            </Button>
          </div>

          {showSkeletons && (
            <div className="space-y-16">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Base Skeleton Variants</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(['shimmer', 'pulse', 'default'] as const).map(variant => (
                    <div key={variant} className="space-y-2">
                      <p className="text-sm text-white/60 capitalize">{variant}</p>
                      <Skeleton variant={variant} className="h-20 w-full" />
                    </div>
                  ))}
                </div>
              </section>
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Text & Circle Skeletons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2"><p className="text-sm text-white/60">SkeletonText (3 lines)</p><SkeletonText lines={3} /></div>
                  <div className="space-y-2"><p className="text-sm text-white/60">SkeletonCircle (all sizes)</p><div className="flex items-center gap-4"><SkeletonCircle size="sm" /><SkeletonCircle size="md" /><SkeletonCircle size="lg" /><SkeletonCircle size="xl" /></div></div>
                </div>
              </section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Card Skeletons</h2><CardGridSkeleton count={3} /></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Stats Skeleton</h2><StatsSkeleton count={4} /></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Profile Skeleton</h2><ProfileSkeleton /></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">List Skeleton</h2><ListSkeleton count={3} /></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Table Skeleton</h2><TableSkeleton rows={4} cols={4} /></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Video Card Skeleton</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><VideoCardSkeleton /><VideoCardSkeleton /><VideoCardSkeleton /></div></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Conversation Skeleton</h2><div className="max-w-md border border-white/10 rounded-lg"><ConversationSkeleton /></div></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Form Skeleton</h2><div className="max-w-md"><FormSkeleton fields={3} /></div></section>
              <section className="space-y-4"><h2 className="text-2xl font-semibold text-white">Dashboard Skeleton</h2><DashboardSkeleton /></section>
            </div>
          )}
        </div>
      </div>
    </CosmicPageLayout>
  );
};

export default SkeletonDemo;
