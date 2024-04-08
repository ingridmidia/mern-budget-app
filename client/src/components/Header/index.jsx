import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Animated } from "react-animated-css";
import "@fontsource/lobster-two";

const Header = () => {
  const backgroundColor = "#578d13";
  const titleColor = "#3a302a";
  return (
    <Box
      style={{
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated animationIn="fadeInRightBig">
        <Typography
          variant="h1"
          fontFamily="Lobster Two, cursive"
          style={{ color: titleColor }}
        >
          Basil
        </Typography>
      </Animated>
    </Box>
  );
};

export default Header;
