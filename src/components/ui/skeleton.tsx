import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'shimmer' | 'pulse';
}

function Skeleton({
  className,
  variant = 'shimmer',
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-muted relative overflow-hidden",
        variant === 'pulse' && "animate-pulse",
        variant === 'shimmer' && "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        variant === 'default' && "animate-pulse",
        className
      )}
      {...props}
    />
  )
}

// Text skeleton with multiple lines
function SkeletonText({ 
  lines = 3, 
  className,
  ...props 
}: { lines?: number } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )} 
        />
      ))}
    </div>
  )
}

// Circle skeleton for avatars
function SkeletonCircle({ 
  size = 'md',
  className,
  ...props 
}: { size?: 'sm' | 'md' | 'lg' | 'xl' } & React.HTMLAttributes<HTMLDivElement>) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  return (
    <Skeleton 
      className={cn("rounded-full", sizes[size], className)} 
      {...props} 
    />
  )
}

export { Skeleton, SkeletonText, SkeletonCircle }
