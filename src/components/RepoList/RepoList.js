import React from "react";
import RepoItem from "./RepoItem";

export default function RepoList(props) {
  const { repoList,filterQuery } = props;
  return (
    <ul>
      {repoList.map((repo) => (
        <RepoItem key={repo.id} name={repo.name} filterQuery={filterQuery} />
      ))}
    </ul>
  );
}
