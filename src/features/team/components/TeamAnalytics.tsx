
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  People,
  EmojiEvents,
  School,
  Close,
  Analytics,
  Timeline,
} from '@mui/icons-material';
import { teamMembers, getAllDepartments } from '../../../data/team';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`analytics-tabpanel-${index}`}
      aria-labelledby={`analytics-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const TeamAnalytics: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  const departments = getAllDepartments();
  const totalExperience = teamMembers.reduce((sum, member) => sum + member.experience, 0);
  const avgExperience = totalExperience / teamMembers.length;
  
  // Calculate skill distribution
  const skillMap = new Map<string, number>();
  teamMembers.forEach(member => {
    member.skills.forEach(skill => {
      skillMap.set(skill, (skillMap.get(skill) || 0) + 1);
    });
  });
  
  const topSkills = Array.from(skillMap.entries())
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
  
  // Calculate department distribution
  const deptMap = new Map<string, number>();
  teamMembers.forEach(member => {
    deptMap.set(member.department, (deptMap.get(member.department) || 0) + 1);
  });
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: 'primary.main',
          color: 'white',
          width: 60,
          height: 60,
          boxShadow: 4,
          '&:hover': {
            bgcolor: 'primary.dark',
            transform: 'scale(1.1)',
          },
          zIndex: 1000,
        }}
      >
        <Analytics />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, maxHeight: '90vh' }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
          color: 'white',
          m: 0
        }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            Team Analytics Dashboard
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ color: 'white' }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Overview" icon={<Analytics />} />
              <Tab label="Skills" icon={<TrendingUp />} />
              <Tab label="Departments" icon={<People />} />
              <Tab label="Experience" icon={<Timeline />} />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              <Grid size={12} sm={6} md={3}>
                <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <People sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h4">{teamMembers.length}</Typography>
                    <Typography variant="body2">Total Members</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={12} sm={6} md={3}>
                <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <TrendingUp sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h4">{Math.round(avgExperience)}</Typography>
                    <Typography variant="body2">Avg Experience</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={12} sm={6} md={3}>
                <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <EmojiEvents sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h4">
                      {teamMembers.reduce((sum, member) => sum + member.certifications.length, 0)}
                    </Typography>
                    <Typography variant="body2">Certifications</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={12} sm={6} md={3}>
                <Card sx={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <School sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h4">{departments.length}</Typography>
                    <Typography variant="body2">Departments</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Typography variant="h6" gutterBottom>Top Skills Across Team</Typography>
            <Grid container spacing={2}>
              {topSkills.map(([skill, count], index) => (
                <Grid size={12} key={skill}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" sx={{ minWidth: 150 }}>
                      {skill}
                    </Typography>
                    <Box sx={{ flexGrow: 1, mx: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(count / teamMembers.length) * 100}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {count} members
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Typography variant="h6" gutterBottom>Department Distribution</Typography>
            <List>
              {Array.from(deptMap.entries()).map(([dept, count]) => (
                <React.Fragment key={dept}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        <People />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={dept}
                      secondary={`${count} members`}
                    />
                    <Chip 
                      label={`${Math.round((count / teamMembers.length) * 100)}%`}
                      color="primary"
                      variant="outlined"
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Typography variant="h6" gutterBottom>Experience Distribution</Typography>
            <Grid container spacing={2}>
              {teamMembers
                .sort((a, b) => b.experience - a.experience)
                .map((member) => (
                <Grid size={12} sm={6} key={member.id}>
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 2, bgcolor: 'grey.50' }}>
                    <Avatar src={member.avatar} sx={{ mr: 2 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" fontWeight={500}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.position}
                      </Typography>
                    </Box>
                    <Chip 
                      label={`${member.experience} years`}
                      color="primary"
                      size="small"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamAnalytics;
