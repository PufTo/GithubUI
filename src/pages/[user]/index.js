import { useRouter } from "next/router";
import useFetch from "../../hooks/use-fetch";
import RepoList from "../../components/RepoList/RepoList";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";

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
      console.log("sorting");
      setFilterQuery(inputFilterValue);
    }, 600);

    return () => {
      console.log("reset");
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
      <input
        autoComplete="off"
        id="filterInput"
        placeholder={"Type here to filter by name"}
        onChange={handleInputChange}
      ></input>
      {isLoading ? (
        <div> LOADING </div>
      ) : (
        <RepoList repoList={repoList} filterQuery={filterQuery} />
      )}
    </div>
  );
}
