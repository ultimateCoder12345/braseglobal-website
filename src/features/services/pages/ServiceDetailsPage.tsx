
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowBack, TrendingUp, Security, Cloud, Analytics } from '@mui/icons-material';
import ParticleBackground from '../../homepage/components/ParticleSwarm/ParticleSwarmCanvas';

const serviceDetails = {
  'it-consulting': {
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align IT with business objectives and drive digital transformation.',
    icon: <TrendingUp />,
    overview: 'Our IT consulting services help organizations leverage technology to achieve their business goals. We provide strategic guidance, technical expertise, and implementation support to ensure your IT investments deliver maximum value.',
    benefits: [
      'Reduced operational costs by up to 30%',
      'Improved system efficiency and performance',
      'Enhanced security and compliance',
      'Faster time-to-market for new initiatives',
      'Better alignment between IT and business strategy'
    ],
    features: [
      'Technology Strategy Development',
      'Digital Transformation Planning',
      'IT Roadmap Creation',
      'Risk Assessment and Mitigation',
      'Vendor Selection and Management',
      'Project Management and Delivery'
    ],
    process: [
      'Discovery and Assessment',
      'Strategy Development',
      'Implementation Planning',
      'Execution and Monitoring',
      'Optimization and Support'
    ],
    technologies: ['Cloud Platforms', 'Enterprise Software', 'Analytics Tools', 'Security Solutions']
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services for scalability, flexibility, and cost optimization.',
    icon: <Cloud />,
    overview: 'Transform your IT infrastructure with our comprehensive cloud solutions. We help organizations migrate to the cloud, optimize existing cloud environments, and implement cloud-native applications for maximum efficiency and scalability.',
    benefits: [
      'Up to 40% reduction in infrastructure costs',
      'Improved scalability and flexibility',
      '99.9% uptime and reliability',
      'Enhanced disaster recovery capabilities',
      'Faster deployment of new applications'
    ],
    features: [
      'Cloud Migration Services',
      'Infrastructure as Code (IaC)',
      'Multi-cloud Strategy',
      'Cloud Security Implementation',
      'Performance Monitoring',
      '24/7 Support and Maintenance'
    ],
    process: [
      'Cloud Readiness Assessment',
      'Migration Strategy Development',
      'Pilot Implementation',
      'Full Migration Execution',
      'Optimization and Management'
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Kubernetes', 'Docker']
  },
  'ai-ml': {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge artificial intelligence and machine learning technologies.',
    icon: <Analytics />,
    overview: 'Harness the power of AI and machine learning to automate processes, gain insights from data, and create intelligent applications that drive business value.',
    benefits: [
      'Automated decision-making processes',
      'Improved customer experience through personalization',
      'Enhanced operational efficiency',
      'Predictive analytics for better planning',
      'Competitive advantage through innovation'
    ],
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'MLOps Implementation',
      'Custom AI Model Development'
    ],
    process: [
      'Data Assessment and Preparation',
      'Model Development and Training',
      'Testing and Validation',
      'Deployment and Integration',
      'Monitoring and Optimization'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Azure ML', 'AWS SageMaker']
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights with advanced analytics solutions.',
    icon: <Analytics />,
    overview: 'Unlock the value in your data with our comprehensive analytics solutions. From data warehousing to real-time analytics, we help you make data-driven decisions that drive business growth.',
    benefits: [
      'Data-driven decision making',
      'Improved operational efficiency',
      'Better customer understanding',
      'Increased revenue opportunities',
      'Competitive market insights'
    ],
    features: [
      'Business Intelligence Dashboards',
      'Data Visualization',
      'Real-time Analytics',
      'Data Warehousing',
      'ETL Processes',
      'Self-service Analytics'
    ],
    process: [
      'Data Discovery and Assessment',
      'Data Architecture Design',
      'Implementation and Integration',
      'Dashboard and Report Development',
      'Training and Knowledge Transfer'
    ],
    technologies: ['Power BI', 'Tableau', 'Snowflake', 'Apache Spark', 'SQL Server']
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
    icon: <Security />,
    overview: 'Protect your organization from cyber threats with our comprehensive security solutions. We provide end-to-end security services from assessment to implementation and ongoing monitoring.',
    benefits: [
      'Reduced security breach risk',
      'Compliance with industry regulations',
      'Protection of sensitive data',
      'Business continuity assurance',
      'Enhanced customer trust'
    ],
    features: [
      'Security Assessment and Auditing',
      'Incident Response Planning',
      'Compliance Management',
      'Security Training and Awareness',
      'Threat Detection and Monitoring',
      'Vulnerability Management'
    ],
    process: [
      'Security Assessment',
      'Risk Analysis and Planning',
      'Security Implementation',
      'Testing and Validation',
      'Ongoing Monitoring and Support'
    ],
    technologies: ['Firewalls', 'SIEM Solutions', 'Endpoint Protection', 'Identity Management']
  },
  'network-infrastructure': {
    title: 'Network Infrastructure',
    description: 'Robust and scalable network solutions designed for modern business requirements.',
    icon: <TrendingUp />,
    overview: 'Build a reliable and scalable network infrastructure that supports your business operations. Our network solutions ensure optimal performance, security, and reliability.',
    benefits: [
      'Improved network performance',
      'Enhanced security and reliability',
      'Scalability for business growth',
      'Reduced downtime and disruptions',
      'Cost-effective network management'
    ],
    features: [
      'Network Design and Architecture',
      'Performance Optimization',
      'Network Monitoring and Management',
      'Disaster Recovery Planning',
      'Security Implementation',
      'Maintenance and Support'
    ],
    process: [
      'Network Assessment',
      'Design and Planning',
      'Implementation and Configuration',
      'Testing and Optimization',
      'Ongoing Monitoring and Maintenance'
    ],
    technologies: ['Cisco', 'Juniper', 'SD-WAN', 'Network Monitoring Tools']
  }
};

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Service Not Found
        </Typography>
        <Button variant="contained" onClick={() => navigate('/services')}>
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <>
      <ParticleBackground />
      <Box sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Back Button */}
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/services')}
            sx={{ mb: 4 }}
          >
            Back to Services
          </Button>

          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 2, color: 'primary.main' }}>
                {React.cloneElement(service.icon, { fontSize: 'large' })}
              </Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontWeight: 'bold', color: 'primary.main' }}
              >
                {service.title}
              </Typography>
            </Box>
            <Typography variant="h5" color="text.secondary">
              {service.description}
            </Typography>
          </Box>

          {/* Overview */}
          <Paper sx={{ p: 4, mb: 6 }}>
            <Typography variant="h4" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {service.overview}
            </Typography>
          </Paper>

          {/* Content Grid */}
          <Grid container spacing={4}>
            {/* Benefits */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Key Benefits
                  </Typography>
                  <List>
                    {service.benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Features */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Features & Capabilities
                  </Typography>
                  <List>
                    {service.features.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircle color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Process */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Our Process
                  </Typography>
                  <List>
                    {service.process.map((step, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Chip
                            label={index + 1}
                            color="primary"
                            size="small"
                            sx={{ minWidth: 24 }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={step} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Technologies */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Technologies We Use
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {service.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <Box
            sx={{
              mt: 8,
              p: 6,
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Contact us today to discuss how {service.title.toLowerCase()} can benefit your organization.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                Contact Us
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
                onClick={() => navigate('/services')}
              >
                View All Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServiceDetailsPage;
