import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function Layout() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "black",
        color: "white",
        opacity: "0.8",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <Link to={"/"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className=" hover:underline" primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider color="gray" sx={{ opacity: "0.6" }} />
          <Link to={"/about"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon sx={{ color: "white" }} />
                </ListItemIcon>

                <ListItemText className=" hover:underline" primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider color="gray" sx={{ opacity: "0.6" }} />
          <Link to={"/contact"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ContactPageIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className=" hover:underline" primary="Contact" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider color="gray" sx={{ opacity: "0.6" }} />
        </List>
      </nav>
    </Box>
  );
}
