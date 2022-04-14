import React from "react";
import Image from "next/image";

const imgForm = (rawImageDataBase64) => {
  return "data:image/png;base64," + rawImageDataBase64;
};

export default function ImageDisplay(props) {
  const { content } = props;
  return <img src={imgForm(content)} alt="Image" />;
}
