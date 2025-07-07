import { AIParticleSwarm } from "../ParticleSwarm/ParticleSwarmCanvas";
import HeroSection from "./HeroSection";

export const HeroWithParticles: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0f0f23, #1a1a2e)",
  };

  return (
    <div style={containerStyle}>
      <AIParticleSwarm
        particleSize={0.2}
        opacity={0.6}
        enableMouseInteraction={true}
        confinedToParent={true}
      />

      <HeroSection />
    </div>
  );
};

export default HeroWithParticles;
