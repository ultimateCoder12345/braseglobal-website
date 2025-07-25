import React from "react";
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore, ArrowForward, CheckCircle } from "@mui/icons-material";
import { services } from "../../homepage/services/data/services";
import { Link as RouterLink } from "react-router-dom"; // FIX: Import Link for SPA navigation



export const ServicesPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', pt: 10 }}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Comprehensive technology solutions to drive your business forward
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto" }}>
            Brase Tech is your ally in the digital evolution, offering a comprehensive suite of Digital Transformation Services to drive your business forward. Their Custom Software Development solutions are meticulously crafted to meet your specific requirements, delivering robust, scalable, and intuitive applications that empower your operations and enhance productivity. With a focus on Quality Engineering, Brase Tech ensures seamless digital experiences, reduces testing costs, and mitigates technical and business risks, guaranteeing predictable outcomes and higher ROI for your organization.
          </Typography>
        </Box>
      </Container>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 400,
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "primary.light",
                      color: "white",
                    }}
                  >
                    <IconComponent size={80} />
                  </CardMedia>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: "primary.main", mr: 1 }}>
                        <IconComponent size={24} />
                      </Box>
                      <Typography variant="h5" component="h3">
                        {service.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {service.description}
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Key Features:
                    </Typography>
                    <List dense sx={{ flexGrow: 1 }}>
                      {service.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: "body2" }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: "auto", pt: 2 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        component={RouterLink}
                        to={`/services/${index}`}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* Process Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8, mt: 8 }}>
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
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            }}
            gap={4}
          >
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements and create a detailed project roadmap.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Our team creates wireframes and prototypes for your approval.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your solution using agile methodology with continuous testing.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((process, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: "bold", mb: 2 }}
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
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      {/* <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
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
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container> */}

      {/* Call to Action */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
            >
              Let's discuss your project requirements and how we can help bring
              your vision to life. Our team is ready to provide you with a
              detailed proposal and timeline.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                }}
                href="/contact"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
                href="/case-studies"
              >
                View Portfolio
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      </Box>
    </Box>
  );
};

export default ServicesPage;