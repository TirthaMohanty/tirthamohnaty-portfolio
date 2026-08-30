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

  const getProficiencyPercentage = (prof: SkillProficiency, index: number) => {
    switch (prof) {
      case 'Experienced':
        return 90 + (index % 6);
      case 'Hands-on':
        return 80 + (index % 8);
      case 'Working Knowledge':
        return 70 + (index % 10);
      default:
        return 75;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  // Top Key Skills for Quick Progress Bar Showcase (Reference Style)
  const coreCompetencies = [
    { name: "Selenium & Web Automation", level: 95, color: "bg-cyan-500", tag: "Expertise" },
    { name: "Playwright E2E Testing", level: 94, color: "bg-emerald-500", tag: "Expertise" },
    { name: "Python & Pytest Frameworks", level: 90, color: "bg-blue-500", tag: "Core Dev" },
    { name: "Postman & REST API Testing", level: 92, color: "bg-orange-500", tag: "API QA" },
    { name: "Appium Mobile Testing (Android & iOS)", level: 88, color: "bg-purple-500", tag: "Mobile QA" },
    { name: "Locust Performance Benchmarks", level: 85, color: "bg-amber-500", tag: "Load & Stress" },
    { name: "SQL & MongoDB State Verification", level: 88, color: "bg-indigo-500", tag: "Database" },
    { name: "OWASP ZAP Security Auditing", level: 82, color: "bg-rose-500", tag: "Security" },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Skills & Competencies"
          badgeVariant="blue"
          title="My Skills"
          subtitle="Specialized QA and software engineering capabilities covering end-to-end automation, API contracts, performance simulations, and database verification."
        />

        {/* Top Skill Progress Bars Grid - Reference Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-sm text-white tracking-tight truncate mr-2">
                    {comp.name}
                  </h4>
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {comp.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                  <div
                    className={`${comp.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${comp.level}%` }}
                  />
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified Discipline</span>
                <span className="text-slate-300 font-semibold">{comp.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/80 text-slate-400">
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/70 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
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
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <ToolLogo name={skill.name} className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-medium text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          {getProficiencyPercentage(skill.proficiency, idx)}%
                        </span>
                        <Badge variant={getProficiencyVariant(skill.proficiency)} size="sm">
                          {skill.proficiency}
                        </Badge>
                      </div>
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
