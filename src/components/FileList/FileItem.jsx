import React from "react";
import { useRouter } from "next/dist/client/router";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import FileIcon from "./FIleIcon";
import { Typography } from "@mui/material";

export default function FileItem(props) {
  const router = useRouter();
  const { name, type, size } = props;
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
  console.log(props);
  return (
    <ListItem
      sx={{
        borderBottom: "1px solid rgb(87, 96, 106)",
        paddingLeft: "5px",
        ":hover": {
          backgroundColor: "rgb(214,230,221)",
          cursor: "pointer",
        },
        ":last-child": {
          borderBottom: "0",
        },
      }}
      onClick={handleShowFileDetails}
    >
      <ListItemIcon
        sx={{
          height: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FileIcon filename={name} />
      </ListItemIcon>
      <Typography>{name}</Typography>
      <Typography
        sx={{
          marginLeft: "auto",
          fontSize: "12px",
        }}
      >
        {size ? `${size / 1000} kb` : ""}
      </Typography>
    </ListItem>
  );
}
