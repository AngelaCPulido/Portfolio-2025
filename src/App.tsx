import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudy } from './components/CaseStudy';


export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'caseStudy'>('portfolio');
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState<number>(1);

  const showCaseStudy = (projectId: number) => {
    setCurrentCaseStudyId(projectId);
    setCurrentView('caseStudy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showPortfolio = () => {
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showNextCaseStudy = () => {
    const nextId = currentCaseStudyId < 4 ? currentCaseStudyId + 1 : 1;
    setCurrentCaseStudyId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'caseStudy') {
    return (
      <CaseStudy
        projectId={currentCaseStudyId}
        onBackToPortfolio={showPortfolio}
        onNextCaseStudy={showNextCaseStudy}
      />
    );
  }

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Portfolio Section */}
      <PortfolioSection onViewCaseStudy={showCaseStudy} />
      
      {/* About Me Section */}
      <AboutSection />
      
      {/* Contact/Footer Section */}
      <ContactSection />
    </div>
  );
}