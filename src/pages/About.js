import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <Box className="bg-black">
      <Grid container>
        <Container
          maxWidth="md"
          sx={{ marginTop: 4, marginBottom: 2 }}
          className=" bg-slate-600 text-white p-10 rounded-lg"
        >
          <Typography variant="h5" className=" " sx={{ fontWeight: "bold" }}>
            About BUZZ
          </Typography>
          <Typography
            sx={{ letterSpacing: 2, marginTop: "20px" }}
            variant="subtitle1"
            className=" "
          >
            BUZZ is a community of software developers getting together to help
            one another out. The software industry relies on collaboration and
            networked learning. We provide a place for that to happen.
          </Typography>
          <Typography
            sx={{ letterSpacing: 2, marginTop: "20px" }}
            variant="subtitle1"
            className=" "
          >
            BUZZ is built on Forem: open source software designed to empower
            communities. Because our application is open source, you can inspect
            every little detail of the code, or chip in yourself! Forem is
            available for anyone interested in creating similar communities in
            any niche or passion. Visit our meta Forem, forem.dev for more
            information.
          </Typography>
          <Typography
            sx={{ letterSpacing: 2, marginTop: "20px" }}
            variant="subtitle1"
            className=" "
          >
            We believe in transparency and adding value to the ecosystem. We
            hope you enjoy poking around and participating!
          </Typography>
          <Typography
            variant="h5"
            className=" "
            sx={{ fontWeight: "bold", marginTop: 5 }}
          >
            Founder
          </Typography>
          <Box sx={{ marginTop: "70px" }}>
            <img src={profile} width={"70%"} className="mx-auto rounded-lg" />
          </Box>
          <Typography
            sx={{ letterSpacing: 2, marginTop: "20px" }}
            variant="subtitle1"
            className=" "
          >
            BUZZ is led by Zaw Zaw Myint.
          </Typography>
          <Typography
            sx={{ letterSpacing: 2, marginTop: "20px" }}
            variant="subtitle1"
            className=" "
          >
            Happy coding ❤️
          </Typography>
        </Container>
      </Grid>
    </Box>
  );
};

export default About;
