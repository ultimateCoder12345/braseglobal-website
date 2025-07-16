
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#3f4f7d',
        color: 'white',
        py: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: '0.875rem',
            fontWeight: 400,
          }}
        >
          © 2024 Brase Technologies Pty Ltd - All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
