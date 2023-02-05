import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../assets/images/profile.jpg";
import SettingsLayout from "./SettingsLayout";
import { Link } from "react-router-dom";

const Account = () => {
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
              <Typography sx={{ fontWeight: "bold" }}>
                Set new password
              </Typography>
              <Typography>
                If your account was created using social account authentication,
                you may prefer to add an email log in. If you signed up with a
                social media account, please reset the password for your primary
                email address (cuzawzawmyint@gmail.com) in order to enable this.
                Please note that email login is in addition to social login
                rather than a replacement for it, so your authenticated social
                account will continue to be linked to your account.
              </Typography>
              <TextField
                size="small"
                fullWidth
                label="Current Password"
                id="fullWidth"
              />
              <TextField
                size="small"
                fullWidth
                label="Password"
                id="fullWidth"
              />
              <TextField
                size="small"
                fullWidth
                label="Confirm new password"
                id="fullWidth"
              />
              <Button
                variant="contained"
                color="secondary"
                className="w-2/6 "
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Set New Password
              </Button>
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography sx={{ fontWeight: "bold" }}>
                Account emails
              </Typography>
              <Typography>Primary email cuzawzawmyint@gmail.com</Typography>
              <Typography>GitHub email cuzawzawmyint@gmail.com</Typography>
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography sx={{ fontWeight: "bold" }}>
                Export content
              </Typography>
              <Typography>
                You can request an export of all your content. Currently we only
                support the export of your posts and comments, if you have any.
                They will be emailed to your inbox.
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Request an export of your content"
                />
              </FormGroup>
              <Button
                variant="contained"
                color="secondary"
                className="w-2/6 "
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Submit Data Request
              </Button>
            </Box>
            <Box className="bg-gray-400 text-black p-5 rounded-lg mt-3 flex flex-col gap-7">
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "red" }}
              >
                Danger Zone
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Delete account
              </Typography>
              <Typography>Deleting your account will:</Typography>
              <Typography>
                Delete your profile, along with your authentication
                associations. This does not include applications permissions.
                You will have to remove them yourself:
              </Typography>
              <Typography>
                Delete any and all content you have, such as articles, comments,
                or your reading list. Allow your username to become available to
                anyone.
              </Typography>

              <Button
                variant="contained"
                color="error"
                className="w-2/6 "
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Delete Account
              </Button>
              <Typography>
                <Link to={"/contact"}>
                  <span className=" text-sky-700">Contact us</span>
                </Link>{" "}
                if you have any questions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Account;
