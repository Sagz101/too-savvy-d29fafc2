/**
 * useWeb3.ts
 * Drop-in replacement for the existing stub wallet integration.
 * Uses wagmi v2 + viem. Connects to Ethereum mainnet, Polygon, and Base.
 *
 * Install deps:
 *   bun add wagmi viem @tanstack/react-query @rainbow-me/rainbowkit
 */

import { useState, useCallback } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage, useBalance } from "wagmi";
import { supabase } from "@/integrations/supabase/client";

// ── Types ────────────────────────────────────────────────────────────────────

export interface Web3State {
  address:        string | undefined;
  chainId:        number | undefined;
  isConnected:    boolean;
  isConnecting:   boolean;
  balance:        string | undefined;
  ensName:        string | undefined;
  error:          string | undefined;
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useWeb3() {
  const { address, chainId, isConnected } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { data: balanceData } = useBalance({ address });

  const [error, setError] = useState<string | undefined>();
  const [isSavingWallet, setIsSavingWallet] = useState(false);

  /**
   * Connect a wallet and link it to the current Supabase user.
   * Uses sign-in-with-ethereum (SIWE) style message signing to verify ownership.
   */
  const connectAndLink = useCallback(async (connectorIndex = 0) => {
    setError(undefined);
    try {
      const connector = connectors[connectorIndex];
      if (!connector) throw new Error("No connector available");

      connect({ connector });
    } catch (e: any) {
      setError(e.message ?? "Connection failed");
    }
  }, [connect, connectors]);

  /**
   * After wallet is connected, verify ownership via signature and persist
   * the wallet address to the user's Supabase profile.
   */
  const verifyAndSave = useCallback(async () => {
    if (!address) return;
    setIsSavingWallet(true);
    setError(undefined);

    try {
      const nonce = Math.random().toString(36).slice(2);
      const message = `Diminga: Verify wallet ownership\nAddress: ${address}\nNonce: ${nonce}`;
      const signature = await signMessageAsync({ message });

      // In production, verify `signature` server-side via an Edge Function.
      // Here we optimistically save the address.
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Save to profiles table
      const { error: profileErr } = await supabase
        .from("profiles")
        .update({ wallet_address: address })
        .eq("id", user.id);

      if (profileErr) throw profileErr;

      // Insert into wallets table (multi-wallet support)
      const { error: walletErr } = await supabase
        .from("wallets")
        .upsert({
          profile_id: user.id,
          address: address.toLowerCase(),
          chain_id: chainId ?? 1,
          is_primary: true,
        }, { onConflict: "address" });

      if (walletErr) throw walletErr;

      console.log("Wallet linked:", address, "sig:", signature.slice(0, 20) + "...");
    } catch (e: any) {
      setError(e.message ?? "Failed to verify wallet");
    } finally {
      setIsSavingWallet(false);
    }
  }, [address, chainId, signMessageAsync]);

  /**
   * Mint content as an NFT.
   * Calls the DimingaCreatorNFT contract.
   */
  const mintContentNFT = useCallback(async (params: {
    contentId:   string;
    metadataUri: string;
    contentType: string;
    royaltyBps:  number;
    gated:       boolean;
  }) => {
    if (!isConnected || !address) throw new Error("Wallet not connected");

    // Dynamic import to avoid SSR issues
    const { writeContract } = await import("wagmi/actions");
    const { config } = await import("@/lib/wagmi");
    const { CONTRACT_ADDRESS, ABI } = await import("@/lib/dimingaNFT");

    // Estimate: 0.001 ETH mint fee (matches contract)
    const mintFee = BigInt("1000000000000000"); // 0.001 ether in wei

    const txHash = await writeContract(config, {
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "mint",
      args: [
        address as `0x${string}`,
        params.metadataUri,
        params.contentType,
        params.royaltyBps,
        params.gated,
      ],
      value: mintFee,
    });

    // Record in Supabase
    await supabase.from("nft_mints").insert({
      content_id:   params.contentId,
      minter_addr:  address,
      to_addr:      address,
      contract_addr: CONTRACT_ADDRESS,
      chain_id:     chainId ?? 137,
      tx_hash:      txHash,
    });

    return txHash;
  }, [isConnected, address, chainId]);

  const state: Web3State = {
    address,
    chainId,
    isConnected,
    isConnecting,
    balance: balanceData
      ? `${Number(balanceData.formatted).toFixed(4)} ${balanceData.symbol}`
      : undefined,
    ensName:  undefined, // populate via useEnsName() if needed
    error,
  };

  return {
    ...state,
    connectors,
    connectAndLink,
    verifyAndSave,
    disconnect,
    mintContentNFT,
    isSavingWallet,
  };
}
