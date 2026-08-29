import React from 'react';
import { ShieldCheck, Mail, FileDown, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Automation', href: '#automation' },
    { name: 'API Lab', href: '#api-lab' },
    { name: 'Performance', href: '#performance' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-mono text-cyan-400">
                  {personalInfo.title}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Dedicated to breaking bugs before they hit production. Specializing in automated test frameworks (Selenium, Playwright, Appium), REST API testing, Python backend engineering, and software reliability.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Me
              </a>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 text-xs font-medium transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-emerald-400" /> Resume
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-xs transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status and Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Current Status
            </h4>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">
                  {personalInfo.statusText}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Company: <span className="text-slate-200 font-medium">Alpha IT Managed Services</span>
              </p>
              <p className="text-xs text-slate-400">
                Location: <span className="text-slate-200 font-medium">{personalInfo.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 flex items-center gap-1">
              Built with precision & quality in mind <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
