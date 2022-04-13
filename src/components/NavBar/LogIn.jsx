import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../../state/user";

const Login = () => {
  const route = useRouter();
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // move to server??
    // console.log("login");
    console.log(isLoggedIn);
    dispatch(userActions.login());
    // route.push(
    //   "https://github.com/login/oauth/authorize?client_id=ee75ebfda6802886b0fe"
    // );
  };

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Box style={{ display: "flex ", alignItems: "center", marginLeft: "auto" }}>
      {isLoggedIn ? (
        <>
          <Avatar
            alt=""
            src=""
            style={{ height: "32px", width: "32px", marginRight: "8px" }}
          />

          <Button
            onClick={handleLogout}
            variant="contained"
            color="success"
            sx={{ height: "28px", marginRight: "16px" }}
          >
            Log Out
          </Button>
        </>
      ) : (
        <Button
          onClick={handleLogin}
          variant="contained"
          color="success"
          sx={{ height: "28px", marginRight: "10px" }}
        >
          Log In
        </Button>
      )}
    </Box>
  );
};

export default Login;
