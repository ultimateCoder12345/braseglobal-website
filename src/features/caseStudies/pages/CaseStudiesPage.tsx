import React, { useState } from 'react';
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
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  CheckCircle,
  Launch,
  Search,
  TrendingUp,
  People,
  Schedule,
  Business,
} from '@mui/icons-material';
import { caseStudies, getAllIndustries, type CaseStudy } from '../../../data/caseStudies';

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
      id={`case-study-tabpanel-${index}`}
      aria-labelledby={`case-study-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export const CaseStudiesPage: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', ...getAllIndustries()];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesTab = tabValue === 0 || (tabValue === 1 && study.featured);
    
    return matchesSearch && matchesIndustry && matchesTab;
  });

const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
  setTabValue(newValue);
};

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleCloseDialog = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <Box sx={{ pt: 10 }}> {/* Account for fixed header */}
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Case Studies
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Real results from real projects
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            Explore our portfolio of successful projects and see how we've helped businesses
            across various industries achieve their digital transformation goals. Each case study
            showcases our problem-solving approach and the measurable impact we deliver.
          </Typography>
        </Box>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {caseStudies.length}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Successful Projects
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Business sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {industries.length - 1}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Industries Served
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <People sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  500+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Team Members Involved
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Schedule sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  98%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  On-Time Delivery
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Filters and Search */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {industries.map((industry) => (
                  <Chip
                    key={industry}
                    label={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    color={selectedIndustry === industry ? 'primary' : 'default'}
                    variant={selectedIndustry === industry ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="All Case Studies" />
            <Tab label="Featured Projects" />
          </Tabs>
        </Box>

        {/* Case Studies Grid */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {filteredCaseStudies.map((caseStudy) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={caseStudy.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip label={caseStudy.industry} color="primary" size="small" />
                      {caseStudy.featured && (
                        <Chip label="Featured" color="secondary" size="small" />
                      )}
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

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {caseStudy.duration} • {caseStudy.teamSize} team members
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleCaseStudyClick(caseStudy)}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            {filteredCaseStudies.map((caseStudy) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={caseStudy.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
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

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {caseStudy.duration} • {caseStudy.teamSize} team members
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleCaseStudyClick(caseStudy)}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Container>

      {/* Case Study Detail Dialog */}
      <Dialog
        open={!!selectedCaseStudy}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedCaseStudy && (
          <>
            <DialogTitle>
              <Typography variant="h4">{selectedCaseStudy.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {selectedCaseStudy.client} • {selectedCaseStudy.industry}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedCaseStudy.imageUrl}
                  alt={selectedCaseStudy.title}
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Box>
              
              <Typography variant="body1" paragraph>
                {selectedCaseStudy.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Challenge:
              </Typography>
              <Typography variant="body2" paragraph>
                {selectedCaseStudy.challenge}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Solution:
              </Typography>
              <Typography variant="body2" paragraph>
                {selectedCaseStudy.solution}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Results:
              </Typography>
              <List>
                {selectedCaseStudy.results.map((result, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={result} />
                  </ListItem>
                ))}
              </List>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Technologies Used:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedCaseStudy.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Project Duration:</strong> {selectedCaseStudy.duration} | 
                  <strong> Team Size:</strong> {selectedCaseStudy.teamSize} members
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              {selectedCaseStudy.projectUrl && (
                <Button
                  variant="contained"
                  startIcon={<Launch />}
                  href={selectedCaseStudy.projectUrl}
                  target="_blank"
                >
                  View Live Project
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Ready to Start Your Success Story?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Let's discuss how we can help you achieve similar results for your business.
              Our team is ready to tackle your most challenging projects.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              Start Your Project
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudiesPage;