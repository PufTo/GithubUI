import React from "react";

const decode64 = (string) => {
  return Buffer.from(string, "base64");
};

export default function TextFileDisplay(props) {
  const { content } = props;
  return <textarea readOnly value={decode64(content)}></textarea>;
}
