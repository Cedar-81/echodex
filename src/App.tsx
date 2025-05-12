import { useEffect } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Presale from "./components/presale";
import type { RootState } from "./store";
import { useSelector } from "react-redux";
import { useWallet } from "./utils/useWallet";

function App() {
  const { connect } = useWallet();
  const wallet = useSelector((state: RootState) => state.wallet);
  useEffect(() => {
    if (!wallet.address) {
      connect();
    }
  }, []);
  return (
    <main className="bg-black text-white space-y-[15rem]">
      <Navbar />
      <Hero />
      <Presale />
    </main>
  );
}

export default App;
