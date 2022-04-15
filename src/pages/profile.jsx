import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useFetch from "../hooks/use-fetch";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import Error from "next/dist/pages/_error";
import RepoList from "../components/RepoList/RepoList";

export default function profile() {
  const username = useSelector((state) => state.username);
  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />;
  }

  return (
    <Container sx={{ padding: "6rem" }}>
      <Grid container>
        <Grid item xs={4}>
          <UserInfoCard />
        </Grid>
        <Grid item xs={8} sx={{ paddingTop: "3rem" }}>
          {isLoading ? <CircularProgress /> : <RepoList repoList={data} />}
        </Grid>
      </Grid>
    </Container>
  );
}
