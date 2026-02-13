import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Zap, Building, Handshake } from 'lucide-react';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.03,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{ 
            display: char === ' ' ? 'inline' : 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-10">
      {/* Decorative elements - CSS animations for performance */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs with CSS animations */}
        <div 
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full animate-float-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 70%)',
          }}
        />
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-0 right-0 h-px glow-line" />
        <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 glass-accent rounded-full mb-6 md:mb-8 animate-border-glow"
          >
            <motion.span 
              className="w-2 h-2 bg-[#00d4aa] rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[#00ffc8] text-xs md:text-sm font-medium">Places limitées - 15 participants</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#00d4aa]" />
            </motion.div>
          </motion.div>

          {/* Main Title with 3D letter animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight">
            <AnimatedText text="DTR MASTERMIND" className="text-white block" />
            <motion.span 
              className="text-gradient block animate-text-glow"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              CHINE 2026
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Une semaine immersive pour <span className="text-[#00d4aa] font-medium">sourcer vos produits</span>, 
            rencontrer des <span className="text-[#00d4aa] font-medium">partenaires de confiance</span> et 
            <span className="text-[#00d4aa] font-medium"> scaler votre business e-commerce</span>
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2"
          >
            {[
              { icon: Calendar, label: "Date", value: "27 Avril - 1er Mai" },
              { icon: MapPin, label: "Lieu", value: "Canton, Chine" },
              { icon: Users, label: "Participants", value: "15 places" },
              { icon: Building, label: "Hébergement", value: "Hôtel 4 étoiles" },
              { icon: Handshake, label: "Partenaires", value: "De confiance" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 1.1 + index * 0.1, 
                  duration: 0.7,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 212, 170, 0.2)',
                }}
                className="flex items-center gap-3 glass px-4 md:px-5 py-3 md:py-3.5 rounded-xl md:rounded-2xl cursor-pointer w-full sm:w-auto"
              >
                <motion.div 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#00d4aa]/20 to-[#0d9488]/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#00d4aa]" />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-semibold text-sm md:text-base">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <motion.a
              href="https://enwh6bkfmhv.typeform.com/to/c06iWofz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 md:px-10 py-3.5 md:py-4 btn-primary rounded-full text-base md:text-lg relative overflow-hidden group shimmer"
            >
              <span className="relative z-10">Réserver ma place maintenant</span>
            </motion.a>
            <motion.a
              href="#program"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 md:px-10 py-3.5 md:py-4 btn-outline rounded-full text-base md:text-lg"
            >
              Découvrir le programme
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator - hidden on mobile - CSS animation */}
        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 scroll-indicator">
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-[#00d4aa]/40 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] scroll-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
