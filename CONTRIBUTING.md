# Contributing to T00 Savvy

## Development Workflow

### Modified GitHub Flow with Environment Branches

T00 Savvy uses a modified GitHub Flow with environment branches optimized for Web3 development, multi-chain deployments, and continuous delivery of creator tools.

#### Branch Structure

1. **main**: Production-ready code deployed to mainnet (Ethereum, Polygon, Arbitrum)
2. **develop**: Integration branch for feature testing and multi-chain compatibility
3. **staging**: Pre-production environment for QA and testnet validation
4. **feature/***: Short-lived branches for individual features and modules
5. **hotfix/***: Emergency fixes deployed directly to production
6. **release/***: Major version releases with final polishing

#### Why This Strategy?

- **Simplicity**: Lightweight workflow supporting rapid creator onboarding
- **Continuous Delivery**: Supports real-time features (live streaming, NeuraSocial)
- **Web3-Specific**: Environment branches enable blockchain testing across networks
- **Security**: CertiK-audited smart contracts require rigorous testing
- **Collaboration**: Pull request model fosters community contributions and DAO governance

### Branch Workflow

#### 1. Feature Development
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/video-nft-minting

# For Web3-specific features, use descriptive names:
# feature/threaditor-fact-checking
# feature/nft-minting-erc721m
# feature/neurasocial-web2-integration
# bugfix/smart-contract-gas-optimization
```

#### 2. Hotfix Process
```bash
# For urgent production issues
git checkout main
git pull origin main
git checkout -b hotfix/token-gate-bug
# Fix, test, and merge to both main and develop
```

#### 3. Release Process
```bash
# For major updates (new Creator Studio modules)
git checkout develop
git checkout -b release/v1.2.0
# Final polishing and testing
# Merge to main and tag version
```

### Development Process

#### Complete Workflow Steps

1. **Create Feature Branch**: From `develop` for new features
2. **Develop & Commit**: Frequent commits with descriptive messages
   ```bash
   git commit -m "Add ERC-721M minting logic for Video NFTs"
   git commit -m "Implement oracle integration for Threaditor fact-checking"
   ```
3. **Push & PR**: Create pull request to `develop`
4. **Code Review**: Team reviews for security and Web3 best practices
5. **Test in Staging**: Merge `develop` → `staging` for QA
6. **Testnet Validation**: Deploy to testnets (Polygon Mumbai, Arbitrum Goerli)
7. **Production Deploy**: Merge `staging` → `main` → deploy to mainnet
8. **Release Tagging**: Tag production releases (v1.2.0)

#### Environment Flow
```
feature/branch → develop → staging → main (production)
                     ↓         ↓        ↓
                 Integration  QA/Test  Mainnet
```

### Code Quality Standards

#### Linting
- ESLint runs automatically on pre-commit hooks
- Fix linting issues: `npm run lint:fix`
- All TypeScript files must pass linting

#### Testing
- Write unit tests for new components and utilities
- Run tests: `npm test`
- Aim for 80%+ test coverage
- Tests run automatically in CI/CD

#### Web3 Security
- Validate all Web3 inputs and transactions
- Use secure libraries (ethers.js, wagmi)
- Test on testnets before mainnet deployment
- Follow smart contract security best practices

### Pull Request Guidelines

1. **Branch Protection**: Direct pushes to `main` are blocked
2. **Review Required**: At least one reviewer must approve
3. **CI Checks**: All tests and linting must pass
4. **Clear Description**: Explain what your PR does and why

### Local Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

### Web3 Development Notes

#### Multi-Chain Testing Strategy
- **Staging Environment**: Test on testnets first
  - Polygon Mumbai (~0.0014 MATIC gas)
  - Arbitrum Goerli (~0.0000 ARB gas)
  - Ethereum Sepolia (higher gas for final validation)
- **Production**: Deploy to mainnets after staging validation
- **Gas Optimization**: Validate costs before production deployment

#### Smart Contract Development
- **Feature Branches**: Create separate branches for contract updates
- **Testing**: Use Hardhat/Foundry in staging environment
- **Security**: Run CertiK/Slither analysis before merging to main
- **Audit Trail**: Document all contract changes for DAO governance

#### Web3-Specific Branch Naming
```bash
feature/erc-2981-royalty-split      # NFT royalty implementation
feature/dao-governance-voting       # DAO voting mechanisms  
feature/ipfs-metadata-storage       # Decentralized storage
bugfix/gas-optimization-minting     # Performance improvements
hotfix/wallet-connection-issue      # Critical user-facing fixes
```

#### Environment-Specific Configurations
- **Develop**: Local/testnet configurations
- **Staging**: Testnet with production-like setup  
- **Main**: Mainnet configurations with live contracts

### Troubleshooting

- **Linting Errors**: Run `npm run lint:fix` to auto-fix issues
- **Test Failures**: Check test setup and mocking
- **Build Issues**: Ensure all dependencies are installed
- **Web3 Issues**: Verify wallet connections and network settings

### Resources

- [ESLint TypeScript Guide](https://typescript-eslint.io/)
- [Jest Testing Framework](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Web3 Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)