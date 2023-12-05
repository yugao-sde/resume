import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import data from '../data/data.json';

const Education = () => {
  return (
    <>
      <Typography variant="h6">My School</Typography>
      <List>
        <ListItem>
          <ListItemText primary={data.education.schoolName} />
        </ListItem>
      </List>
    </>
  );
};

export default Education;