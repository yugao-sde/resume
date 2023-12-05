// Header.js
import React from 'react';
import { Typography } from '@mui/material';
import data from '../data/data.json';

const Header = () => {
  return (
    <>
      <Typography variant="h4" align="center">{data.header.name}</Typography>
      <Typography variant="subtitle1" align="center">
        Email: {data.header.email} | Phone: {data.header.phone}
      </Typography>
    </>
  );
};

export default Header;