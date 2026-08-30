import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, Code2, Gauge, Lock, Database } from 'lucide-react';
import type { ProjectCaseStudy } from '../types';
import { Badge } from './Badge';
import { ToolLogo } from './Icons';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <Badge variant="cyan" size="md">
                {project.type}
              </Badge>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Project Overview
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-400 font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-300">
          
          {/* Section 1: Overview & Role */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl border border-slate-800 bg-slate-950/60">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Project Overview
              </h4>
              <p className="text-sm leading-relaxed text-slate-200">
                {project.summary}
              </p>
            </div>
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                My QA Role
              </h4>
              <p className="text-sm font-semibold text-cyan-300">
                {project.role}
              </p>
              <div className="pt-2">
                <span className="text-xs text-slate-400 block mb-1.5 font-semibold">Tech Stack & Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5">
                      <ToolLogo name={t} className="w-3.5 h-3.5 shrink-0" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Testing Strategy */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              1. Testing Strategy & Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.testingStrategy.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Functional & UI Testing */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              2. Functional & UI Verification
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.functionalTesting.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/40 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Automation Approach */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              3. Automation Approach
            </h4>
            <div className="p-4 rounded-xl border border-indigo-950/60 bg-indigo-950/20 space-y-2">
              {project.automationApproach.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-indigo-200">
                  <span className="font-mono text-cyan-400">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: API & Backend Testing */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-400" />
              4. API & Backend Contract Testing
            </h4>
            <div className="p-4 rounded-xl border border-purple-950/60 bg-purple-950/20 space-y-2">
              {project.apiTesting.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-purple-200">
                  <span className="font-mono text-purple-400">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 & 7: Performance or Security Testing (if applicable) */}
          {(project.performanceTesting || project.securityTesting) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.performanceTesting && (
                <div className="p-4 rounded-xl border border-amber-950/60 bg-amber-950/20 space-y-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <Gauge className="w-4 h-4" /> Performance Testing
                  </h5>
                  <ul className="space-y-1.5 text-xs text-amber-200/90">
                    {project.performanceTesting.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.securityTesting && (
                <div className="p-4 rounded-xl border border-rose-950/60 bg-rose-950/20 space-y-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                    <Lock className="w-4 h-4" /> Security Validation
                  </h5>
                  <ul className="space-y-1.5 text-xs text-rose-200/90">
                    {project.securityTesting.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-400">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Section 8: Major Challenges */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              5. Key Engineering Challenges
            </h4>
            <div className="space-y-2">
              {project.challenges.map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-amber-400">Challenge {idx + 1}: </span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Quality Improvements Delivered */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              6. QA ROI & Long-term Improvements
            </h4>
            <div className="p-4 rounded-xl border border-cyan-900/40 bg-cyan-950/10 space-y-2">
              {project.improvements.map((imp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-cyan-200">
                  <span className="font-mono text-cyan-400">✦</span>
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 p-4 sm:p-6 bg-slate-900/95 border-t border-slate-800 backdrop-blur-md flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            QA Engineering Portfolio • Tirtha Sarathi Mohanty
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
