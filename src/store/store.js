import { configureStore, createSlice } from "@reduxjs/toolkit";

//  function to load state from localStorage
const loadState = () => {
  try {
    const stateValues = localStorage.getItem("userState");
    if (stateValues === null) {
      return undefined;
    }
    return JSON.parse(stateValues);
  } catch (err) {
    return undefined;
  }
};

//  function to save state to localStorage
const saveState = (state) => {
  try {
    const { email, name, uid } = state; // Destructuring email, name, uid
    const stateValues = JSON.stringify({ email, name, uid }); // serializing email, name, uid
    localStorage.setItem("userState", stateValues);
  } catch (err) {
    console.log(err);
  }
};

// slice of the Redux store for user data
const userSlice = createSlice({
  name: "user",
  initialState: loadState() || {
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    isAuthenticated: false,
  },
  reducers: {
    // reducers to save user data
    saveUserData: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    // reducers to save auth state
    setAuthState: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // reducers to reset user data
    resetUserData: (state) => {
      return {
        id: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        isAuthenticated: false,
      };
    },
  },
});

// export the action to save user data
export const { saveUserData, setAuthState, resetUserData } = userSlice.actions;

// configure the Redux store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  saveState(store.getState().user);
});

export default store;
