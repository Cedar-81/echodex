import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useWallet } from "../utils/useWallet";

function Navbar() {
  const { connect } = useWallet();
  const wallet = useSelector((state: RootState) => state.wallet);
  console.log("signer: ", wallet.signer);
  return (
    <nav className="flex absolute z-40 text-white items-center w-max h-[4rem] px-6 rounded-full top-10 gap-16 bg-[#F5B655]/14 -translate-x-[50%] left-[50%]">
      <ul className="flex items-center gap-8">
        <svg
          width="39"
          height="41"
          viewBox="0 0 39 41"
          className="size-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.187 9.93398H37.187C37.406 9.93398 37.5385 9.69246 37.4194 9.50862C33.0042 2.68917 26.1269 1.60733 23.187 1.93398C8.78701 2.33398 3.85368 13.7673 3.18701 19.434C3.58234 40.3864 29.5692 43.8545 36.9337 31.8655C37.052 31.673 36.9152 31.4274 36.6893 31.4218L16.73 30.935C16.7015 30.9343 16.6719 30.9292 16.6448 30.9204C4.19828 26.8957 9.196 9.93398 17.187 9.93398Z"
            fill="white"
            stroke="white"
          />
          <path
            d="M37.6871 16.934L11.1871 16.434V23.934L37.6871 24.434V16.934Z"
            fill="white"
          />
          <path
            d="M1.6871 13.934C6.08711 5.934 7.31289 4.33571 13 2.13486C7 -0.66514 3.02044 4.93401 1.6871 7.93401V13.934Z"
            fill="white"
          />
          <path
            d="M1.6871 26.434C2.85377 29.2673 6.98711 35.834 14.1871 39.434C9.02044 40.2673 -0.712895 38.834 1.6871 26.434Z"
            fill="white"
          />
          <path
            d="M37.6871 16.934L11.1871 16.434V23.934L37.6871 24.434V16.934Z"
            stroke="white"
          />
          <path
            d="M1.6871 13.934C6.08711 5.934 7.31289 4.33571 13 2.13486C7 -0.66514 3.02044 4.93401 1.6871 7.93401V13.934Z"
            stroke="white"
          />
          <path
            d="M1.6871 26.434C2.85377 29.2673 6.98711 35.834 14.1871 39.434C9.02044 40.2673 -0.712895 38.834 1.6871 26.434Z"
            stroke="white"
          />
        </svg>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Token</li>
        <li className="cursor-pointer">Team</li>
        <li className="cursor-pointer">Roadmap</li>
      </ul>

      <ul className="flex items-center gap-6">
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">
          {!wallet.address ? (
            <button
              onClick={connect}
              className="py-2 cursor-pointer px-8 text-white bg-brand/55 border-2 font-medium border-white rounded-full"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={connect}
              className="py-2 cursor-pointer px-8 text-white bg-brand/55 border-2 font-medium border-white rounded-full"
            >
              {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
