import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    category: "Healthcare",
    title: "CHS Care Management",
    subtitle: "Smarter care coordination for children and seniors with complex needs",
    image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTcxNzI3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU2NTE0MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["B2B SaaS", "Logistics Technologies", "Dashboard design"],
    metrics: [
      { value: "9x", label: "Route optimization time" },
      { value: "45%", label: "On-time delivery rate" },
      { value: "-34%", label: "Average cost per delivery" }
    ]
  },
  {
    id: 3,
    category: "Mobile Experience",
    title: "FinTech Mobile Banking App",
    subtitle: "Simplifying complex financial workflows for modern users",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU2NTE0MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Fintech", "Mobile First", "Security"],
    metrics: [
      { value: "4.8★", label: "App rating" },
      { value: "+156%", label: "User engagement" },
      { value: "62%", label: "Task completion" }
    ]
  },
  {
    id: 4,
    category: "Enterprise Design",
    title: "Analytics Dashboard Redesign",
    subtitle: "Transforming complex data into actionable insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU2NTE0MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Enterprise", "Data Viz", "B2B"],
    metrics: [
      { value: "3x", label: "Processing speed" },
      { value: "71%", label: "Task success" },
      { value: "9.2/10", label: "User satisfaction" }
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