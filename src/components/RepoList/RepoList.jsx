import React from "react";
import RepoItem from "./RepoItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function RepoList(props) {
  const { repoList } = props;
  const filterQuery = props.filterQuery || "";

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4}>
          {repoList.map((repo) => (
            <Grid key={repo.id} item xs={12} md={4} lg={4}>
              <RepoItem key={repo.id} repo={repo} filterQuery={filterQuery} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
