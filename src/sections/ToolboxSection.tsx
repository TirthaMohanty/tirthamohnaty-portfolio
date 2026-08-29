import React, { useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { testingToolbox } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ToolLogo } from '../components/Icons';
import type { ToolboxItem } from '../types';

export const ToolboxSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolboxItem>(testingToolbox[0]);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'Automation',
    'Languages',
    'API Testing',
    'Performance',
    'Security',
    'Database',
    'DevOps & Backend',
    'Manual & Management'
  ];

  const filteredTools = filterCategory === 'All'
    ? testingToolbox
    : testingToolbox.filter(t => t.category === filterCategory);

  return (
    <section id="toolbox" className="py-20 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Hands-On Arsenal"
          badgeVariant="purple"
          title="My Testing & Development Toolbox"
          subtitle="Interactive tools, libraries, and frameworks leveraged daily for automated test execution, backend development, load benchmarking, and defect management."
        />

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbox Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid of Tool Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredTools.map((tool) => {
              const isSelected = activeTool.id === tool.id;
              return (
                <div
                  key={tool.id}
                  onClick={() => setActiveTool(tool)}
                  onMouseEnter={() => setActiveTool(tool)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-950/30 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ToolLogo name={tool.name} className="w-6 h-6 shrink-0" />
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">
                        {tool.badge}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight mb-1">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {tool.shortDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detailed Tool Context Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full">
            <div className="p-5 sm:p-7 rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl backdrop-blur-xl space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <ToolLogo name={activeTool.name} className="w-10 h-10 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Badge variant="cyan" size="md">
                        {activeTool.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-slate-400">
                        ID: {activeTool.id}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {activeTool.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> What it is
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeTool.shortDescription}
                </p>
              </div>

              {/* Real World QA Usage */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> How I Used It in Real Projects
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{activeTool.realWorldUsage}"
                </p>
              </div>

              {/* Highlighted tags */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Associated Techniques & Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTool.highlightedSkills.map((sk) => (
                    <span
                      key={sk}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-cyan-300 font-mono flex items-center gap-1.5"
                    >
                      <ToolLogo name={sk} className="w-3.5 h-3.5 shrink-0" />
                      #{sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[10px] sm:text-[11px] text-slate-500 font-mono flex items-center justify-between border-t border-slate-800/80">
                <span>Hover or tap cards to inspect</span>
                <span>Active QA & Dev Stack</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
