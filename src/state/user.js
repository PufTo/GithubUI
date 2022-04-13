import { createSlice } from "@reduxjs/toolkit";

// console.log(window);
//const login = localStorage.getItem("test");

// const initialAuthState = {
//   isAuthenticated: !!login,
// };

const userSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      // console.log("changing state to login");
      // localStorage.setItem("token", action.payload);
      localStorage.setItem("test", "log");
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("test");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
