import { useMemo } from 'react';
import { LogoBackground } from './Logo3D';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  glow: boolean;
}

export function ParticlesBackground() {
  // Generate particles once with useMemo - reduced count for performance
  const particles = useMemo<Particle[]>(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.3,
        glow: Math.random() > 0.6,
      });
    }
    return newParticles;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large background D.T.R logo */}
      <LogoBackground />

      {/* Aurora effects - CSS animations for smoothness */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full animate-aurora-1"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 212, 170, 0.06) 0%, rgba(13, 148, 136, 0.02) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full animate-aurora-2"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 255, 200, 0.04) 0%, rgba(0, 212, 170, 0.015) 40%, transparent 70%)',
          }}
        />
        
        {/* Center morphing blob - CSS animation */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] animate-morph"
          style={{
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.03) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Grid pattern - subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating particles - CSS animations for 60fps */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.glow 
              ? 'radial-gradient(circle, #00ffc8 0%, #00d4aa 50%, transparent 100%)'
              : 'radial-gradient(circle, #00d4aa 0%, rgba(0, 212, 170, 0.6) 100%)',
            boxShadow: particle.glow 
              ? '0 0 15px rgba(0, 255, 200, 0.6), 0 0 30px rgba(0, 212, 170, 0.4)'
              : '0 0 8px rgba(0, 212, 170, 0.4)',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Shooting stars - CSS only */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />

      {/* Static glow orbs - no animation for performance */}
      <div 
        className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 200, 0.06), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full animate-glow-pulse-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.05), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030a09_70%)]" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(3, 10, 9, 0.4) 100%)',
        }}
      />
    </div>
  );
}
