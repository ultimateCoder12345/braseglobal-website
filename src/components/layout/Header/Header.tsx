import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "@mui/material";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "Clients", to: "/clients" },
  // { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  //{ label: "Team", to: "/team" },
];

export const Header = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleClose = () => {
    setAboutAnchorEl(null);
    setServicesAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    handleClose();
    setMobileOpen(false);
  };

  const services = [
    { name: 'IT Consulting', id: 'it-consulting' },
    { name: 'Cloud Solutions', id: 'cloud-solutions' },
    { name: 'AI & Machine Learning', id: 'ai-ml' },
    { name: 'Data Analytics', id: 'data-analytics' },
    { name: 'Cybersecurity', id: 'cybersecurity' },
    { name: 'Network Infrastructure', id: 'network-infrastructure' }
  ];

  const aboutItems = [
    { name: 'About Us', id: 'about-us' },
    { name: 'Our Team', id: 'our-team' }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button component={Link} to="/" onClick={() => setMobileOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem>
          <ListItemText primary="About" sx={{ fontWeight: 'bold' }} />
        </ListItem>
        {aboutItems.map((item) => (
          <ListItem 
            key={item.id} 
            button 
            onClick={() => scrollToSection(item.id)}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}

        <ListItem>
          <ListItemText primary="Services" sx={{ fontWeight: 'bold' }} />
        </ListItem>
        {services.map((service) => (
          <ListItem 
            key={service.id} 
            button 
            onClick={() => scrollToSection(service.id)}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={service.name} />
          </ListItem>
        ))}

        <ListItem button component={Link} to="/case-studies" onClick={() => setMobileOpen(false)}>
          <ListItemText primary="Case Studies" />
        </ListItem>
        <ListItem button component={Link} to="/team" onClick={() => setMobileOpen(false)}>
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button component={Link} to="/careers" onClick={() => setMobileOpen(false)}>
          <ListItemText primary="Careers" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={() => setMobileOpen(false)}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              BraseTech
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  component={Link}
                  to="/"
                  sx={{ color: 'text.primary' }}
                >
                  Home
                </Button>

                <Button
                  onClick={handleAboutClick}
                  sx={{ color: 'text.primary' }}
                >
                  About
                </Button>
                <Menu
                  anchorEl={aboutAnchorEl}
                  open={Boolean(aboutAnchorEl)}
                  onClose={handleClose}
                >
                  {aboutItems.map((item) => (
                    <MenuItem 
                      key={item.id} 
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Button
                  onClick={handleServicesClick}
                  sx={{ color: 'text.primary' }}
                >
                  Services
                </Button>
                <Menu
                  anchorEl={servicesAnchorEl}
                  open={Boolean(servicesAnchorEl)}
                  onClose={handleClose}
                >
                  {services.map((service) => (
                    <MenuItem 
                      key={service.id} 
                      onClick={() => scrollToSection(service.id)}
                    >
                      {service.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Button
                  component={Link}
                  to="/case-studies"
                  sx={{ color: 'text.primary' }}
                >
                  Case Studies
                </Button>
                <Button
                  component={Link}
                  to="/team"
                  sx={{ color: 'text.primary' }}
                >
                  Team
                </Button>
                <Button
                  component={Link}
                  to="/careers"
                  sx={{ color: 'text.primary' }}
                >
                  Careers
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                >
                  Contact
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;