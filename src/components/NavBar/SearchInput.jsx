import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { BsSlashSquare } from "react-icons/bs";

import { useRouter } from "next/router";
import { useRef } from "react";

const Searchinput = () => {
  const inputRef = useRef();
  const route = useRouter();

  const handleSearchRepo = (e) => {
    e.key === "Enter"
      ? route.push(`/${e.target.value}`)
      : e.type === "click"
      ? route.push(`/${inputRef.current.value}`)
      : console.log("Error");
  };

  return (
    <>
      <InputBase
        sx={{
          margin: "0 16px",
          border: "1px solid rgb(87, 96, 106)",
          borderRadius: "6px",
          width: "272px",
          color: "#ffffff",
          height: "30px",
          padding: "12px 12px 12px 12px",
          fontSize: "14px",
        }}
        placeholder="Search or jump to..."
        inputProps={{ ref: inputRef }}
        onKeyDown={handleSearchRepo}
      />
      <IconButton
        type="submit"
        sx={{ position: "relative", right: "48px", fontSize: "18px", color: "rgb(87, 96, 106)" }}
        aria-label="search"
        onClick={handleSearchRepo}
      >
        <BsSlashSquare />
      </IconButton>
    </>
  );
};

export default Searchinput;
