// hooks/useWallet.ts
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { setAddress, setSigner } from "../store/walletSlice";

export function useWallet() {
  const dispatch = useDispatch<AppDispatch>();

  async function connect() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    dispatch(setSigner(signer));
    dispatch(setAddress(address));
  }

  return { connect };
}
