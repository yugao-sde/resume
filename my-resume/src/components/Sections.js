import React from 'react';
import { Paper, styled } from '@mui/material';

// Create a styled Paper component with MUI's styled utility
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
  backdropFilter: 'blur(10px)', // Apply a blur to the background elements behind the Paper
  boxShadow: theme.shadows[1], // Apply initial shadow
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'translateY(-4px)', // Slightly lift the Paper component
    boxShadow: theme.shadows[6], // More pronounced shadow on hover
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Increase transparency on hover
  },
}));

const Section = ({ children, ...other }) => {
  return (
    <StyledPaper {...other}>
      {children}
    </StyledPaper>
  );
};

export default Section;