// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title DimingaCreatorNFT
 * @notice ERC-721 NFT contract for Diminga creator content.
 *         Supports royalties (EIP-2981), token-gating, and
 *         per-creator minting controls.
 */
contract DimingaCreatorNFT is ERC721URIStorage, ERC721Royalty, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;

    // ── Storage ─────────────────────────────────────────────────────────────

    Counters.Counter private _tokenIds;

    /// @notice Flat mint fee (in wei) kept by the platform
    uint256 public mintFee = 0.001 ether;

    /// @notice Royalty basis points (500 = 5%) applied at secondary sales
    uint96 public defaultRoyaltyBps = 1000; // 10%

    struct ContentToken {
        address creator;       // original creator wallet
        string  contentType;   // "article" | "video" | "podcast" | "nft"
        uint256 mintedAt;
        bool    gated;         // true → holder-only content
    }

    mapping(uint256 => ContentToken) public contentOf;

    /// @notice Tracks all token IDs minted by a given creator
    mapping(address => uint256[]) public tokensByCreator;

    /// @notice Whitelist of approved creators (optional — set to false for open minting)
    mapping(address => bool) public approvedCreator;
    bool public openMinting = true;

    // ── Events ───────────────────────────────────────────────────────────────

    event ContentMinted(
        uint256 indexed tokenId,
        address indexed creator,
        string  contentType,
        string  tokenURI,
        bool    gated
    );
    event MintFeeUpdated(uint256 newFee);
    event CreatorApproved(address creator, bool approved);
    event OpenMintingUpdated(bool open);

    // ── Constructor ──────────────────────────────────────────────────────────

    constructor() ERC721("Diminga Creator NFT", "DCN") Ownable(msg.sender) {}

    // ── Minting ──────────────────────────────────────────────────────────────

    /**
     * @notice Mint a new creator NFT.
     * @param to          Recipient of the token (usually msg.sender)
     * @param uri         IPFS / Arweave metadata URI (ERC-721 standard)
     * @param contentType Human-readable content category
     * @param royaltyBps  Creator royalty in basis points (0–10000)
     * @param gated       Whether the content is token-gated
     */
    function mint(
        address to,
        string  calldata uri,
        string  calldata contentType,
        uint96  royaltyBps,
        bool    gated
    ) external payable nonReentrant returns (uint256) {
        require(msg.value >= mintFee, "DimingaNFT: insufficient mint fee");
        require(royaltyBps <= 1500, "DimingaNFT: royalty exceeds 15%");

        if (!openMinting) {
            require(approvedCreator[msg.sender], "DimingaNFT: not an approved creator");
        }

        _tokenIds.increment();
        uint256 newId = _tokenIds.current();

        _safeMint(to, newId);
        _setTokenURI(newId, uri);
        _setTokenRoyalty(newId, msg.sender, royaltyBps);

        contentOf[newId] = ContentToken({
            creator:     msg.sender,
            contentType: contentType,
            mintedAt:    block.timestamp,
            gated:       gated
        });

        tokensByCreator[msg.sender].push(newId);

        // Return excess payment
        if (msg.value > mintFee) {
            (bool ok, ) = payable(msg.sender).call{value: msg.value - mintFee}("");
            require(ok, "DimingaNFT: refund failed");
        }

        emit ContentMinted(newId, msg.sender, contentType, uri, gated);
        return newId;
    }

    // ── Token-gating ─────────────────────────────────────────────────────────

    /**
     * @notice Check if an address may access gated content for a given token.
     *         Holders of the token, the original creator, or the contract owner
     *         are granted access.
     */
    function canAccess(uint256 tokenId, address user) external view returns (bool) {
        ContentToken memory ct = contentOf[tokenId];
        if (!ct.gated) return true;
        return (
            ownerOf(tokenId) == user ||
            ct.creator       == user ||
            owner()          == user
        );
    }

    /**
     * @notice Returns all token IDs owned by `holder`.
     *         Gas-heavy for large collections — use off-chain indexing in prod.
     */
    function tokensOfOwner(address holder) external view returns (uint256[] memory) {
        uint256 bal = balanceOf(holder);
        uint256[] memory ids = new uint256[](bal);
        uint256 idx = 0;
        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (_exists(i) && ownerOf(i) == holder) {
                ids[idx++] = i;
            }
        }
        return ids;
    }

    // ── Admin ────────────────────────────────────────────────────────────────

    function setMintFee(uint256 fee) external onlyOwner {
        mintFee = fee;
        emit MintFeeUpdated(fee);
    }

    function setOpenMinting(bool open) external onlyOwner {
        openMinting = open;
        emit OpenMintingUpdated(open);
    }

    function setCreatorApproval(address creator, bool approved) external onlyOwner {
        approvedCreator[creator] = approved;
        emit CreatorApproved(creator, approved);
    }

    function withdraw() external onlyOwner nonReentrant {
        uint256 bal = address(this).balance;
        require(bal > 0, "DimingaNFT: nothing to withdraw");
        (bool ok, ) = payable(owner()).call{value: bal}("");
        require(ok, "DimingaNFT: withdraw failed");
    }

    // ── ERC-165 / Override resolution ────────────────────────────────────────

    function tokenURI(uint256 tokenId)
        public view override(ERC721, ERC721URIStorage) returns (string memory)
    { return super.tokenURI(tokenId); }

    function supportsInterface(bytes4 interfaceId)
        public view override(ERC721URIStorage, ERC721Royalty) returns (bool)
    { return super.supportsInterface(interfaceId); }

    function _burn(uint256 tokenId)
        internal override(ERC721, ERC721URIStorage, ERC721Royalty)
    { super._burn(tokenId); }
}
