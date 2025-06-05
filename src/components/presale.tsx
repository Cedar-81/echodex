import { useState } from "react";
import { useTokenSale } from "../utils/useTokenSale";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import toast from 'react-hot-toast';

// const SALE_CONTRACT_ADDRESS = "0x62AD35EbBBC4BE1cC025Da4265D0731cA933B2CC";
const SALE_CONTRACT_ADDRESS = "0x5233F7216082d286Fa9caa39d603CC45118AC25c";

function Presale() {
  const wallet = useSelector((state: RootState) => state.wallet);
  const { buyEdex } = useTokenSale(SALE_CONTRACT_ADDRESS);
  const [amount, setAmount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleAirdropSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setIsSubscribed(true);
    toast.success("You're subscribed for the airdrop! We'll notify you when it's live.");
    setEmail("");
  };

  return (
    <section
      id="presale"
      className="flex flex-col gap-20 lg:gap-32 lg:px-[6rem] px-8"
    >
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-between">
        <div className="lg:w-1/2 space-y-10 lg:space-y-20 ">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-medium">ECHODEX</h3>
              <div className="flex gap-2 ">
                <button className="px-2 flex items-center py-1 text-xs lg:text-sm rounded-md text-white border border-white">
                  Audited
                </button>
                <button className="px-2 flex items-center py-1 text-xs lg:text-sm rounded-md bg-brand text-black">
                  Verified
                </button>
              </div>
            </div>

            <div className="text-xs lg:text-base">
              <h4 className="font-medium">EDEX/ETH</h4>
              <p>view on BSCSCAN</p>
            </div>
          </div>

          <div className="bg-light_gray flex rounded-lg overflow-clip w-full">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="bg-transparent ring-0 w-full active:appearance-none border-0 outline-none py-4 lg:py-6 px-4"
              placeholder="Exchange quantity"
            />
            <button
              onClick={() => buyEdex(String(amount))}
              className="bg-brand text-black px-8 font-medium cursor-pointer w-max text-nowrap"
            >
              Buy Now
            </button>
          </div>

          <div className="flex items-center text-xs lg:text-base justify-between">
            <p>1 ETH = 1000 EDEX</p>
            <p className="text-xs lg:text-sm">Hard Cap: 4000 ETH</p>
            <p>Balance: {wallet.balance ? wallet.balance : "0"}ETH</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-5xl lg:text-7xl text-right leading-tight">
            Join the <br className="hidden lg:block" />
            presale <br className="hidden lg:block" />
            launch
          </h3>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-light_gray">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          // poster="/promoimg.jpeg"
        >
          <source src="/presalevideo.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Airdrop Section */}
      <div className="w-full bg-light_gray rounded-2xl p-8 lg:p-12 relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="/airdrop-pattern.png" alt="" className="w-full h-full object-cover" />
        </div> */}
        <div className="relative z-10 space-y-6 lg:w-2/3">
          <h3 className="text-3xl lg:text-5xl font-medium text-brand">Airdrop Coming Soon!</h3>
          <p className="text-sm lg:text-base opacity-80">
            Be among the first to receive our exclusive airdrop. Subscribe now and don't miss out on this opportunity to be part of our early community.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-black/20 border border-brand/20 rounded-lg px-4 py-3 lg:w-[400px] focus:outline-none focus:border-brand"
            />
            <button
              onClick={handleAirdropSubscribe}
              disabled={isSubscribed}
              className={`px-8 py-3 rounded-lg font-medium ${
                isSubscribed 
                ? 'bg-green-500 cursor-not-allowed' 
                : 'bg-brand text-black hover:bg-brand/90'
              }`}
            >
              {isSubscribed ? 'Subscribed!' : 'Notify Me'}
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Presale;
