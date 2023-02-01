import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../store/AuthStore";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const CreatePost = () => {
  const isAuth = authStore((state) => state.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("/");
  });

  const [editorState, setEditorState] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <Box sx={{ backgroundColor: "black", color: "white" }}>
      <Stack direction="row" spacing={70} pl={8} pt={2}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "700", fontSize: "18px" }}
        >
          Create Post
        </Typography>
        <Stack direction="row" spacing={45}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                "&:hover": {
                  color: "darkorange",
                },
              }}
            >
              Edit
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                "&:hover": {
                  color: "darkorange",
                },
              }}
            >
              Preview
            </Typography>
          </Box>
          <Tooltip title="Close the eidtor">
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              <CloseFullscreenIcon
                onClick={handleClickOpen}
                color="white"
                sx={{ cursor: "pointer" }}
              />
            </IconButton>
          </Tooltip>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              className=" flex justify-between "
              sx={{ fontWeight: "bold" }}
            >
              {"You have unsaved changes"}
              <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
            </DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You've made changes to your post. Do you want to navigate to
                leave this page?
              </DialogContentText>
              <Button
                onClick={handleClose}
                variant="contained"
                color="error"
                sx={{
                  marginTop: 2,
                  marginRight: 2,
                  textTransform: "capitalize",
                }}
              >
                Yes, leave the page
              </Button>
              <Button
                onClick={handleClose}
                autoFocus
                variant="contained"
                color="text"
                sx={{ marginTop: 2, textTransform: "capitalize" }}
              >
                No, keep editing
              </Button>
            </DialogContent>
          </Dialog>
        </Stack>
      </Stack>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={0.5}>
          <Grid item xs={12} md={8}>
            <Item>
              <Stack spacing={3}>
                {/* <Button
                  variant="outlined"
                  sx={{
                    width: "200px",
                    textTransform: "capitalize",
                    color: "black",
                    borderColor: "gray",
                  }}
                  for="upload"
                >
                  Add a cover image
                  <TextField id="upload" hidden type={"file"}></TextField>
                </Button> */}
                <input type="file" id="upload" hidden />
                <label
                  for="upload"
                  style={{
                    backgroundColor: "white",
                    color: "gray",
                    padding: "5px",
                    textAlign: "center",
                    border: "1px solid gray",
                    width: "25%",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Add a cover image
                </label>
                <TextField
                  multiline
                  margin="normal"
                  maxRows={2}
                  id="outlined-basic"
                  variant="standard"
                  placeholder="New Post Title here..."
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: {
                      fontSize: 40,
                      paddingTop: "10px",
                      fontWeight: "bold",
                    },
                  }} // font size of input text
                  // InputLabelProps={{ style: { fontSize: 40 } }} // font size of input label
                  size="large"
                />
                <TextField
                  multiline
                  maxRows={20}
                  id="outlined-basic"
                  variant="standard"
                  placeholder="Add up to 4 tags"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: {
                      fontSize: 15,
                      fontWeight: "normal",
                    },
                  }} // font size of input text
                />
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  placeholder="Write your content post here..."
                  editorStyle={{
                    fontSize: "18px",
                    height: "107px",
                    letterSpacing: "5px",
                  }}
                  toolbar={{
                    options: ["inline", "blockType", "fontSize"],
                    inline: {
                      inDropdown: false,
                      className: "test",
                      component: undefined,
                      dropdownClassName: undefined,
                      options: ["bold", "italic", "underline"],
                      bold: { className: "test", style: { color: "red" } },
                      italic: { className: undefined },
                      underline: { className: undefined },
                    },
                  }}
                  onEditorStateChange={onEditorStateChange}
                />
              </Stack>
            </Item>
            <Link to={"/"}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  width: "100px",
                  textTransform: "capitalize",
                  color: "white",
                  borderColor: "gray",
                  marginTop: "5px",
                  marginBottom: "20px",
                  marginRight: "10px",
                }}
              >
                Publish
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="warning"
              sx={{
                width: "100px",
                textTransform: "none",
                color: "white",
                borderColor: "gray",
                marginTop: "5px",
                marginBottom: "20px",
                border: "0",
              }}
            >
              Save draft
            </Button>
            <Button
              variant="outlined"
              color="warning"
              sx={{
                width: "200px",
                textTransform: "none",
                color: "white",
                borderColor: "gray",
                marginTop: "5px",
                marginBottom: "20px",
                border: "0",
              }}
            >
              Revert new changes
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }} mt={13}>
              Writing a Great Post Title
            </Typography>
            <Typography variant="body2" mt={2}>
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreatePost;
