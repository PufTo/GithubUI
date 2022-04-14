import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Avatar, Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function profile() {
  const profileImage = useSelector((state) => state.profileImage);

  return (
    <>
      <NavBar />
      <Container sx={{ padding: "6rem" }}>
        <Avatar
          alt="Remy Sharp"
          src={profileImage}
          sx={{ width: "16rem", height: "auto" }}
        />
      </Container>
    </>
  );
}
