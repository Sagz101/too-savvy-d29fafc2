
// Too Savvy ERC-721M Contract ABI (simplified for core functions)
export const TOO_SAVVY_NFT_ABI = [
  {
    "inputs": [
      {"name": "to", "type": "address"},
      {"name": "quantity", "type": "uint256"},
      {"name": "data", "type": "bytes"}
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"name": "tokenId", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintPrice",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract addresses (replace with actual deployed addresses)
export const TOO_SAVVY_NFT_ADDRESSES = {
  1: '0x...', // Mainnet
  137: '0x...', // Polygon
  11155111: '0x...', // Sepolia testnet
} as const;

export const getContractAddress = (chainId: number): string => {
  return TOO_SAVVY_NFT_ADDRESSES[chainId as keyof typeof TOO_SAVVY_NFT_ADDRESSES] || '';
};
