import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Container justifyContent="center">
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://basil-budget-e685e272efd5.herokuapp.com/">
        Basil 🌿 
       </Link>{}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme} justifyContent='center'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // minHeight: '0vh',
        }}
      >
        <CssBaseline />
        
          
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}