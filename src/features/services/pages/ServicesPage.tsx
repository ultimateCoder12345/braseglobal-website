import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../../homepage/components/ParticleSwarm/ParticleSwarmCanvas';

const services = [
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align IT with business objectives.',
    features: ['Technology Strategy', 'Digital Transformation', 'IT Roadmapping', 'Risk Assessment'],
    category: 'Strategy'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services for scalability and efficiency.',
    features: ['Cloud Migration', 'Infrastructure as Code', 'Multi-cloud Strategy', '24/7 Support'],
    category: 'Infrastructure'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI technology.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'MLOps'],
    category: 'Innovation'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights.',
    features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Data Warehousing'],
    category: 'Analytics'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Security Assessment', 'Incident Response', 'Compliance Management', 'Security Training'],
    category: 'Security'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Robust and scalable network solutions for modern businesses.',
    features: ['Network Design', 'Performance Optimization', 'Monitoring & Management', 'Disaster Recovery'],
    category: 'Infrastructure'
  }
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <>
      <ParticleBackground />
      <Box sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Hero Section */}
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              Comprehensive IT solutions designed to drive your business forward
              in the digital age
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid key={service.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={service.category}
                        color="primary"
                        size="small"
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="h5" component="h2" gutterBottom>
                        {service.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Key Features:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            variant="outlined"
                            size="small"
                            color="secondary"
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleLearnMore(service.id)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box
            sx={{
              mt: 10,
              p: 6,
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Contact us today to discuss how our services can help you achieve
              your technology goals.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  bgcolor: 'white',
                  color: 'primary.main',
                },
              }}
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;