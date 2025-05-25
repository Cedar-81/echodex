import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Presale from "./components/presale";
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
import Promo from "./components/promo";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main className="bg-black text-white space-y-[5rem] lg:space-y-[15rem]">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
          border: "2px solid #F5B655",
          borderRadius: "10px",
        },
      }} />
      <Navbar />
      <Hero />
      <Presale />
      <About />
      <Why />
      <Community />
      <Promo />
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
