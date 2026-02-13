import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Play } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const mainTestimonial = {
    content: "Franchement, je mets 5 étoiles. Que ce soit le D.T.R Club ou le D.T.R Trip, c'est vraiment du sérieux. Ils sont pédagogues, pros, bienveillants, ils prennent le temps de répondre à toutes les questions, sans te faire sentir de trop. La formation elle est carrée, on t'apprend des choses concrètes, utiles, que j'ai jamais vues ailleurs. Et pourtant, j'en ai cherché de l'info… pendant des mois. J'ai accumulé plein de trucs, mais souvent c'était pas si pertinent que ça. Et le D.T.R Trip… c'est une opportunité de fou. Être sur place en Chine, voir les usines, rencontrer directement les fournisseurs, les agents… c'est pas juste théorique, tu touches le truc du doigt. Tu comprends vraiment comment ça fonctionne, et ça te donne une vraie longueur d'avance. Et encore, je parle que du minimum… parce que ce qu'il y a autour, c'est encore plus fort. 💪",
    rating: 5
  };

  const videoIds = [
    "1yWprtyGXpml_sNVjaZAKHLY4PGa6JZGa",
    "1cJxMC91auiAup1QAsowKtC4O4c92KXI1",
    "1wNi0jkKQA4lPxZTJuCi-zv94i--YL-xN",
    "16a0MEXadTojxxr8lAYPSm5-CY0MGokPD",
    "1q_0aBddb55XBvwSlunU_seS8m9uzc6oj"
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#00d4aa]/5 rounded-full blur-[150px] md:blur-[200px] animate-morph" />
        <motion.div
          className="hidden md:block absolute top-20 right-20 text-[#00d4aa]/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Quote size={200} />
        </motion.div>
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
            <Star className="w-3 h-3 md:w-4 md:h-4" />
            Témoignages
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            Ils ont <span className="text-gradient">participé</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
            Découvrez les retours de nos précédents participants
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative max-w-5xl mx-auto mb-12 md:mb-20"
        >
          <Quote className="absolute top-6 md:top-8 right-6 md:right-8 w-12 h-12 md:w-20 md:h-20 text-[#00d4aa]/20" />
          
          {/* Rating */}
          <div className="flex gap-1 mb-6 md:mb-8">
            {[...Array(mainTestimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-6 h-6 md:w-8 md:h-8 fill-[#00d4aa] text-[#00d4aa]" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light pr-8 md:pr-20">
            "{mainTestimonial.content}"
          </p>
          <p className="text-[#00d4aa] font-semibold mt-4 md:mt-6 text-base md:text-lg">
            — Khalil
          </p>
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            <Play className="inline-block w-6 h-6 md:w-8 md:h-8 text-[#00d4aa] mr-3" />
            Témoignages Vidéos
          </h3>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {videoIds.map((videoId, index) => (
              <motion.div
                key={videoId}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden glass group"
              >
                <iframe
                  src={`https://drive.google.com/file/d/${videoId}/preview`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Témoignage vidéo ${index + 1}`}
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
