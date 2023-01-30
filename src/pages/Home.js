import { Container, Grid } from "@mui/material";
import React from "react";
import Layout from "../components/Home/Layout";
import Posts from "../components/Home/Posts";

export const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "black" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Layout />
        </Grid>
        <Grid item xs={8}>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
};
