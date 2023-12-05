import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import data from '../data/data.json';

const Expertise = () => {
  return (
    <>
      <Typography variant="h6">Expertise</Typography>
      <List>
        {data.expertise.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Expertise;