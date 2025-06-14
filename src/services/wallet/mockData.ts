
import type { Token, ChainConfig } from './types';

// Mock ERC20 ABI for demo purposes
export const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
];

// Default tokens available in the wallet
export const DEFAULT_TOKENS: Token[] = [
  {
    symbol: "USDC",
    name: "USD Coin",
    address: "0xA0b86a33E6D1E1E1E1E1E1E1E1E1E1E1E1E1E1E1",
    decimals: 6,
    balance: "0",
    logoUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    balance: "0",
    logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    address: "0x0000000000000000000000000000000000000000", // Native ETH
    decimals: 18,
    balance: "0",
    logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
  },
  {
    symbol: "WETH",
    name: "Wrapped Ethereum",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
    balance: "0",
    logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
  }
];

// Supported blockchain networks
export const SUPPORTED_CHAINS: ChainConfig[] = [
  {
    id: 1,
    name: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrl: "https://mainnet.infura.io/v3/your-project-id",
    blockExplorer: "https://etherscan.io",
    logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
  },
  {
    id: 137,
    name: "Polygon",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrl: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com",
    logoUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png"
  },
  {
    id: 56,
    name: "BNB Smart Chain",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrl: "https://bsc-dataseed.binance.org",
    blockExplorer: "https://bscscan.com",
    logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png"
  },
  {
    id: 43114,
    name: "Avalanche",
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18
    },
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    blockExplorer: "https://snowtrace.io",
    logoUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png"
  },
  {
    id: 42161,
    name: "Arbitrum One",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    blockExplorer: "https://arbiscan.io",
    logoUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.png"
  },
  {
    id: 10,
    name: "Optimism",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrl: "https://mainnet.optimism.io",
    blockExplorer: "https://optimistic.etherscan.io",
    logoUrl: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png"
  }
];
