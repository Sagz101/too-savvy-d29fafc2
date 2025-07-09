
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
  walletConnectWallet,
  safeWallet,
  trustWallet,
  phantomWallet,
} from '@rainbow-me/rainbowkit/wallets';

export const config = getDefaultConfig({
  appName: 'T00 Savvy - Web3 Creator Platform',
  projectId: '2f5a2345b67891c34d5e67f890a12b3c', // Public project ID for T00 Savvy
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NODE_ENV === 'development' ? [sepolia] : []),
  ],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        coinbaseWallet,
        walletConnectWallet,
        safeWallet,
      ],
    },
    {
      groupName: 'More Options',
      wallets: [
        trustWallet,
        phantomWallet,
      ],
    },
  ],
  ssr: false,
});
