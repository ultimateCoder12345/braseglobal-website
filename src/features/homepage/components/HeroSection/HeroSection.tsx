import React from "react";
import styles from "./HeroSection.module.scss";
import {
  Cloud,
  Smartphone,
  Database,
  Shield,
  Code,
  Settings,
} from "lucide-react";

type TechOrbProps = {
  size?: number;
  iconSize?: number;
  animationSpeed?: number;
};

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  highlightText?: string;
  showTechOrb?: boolean;
  techOrbProps?: TechOrbProps;
};

const techIcons = [
  <Cloud key="cloud" />,
  <Smartphone key="mobile" />,
  <Database key="database" />,
  <Shield key="security" />,
  <Code key="code" />,
  <Settings key="settings" />,
];

const TechOrb: React.FC<TechOrbProps> = ({
  size = 300,
  iconSize = 32,
  animationSpeed = 15,
}) => {
  return (
    <div className={styles.techOrb} style={{ width: size, height: size }}>
      <div className={styles.orbitContainer}>
        {techIcons.map((icon, idx) => (
          <div
            key={idx}
            className={styles.orbitIcon}
            style={{
              fontSize: `${iconSize}px`,
              animationDuration: `${animationSpeed}s`,
              animationDelay: `-${idx * (animationSpeed / techIcons.length)}s`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {React.cloneElement(icon, { size: iconSize })}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Empowering Businesses with",
  subtitle = "Harness the power of artificial intelligence and cutting-edge technology to transform your business operations and drive innovation.",
  highlightText = "AI-Powered Solutions",
  showTechOrb = true,
  techOrbProps = {},
}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          {title} <span className={styles.highlight}>{highlightText}</span>
        </h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>

      {showTechOrb && <TechOrb {...techOrbProps} />}
    </div>
  );
};

export default HeroSection;
