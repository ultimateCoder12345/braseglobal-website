
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
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import { 
  ArrowBack, 
  CheckCircle, 
  Timeline,
  Group,
  Settings,
  TrendingUp,
  Security,
  Speed
} from '@mui/icons-material';
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

  // Enhanced service data based on service type
  const getServiceDetails = (index: number) => {
    const commonBenefits = [
      { icon: <TrendingUp />, title: 'Increased Efficiency', desc: 'Streamlined processes and improved productivity' },
      { icon: <Security />, title: 'Enhanced Security', desc: 'Advanced security measures and compliance' },
      { icon: <Speed />, title: 'Faster Delivery', desc: 'Accelerated time-to-market for your solutions' },
      { icon: <Group />, title: 'Expert Team', desc: 'Dedicated professionals with industry expertise' }
    ];

    const serviceSpecificData = {
      0: { // Digital Transformation
        overview: "Transform your business with our comprehensive digital transformation services. We help organizations modernize their operations, embrace new technologies, and stay competitive in the digital age.",
        process: [
          "Current State Assessment",
          "Digital Strategy Development", 
          "Technology Implementation",
          "Change Management",
          "Performance Monitoring"
        ],
        technologies: ["Cloud Computing", "AI/ML", "IoT", "Blockchain", "Analytics"],
        outcomes: ["40% improvement in operational efficiency", "60% faster business processes", "25% cost reduction", "Enhanced customer experience"]
      },
      1: { // Data & AI Services
        overview: "Unlock the power of your data with our advanced analytics and AI solutions. We help businesses make data-driven decisions and implement intelligent automation.",
        process: [
          "Data Strategy & Governance",
          "Data Pipeline Development",
          "Machine Learning Model Creation",
          "AI Implementation",
          "Continuous Optimization"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Tableau", "Power BI"],
        outcomes: ["300% improvement in data processing speed", "85% prediction accuracy", "50% reduction in manual tasks", "Real-time insights delivery"]
      },
      2: { // IT Recruitment
        overview: "Find the right talent for your technology needs with our specialized IT recruitment services. We connect businesses with skilled professionals across all technology domains.",
        process: [
          "Requirements Analysis",
          "Candidate Sourcing",
          "Technical Assessment",
          "Interview Coordination",
          "Onboarding Support"
        ],
        technologies: ["LinkedIn Talent", "GitHub Recruitment", "Technical Assessments", "Video Interviews"],
        outcomes: ["90% candidate retention rate", "2-week average placement time", "500+ successful placements", "95% client satisfaction"]
      },
      3: { // Cloud Services
        overview: "Modernize your infrastructure with our comprehensive cloud services. We help businesses migrate, optimize, and manage their cloud environments for maximum efficiency.",
        process: [
          "Cloud Readiness Assessment",
          "Migration Planning",
          "Infrastructure Setup",
          "Security Implementation",
          "Ongoing Management"
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
        outcomes: ["70% reduction in infrastructure costs", "99.9% uptime guarantee", "50% faster deployment", "Enhanced scalability"]
      }
    };

    return serviceSpecificData[index as keyof typeof serviceSpecificData] || serviceSpecificData[0];
  };

  const serviceDetails = getServiceDetails(parseInt(id || '0'));

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

        {/* Hero Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', color: 'white' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ mr: 2 }}>
                  <IconComponent size={50} />
                </Box>
                <Typography variant="h3" component="h1">
                  {service.title}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                {serviceDetails.overview}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' },
                    mb: 2
                  }}
                  href="/contact"
                >
                  Get Free Consultation
                </Button>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Ready to get started? Contact us today!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Key Features */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
                Key Features & Benefits
              </Typography>
              <List>
                {service.features.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Our Process */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
                <Timeline sx={{ mr: 1, verticalAlign: 'middle' }} />
                Our Process
              </Typography>
              <Grid container spacing={2}>
                {serviceDetails.process.map((step, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={1} sx={{ height: '100%', p: 2 }}>
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="h6" color="primary.main" gutterBottom>
                          {index + 1}. {step}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Technologies */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
                <Settings sx={{ mr: 1, verticalAlign: 'middle' }} />
                Technologies We Use
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {serviceDetails.technologies.map((tech, index) => (
                  <Chip 
                    key={index} 
                    label={tech} 
                    variant="outlined" 
                    color="primary"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </Paper>

            {/* Expected Outcomes */}
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3, color: 'primary.main' }}>
                Expected Outcomes
              </Typography>
              <Grid container spacing={2}>
                {serviceDetails.outcomes.map((outcome, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                      <CheckCircle color="success" sx={{ mr: 2 }} />
                      <Typography variant="body1">{outcome}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Benefits Cards */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                Why Choose Our Service?
              </Typography>
              {[
                { icon: <TrendingUp />, title: 'Proven Results', desc: 'Track record of successful implementations' },
                { icon: <Security />, title: 'Secure & Compliant', desc: 'Enterprise-grade security standards' },
                { icon: <Speed />, title: 'Fast Delivery', desc: 'Agile methodology for quick results' },
                { icon: <Group />, title: 'Expert Team', desc: 'Certified professionals with deep expertise' }
              ].map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Box sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}>
                    {benefit.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>

            {/* Contact CTA */}
            <Paper elevation={2} sx={{ p: 3, bgcolor: 'primary.light', color: 'white', textAlign: 'center' }}>
              <IconComponent size={60} />
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Get a free consultation and detailed project proposal tailored to your needs.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' },
                  mb: 2
                }}
                href="/contact"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
                href="/case-studies"
              >
                View Success Stories
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceDetailsPage;
