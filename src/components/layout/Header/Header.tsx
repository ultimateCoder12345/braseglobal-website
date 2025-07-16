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
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  // { label: "Team", to: "/team" },
];

export const Header = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/src/assets/images/brasetech_logo.png"
            alt="Logo"
            sx={{ height: 50, mr: 2, display: { xs: "none", md: "flex" } }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.to} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    to={link.to}
                    color={
                      link.to === location.pathname
                        ? "primary.main"
                        : "text.primary"
                    }
                    underline="none"
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src="/src/assets/images/brasetech_logo.png"
            alt="Logo"
            sx={{ height: 40, mr: 2, display: { xs: "flex", md: "none" } }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color:
                    link.to === location.pathname ? "primary.main" : "black",
                  fontWeight: link.to === location.pathname ? 700 : 400,
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
