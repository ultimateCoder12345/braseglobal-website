import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid, // Import Grid
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Code,
  Cloud,
  Security,
  Analytics,
  PhoneIphone,
  Web,
  CheckCircle,
  ExpandMore,
  ArrowForward,
} from '@mui/icons-material';

// Services data
const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: <Web />,
    description: 'Custom web applications built with modern technologies and best practices.',
    image: '/api/placeholder/400/250',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Integration',
    ],
    technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'PHP'],
    // price: 'Starting from $5,000',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: <PhoneIphone />,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    image: '/api/placeholder/400/250',
    features: [
      'Native iOS & Android',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance & Support',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    // price: 'Starting from $8,000',
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    icon: <Cloud />,
    description: 'Scalable cloud infrastructure and migration services.',
    image: '/api/placeholder/400/250',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Disaster Recovery',
      'Cost Optimization',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    // price: 'Starting from $3,000',
  },
  {
    id: 4,
    title: 'Data Analytics',
    icon: <Analytics />,
    description: 'Transform your data into actionable insights and business intelligence.',
    image: '/api/placeholder/400/250',
    features: [
      'Data Visualization',
      'Business Intelligence',
      'Machine Learning',
      'Real-time Analytics',
      'Data Warehousing',
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark'],
    // price: 'Starting from $4,000',
  },
  {
    id: 5,
    title: 'Cybersecurity',
    icon: <Security />,
    description: 'Comprehensive security solutions to protect your digital assets.',
    image: '/api/placeholder/400/250',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Incident Response',
      'Security Training',
    ],
    technologies: ['OWASP', 'ISO 27001', 'NIST', 'GDPR', 'SOC 2'],
    // price: 'Starting from $2,500',
  },
  {
    id: 6,
    title: 'Custom Software',
    icon: <Code />,
    description: 'Tailored software solutions designed specifically for your business needs.',
    image: '/api/placeholder/400/250',
    features: [
      'Requirements Analysis',
      'Custom Development',
      'System Integration',
      'Legacy Modernization',
      'Ongoing Support',
    ],
    technologies: ['Java', '.NET', 'Python', 'Go', 'Microservices'],
    // price: 'Starting from $10,000',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements based on your needs.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We work with a wide range of modern technologies including React, Angular, Node.js, Python, AWS, Azure, and many others. We choose the best technology stack based on your specific requirements.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We have extensive experience in system integration and can work with your existing infrastructure, databases, and third-party services to ensure seamless connectivity.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an Agile development methodology with regular sprints, continuous integration, and frequent client communication. This ensures transparency and allows for adjustments throughout the project.',
  },
];

export const ServicesPage: React.FC = () => {
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
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Comprehensive technology solutions to drive your business forward
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            From web development to cloud solutions, we offer a full spectrum of technology services
            designed to help your business thrive in the digital age. Our expert team combines
            technical excellence with industry best practices to deliver solutions that exceed expectations.
          </Typography>
        </Box>
      </Container>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
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
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>
                      {React.cloneElement(service.icon, { fontSize: 'large' })}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Key Features:
                  </Typography>
                  <List dense>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {service.technologies.slice(0, 3).map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                      {service.technologies.length > 3 && (
                        <Chip
                          label={`+${service.technologies.length - 3} more`}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    {/* <Typography variant="h6" color="primary.main" gutterBottom>
                      {service.price}
                    </Typography> */}
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{ mt: 1 }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8, mt: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Development Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements and create a detailed project roadmap.',
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Our team creates wireframes and prototypes for your approval.',
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'We build your solution using agile methodology with continuous testing.',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'We deploy your solution and provide ongoing support and maintenance.',
              },
            ].map((process, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    {process.step}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {process.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {process.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Let's discuss your project requirements and how we can help bring your vision to life.
              Our team is ready to provide you with a detailed proposal and timeline.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' },
                }}
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                View Portfolio
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;