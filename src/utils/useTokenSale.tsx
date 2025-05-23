// hooks/useTokenSale.ts
import { useWalletClient, usePublicClient, useChainId } from "wagmi";
import { parseEther } from "viem";

export function useTokenSale(saleContractAddress: `0x${string}`) {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const chainId = useChainId();

  async function buyEdex(baseAmountInEth: string) {
    if (!walletClient || !publicClient) {
      alert("Connect wallet first.");
      return;
    }

    // Ensure the user is on Base mainnet
    const BASE_MAINNET_CHAIN_ID = 8453;
    if (chainId !== BASE_MAINNET_CHAIN_ID) {
      alert("Please switch your wallet to the Base network.");
      return;
    }

    try {
      const txHash = await walletClient.sendTransaction({
        account: walletClient.account,
        to: saleContractAddress,
        value: parseEther(baseAmountInEth),
      });

      alert("Transaction sent! Waiting for confirmation...");

      await publicClient.waitForTransactionReceipt({ hash: txHash });

      alert("Purchase successful! You will receive your EDEX shortly.");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
  }

  return { buyEdex };
}
