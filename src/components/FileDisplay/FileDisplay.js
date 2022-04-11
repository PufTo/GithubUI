import React from "react";
import {
  supportedImageExtensions,
  supportedTextFileExtensions,
} from "../../config";
import ImageDisplay from "./ImageDisplay";
import TextFileDisplay from "./TextFileDisplay";
import UnsupportedFileDisplay from "./UnsupportedFileDisplay";

//Receives a file name and returns its extension, undefined is returned if no extension is found
const getFileExtension = (fileName) => {
  if (!fileName.includes(".")) {
    return undefined;
  }
  const nameSplit = fileName.split(".");
  const fileExtension = nameSplit[nameSplit.length - 1];

  return fileExtension;
};

//Function that takes a file name and based on its extension returns if the file is a supported image
const isImage = (fileName) => {
  const fileExtension = getFileExtension(fileName);
  return supportedImageExtensions.includes(fileExtension);
};

//Function that takes a file name and based on its extension returns if the file is a supported text file
const isTextFile = (fileName) => {
  const fileExtension = getFileExtension(fileName);
  return supportedTextFileExtensions.includes(fileExtension);
};

const supportedFileType = (filename) => {
  if (isImage(filename)) {
    return "image";
  }

  if (isTextFile(filename)) {
    return "text";
  }

  return "unsupported";
};

export default function FileDisplay(props) {
  const { fileName, fileContent } = props;

  const fileType = supportedFileType(fileName);

  if (fileType === "image") {
    return <ImageDisplay content={fileContent} />;
  }

  if (fileType === "text") {
    return <TextFileDisplay content={fileContent} />;
  }

  return <UnsupportedFileDisplay />;
}
