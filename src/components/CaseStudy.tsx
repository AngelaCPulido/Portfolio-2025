import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import caregiverOnboardingImage from "figma:asset/38f8c3031aabb83a7a87946b0e002a531a0957b6.png";
import chscoverImage from "figma:asset/chs.png";
import mariaImage from "figma:asset/maria.png";
import lauraImage from "figma:asset/laura.png";
import jamesImage from "figma:asset/james.png";
import userjourneychs from "figma:asset/user-journey-chs.png";
import empathychs1 from "figma:asset/Empathy-map-maria.png";
import empathychs2 from "figma:asset/Empathy-map-laura.png";
import sitemapchs from "figma:asset/sitemap.png";
import ematrixchs from "figma:asset/eisenhower-matrix-chs.png";
import focuschs from "figma:asset/focus-areas-chs.png";
import collagechs from "figma:asset/Collage-CHS.png";
import onboardingchs from "figma:asset/Onboarding-before-after.png";
import myjournalchs from "figma:asset/MyJournal-before-after.png";
import profilechs from "figma:asset/Profile-before-after.png";
import assessmentchs from "figma:asset/Assessment.png";
import assistancechs from "figma:asset/Assistance.png";
import educationchs from "figma:asset/Education.png";
import medicationchs from "figma:asset/Medications.png";
import myjournal2chs from "figma:asset/My-Journal.png";
import myhealthchs from "figma:asset/MyHealth-1.png";
import myhealth2chs from "figma:asset/MyHealth.png";
import notebookchs from "figma:asset/Notebook.png";
import onboarding2chs from "figma:asset/Onboarding.png";
import profile2chs from "figma:asset/Profile.png";
import recordchs from "figma:asset/Record.png";

//lastmile
import herolastmile from "figma:asset/lastmile-hero.png";
import onboardinglastmile from "figma:asset/Onboarding-lastmile.png";
import personalastmile from "figma:asset/persona-lastmile.png";
import insideslastmile from "figma:asset/Insides-lastmile.png";
import ematrixlastmile from "figma:asset/Eisenhower-Matrix-lastmile.png";
import competitionlastmile from "figma:asset/competition-lastmile.png";
import interviewslastmile from "figma:asset/Interviews-lastmile.png";
import wireframeslastmile from "figma:asset/wireframes-lastmile.png";
import guideslastmile from "figma:asset/guias-b-a-lastmile.png";
import maplastmile from "figma:asset/map-b-a-lastmile.png";
import routelastmile from "figma:asset/route-lastmile.png";
import map2lastmile from "figma:asset/map-lastmile.png";
import savinglastmile from "figma:asset/Saving-lastmile.png";
import Routeviewlastmile from "figma:asset/Routeview-lastmile.png";

//juntos
import juntoscoverImage from "figma:asset/juntos-cover-1.png";
import juntosuserjourneyImage from "figma:asset/User-journey-juntos.png";
import mariajuntos from "figma:asset/maria-juntos.png";
import carlosjuntos from "figma:asset/carlos-juntos.png";
import anajuntos from "figma:asset/Ana-juntos.png";
import empathyjuntos from "figma:asset/empathymap-juntos.png";
import ematrixjuntos from "figma:asset/Eisenhowermatrix-juntos.png";
import wireframesjuntos from "figma:asset/wireframes-juntos.png";
import designjuntos from "figma:asset/design-system-juntos.png";
import usabilityjuntos from "figma:asset/usability-test-juntos.png";
import modifiersjuntos from "figma:asset/juntos-modifiers.png";
import prefillingjuntos from "figma:asset/juntos-pre-filling.png";
import productojuntos from "figma:asset/juntos-producto.png";
import adicionesjuntos from "figma:asset/juntos-adiciones.png";
import prototypejuntos from "figma:asset/juntos-prototipo.mp4";
import cartajuntos from "figma:asset/juntos-carta.png";
import sucursaljuntos from "figma:asset/juntos-sucursal.png";
import toppinsjuntos from "figma:asset/juntos-adiciones-toppins.png";
import ordenesjuntos from "figma:asset/juntos-ordenes.png";

//red de salud
import redcover from "figma:asset/cover-red-salud.png";
import redMaria from "figma:asset/Red-Maria.png";
import redAndres from "figma:asset/Red-Andres.png";
import redLaura from "figma:asset/Red-Laura.png";
import redUserJoureyLaura from "figma:asset/user-journey-laura-red-salud.png";
import redUserJoureyMiguel from "figma:asset/user-journey-Miguel-red-salud.png";
import redUserJoureyAndrea from "figma:asset/user-journey-Andrea-red-salud.png";
import redEmatrix from "figma:asset/Red-Eisenhower-matrix.png";
import reddesignsystem from "figma:asset/Red-design-system.png";
import redResearch from "figma:asset/Red-research.png";
import redCallingBA from "figma:asset/Red-Calling-before-after.png";
import redKCalBA from "figma:asset/Red-KCal-total-before-after.png";
import redNutritionBA from "figma:asset/Red-Nutrition-before-after.png";
import redPrescriptionBA from "figma:asset/Red-Prescription-before-After.png";
import redTaskBA from "figma:asset/Red-Task-before-After.png";
import redCall from "figma:asset/Red-Call.png";
import redDasboard from "figma:asset/Red-Dashboard.png";
import redIndicadores from "figma:asset/Red-Indicadores.png";
import redAgenda from "figma:asset/Red-Agenda.png";
import redConsulta from "figma:asset/Red-Consulta-general.png";
import redNutricion from "figma:asset/Red-Nutricion.png";
import redConsultaEnviar from "figma:asset/Red-Consulta-general-enviar.png";
import redHistoria from "figma:asset/Red-Historia-clinica.png";
import redModulos from "figma:asset/Red-Modulos.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
  Shield,
  Speech,
  NotebookPen,
  MessageSquareX,
  Route,
  FileUp,
  Gauge,
  Settings,
  HandCoins,
  CircleX,
  HandPlatter,
  Pizza,
  Group,
  RefreshCwOff,
  ClipboardPlus,
  FolderSync,
  MessageCircle,
  CalendarSync, 
  FileSliders,
} from "lucide-react";

interface CaseStudyProps {
  projectId: number;
  onBackToPortfolio: () => void;
  onNextCaseStudy: () => void;
}

export function CaseStudy({
  projectId,
  onBackToPortfolio,
  onNextCaseStudy,
}: CaseStudyProps) {
  const [activeSection, setActiveSection] = useState("hero");

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
        heroImage: chscoverImage,
        
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
        researchsubtitle: "We started by listening to those most affected—patients, caregivers, and providers. Our goal was to uncover what truly gets in the way of adherence and engagement.",
        
        researchtags: [
          "Interviews",
          "Shadowing",
          "Surveys",
          "Artifact Review",
        ],

        researchFindings: [
            { 
              number: "72%",
              subtitle: "of patients forget daily tasks without proper reminders",
            },
            {
              number: "80%",
              subtitle: "of providers face delays with outdated patient data",
            },
            {
              number: "65%",
              subtitle: "of caregivers struggle with complex care plan navigation",
            },
        ],

        keyInsights: [
          { 
            title: "72%",
            description: "of patients forget daily tasks without proper reminders",
          },
          {
            title: "80%",
            description: "of providers face delays with outdated patient data",
          },
          {
            title: "65%",
            description: "of caregivers struggle with complex care plan navigation",
          },
        ],

        // Pain points

        painPoints: [
          {
            title: "Outdated Patient Data",
            description:
              "Real-time patient information is not accessible, creating gaps in care coordination",
            icon: Activity,
          },
          {
            title: "Care plans difficult to follow",
            description:
              "Complex care plans lack visual clarity and step-by-step guidance for patients.",
            icon: BookOpen,
          },
          {
            title: "Communication gaps",
            description:
              "Fragmented communication between patients, caregivers, and healthcare providers.",
            icon: Speech,
          },
        ],


        // Discovery Outcomes
        discoveryOutcomes: [
          {
            title: "Provider Efficiency",
            description: "Real-time data syncing improves provider efficiency and reduces manual data entry.",
            icon: Activity,
          },
          {
            title: "Patient Adherence",
            description: "Personalized reminders increase adherence by 25% through timely, relevant notifications.",
            icon: Heart,
          },
          {
            title: "Educational Content",
            description: "Simplified educational content improves comprehension and engagement for all age groups.",
            icon: BookOpen,
          },
        ],
        
        // User personas
        personas: [
          {
            name: "María",
            role: "Senior Patient (78)",
            pain: "Struggles with technology, forgets medications, needs family support",
            image: mariaImage
          },
          {
            name: "Laura",
            role: "Family Caregiver",
            pain: "Managing multiple care plans, coordinating with providers, tracking progress",
            image: lauraImage
          },
          {
            name: "Dr. James",
            role: "Healthcare Provider",
            pain: "Accessing real-time patient data, coordinating care teams, managing caseload",
            image: jamesImage
          }
        ],
        
        // User journey & empathy map
        
        UnderstandingUser: "Empathy maps, journeys, and structures that reveal needs, emotions, and behaviors",

        userjourney: [
          {
            title: "Empathy map María",
            description: "Empathy maps uncovering María’s needs, emotions, and behaviors",
            image: empathychs1
          },
          {
            title: "Empathy Map Laura",
            description: "Empathy maps uncovering Laura’s needs, emotions, and behaviors",
            image: empathychs2
          },
          {
            title: "User Journey Transformation",
            description: "Following María's daily routine, we mapped her experience before and after CHS implementation, identifying key friction points and improvement opportunities.",
            image: userjourneychs
          },
          {
            title: "Designing Clarity",
            description: "An intuitive structure that organizes content and simplifies navigation",
            image: sitemapchs
          }
        ],

        // Design process insights
        processInsights: [
          {
            phase: "Research & Discovery",
            insight: "Interviewed 24 participants across patient, caregiver, and provider groups to understand pain points",
            image: focuschs
          },
          {
            phase: "Prioritizing ",
            insight: "Used Eisenhower Matrix to prioritize features and created accessible, intuitive interfaces",
            image: ematrixchs
          },
          {
            phase: "UI & Accessibility",
            insight: "Built a custom design system compliant with WCAG standards (screen reader compatibility, alt text, scalable fonts).",
            image: collagechs
          }
        ],

        // Key features
        keyfeaturestitle: "Intelligent solutions designed to bridge communication gaps and ensure accessible care coordination.",

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
        
        testingSetUp: [
          {
            participants: "8 total (seniors, caregivers, providers)",
            task: "Onboarding, journal tasks, care plan access, education, communication, emergency response, medication management"
          }
        ],

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

        testingResults2: [
        ],

        // Before/After improvements
        improvements: [
          {
            area: "Caregiver Onboarding",
            before: "Caregivers felt the chatbot-driven onboarding was too long and repetitive",
            after: "A form that it's shorter and more direct",
            image: onboardingchs
          },
          {
            area: "My Journal",
            before: "Confusion about total number of tasks for the day. No clear way to identify overdue tasks.",
            after: "Add task counter, Agenda View & Today View, overdue indicators.",
            image: myjournalchs
          },
          {
            area: "Care Plan",
            before: "Difficult to find and understand care plan details",
            after: "Highlighted care plan section at the top",
            image: profilechs
          }
        ],
        
        // Final impact metrics
        ImpactResults: "CHS Care Management delivered significant improvements in patient outcomes, provider efficiency, and overall care coordination.",

        impactMetrics: [
          { label: "Daily Task Adherence", value: "+35%", color: "text-green-600" },
          { label: "Care Plan Access", value: "90%", color: "text-blue-600" },
          { label: "Caregiver Time Savings", value: "-25%", color: "text-purple-600" },
          { label: "Educational Engagement", value: "3x", color: "text-orange-600" },
          { label: "Communication Speed", value: "+40%", color: "text-cyan-600" },
          { label: "ER Visit Reduction", value: "-15%", color: "text-green-600" },
          { label: "NPS Improvement", value: "+20", color: "text-blue-600" }
        ],
        
        //Reflection
        
        Reflection: "This project reinforced the critical importance of accessibility in healthcare design. Working with vulnerable populations taught me that inclusive design isn't just good practice—it's essential for ensuring equitable access to care. The success came from deeply understanding user needs and prioritizing simplicity without sacrificing functionality.",

        // Final UI screens

        finalUI: "A comprehensive care management platform that empowers patients, caregivers, and providers with accessible tools and real-time coordination.",
                
        finalScreens: [
          {
            title: "Onboarding",
            description: "Allows patients to set up accessibility preferences and choose their preferred language.",
            image: onboarding2chs
          },
          {
            title: "My Journal",
            description: "Personal journal with task counter, agenda and today’s view, overdue alerts, plus quick access to education resources.",
            image: myjournal2chs
          }, 
          {
            title: "Assessment",
            description: "A quick daily check-in with mood tracking and PHQ-2/9, helping the care team stay updated on the patient’s mental health.",
            image: assessmentchs
          },
          {
            title: "Education",
            description: "Organized learning programs with lessons and homework that help patients understand their condition and keep nurses informed.",
            image: educationchs
          },
          {
            title: "Notebook",
            description: "Easy-to-use space for jotting down notes about education programs or personal health observations.",
            image: notebookchs
          },          
          {
            title: "Medications",
            description: "Smart medication reminders with iOS and Android notifications to help patients stay on track with treatments.",
            image: medicationchs
          },
          {
            title: "My health",
            description: "An overview of health data with charts and historical records, giving patients insights into their progress over time.",
            image: myhealthchs
          },
          {
            title: "Record your vitals",
            description: "Simple way to log blood pressure, either automatically from a device or manually by entering the data.",
            image: recordchs
          },
          {
            title: "Assistance",
            description: "A support hub where patients can chat or call their care team and easily find nearby providers.",
            image: assistancechs
          },
          {
            title: "Profile",
            description: "A profile view with an accessible care plan display with clear next steps, and provider contact",
            image: profile2chs
          },                                                                               
        ]

      };
    }
    
    // Lastmile
    if (id === 2) {
      return {
      title: "INMEDIATUM Lastmile",
      subtitle: "Reducing delivery time by 67% through intelligent route planning",
      tags: ["Logistics Technologies", "B2B SaaS", "Route optimization", "Data Visualization", "Delivery tech"],
      client: "Inmediatum Lastmile",
      year: "2024",
      role: "Senior Product Designer",
      duration: "6 months",
      heroImage: herolastmile,
      
      // Project context
      context: "Inmediatum Lastmile needed to transform their manual route planning process that was taking hours daily and causing significant delivery delays across their network of enterprise clients.",
      
      challenge: "How might we design an intelligent platform that reduces route optimization complexity while providing enterprise-grade analytics and real-time tracking capabilities?",
      
      // KPIs and North Star
      northStar: "Average time to a successful delivery",
      kpis: [
        { category: "Patient Engagement", metrics: ["Daily task completion", "Care plan access", "Educational module usage"] },
        { category: "Provider Efficiency", metrics: ["Data sync speed", "Communication response time", "Workflow automation"] },
        { category: "Patient Education", metrics: ["Content comprehension", "Video completion rate", "Search success"] },
        { category: "Satisfaction & Retention", metrics: ["NPS score", "Platform usage", "Emergency response"] }
      ],

      // Research insights
      researchsubtitle: "The project began with stakeholder onboarding and exploratory calls to align on business goals, user pain points, and feature requirements.",

      researchtags: [
        "Interviews",
        "Shadowing",
        "Competitor Analysis",
      ], 


      researchFindings: [
          { 
            number: "60%",
            subtitle: "of small businesses relied on Excel-based logistics, necessitating seamless data import.",
          },
          {
            number: "80%",
            subtitle: "of Operator struggle handling changes (e.g., traffic, breakdowns, cancellations).",
          },
          {
            number: "65%",
            subtitle: "Operators had communication gaps with Drivers & clients",
          },
      ],

      keyInsights: [
          { 
            title: "60%",
            description: "of small businesses relied on Excel-based logistics, necessitating seamless data import.",
          },
          {
            title: "80%",
            description: "of Operators struggle handling changes (e.g., traffic, breakdowns, cancellations).",
          },
          {
            title: "65%",
            description: "of Operators had communication gaps with Drivers & clients",
          },
      ],
        
      // Pain points

        painPoints: [
          {
            title: "Manual data entry",
            description:
              "Manual data entry leads to frequent errors and customer complaints",
            icon: NotebookPen,
          },
          {
            title: "Communication Gaps",
            description:
              "Communication with drivers relies on phone calls and text messages",
            icon: MessageSquareX,
          },
          {
            title: "Route Optimization",
            description:
              "Difficulty balancing delivery windows, driver capacity, and cost optimization",
            icon: Target,
          },
        ],

      // Design process insights
      processInsights: [
        {
          phase: "Research",
          insight: "Delivery managers were spending 3+ hours daily on manual route optimization",
          image: interviewslastmile,
        },
        {
          phase: "Competitive research",
          insight: "Learning form the competition",
          image: competitionlastmile,
        },
        {
          phase: "Prioritizing",
          insight: "Eisenhower Matrix: prioritizing route planner & Real-Time Tracking & Dynamic",
          image: ematrixlastmile,
        },
        {
          phase: "Wirefriming",
          insight: "Using research findings, I created low-fidelity wireframes to map critical user flows (e.g., route planning, proof-of-delivery).",
          image: wireframeslastmile,
        }
      ],

      // User journey & empathy map
        
        UnderstandingUser: "Building empathy and uncovering insights to guide our design decisions.",

        userjourney: [
          {
            title: "Sarah Martinez",
            description: "Spends 2+ hours daily creating routes manually using Excel and maps",
            image: personalastmile
          },
          {
            title: "Defining the project’s foundation: goals, scope, and key elements",
            description: "Laying the groundwork for Lastmile with clear goals, audience, and priorities.",
            image: onboardinglastmile
          },
          {
            title: "Insides & Findings",
            description: "Synthesizing our findings through an affinity diagram to uncover key user needs",
            image: insideslastmile
          },
        ],

      // Key features lastmile
      
      keyfeaturestitle: "Intelligent solutions designed to transform logistics operations from reactive to proactive.",

      keyFeatures: [
        {
          title: "Automatic Route planner",
          description: "AI-powered algorithm that generates optimal routes in seconds, considering traffic, delivery windows, and vehicle capacity.",
          icon: Route
        },
        {
          title: "Real-time Tracking Dashboard",
          description: "Live monitoring of all deliveries with predictive alerts for potential delays.",
          icon: Gauge
        },
        {
          title: "Streamlining Delivery Imports",
          description: "Enabled users to easily upload their delivery lists from Excel through a predefined, customizable template—making the process faster and more intuitive.",
          icon: FileUp
        }
      ],
      
      // Usability testing results

      testingSetUp: [
        {
          participants: " 4 total (Operators)",
          task: " Select vehicles, Add visits, Import visits and Add route details"
        }
      ],

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

      testingResults2: [
      ],
      
      // Final impact metrics

      ImpactResults: "Measurable improvements that transformed logistics operations and delivered significant business value.",

      impactMetrics: [
        { label: "Delivery Time Reduction", value: "67%", color: "text-primary" },
        { label: "Cost Savings", value: "$2.4M", color: "text-green-600" },
        { label: "Route Efficiency", value: "89%", color: "text-blue-600" },
        { label: "Customer Satisfaction", value: "4.9★", color: "text-yellow-600" }
      ],
      
    // Before/After improvements
      improvements: [
        {
          area: "Collaborative route creation board",
          before: "Route creation was split into three screens with a small, It lacked collaboration features, leading to errors during simultaneous route creation.",
          after: "A collaborative Kanban-style board with an integrated map. This innovation allowed multiple users to create several routes simultaneously, drastically improving efficiency.",
          image: guideslastmile
        },
        {
          area: "Dynamic, Full-Screen Map",
          before: "The map was small and displayed only the created route. Users couldn’t see all routes at once, and fixing an incorrect stop required going back to a previous screen.",
          after: "The new full-screen map updates in real time with every route change. It displays all routes simultaneously, distinguished by color codes and numbered stops for easier navigation and error correction.",
          image: maplastmile
        }
      ],



      // Final UI screens lastmile
      
      finalUI: "A comprehensive platform that transforms complex logistics operations into intuitive, efficient workflows.",

      finalScreens: [
        {
          title: "Route Optimizer",
          description: "Collaborative route planning for efficient last-mile deliveries. Drag-and-drop functionality",
          image: routelastmile
        },
        {
          title: "Route Optimizer: Map view",
          description: "Full-screen map updates in real time with every route, distinguished by color codes and numbered stops for easier navigation and error correction.",
          image: map2lastmile
        },
        {
          title: "Saving a Route instantly adds It to the Routes Panel",
          description: "Once you save the  new route, it will move to the Routes panel",
          image: savinglastmile
        },
        {
          title: "Routes Panel",
          description: "Real time tracking, integrated with communication tools",
          image: savinglastmile
        }
      ],

      //Reflection
      
      Reflection: "This project reinforced the importance of deep user research in B2B environments. Complex enterprise workflows require careful balance between powerful functionality and intuitive design. The success came from focusing on the user's primary goal: getting their job done efficiently."

      };
    }
    
    // Juntos
    if (id === 3) {
      // Juntos case study
      return {
        title: "+Juntos: Empowering Local Restaurants",
        subtitle: "From Customer Feedback to Seamless Menu Creation: A Journey to Digital Independence",
        tags: ["Restaurant Tech", "Menu Design", "Small Business", "Online Orders", "Digital Transformation" ],
        client: "+ Juntos",
        year: "2022",
        role: "UX Designer",
        duration: "1 Year",
        tools: ["Figma", "FigJam"],
        heroImage: juntoscoverImage,
        
        // Project context
        context: "CHS needed to transform fragmented care coordination for vulnerable populations including foster children and Medicare seniors, addressing challenges with outdated data, poor adherence, and inaccessible education materials.",
        
        challenge: "Design the menu creation flow for the Juntos Negocios app for restaurants, allowing the inclusion of customizable categories and paid additions in an intuitive and efficient way, addressing the main complaints identified in recent Play Store user feedback.",
        
        // KPIs and North Star
        northStar: "Active Menus Created per Business per Month",
        kpis: [
          { category: "Patient Engagement", metrics: ["Daily task completion", "Care plan access", "Educational module usage"] },
          { category: "Provider Efficiency", metrics: ["Data sync speed", "Communication response time", "Workflow automation"] },
          { category: "Patient Education", metrics: ["Content comprehension", "Video completion rate", "Search success"] },
          { category: "Satisfaction & Retention", metrics: ["NPS score", "Platform usage", "Emergency response"] }
        ],
        
        // Research insights
        researchsubtitle: "Uncovering pain points and best practices to shape a seamless menu creation experience.",

        researchtags: [
          "Interviews",
          "Shadowing",
          "Competitor Analysis",
        ],
        
        researchFindings: [
            { 
              number: "72%",
              subtitle: "of restaurant owners value speed and clarity over complex customization when creating menus.",
            },
            {
              number: "64%",
              subtitle: "confirmed that paid add-ons (extras like cheese, sauces, etc.) are one of their biggest revenue drivers, yet most tools make them hidden or difficult to manage.",
            },
            {
              number: "65%",
              subtitle: "of caregivers struggle with complex care plan navigation",
            },
        ],
        keyInsights: [
          { 
            title: "72%",
            description: "of restaurant owners value speed and clarity over complex customization when creating menus.",
          },
          {
            title: "64%",
            description: "confirmed that paid add-ons (extras like cheese, sauces, etc.) are one of their biggest revenue drivers, yet most tools make them hidden or difficult to manage.",
          },
          {
            title: "58%",
            description: " mentioned that too many steps or unclear flows lead to abandoned setups.",
          },
        ],
        
        // Pain points

        painPoints: [
          {
            title: "Overcomplicated Menu Setup",
            description:
              "Too many steps slow down the process of adding or grouping dishes, creating frustration and drop-offs.",
            icon: Settings,
          },
          {
            title: "Hidden Revenue Opportunities",
            description:
              "Confusing flows make it difficult to set up and manage paid extras, limiting one of the biggest sources of restaurant income.",
            icon: HandCoins,
          },
          {
            title: "Fear of Costly Mistakes",
            description:
              "Restaurant owners worry about errors going live instantly, causing stress and lack of confidence when updating menus.",
            icon: CircleX,
          },
        ],

        // User personas
        personas: [
          {
            name: "María López",
            role: "34, Owner of a family-run taquería in Mexico City",
            pain: "Current menu tools are rigid and confusing",
            image: mariajuntos,
          },
          {
            name: "Carlos Mendoza",
            role: "42, Manager of a small seafood restaurant in Monterrey",
            pain: "Digitize his menu quickly without paying high commissions",
            image: carlosjuntos,
          },
          {
            name: "Ana Torres",
            role: "28, Runs a coffee shop in Guadalajara",
            pain: "Hard to track orders from multiple channels",
            image: anajuntos,
          }
        ],
        
        // User journey & empathy map

        UnderstandingUser: "Empathy maps, journeys, and structures that reveal needs, emotions, and behaviors",

        userjourney: [
          {
            title: "User Journey – María",
            description: "Tracing the step-by-step experience of a restaurant owner managing her digital menu.",
            image: juntosuserjourneyImage
          },
          {
            title: "Empathy Map – María",
            description: "Understanding María’s thoughts, feelings, actions, and needs as she navigates menu creation.",
            image: empathyjuntos
          },
          {
            title: "Eisenhower Matrix",
            description: "Prioritizing features based on urgency and importance to optimize the product roadmap.",
            image: ematrixjuntos
          }
        ],

        // Discovery Outcomes
        discoveryOutcomes: [
          {
            title: "Step-by-step flow",
            description: "A progressive step-by-step flow will reduce overwhelm and errors.",
            icon: Lightbulb,
          },
          {
            title: "Category management",
            description: "Dedicated category management will help restaurants mirror their offline menu structure digitally.",
            icon: Group,
          },
          {
            title: "Visual add-on builder",
            description: "A visual add-on builder will make it easier to add paid extras quickly, encouraging upsell adoption.",
            icon: BookOpen,
          },
        ],

        // Design process insights
        processInsights: [
          {
            phase: "Wirefriming",
            insight: "I started by sketching low-fidelity wireframes that allowed us to visualize the flow of creating and editing menus, testing ideas quickly without being constrained by visuals.",
            image: wireframesjuntos,
          },
          {
            phase: "Design System",
            insight: "From there, I built a design system that ensured consistency across every interaction, providing reusable components that made the product scalable and intuitive.",
            image: designjuntos
          },
          {
            phase: "Usability Testing",
            insight: "Finally, we validated our assumptions through usability testing, observing how real restaurant owners interacted with the prototype and refining the experience based on their feedback.",
            image: usabilityjuntos
          }
        ],

        // Key features
        
        keyfeaturestitle: "The essential tools that empower restaurants to build, manage, and optimize their digital menus seamlessly.",

        keyFeatures: [
          {
            title: "Add Products & Combos",
            description: "Easily create and customize individual dishes or bundle them into attractive combos to boost sales.",
            icon: Pizza
          },
          {
            title: "Paid Add-Ons",
            description: "Give customers the freedom to personalize their meals with extra toppings, sauces, or premium additions.",
            icon: HandPlatter
          },
          {
            title: "Menu Categories",
            description: "Organize your menu into clear sections, making it simple for customers to browse and order.",
            icon: Group
          }
        ],
        
        // Usability testing results

        testingSetUp: [
          {
            participants: "8 total (restaurant owners)",
            task: " Adding a New Product, Creating a Combo Meal, Managing Categories, Creating Modifiers, Reviewing Orders"
          }
        ],

        testingResults: [
        ],

        testingResults2: [
          {
            metric: "Overall Usability",
            before: "7/8 participants successfully created a new product on their first try.",
            after: "Average task completion time for adding a product: 2.5 minutes (target: 2 min).",
          },
          {
            metric: "Navigation & Flow",
            before: "Users found the FAB (+ button) intuitive for adding products and combos.",
            after: "The distinction between Menu, Categories, and Modifiers tabs was confusing to 5/8 participants — they hesitated before choosing where to start.",
          },
          {
            metric: "Information Architecture",
            before: "6/8 users felt the Modifiers section lacked clarity — unsure if it meant “ingredients,” “extras,” or “adiciones pagas.”",
            after: "Product form fields (name, price, photo) were clear, but optional fields like details were often skipped."
          }
        ],

        // Before/After improvements
        improvements: [
          {
            area: "Reorder fields",
            before: "Skipped optional fields reduce product richness.",
            after: "Reorder fields (put details and photos higher)",
            image: productojuntos,
          },
          {
            area: "Reduce cognitive load",
            before: "Task flow slightly longer than target.",
            after: "Reduce cognitive load by pre-filling defaults (e.g., price in MXN, category suggestion based on previous entries).",
            image: prefillingjuntos,
          },
          {
            area: "Paid Additions",
            before: "Emotional friction with modifiers",
            after: "Use familiar terms (“Paid Additions”) instead of “Modifiers” to reduce confusion.",
            image: adicionesjuntos,
          },
          {
            area: "Modifiers vs Additions",
            before: "Confusion between Categories and Modifiers.",
            after: "Rename or visually differentiate these tabs. Add microcopy or onboarding tips explaining their roles.",
            image: modifiersjuntos,
          }
        ],
        
        // Final impact metrics

        ImpactResults: "Empowering small restaurants to take back control of their sales.",

        impactMetrics: [
          { label: "small restaurants onboarded in first year", value: "+2,500", color: "text-green-600" },
          { label: "Average savings vs. delivery apps", value: "15–25%", color: "text-blue-600" },
          { label: "Faster: Reduced setup time: menu creation flow", value: "2x", color: "text-purple-600" },
          { label: "Increase in successful menu setups", value: "40%", color: "text-orange-600" },
        ],
        
        // Final UI screens
        
        finalUI: "A comprehensive platform that transforms complex logistics operations into intuitive, efficient workflows.",

        finalScreens: [
          {
            title: "Prototype Walkthrough",
            description: "A complete journey across screens, flows, and key interactions.",
            video: prototypejuntos,
          },
          {
            title: "Onboarding & Product Setup",
            description: "A smooth start: add products or import an entire menu by branch.",
            image: sucursaljuntos,
          },
          {
            title: "Menu, Categories & Add-ons",
            description: "Organize dishes into categories and customize with flexible extras.",
            image: cartajuntos,
          },
          {
            title: "Add-ons & Groups",
            description: "Create paid extras or manage existing add-on groups with ease.",
            image: toppinsjuntos,
          },
          {
            title: "Orders & Order Details",
            description: "Track incoming orders and review every detail in real time.",
            image: ordenesjuntos,
          },
        ],

        //Reflection
        Reflection: "As a UX designer, this project allowed me to deeply understand the frustrations and fears restaurant owners face when creating and managing their digital menus. Beyond designing a new flow, the real challenge was to give them confidence and control—simplifying steps, reducing the anxiety of making irreversible mistakes, and providing clear tools to organize categories and add-ons. This experience reminded me that design is not just about solving technical tasks, but about supporting people in their everyday routines, enabling them to focus on what truly matters: growing their business and serving their customers better."
      };
    }

    // Red de salud
    if (id === 4) {
      // Red de salud case study
      return {
        title: "Red de Salud",
        subtitle: "Redefining Patient Management in Telehealth",
        tags: [
          "Telehealth",
          "Dashboard",
          "SaaS",
          "Healthcare Technology",
        ],
        client: "Red de Salud",
        year: "2022",
        role: "UX Designer",
        duration: "1 year",
        tools: ["Figma", "FigJam", "Prototyping"],
        heroImage: redcover,

        // Project context
        context:
          "Red de Salud needed a comprehensive SaaS platform to centralize patient care, streamline communication between healthcare professionals, and deliver personalized patient education in a fragmented healthcare system.",

        challenge:
          "How might we design a telehealth platform that addresses fragmented patient management, siloed medical records, and the lack of effective patient communication and education tools?",

        // KPIs and North Star
        northStar:
          "Percentage of active patients with a continuously updated digital health record shared across specialists",
        kpis: [
          {
            category: "Patient Management",
            metrics: [
              "Shared record updates",
              "Cross-specialty collaboration",
              "Record accessibility",
            ],
          },
          {
            category: "Communication",
            metrics: [
              "Patient engagement",
              "Follow-up completion",
              "Response time",
            ],
          },
          {
            category: "Education",
            metrics: [
              "Microlearning completion",
              "Knowledge retention",
              "Behavior change",
            ],
          },
          {
            category: "Efficiency",
            metrics: [
              "Workflow optimization",
              "Time savings",
              "Error reduction",
            ],
          },
        ],

        // Research insights
        researchsubtitle: " Understanding gaps in patient–doctor workflows.",
        
        researchtags: [
          "Interviews",
          "Competitor Analysis",
        ],

        researchFindings: [
            { 
              title: "72%",
              description: "of patients forget daily tasks without proper reminders",
            },
            {
              title: "80%",
              description: "of providers face delays with outdated patient data",
            },
            {
              title: "65%",
              description: "of caregivers struggle with complex care plan navigation",
            },
        ],

        keyInsights: [
          { 
            title: "80%",
            description: "of professionals spend extra time duplicating medical history across specialties.",
          },
          {
            title: "60%",
            description: "of doctors highlighted the importance of automating reminders and records to reduce no-shows.",
          },
          {
            title: "75%",
            description: "of nutritionists emphasized the lack of dynamic tools to calculate kcal and personalize diets.",
          },
        ],

        // Pain points

        painPoints: [
          {
            title: "Disconnection Between Specialists",
            description:
              "7/9 doctors confirmed they cannot access each other’s notes or patient history.",
            icon: RefreshCwOff,
          },
          {
            title: "Communication Gaps with Patients",
            description:
              "8/9 doctors use informal channels (mostly WhatsApp) but without system integration or compliance.",
            icon: MessageSquareX,
          },
          {
            title: "Time-Consuming Administrative Work",
            description:
              "On average, doctors spend 25% of consultations repeating histories or preparing instructions.",
            icon: ClipboardPlus,
          },
        ],

        // User personas
        personas: [
          {
            name: "Dr. Laura Martínez",
            role: "General Physician (42)",
            pain: "Spends too much time updating repetitive patient data across specialties.",
            image: redLaura,
          },
          {
            name: "Dr. Andrés Pérez",
            role: "Nephrologist (38)",
            pain: "Lacks clarity on treatment adherence and struggles with patient follow-up.",
            image: redAndres,
          },
          {
            name: "María López",
            role: "Nutritionist (35)",
            pain: "Needs an efficient way to calculate calories and create personalized diets for chronic patients.",
            image: redMaria,
          },
        ],

        // User journey & empathy map

        UnderstandingUser: "Understanding gaps in patient–doctor workflows while leveraging AI tools (ChatGPT & Perplexity) to accelerate interview analysis and structure research outcomes.",

        userjourney: [
          {
            title: "Dr. Laura (Nephrologist)",
            description: "Managing a Referred Patient",
            image: redUserJoureyLaura
          },
          {
            title: "Dr. Miguel (General Practitioner)",
            description: "Preventing Missed Appointments",
            image: redUserJoureyMiguel
          },
          {
            title: "Dr. Andrea (Nutritionist)",
            description: "Engaging Patient in Lifestyle Change",
            image: redUserJoureyAndrea
          },
        ],

        // Discovery Outcomes
        discoveryOutcomes: [
          {
            title: "Shared Patient Profile Across Specialists",
            description: "If doctors can share a unified patient record, collaboration will improve and duplicated work will decrease.",
            icon: FolderSync,
          },
          {
            title: "Integrated Patient Communication via WhatsApp",
            description: "If the platform enables secure reminders and follow-ups via WhatsApp, patient engagement will rise.",
            icon: MessageCircle,
          },
          {
            title: "Personalized Templates for Education & Reports",
            description: "If doctors can customize reports and microlearning content, patients will better understand and follow treatment plans.",
            icon: BookOpen,
          },
        ],

        // Design process insights
        processInsights: [
          {
            phase: "Research & Discovery",
            insight:
              "Conducted interviews with 9 healthcare professionals (3 GPs, 3 nephrologists, 3 nutritionists) and competitive analysis to understand workflow gaps",
            image: redResearch
          },
          {
            phase: "Design System",
            insight:
              "From there, I built a design system that ensured consistency across every interaction, providing reusable components that made the product scalable and intuitive.",
            image: reddesignsystem
          },
          {
            phase: "Prioritizing",
            insight:
              "Used Eisenhower Matrix to prioritize features and created accessible, intuitive interfaces",
            image: redEmatrix
          },
        ],

        // Key features
        
        keyfeaturestitle: "Empowering Healthcare Professionals with Seamless Patient Management",

        keyFeatures: [
          {
            title: "Unified Patient History",
            description:
              "Physicians can access and update patient histories in real time, ensuring that every specialist sees the same accurate information without duplication.",
            icon: FolderSync,
          },
          {
            title: "Smart Scheduling & Notifications",
            description:
              "Sync calendars, manage appointments, and send automated reminders through WhatsApp and email to reduce no-shows and improve treatment adherence.",
            icon: CalendarSync,
          },
          {
            title: "Personalized Care Tools",
            description:
              "Create customizable consultation templates, prescriptions, and microlearning courses that help patients understand their condition and follow their care plan effectively.",
            icon: FileSliders,
          },
        ],

        // Usability testing results

        testingSetUp: [
          {
            participants: " 9 (3 GPs, 3 nephrologists, 3 nutritionists)",
            task: " Creating new consultation, updating history, prescribing medication, generating reports."
          }
        ],

        testingResults: [
          {
            metric: "Task Completion Rate",
            before: "58%",
            after: "92%",
            improvement: "+59%",
          },
          {
            metric: "Error Rate",
            before: "18%",
            after: "8%",
            improvement: "-56%",
          },
          {
            metric: "User Satisfaction",
            before: "3.2/5",
            after: "4.6/5",
            improvement: "+44%",
          },
        ],

        testingResults2: [
        ],

        // Before/After improvements
        improvements: [
          {
            area: "Report export (send or print)",
            before:
              "Confusion between “Send” vs “Print” summary options",
            after:
              "Simplify action labels and unify workflow for report sharing",
            image: redCallingBA
          },
          {
            area: "Prescription save options",
            before:
              "Nephrologists feel unsure about autosave when updating history",
            after:
              "Visible save feedback and confirmation messages",
            image: redPrescriptionBA
          },
          {
            area: "Task Module",
            before:
              "No visible feedback to prevent duplicates",
            after:
              "Add validation to prevent duplicates",
            image: redTaskBA
          },
          {
            area: "Kcal calculation",
            before:
              "Users struggled to locate the kcal calculation hidden in secondary steps.",
            after:
              "Made kcal calculation more visible by moving it up and integrating it into the main flow.",
            image: redKCalBA
          },
          {
            area: "Simplify nutritionist workflow",
            before:
              "Diet fields felt restrictive and cluttered with unnecessary inputs.",
            after:
              "Streamlined fields to reduce cognitive load and focus only on essential options.",
            image: redNutritionBA
          },
        ],

        // Final impact metrics

        ImpactResults: "How Red de Salud transformed clinical workflows and patient engagement",

        impactMetrics: [
          {
            label: "faster patient record updates (vs. manual process).",
            value: "45%",
            color: "text-blue-600",
          },
          {
            label: "increase in patient follow-ups with automated reminders.",
            value: "60%",
            color: "text-green-600",
          },
          {
            label: "more engagement with microlearning vs. static brochures.",
            value: "3x",
            color: "text-purple-600",
          },
          {
            label: "of physicians reported improved collaboration across specialties.",
            value: "80%",
            color: "text-orange-600",
          },
        ],

        // Final UI screens
  
        finalUI: "Red de Salud: A platform that adapts to every specialty",

        finalScreens: [
          {
            title: "Video Call with Real-time Updates",
            description:
              "Integrated video consultation interface allowing doctors to update patient records in real-time during appointments",
            image: redCall
          },
          {
            title: "Dashboard with Waiting Room",
            description:
              "Comprehensive dashboard providing overview of patient queue, appointments, and key metrics with integrated waiting room management",
            image: redDasboard
          },
          {
            title: "Nutrition Module & Calculator",
            description:
              "Advanced nutrition tracking interface with built-in kcal calculator, meal planning tools, and patient progress monitoring",
            image: redNutricion
          },
          {
            title: "Patient History",
            description:
              "Comprehensive patient history interface with 10+ integrated modules covering all aspects of patient care and medical history",
            image: redHistoria
          },
          {
            title: "Medical agenda",
            description:
              "Medical agenda synced with activities & appointments",
            image: redAgenda
          },
          {
            title: "Patient Records",
            description:
              "Anthropometric & biochemical indicators with historical charts.",
            image: redIndicadores
          },
          {
            title: "Report export",
            description:
              "Report export (send or print).",
            image: redConsultaEnviar
          },          
          {
            title: "Comprehensive Consultation Dashboard",
            description:
              "Centralized modules for medical history, treatments, vitals, prescriptions, tasks, and reports—all in one unified view.",
            image: redConsulta
          },
          {
            title: "+10 modules designed",
            description:
              "Centralized modules for medical history, Prescriptions, vitals, tasks, allergies, lipids profile, etc.",
            image: redModulos
          },                    
        ],

        //Reflection
        Reflection: "Designing for healthcare taught me the importance of bridging clinical rigor with usability. By embedding doctors in every stage of the process, we ensured the product was not only functional but also aligned with their real daily workflows. The result was a platform that redefined patient management in telehealth."

      };
    } 
 
  };

  const caseStudyData = getCaseStudyData(projectId);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        "section[data-section]",
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        const id = element.getAttribute("data-section") || "";

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
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
            <span className="text-sm font-medium">
              Portfolio
            </span>
          </button>

          <div className="flex items-center gap-8">
            <span className="text-sm text-gray-500">
              {caseStudyData.client}
            </span>
            <span className="text-sm text-gray-500">
              {caseStudyData.year}
            </span>
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
                {projectId === 1
                  ? "The Challenge"
                  : "The Challenge"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                {caseStudyData.challenge}
              </p>

              {(projectId === 1 || projectId === 2 || projectId === 3 || projectId === 4) &&
                caseStudyData.northStar && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-lg font-bold text-black mb-2">
                      North Star Metric
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {caseStudyData.northStar}
                    </p>
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
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  Role
                </div>
                <div className="text-lg text-black font-medium">
                  {caseStudyData.role}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  Duration
                </div>
                <div className="text-lg text-black font-medium">
                  {caseStudyData.duration}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  Client
                </div>
                <div className="text-lg text-black font-medium">
                  {caseStudyData.client}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  Year
                </div>
                <div className="text-lg text-black font-medium">
                  {caseStudyData.year}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      {(projectId === 1 || projectId === 2 || projectId === 3 || projectId === 4) &&
        caseStudyData.researchFindings && (
          
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
                  {caseStudyData.researchsubtitle}
                </p>
                <div className="inline-flex items-center gap-6 bg-gray-50 rounded-2xl px-8 py-4">
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Methods
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    {caseStudyData.researchtags.map((researchtag, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {researchtag}
                      </span>
                    ))}
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

                <h3 className="text-2xl font-bold text-black mb-12 text-center">
                  Key Insights
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {caseStudyData.keyInsights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white rounded-2xl shadow-md"
                      whileHover={{
                        y: -4,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <h3 className="text-5xl font-bold text-blue-500 mb-4">{insight.title}</h3>
                      <p className="text-gray-600">{insight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Pain Points */}
              {caseStudyData.painPoints && (
                <section data-section="painpoints">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                  >
                    <h3 className="text-2xl font-bold text-black mb-12 text-center">Pain Points</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {caseStudyData.painPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                          whileHover={{
                            y: -4,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <point.icon className="text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                          <p className="text-gray-600">{point.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              )}


              {/* Discovery Outcomes */}
              {caseStudyData?.discoveryOutcomes && (
                <section data-section="discovery-outcomes">
                  <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-black mb-8 text-center">Discovery Outcomes</h3>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                      Defined top 3 hypotheses for prototyping:
                    </p>
                    <div className="space-y-6">
                      {caseStudyData.discoveryOutcomes.map((outcome, index) => (
                        <motion.div
                          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex items-start gap-6"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <outcome.icon className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-black mb-2">{outcome.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              )}

              {/* Personas */}
              {caseStudyData.personas && (
                <div>
                  <h3 className="text-2xl font-bold text-black mb-12 text-center">
                    Key Personas
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {caseStudyData.personas.map(
                      (persona, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                            <ImageWithFallback
                              src={persona.image}
                              alt={persona.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-black mb-2">
                            {persona.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-3">
                            {persona.role}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {persona.pain}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

        )}

      {/* User Journey */}
      {(projectId === 1|| projectId === 2|| projectId === 3|| projectId === 4) && 
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
                Understanding the User
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {caseStudyData.UnderstandingUser}
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
                {caseStudyData.userjourney.map(
                  (screen, index) => (
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
                  ),
                )}
              </CarouselContent>

              <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white" />
              <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white" />
            </Carousel>
          </motion.div>
          </div>
        </section>
      }
      

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
                : "A systematic approach to understanding user needs and creating solutions that deliver measurable impact."}
            </p>
          </motion.div>

          <div className="space-y-32">
            {caseStudyData.processInsights.map(
              (insight, index) => (
                <motion.div
                  key={index}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }
                  >
                    <div className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">
                      {insight.phase}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                      {insight.insight}
                    </h3>
                  </div>

                  <motion.div
                    className={`relative rounded-2xl overflow-hidden shadow-xl ${
                      index % 2 === 1 ? "md:col-start-1" : ""
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
              ),
            )}
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
              {caseStudyData.keyfeaturestitle}
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
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
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
                : "Validation through rigorous user testing showed significant improvements across all key metrics."}
            </p>
          </motion.div>

          {caseStudyData.testingSetUp.map((setup, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-black mb-4">
                Testing Setup
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Participants:</strong> 
                  {setup.participants}
              </p>
              <p className="text-gray-600">
                <strong>Tasks tested:</strong> 
                {setup.task}
              </p>
            </motion.div>
            ),
          )}

          <div className="space-y-12">
            {caseStudyData.testingResults.map(
              (result, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-4 gap-8 items-center py-8 border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium text-black">
                      {result.metric}
                    </h3>
                  </div>

                  <div className="md:col-span-1 text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      Before
                    </div>
                    <div className="text-2xl font-bold text-gray-400">
                      {result.before}
                    </div>
                  </div>

                  <div className="md:col-span-1 text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      After
                    </div>
                    <div className="text-2xl font-bold text-black">
                      {result.after}
                    </div>
                  </div>

                  <div className="md:col-span-1 text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      Improvement
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {result.improvement}
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {/*testing results 2*/}
          <div className="space-y-12">
            {caseStudyData.testingResults2.map(
              (result2, index) => (
                <motion.div
                  key={index}
                  className="gap-8 items-center py-8 border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >

                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">
                      {result2.metric}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {result2.before}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {result2.after}
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>

        </div>
      </section>

      {/* Before/After Revisions */}
      {(projectId === 1|| projectId === 2|| projectId === 3|| projectId === 4) && caseStudyData.improvements && (
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
                Based on usability testing feedback, we made
                significant improvements across all key
                interaction areas.
              </p>
            </motion.div>

            <Carousel className="w-full">
              <CarouselContent className="-ml-6">
                {caseStudyData.improvements.map(
                  (improvement, index) => (
                    <CarouselItem key={index} className="pl-6">
                      <motion.div
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Header */}
                        <div className="p-8 pb-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                              <h3 className="text-2xl font-bold text-black">
                                {improvement.area}
                              </h3>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-700 text-sm font-medium">
                                Improved
                              </span>
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
                                <div className="text-sm text-red-600 font-bold uppercase tracking-wide">
                                  Before
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed pl-7">
                                {improvement.before}
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                <div className="text-sm text-green-600 font-bold uppercase tracking-wide">
                                  After
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed pl-7">
                                {improvement.after}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ),
                )}
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
              {caseStudyData.finalUI}
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
                {caseStudyData.finalScreens.map(
                  (screen, index) => (
                    <CarouselItem key={index}>
                      <div className="text-center">
                        <motion.div
                          className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                        >
                          {screen.video ? (
                            <video
                              src={screen.video}
                              controls
                              className="w-full h-[500px] md:h-[600px] object-cover"
                              poster={screen.poster} // Opcional: una portada
                            />
                            ) : (
                            <ImageWithFallback
                              src={screen.image}
                              alt={screen.title}
                              className="w-full h-[500px] md:h-[600px] object-cover"
                            />
                          )}

                        </motion.div>
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {screen.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                          {screen.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ),
                )}
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
              {caseStudyData.ImpactResults}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudyData.impactMetrics.map(
              (metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`text-5xl md:text-6xl font-bold mb-4 ${metric.color}`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-gray-600 text-lg">
                    {metric.label}
                  </div>
                </motion.div>
              ),
            )}
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
              {caseStudyData.Reflection}
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