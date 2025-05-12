import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Signer } from "ethers";

interface CounterState {
  signer: Signer | null;
  address: string | null;
}

const initialState: CounterState = {
  signer: null,
  address: null,
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
  },
});

export const { setAddress, setSigner } = walletSlice.actions;
export default walletSlice.reducer;
