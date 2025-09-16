import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import caregiverOnboardingImage from 'figma:asset/38f8c3031aabb83a7a87946b0e002a531a0957b6.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { 
  ArrowLeft, 
  ArrowRight, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle,
  Eye,
  Smartphone,
  TestTube,
  Code,
  Heart,
  ChevronLeft,
  Activity,
  BookOpen,
  Shield
} from 'lucide-react';

interface CaseStudyProps {
  projectId: number;
  onBackToPortfolio: () => void;
  onNextCaseStudy: () => void;
}

export function CaseStudy({ projectId, onBackToPortfolio, onNextCaseStudy }: CaseStudyProps) {
  const [activeSection, setActiveSection] = useState('hero');

  // Case study data based on project ID
  const getCaseStudyData = (id: number) => {
    if (id === 1) {
      // CHS Care Management case study
      return {
        title: "CHS Care Management",
        subtitle: "Smarter care coordination for children and seniors with complex needs",
        tags: ["Digital Health", "Remote Monitoringn", "Healthcare Technology", "Patient Engagement", "Real-time Data Sync", "Accessibility" ],
        client: "CHS",
        year: "2024",
        role: "Lead UX Designer & Project Manager",
        duration: "6 months",
        tools: ["Figma", "FigJam"],
        heroImage: caregiverOnboardingImage,
        
        // Project context
        context: "CHS needed to transform fragmented care coordination for vulnerable populations including foster children and Medicare seniors, addressing challenges with outdated data, poor adherence, and inaccessible education materials.",
        
        challenge: "How might we design a comprehensive care management platform that bridges communication gaps between patients, caregivers, and providers while ensuring accessibility for vulnerable populations?",
        
        // KPIs and North Star
        northStar: "Active adherence to care plan",
        kpis: [
          { category: "Patient Engagement", metrics: ["Daily task completion", "Care plan access", "Educational module usage"] },
          { category: "Provider Efficiency", metrics: ["Data sync speed", "Communication response time", "Workflow automation"] },
          { category: "Patient Education", metrics: ["Content comprehension", "Video completion rate", "Search success"] },
          { category: "Satisfaction & Retention", metrics: ["NPS score", "Platform usage", "Emergency response"] }
        ],
        
        // Research insights
        researchFindings: [
          { stat: "72%", insight: "of patients forget daily tasks without proper reminders" },
          { stat: "80%", insight: "of providers face delays with outdated patient data" },
          { stat: "65%", insight: "of caregivers struggle with complex care plan navigation" },
          { stat: "50%", insight: "of seniors need simplified interfaces for effective interaction" }
        ],
        
        // User personas
        personas: [
          {
            name: "María",
            role: "Senior Patient (78)",
            pain: "Struggles with technology, forgets medications, needs family support",
            image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBwZXJzb25hcyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU3MTcyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            name: "Laura",
            role: "Family Caregiver",
            pain: "Managing multiple care plans, coordinating with providers, tracking progress",
            image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBwZXJzb25hcyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU3MTcyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            name: "Dr. James",
            role: "Healthcare Provider",
            pain: "Accessing real-time patient data, coordinating care teams, managing caseload",
            image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBwZXJzb25hcyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU3MTcyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
        ],
        
        // Design process insights
        processInsights: [
          {
            phase: "Research & Discovery",
            insight: "Interviewed 24 participants across patient, caregiver, and provider groups to understand pain points",
            image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBwZXJzb25hcyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU3MTcyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            phase: "User Journey Mapping",
            insight: "Mapped María's daily routine before and after CHS implementation showing key friction points",
            image: "https://images.unsplash.com/photo-1618393678132-180ea320c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwam91cm5leSUyMG1hcHBpbmclMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NzE3MjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            phase: "Design & Prototyping",
            insight: "Used Eisenhower Matrix to prioritize features and created accessible, intuitive interfaces",
            image: "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWVzJTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTcxNzI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
        ],

        // Key features
        keyFeatures: [
          {
            title: "Smart Daily Reminders",
            description: "Intelligent task reminders with wearable device sync, ensuring patients never miss critical care activities.",
            icon: Activity
          },
          {
            title: "Unified Care Dashboard",
            description: "Real-time dashboard providing providers instant access to patient data, care plans, and progress tracking.",
            icon: Eye
          },
          {
            title: "Accessible Education Hub",
            description: "Searchable video library with simplified content designed for different literacy levels and accessibility needs.",
            icon: BookOpen
          }
        ],
        
        // Usability testing results
        testingResults: [
          {
            metric: "Task Completion Rate",
            before: "45%",
            after: "78%",
            improvement: "+73%"
          },
          {
            metric: "Error Rate",
            before: "45%",
            after: "25%",
            improvement: "-44%"
          },
          {
            metric: "User Satisfaction",
            before: "2.1/5",
            after: "3.8/5",
            improvement: "+81%"
          }
        ],

        // Before/After improvements
        improvements: [
          {
            area: "Caregiver Onboarding",
            before: "Caregivers felt the chatbot-driven onboarding was too long and repetitive",
            after: "A form that it's shorter and more direct",
            image: caregiverOnboardingImage
          },
          {
            area: "My Journal",
            before: "No dedicated space for patients to track their daily thoughts and progress",
            after: "Integrated journal feature with guided prompts and mood tracking",
            image: "https://images.unsplash.com/photo-1643747238990-b0bdbec5c263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBqb3VybmFsJTIwZGlhcnklMjB3cml0aW5nfGVufDF8fHx8MTc1NzU0MjU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            area: "Care Plan",
            before: "Difficult to find and understand care plan details",
            after: "Highlighted care plan section with visual progress tracking",
            image: "https://images.unsplash.com/photo-1722235623200-59966a71af50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2FyZSUyMHBsYW4lMjBtZWRpY2FsJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzUyNjIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
        ],
        
        // Final impact metrics
        impactMetrics: [
          { label: "Daily Task Adherence", value: "+35%", color: "text-green-600" },
          { label: "Care Plan Access", value: "90%", color: "text-blue-600" },
          { label: "Caregiver Time Savings", value: "-25%", color: "text-purple-600" },
          { label: "Educational Engagement", value: "3x", color: "text-orange-600" },
          { label: "Communication Speed", value: "+40%", color: "text-cyan-600" },
          { label: "ER Visit Reduction", value: "-15%", color: "text-green-600" },
          { label: "NPS Improvement", value: "+20", color: "text-blue-600" }
        ],
        
        // Final UI screens
        finalScreens: [
          {
            title: "Daily Journal & Tasks",
            description: "Simplified interface for tracking daily activities with visual progress indicators and reminders",
            image: "https://images.unsplash.com/photo-1620856902651-ce18d6d31d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2FyZSUyMHNlbmlvcnMlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU3MTcyNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Care Plan Overview",
            description: "Accessible care plan display with clear progress tracking, next steps, and provider contact",
            image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTcxNzI3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Education Library",
            description: "Video-first educational content with search functionality, categories, and accessibility features",
            image: "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWVzJTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTcxNzI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Provider Dashboard",
            description: "Real-time patient monitoring dashboard with communication tools and care coordination features",
            image: "https://images.unsplash.com/photo-1623915695133-d624f7759fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2FiaWxpdHklMjB0ZXN0aW5nJTIwaGVhbHRoY2FyZSUyMGFwcHxlbnwxfHx8fDE3NTcxNzI4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
        ]
      };
    }
    
    // Default to logistics case study for other IDs
    return {
      title: "INMEDIATUM Lastmile",
      subtitle: "Reducing delivery time by 67% through intelligent route planning",
      tags: ["Logistics Technologies", "B2B SaaS", "Route optimization", "Data Visualization", "Delivery tech"],
      client: "Inmediatum Lastmile",
      year: "2024",
      role: "Senior Product Designer",
      duration: "6 months",
      heroImage: "https://images.unsplash.com/photo-1681514583222-0579e6835666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NTcxMDQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      
      // Project context
      context: "Inmediatum Lastmile needed to transform their manual route planning process that was taking hours daily and causing significant delivery delays across their network of enterprise clients.",
      
      challenge: "How might we design an intelligent platform that reduces route optimization complexity while providing enterprise-grade analytics and real-time tracking capabilities?",
      
      // Design process insights
      processInsights: [
        {
          phase: "Research",
          insight: "Delivery managers were spending 3+ hours daily on manual route optimization",
          image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwODAxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          phase: "Define",
          insight: "89% of delivery delays were caused by inefficient routing and lack of real-time visibility",
          image: "https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWVzfGVufDF8fHx8MTc1NzAzODg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          phase: "Design",
          insight: "AI-powered optimization reduced planning time from hours to minutes",
          image: "https://images.unsplash.com/photo-1690369519543-c81a2121f740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB1aSUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3NTcxMDQ1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ],

      // Key features
      keyFeatures: [
        {
          title: "One-click Route Optimization",
          description: "AI-powered algorithm that generates optimal routes in seconds, considering traffic, delivery windows, and vehicle capacity.",
          icon: Target
        },
        {
          title: "Real-time Tracking Dashboard",
          description: "Live monitoring of all deliveries with predictive alerts for potential delays and automatic rerouting suggestions.",
          icon: Eye
        },
        {
          title: "Mobile Driver Companion",
          description: "Intuitive mobile app providing turn-by-turn navigation, delivery confirmations, and instant communication with dispatch.",
          icon: Smartphone
        }
      ],
      
      // Usability testing results
      testingResults: [
        {
          metric: "Task Completion Rate",
          before: "52%",
          after: "94%",
          improvement: "+81%"
        },
        {
          metric: "Time to Optimize Routes",
          before: "3.2 hours",
          after: "8 minutes",
          improvement: "-96%"
        },
        {
          metric: "User Satisfaction Score",
          before: "6.1/10",
          after: "9.3/10",
          improvement: "+53%"
        }
      ],
      
      // Final impact metrics
      impactMetrics: [
        { label: "Delivery Time Reduction", value: "67%", color: "text-primary" },
        { label: "Cost Savings", value: "$2.4M", color: "text-green-600" },
        { label: "Route Efficiency", value: "89%", color: "text-blue-600" },
        { label: "Customer Satisfaction", value: "4.9★", color: "text-yellow-600" }
      ],
      
      // Final UI screens
      finalScreens: [
        {
          title: "Dashboard Overview",
          description: "Command center showing real-time delivery status and key performance metrics",
          image: "https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW5zfGVufDF8fHx8MTc1Njk5MDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Route Optimization",
          description: "AI-powered route planning with visual map interface and drag-and-drop functionality",
          image: "https://images.unsplash.com/photo-1681514583222-0579e6835666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NTcxMDQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Mobile Driver App",
          description: "Clean, focused mobile interface for drivers with turn-by-turn navigation",
          image: "https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWVzfGVufDF8fHx8MTc1NzAzODg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Analytics Dashboard",
          description: "Comprehensive performance analytics with actionable insights and predictive recommendations",
          image: "https://images.unsplash.com/photo-1690369519543-c81a2121f740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB1aSUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3NTcxMDQ1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ]
    };
  };

  const caseStudyData = getCaseStudyData(projectId);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        const id = element.getAttribute('data-section') || '';
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">Portfolio</span>
          </button>
          
          <div className="flex items-center gap-8">
            <span className="text-sm text-gray-500">{caseStudyData.client}</span>
            <span className="text-sm text-gray-500">{caseStudyData.year}</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section data-section="hero" className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-none tracking-tight">
              {caseStudyData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              {caseStudyData.subtitle}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {caseStudyData.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <ImageWithFallback
              src={caseStudyData.heroImage}
              alt={caseStudyData.title}
              className="w-full h-[60vh] md:h-[80vh] object-cover"
            />
            <div className="absolute inset-0 "></div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                {projectId === 1 ? "The Challenge" : "The Challenge"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                {caseStudyData.challenge}
              </p>
              
              {projectId === 1 && caseStudyData.northStar && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-black mb-2">North Star Metric</h3>
                  <p className="text-gray-600 font-medium">{caseStudyData.northStar}</p>
                </div>
              )}
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Role</div>
                <div className="text-lg text-black font-medium">{caseStudyData.role}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Duration</div>
                <div className="text-lg text-black font-medium">{caseStudyData.duration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Client</div>
                <div className="text-lg text-black font-medium">{caseStudyData.client}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Year</div>
                <div className="text-lg text-black font-medium">{caseStudyData.year}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Discovery (CHS specific) */}
      {projectId === 1 && caseStudyData.researchFindings && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Research & Discovery
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8">
                We started by listening to those most affected—patients, caregivers, and providers. Our goal was to uncover what truly gets in the way of adherence and engagement.
              </p>
              <div className="inline-flex items-center gap-6 bg-gray-50 rounded-2xl px-8 py-4">
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Methods</div>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">Interviews</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">Shadowing</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">Surveys</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">Artifact Review</span>
                </div>
              </div>
            </motion.div>

            {/* Key Insights */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-black mb-12 text-center">Key Insights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-red-500 mb-4">72%</div>
                  <p className="text-gray-600 leading-relaxed">of patients forget daily health tasks</p>
                </motion.div>
                
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-orange-500 mb-4">80%</div>
                  <p className="text-gray-600 leading-relaxed">of providers face data delays</p>
                </motion.div>
                
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-blue-500 mb-4">50%</div>
                  <p className="text-gray-600 leading-relaxed">of seniors need simplified interfaces (large text, audio)</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Pain Points */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-12 text-center">Critical Pain Points</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Activity size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-3">Outdated Patient Data</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Real-time patient information is not accessible, creating gaps in care coordination</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <BookOpen size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-3">Care plans difficult to follow</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Complex care plans lack visual clarity and step-by-step guidance for patients</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-3">Communication gaps</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Fragmented communication between patients, caregivers, and healthcare providers</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Discovery Outcomes */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-8 text-center">Outcomes of Discovery Phase</h3>
                <p className="text-center text-gray-600 mb-12 text-lg">Defined top 3 hypotheses for prototyping:</p>
                <div className="space-y-6">
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex items-start gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">Provider Efficiency</h4>
                      <p className="text-gray-600 leading-relaxed">Real-time data syncing improves provider efficiency and reduces manual data entry.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex items-start gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Heart size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">Patient Adherence</h4>
                      <p className="text-gray-600 leading-relaxed">Personalized reminders increase adherence by 25% through timely, relevant notifications.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex items-start gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { duration: 0.3 } }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">Educational Content</h4>
                      <p className="text-gray-600 leading-relaxed">Simplified educational content improves comprehension and engagement for all age groups.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Personas */}
            {caseStudyData.personas && (
              <div>
                <h3 className="text-2xl font-bold text-black mb-12 text-center">Key Personas</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {caseStudyData.personas.map((persona, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={persona.image}
                          alt={persona.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-black mb-2">{persona.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{persona.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{persona.pain}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* User Journey (CHS specific) */}
      {projectId === 1 && (
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                User Journey Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Following María's daily routine, we mapped her experience before and after CHS implementation, identifying key friction points and improvement opportunities.
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618393678132-180ea320c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwam91cm5leSUyMG1hcHBpbmclMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NzE3MjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User journey mapping"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Design Process */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {projectId === 1 
                ? "The Path from What If? to What Works: Empathizing, Defining, and Iterating Our Way to the Right Design."
                : "A systematic approach to understanding user needs and creating solutions that deliver measurable impact."
              }
            </p>
          </motion.div>

          <div className="space-y-32">
            {caseStudyData.processInsights.map((insight, index) => (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">
                    {insight.phase}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                    {insight.insight}
                  </h3>
                </div>
                
                <motion.div 
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 1 ? 'md:col-start-1' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={insight.image}
                    alt={`${insight.phase} phase`}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {projectId === 1 
                ? "Intelligent solutions designed to bridge communication gaps and ensure accessible care coordination."
                : "Intelligent solutions designed to transform logistics operations from reactive to proactive."
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {caseStudyData.keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Usability Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {projectId === 1 
                ? "Testing with 8 participants across seniors, caregivers, and providers revealed critical usability improvements needed."
                : "Validation through rigorous user testing showed significant improvements across all key metrics."
              }
            </p>
          </motion.div>

          {projectId === 1 && (
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-black mb-4">Testing Setup</h3>
              <p className="text-gray-600 mb-4">
                <strong>Participants:</strong> 8 total (seniors, caregivers, providers)
              </p>
              <p className="text-gray-600">
                <strong>Tasks tested:</strong> Onboarding, journal tasks, care plan access, education, communication, emergency response, medication management
              </p>
            </motion.div>
          )}

          <div className="space-y-12">
            {caseStudyData.testingResults.map((result, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-4 gap-8 items-center py-8 border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium text-black">
                    {result.metric}
                  </h3>
                </div>
                
                <div className="md:col-span-1 text-center">
                  <div className="text-sm text-gray-500 mb-1">Before</div>
                  <div className="text-2xl font-bold text-gray-400">
                    {result.before}
                  </div>
                </div>
                
                <div className="md:col-span-1 text-center">
                  <div className="text-sm text-gray-500 mb-1">After</div>
                  <div className="text-2xl font-bold text-black">
                    {result.after}
                  </div>
                </div>
                
                <div className="md:col-span-1 text-center">
                  <div className="text-sm text-gray-500 mb-1">Improvement</div>
                  <div className="text-2xl font-bold text-green-600">
                    {result.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Revisions (CHS specific) */}
      {projectId === 1 && caseStudyData.improvements && (
        <section className="py-32 px-6 bg-[rgba(255,255,255,1)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Design Improvements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Based on usability testing feedback, we made significant improvements across all key interaction areas.
              </p>
            </motion.div>

            <Carousel className="w-full">
              <CarouselContent className="-ml-6">
                {caseStudyData.improvements.map((improvement, index) => (
                  <CarouselItem key={index} className="pl-6">
                    <motion.div
                      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Header */}
                      <div className="p-8 pb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <h3 className="text-2xl font-bold text-black">{improvement.area}</h3>
                          </div>
                          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-sm font-medium">Improved</span>
                          </div>
                        </div>
                      </div>

                      {/* Image - Full width */}
                      <div className="mb-8">
                        <ImageWithFallback
                          src={improvement.image}
                          alt={`${improvement.area} improvement`}
                          className="w-full h-screen object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="px-8 pb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                              <div className="text-sm text-red-600 font-bold uppercase tracking-wide">Before</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed pl-7">{improvement.before}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                              <div className="text-sm text-green-600 font-bold uppercase tracking-wide">After</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed pl-7">{improvement.after}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section>
      )}

      {/* Final UI Carousel */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Final Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {projectId === 1 
                ? "A comprehensive care management platform that empowers patients, caregivers, and providers with accessible tools and real-time coordination."
                : "A comprehensive platform that transforms complex logistics operations into intuitive, efficient workflows."
              }
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {caseStudyData.finalScreens.map((screen, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center">
                      <motion.div 
                        className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ImageWithFallback
                          src={screen.image}
                          alt={screen.title}
                          className="w-full h-[500px] md:h-[600px] object-cover"
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {screen.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {screen.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white" />
              <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Impact & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {projectId === 1 
                ? "CHS Care Management delivered significant improvements in patient outcomes, provider efficiency, and overall care coordination."
                : "Measurable improvements that transformed logistics operations and delivered significant business value."
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudyData.impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-5xl md:text-6xl font-bold mb-4 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-600 text-lg">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Reflection
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-12">
              {projectId === 1 
                ? "This project reinforced the critical importance of accessibility in healthcare design. Working with vulnerable populations taught me that inclusive design isn't just good practice—it's essential for ensuring equitable access to care. The success came from deeply understanding user needs and prioritizing simplicity without sacrificing functionality."
                : "This project reinforced the importance of deep user research in B2B environments. Complex enterprise workflows require careful balance between powerful functionality and intuitive design. The success came from focusing on the user's primary goal: getting their job done efficiently."
              }
            </p>
            
            <button
              onClick={onNextCaseStudy}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View Next Case Study
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}