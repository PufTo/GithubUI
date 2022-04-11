import React from "react";
import { useRouter } from "next/router";

export default function RepoItem(props) {
  const { name } = props;
  const router = useRouter();

  const handleShowRepoDetails = () => {
    router.push(`${router.asPath}/${name}`);
  };
  return <li onClick={handleShowRepoDetails}>{name}</li>;
}
