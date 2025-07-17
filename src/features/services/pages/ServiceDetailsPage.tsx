import React from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom"; // FIX: Import Link
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

  // FIX: Function now returns both specific data and common benefits
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
      // ... (your existing serviceSpecificData object remains the same)
      0: {
        /* ... */
      },
      1: {
        /* ... */
      },
      2: {
        /* ... */
      },
      3: {
        /* ... */
      },
    };

    const specifics =
      serviceSpecificData[index as keyof typeof serviceSpecificData] ||
      serviceSpecificData[0];
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
                  {/* FIX: Changed `size` prop to `sx` prop for font size */}
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
                {/* FIX: Use RouterLink for SPA navigation */}
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
            {/* ... (Key Features, Process, Technologies, Outcomes sections are correct) ... */}
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
              {/* FIX: Map over the `serviceBenefits` from the function instead of a hardcoded array */}
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
              {/* FIX: Changed `size` prop to `sx` prop for font size */}
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
                component={RouterLink} // FIX: Use RouterLink
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
                component={RouterLink} // FIX: Use RouterLink
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
