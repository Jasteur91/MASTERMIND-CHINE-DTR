import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quel est le niveau requis pour participer ?",
      answer: "Ce mastermind s'adresse aux entrepreneurs e-commerce qui ont déjà une activité (même débutante) et qui souhaitent passer au niveau supérieur avec le sourcing en Chine. Que vous fassiez du dropshipping, Amazon FBA, ou votre propre marque, ce programme est fait pour vous."
    },
    {
      question: "Dois-je parler chinois ?",
      answer: "Non, absolument pas ! Un guide et traducteur Chinois - Anglais professionnel nous accompagne pendant tout le séjour. Toutes les négociations et échanges seront traduits en temps réel. Vous recevrez également un traducteur (machine) offert."
    },
    {
      question: "Ai-je besoin d'un visa pour la Chine ?",
      answer: "Pour les passeports français, c'est très simple : entrée sans visa pour un séjour de 30 jours maximum. Vous n'avez donc pas de démarches à faire pour le visa ! Assurez-vous simplement que votre passeport est valide au moins 6 mois après votre date de retour."
    },
    {
      question: "Puis-je passer des commandes directement sur place ?",
      answer: "Oui, c'est même l'un des objectifs ! Vous pourrez négocier et passer des commandes d'échantillons directement avec les usines et fournisseurs rencontrés. Pour les grosses commandes, nous vous conseillons sur les meilleures pratiques."
    },
    {
      question: "Que se passe-t-il si je dois annuler ?",
      answer: "En cas d'annulation plus de 30 jours avant le départ, vous êtes remboursé à 100%. Entre 30 et 15 jours, 50% du montant est remboursé. Moins de 15 jours avant le départ, aucun remboursement n'est possible mais vous pouvez céder votre place à une autre personne."
    },
    {
      question: "Y a-t-il un suivi après le mastermind ?",
      answer: "Absolument ! Vous gardez un accès permanent au groupe privé WhatsApp et au DTR CLUB VIP. Nous organisons des calls de suivi dans les 3 mois suivant le voyage pour vous accompagner dans vos démarches de sourcing."
    },
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer: "Nous recommandons de réserver au moins 4 semaines à l'avance pour avoir le temps de gérer votre billet d'avion. Les places étant limitées à 15 participants, nous vous conseillons de ne pas trop attendre."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
        <motion.div
          className="hidden md:block absolute bottom-20 right-10 w-40 h-40 border border-[#00d4aa]/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            <HelpCircle className="w-3 h-3 md:w-4 md:h-4" />
            FAQ
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            Tout ce que vous devez savoir avant de nous rejoindre
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'glass-accent' : ''
              }`}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left group"
                whileHover={{ x: 3 }}
              >
                <span className={`font-semibold pr-3 md:pr-4 transition-colors text-sm md:text-base ${
                  openIndex === index ? 'text-[#00ffc8]' : 'text-white group-hover:text-[#00d4aa]'
                }`}>
                  {faq.question}
                </span>
                <motion.div 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-[#00d4aa] to-[#00ffc8] text-[#030a09]' 
                      : 'bg-white/5 text-gray-400 group-hover:bg-[#00d4aa]/20 group-hover:text-[#00d4aa]'
                  }`}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
