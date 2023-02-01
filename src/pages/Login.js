import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvier, githubProvier } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import authStore from "../store/AuthStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const navigate = useNavigate();
  const setIsAuth = authStore((state) => state.setIsAuth);
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvier).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  // const signInWithGithub = () => {
  //   signInWithPopup(auth, githubProvier).then((result) => {
  //     localStorage.setItem("isAuth", true);
  //     setIsAuth(true);
  //     navigate("/");
  //   });
  // };
  return (
    <Box mb={0} sx={{ backgroundColor: "black", minHeight: "600px" }}>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          gap: "10px",
          boxShadow: "5px",
          borderRadius: "5px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to Speech Commumity
        </Typography>
        <Typography variant="subtitle1">
          Speech Community 👩‍💻👨‍💻 is a community of 997,762 amazing users
        </Typography>
        <Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "16px",
              textTransform: "capitalize",
              letterSpacing: "2px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            onClick={signInWithGoogle}
          >
            <GoogleIcon sx={{ marginRight: "5px" }} />
            Continue with Google
          </Button>
        </Box>
        {/* <Box>
          <Button
            disabled
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "16px",
              textTransform: "capitalize",
              letterSpacing: "2px",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
            onClick={signInWithGithub}
          >
            <GitHubIcon sx={{ marginRight: "5px" }} /> Continue with Github
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Login;
