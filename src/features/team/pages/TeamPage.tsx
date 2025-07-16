
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  GitHub,
  Email,
  Phone,
  LocationOn,
  Star,
  Award,
  TrendingUp,
  Group,
} from '@mui/icons-material';
import { teamMembers, getTeamStats, getAllDepartments, getTeamMembersByDepartment } from '../../../data/team';

export const TeamPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const departments = ['All', ...getAllDepartments()];
  const stats = getTeamStats();

  const filteredTeamMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : getTeamMembersByDepartment(selectedDepartment);

  const handleDepartmentChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedDepartment(newValue);
  };

  return (
    <Box sx={{ pt: 10 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Meet Our Team
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            The brilliant minds behind our innovative solutions
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            Our diverse team of experts brings together years of experience, creativity, and passion 
            to deliver exceptional results for our clients. Get to know the people who make it all possible.
          </Typography>
        </Box>

        {/* Team Stats */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Group color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" color="primary.main" fontWeight="bold">
                {stats.totalMembers}+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Team Members
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <TrendingUp color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" color="primary.main" fontWeight="bold">
                {stats.averageExperience}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Years Average Experience
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Award color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" color="primary.main" fontWeight="bold">
                {stats.totalCertifications}+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Professional Certifications
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Star color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" color="primary.main" fontWeight="bold">
                {stats.departments}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Departments
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Department Filter */}
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="department filter"
          >
            {departments.map((dept) => (
              <Tab key={dept} label={dept} value={dept} />
            ))}
          </Tabs>
        </Box>

        {/* Team Members Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {filteredTeamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card
                component="a"
                href={`/team/${member.id}`}
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{ width: 120, height: 120, mb: 2 }}
                    />
                    <Typography variant="h6" component="h3" textAlign="center">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary.main" textAlign="center" gutterBottom>
                      {member.position}
                    </Typography>
                    <Chip 
                      label={member.department} 
                      size="small" 
                      color={member.isLeadership ? "secondary" : "primary"}
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph textAlign="center">
                    {member.bio}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle2" gutterBottom>
                    Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <Chip key={index} label={skill} size="small" variant="outlined" />
                    ))}
                    {member.skills.length > 3 && (
                      <Chip
                        label={`+${member.skills.length - 3} more`}
                        size="small"
                        variant="outlined"
                      />
                    )}
                  </Box>

                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <TrendingUp fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${member.experience} years experience`}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Award fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${member.certifications.length} certifications`}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </List>

                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                    {member.email && (
                      <IconButton
                        size="small"
                        href={`mailto:${member.email}`}
                        color="primary"
                      >
                        <Email />
                      </IconButton>
                    )}
                    {member.linkedin && (
                      <IconButton
                        size="small"
                        href={member.linkedin}
                        target="_blank"
                        color="primary"
                      >
                        <LinkedIn />
                      </IconButton>
                    )}
                    {member.twitter && (
                      <IconButton
                        size="small"
                        href={member.twitter}
                        target="_blank"
                        color="primary"
                      >
                        <Twitter />
                      </IconButton>
                    )}
                    {member.github && (
                      <IconButton
                        size="small"
                        href={member.github}
                        target="_blank"
                        color="primary"
                      >
                        <GitHub />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Join Our Team CTA */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Join Our Amazing Team
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. Explore our current openings and become part of our growing family.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
              }}
              href="/careers"
            >
              View Open Positions
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TeamPage;
