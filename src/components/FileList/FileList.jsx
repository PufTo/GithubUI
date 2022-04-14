import React from "react";
import FileItem from "./FileItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

export default function FileList(props) {
  const { fileList } = props;
  console.log("55555",fileList,props);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          background: "rgb(246,248,250)",
          width: "50%",
          marginTop:"100px",
          border:"1px solid rgb(87, 96, 106)",
          borderRadius:"6px",
        }}
      >
        {fileList.map((file) => (
          <FileItem key={file.sha} {...file} />
        ))}
      </List>
    </Box>
  );
}
