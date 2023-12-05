import React from 'react';
import data from '../data/data.json';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Activities = () => {
  return (
    <>
      <Typography variant="h6">Activities & Achievements</Typography>
      <List>
        {data.activities.map((activity, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={activity.title} secondary={activity.description} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Activities;