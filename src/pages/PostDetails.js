import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import postphoto from "../assets/images/postphoto.jpg";
import profile from "../assets/images/profile.jpg";
import { Editor } from "react-draft-wysiwyg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const PostDtails = () => {
  const [editorState, setEditorState] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}>
          <Stack className=" text-center flex gap-7 mt-20">
            <Box sx={{ color: "white" }}>
              <FavoriteIcon />
              <Typography>133</Typography>
            </Box>
            <Box sx={{ color: "white" }}>
              <CommentIcon />
              <Typography>6</Typography>
            </Box>
            <Box sx={{ color: "white" }}>
              <BookmarkIcon />
              <Typography>288</Typography>
            </Box>
            <Box sx={{ color: "white" }}>
              <MoreVertIcon />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <>
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
                <Typography
                  variant="h3"
                  color="text.secondary"
                  ml={2}
                  mt={2}
                  fontWeight={"bold"}
                >
                  Top Developer Communities to Join in 2023
                </Typography>
                <Container>
                  <Typography
                    variant="body1"
                    mt={2}
                    sx={{ letterSpacing: "2px", lineSpacing: "3px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam nam ut optio minima amet magni aliquam cumque
                    voluptate dolores doloribus recusandae, soluta rem
                    laboriosam iusto. Consequatur blanditiis ex dignissimos
                    magnam?
                  </Typography>
                  <Divider />
                  <Box className="flex justify-between mt-5">
                    <Typography variant="h5">Top commants (6)</Typography>
                    <Button
                      variant="contained"
                      color="text"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                  <Box className="flex mt-5 gap-2 shadow-md p-2 rounded-md">
                    <Box>
                      <img
                        src={profile}
                        width={40}
                        height={30}
                        style={{ borderRadius: "150px" }}
                      />
                    </Box>

                    <Box>
                      <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        placeholder="Add to the discussion"
                        editorStyle={{
                          fontSize: "18px",
                          height: "107px",
                          letterSpacing: "5px",
                          width: "215%",
                          opacity: "0.7",
                        }}
                        toolbar={{
                          options: ["inline", "blockType", "fontSize"],
                          inline: {
                            inDropdown: false,
                            className: "test",
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ["bold", "italic", "underline"],
                            bold: {
                              className: "test",
                              style: { color: "red" },
                            },
                            italic: { className: undefined },
                            underline: { className: undefined },
                          },
                        }}
                        onEditorStateChange={onEditorStateChange}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: "capitalize", marginRight: "4px" }}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="contained"
                        color="text"
                        sx={{ textTransform: "capitalize" }}
                      >
                        Preview
                      </Button>
                    </Box>
                  </Box>
                  <Box className="flex mt-5 gap-2 shadow-md p-2 rounded-md">
                    <Box>
                      <img
                        src={profile}
                        width={60}
                        height={30}
                        style={{ borderRadius: "150px" }}
                      />
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: "5px",
                          }}
                        >
                          <Typography>maxmarie</Typography>
                          <Typography>Feb 1</Typography>
                        </Box>
                        <MoreHorizIcon />
                      </Box>
                      <Box mt={2}>
                        <Typography variant="body2" sx={{ letterSpacing: 1 }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, alias. A, voluptatum amet. Eaque
                          vero sapiente non beatae ex debitis inventore magnam
                          minima itaque aut cumque, praesentium, velit ullam
                          quibusdam?
                        </Typography>
                        <Stack direction="row" spacing={2} mt={2}>
                          <Stack direction="row">
                            <FavoriteIcon />1 llike
                          </Stack>
                          <Stack direction="row">
                            <CommentIcon />
                            Reply
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </CardContent>
            </Card>
          </>
        </Grid>
        <Grid item xs={12} md={4} sx={{ position: "relative" }}>
          <Box>
            <img
              src={profile}
              width={60}
              height={30}
              style={{
                borderRadius: "150px",
                position: "absolute",
                top: "2%",
                left: "7%",
              }}
            />
            <Container
              sx={{
                border: 1,
                marginTop: 5,
                boxShadow: "5px",
                backgroundColor: "white",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                className="text-center"
                sx={{ fontWeight: "bold", marginTop: "5px" }}
              >
                Zaw Zaw Myint
              </Typography>

              <Button
                variant="contained"
                sx={{ width: "100%", textTransform: "capitalize" }}
              >
                Edit Profile
              </Button>

              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                dolorum dolorem ratione minus tempora rem perferendis voluptatem
                sit aliquid, eos consequuntur, doloribus optio placeat illum
                commodi eum similique laborum dicta!
              </Typography>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  LOCAITON
                </Typography>
                <Typography variant="body2">Myanmar, Yangon</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  EDUCATJION
                </Typography>
                <Typography variant="body2">
                  Boys' High School and College
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  WORK
                </Typography>
                <Typography variant="body2">
                  Freelancer - Self Employed
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  JOINED
                </Typography>
                <Typography variant="body2">Nov 27, 2022</Typography>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostDtails;
