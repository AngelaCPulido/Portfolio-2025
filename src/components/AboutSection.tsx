import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Portrait Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737652423804-42701a064e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRlc2lnbmVyfGVufDF8fHx8MTc1NjUwMDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="About Me Portrait"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-12 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold mb-8 text-black leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Hi, I'm Ángela 👋
              </motion.h2>
            </div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Product Designer passionate about solving human-centered problems through thoughtful design. With a focus on creating solutions that benefit society, I've successfully led the design and launch of large-scale web and mobile projects.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                My expertise lies in visual design, design systems, and high-fidelity prototyping, with a proven track record of collaborating with cross-functional teams to align product vision with business goals.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-xl text-black font-medium italic leading-relaxed mb-4">
                  "I've dedicated my career to crafting experiences that don't just look beautiful, but actually improve lives – because good design should serve everyone."
                </p>
                <cite className="text-gray-500 text-sm font-medium not-italic">— My design philosophy</cite>
              </div>

              {/* Skills/Expertise */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Design Expertise</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>User Experience Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Design Systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Prototyping & Testing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Visual Design</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Industries</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Financial Technology</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Healthcare & Wellness</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Education Technology</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>E-commerce & Retail</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}