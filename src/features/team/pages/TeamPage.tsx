import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // FIX: Import Link for SPA navigation
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

// FIX: Optimized and corrected individual icon imports
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // FIX: Correct icon is EmojiEvents, not Award
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';

import { teamMembers, getTeamStats, getAllDepartments, getTeamMembersByDepartment, getLeadershipTeam } from '../../../data/team';
import TeamAnalytics from '../components/TeamAnalytics';

export const TeamPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const departments = ['All', ...getAllDepartments()];
  const stats = getTeamStats();

  const leadershipTeam = getLeadershipTeam();
  const filteredTeamMembers =
    selectedDepartment === 'All'
      ? leadershipTeam
      : leadershipTeam.filter(member => member.department === selectedDepartment);

  const handleDepartmentChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedDepartment(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 10 }}>
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
          <Grid size={12} sm={6} md={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 8
                }
              }}
            >
              <GroupIcon sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                {leadershipTeam.length}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Leadership Team
              </Typography>
            </Paper>
          </Grid>
          <Grid size={12} sm={6} md={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 8
                }
              }}
            >
              <TrendingUpIcon sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                {Math.round(leadershipTeam.reduce((sum, member) => sum + member.experience, 0) / leadershipTeam.length)}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Years Average Experience
              </Typography>
            </Paper>
          </Grid>
          <Grid size={12} sm={6} md={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 8
                }
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                {leadershipTeam.reduce((sum, member) => sum + member.certifications.length, 0)}+
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Professional Certifications
              </Typography>
            </Paper>
          </Grid>
          <Grid size={12} sm={6} md={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                color: 'white',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 8
                }
              }}
            >
              <StarIcon sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                {new Set(leadershipTeam.map(member => member.department)).size}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Leadership Departments
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
            <Grid size={12} sm={6} md={4} key={member.id}>
              {/* FIX: Wrap Card with RouterLink to prevent page reloads */}
              <RouterLink to={`/team/${member.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
                    border: '1px solid rgba(25, 118, 210, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(25, 118, 210, 0.15)',
                      '& .member-avatar': {
                        transform: 'scale(1.1)',
                      },
                      '& .member-overlay': {
                        opacity: 1,
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: 'linear-gradient(90deg, #1976d2, #42a5f5, #1976d2)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s ease-in-out infinite',
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3, position: 'relative' }}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <Avatar
                          src={member.avatar}
                          alt={member.name}
                          className="member-avatar"
                          sx={{ 
                            width: 120, 
                            height: 120,
                            border: '4px solid',
                            borderColor: 'primary.main',
                            boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)',
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        />
                        <Box
                          className="member-overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(66, 165, 245, 0.2))',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out',
                          }}
                        />
                      </Box>
                      <Typography variant="h6" component="h3" textAlign="center" sx={{ fontWeight: 600, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="primary.main" textAlign="center" gutterBottom sx={{ fontWeight: 500 }}>
                        {member.position}
                      </Typography>
                      <Chip
                        label={member.department}
                        size="small"
                        color={member.isLeadership ? "secondary" : "primary"}
                        variant="filled"
                        sx={{
                          fontWeight: 500,
                          borderRadius: 2,
                          '& .MuiChip-label': {
                            px: 1.5
                          }
                        }}
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
                          <TrendingUpIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${member.experience} years experience`}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          {/* FIX: Used correct icon name */}
                          <EmojiEventsIcon fontSize="small" color="primary" />
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
                          aria-label={`Email ${member.name}`} // FIX: Accessibility
                        >
                          <EmailIcon />
                        </IconButton>
                      )}
                      {member.linkedin && (
                        <IconButton
                          size="small"
                          href={member.linkedin}
                          target="_blank"
                          color="primary"
                          aria-label={`${member.name}'s LinkedIn Profile`} // FIX: Accessibility
                        >
                          <LinkedInIcon />
                        </IconButton>
                      )}
                      {member.twitter && (
                        <IconButton
                          size="small"
                          href={member.twitter}
                          target="_blank"
                          color="primary"
                          aria-label={`${member.name}'s Twitter Profile`} // FIX: Accessibility
                        >
                          <TwitterIcon />
                        </IconButton>
                      )}
                      {member.github && (
                        <IconButton
                          size="small"
                          href={member.github}
                          target="_blank"
                          color="primary"
                          aria-label={`${member.name}'s GitHub Profile`} // FIX: Accessibility
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </RouterLink>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Join Our Team CTA */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8 }}>
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
              component={RouterLink} // FIX: Use Link for navigation
              to="/careers"
            >
              View Open Positions
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Team Analytics Dashboard */}
      <TeamAnalytics />
    </Box>
  );
};

export default TeamPage;