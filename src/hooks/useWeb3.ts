/**
 * useWeb3.ts
 * Drop-in replacement for the existing stub wallet integration.
 * Uses wagmi v2 + viem. Connects to Ethereum mainnet, Polygon, and Base.
 */

import { useState, useCallback } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage, useBalance, useWriteContract } from "wagmi";
import { supabase } from "@/integrations/supabase/client";
import { TOO_SAVVY_NFT_ABI, getContractAddress } from "@/contracts/tooSavvyNFT";

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
  const { address, chainId, isConnected, chain } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { data: balanceData } = useBalance({ address });
  const { writeContractAsync } = useWriteContract();

  const [error, setError] = useState<string | undefined>();
  const [isSavingWallet, setIsSavingWallet] = useState(false);

  /**
   * Connect a wallet using the specified connector.
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
      const signature = await signMessageAsync({ message, account: address });

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

      console.log("Wallet linked:", address, "sig:", signature.slice(0, 20) + "...");
    } catch (e: any) {
      setError(e.message ?? "Failed to verify wallet");
    } finally {
      setIsSavingWallet(false);
    }
  }, [address, signMessageAsync]);

  /**
   * Mint content as an NFT.
   * Calls the DimingaCreatorNFT contract via wagmi's writeContract.
   */
  const mintContentNFT = useCallback(async (params: {
    contentId:   string;
    metadataUri: string;
    contentType: string;
    royaltyBps:  number;
    gated:       boolean;
  }) => {
    if (!isConnected || !address || !chain) throw new Error("Wallet not connected");

    const contractAddress = chainId ? getContractAddress(chainId) : undefined;
    if (!contractAddress) throw new Error("Contract not deployed on this network");

    // 0.001 ETH mint fee (matches contract)
    const mintFee = BigInt("1000000000000000");

    const txHash = await writeContractAsync({
      address: contractAddress as `0x${string}`,
      abi: TOO_SAVVY_NFT_ABI,
      functionName: "safeMint",
      args: [
        address as `0x${string}`,
        1n,
        params.metadataUri as `0x${string}`,
      ],
      value: mintFee,
      chain,
      account: address,
    });

    // Record mint in analytics table
    await supabase.from("analytics").insert({
      event_type: "nft_mint",
      content_id: params.contentId,
      user_id: (await supabase.auth.getUser()).data.user?.id ?? null,
      metadata: {
        tx_hash: txHash,
        contract_address: contractAddress,
        chain_id: chainId,
        content_type: params.contentType,
        royalty_bps: params.royaltyBps,
        gated: params.gated,
      },
    });

    return txHash;
  }, [isConnected, address, chainId, chain, writeContractAsync]);

  const state: Web3State = {
    address,
    chainId,
    isConnected,
    isConnecting,
    balance: balanceData
      ? `${Number(balanceData.formatted).toFixed(4)} ${balanceData.symbol}`
      : undefined,
    ensName: undefined,
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
