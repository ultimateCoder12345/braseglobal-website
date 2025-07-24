import { Box, Button, Stack, Typography, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        padding: { xs: "4rem 0", md: "6rem 0" },
        textAlign: "center",
        // Set the background image
        backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop")', // <-- REPLACE WITH YOUR IMAGE URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        // Create a dark overlay for text readability
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity (0.0 to 1.0)
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "white", // Changed color for contrast
            mb: 3,
          }}
        >
          Empowering Businesses with Innovative IT Solutions
        </Typography>

        <Typography
          variant="h5"
          paragraph
          sx={{
            mb: 4,
            color: "grey.300", // Changed color for contrast
          }}
        >
          Your trusted partner in navigating the complexities of the digital
          world.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" size="large" href="/services">
            Our Services
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/contact"
            sx={{
              // Changed styles for contrast
              borderColor: "white",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}