import React from "react";
import profile from "../assets/images/profile.jpg";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

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
            Contacts
          </Typography>
          <Stack spacing={3}>
            <Typography mt={3}>
              BUZZ Community 👩‍💻👨‍💻 would love to hear from you!
            </Typography>
            <Typography>Email: cuzawzawmyint@gmail.com 😁</Typography>
            <Typography>Twitter: @zmmusk 👻</Typography>
          </Stack>
        </Container>
      </Grid>
    </Box>
  );
};

export default About;
