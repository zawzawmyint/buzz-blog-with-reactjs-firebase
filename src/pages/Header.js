import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import profile from "../../src/assets/images/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import authStore from "../store/AuthStore";

const Header = () => {
  const isAuth = authStore((state) => state.isAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack
      direction="row"
      spacing={50}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "15px",
        color: "white",
        opacity: "0.9",
        // position: "fixed",
        // marginTop: "10px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Link to={"/"}>
          <Typography
            className="border-2 rounded-lg p-1"
            sx={{ fontWeight: "bold" }}
          >
            Buzz
          </Typography>
        </Link>
        <TextField
          id="input-with-icon-textfield"
          size="small"
          placeholder="search..."
          sx={{
            backgroundColor: "GrayText",
            borderRadius: "10px",
            width: "500px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment sx={{ color: "white" }} position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Stack>
      {isAuth && (
        <Stack direction="row" spacing={2}>
          <Link to={"/create-post"}>
            <Button
              variant="outlined"
              color="warning"
              size="medium"
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              className="hover:underline"
            >
              Create Post
            </Button>
          </Link>
          <Link to={"/notifications"}>
            <IconButton sx={{ color: "white" }}>
              <NotificationsNoneIcon />
            </IconButton>
          </Link>
          <Box>
            <img
              src={profile}
              width={35}
              style={{ borderRadius: "150px" }}
              className=" cursor-pointer"
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              borderRadius="30"
            >
              <Card>
                <CardContent
                  sx={{
                    width: "300px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    borderRadius: "10px",
                  }}
                >
                  <Link to={"/profile"}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "whitesmoke" }}
                      className=" hover:underline"
                    >
                      Flez
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    sx={{ color: "whitesmoke" }}
                    className=" hover:underline"
                  >
                    @accountname
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      width: "100%",
                      bgcolor: "black",
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <Link to={"/create-post"}>
                          <ListItem disablePadding>
                            <ListItemButton onClick={handleClose}>
                              <ListItemText
                                primary="Create Post"
                                sx={{
                                  color: "whitesmoke",
                                }}
                                className=" hover:underline"
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                        <Link to={"/settings"}>
                          <ListItem disablePadding>
                            <ListItemButton
                              onClick={handleClose}
                              component="a"
                              href="#simple-list"
                            >
                              <ListItemText
                                primary="Settings"
                                sx={{ color: "whitesmoke" }}
                                className=" hover:underline"
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      </List>
                    </nav>
                  </Box>
                  <Divider />
                  <Link to={"/sign-out"}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleClose}
                      sx={{
                        textTransform: "capitalize",
                        color: "white",
                      }}
                      className=" hover:underline"
                    >
                      Sign Out
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Popover>
          </Box>
        </Stack>
      )}
      {!isAuth && (
        <Stack direction="row" spacing={2}>
          <Link to={"/login"}>
            <Button
              variant="text"
              sx={{
                textTransform: "capitalize",
                color: "white",
                "&:hover": {
                  display: "underlined",
                  backgroundColor: "gray",
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
              Create Account
            </Button>
          </Link>
        </Stack>
      )}
    </Stack>
  );
};

export default Header;
