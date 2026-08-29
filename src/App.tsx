import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ParticleNetwork } from './components/ParticleNetwork';

// Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { ToolboxSection } from './sections/ToolboxSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AutomationSection } from './sections/AutomationSection';
import { ApiTestingSection } from './sections/ApiTestingSection';
import { PerformanceSection } from './sections/PerformanceSection';
import { SecuritySection } from './sections/SecuritySection';
import { BugHuntingSection } from './sections/BugHuntingSection';
import { ProcessSection } from './sections/ProcessSection';
import { TechMatrixSection } from './sections/TechMatrixSection';
import { CareerGoalsSection } from './sections/CareerGoalsSection';
import { ContactSection } from './sections/ContactSection';

import type { ProjectCaseStudy } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('tirtha_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to dark theme
  });
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('tirtha_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('tirtha_portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200 relative overflow-hidden">
      
      {/* Interactive Constellation / Particle Network Background */}
      <ParticleNetwork darkMode={darkMode} />

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ToolboxSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <AutomationSection />
        <ApiTestingSection />
        <PerformanceSection />
        <SecuritySection />
        <BugHuntingSection />
        <ProcessSection />
        <TechMatrixSection />
        <CareerGoalsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}

export default App;
