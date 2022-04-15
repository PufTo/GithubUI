import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  profileImage: "",
  username: "",
  name: "",
  token: "",
};

const userSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      const { profileImage, username, name, token } = actions.payload;

      state.isAuthenticated = true;
      state.profileImage = profileImage;
      state.username = username;
      state.name = name;
      state.token = token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.profileImage = "";
      state.username = "";
      state.name = "";
      state.token = "";
    },
    update(state, actions) {
      state.name = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
