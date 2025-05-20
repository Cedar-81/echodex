import { useState } from "react";
import { useTokenSale } from "../utils/useTokenSale";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

// const SALE_CONTRACT_ADDRESS = "0x62AD35EbBBC4BE1cC025Da4265D0731cA933B2CC";
const SALE_CONTRACT_ADDRESS = "0x5233F7216082d286Fa9caa39d603CC45118AC25c";

function Presale() {
  const wallet = useSelector((state: RootState) => state.wallet);
  const { buyEdex } = useTokenSale(SALE_CONTRACT_ADDRESS);
  const [amount, setAmount] = useState(0);

  // console.log("signer: ", wallet.signer);

  return (
    <section
      id="presale"
      className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-between lg:px-[6rem] px-8"
    >
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
            <h4 className="font-medium">EDEX/BNB</h4>
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
          <p>1 BNB = 1000 EDEX</p>
          <p className="text-xs lg:text-sm">Hard Cap: 4000 BNB</p>
          <p>Balance: {wallet.balance ? wallet.balance : "0"}BNB</p>
        </div>
      </div>

      <div className="lg:w-1/2">
        <h3 className="text-5xl lg:text-7xl text-right leading-tight">
          Join the <br className="hidden lg:block" />
          presale <br className="hidden lg:block" />
          launch
        </h3>
      </div>
    </section>
  );
}

export default Presale;
