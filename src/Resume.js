// Resume.js
import React from 'react';
import { Paper, Divider, Grid } from '@mui/material';
import Header from './components/Header';
import Education from './components//Education';
import Activities from './components/Activities';
import Expertise from './components/Expertise';

const Resume = () => {
  const paperStyle = {
    padding: 20,
    margin: 20,
    background: 'linear-gradient(135deg, rgba(135,222,255,0.7) 0%, rgba(255,177,193,0.7) 100%)'
  };

  return (
    <Paper style={paperStyle}>
      <Header />
      <Divider style={{ margin: '20px 0' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Activities />
        </Grid>
        <Grid item xs={12}>
          <Expertise />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Resume;
