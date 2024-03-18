
import React from 'react';
import { Box, Grid, Paper, Typography, Button, ThemeProvider } from '@mui/material';
import LapTop from '../assets/Images/Basil-laptop.png';
import PlantGif from '../assets/Images/KatieVosPlant.gif';

const Home = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}> {/* Adjusting the size for medium screens */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Adjust for different screen sizes
              flexWrap: 'wrap', // Allow items to wrap to the next line
              alignItems: 'center', // Align items at the midline
              marginBottom: 2,
            }}
          >
            {/* Image */}
            <Box sx={{ flex: '1 1 calc(25% - 20px)', padding: '0 10px', marginBottom: '20px' }}> {/* 20px padding on each side */}
              <img
                src={LapTop}
                alt="laptop open to Basil"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Box>
            {/* Text Box */}
            <Box
              sx={{
                flex: '1 1 calc(50% - 20px)', // 20px padding on each side
                padding: '0 10px', // Adjust padding as needed
                textAlign: { xs: 'center', sm: 'end' },
                marginTop: { xs: 2, sm: 0 },
                marginBottom: { xs: 2, sm: 0 }, // Add margin bottom to space out from the next item
              }}
            >
              <Paper elevation={3} style={{ maxHeight: '100vh', overflow: 'auto', padding: 3 }}>
                <Typography variant='h4' style={{ fontFamily: 'Lobster Two, sans-serif', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>👋 Hey there! We are Basil.</Typography>
                <Typography variant='body' style={{ fontFamily: 'Andika, sans-serif', fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}> We love helping people take charge of their financial future!
                  <br />
                  Interested? Learn more about us <a href='/about'><Button variant='contained' color='success' >HERE</Button> </a>
                </Typography>
              </Paper>
            </Box>
            {/* GIF */}
            <Box sx={{ flex: '1 1 calc(25% - 20px)', padding: '0 10px' }}> {/* 20px padding on each side */}
              <img
                src={PlantGif}
                alt="Illustrated Gif of plants"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  }}
>
  <Box sx={{ maxWidth: '100%', wordWrap: 'break-word' }}>
    <Typography
      variant='h3'
      style={{
        fontFamily: 'Lobster Two, sans-serif',
        fontSize: 'clamp(1.5rem, calc(8vw + 5px), 3rem)', // Adjusted font size for smaller screens
        '@media (max-width: 699px)': {
          fontSize: 'clamp(1.5rem, calc(5vw + 5px), 2rem)', // Font size for screens below 699px
        },
      }}
    >
      Check out what Basil users are saying!
    </Typography>
  </Box>
</Box>

<Grid container spacing={{ xs: 2, md: 3, xl: 4 }} justifyContent={'center'}>
  {/* First sub-container */}
  <Grid item xs={12} md={6} xl={3}>
    <Box
      sx={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center', // Align items to center horizontally
        textAlign: 'center',
        '& > :not(style)': {
          m: 2, // Adjust margin as needed
          p: 2,
          width: '100%', // Set width to 100% to take up full width of the column
          maxWidth: 300, // Set max-width to control the maximum width of the box
        },
      }}
    >
      <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>
        "Absolutely love this budgeting app! It's user-friendly, visually appealing, and has transformed my financial habits. The intuitive features make budgeting a breeze, providing insightful analytics. A must-have for anyone seeking financial control!" - Sophia R.
      </Paper>
      <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>
        "Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.
      </Paper>
    </Box>
  </Grid>
  {/* Second sub-container */}
  <Grid item xs={12} md={6} xl={3}>
    <Box
      sx={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center', // Align items to center horizontally
        textAlign: 'center',
        '& > :not(style)': {
          m: 2, // Adjust margin as needed
          p: 2,
          width: '100%', // Set width to 100% to take up full width of the column
          maxWidth: 300, // Set max-width to control the maximum width of the box
        },
      }}
    >
      <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>
        "Five stars for this brilliant budgeting app! Its simplicity and effectiveness make using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.
      </Paper>
      <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>
        "Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.
      </Paper>
    </Box>
  </Grid>
</Grid>





    </>
  );
};

export default Home;
