import React from "react";
import AppBar from "@mui/material/AppBar";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import Searchinput from "./SearchInput";
import Login from "./LogIn";
import { useRouter } from "next/router";

export default function NavBar() {
  const route = useRouter();

  const handleClick = () => {
    console.log("hfdashfjlkhdasljkfhkjldsaghfkjldsahl");
    route.push("/");
  };

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "static",
        height: "62px",
        backgroundColor: " rgb(36,41,47)",
        alignItems: "center",
        paddingLeft: "24px",
      }}
    >
      <IconContext.Provider value={{ color: "white", size: "32px" }}>
        <BsGithub onClick={handleClick} />
      </IconContext.Provider>
      <Searchinput />
      <Login />
    </AppBar>
  );
}
