import { Box } from "@mui/material";

import { HeroWithParticles } from "../components/HeroSection/HeroWithParticles";
import CoreServicesSection from "../components/CoreServices/CoreServiceSection";

const HomePage = () => (
  <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
    <HeroWithParticles />
    <CoreServicesSection />
  </Box>
);

export default HomePage;
