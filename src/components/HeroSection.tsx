import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dogImage from "figma:asset/kiara.png";
import caroimage from "figma:asset/caro-photo.png"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Content - Left Side */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-black"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
          >
            Human-Centered
            <br />
            <span className="text-gray-600">
              Design for a 
            </span>
            <br />
            <span className="text-gray-400">
              Better Digital Future
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Blending strategy, research, and design systems to create intuitive solutions for people, tech & health industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get in touch
            </button>
            
            <button
              className="text-black border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors duration-200"
              onClick={() => {
                const workSection = document.querySelector("#work");
                workSection?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View my work
            </button>
          </motion.div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="relative">
            {/* Main portrait */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src={caroimage}
                alt="Product Designer Portrait"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </motion.div>

            {/* Floating Dog Image */}
            <motion.div
              className="absolute -bottom-16 -right-8 lg:-bottom-20 lg:-right-12 z-20"
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative group cursor-pointer">
                {/* Dog image container */}
                <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={dogImage}
                    alt="Kiara Angela's best friend"
                    className="w-32 h-40 lg:w-40 lg:h-48 object-cover rounded-xl"
                  />
                </div>

                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                />

                {/* Tooltip on hover */}
                <motion.div
                  className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                >
                  I'm Kiara Woofs & wags to you!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}