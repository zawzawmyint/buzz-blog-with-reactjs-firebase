import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className=" text-center bg-black opacity-90 text-white flex flex-col gap-5 p-5">
      <Typography variant="body2">
        <Link to={"/"} className=" text-amber-700">
          Buzz Community{" "}
        </Link>{" "}
        ๐ฉโ๐ป๐จโ๐ป โ A constructive and inclusive social network for software
        developers. With you every step of your journey.
      </Typography>
      <ul class="list-none flex justify-center items-center gap-7 text-orange-500 ">
        <Link to={"/"}>
          <li>๐ Home </li>
        </Link>
        <Link to={"/contact"}>
          <li>๐ฉContact</li>
        </Link>
        <Link to={"/about"}>
          <li>๐About</li>
        </Link>
      </ul>
      <Typography variant="body2">
        Made with love and React.{" "}
        <Link to={"/"} className=" text-amber-700">
          {" "}
          Buzz Community{" "}
        </Link>{" "}
        ๐ฉโ๐ป๐จโ๐ป ยฉ 2016 - 2023.
      </Typography>
    </Box>
  );
};

export default Footer;
