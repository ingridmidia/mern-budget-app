import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import image from "../assets/Images/basil.png";

const Home = () => {
  return (
    <>
      <Grid container justifyContent="center">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={image}
              alt="laptop open to Basil"
              style={{
                width: "100%",
                maxWidth: 300,
                height: "auto",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "2rem",
                justifyContent: "center",
                alignSelf:  "center"
              }} id="laptot-image"
            />
          </div>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 6, margin: "2rem" }}>
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Andika, sans-serif",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Hey, there!
                <br /> We are Basil.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Andika, sans-serif",
                  textAlign: "center",
                  paddingBottom: "1rem",
                }}
              >
                We love helping people take charge of their financial future!
                <br />
                Interested?
                <br />
                Learn more about us{" "}
                <a href="/about">
                  <Button variant="contained" color="success">
                    HERE
                  </Button>{" "}
                </a>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ padding: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
          }}
        >
          <Typography variant="h3" style={{ fontFamily: "Andika, sans-serif" }}>
            What our customers say about Basil
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {/* Review Boxes */}
          <Grid item xs={10} md={5} lg={3}>
            <Paper elevation={3} style={{ padding: 6, textAlign: "center" }}>
              <Typography variant="body1">
                "I love this app! It's user-friendly, visually appealing, and
                has transformed my financial habits. A must for stress-free
                money management!" - Ana R.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10} md={5} lg={3}>
            <Paper elevation={3} style={{ padding: 6, textAlign: "center" }}>
              <Typography variant="body1">
                "This app simplifies budgeting like never before. Friendly
                interface, powerful tools, and insightful reports. My financial
                game has never been stronger!" - Alex T.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10} md={5} lg={3}>
            <Paper elevation={3} style={{ padding: 6, textAlign: "center" }}>
              <Typography variant="body1">
                "Five stars for this app! Basil is simple and effective. It's
                the financial companion everyone needs. A must-have for anyone
                seeking financial control!" - Dan H.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={10} md={5} lg={3}>
            <Paper elevation={3} style={{ padding: 6, textAlign: "center" }}>
              <Typography variant="body1">
                "Basil changed my life! This app is a game-changer. It
                effortlessly guides you through budgeting, offers clear
                insights, and motivates financial growth." - Emily C.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
