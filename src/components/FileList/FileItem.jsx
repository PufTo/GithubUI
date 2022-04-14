import React from "react";
import { useRouter } from "next/dist/client/router";

export default function FileItem(props) {
  const router = useRouter();
  const { name, type } = props.file;
  const { user, repo, tree } = router.query;

  const handleShowFileDetails = () => {
    const treePath = tree
      ? tree.reduce((acc, segment) => {
          return acc + "/" + segment;
        }, "")
      : "";

    if (type === "file") {
      router.push(`/${user}/${repo}/blob${treePath}/${name}`);
    }
    if (type === "dir") {
      router.push(`/${user}/${repo}/tree${treePath}/${name}`);
    }
  };

  return <li onClick={handleShowFileDetails}>{name}</li>;
}
