import { useRouter } from "next/router";
import useFetchRepo from "../../hooks/use-fetchUser";
import RepoList from "../../components/RepoList/RepoList";
import { useState } from "react";
import { useEffect } from "react";
// /
const filterRepos = (repoList, query) => {
  return repoList.filter((repo) => repo.name.toLowerCase().includes(query));
};

export default function UserRepo() {
  const router = useRouter();

  const username = router.query.user;
  console.log(username);

  const { data, isLoading, isError } = useFetchRepo(
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
  }, [filterQuery, isLoading, isError]);

  const handleInputChange = (event) => {
    setInputFilterValue(event.target.value);
  };

  return (
    <div>
      <input
        autoComplete="off"
        id="filterInput"
        placeholder={"Type here to filter by name"}
        onChange={handleInputChange}
      ></input>
      {isLoading ? <div>LOADING</div> : <RepoList repoList={repoList} />}
    </div>
  );
}
