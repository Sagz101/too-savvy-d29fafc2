import React from 'react';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

// Card skeleton for product/content cards
export const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("grok-card p-6 space-y-4", className)}>
    <Skeleton className="h-40 w-full rounded-lg" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-16 rounded-full" />
    </div>
    <Skeleton className="h-10 w-full rounded-md" />
  </div>
);

// Grid of card skeletons
export const CardGridSkeleton: React.FC<{ count?: number; className?: string }> = ({ 
  count = 6, 
  className 
}) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

// List item skeleton
export const ListItemSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex items-center gap-4 p-4 grok-card", className)}>
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-3 w-2/3" />
    </div>
    <Skeleton className="h-8 w-20 rounded-md" />
  </div>
);

// List skeleton
export const ListSkeleton: React.FC<{ count?: number; className?: string }> = ({ 
  count = 5, 
  className 
}) => (
  <div className={cn("space-y-3", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <ListItemSkeleton key={i} />
    ))}
  </div>
);

// Stats skeleton
export const StatsSkeleton: React.FC<{ count?: number; className?: string }> = ({ 
  count = 4, 
  className 
}) => (
  <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="grok-card p-4 text-center space-y-2">
        <Skeleton className="h-8 w-16 mx-auto" />
        <Skeleton className="h-3 w-20 mx-auto" />
      </div>
    ))}
  </div>
);

// Hero section skeleton
export const HeroSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("space-y-6 py-20 px-6", className)}>
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
    </div>
    <div className="flex justify-center gap-4">
      <Skeleton className="h-12 w-32 rounded-md" />
      <Skeleton className="h-12 w-32 rounded-md" />
    </div>
  </div>
);

// Profile skeleton
export const ProfileSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("grok-card p-6", className)}>
    <div className="flex items-start gap-6">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full max-w-md" />
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

// Table skeleton
export const TableSkeleton: React.FC<{ rows?: number; cols?: number; className?: string }> = ({ 
  rows = 5, 
  cols = 4, 
  className 
}) => (
  <div className={cn("grok-card overflow-hidden", className)}>
    {/* Header */}
    <div className="flex gap-4 p-4 border-b border-border/50">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex gap-4 p-4 border-b border-border/20 last:border-0">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-4 flex-1" />
        ))}
      </div>
    ))}
  </div>
);

// Dashboard skeleton
export const DashboardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("space-y-6", className)}>
    <StatsSkeleton />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="grok-card p-6 space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="grok-card p-6 space-y-3">
          <Skeleton className="h-5 w-24" />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </div>
      </div>
    </div>
  </div>
);

// Video card skeleton
export const VideoCardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("grok-card overflow-hidden", className)}>
    <div className="relative">
      <Skeleton className="aspect-video w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    </div>
    <div className="p-4 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <div className="flex items-center gap-4 pt-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  </div>
);

// Chat/Conversation skeleton
export const ConversationSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("space-y-4 p-4", className)}>
    {/* Incoming message */}
    <div className="flex gap-3">
      <Skeleton className="h-8 w-8 rounded-full shrink-0" />
      <div className="space-y-1">
        <Skeleton className="h-16 w-48 rounded-lg rounded-tl-none" />
        <Skeleton className="h-2 w-12" />
      </div>
    </div>
    {/* Outgoing message */}
    <div className="flex gap-3 justify-end">
      <div className="space-y-1 items-end flex flex-col">
        <Skeleton className="h-12 w-36 rounded-lg rounded-tr-none" />
        <Skeleton className="h-2 w-12" />
      </div>
    </div>
    {/* Another incoming */}
    <div className="flex gap-3">
      <Skeleton className="h-8 w-8 rounded-full shrink-0" />
      <div className="space-y-1">
        <Skeleton className="h-20 w-56 rounded-lg rounded-tl-none" />
        <Skeleton className="h-2 w-12" />
      </div>
    </div>
  </div>
);

// Form skeleton
export const FormSkeleton: React.FC<{ fields?: number; className?: string }> = ({ 
  fields = 4, 
  className 
}) => (
  <div className={cn("grok-card p-6 space-y-6", className)}>
    <Skeleton className="h-6 w-48" />
    {Array.from({ length: fields }).map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    ))}
    <Skeleton className="h-10 w-32 rounded-md" />
  </div>
);

// Page skeleton wrapper with fade-in animation
export const PageSkeleton: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  isLoading?: boolean;
}> = ({ children, className, isLoading = true }) => {
  if (!isLoading) return null;
  
  return (
    <div className={cn("animate-pulse", className)}>
      {children}
    </div>
  );
};
