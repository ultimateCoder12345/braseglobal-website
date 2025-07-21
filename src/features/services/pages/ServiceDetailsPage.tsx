
import React from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
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
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Timeline,
  Group,
  Settings,
  TrendingUp,
  Security,
  Speed,
} from "@mui/icons-material";
import { services } from "../../homepage/services/data/services";

export const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = services.find((s, index) => index.toString() === id);

  if (!service) {
    return (
      <Box
        sx={{
          pt: 10,
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Service not found</Typography>
      </Box>
    );
  }

  const IconComponent = service.icon;

  // Function returns both specific data and common benefits
  const getServiceDetails = (index: number) => {
    const commonBenefits = [
      {
        icon: <TrendingUp />,
        title: "Proven Results",
        desc: "Track record of successful implementations",
      },
      {
        icon: <Security />,
        title: "Secure & Compliant",
        desc: "Enterprise-grade security standards",
      },
      {
        icon: <Speed />,
        title: "Fast Delivery",
        desc: "Agile methodology for quick results",
      },
      {
        icon: <Group />,
        title: "Expert Team",
        desc: "Certified professionals with deep expertise",
      },
    ];

    const serviceSpecificData = {
      0: {
        overview: "Strategic IT consulting and digital transformation services to modernize your business operations and drive growth through technology.",
        keyFeatures: ["Strategic IT Planning", "Digital Transformation", "Managed IT Services", "Process Automation"],
        process: ["Business Analysis", "Strategy Development", "Implementation Planning", "Execution & Support"],
        technologies: ["Cloud Platforms", "Enterprise Software", "Automation Tools", "Analytics Platforms"],
        outcomes: ["Improved Efficiency", "Cost Reduction", "Enhanced Security", "Scalable Infrastructure"]
      },
      1: {
        overview: "Comprehensive cloud solutions including migration, infrastructure management, and optimization to ensure your business operates efficiently in the cloud.",
        keyFeatures: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Multi-Cloud Strategy"],
        process: ["Cloud Assessment", "Migration Planning", "Implementation", "Optimization & Support"],
        technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
        outcomes: ["Reduced Costs", "Improved Scalability", "Enhanced Performance", "Better Disaster Recovery"]
      },
      2: {
        overview: "Advanced AI and machine learning solutions to automate processes, gain insights, and create intelligent applications that drive business value.",
        keyFeatures: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
        process: ["Data Assessment", "Model Development", "Testing & Validation", "Deployment & Monitoring"],
        technologies: ["TensorFlow", "PyTorch", "Python", "R", "Azure AI", "AWS AI Services"],
        outcomes: ["Process Automation", "Better Decision Making", "Improved Customer Experience", "Cost Savings"]
      },
      3: {
        overview: "Transform your data into actionable insights with comprehensive data analytics and engineering services for better business decisions.",
        keyFeatures: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Pipeline Development"],
        process: ["Data Discovery", "Architecture Design", "Pipeline Development", "Analytics & Reporting"],
        technologies: ["Snowflake", "Power BI", "Tableau", "Apache Spark", "Python", "SQL"],
        outcomes: ["Data-Driven Decisions", "Improved Performance", "Cost Optimization", "Better Customer Insights"]
      },
      4: {
        overview: "Comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
        keyFeatures: ["Threat Detection", "Data Protection", "Compliance Solutions", "Security Monitoring"],
        process: ["Security Assessment", "Implementation", "Monitoring", "Incident Response"],
        technologies: ["SIEM Tools", "Firewalls", "Encryption", "Identity Management", "Security Analytics"],
        outcomes: ["Enhanced Security", "Compliance Achievement", "Risk Reduction", "Business Continuity"]
      },
      5: {
        overview: "Reliable and high-performance networking solutions to ensure seamless connectivity and optimal performance for your business operations.",
        keyFeatures: ["Network Design", "Implementation", "Performance Optimization", "Network Security"],
        process: ["Network Assessment", "Design & Planning", "Implementation", "Monitoring & Support"],
        technologies: ["Cisco", "Juniper", "SD-WAN", "Network Security Tools", "Monitoring Solutions"],
        outcomes: ["Improved Connectivity", "Enhanced Performance", "Better Security", "Reduced Downtime"]
      }
    };

    const specifics = serviceSpecificData[index as keyof typeof serviceSpecificData] || serviceSpecificData[0];
    return { specifics, benefits: commonBenefits };
  };

  const { specifics: serviceDetails, benefits: serviceBenefits } =
    getServiceDetails(parseInt(id || "0"));

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
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box sx={{ mr: 2 }}>
                  <IconComponent sx={{ fontSize: 50 }} />
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
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "grey.100" },
                    mb: 2,
                  }}
                  component={RouterLink}
                  to="/contact"
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
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "primary.main", mb: 3 }}
              >
                Key Features
              </Typography>
              <List>
                {serviceDetails.keyFeatures.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Process */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ 
                  color: "primary.main", 
                  mb: 3, 
                  display: "flex", 
                  alignItems: "center" 
                }}
              >
                <Timeline sx={{ mr: 1 }} />
                Our Process
              </Typography>
              <Grid container spacing={2}>
                {serviceDetails.process.map((step, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        bgcolor: "grey.50",
                        borderRadius: 1,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="primary.main"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        {index + 1}
                      </Typography>
                      <Typography variant="body2">{step}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Technologies */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ 
                  color: "primary.main", 
                  mb: 3, 
                  display: "flex", 
                  alignItems: "center" 
                }}
              >
                <Settings sx={{ mr: 1 }} />
                Technologies We Use
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {serviceDetails.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} variant="outlined" />
                ))}
              </Box>
            </Paper>

            {/* Expected Outcomes */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "primary.main", mb: 3 }}
              >
                Expected Outcomes
              </Typography>
              <List>
                {serviceDetails.outcomes.map((outcome, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={outcome} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Benefits Cards */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "primary.main", mb: 3 }}
              >
                Why Choose Our Service?
              </Typography>
              {serviceBenefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    mb: 2,
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 1,
                  }}
                >
                  <Box sx={{ color: "primary.main", mr: 2, mt: 0.5 }}>
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
            <Paper
              elevation={2}
              sx={{
                p: 3,
                bgcolor: "primary.light",
                color: "white",
                textAlign: "center",
              }}
            >
              <IconComponent sx={{ fontSize: 60 }} />
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Get a free consultation and detailed project proposal tailored
                to your needs.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                  mb: 2,
                }}
                component={RouterLink}
                to="/contact"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
                component={RouterLink}
                to="/case-studies"
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
