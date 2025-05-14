import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { setAddress, setBnbBal, setSigner } from "../store/walletSlice";
import { useState } from "react";

export function useWallet() {
  const dispatch = useDispatch<AppDispatch>();
  const [balance, setBalance] = useState<string>("");

  console.log("balance: ", balance);

  async function connect() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    // Get BNB balance
    const rawBalance = await provider.getBalance(address); // returns BigInt
    const formattedBalance = ethers.formatEther(rawBalance); // convert to string in BNB

    setBalance(formattedBalance);

    dispatch(setSigner(signer));
    dispatch(setAddress(address));
    dispatch(setBnbBal(balance));
  }

  return { connect };
}
