import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SettingsLayout from "../components/Settings/SettingsLayout";
import profile from "../assets/images/profile.jpg";
import NotiLayout from "../components/Notifications/NotiLayout";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <Box className=" bg-black text-white p-5">
      <Box className=" w-4/5 mx-auto">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Notifications
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={0} md={4}>
            <NotiLayout />
          </Grid>
          <Grid item xs={12} md={8}>
            {[1, 2].map((item) => {
              return (
                <Card
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    borderradius: "10px",
                    boxShadow: "-moz-initial",
                    marginTop: "10px",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <img
                        src={profile}
                        width={50}
                        style={{ borderRadius: "150px" }}
                      />
                      <Box>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          Flez
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="caption"
                          component="div"
                          color="text.secondary"
                        >
                          (22 hours ago)
                        </Typography>
                      </Box>
                    </Stack>
                    <Link to={"/post-details"}>
                      <Typography
                        variant="h4"
                        color="text.secondary"
                        ml={7}
                        fontWeight={"bold"}
                        className=" hover:text-indigo-600"
                      >
                        Top Developer Communities to Join in 2023
                      </Typography>
                    </Link>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" spacing={40} ml={7}>
                      <Stack direction="row" spacing={2}>
                        <Typography color="text.secondary">Like</Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography color="text.secondary">
                          7 mins read
                        </Typography>
                        <Typography color="text.secondary">
                          save icon
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Notifications;
