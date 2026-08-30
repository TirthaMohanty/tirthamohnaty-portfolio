import { useState, useEffect } from 'react';
import { Navbar, type NavTabId } from './components/Navbar';
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

  const [activeTab, setActiveTab] = useState<NavTabId>('home');
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

  const handleNavigate = (tab: NavTabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200 relative overflow-hidden">
      
      {/* Interactive Particle Network Background */}
      <ParticleNetwork darkMode={darkMode} />

      {/* Direct One-Click Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
        activeTab={activeTab}
        onSelectTab={handleNavigate}
      />

      {/* Main Content Sections with One-Click Tab Views */}
      <main className="flex-grow relative z-10 pt-16 sm:pt-20">
        
        {/* Tab View: Home */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <HeroSection
              onOpenResume={() => setResumeOpen(true)}
              onNavigate={handleNavigate}
            />
            <AboutSection
              onOpenResume={() => setResumeOpen(true)}
              onNavigate={handleNavigate}
            />
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
            />
            <ContactSection
              onOpenResume={() => setResumeOpen(true)}
            />
          </div>
        )}

        {/* Tab View: About & Career */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn py-4">
            <AboutSection
              onOpenResume={() => setResumeOpen(true)}
              onNavigate={handleNavigate}
            />
            <ExperienceSection />
            <CareerGoalsSection />
          </div>
        )}

        {/* Tab View: Skills & Toolbox */}
        {activeTab === 'skills' && (
          <div className="animate-fadeIn py-4">
            <ExpertiseSection />
            <ToolboxSection />
            <TechMatrixSection />
          </div>
        )}

        {/* Tab View: Featured Projects */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn py-4">
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </div>
        )}

        {/* Tab View: QA Automation & Interactive Labs */}
        {activeTab === 'labs' && (
          <div className="animate-fadeIn py-4">
            <AutomationSection />
            <ApiTestingSection />
            <PerformanceSection />
            <SecuritySection />
            <ProcessSection />
          </div>
        )}

        {/* Tab View: Contact */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn py-4">
            <ContactSection
              onOpenResume={() => setResumeOpen(true)}
            />
          </div>
        )}

        {/* Tab View: All In One Page Mode */}
        {activeTab === 'all' && (
          <div className="animate-fadeIn">
            <HeroSection onOpenResume={() => setResumeOpen(true)} onNavigate={handleNavigate} />
            <AboutSection onOpenResume={() => setResumeOpen(true)} onNavigate={handleNavigate} />
            <ExperienceSection />
            <ExpertiseSection />
            <ToolboxSection />
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
            <AutomationSection />
            <ApiTestingSection />
            <PerformanceSection />
            <SecuritySection />
            <ProcessSection />
            <TechMatrixSection />
            <CareerGoalsSection />
            <ContactSection onOpenResume={() => setResumeOpen(true)} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onNavigate={handleNavigate}
      />

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
