
interface WindowEthereum extends Window {
  ethereum?: {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    isRabby?: boolean;
    providers?: Array<{
      isMetaMask?: boolean;
      isCoinbaseWallet?: boolean;
      isRabby?: boolean;
    }>;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
  };
}

declare let window: WindowEthereum;

export class WalletConflictResolver {
  static detectWallets(): string[] {
    const wallets: string[] = [];
    
    if (typeof window === 'undefined' || !window.ethereum) {
      return wallets;
    }

    const { ethereum } = window;

    // Check for multiple providers
    if (ethereum.providers && Array.isArray(ethereum.providers)) {
      ethereum.providers.forEach(provider => {
        if (provider.isMetaMask) wallets.push('MetaMask');
        if (provider.isCoinbaseWallet) wallets.push('Coinbase Wallet');
        if (provider.isRabby) wallets.push('Rabby');
      });
    } else {
      // Single provider detection
      if (ethereum.isMetaMask) wallets.push('MetaMask');
      if (ethereum.isCoinbaseWallet) wallets.push('Coinbase Wallet');
      if (ethereum.isRabby) wallets.push('Rabby');
    }

    return wallets;
  }

  static async getPreferredProvider(preferredWallet?: string) {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('No Ethereum provider found');
    }

    const { ethereum } = window;

    // If there are multiple providers, try to select the preferred one
    if (ethereum.providers && Array.isArray(ethereum.providers)) {
      if (preferredWallet) {
        const provider = ethereum.providers.find(p => {
          switch (preferredWallet.toLowerCase()) {
            case 'metamask':
              return p.isMetaMask;
            case 'coinbase':
            case 'coinbase wallet':
              return p.isCoinbaseWallet;
            case 'rabby':
              return p.isRabby;
            default:
              return false;
          }
        });

        if (provider) {
          return provider;
        }
      }

      // Return the first available provider if no preference or preferred not found
      return ethereum.providers[0];
    }

    // Return the single provider
    return ethereum;
  }

  static showWalletConflictWarning(detectedWallets: string[]): void {
    if (detectedWallets.length > 1) {
      console.warn(
        `Multiple wallets detected: ${detectedWallets.join(', ')}. ` +
        'This may cause conflicts. Consider disabling unused wallet extensions.'
      );
    }
  }
}
