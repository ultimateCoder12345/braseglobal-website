
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Avatar,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import { ArrowBack, LinkedIn, Twitter, GitHub, Email } from '@mui/icons-material';
import { getTeamMemberById } from '../../../data/team';

export const TeamMemberDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const member = getTeamMemberById(id || '');

  if (!member) {
    return (
      <Box sx={{ pt: 10, minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Team member not found</Typography>
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
          Back to Team
        </Button>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h4" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  {member.position}
                </Typography>
                <Chip
                  label={member.department}
                  color="primary"
                  sx={{ mb: 2 }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
                  <IconButton
                    component="a"
                    href={`mailto:${member.email}`}
                    sx={{ bgcolor: 'primary.main', color: 'white' }}
                  >
                    <Email />
                  </IconButton>
                  {member.linkedin && (
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      sx={{ bgcolor: '#0077B5', color: 'white' }}
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                  {member.twitter && (
                    <IconButton
                      component="a"
                      href={member.twitter}
                      target="_blank"
                      sx={{ bgcolor: '#1DA1F2', color: 'white' }}
                    >
                      <Twitter />
                    </IconButton>
                  )}
                  {member.github && (
                    <IconButton
                      component="a"
                      href={member.github}
                      target="_blank"
                      sx={{ bgcolor: '#333', color: 'white' }}
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                About {member.name.split(' ')[0]}
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {member.bio}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Experience
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.experience} years
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Education
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.education}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {member.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        size="small"
                      />
                    ))}
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Certifications
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {member.certifications.map((cert, index) => (
                      <Typography key={index} variant="body2">
                        • {cert}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default TeamMemberDetailsPage;
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
  Avatar,
  IconButton,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  Email,
  LinkedIn,
  Twitter,
  GitHub,
  Award,
  TrendingUp,
  School,
  Business,
} from '@mui/icons-material';
import { getTeamMemberById } from '../../../data/team';

export const TeamMemberDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const member = getTeamMemberById(id || '');

  if (!member) {
    return (
      <Box sx={{ pt: 10, minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Team member not found</Typography>
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
          Back to Team
        </Button>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  {member.position}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                  <Chip 
                    label={member.department} 
                    color={member.isLeadership ? "secondary" : "primary"}
                  />
                  {member.featured && (
                    <Chip label="Featured" color="secondary" variant="outlined" />
                  )}
                </Box>

                {/* Social Links */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                  {member.email && (
                    <IconButton
                      href={`mailto:${member.email}`}
                      color="primary"
                      size="large"
                    >
                      <Email />
                    </IconButton>
                  )}
                  {member.linkedin && (
                    <IconButton
                      href={member.linkedin}
                      target="_blank"
                      color="primary"
                      size="large"
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                  {member.twitter && (
                    <IconButton
                      href={member.twitter}
                      target="_blank"
                      color="primary"
                      size="large"
                    >
                      <Twitter />
                    </IconButton>
                  )}
                  {member.github && (
                    <IconButton
                      href={member.github}
                      target="_blank"
                      color="primary"
                      size="large"
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </Box>
              </Box>

              {/* Quick Stats */}
              <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Quick Stats
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <TrendingUp color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Experience"
                      secondary={`${member.experience} years`}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Award color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Certifications"
                      secondary={member.certifications.length}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Business color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Department"
                      secondary={member.department}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                About {member.name.split(' ')[0]}
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, mb: 4 }}>
                {member.bio}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Skills & Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {member.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <School sx={{ mr: 1 }} />
                Education
              </Typography>
              <Typography variant="body1" paragraph>
                {member.education}
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <Award sx={{ mr: 1 }} />
                Certifications
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {member.certifications.map((cert, index) => (
                  <Chip
                    key={index}
                    label={cert}
                    color="secondary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary">
                  Want to connect with {member.name.split(' ')[0]}? 
                  {member.email && (
                    <Button 
                      variant="outlined" 
                      size="small" 
                      href={`mailto:${member.email}`}
                      sx={{ ml: 2 }}
                    >
                      Send Email
                    </Button>
                  )}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default TeamMemberDetailsPage;
