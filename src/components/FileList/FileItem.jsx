import React from "react";
import { useRouter } from "next/dist/client/router";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import * as Unicons from '@iconscout/react-unicons';

export default function FileItem(props) {
  const router = useRouter();
  const { name, type } = props;
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
      console.log(`/${user}/${repo}/tree/master${treePath}/${name}`);
      router.push(`/${user}/${repo}/tree/master${treePath}/${name}`);
    }
  };
  
  return (
    <ListItem onClick={handleShowFileDetails}>
      <ListItemIcon>
      <Unicons.UilCss3Simple />
      </ListItemIcon>
      {name}
    </ListItem>
  );
}
