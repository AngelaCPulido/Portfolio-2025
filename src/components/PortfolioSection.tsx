import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import CHS from "figma:asset/CHS-Cover.png"
import lastmile from "figma:asset/lastmile-cover.png"
import redsalud from "figma:asset/redsalud-cover.png"
import juntos from "figma:asset/Juntos-cover.png"

const portfolioData = [
  {
    id: 1,
    category: "Healthcare",
    title: "CHS Care Management",
    subtitle: "Smarter care coordination for children and seniors with complex needs",
    image: CHS,
    tags: ["Healthcare", "Patient Engagement", "Accessibility"],
    metrics: [
      { value: "+35%", label: "Adherence rate" },
      { value: "90%", label: "Plan access" },
      { value: "-15%", label: "ER visits" }
    ]
  },
  {
    id: 2,
    category: "Logistics",
    title: "Inmediatum Lastmile",
    subtitle: "Reducing delivery time by 67% through intelligent route planning",
    image: lastmile,
    tags: ["B2B SaaS", "Logistics Technologies", "Dashboard design"],
    metrics: [
      { value: "9x", label: "Route optimization time" },
      { value: "45%", label: "On-time delivery rate" },
      { value: "-34%", label: "Average cost per delivery" }
    ]
  },
  {
    id: 3,
    category: "Restaurant Tech",
    title: "+ Juntos Empowering Local Restaurants: Online Menus, Zero Barriers",
    subtitle: "From Customer Feedback to Seamless Menu Creation: A Journey to Digital Independence",
    image: juntos,
    tags: ["Menu Design", "Online Orders", "Digital Transformation"],
    metrics: [
      { value: "+2,500", label: "small restaurants onboarded in first year" },
      { value: "40%", label: "Increase in successful menu setups" },
      { value: "+30%", label: "satisfaction rate in Play Store reviews after update" }
    ]
  },
  {
    id: 4,
    category: "Telehealth",
    title: "Red de Salud",
    subtitle: "Redefining Patient Management in Telehealth",
    image: redsalud,
    tags: ["Telehealth", "SaaS", "Healthcare Technology"],
    metrics: [
      { value: "45%", label: "Faster record updates" },
      { value: "60%", label: "More follow-ups" },
      { value: "3x", label: "Microlearning engagement" }
    ]
  }
];

interface PortfolioSectionProps {
  onViewCaseStudy: (projectId: number) => void;
}

export function PortfolioSection({ onViewCaseStudy }: PortfolioSectionProps) {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-black tracking-tight">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A selection of recent projects showcasing user-centered design solutions that drive measurable business impact.
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="space-y-32">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div 
                      key={metricIndex}
                      className="text-center lg:text-left"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-black mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="group inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={() => onViewCaseStudy(project.id)}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg font-medium">View Case Study</span>
                  <ArrowUpRight 
                    size={20} 
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" 
                  />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}