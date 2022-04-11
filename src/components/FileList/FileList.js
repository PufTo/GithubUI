import React from "react";
import FileItem from "./FileItem";

export default function FileList(props) {
  const { fileList } = props;
  console.log(fileList);
  return (
    <ul>
      {fileList.map((file) => (
        <FileItem key={file.name} file={file} />
      ))}
    </ul>
  );
}
