import React from "react";
import RepoItem from "./RepoItem";

export default function RepoList(props) {
  const { repoList } = props;

  return (
    <ul>
      {repoList.map((repo) => (
        <RepoItem key={repo.id} name={repo.name} />
      ))}
    </ul>
  );
}
