/**
 * DimingaCreatorNFT — ABI, addresses, and helpers.
 *
 * After deploying with Hardhat to Polygon (or other chains),
 * paste the contract address into DIMINGA_NFT_ADDRESSES below.
 */

export const DIMINGA_NFT_ABI = [
  // ── Minting ────────────────────────────────────────────────────────────
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "uri", type: "string" },
      { name: "contentType", type: "string" },
      { name: "royaltyBps", type: "uint96" },
      { name: "gated", type: "bool" },
    ],
    name: "mint",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },

  // ── Token-gating ───────────────────────────────────────────────────────
  {
    inputs: [
      { name: "tokenId", type: "uint256" },
      { name: "user", type: "address" },
    ],
    name: "canAccess",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },

  // ── Read functions ─────────────────────────────────────────────────────
  {
    inputs: [{ name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "tokenId", type: "uint256" }],
    name: "contentOf",
    outputs: [
      { name: "creator", type: "address" },
      { name: "contentType", type: "string" },
      { name: "mintedAt", type: "uint256" },
      { name: "gated", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "holder", type: "address" }],
    name: "tokensOfOwner",
    outputs: [{ name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "creator", type: "address" }],
    name: "tokensByCreator",
    outputs: [{ name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintFee",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openMinting",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "creator", type: "address" }],
    name: "approvedCreator",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },

  // ── Admin ──────────────────────────────────────────────────────────────
  {
    inputs: [{ name: "fee", type: "uint256" }],
    name: "setMintFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "open", type: "bool" }],
    name: "setOpenMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "creator", type: "address" },
      { name: "approved", type: "bool" },
    ],
    name: "setCreatorApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  // ── Events ─────────────────────────────────────────────────────────────
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "tokenId", type: "uint256" },
      { indexed: true, name: "creator", type: "address" },
      { indexed: false, name: "contentType", type: "string" },
      { indexed: false, name: "tokenURI", type: "string" },
      { indexed: false, name: "gated", type: "bool" },
    ],
    name: "ContentMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "newFee", type: "uint256" }],
    name: "MintFeeUpdated",
    type: "event",
  },
] as const;

/**
 * Deployed contract addresses by chain ID.
 * ⚠️  Replace with actual addresses after deployment.
 *
 * Deploy order:
 *   1. Polygon Mumbai (80001) — lowest fees, test first
 *   2. Polygon mainnet (137)
 *   3. Base (8453)
 *   4. Ethereum mainnet (1) — optional, high gas
 */
export const DIMINGA_NFT_ADDRESSES: Record<number, `0x${string}`> = {
  // 80001: "0x...",  // Polygon Mumbai testnet — deploy here first
  // 137:   "0x...",  // Polygon mainnet
  // 8453:  "0x...",  // Base
  // 1:     "0x...",  // Ethereum mainnet
} as const;

/**
 * Get the deployed contract address for a given chain.
 * Returns undefined if the contract isn't deployed on that chain.
 */
export const getDimingaContractAddress = (
  chainId: number
): `0x${string}` | undefined => {
  return DIMINGA_NFT_ADDRESSES[chainId];
};

/** Default mint fee in wei (0.001 ETH / MATIC) — matches contract default */
export const DEFAULT_MINT_FEE = BigInt("1000000000000000"); // 0.001 ether
