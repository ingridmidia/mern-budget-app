import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Animated } from "react-animated-css";

const Header = () => {
  const backgroundColor = "#BBEDC4";
  const titleColor = "#365242";
  return (
    <Box
      style={{
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Animated animationIn="fadeInRightBig">
        <Typography
          variant="h1"
          style={{ color: titleColor, fontFamily: "Comfortaa, sans-serif", fontWeight: 700 }}
          className="basil-title"
        >
          basil
        </Typography>
      </Animated>
    </Box>
  );
};

export default Header;
