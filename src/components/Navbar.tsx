import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, FileDown, Sun, Moon, ChevronRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Streamlined, classy primary navigation links
  const primaryNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Automation', href: '#automation' },
    { name: 'API Lab', href: '#api-lab' },
    { name: 'Performance', href: '#performance' },
    { name: 'Contact', href: '#contact' },
  ];

  // Full comprehensive directory for mobile drawer
  const allNavLinks = [
    { name: 'About My Career', href: '#about' },
    { name: 'Experience & Education', href: '#experience' },
    { name: 'Technical Skills Matrix', href: '#skills' },
    { name: 'QA & Dev Toolbox', href: '#toolbox' },
    { name: 'Featured QA Projects', href: '#projects' },
    { name: 'Automation Engineering', href: '#automation' },
    { name: 'API Testing Lab', href: '#api-lab' },
    { name: 'Performance & Locust', href: '#performance' },
    { name: 'Security Verification', href: '#security' },
    { name: 'Bugs I\'ve Caught', href: '#bug-hunting' },
    { name: 'QA Lifecycle Process', href: '#process' },
    { name: 'Stack Matrix Search', href: '#matrix' },
    { name: 'Career Goals', href: '#goals' },
    { name: 'Contact & Hire', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = primaryNavLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 260;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-slate-700/80 dark:border-white/10 shadow-2xl shadow-black/50 py-2 sm:py-2.5 px-3 sm:px-5'
            : 'bg-slate-900/75 dark:bg-slate-950/75 backdrop-blur-xl border border-slate-700/60 dark:border-white/10 shadow-xl shadow-black/30 py-2.5 sm:py-3 px-3.5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo & Title with Modern Glowing Capsule */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-all duration-300 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5 leading-none">
                Tirtha Mohanty
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" title="Open to QA Opportunities" />
              </span>
              <span className="text-[10px] font-mono text-cyan-400 mt-1 leading-none flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> QA Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links Pill Strip */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1 rounded-full border border-slate-800/80">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-600 to-indigo-600 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
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

            {/* Resume Pill CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all whitespace-nowrap"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Floating Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 space-y-3 max-h-[75vh] overflow-y-auto animate-fadeIn">
            
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold rounded-xl shadow-md"
              >
                <FileDown className="w-3.5 h-3.5" /> View Resume
              </button>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block px-3 py-1">
                Directory
              </span>
              {allNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 rounded-xl transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </a>
              ))}
            </div>

          </div>
        )}

      </div>
    </header>
  );
};
