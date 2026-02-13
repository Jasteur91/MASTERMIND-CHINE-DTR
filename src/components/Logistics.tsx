import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Hotel, Car, GraduationCap, Check, X, Info, Users, Gift, Languages } from 'lucide-react';

export function Logistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const included = [
    { icon: Hotel, text: "Hébergement hôtel 4 étoiles (4 nuits)" },
    { icon: Car, text: "Tous les transports sur place (van privé)" },
    { icon: Check, text: "Accès visites d'usines exclusives" },
    { icon: Languages, text: "Guide & Traducteur Chinois - Anglais" },
    { icon: GraduationCap, text: "DTR CLUB VIP* (formation e-commerce)" },
    { icon: Users, text: "Accès Foire de Canton" },
    { icon: Check, text: "Guide complet sur la Chine (adresses, marchés)" },
    { icon: Check, text: "Initiation pratique au chinois mandarin" },
    { icon: Check, text: "Liste de fournisseurs vérifiés" },
    { icon: Check, text: "Carnet d'adresses contacts clés (transitaire, agents)" },
    { icon: Check, text: "Session stratégie 1:1 pendant le séjour" },
    { icon: Check, text: "Soirée de clôture networking" },
    { icon: Check, text: "Support 24/7 sur place" }
  ];

  const notIncluded = [
    "Billet d'avion (A/R depuis votre ville)",
    "Visa chinois (accompagnement fourni)",
    "Dépenses personnelles"
  ];

  const practicalInfo = [
    {
      title: "Visa",
      content: "Entrée sans visa – 30 jours pour les passeports français"
    },
    {
      title: "Vol",
      content: "Arrivée recommandée : Aéroport de Canton (CAN) le 27 avril avant 11h."
    },
    {
      title: "Météo",
      content: "Fin avril : environ 25-30°C. Vêtements légers conseillés."
    },
    {
      title: "Santé",
      content: "Aucun vaccin obligatoire."
    }
  ];

  return (
    <section id="logistics" className="py-16 md:py-32 relative" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px glow-line" />
        <motion.div
          className="hidden md:block absolute top-1/4 left-10 w-64 h-64 border border-[#00d4aa]/5 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
          >
            <Plane className="w-3 h-3 md:w-4 md:h-4" />
            Logistique
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            On s'occupe de <span className="text-gradient">tout</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            Concentrez-vous sur votre business, on gère la logistique
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl md:rounded-3xl p-5 md:p-8 hover-glow"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6 flex items-center gap-3">
              <motion.div 
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#00d4aa] to-[#0d9488] flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#030a09]" />
              </motion.div>
              Ce qui est inclus
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {included.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 md:gap-4 text-gray-300 group"
                >
                  <motion.div 
                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4aa]/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#00d4aa]" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors text-sm md:text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Not Included */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-2xl md:rounded-3xl p-5 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6 flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                </div>
                Non inclus
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {notIncluded.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-gray-400 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400/60 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Practical Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-accent rounded-2xl md:rounded-3xl p-5 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6 flex items-center gap-3">
                <Info className="w-5 h-5 md:w-6 md:h-6 text-[#00d4aa]" />
                Infos Pratiques
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {practicalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <h4 className="text-[#00ffc8] font-semibold mb-1 group-hover:text-[#00d4aa] transition-colors text-sm md:text-base">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm">{info.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
