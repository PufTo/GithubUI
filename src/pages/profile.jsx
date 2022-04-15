import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Avatar, CircularProgress, Container } from "@mui/material";
import { useSelector } from "react-redux";
import useFetch from "../hooks/use-fetch";

export default function profile() {
  const profileImage = useSelector((state) => state.profileImage);
  const username = useSelector((state) => state.username);
  const { data, isLoading, isError } = useFetch(`https://api.github.com/users/${username}/repos`);

  return (
    <>
      <NavBar />
      <Container sx={{ padding: "6rem" }}>
        <Avatar alt="Remy Sharp" src={profileImage} sx={{ width: "16rem", height: "auto" }} />
        {isLoading ? (
          <CircularProgress />
        ) : (
          // <RepoList repoList={repoList} filterQuery={filterQuery} />
          <> </>
        )}
      </Container>
    </>
  );
}
