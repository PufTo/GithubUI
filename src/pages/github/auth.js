import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { userActions } from "../../state/user";

const useFetchUserData = (code) => {
  const [status, setStatus] = useState("idle");
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      // console.log("fetching", url);
      setStatus("fetching");
      try {
        const tokenResponse = await fetch(`/api/auth?code=${code}`, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });

        const tokenData = await tokenResponse.json();

        // console.log(tokenData.data);
        // console.log(tokenData.access_token);
        const { access_token } = tokenData.data;

        // console.log(access_token);

        const userResponse = await fetch("https://api.github.com/user", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: "token " + access_token,
          }),
        });

        const userData = await userResponse.json();

        //console.log(userData);

        const userStateInfo = {
          profileImage: userData.avatar_url,
          username: userData.login,
          name: userData.name,
        };

        console.log(userStateInfo);

        setUserState(userStateInfo);
        setStatus("fetched");
      } catch {}
    };

    fetchData();
  }, [code]);

  return { status, userState };
};

export default function auth() {
  const route = useRouter();
  const { code } = route.query;
  const { userState, status } = useFetchUserData(code);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "fetched") {
      //login
      dispatch(userActions.login(userState));
      route.replace("/profile");
    }
  }, [userState, status]);

  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
