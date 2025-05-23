import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Signer } from "ethers";

interface CounterState {
  signer: Signer | null;
  address: string | null;
  balance: string | null;
}

const initialState: CounterState = {
  signer: null,
  address: null,
  balance: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setSigner: (state, action: PayloadAction<Signer>) => {
      state.signer = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setBaseBal: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
  },
});

export const { setAddress, setSigner, setBaseBal } = walletSlice.actions;
export default walletSlice.reducer;
