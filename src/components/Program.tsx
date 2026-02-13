import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plane, GraduationCap, Megaphone, Crown, UserCheck, ChevronRight, Sparkles } from 'lucide-react';

export function Program() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      day: "Jour 1",
      date: "Lun 27 Avril",
      title: "Arrivée & Installation",
      icon: Plane,
      activities: [
        "Accueil à l'aéroport de Canton/Guangzhou + transfert privé",
        "Installation à l'hôtel 4 étoiles",
        "Briefing général : objectifs, opportunités Chine 2026",
        "Soirée de clôture networking"
      ],
      highlight: "Premier contact avec la culture business chinoise"
    },
    {
      day: "Jour 2",
      date: "Mar 28 Avril",
      title: "Masterclass Sourcing & Avantage Chine",
      icon: GraduationCap,
      activities: [
        "Masterclass : sourcing avancé & négociation usine",
        "Tendances e-commerce 2026 & produits à fort potentiel",
        "Visite usine privée : production & contrôle qualité",
        "Conseils terrain : éviter les erreurs coûteuses en Chine"
      ],
      highlight: "Trouver des produits à fort potentiel et des partenaires de confiance"
    },
    {
      day: "Jour 3",
      date: "Mer 29 Avril",
      title: "Acquisition & Publicité Haute Performance",
      icon: Megaphone,
      activities: [
        "Masterclass Ads : structure gagnante & scaling",
        "Créatives qui convertissent & stratégies 2026",
        "Audit live des business des participants",
        "Visite usine 2 : innovation & opportunités exclusives"
      ],
      highlight: "Construire une machine à cash avec les Ads"
    },
    {
      day: "Jour 4",
      date: "Jeu 30 Avril",
      title: "Branding Premium & Scaling International",
      icon: Crown,
      activities: [
        "Masterclass branding : image premium & positionnement",
        "Stratégies de scaling multi-pays",
        "Visite entrepôt logistique : stockage & expédition mondiale",
        "Automatisation & optimisation opérationnelle"
      ],
      highlight: "Transformer une boutique en marque forte"
    },
    {
      day: "Jour 5",
      date: "Ven 1er Mai",
      title: "1to1 & Foire de Canton",
      icon: UserCheck,
      activities: [
        "Sessions 1to1 stratégie business personnalisée",
        "Visite de la Foire de Canton : opportunités exclusives",
        "Soirée de clôture networking",
        "Plan d'exécution post-mastermind"
      ],
      highlight: "Plan d'action sur mesure & accès privilégié"
    }
  ];

  return (
    <section id="program" className="py-16 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-60 md:w-80 h-60 md:h-80 bg-[#00d4aa]/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-10 w-60 md:w-80 h-60 md:h-80 bg-[#0d9488]/5 rounded-full blur-[120px] animate-float-reverse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-[#00d4aa] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 glass-accent rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Programme Détaillé
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            5 jours pour <span className="text-gradient">transformer</span> votre business
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            Un programme minutieusement conçu pour maximiser votre temps en Chine
          </p>
        </motion.div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block">
          {/* Day Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-2 xl:gap-3 mb-10 md:mb-12"
          >
            {days.map((day, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveDay(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-4 xl:px-6 py-3 xl:py-4 rounded-xl xl:rounded-2xl transition-all duration-500 overflow-hidden ${
                  activeDay === index
                    ? 'text-[#030a09] font-bold'
                    : 'glass text-gray-400 hover:text-white hover:glass-accent'
                }`}
              >
                {activeDay === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] to-[#00ffc8]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  <div className="text-xs opacity-70">{day.date}</div>
                  <div className="font-semibold">{day.day}</div>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Day Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 xl:p-10 hover-glow"
            >
              <div className="grid md:grid-cols-2 gap-8 xl:gap-10">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl xl:rounded-2xl bg-gradient-to-br from-[#00d4aa] to-[#0d9488] flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {(() => {
                        const Icon = days[activeDay].icon;
                        return <Icon className="w-7 h-7 xl:w-8 xl:h-8 text-[#030a09]" />;
                      })()}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl xl:text-3xl font-bold text-white">{days[activeDay].title}</h3>
                      <p className="text-[#00d4aa]">{days[activeDay].date}</p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-base xl:text-lg text-gray-300 p-4 glass-accent rounded-xl flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-5 h-5 text-[#00d4aa] flex-shrink-0" />
                    {days[activeDay].highlight}
                  </motion.p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Au programme :</h4>
                  <ul className="space-y-4">
                    {days[activeDay].activities.map((activity, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className="w-6 h-6 rounded-full bg-[#00d4aa]/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                        >
                          <ChevronRight className="w-3 h-3 text-[#00d4aa]" />
                        </motion.div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Mobile & Tablet */}
        <div className="lg:hidden space-y-4 md:space-y-6">
          {days.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-5 md:p-6 hover-glow"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <motion.div 
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#00d4aa] to-[#0d9488] flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 5 }}
                >
                  <day.icon className="w-5 h-5 md:w-6 md:h-6 text-[#030a09]" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white truncate">{day.title}</h3>
                  <p className="text-[#00d4aa] text-sm">{day.date}</p>
                </div>
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full flex-shrink-0">{day.day}</span>
              </div>
              
              {/* Highlight */}
              <div className="mb-4 p-3 glass-accent rounded-lg text-sm text-gray-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#00d4aa] flex-shrink-0 mt-0.5" />
                <span>{day.highlight}</span>
              </div>
              
              <ul className="space-y-2">
                {day.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <ChevronRight className="w-4 h-4 text-[#00d4aa] mt-0.5 flex-shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
