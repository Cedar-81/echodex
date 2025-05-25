// hooks/useTokenSale.ts
import { useWalletClient, useChainId } from "wagmi";
import { Web3Provider } from "@ethersproject/providers";
import { parseEther as ethersParseEther } from "ethers"; // v6 import
import toast from 'react-hot-toast';

export function useTokenSale(saleContractAddress: `0x${string}`) {
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();

  async function buyEdex(bnbAmountInEth: string) {
    if (!walletClient) {
      toast.error("Connect wallet first.");
      return;
    }

    const BNB_CHAIN_ID = 56;
    if (chainId !== BNB_CHAIN_ID) {
      toast.error("Please switch your wallet to the Binance Smart Chain network.");
      return;
    }

    try {
      const provider = new Web3Provider(walletClient.transport); // viem transport -> ethers v5-compatible provider
      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: saleContractAddress,
        value: ethersParseEther(bnbAmountInEth),
      });

      toast.loading("Transaction sent! Waiting for confirmation...", {
        id: 'tx-loading'
      });
      
      await tx.wait();
      toast.dismiss('tx-loading');
      toast.success("Purchase successful! You will receive your EDEX shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Transaction failed.");
    }
  }

  return { buyEdex };
}
