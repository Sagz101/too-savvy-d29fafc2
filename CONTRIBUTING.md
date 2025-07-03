# Contributing to T00 Savvy

## Development Workflow

### Git Branching Strategy

We use a feature branch workflow to maintain code quality and enable safe collaboration:

1. **Main Branch**: Contains production-ready code
2. **Develop Branch**: Integration branch for features  
3. **Feature Branches**: Individual features and bug fixes

### Creating a Feature Branch

```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b bugfix/issue-description
```

### Development Process

1. **Write Code**: Implement your feature or fix
2. **Lint**: Code is automatically linted on commit via Husky
3. **Test**: Write tests for new functionality
4. **Commit**: Use descriptive commit messages
5. **Push**: Push your branch to remote
6. **Pull Request**: Create a PR to `develop` branch

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

- **Multi-chain Support**: Test on Ethereum, Polygon, and Arbitrum
- **Gas Optimization**: Consider transaction costs (~$0.002 on L2s)
- **Wallet Integration**: Use RainbowKit for wallet connections
- **NFT Standards**: Follow ERC-721M for gas-efficient minting
- **IPFS Storage**: Use for decentralized metadata storage

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