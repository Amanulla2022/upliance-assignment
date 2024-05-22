import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice of the Redux store for user data
const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  reducers: {
    // reducers to save user data
    saveUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// export the action to save user data
export const { saveUserData } = userSlice.actions;

// configure the Redux store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
