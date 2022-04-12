import React from "react";
import { useRouter } from "next/router";
import Highlighter from "react-highlight-words";

export default function RepoItem(props) {
  const { name, filterQuery } = props;
  const router = useRouter();

  const handleShowRepoDetails = () => {
    router.push(`${router.asPath}/${name}`);
  };
  console.log(Highlighter);
  return (
    <li onClick={handleShowRepoDetails}>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[filterQuery]}
        autoEscape={true}
        textToHighlight={name}
      />
    </li>
  );
}
