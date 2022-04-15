import { Button, Stack, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../state/user";

export default function EditUserProfileForm(props) {
  const { onSubmit, name } = props;
  const nameInputRef = useRef();
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const newName = nameInputRef.current.value;
    console.log(newName);
    const response = await fetch(`https://api.github.com/user`, {
      method: "PATCH",
      body: JSON.stringify({ name: newName }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "token " + token,
      }),
    });
    if (response.ok) {
      dispatch(userActions.update(newName));
    }
    onSubmit();
  };

  const handleCancel = () => {
    onSubmit();
  };

  return (
    <>
      <TextField
        inputRef={nameInputRef}
        defaultValue={name}
        variant="filled"
        autoComplete="off"
        hiddenLabel
        InputProps={{
          disableUnderline: true,
          style: { fontSize: "1.1rem" },
        }}
        sx={{ padding: 0 }}
      />

      <Stack direction={"row"}>
        <Button onClick={handleSubmit}>Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Stack>
    </>
  );
}
