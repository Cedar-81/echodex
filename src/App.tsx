import { useEffect } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Presale from "./components/presale";
import type { RootState } from "./store";
import { useSelector } from "react-redux";
import { useWallet } from "./utils/useWallet";
import About from "./components/about";
import Why from "./components/why";
import Community from "./components/community";
import Tokenomics from "./components/tokenomics";
import Roadmap from "./components/roadmap";
import Funds from "./components/funds";
import TokenomicsTable from "./components/tokenomics_table";
import Reward from "./components/reward";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  // const { connect } = useWallet();
  // const wallet = useSelector((state: RootState) => state.wallet);
  // useEffect(() => {
  //   if (!wallet.address) {
  //     connect();
  //   }
  // }, []);
  return (
    <main className="bg-black text-white space-y-[5rem]">
      <Navbar />
      <Hero />
      <Presale />
      <About />
      <Why />
      <Community />
      <Tokenomics />
      <Roadmap />
      <Funds />
      <TokenomicsTable />
      <Reward />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
