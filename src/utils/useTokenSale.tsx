// hooks/useTokenSale.ts
import { ethers } from "ethers";

export function useTokenSale(
  signer: ethers.Signer | null,
  saleContractAddress: string
) {
  async function buyEdex(bnbAmountInEth: string) {
    if (!signer) {
      alert("Connect wallet first.");
      return;
    }

    try {
      const tx = await signer.sendTransaction({
        to: saleContractAddress,
        value: ethers.parseEther(bnbAmountInEth),
      });

      await tx.wait();
      alert("Purchase successful! You will receive your EDEX shortly.");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
  }

  return { buyEdex };
}
