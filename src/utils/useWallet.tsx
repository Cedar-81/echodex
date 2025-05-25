import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { setAddress, setBaseBal, setSigner } from "../store/walletSlice"; // you can rename setBnbBal if needed
import toast from 'react-hot-toast';
// import { useState } from "react";

export function useWallet() {
  const dispatch = useDispatch<AppDispatch>();
  // const [balance, setBalance] = useState<string>("");

  async function connect() {
    if (!window.ethereum) {
      toast.error("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    const network = await provider.getNetwork();
    if (network.chainId !== 8453n) {
      toast.error("Please switch to the Base Mainnet in MetaMask.");
      return;
    }

    const rawBalance = await provider.getBalance(address); // returns BigInt
    const formattedBalance = ethers.formatEther(rawBalance); // convert to string in ETH (on Base)

    // setBalance(formattedBalance);

    dispatch(setSigner(signer));
    dispatch(setAddress(address));
    dispatch(setBaseBal(formattedBalance)); // consider renaming to setEthBal if appropriate
  }

  return { connect };
}
