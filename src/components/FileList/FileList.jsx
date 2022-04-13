import React from "react";
import FileItem from "./FileItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

export default function FileList(props) {
  const { fileList } = props;
  console.log(fileList);
  return (
    <Box>
      <List>
        {fileList.map((file) => (
          <FileItem key={file.name} file={file} />
        ))}
      </List>
    </Box>
  );
}
