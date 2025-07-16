
import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Link, 
  IconButton 
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

// Upper Footer Component
export const UpperFooter: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "white",
        color: "#333",
        py: 4,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Company Info with Logo and Social Media */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/src/assets/images/brasetech_logo.png"
                alt="Brase Tech Logo"
                sx={{ height: 40, mb: 2 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1A4D8C", mb: 1 }}
              >
                Brase Tech
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brase Technologies is a niche IT Consulting firm based in Sydney, Australia with offices in Melbourne, US and development centres in Hyderabad, India
              </Typography>
            </Box>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://linkedin.com/company/brasetech"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#0077B5', 
                  color: 'white',
                  '&:hover': { bgcolor: '#005582' },
                  width: 32,
                  height: 32
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/brasetech"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#1DA1F2', 
                  color: 'white',
                  '&:hover': { bgcolor: '#0d8bd9' },
                  width: 32,
                  height: 32
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/brasetech"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#E4405F', 
                  color: 'white',
                  '&:hover': { bgcolor: '#d62d20' },
                  width: 32,
                  height: 32
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com/brasetech"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#FF0000', 
                  color: 'white',
                  '&:hover': { bgcolor: '#cc0000' },
                  width: 32,
                  height: 32
                }}
              >
                <YouTube fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 4 },
              justifyContent: 'space-between'
            }}>
              {/* Services */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: "bold", 
                    color: "#1A4D8C", 
                    mb: 2,
                    display: 'inline-block'
                  }}
                >
                  SERVICES
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link
                    component={RouterLink}
                    to="/services"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Digital Transformation Services
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Data & AI Services
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    IT Recruitment Services
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Cloud Services
                  </Link>
                </Box>
              </Box>

              {/* Quick Links */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: "bold", 
                    color: "#1A4D8C", 
                    mb: 2,
                    display: 'inline-block'
                  }}
                >
                  QUICK LINKS
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link
                    component={RouterLink}
                    to="/about"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    About Us
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/careers"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Careers
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/contact"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Contact Us
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/team"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Team
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Head Office */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: "bold", 
                color: "#1A4D8C", 
                mb: 2,
                display: 'inline-block'
              }}
            >
              HEAD OFFICE
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              SYDNEY
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <strong>Registered Office:</strong> 7/16 Filey Street,
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Blacktown, NSW 2148
            </Typography>
            <Link
              href="mailto:info@brasetech.com"
              color="#1A4D8C"
              underline="hover"
              variant="body2"
              sx={{ fontWeight: "medium" }}
            >
              info@brasetech.com
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Lower Footer Component
export const LowerFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1A4D8C",
        color: "white",
        py: 2,
        mt: "auto",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "white" }}
        >
          © 2024 Brase Technologies Pty Ltd - All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

// Combined Footer Component for backwards compatibility
export const Footer: React.FC = () => {
  return (
    <>
      <UpperFooter />
      <LowerFooter />
    </>
  );
};

export default Footer;
