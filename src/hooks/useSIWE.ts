import { useState, useCallback } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { SiweMessage } from 'siwe';
import { toast } from 'sonner';

export const useSIWE = () => {
  const { address, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createSiweMessage = useCallback(() => {
    if (!address || !chainId) return null;
    
    const domain = window.location.host;
    const origin = window.location.origin;
    const statement = 'Sign in with Ethereum to Renegade. This will not trigger a blockchain transaction or cost any gas fees.';
    
    const siweMessage = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: '1',
      chainId,
      nonce: generateNonce(),
      issuedAt: new Date().toISOString(),
      expirationTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
    });
    
    return siweMessage;
  }, [address, chainId]);

  const signIn = useCallback(async () => {
    if (!address) {
      toast.error('Please connect your wallet first');
      return false;
    }

    setIsLoading(true);
    
    try {
      const siweMessage = createSiweMessage();
      if (!siweMessage) {
        throw new Error('Could not create SIWE message');
      }

      const message = siweMessage.prepareMessage();
      const signature = await signMessageAsync({ 
        message,
        account: address,
      });
      
      // Store auth state (in a real app, you'd verify this on your backend)
      const authData = {
        message: siweMessage,
        signature,
        address,
        signedAt: Date.now(),
      };
      
      localStorage.setItem('diminga_siwe_auth', JSON.stringify(authData));
      setIsSignedIn(true);
      toast.success('Successfully signed in with Ethereum!');
      
      return true;
    } catch (error: any) {
      console.error('SIWE error:', error);
      if (error.message?.includes('rejected')) {
        toast.error('Signature request was rejected');
      } else {
        toast.error('Failed to sign in. Please try again.');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [address, createSiweMessage, signMessageAsync]);

  const signOut = useCallback(() => {
    localStorage.removeItem('diminga_siwe_auth');
    setIsSignedIn(false);
    toast.info('Signed out successfully');
  }, []);

  const checkExistingAuth = useCallback(() => {
    try {
      const stored = localStorage.getItem('diminga_siwe_auth');
      if (!stored) return false;
      
      const authData = JSON.parse(stored);
      const isExpired = Date.now() - authData.signedAt > 24 * 60 * 60 * 1000;
      const isSameAddress = authData.address?.toLowerCase() === address?.toLowerCase();
      
      if (isExpired || !isSameAddress) {
        localStorage.removeItem('diminga_siwe_auth');
        return false;
      }
      
      setIsSignedIn(true);
      return true;
    } catch {
      return false;
    }
  }, [address]);

  return {
    isSignedIn,
    isLoading,
    signIn,
    signOut,
    checkExistingAuth,
  };
};

function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
