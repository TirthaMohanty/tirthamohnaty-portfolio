import React, { useState } from 'react';
import { FileText, Compass, ListChecks, Database, Laptop, Network, Code2, Gauge, ShieldAlert, Bug, RefreshCw, CheckCircle, CheckCircle2 } from 'lucide-react';
import { qaProcessSteps } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = qaProcessSteps[activeStepIndex];

  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="w-5 h-5 text-cyan-400" />,
    Compass: <Compass className="w-5 h-5 text-indigo-400" />,
    ListChecks: <ListChecks className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Laptop: <Laptop className="w-5 h-5 text-blue-400" />,
    Network: <Network className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
    Gauge: <Gauge className="w-5 h-5 text-amber-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
    Bug: <Bug className="w-5 h-5 text-rose-400" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-emerald-400" />,
    CheckCircle: <CheckCircle className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="process" className="py-20 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Testing Methodology"
          badgeVariant="emerald"
          title="My QA Lifecycle Process"
          subtitle="A structured, rigorous, and repeatable 12-stage quality assurance engineering lifecycle from initial PRD review to production release sign-off."
        />

        {/* Step-by-Step Interactive Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Step Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {qaProcessSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-950/30 shadow-md shadow-emerald-500/10'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {step.step}
                    </span>
                    <div className="truncate">
                      <h4 className="text-xs font-bold text-white tracking-tight truncate">
                        {step.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 block truncate">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-600 shrink-0 ml-1">→</span>
                </div>
              );
            })}
          </div>

          {/* Right Active Step Deep-Dive Inspector */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 w-full">
            <div className="p-5 sm:p-8 rounded-2xl border border-emerald-500/40 bg-slate-900 shadow-2xl glass-panel space-y-5 sm:space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800 border border-slate-700">
                    {iconMap[activeStep.iconName]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Badge variant="emerald" size="sm">
                        Stage {activeStep.step} of 12
                      </Badge>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                  Stage Purpose:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Key Actions */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Core QA Actions Executed:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeStep.keyActions.map((action, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Standard QA Deliverables:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeStep.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-mono flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation stepper buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <span className="text-xs font-mono text-slate-500">
                  {activeStepIndex + 1} / 12
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(qaProcessSteps.length - 1, prev + 1))}
                  disabled={activeStepIndex === qaProcessSteps.length - 1}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
