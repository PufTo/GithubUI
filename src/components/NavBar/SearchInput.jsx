import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { BsSlashSquare } from "react-icons/bs";

const Searchinput = () => {
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
        inputProps={{ "aria-label": "Search or jump to..." }}
      />
      <IconButton
        type="submit"
        sx={{ position: "relative", right: "48px", fontSize: "18px", color: "rgb(87, 96, 106)" }}
        aria-label="search"
      >
        <BsSlashSquare />
      </IconButton>
    </>
  );
};

export default Searchinput;
