import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/AuthStore";

const SignOut = () => {
  const navigate = useNavigate();
  const setIsAuth = authStore((state) => state.setIsAuth);
  const signOut = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/");
  };
  return (
    <Box
      sx={{
        backgroundColor: "black",
        textAlign: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
        Are you sure you want to sign out?
      </Typography>
      <Button
        onClick={signOut}
        variant="contained"
        color="secondary"
        sx={{
          textTransform: "capitalize",
          color: "white",
        }}
        className=" hover:underline p-1"
      >
        Yes, Sign Out
      </Button>
    </Box>
  );
};

export default SignOut;
