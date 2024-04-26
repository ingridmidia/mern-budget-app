import * as React from "react";
import { Typography, Box } from "@mui/material";

const Footer = function StickyFooter() {
  return (
    <Box textAlign="center">
      <Typography
        variant="body2"
        justifyContent="center"
        fontFamily={"Andika, sans-serif"}
      >
        {"Copyright © "}
        <span>Basil 🌿</span>
      </Typography>
    </Box>
  );
};

export default Footer;


