# Branch Protection Rules Configuration

These rules should be configured in your GitHub repository settings under "Branches".

## Main Branch Protection

**Branch name pattern**: `main`

### Required Settings:
- ✅ Require a pull request before merging
  - ✅ Require approvals: 2
  - ✅ Dismiss stale PR approvals when new commits are pushed
  - ✅ Require review from code owners
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - Required status checks:
    - `Code Quality & Linting`
    - `test`
    - `build`
    - `security-audit` (for production)
- ✅ Require conversation resolution before merging
- ✅ Restrict pushes that create files that exceed 100MB
- ✅ Require signed commits
- 🔒 Restrict who can push to matching branches
  - Include administrators: ❌
  - Allow specified users, teams, or apps: Repository admins only

## Develop Branch Protection

**Branch name pattern**: `develop`

### Required Settings:
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1
  - ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - Required status checks:
    - `Code Quality & Linting`
    - `test`
    - `build`
- ✅ Require conversation resolution before merging
- 🔒 Allow force pushes: ❌

## Staging Branch Protection

**Branch name pattern**: `staging`

### Required Settings:
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1
- ✅ Require status checks to pass before merging
  - Required status checks:
    - `test-and-deploy-staging`
- ✅ Allow auto-merge

## Release Branch Protection

**Branch name pattern**: `release/*`

### Required Settings:
- ✅ Require a pull request before merging (to main)
  - ✅ Require approvals: 2
  - ✅ Require review from code owners
- ✅ Require status checks to pass before merging
  - Required status checks:
    - `prepare-release`
    - `validate-release`
- ✅ Require conversation resolution before merging

## Web3-Specific Considerations

### Smart Contract Changes
- Any changes to files in `contracts/` or `src/contracts/` require:
  - Security audit approval
  - Gas optimization review
  - Multi-chain compatibility verification

### Critical Web3 Files
Files requiring additional scrutiny:
- `src/contracts/*` - Smart contract ABIs and addresses
- `src/hooks/useNFTMinting.ts` - NFT minting logic
- `src/services/wallet/*` - Wallet integration
- `supabase/functions/*` - Edge functions handling payments

### Deployment Environments
- **develop**: Testnet deployments (Polygon Mumbai, Arbitrum Goerli)
- **staging**: Pre-production testnet with production-like setup
- **main**: Mainnet deployments (Ethereum, Polygon, Arbitrum)

## Setup Instructions

1. Go to GitHub Repository Settings
2. Navigate to "Branches" in the left sidebar
3. Click "Add rule" for each branch pattern
4. Configure settings as specified above
5. Ensure required status checks match your CI/CD workflow names

## Additional Security Measures

### Rulesets (GitHub Enterprise)
Consider creating repository rulesets for:
- File path restrictions on smart contract files
- Required commit signing
- Deployment protection rules

### Environment Protection
Configure environment protection rules in repository settings:
- **staging**: Require deployment approval from QA team
- **production**: Require deployment approval from 2+ maintainers
- Set environment secrets for network configurations