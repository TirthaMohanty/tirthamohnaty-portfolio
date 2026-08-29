import React, { useState } from 'react';
import { CheckCircle2, Code2, Network, Gauge, Lock, Database, Sliders, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ToolLogo } from '../components/Icons';
import type { SkillProficiency } from '../types';

export const ExpertiseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Network: <Network className="w-5 h-5 text-blue-400" />,
    Gauge: <Gauge className="w-5 h-5 text-amber-400" />,
    Lock: <Lock className="w-5 h-5 text-rose-400" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Sliders: <Sliders className="w-5 h-5 text-indigo-400" />,
  };

  const getProficiencyVariant = (prof: SkillProficiency) => {
    switch (prof) {
      case 'Experienced':
        return 'emerald';
      case 'Hands-on':
        return 'cyan';
      case 'Working Knowledge':
        return 'purple';
      default:
        return 'slate';
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="QA & Dev Competency Matrix"
          badgeVariant="blue"
          title="My Technical Expertise"
          subtitle="Specialized skills organized across test automation, Python backend development, REST API testing, performance, database, and agile methodologies."
        />

        {/* Proficiency Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs">
          <span className="text-slate-400 font-mono text-[11px] sm:text-xs">PROFICIENCY LABELS:</span>
          <div className="flex items-center gap-1">
            <Badge variant="emerald" size="sm" dot>Experienced</Badge>
            <span className="text-slate-400 text-[10px] sm:text-[11px]">- Daily execution & mastery</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="cyan" size="sm" dot>Hands-on</Badge>
            <span className="text-slate-400 text-[10px] sm:text-[11px]">- Active practical project work</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="purple" size="sm" dot>Working Knowledge</Badge>
            <span className="text-slate-400 text-[10px] sm:text-[11px]">- Conceptual fluency</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/60 text-slate-300">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/70 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {iconMap[category.iconName] || <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 sm:mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill badges with brand logos & proficiency indicators */}
                <div className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <ToolLogo name={skill.name} className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-medium text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <Badge variant={getProficiencyVariant(skill.proficiency)} size="sm">
                        {skill.proficiency}
                      </Badge>
                    </div>
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
