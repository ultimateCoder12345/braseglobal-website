
import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Home, ArrowBack, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        pt: 10,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '6rem', md: '8rem' },
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
            }}
          >
            404
          </Typography>
          
          <Typography variant="h4" component="h2" gutterBottom color="text.primary">
            Page Not Found
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Home />}
              onClick={() => navigate('/')}
              sx={{ minWidth: 160 }}
            >
              Go Home
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              sx={{ minWidth: 160 }}
            >
              Go Back
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Search />}
              href="/services"
              sx={{ minWidth: 160 }}
            >
              Browse Services
            </Button>
          </Box>
          
          <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary">
              If you believe this is an error, please{' '}
              <Button
                variant="text"
                size="small"
                href="/contact"
                sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
              >
                contact our support team
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
