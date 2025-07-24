import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LinkedIn, Twitter, Instagram, YouTube } from "@mui/icons-material";

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
          <Grid item xs={12} md={3} {...({} as any)}>
            <Box sx={{ mb: 2 }}>
              <Link
                component={RouterLink}
                to=""
                color="text.secondary"
                underline="hover"
                variant="body2"
              >
                <Box
                  component="img"
                  src="/src/assets/images/brasetech_logo.png"
                  alt="Brase Tech Logo"
                  sx={{ height: 70, mb: 2 }}
                />
              </Link>
              <Typography variant="body2" color="text.secondary">
                Brase Technologies is a specialized IT consulting firm based in Sydney, Australia, with a presence in the United States and development centers in Hyderabad, India. We deliver tailored technology solutions that drive innovation and business growth.              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/brase-technologies"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#0077B5",
                  color: "white",
                  "&:hover": { bgcolor: "#005582" },
                  width: 32,
                  height: 32,
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/BraseLtd"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#1DA1F2",
                  color: "white",
                  "&:hover": { bgcolor: "#0d8bd9" },
                  width: 32,
                  height: 32,
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/brasetechnologiesptyltd/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#E4405F",
                  color: "white",
                  "&:hover": { bgcolor: "#d62d20" },
                  width: 32,
                  height: 32,
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@brasetechnologiesptyltd5259"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#FF0000",
                  color: "white",
                  "&:hover": { bgcolor: "#cc0000" },
                  width: 32,
                  height: 32,
                }}
              >
                <YouTube fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links Section */}
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 3, sm: 4 },
                justifyContent: "space-between",
              }}
            >
              {/* Services */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#1A4D8C",
                    mb: 2,
                    display: "inline-block",
                  }}
                >
                  SERVICES
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Link
                    component={RouterLink}
                    to="/services/0"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    IT Consulting & Digital Solutions
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services/1"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Cloud Solutions
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services/2"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    AI & Machine Learning
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services/3"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Data and BI Services
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services/4"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Cybersecurity Services
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/services/5"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Network Solutions
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
                    display: "inline-block",
                  }}
                >
                  QUICK LINKS
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                    to="/products"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Products
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
                  {/* <Link
                    component={RouterLink}
                    to="/team"
                    color="text.secondary"
                    underline="hover"
                    variant="body2"
                  >
                    Team
                  </Link> */}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Head Office */}
          <Grid item xs={12} md={3} {...({} as any)}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1A4D8C",
                mb: 2,
                display: "inline-block",
              }}
            >
              HEAD OFFICE
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
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
        <Typography variant="body2" align="center" sx={{ color: "white" }}>
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
