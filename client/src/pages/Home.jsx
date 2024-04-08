import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import LapTop from "../assets/Images/Basil-laptop.png";

const Home = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 2,
              marginBottom: { xs: 2, sm: 0 },
            }}
          >
            {/* Image */}
            <img
              src={LapTop}
              alt="laptop open to Basil"
              style={{
                width: "100%",
                maxWidth: 400,
                height: "auto",
                objectFit: "cover",
              }}
            />

            {/* Text Box */}
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
              }}
            >
              <Paper elevation={3} style={{ padding: 3 }}>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Lobster Two, sans-serif" }}
                >
                  Hey there! We are Basil.
                </Typography>
                <Typography
                  variant="body"
                  style={{ fontFamily: "Andika, sans-serif" }}
                >
                  We love helping people take charge of their financial future!
                  <br />
                  Interested? Learn more about us{" "}
                  <a href="/about">
                    <Button variant="contained" color="success">
                      HERE
                    </Button>{" "}
                  </a>
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 3,
        }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: "Lobster Two, sans-serif" }}
        >
          Check out what Basil users are saying!
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} md={5} lg={3}>
          <Paper elevation={3} style={{ padding: 2, textAlign: "center" }}>
            "Absolutely love this budgeting app! It's user-friendly, visually
            appealing, and has transformed my financial habits. The intuitive
            features make budgeting a breeze, providing insightful analytics. A
            must-have for anyone seeking financial control!" - Sophia R.
          </Paper>
        </Grid>
        <Grid item xs={10} md={5} lg={3}>
          <Paper elevation={3} style={{ padding: 2, textAlign: "center" }}>
            "Impressive! This app simplifies budgeting like never before.
            Alex-friendly interface, powerful tools, and insightful reports. My
            financial game has never been stronger!" - Alex T.
          </Paper>
        </Grid>
        <Grid item xs={10} md={5} lg={3}>
          <Paper elevation={3} style={{ padding: 2, textAlign: "center" }}>
            "Five stars for this brilliant budgeting app! Its simplicity and
            effectiveness makes using it FUN! From tracking expenses to setting
            goals, it's the financial companion everyone needs. A total
            game-changer!" - Olivia H.
          </Paper>
        </Grid>
        <Grid item xs={10} md={5} lg={3}>
          <Paper elevation={3} style={{ padding: 2, textAlign: "center" }}>
            "Basil changed my life! This app is a game-changer. It effortlessly
            guides you through budgeting, offers clear insights, and motivates
            financial growth. A must for stress-free money management!" - Emily
            C.
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
