import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore } from '@mui/icons-material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/brasetech_logo.png';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = useState<null | HTMLElement>(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutAnchorEl(null);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToServiceSection = (serviceId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Team', path: '/team' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutMenuItems = [
    { name: 'About Us', action: () => scrollToSection('about-us') },
    { name: 'Our Team', action: () => scrollToSection('our-team') },
  ];

  const servicesMenuItems = [
    { name: 'IT Consulting', action: () => scrollToServiceSection('it-consulting') },
    { name: 'Cloud Solutions', action: () => scrollToServiceSection('cloud-solutions') },
    { name: 'AI & Machine Learning', action: () => scrollToServiceSection('ai-machine-learning') },
    { name: 'Data Analytics', action: () => scrollToServiceSection('data-analytics') },
    { name: 'Cybersecurity', action: () => scrollToServiceSection('cybersecurity') },
    { name: 'Network Solutions', action: () => scrollToServiceSection('network-solutions') },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'rgba(0, 30, 60, 0.95)' : 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: scrolled ? '0px 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' },
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Brasetech Logo"
            sx={{
              height: 40,
              mr: 1,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Brasetech
          </Typography>
        </Box>

        {/* Mobile Navigation */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}

            {/* About Dropdown */}
            <Button
              onClick={handleAboutClick}
              endIcon={<ExpandMore />}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: location.pathname === '/about' ? 'rgba(255,255,255,0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              About
            </Button>
            <Menu
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleAboutClose}
              TransitionComponent={Fade}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 2,
                  mt: 1,
                },
              }}
            >
              {aboutMenuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    item.action();
                    handleAboutClose();
                  }}
                  sx={{
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>

            {/* Services Dropdown */}
            <Button
              onClick={handleServicesClick}
              endIcon={<ExpandMore />}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                backgroundColor: location.pathname === '/services' ? 'rgba(255,255,255,0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Services
            </Button>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesClose}
              TransitionComponent={Fade}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 2,
                  mt: 1,
                },
              }}
            >
              {servicesMenuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    item.action();
                    handleServicesClose();
                  }}
                  sx={{
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '240px',
            background: 'rgba(0, 30, 60, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRight: 'none',
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  color: 'white',
                  textAlign: 'center',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;