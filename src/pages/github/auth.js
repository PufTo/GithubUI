import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { userActions } from "../../state/user";
import { Container } from "@mui/material";

const useFetchUserData = (code) => {
  const [status, setStatus] = useState("idle");
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      setStatus("fetching");
      try {
        const tokenResponse = await fetch(`/api/auth?code=${code}`, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });

        const tokenData = await tokenResponse.json();

        const { access_token } = tokenData.data;

        console.log(access_token);

        const userResponse = await fetch("https://api.github.com/user", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: "token " + access_token,
          }),
        });

        const userData = await userResponse.json();

        const userStateInfo = {
          profileImage: userData.avatar_url,
          username: userData.login,
          name: userData.name,
          token: access_token,
        };

        console.log(userStateInfo);

        setUserState(userStateInfo);
        setStatus("fetched");
      } catch {
        setStatus("error");
      }
    };

    fetchData();
  }, [code]);

  return { status, userState };
};

export default function auth() {
  const route = useRouter();
  const { code, error } = route.query;
  const { userState, status } = useFetchUserData(code);
  const dispatch = useDispatch();

  if (error) {
    route.replace("/");
  }

  useEffect(() => {
    if (status === "fetched") {
      //login
      dispatch(userActions.login(userState));
      route.replace("/profile");
    }
    if (status === "error") {
      console.log(route.asPath);
      route.replace("/");
    }
  }, [userState, status]);

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
