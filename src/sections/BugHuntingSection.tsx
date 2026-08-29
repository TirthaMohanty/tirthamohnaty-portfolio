import React, { useState } from 'react';
import { Bug, AlertCircle, Search, ShieldCheck, Zap } from 'lucide-react';
import { bugHuntingCards } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const BugHuntingSection: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');

  const getSeverityVariant = (sev: string) => {
    switch (sev) {
      case 'Critical': return 'rose';
      case 'High': return 'amber';
      case 'Medium': return 'cyan';
      default: return 'slate';
    }
  };

  const filteredBugs = selectedSeverity === 'All'
    ? bugHuntingCards
    : bugHuntingCards.filter(b => b.severity === selectedSeverity);

  return (
    <section id="bug-hunting" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Defect Investigation Lab"
          badgeVariant="rose"
          title="Bugs I've Caught"
          subtitle="Real-world generalized defects discovered, investigated, and remediated before production release."
        />

        {/* Severity Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {['All', 'Critical', 'High', 'Medium'].map((sev) => (
            <button
              key={sev}
              onClick={() => setSelectedSeverity(sev)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSeverity === sev
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {sev} Severity
            </button>
          ))}
        </div>

        {/* Bugs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBugs.map((bug) => (
            <div
              key={bug.id}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/80 glass-panel-hover flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Bug Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-400">
                      <Bug className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 block font-semibold">
                        {bug.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {bug.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant={getSeverityVariant(bug.severity)} size="sm" dot>
                    {bug.severity}
                  </Badge>
                </div>

                {/* Step-by-Step QA Breakdown (Problem -> Investigation -> Finding -> QA Impact) */}
                <div className="space-y-3 font-sans text-xs">
                  
                  {/* Problem */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="text-rose-400 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> 1. Problem Statement:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {bug.problem}
                    </p>
                  </div>

                  {/* Investigation */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5" /> 2. QA Investigation:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {bug.investigation}
                    </p>
                  </div>

                  {/* Finding */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> 3. Root Cause Finding:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {bug.finding}
                    </p>
                  </div>

                  {/* QA Impact */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-1">
                    <span className="text-emerald-400 font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> 4. Business & QA Impact:
                    </span>
                    <p className="text-emerald-200 leading-relaxed">
                      {bug.qaImpact}
                    </p>
                  </div>

                </div>

              </div>

              {/* Tools footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-500">
                  INVESTIGATION TOOLS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {bug.toolsUsed.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
