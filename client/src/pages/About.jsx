import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const About = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      p={4}
    >
      <Paper elevation={3} sx={{ maxWidth: "100%", padding: 3 }}>
        <Typography
          variant="body1"
          style={{ fontFamily: "Andika, sans-serif" }}
        >
          Our revolutionary new budgeting web app was born of the minds of three
          brilliant web development students with a deep need to keep track of
          their spending during a time of rising inflation and limited income.
          (#studentlife)
          <br />
          <br />
          Basil is a seamless financial companion designed for simplicity and
          efficiency. Unleash control over your finances with an intuitive
          interface that effortlessly guides you through budgeting, expense
          tracking, and goal setting.
          <br />
          <br />
          Our user-friendly platform transforms the daunting task of financial
          management into an enjoyable experience. Gain clear insights into your
          spending habits and effortlessly achieve your financial goals.
          <br />
          <br />
          Whether you're a seasoned budgeter or just starting your financial
          journey, our app adapts to your needs. Say goodbye to financial stress
          and hello to a brighter financial future. Try our simple-to-use
          budgeting web app today and redefine your relationship with money.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;

