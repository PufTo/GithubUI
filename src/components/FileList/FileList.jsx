import React from "react";
import FileItem from "./FileItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function FileList(props) {
  const { fileList } = props;

  const sortedFileList = fileList.sort((a, b) => (a.type < b.type ? -1 : a.type > b.type ? 1 : 0));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgb(36,41,47)",
          border: "1px solid rgb(36,41,47)",
          borderRadius: "6px 6px 0 0",
          width: "60%",
          height: "54px",
          color: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginLeft: "20px",
          }}
        >
          {useRouter().query.repo}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginRight: "25px",
          }}
        >
          Size
        </Typography>
      </Box>

      <List
        sx={{
          background: "rgb(246,248,250)",
          width: "60%",
          marginTop: "0px",
          border: "1px solid rgb(87, 96, 106)",
          borderRadius: "0 0 6px 6px",
        }}
      >
        {sortedFileList.map((file) => (
          <FileItem key={file.sha} {...file} />
        ))}
      </List>
    </Box>
  );
}
