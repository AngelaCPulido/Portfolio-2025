import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, Download } from 'lucide-react';
import logo from 'figma:asset/logo-bw.png';

export function ContactSection() {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:hola@angelacarolinapulido.com",
      icon: Mail,
      description: "hola@angelacarolinapulido.com"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/angela-pulido/",
      icon: Linkedin,
      description: "/in/angela-carolina"
    },
    {
      label: "Behance",
      href: "https://www.behance.net/angelapulido",
      icon: ExternalLink,
      description: "/angelacarolina"
    },
    {
      label: "Download CV",
      href: "/AngelaPulidoCV.pdf",
      icon: Download,
      description: "PDF • 11KB"
    }
  ];

  return (
    <footer id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl lg:text-8xl font-bold mb-8 leading-none tracking-tight"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Let's work
            <br />
            <span className="text-gray-400">together</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to create something extraordinary? Let's discuss your next project and bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="group block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 h-full border border-gray-800 hover:border-gray-600 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <link.icon size={28} className="text-white" strokeWidth={1.5} />
                </motion.div>
                
                {/* Label */}
                <h3 className="text-lg font-bold mb-2 text-white">
                  {link.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm font-medium">
                  {link.description}
                </p>
                
                {/* Hover indicator */}
                <motion.div 
                  className="w-0 h-0.5 bg-white mt-4 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo/Name */}
            <motion.div 
              className="text-center md:text-left flex flex-col items-center md:items-start gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logo}
                alt="Ángela Carolina Logo"
                className="h-10 w-auto object-contain "
              />
              <p className="text-gray-400 font-medium">
                Senior Ux designer
              </p>
            </motion.div>

            {/* Copyright & Info */}
            <motion.div 
              className="text-center md:text-right space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 font-medium">
                © 2025 Ángela Carolina. All rights reserved.
              </p>

            </motion.div>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2">
            <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}