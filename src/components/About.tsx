import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Handshake, Globe } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const benefits = [
    {
      icon: Target,
      title: "Sourcing Produits",
      description: "Visitez les plus grands marchés et usines de Chine pour trouver vos futurs best-sellers"
    },
    {
      icon: Handshake,
      title: "Partenaires de Confiance",
      description: "Rencontrez des agents et fournisseurs qualifiés pour des partenariats durables"
    },
    {
      icon: TrendingUp,
      title: "Stratégies Avancées",
      description: "Apprenez les techniques de négociation et les secrets du commerce international"
    },
    {
      icon: Globe,
      title: "Réseau d'Élite",
      description: "Connectez-vous avec d'autres entrepreneurs ambitieux et partagez vos expériences"
    }
  ];

  const stats = [
    { value: "5", label: "Jours intensifs" },
    { value: "15", label: "Participants" },
    { value: "100%", label: "Pratique terrain" }
  ];

  return (
    <section id="about" className="py-16 md:py-32 relative" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px glow-line" />
        <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
        <motion.div
          className="hidden md:block absolute top-20 right-20 w-32 h-32 border border-[#00d4aa]/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden md:block absolute bottom-20 left-20 w-24 h-24 border border-[#0d9488]/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span 
            className="inline-block text-[#00d4aa] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 glass-accent rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Pourquoi ce Mastermind ?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            Une expérience <span className="text-gradient">transformatrice</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            5 jours intensifs sur le terrain pour passer au niveau supérieur 
            et maîtriser toute la chaîne de sourcing en Chine
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 212, 170, 0.15)'
              }}
              className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl group hover:glass-accent transition-all duration-500 relative overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4aa]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#00d4aa]/20 to-[#0d9488]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00d4aa]" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00ffc8] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
            >
              <motion.div 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient mb-1 md:mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
              
              {/* Decorative dot - hidden on mobile */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-[#00d4aa]/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
