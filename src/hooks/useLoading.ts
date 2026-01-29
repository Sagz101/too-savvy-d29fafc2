import { useState, useEffect, useCallback } from 'react';

interface UseLoadingOptions {
  initialLoading?: boolean;
  minLoadingTime?: number; // Minimum time to show skeleton (prevents flash)
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const { initialLoading = true, minLoadingTime = 300 } = options;
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);

  const startLoading = useCallback(() => {
    setLoadStartTime(Date.now());
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    if (loadStartTime) {
      const elapsed = Date.now() - loadStartTime;
      const remaining = Math.max(0, minLoadingTime - elapsed);
      
      setTimeout(() => {
        setIsLoading(false);
        setLoadStartTime(null);
      }, remaining);
    } else {
      setIsLoading(false);
    }
  }, [loadStartTime, minLoadingTime]);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading
  };
};

// Hook for simulating initial page load
export const usePageLoading = (delay: number = 800) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
};

// Hook for data fetching with loading state
export const useAsyncLoading = <T>(
  asyncFn: () => Promise<T>,
  deps: React.DependencyList = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    asyncFn()
      .then((result) => {
        if (mounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          // Small delay to prevent flash
          setTimeout(() => setIsLoading(false), 300);
        }
      });

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, isLoading, error };
};
