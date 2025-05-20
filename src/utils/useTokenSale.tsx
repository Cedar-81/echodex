// hooks/useTokenSale.ts
import { useWalletClient } from "wagmi";
import { parseEther } from "viem";

export function useTokenSale(saleContractAddress: `0x${string}`) {
  const { data: walletClient } = useWalletClient();

  async function buyEdex(bnbAmountInEth: string) {
    if (!walletClient) {
      alert("Connect wallet first.");
      return;
    }

    try {
      await walletClient.sendTransaction({
        account: walletClient.account,
        to: saleContractAddress,
        value: parseEther(bnbAmountInEth),
      });

      alert("Transaction sent! Waiting for confirmation...");

      // You’ll need to use a public client to wait for confirmation
      // If you have it in scope, e.g. from `usePublicClient`
      // const publicClient = usePublicClient()
      // await publicClient.waitForTransactionReceipt({ hash: txHash })

      alert("Purchase successful! You will receive your EDEX shortly.");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
  }

  return { buyEdex };
}
