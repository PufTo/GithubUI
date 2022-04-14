import React from "react";
import { Avatar, Container } from "@mui/material";

export default function UserInfoCard(props) {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src={profileImage}
        sx={{ width: "16rem", height: "auto" }}
      />
    </>
  );
}
