import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Avatar,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, 
} from '@mui/material';
import {
  Business,
  Search,
  Launch,
  TrendingUp,
  Public,
  Star,
} from '@mui/icons-material';
import { clients, getAllIndustries, getClientStats, type Client } from '../../../data/clients';
import ParticleBackground from '../../homepage/components/ParticleSwarm/ParticleSwarmCanvas';

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
      id={`clients-tabpanel-${index}`}
      aria-labelledby={`clients-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export const ClientsPage: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedPartnership, setSelectedPartnership] = useState<string>('All');

  const industries = ['All', ...getAllIndustries()];
  const partnerships = ['All', 'Strategic', 'Premium', 'Standard'];
  const clientStats = getClientStats();

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || client.industry === selectedIndustry;
    const matchesPartnership = selectedPartnership === 'All' || client.partnership === selectedPartnership;
    const matchesTab = tabValue === 0 || 
                      (tabValue === 1 && client.featured) ||
                      (tabValue === 2 && client.partnership === 'Strategic');

    return matchesSearch && matchesIndustry && matchesPartnership && matchesTab;
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseDialog = () => {
    setSelectedClient(null);
  };

  const getPartnershipColor = (partnership: Client['partnership']) => {
    switch (partnership) {
      case 'Strategic': return 'error';
      case 'Premium': return 'warning';
      case 'Standard': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ position: 'relative', pt: 10 }}>
      <ParticleBackground />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
      {/* Account for fixed header */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Our Clients
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Trusted by industry leaders worldwide
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            We're proud to partner with innovative companies across diverse industries.
            From startups to Fortune 500 enterprises, our clients trust us to deliver
            exceptional technology solutions that drive their business forward.
          </Typography>
        </Box>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Business sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {clientStats.totalClients}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Clients
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Public sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {clientStats.industries}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Industries Served
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {clientStats.totalProjects}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Projects Completed
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Star sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  {clientStats.strategicPartners}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Strategic Partners
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
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Search clients..."
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
                  Industry:
                </Typography>
                {industries.slice(0, 4).map((industry) => (
                  <Chip
                    key={industry}
                    label={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    color={selectedIndustry === industry ? 'primary' : 'default'}
                    variant={selectedIndustry === industry ? 'filled' : 'outlined'}
                    size="small"
                  />
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="body2" sx={{ mr: 1, alignSelf: 'center' }}>
                  Partnership:
                </Typography>
                {partnerships.map((partnership) => (
                  <Chip
                    key={partnership}
                    label={partnership}
                    onClick={() => setSelectedPartnership(partnership)}
                    color={selectedPartnership === partnership ? 'primary' : 'default'}
                    variant={selectedPartnership === partnership ? 'filled' : 'outlined'}
                    size="small"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="All Clients" />
            <Tab label="Featured Clients" />
            <Tab label="Strategic Partners" />
          </Tabs>
        </Box>

        {/* Clients Grid */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {filteredClients.map((client) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={client.id}>
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip 
                        label={client.partnership} 
                        color={getPartnershipColor(client.partnership)} 
                        size="small" 
                      />
                      {client.featured && (
                        <Chip label="Featured" color="secondary" size="small" />
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={client.logo}
                        alt={client.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                        variant="rounded"
                      />
                      <Box>
                        <Typography variant="h6" component="h3">
                          {client.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {client.industry}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {client.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Partnership since:</strong> {client.since}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Projects completed:</strong> {client.projectsCompleted}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleClientClick(client)}
                        sx={{ flex: 1 }}
                      >
                        View Details
                      </Button>
                      {client.website && (
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<Launch />}
                          href={client.website}
                          target="_blank"
                        >
                          Website
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            {filteredClients.map((client) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={client.id}>
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip 
                        label={client.partnership} 
                        color={getPartnershipColor(client.partnership)} 
                        size="small" 
                      />
                      <Chip label="Featured" color="secondary" size="small" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={client.logo}
                        alt={client.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                        variant="rounded"
                      />
                      <Box>
                        <Typography variant="h6" component="h3">
                          {client.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {client.industry}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {client.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Partnership since:</strong> {client.since}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Projects completed:</strong> {client.projectsCompleted}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleClientClick(client)}
                        sx={{ flex: 1 }}
                      >
                        View Details
                      </Button>
                      {client.website && (
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<Launch />}
                          href={client.website}
                          target="_blank"
                        >
                          Website
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={4}>
            {filteredClients.map((client) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={client.id}>
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip 
                        label="Strategic Partner" 
                        color="error" 
                        size="small" 
                      />
                      {client.featured && (
                        <Chip label="Featured" color="secondary" size="small" />
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={client.logo}
                        alt={client.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                        variant="rounded"
                      />
                      <Box>
                        <Typography variant="h6" component="h3">
                          {client.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {client.industry}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {client.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Partnership since:</strong> {client.since}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Projects completed:</strong> {client.projectsCompleted}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleClientClick(client)}
                        sx={{ flex: 1 }}
                      >
                        View Details
                      </Button>
                      {client.website && (
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<Launch />}
                          href={client.website}
                          target="_blank"
                        >
                          Website
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Container>

      {/* Client Detail Dialog */}
      <Dialog
        open={!!selectedClient}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedClient && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  sx={{ width: 60, height: 60 }}
                  variant="rounded"
                />
                <Box>
                  <Typography variant="h4">{selectedClient.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedClient.industry} • {selectedClient.partnership} Partner
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1" paragraph>
                {selectedClient.description}
              </Typography>

              <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Partnership since:</strong> {selectedClient.since} | 
                  <strong> Projects completed:</strong> {selectedClient.projectsCompleted}
                </Typography>
              </Box>

              {selectedClient.testimonial && (
                <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'primary.50' }}>
                  <Typography variant="h6" gutterBottom>
                    Client Testimonial
                  </Typography>
                  <Typography variant="body1" fontStyle="italic" paragraph>
                    "{selectedClient.testimonial.text}"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    — {selectedClient.testimonial.author}, {selectedClient.testimonial.position}
                  </Typography>
                </Paper>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              {selectedClient.website && (
                <Button
                  variant="contained"
                  startIcon={<Launch />}
                  href={selectedClient.website}
                  target="_blank"
                >
                  Visit Website
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
              Join Our Growing Client Family
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Ready to become our next success story? Let's discuss how we can help
              your business achieve its technology goals and drive growth.
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
              Become a Client
            </Button>
          </Box>
        </Container>
      </Box>
      </Box>
    </Box>
  );
};

export default ClientsPage;