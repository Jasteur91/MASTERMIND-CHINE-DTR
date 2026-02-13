import { motion } from 'framer-motion';

interface Logo3DProps {
  size?: 'small' | 'medium' | 'large' | 'hero';
  className?: string;
}

export function Logo3D({ size = 'medium', className = '' }: Logo3DProps) {
  const sizes = {
    small: { width: 100, height: 32 },
    medium: { width: 140, height: 44 },
    large: { width: 200, height: 64 },
    hero: { width: 400, height: 128 },
  };

  const config = sizes[size];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: '800px' }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 180 50"
        width={config.width}
        height={config.height}
        className="transform-gpu logo-3d"
        style={{ 
          filter: 'drop-shadow(0 4px 15px rgba(0, 212, 170, 0.35))',
        }}
      >
        <defs>
          <linearGradient id={`logoGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffc8" />
            <stop offset="50%" stopColor="#00d4aa" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <filter id={`logoGlow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lettre D - épaisseur uniforme avec coins arrondis */}
        <g className="letter-d">
          <path
            d="M8 8 
               L8 42 
               Q8 44 10 44 
               L22 44 
               Q38 44 38 26 
               Q38 8 22 8 
               L10 8 
               Q8 8 8 10 
               L8 8 Z
               M16 16 
               L20 16 
               Q28 16 28 26 
               Q28 36 20 36 
               L16 36 
               L16 16 Z"
            fill={`url(#logoGrad-${size})`}
            filter={`url(#logoGlow-${size})`}
            fillRule="evenodd"
          />
        </g>

        {/* Premier point */}
        <circle
          cx="50"
          cy="38"
          r="5"
          fill={`url(#logoGrad-${size})`}
          filter={`url(#logoGlow-${size})`}
          className="dot-pulse"
        />

        {/* Lettre T - épaisseur uniforme avec coins arrondis */}
        <g className="letter-t">
          <path
            d="M62 8 
               Q60 8 60 10 
               L60 14 
               Q60 16 62 16 
               L76 16 
               L76 42 
               Q76 44 78 44 
               L82 44 
               Q84 44 84 42 
               L84 16 
               L98 16 
               Q100 16 100 14 
               L100 10 
               Q100 8 98 8 
               L62 8 Z"
            fill={`url(#logoGrad-${size})`}
            filter={`url(#logoGlow-${size})`}
          />
        </g>

        {/* Deuxième point */}
        <circle
          cx="112"
          cy="38"
          r="5"
          fill={`url(#logoGrad-${size})`}
          filter={`url(#logoGlow-${size})`}
          className="dot-pulse dot-pulse-delayed"
        />

        {/* Lettre R - épaisseur uniforme avec coins arrondis */}
        <g className="letter-r">
          <path
            d="M122 8 
               Q120 8 120 10 
               L120 42 
               Q120 44 122 44 
               L126 44 
               Q128 44 128 42 
               L128 32 
               L136 32 
               L148 43 
               Q149 44 151 44 
               L156 44 
               Q158 44 157 42 
               L144 30 
               Q152 28 152 20 
               Q152 8 138 8 
               L122 8 Z
               M128 16 
               L136 16 
               Q144 16 144 21 
               Q144 25 136 25 
               L128 25 
               L128 16 Z"
            fill={`url(#logoGrad-${size})`}
            filter={`url(#logoGlow-${size})`}
            fillRule="evenodd"
          />
        </g>
      </svg>

      {/* Reflet sous le logo */}
      <div
        className="absolute left-0 w-full opacity-15 blur-[2px]"
        style={{ 
          top: '100%',
          transform: 'scaleY(-0.25) translateY(-25%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
        }}
      >
        <svg viewBox="0 0 180 50" width={config.width} height={config.height}>
          <defs>
            <linearGradient id={`refGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4aa" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          <path d="M8 8 L8 42 Q8 44 10 44 L22 44 Q38 44 38 26 Q38 8 22 8 L10 8 Q8 8 8 10 L8 8 Z M16 16 L20 16 Q28 16 28 26 Q28 36 20 36 L16 36 L16 16 Z" fill={`url(#refGrad-${size})`} fillRule="evenodd" />
          <circle cx="50" cy="38" r="5" fill={`url(#refGrad-${size})`} />
          <path d="M62 8 Q60 8 60 10 L60 14 Q60 16 62 16 L76 16 L76 42 Q76 44 78 44 L82 44 Q84 44 84 42 L84 16 L98 16 Q100 16 100 14 L100 10 Q100 8 98 8 L62 8 Z" fill={`url(#refGrad-${size})`} />
          <circle cx="112" cy="38" r="5" fill={`url(#refGrad-${size})`} />
          <path d="M122 8 Q120 8 120 10 L120 42 Q120 44 122 44 L126 44 Q128 44 128 42 L128 32 L136 32 L148 43 Q149 44 151 44 L156 44 Q158 44 157 42 L144 30 Q152 28 152 20 Q152 8 138 8 L122 8 Z M128 16 L136 16 Q144 16 144 21 Q144 25 136 25 L128 25 L128 16 Z" fill={`url(#refGrad-${size})`} fillRule="evenodd" />
        </svg>
      </div>

      {/* Glow derrière */}
      <div
        className="absolute inset-0 -z-10 blur-2xl animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 170, 0.25), transparent 70%)',
        }}
      />
    </motion.div>
  );
}

// Logo en arrière-plan - version subtile avec CSS animations
export function LogoBackground() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div
        className="relative logo-background-container"
        style={{ 
          perspective: '1000px',
        }}
      >
        <svg
          viewBox="0 0 180 50"
          className="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw] h-auto logo-background"
          style={{
            filter: 'blur(0.3px)',
            opacity: 0.05,
          }}
        >
          <defs>
            <linearGradient id="bgLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffc8" />
              <stop offset="50%" stopColor="#00d4aa" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>

          {/* Lettre D */}
          <path
            d="M8 8 L8 42 Q8 44 10 44 L22 44 Q38 44 38 26 Q38 8 22 8 L10 8 Q8 8 8 10 L8 8 Z M16 16 L20 16 Q28 16 28 26 Q28 36 20 36 L16 36 L16 16 Z"
            fill="url(#bgLogoGrad)"
            fillRule="evenodd"
          />

          {/* Premier point */}
          <circle
            cx="50"
            cy="38"
            r="5"
            fill="url(#bgLogoGrad)"
          />

          {/* Lettre T */}
          <path
            d="M62 8 Q60 8 60 10 L60 14 Q60 16 62 16 L76 16 L76 42 Q76 44 78 44 L82 44 Q84 44 84 42 L84 16 L98 16 Q100 16 100 14 L100 10 Q100 8 98 8 L62 8 Z"
            fill="url(#bgLogoGrad)"
          />

          {/* Deuxième point */}
          <circle
            cx="112"
            cy="38"
            r="5"
            fill="url(#bgLogoGrad)"
          />

          {/* Lettre R */}
          <path
            d="M122 8 Q120 8 120 10 L120 42 Q120 44 122 44 L126 44 Q128 44 128 42 L128 32 L136 32 L148 43 Q149 44 151 44 L156 44 Q158 44 157 42 L144 30 Q152 28 152 20 Q152 8 138 8 L122 8 Z M128 16 L136 16 Q144 16 144 21 Q144 25 136 25 L128 25 L128 16 Z"
            fill="url(#bgLogoGrad)"
            fillRule="evenodd"
          />
        </svg>

        {/* Glow effect derrière le logo */}
        <div
          className="absolute inset-0 -z-10 animate-glow-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 212, 170, 0.03), transparent 60%)',
            filter: 'blur(30px)',
            transform: 'scale(1.4)',
          }}
        />
      </div>
    </div>
  );
}
