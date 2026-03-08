
import React, { Component, ErrorInfo } from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/config/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

// Catch unhandled wallet promise rejections globally to prevent blank screens
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const msg = event.reason?.message || String(event.reason || '');
    if (
      msg.includes('MetaMask') ||
      msg.includes('wallet') ||
      msg.includes('connector') ||
      msg.includes('eth_') ||
      msg.includes('WalletConnect') ||
      msg.includes('provider')
    ) {
      console.warn('[Web3] Suppressed wallet error:', msg);
      event.preventDefault();
    }
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const msg = (error as Error)?.message || '';
        // Don't retry wallet-related query failures
        if (msg.includes('MetaMask') || msg.includes('wallet') || msg.includes('connector')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

interface Web3ErrorBoundaryState {
  hasError: boolean;
}

class Web3ErrorBoundary extends Component<
  { children: React.ReactNode },
  Web3ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): Web3ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('[Web3] Provider error caught by boundary:', error.message, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Render children without Web3 context rather than a blank screen
      return this.props.children;
    }
    return this.props.children;
  }
}

interface Web3ProviderProps {
  children: React.ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <Web3ErrorBoundary>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: '#06b6d4',
              accentColorForeground: 'white',
              borderRadius: 'medium',
              fontStack: 'system',
              overlayBlur: 'small',
            })}
            modalSize="compact"
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Web3ErrorBoundary>
  );
};
