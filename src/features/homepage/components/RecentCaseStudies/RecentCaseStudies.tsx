import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getFeaturedCaseStudies } from '../../../../data/caseStudies';

const RecentCaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const featuredCaseStudies = getFeaturedCaseStudies().slice(0, 3); // Show only 3 featured case studies

  return (
    <Box py={10} bgcolor="background.paper">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Chip label="Success Stories" variant="outlined" />
          <Typography variant="h4" fontWeight="bold" mt={2}>
            Recent Case Studies
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mt={2}>
            Discover how we've helped businesses transform and grow
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredCaseStudies.map((caseStudy) => (
            <Grid size={{ xs: 12, md: 4 }} key={caseStudy.id}>
              <Card
                  key={caseStudy.id}
                  component="a"
                  href={`/case-studies/${caseStudy.id}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                <CardMedia
                  component="img"
                  height="200"
                  image={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    mb: 2,
                    flexWrap: 'wrap',
                    gap: 1
                  }}>
                    <Chip label={caseStudy.industry} color="primary" size="small" />
                    <Chip label="Featured" color="secondary" size="small" />
                  </Box>

                  <Typography variant="h6" component="h3" gutterBottom>
                    {caseStudy.title}
                  </Typography>

                  <Typography variant="subtitle2" color="primary.main" gutterBottom>
                    {caseStudy.client}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {caseStudy.summary}
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 0.5, 
                    mb: 2,
                    minHeight: '32px'
                  }}>
                    {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <Chip
                        label={`+${caseStudy.technologies.length - 3} more`}
                        size="small"
                        variant="outlined"
                      />
                    )}
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mt: 'auto',
                    pt: 1
                  }}>
                    <Typography variant="caption" color="text.secondary">
                      {caseStudy.duration} • {caseStudy.teamSize} team members
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/case-studies')}
          >
            View All Case Studies
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RecentCaseStudies;