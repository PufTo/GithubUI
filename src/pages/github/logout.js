import { CircularProgress, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { userActions } from "../../state/user";

export default function logout() {
  const route = useRouter();
  const { token } = route.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const logoutRequest = async () => {
      const response = await fetch(`/api/auth?token=${token}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      console.log(response);
      const m = await response.json();
      console.log(m);
      dispatch(userActions.logout());
      route.replace("/");
    };
    if (token) {
      logoutRequest();
    }
  }, [token]);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <CircularProgress />
    </Container>
  );
}
