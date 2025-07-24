
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ArrowBack, CheckCircle, Group, Schedule } from '@mui/icons-material';
import { getCaseStudyById } from '../../../data/caseStudies';

export const CaseStudyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseStudy = getCaseStudyById(id || '');

  if (!caseStudy) {
    return (
      <Box sx={{ pt: 10, minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Case study not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back to Case Studies
        </Button>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={4}>
            <Grid xs={12} md={8} {...({} as any)}>
              <Box sx={{ mb: 3 }}>
                <Chip label={caseStudy.industry} color="primary" sx={{ mb: 2 }} />
                <Typography variant="h3" component="h1" gutterBottom>
                  {caseStudy.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Client: {caseStudy.client}
                </Typography>
              </Box>

              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }}
              />

              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                {caseStudy.description}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                The Challenge
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {caseStudy.challenge}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Our Solution
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {caseStudy.solution}
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Results Achieved
              </Typography>
              <List>
                {caseStudy.results.map((result, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary={result}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid xs={12} md={4} {...({} as any)}>
              <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Project Details
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Schedule sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">
                    Duration: {caseStudy.duration}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Group sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">
                    Team Size: {caseStudy.teamSize} members
                  </Typography>
                </Box>

                <Typography variant="h6" gutterBottom>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {caseStudy.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  href="/contact"
                  sx={{ mb: 2 }}
                >
                  Start Your Project
                </Button>
                
                {caseStudy.projectUrl && (
                  <Button
                    variant="outlined"
                    fullWidth
                    component="a"
                    href={caseStudy.projectUrl}
                    target="_blank"
                  >
                    View Live Project
                  </Button>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default CaseStudyDetailsPage;
