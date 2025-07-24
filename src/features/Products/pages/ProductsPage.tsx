import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Paper, keyframes } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';

// Animation for the icon
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const ProductsPage: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <Box key={interval} sx={{ textAlign: 'center', px: 2 }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
      <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
        {interval}
      </Typography>
    </Box>
  ));

  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingBottom: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: 'url("/src/assets/images/CaseStudy2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 20, 40, 0.7)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Paper 
          elevation={12} 
          sx={{ 
            p: { xs: 3, sm: 6 },
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Exciting New Products Coming Soon!
          </Typography>
          <Typography variant="h6" color="grey.300" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Our team is hard at work developing innovative solutions to meet your needs. 
            Stay tuned for our upcoming product launches that will revolutionize your experience.
          </Typography>
          
          {timerComponents.length ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              {timerComponents}
            </Box>
          ) : (
            <Typography variant="h5" sx={{ mt: 4, fontWeight: 'medium' }}>
              Our Products Are Live! 🚀
            </Typography>
          )}

        </Paper>
      </Container>
    </Box>
  );
};

export default ProductsPage;