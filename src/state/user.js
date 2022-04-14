import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  profileImage: "",
  username: "",
  name: "",
};

const userSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      const { profileImage, username, name } = actions.payload;

      state.isAuthenticated = true;
      state.profileImage = profileImage;
      state.username = username;
      state.name = name;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.profileImage = "";
      state.username = "";
      state.name = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
