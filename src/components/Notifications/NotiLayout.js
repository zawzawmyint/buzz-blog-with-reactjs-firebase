import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ParkIcon from "@mui/icons-material/Park";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function NotiLayout() {
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
          <Link to={"/notifications"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className=" hover:underline" primary="All" />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* <Divider color="gray" sx={{ opacity: "0.6" }} /> */}
          <Link to={"/notifications"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className=" hover:underline" primary="Commants" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/notifications"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className=" hover:underline" primary="Posts" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
}
