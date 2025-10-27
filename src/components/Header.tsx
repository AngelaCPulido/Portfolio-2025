import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, Download } from 'lucide-react';
import logo from 'figma:asset/logo-angelacarolina.png';

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={logo}
              alt="Ángela Carolina Logo"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.nav 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.a 
              href="#about" 
              className="text-black hover:text-gray-600 transition-colors duration-200 text-sm font-medium"
              whileHover={{ y: -1 }}   
            >
              About
            </motion.a>
            <motion.a 
              href="#work"
              className="text-black hover:text-gray-600 transition-colors duration-200 text-sm font-medium"
              whileHover={{ y: -1 }}
            >
              Work
            </motion.a>
          </motion.nav>

          {/* CTA Buttons */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/angelacarolinapulido/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                href="https://behance.net/angelacarolina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href="/AngelaPulidoCV.pdf"
                download
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Download size={16} />
              </motion.a>
            </div>

            {/* Contact Me Button */}
            <button
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={14} />
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}