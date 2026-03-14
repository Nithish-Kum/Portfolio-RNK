import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const TechSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <MeshDistortMaterial
          color="#6c63ff"
          emissive="#2196F3"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6c63ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const TypingText = () => {
  const titles = [
    "Prompt Engineer",
    "Data Analyst",
    "AI Automation Enthusiast",
    "DSA Problem Solver"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <span className="font-mono text-neon-blue">
      {text}<span className="typing-cursor" />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6c63ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2196F3" />
          <TechSphere />
          <Particles />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-neon-blue font-mono text-sm md:text-base mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="gradient-text">Rachakonda</span>
            <br />
            <span className="text-foreground">Nithish Kumar</span>
          </h1>
          <div className="text-lg md:text-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <TypingText />
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn-gradient text-sm md:text-base">View Projects</a>
            <a href="#contact" className="btn-outline-glow text-sm md:text-base">Contact Me</a>
            <a href="#about" className="btn-outline-glow text-sm md:text-base">About Me</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs font-mono">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-neon-purple rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
