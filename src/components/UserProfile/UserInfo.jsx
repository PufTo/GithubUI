import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function UserInfo(props) {
  const { username, name, onStartEdit } = props;

  const handleStartEdit = () => {
    onStartEdit();
  };

  return (
    <>
      <Stack spacing={0.5}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1">{username}</Typography>
      </Stack>
      <Button onClick={handleStartEdit}>Edit profile</Button>
    </>
  );
}
