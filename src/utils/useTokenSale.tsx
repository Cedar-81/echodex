// hooks/useTokenSale.ts
import { useWalletClient, useChainId } from "wagmi";
import { Web3Provider } from "@ethersproject/providers";
import { parseEther as ethersParseEther } from "ethers"; // v6 import

export function useTokenSale(saleContractAddress: `0x${string}`) {
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();

  async function buyEdex(bnbAmountInEth: string) {
    if (!walletClient) {
      alert("Connect wallet first.");
      return;
    }

    const BNB_CHAIN_ID = 56;
    if (chainId !== BNB_CHAIN_ID) {
      alert("Please switch your wallet to the Binance Smart Chain network.");
      return;
    }

    try {
      const provider = new Web3Provider(walletClient.transport); // viem transport -> ethers v5-compatible provider
      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: saleContractAddress,
        value: ethersParseEther(bnbAmountInEth),
      });

      alert("Transaction sent! Waiting for confirmation...");
      await tx.wait();

      alert("Purchase successful! You will receive your EDEX shortly.");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
  }

  return { buyEdex };
}
