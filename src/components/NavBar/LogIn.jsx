import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

const Login = () => {

  return (
    <Box style={{display: "flex ", alignItems:"center" ,marginLeft:"auto"}}>
      <Avatar alt=""  src="" style={{ height:"32px", width:"32px" , marginRight:"8px"}} />
      <Button variant="contained" href="/" color="success" sx={{ height:"28px", marginRight:"10px" }}>
        Log In
      </Button>
      <Button variant="contained" href="/" color="success" sx={{ height:"28px", marginRight:"16px"}}>
        Log Out
      </Button>
    </Box>
  );
};

export default Login;
