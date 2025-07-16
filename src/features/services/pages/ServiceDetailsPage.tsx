
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';
import { ArrowBack, CheckCircle } from '@mui/icons-material';
import { services } from '../../homepage/services/data/services';

export const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = services.find((s, index) => index.toString() === id);

  if (!service) {
    return (
      <Box sx={{ pt: 10, minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Service not found</Typography>
      </Box>
    );
  }

  const IconComponent = service.icon;

  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back to Services
        </Button>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ color: 'primary.main', mr: 2 }}>
                  <IconComponent size={40} />
                </Box>
                <Typography variant="h3" component="h1">
                  {service.title}
                </Typography>
              </Box>

              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                {service.description}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
                Key Features & Benefits
              </Typography>
              <List>
                {service.features.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  bgcolor: 'primary.light',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <IconComponent size={80} />
                <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
                  Ready to Get Started?
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  Contact us to discuss how this service can help your business grow.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' },
                  }}
                  href="/contact"
                >
                  Get Free Consultation
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ServiceDetailsPage;
