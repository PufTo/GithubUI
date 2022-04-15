import React, { useState } from "react";
import { Avatar, Button, Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import EditUserProfileForm from "./EditUserProfileForm";
import UserInfo from "./UserInfo";

export default function UserInfoCard(props) {
  const profileImage = useSelector((state) => state.profileImage);
  const username = useSelector((state) => state.username);
  const name = useSelector((state) => state.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  console.log(name);

  return (
    <Stack spacing={2} sx={{ width: "16.5rem" }}>
      <Avatar
        alt={`Profile image of ${name}`}
        src={profileImage}
        sx={{ width: "16rem", height: "auto" }}
      />

      {isEditing ? (
        <EditUserProfileForm
          onSubmit={handleSubmit}
          name={name}
          username={username}
          profileImage={profileImage}
        />
      ) : (
        <UserInfo
          name={name}
          username={username}
          onStartEdit={handleStartEdit}
        />
      )}
    </Stack>
  );
}
