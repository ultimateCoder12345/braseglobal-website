
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Types
type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  t: number;
  originalX: number;
  originalY: number;
  originalZ: number;
  size: number;
  energy: number;
};

type ParticleSwarmProps = {
  count?: number;
};

type AIParticleSwarmProps = {
  count?: number;
  opacity?: number;
  enableMouseInteraction?: boolean;
  particleSize?: number;
  speedMultiplier?: number;
  confinedToParent?: boolean; // New prop to control positioning
};

export const ParticleSwarm: React.FC<
  ParticleSwarmProps & { particleSize?: number }
> = ({ count = 1500, particleSize = 0.2 }) => {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(30);
      const y = THREE.MathUtils.randFloatSpread(20);
      const z = THREE.MathUtils.randFloatSpread(15);

      temp.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.01,
        t: Math.random() * 100,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: Math.random() * 0.5 + 0.1,
        energy: Math.random() * 0.5 + 0.5,
      });
    }
    return temp;
  }, [count]);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    particles.forEach((p, i) => {
      const i3 = i * 3;
      pos[i3] = p.x;
      pos[i3 + 1] = p.y;
      pos[i3 + 2] = p.z;

      // AI-like color scheme: cyan to blue gradient
      const intensity = p.energy;
      col[i3] = 0.0 + intensity * 0.2; // R
      col[i3 + 1] = 0.6 + intensity * 0.4; // G
      col[i3 + 2] = 1.0; // B

      siz[i] = p.size;
    });

    return [pos, col, siz];
  }, [particles, count]);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    if (!mesh.current) return;

    const positionAttr = mesh.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const colorAttr = mesh.current.geometry.attributes
      .color as THREE.BufferAttribute;
    const sizeAttr = mesh.current.geometry.attributes
      .size as THREE.BufferAttribute;

    // Update mouse position for particle attraction
    const mouseX = mouse.x * 15;
    const mouseY = mouse.y * 10;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const p = particles[i];

      // AI-like flocking behavior
      const neighbors = particles.filter((other, idx) => {
        if (idx === i) return false;
        const dx = other.x - p.x;
        const dy = other.y - p.y;
        const dz = other.z - p.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz) < 2;
      });

      // Separation, alignment, and cohesion forces
      let sepX = 0,
        sepY = 0,
        sepZ = 0;
      let alignX = 0,
        alignY = 0,
        alignZ = 0;
      let cohX = 0,
        cohY = 0,
        cohZ = 0;

      neighbors.forEach((neighbor) => {
        const dx = p.x - neighbor.x;
        const dy = p.y - neighbor.y;
        const dz = p.z - neighbor.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist > 0) {
          // Separation
          sepX += dx / dist;
          sepY += dy / dist;
          sepZ += dz / dist;

          // Alignment
          alignX += neighbor.vx;
          alignY += neighbor.vy;
          alignZ += neighbor.vz;

          // Cohesion
          cohX += neighbor.x;
          cohY += neighbor.y;
          cohZ += neighbor.z;
        }
      });

      if (neighbors.length > 0) {
        sepX /= neighbors.length;
        sepY /= neighbors.length;
        sepZ /= neighbors.length;

        alignX /= neighbors.length;
        alignY /= neighbors.length;
        alignZ /= neighbors.length;

        cohX = cohX / neighbors.length - p.x;
        cohY = cohY / neighbors.length - p.y;
        cohZ = cohZ / neighbors.length - p.z;
      }

      // Mouse attraction
      const mouseAttractionX = (mouseX - p.x) * 0.0005;
      const mouseAttractionY = (mouseY - p.y) * 0.0005;

      // Sine wave movement for organic feel
      const waveX = Math.sin(p.t + time * 0.3) * 0.001;
      const waveY = Math.cos(p.t + time * 0.2) * 0.001;

      // Update velocity with all forces
      p.vx +=
        sepX * 0.01 + alignX * 0.005 + cohX * 0.002 + mouseAttractionX + waveX;
      p.vy +=
        sepY * 0.01 + alignY * 0.005 + cohY * 0.002 + mouseAttractionY + waveY;
      p.vz += sepZ * 0.01 + alignZ * 0.005 + cohZ * 0.002;

      // Limit velocity
      const maxVel = 0.05;
      const vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy + p.vz * p.vz);
      if (vel > maxVel) {
        p.vx = (p.vx / vel) * maxVel;
        p.vy = (p.vy / vel) * maxVel;
        p.vz = (p.vz / vel) * maxVel;
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Boundary conditions - wrap around
      if (p.x > 15) p.x = -15;
      if (p.x < -15) p.x = 15;
      if (p.y > 10) p.y = -10;
      if (p.y < -10) p.y = 10;
      if (p.z > 8) p.z = -8;
      if (p.z < -8) p.z = 8;

      // Update buffer attributes
      positionAttr.array[i3] = p.x;
      positionAttr.array[i3 + 1] = p.y;
      positionAttr.array[i3 + 2] = p.z;

      // Dynamic color based on velocity and energy
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy + p.vz * p.vz);
      const intensity = Math.min(
        1,
        speed * 20 + p.energy * 0.5 + Math.sin(time * 2 + p.t) * 0.2
      );

      colorAttr.array[i3] = 0.0 + intensity * 0.3;
      colorAttr.array[i3 + 1] = 0.4 + intensity * 0.6;
      colorAttr.array[i3 + 2] = 0.8 + intensity * 0.2;

      // Dynamic size based on energy
      sizeAttr.array[i] = p.size * (0.5 + intensity * 0.5);
    }

    positionAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={particleSize}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Main AI Particle Swarm Component
export const AIParticleSwarm: React.FC<AIParticleSwarmProps> = ({
  count = 1500,
  opacity = 0.8,
  enableMouseInteraction = true,
  particleSize = 0.8,
  confinedToParent = true, // Default to confined mode
}) => {
  const containerStyle: React.CSSProperties = confinedToParent
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: enableMouseInteraction ? "auto" : "none",
        opacity: opacity,
      }
    : {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: enableMouseInteraction ? "auto" : "none",
        opacity: opacity,
        zIndex: -1,
      };

  return (
    <div style={containerStyle}>
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleSwarm count={count} particleSize={particleSize} />
      </Canvas>
    </div>
  );
};