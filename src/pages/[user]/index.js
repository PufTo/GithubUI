import { useRouter } from "next/router";
import useFetch from "../../hooks/use-fetch";
import RepoList from "../../components/RepoList/RepoList";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const filterRepos = (repoList, query) => {
  return repoList.filter((repo) => repo.name.toLowerCase().includes(query));
};

export default function UserRepo() {
  const router = useRouter();

  const username = router.query.user;

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/users/${username}/repos`
  );

  const [repoList, setRepoList] = useState([]);

  const [inputFilterValue, setInputFilterValue] = useState("");

  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterQuery(inputFilterValue);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [inputFilterValue]);

  useEffect(() => {
    const successfulFetch = !isLoading && !isError;
    if (successfulFetch) {
      setRepoList(filterRepos(data, filterQuery));
    }
  }, [filterQuery, isLoading, isError, username]);

  const handleInputChange = (event) => {
    setInputFilterValue(event.target.value);
  };

  return (
    <div>
      <Navbar />

      <Container>
        <Box sx={{ width: "100%" }}>
          <TextField
            id="searchForUser"
            label="Type here to filter by name"
            variant="outlined"
            margin="normal"
            sx={{
              mt: 7,
              mb: 10,
              width: "100%",
              height: "35px",
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
            autoComplete="off"
            placeholder={"Type here to filter by name"}
            onChange={handleInputChange}
          />
        </Box>
      </Container>
      {isLoading ? (
        <div> LOADING </div>
      ) : (
        <RepoList repoList={repoList} filterQuery={filterQuery} />
      )}
    </div>
  );
}
