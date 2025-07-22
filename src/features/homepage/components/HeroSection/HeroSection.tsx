import { Button, Stack, Typography, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <section
      style={{ position: "relative", padding: "5rem 0", textAlign: "center" }}
    >
      <Container maxWidth="md" style={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 3,
          }}
        >
          Empowering Businesses with Innovative IT Solutions
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
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
          <Button variant="outlined" size="large" href="/contact">
            Contact Us
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
