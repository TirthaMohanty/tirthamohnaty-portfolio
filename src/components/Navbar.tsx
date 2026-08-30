import React, { useState } from 'react';
import { Menu, X, FileDown, Sun, Moon, ChevronRight, Home, User, Award, FolderKanban, FlaskConical, Mail, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

export type NavTabId = 'home' | 'about' | 'skills' | 'projects' | 'labs' | 'contact' | 'all';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  activeTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavTabs: { id: NavTabId; name: string; icon: React.ReactNode }[] = [
    { id: 'home', name: 'Home', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'about', name: 'About', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'skills', name: 'Skills', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'projects', name: 'Projects', icon: <FolderKanban className="w-3.5 h-3.5" /> },
    { id: 'labs', name: 'QA Labs', icon: <FlaskConical className="w-3.5 h-3.5" /> },
    { id: 'contact', name: 'Contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleTabClick = (tabId: NavTabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto rounded-2xl sm:rounded-full bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-slate-700/80 dark:border-white/10 shadow-2xl shadow-black/50 py-2 sm:py-2.5 px-3.5 sm:px-5 transition-all">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo with Clean Typographic Mark */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1 text-left"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-all shrink-0 overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Tirtha Mohanty"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            
            <div className="flex items-center text-sm sm:text-base font-bold tracking-tight">
              <span className="text-cyan-400 border-b-2 border-cyan-400 pb-0.5">TIRTHA</span>
              <span className="text-slate-500 mx-1">/</span>
              <span className="text-slate-100">MOHANTY</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1.5 shrink-0" title="Available for Opportunities" />
            </div>
          </button>

          {/* Desktop Nav Tabs Strip */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1 rounded-full border border-slate-800">
            {primaryNavTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-slate-950 bg-cyan-400 shadow-sm shadow-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}

            {/* View Mode Toggle: All In One View */}
            <button
              onClick={() => handleTabClick(activeTab === 'all' ? 'home' : 'all')}
              className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono rounded-full transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
              title="Toggle Full Scrollable View"
            >
              <Layers className="w-3 h-3" />
              <span>{activeTab === 'all' ? 'Paginated View' : 'All Sections'}</span>
            </button>
          </nav>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* LinkedIn Quick Link */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-full border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-sm"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
            </a>

            {/* GitHub Quick Link */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-full border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all shadow-sm"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            {/* Resume Pill CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/25 hover:scale-[1.03] active:scale-[0.97] transition-all whitespace-nowrap"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Floating Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 space-y-1.5 animate-fadeIn pb-2">
            {primaryNavTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 font-bold'
                      : 'text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {tab.icon}
                    <span>{tab.name}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              );
            })}

            <button
              onClick={() => handleTabClick(activeTab === 'all' ? 'home' : 'all')}
              className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-400 bg-slate-950/60 border border-slate-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                {activeTab === 'all' ? 'Switch to Paginated View' : 'View All in Single Page'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
