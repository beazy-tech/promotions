import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  userId: string;
}

// Initial state
const initialState: AuthState = {
  userId: "",
};

// Actual Slice
export const userData = createSlice({
  name: "userId",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userId = action.payload;
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.userId,
      };
    },
  },
});

export const { setUserData } = userData.actions;
export const userIdInfo = (state: AppState) => state.userId.userId;
export default userData.reducer;