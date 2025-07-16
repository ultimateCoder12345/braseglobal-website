
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

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        color: "#333",
        py: 4,
        mt: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Company Description */}
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

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1A4D8C", mb: 2 }}
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
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1A4D8C", mb: 2 }}
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
          </Grid>

          {/* Head Office */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1A4D8C", mb: 2 }}
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

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            mt: 4,
            pt: 3,
            bgcolor: "#1A4D8C",
            mx: -3,
            px: 3,
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "white" }}
          >
            © 2024 Brase Technologies Pty Ltd - All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
