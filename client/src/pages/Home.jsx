
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Graphic from '../assets/Images/Basil-laptop.png'
const Home = () => {
  return (
    <Grid container spacing={{ xs: 12, md: 9, xl: 3 }} justifyContent="end">
    {/* Image and Text Section */}
    <Grid item xs={12} md={10}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'center',
          marginBottom: 0,
        }}
      >
          {/* Image */}
          <img
            src={Graphic}
            alt="laptop open to Basil"
            style={{
              width: '100%', // Make the image take 100% of the container
              maxWidth: 400, // Limit the maximum width
              height: 'auto',
              objectFit: 'cover', // Prevent distortion
            }}
          />


          {/* Text Box */}
          <Box
            sx={{
              textAlign: 'end',
            }}
          >
            <Box />
            <Grid />
            <Grid container spacing={{ xs: 6 }} justifyContent={'block'}>
              <Grid item xs={6} md={10}>
                <Box>
                  <Typography variant="h3"> 👋 Hey there! We are Basil. </Typography>
                  <Typography variant="body">
                    Our revolutionary new budgeting web app is a seamless financial companion designed for simplicity and efficiency.
                    Unleash control over your finances with an intuitive interface that effortlessly guides you through budgeting, expense tracking, and goal setting. Our user-friendly platform transforms the daunting task of financial management into an enjoyable experience. Gain clear insights into your spending habits and effortlessly achieve your financial goals. Whether you're a seasoned budgeter or just starting your financial journey, our app adapts to your needs. Say goodbye to financial stress and hello to a brighter financial future. Try our simple-to-use budgeting web app today and redefine your relationship with money.

                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      {/* Paper Components Section */}
      <Grid container spacing={{ xs: 2, md: 3, xl: 4 }} columns={{ xs:2, md: 7, xl: 12 }} justifyContent={'center'}>
        <Box
          sx={{
            display: "flex"  ,
            flexWrap: 'wrap',
            '& > :not(style)': {

              m: 4,
              p: 2,
              width: 260,
              height: 255,

            },
          }}
        >
          <Paper varient='elevation'>"Absolutely love this budgeting app! It's user-friendly, visually appealing, and has transformed my financial habits. The intuitive features make budgeting a breeze, providing insightful analytics. A must-have for anyone seeking financial control!" - Sophia R.</Paper>
          <Paper varient='elevation'>"Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.</Paper>
          <Paper varient='elevation'>"Five stars for this brilliant budgeting app! Its simplicity and effectiveness makes using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.</Paper>
          <Paper varient='elevation'>"Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.</Paper>
        </Box>
      </Grid>
      </Grid>
      );
};

      export default Home;
