import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import postphoto from "../../assets/images/postphoto.jpg";
import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";

const MyPosts = () => {
  return (
    <>
      {[1, 2, 3].map((arr) => {
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
            <CardMedia
              sx={{ height: 180 }}
              image={postphoto}
              title="green iguana"
            />
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
                    Jan 27 (22 hours ago)
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
              <Stack direction="row" spacing={20} ml={7}>
                <Stack direction="row" spacing={2}>
                  <Typography color="text.secondary">7 Reactions</Typography>
                  <Typography color="text.secondary">5 Comments</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Typography color="text.secondary">7 mins read</Typography>
                  <Typography color="text.secondary">save icon</Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default MyPosts;
