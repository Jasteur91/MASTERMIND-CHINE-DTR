import { motion } from 'framer-motion';
import { Instagram, Youtube, Heart } from 'lucide-react';
import { Logo3D } from '@/components/Logo3D.tsx';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "instagram://user?username=valy.sy", label: "Instagram", fallback: "https://www.instagram.com/valy.sy?igsh=anFuZXgxYmtpOGJy" },
    { icon: Youtube, href: "https://youtube.com/@valysy?si=fbg18ZGexjcQPLvL", label: "YouTube" }
  ];

  const footerLinks = [
    { label: "À propos", href: "#about" },
    { label: "Programme", href: "#program" },
    { label: "Logistique", href: "#logistics" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px glow-line" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#00d4aa]/5 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="mb-4">
              <Logo3D size="small" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
              La communauté #1 des entrepreneurs e-commerce francophones. 
              Formations, masterminds et accompagnement pour scaler votre business.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.label === "Instagram" ? "https://www.instagram.com/valy.sy?igsh=anFuZXgxYmtpOGJy" : social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00d4aa] hover:glass-accent transition-all"
                  aria-label={social.label}
                  onClick={(e) => {
                    if (social.label === "Instagram") {
                      e.preventDefault();
                      // Try to open Instagram app first, fallback to web
                      const appUrl = "instagram://user?username=valy.sy";
                      const webUrl = "https://www.instagram.com/valy.sy?igsh=anFuZXgxYmtpOGJy";
                      
                      const iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = appUrl;
                      document.body.appendChild(iframe);
                      
                      setTimeout(() => {
                        document.body.removeChild(iframe);
                        window.open(webUrl, '_blank');
                      }, 500);
                    }
                  }}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#00d4aa] to-transparent" />
              Liens rapides
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#00d4aa] transition-colors flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-3 md:group-hover:w-4 h-0.5 bg-[#00d4aa] transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#00d4aa] to-transparent" />
              Contact
            </h4>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              Des questions ? N'hésitez pas à nous contacter.
            </p>

            {/* CTA Mini */}
            <motion.a
              href="https://enwh6bkfmhv.typeform.com/to/c06iWofz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 md:mt-6 block w-full py-2.5 md:py-3 btn-primary rounded-lg md:rounded-xl text-center text-sm"
            >
              Réserver ma place
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs md:text-sm flex items-center gap-1 text-center md:text-left">
            © {currentYear} DTR Club. Fait avec <Heart className="w-3 h-3 text-[#00d4aa] fill-current" /> pour les entrepreneurs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <motion.a 
              href="https://www.dtrclub.com/mentions-legales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#00d4aa] transition-colors"
              whileHover={{ y: -2 }}
            >
              Mentions légales
            </motion.a>
            <motion.a 
              href="https://www.dtrclub.com/politique-de-confidentialite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#00d4aa] transition-colors"
              whileHover={{ y: -2 }}
            >
              Politique de confidentialité
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
