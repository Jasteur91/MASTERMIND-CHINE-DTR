import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, Check, ArrowRight, Sparkles, Zap, Hotel, Car, Gift, GraduationCap, Crown, Languages, Utensils, Star } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const included = [
    { icon: Hotel, text: "Hôtel 4 étoiles (4 nuits)" },
    { icon: Car, text: "Tous les transports sur place" },
    { icon: GraduationCap, text: "DTR CLUB VIP* (formation e-commerce)" },
    { icon: Languages, text: "Guide complet sur la Chine (adresses, marchés)" },
    { icon: Gift, text: "Initiation pratique au chinois mandarin" },
    { icon: Utensils, text: "Liste de fournisseurs vérifiés" },
    { icon: Star, text: "Carnet d'adresses contacts clés (transitaire, agents)" },
    { icon: Crown, text: "Session stratégie 1:1 pendant le séjour" },
    { icon: Check, text: "Soirée de clôture networking" },
    { icon: Check, text: "Accès Foire de Canton" }
  ];

  return (
    <section id="cta" className="py-16 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[#00d4aa]/10 rounded-full blur-[200px] md:blur-[250px] animate-morph" />
        <div className="absolute top-0 left-0 right-0 h-px glow-line" />
        
        {/* Floating elements - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-1/4 left-10 w-20 h-20 border border-[#00d4aa]/20 rounded-xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
        />
        <motion.div
          className="hidden md:block absolute bottom-1/4 right-10 w-16 h-16 border border-[#0d9488]/30 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 glass-accent rounded-full mb-6 md:mb-8 animate-pulse-glow"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#00ffc8]" />
            </motion.div>
            <span className="text-[#00ffc8] text-xs md:text-sm font-medium">Dernières places disponibles</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            Prêt à <span className="text-gradient animate-text-glow">transformer</span> votre business ?
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            Rejoignez-nous pour une semaine qui changera votre façon de faire du e-commerce
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-[2px] rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] via-[#00ffc8] to-[#0d9488]"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ borderRadius: '24px' }}
            />
            
            <div className="relative bg-[#030a09] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {/* Left Side */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">Mastermind Chine 2026</h3>
                    <p className="text-[#00d4aa] text-base md:text-lg mb-4 md:mb-6">L'expérience ultime pour construire votre e-commerce à la source</p>
                  </motion.div>
                  
                  {/* Info */}
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {[
                      { icon: Calendar, text: "27 Avril - 1er Mai 2026" },
                      { icon: MapPin, text: "Canton, Chine" },
                      { icon: Users, text: "15 places" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-[#00d4aa]" />
                        </div>
                        <span className="text-sm md:text-base">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Included List */}
                  <div className="space-y-2 md:space-y-3">
                    {included.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3 text-gray-400 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        <div className="w-6 h-6 rounded-md bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-[#00d4aa]" />
                        </div>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-center">
                  {/* Highlight Box */}
                  <motion.div 
                    className="glass-accent rounded-2xl p-6 md:p-8 mb-6 md:mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="w-8 h-8 text-[#00d4aa]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white">Offre Exclusive</h4>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      Réservez votre place et recevez également :
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#00ffc8] font-semibold">
                        <Check className="w-5 h-5" />
                        <span>DTR CLUB VIP (formation e-commerce)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#00ffc8] font-semibold">
                        <Check className="w-5 h-5" />
                        <span>Liste de fournisseurs vérifiés</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#00ffc8] font-semibold">
                        <Check className="w-5 h-5" />
                        <span>Carnet d'adresses contacts clés</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://enwh6bkfmhv.typeform.com/to/c06iWofz"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 0 60px rgba(0, 212, 170, 0.5)' 
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 md:py-5 btn-primary rounded-xl md:rounded-2xl text-base md:text-lg flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      Réserver ma place
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={{ x: ['0%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </motion.a>


                  {/* Urgency */}
                  <motion.div 
                    className="mt-5 md:mt-6 p-3 md:p-4 glass-accent rounded-xl text-center"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(0, 212, 170, 0.2)',
                        '0 0 40px rgba(0, 212, 170, 0.4)',
                        '0 0 20px rgba(0, 212, 170, 0.2)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-[#00ffc8] font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                      <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      Plus que 4 places disponibles
                      <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        { /* Section supprimée */ }
      </div>
    </section>
  );
}
