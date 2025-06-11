
import { Token, VaultInfo, GroupWallet, SavingsCircle, BarterListing, CreditScore, ServiceItem, ReputationStats, ImpactProject, ImpactBond, RoyaltyStream, License, ProvenanceNode, CrossPlatformIdentity, FanParticipationToken, CreatorFanBond, AICollaboration, ChainConfig } from './types';

// Sample tokens - in a real app, these would come from a token list or API
export const DEFAULT_TOKENS: Token[] = [
  {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Ethereum Mainnet
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    decimals: 6
  },
  {
    name: 'Euro Coin',
    symbol: 'EUROC',
    address: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c', // Ethereum Mainnet
    logo: 'https://cryptologos.cc/logos/euro-coin-euroc-logo.png',
    decimals: 6
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000', // Native ETH
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    decimals: 18
  }
];

export const SUPPORTED_CHAINS: ChainConfig[] = [
  {
    id: 1,
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    rpcUrl: 'https://mainnet.infura.io/v3/your-api-key',
    explorerUrl: 'https://etherscan.io'
  },
  {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    explorerUrl: 'https://polygonscan.com'
  },
  {
    id: 42161,
    name: 'Arbitrum',
    symbol: 'ARB',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorerUrl: 'https://arbiscan.io'
  }
];

// Basic ERC20 ABI for token interactions
export const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function name() view returns (string)"
];
