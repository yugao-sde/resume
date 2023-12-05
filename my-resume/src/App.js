import React from 'react';
import { Paper, Divider, Grid } from '@mui/material';
import Header from './components/Header';
import Education from './components/Education';
import Activities from './components/Activities';
import Expertise from './components/Expertise';
import Carousel from './components/Carousel';
import './styles/App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';



// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Include your Google Font here
  },
});


function App() {

  const numSnowflakes = 20; 

  return (
    <ThemeProvider theme={theme}>
      <div className="top-left-snowflake" />
      {Array.from({ length: numSnowflakes }).map((_, index) => {
        const size = Math.random() * 2 + 1; // Random size between 1em and 3em
        const duration = Math.random() * 5 + 10; // Random duration between 10s and 15s
        const delay = Math.random() * -5; // Random delay between 0s and -5s (to start higher up)

      return (
            <div
              key={index}
              className="snowflake"
              style={{ 
                left: `${Math.random() * 100}%`, 
                fontSize: `${size}em`,
                animationDuration: `${duration}s, 3s`,
                animationDelay: `${delay}s, 0s`
              }}
            >
              ❄
            </div>
        );
    })}
    <Paper style={{
      padding: 20,
      paddingBottom: 80,
      margin: '20px auto', // Centers the paper and adds margin on the top and bottom
      maxWidth: '800px', // Maximum width for larger screens
      minWidth: '300px', // Minimum width for smaller screens
      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Transparent white background
      backdropFilter: 'blur(8px)', // Blur effect
      color: 'grey', // White text color
      boxSizing: 'border-box', // Ensures padding does not affect the total width
    }}
    sx={{
      p: 2, // padding
      mb: 2, // margin bottom
      boxShadow: 1, // theme shadows ranging from 0 to 24
      ':hover': {
        boxShadow: 6, // increase shadow depth on hover
        transition: '0.3s', // smooth transition
      },
    }}
    >
      <Header />
      <Divider style={{ margin: '20px 0' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Expertise />
        </Grid>
        <Grid item xs={12}>
          <Activities />
        </Grid>
        <Grid item xs={12}>
          <Carousel/>
        </Grid>
      </Grid>
    </Paper>
    </ThemeProvider>
  );
}

export default App;