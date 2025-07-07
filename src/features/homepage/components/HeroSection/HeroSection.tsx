import { Button, Stack, Typography, Container } from "@mui/material";
import ParticleBackground from "../ParticleSwarm/ParticleSwarmCanvas";

export default function HeroSection() {
  return (
    <section
      style={{ position: "relative", padding: "5rem 0", textAlign: "center" }}
    >
      <ParticleBackground />
      <Container maxWidth="md" style={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{
            color: "white",
            textShadow: "0 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          Empowering Businesses with Innovative IT Solutions
        </Typography>

        <Typography
          variant="h6"
          paragraph
          style={{
            color: "#BFDBFE",
            textShadow: "0 1px 3px rgba(0,0,0,0.6)",
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
          <Button variant="outlined" size="large" href="/contact">
            Contact Us
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
