import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SettingsLayout from "../components/Settings/SettingsLayout";
import profile from "../assets/images/profile.jpg";

const Settings = () => {
  return (
    <Box className=" bg-black text-white p-5">
      <Box className=" w-4/5 mx-auto">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Settings for @zawzawmyint
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={0} md={4}>
            <SettingsLayout />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-3">
              <Button
                variant="contained"
                color="secondary"
                className="w-2/6"
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Connet to forem
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="w-2/6 "
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Connet to twitter
              </Button>
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography sx={{ fontWeight: "bold" }}>User</Typography>
              <TextField size="small" fullWidth label="Name" id="fullWidth" />
              <TextField size="small" fullWidth label="Email" id="fullWidth" />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Display email on profile"
                />
              </FormGroup>
              <TextField
                size="small"
                fullWidth
                label="Username"
                id="fullWidth"
              />
              <Box className="flex justify-center items-center gap-2">
                <img
                  src={profile}
                  width={50}
                  height={30}
                  style={{
                    borderRadius: "150px",
                  }}
                />
                <TextField
                  type={"file"}
                  size="medium"
                  fullWidth
                  id="fullWidth"
                />
              </Box>
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography sx={{ fontWeight: "bold" }}>Basic</Typography>
              <TextField
                size="small"
                fullWidth
                label="Website URL"
                id="fullWidth"
              />
              <TextField
                size="small"
                fullWidth
                label="Location"
                id="fullWidth"
              />

              <TextField
                size="small"
                fullWidth
                label="Bio"
                id="fullWidth"
                multiline
                rows={5}
              />
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography sx={{ fontWeight: "bold" }}>Work</Typography>
              <TextField size="small" fullWidth label="Work" id="fullWidth" />
              <TextField
                size="small"
                fullWidth
                label="Education"
                id="fullWidth"
              />
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Button
                variant="contained"
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Save Profile Information
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
