import React from "react";
import AppBar from "@mui/material/AppBar";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import Searchinput from "./SearchInput";
import Login from "./LogIn";


export default function NavBar() {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        position:"static",
        height: "62px",
        backgroundColor: " rgb(36,41,47)",
        alignItems: "center",
        paddingLeft: "24px",
      }}
    >
      <IconContext.Provider value={{ color: "white", size: "32px" }}>
        <BsGithub />
      </IconContext.Provider>
      <Searchinput />
      <Login/>
    </AppBar>
  );
}
