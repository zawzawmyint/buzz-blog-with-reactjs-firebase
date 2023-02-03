import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../assets/images/profile.jpg";
import MyPosts from "../components/Profile/MyPosts";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Box className=" bg-black text-white">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box className=" w-4/5 mx-auto">
            <Box sx={{ marginTop: "70px" }}>
              <img
                src={profile}
                width={100}
                height={30}
                style={{
                  borderRadius: "150px",
                  position: "absolute",
                  top: "13%",
                  left: "46%",
                }}
              />
              <Box className="bg-gray-800 p-5 rounded-lg ">
                <Box className=" flex justify-end ">
                  <Link to={"/settings"}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                    >
                      Edit Profile
                    </Button>
                  </Link>
                </Box>
                <Box className=" text-center mt-10 flex flex-col gap-3">
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Flez
                  </Typography>
                  <Typography variant="body1" sx={{ letterSpacing: "1px" }}>
                    Giving has its won reward
                  </Typography>
                  <Typography variant="body2" sx={{ letterSpacing: "1px" }}>
                    Joined on Apr 6, 2022
                  </Typography>
                </Box>
                <Divider sx={{ bgcolor: "gray", marginTop: 3 }} />
                <Box className=" w-3/4 mx-auto bg-gray-800 p-5 rounded-lg">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className="text-center">
                      <Typography>Education</Typography>
                      <Typography>B.C.Sc</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className="text-center">
                      <Typography>Work</Typography>
                      <Typography>Develoer</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className=" w-4/5 mx-auto ">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box className="bg-gray-800 p-5 rounded-lg mt-3 flex flex-col gap-7">
                  <Typography>Skills/Languages</Typography>
                  <Typography>Html/ Css/ JavaScript / React</Typography>
                </Box>
                <Box className="bg-gray-800 p-5 rounded-lg mt-3 flex flex-col gap-3">
                  <Typography>4 posts published</Typography>
                  <Typography>1 comment written</Typography>
                  <Typography>31 tags followed</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="bg-gray-800 p-5 rounded-lg mt-2">
                  <MyPosts />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
