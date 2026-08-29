import React from 'react';
import { ShoppingBag, FileCheck, Users, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ToolLogo } from '../components/Icons';
import type { ProjectCaseStudy } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
    FileCheck: <FileCheck className="w-6 h-6 text-blue-400" />,
    Users: <Users className="w-6 h-6 text-purple-400" />,
    Video: <Video className="w-6 h-6 text-amber-400" />,
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'emerald': return 'emerald';
      case 'blue': return 'blue';
      case 'purple': return 'purple';
      case 'amber': return 'amber';
      default: return 'cyan';
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Featured Engineering Work"
          badgeVariant="cyan"
          title="Featured QA Projects"
          subtitle="Real-world production testing portfolios spanning commerce marketplaces, enterprise procurement systems, HR recruitment suites, and mobile video analysis apps."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel-hover flex flex-col justify-between group"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform shrink-0">
                      {iconMap[project.iconName] || <ShoppingBag className="w-6 h-6 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant={getBadgeVariant(project.badgeColor)} size="sm">
                    {project.type.split('/')[0].trim()}
                  </Badge>
                </div>

                {/* Tagline / Overview */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* QA Focus Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Core QA Coverage:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {project.testingStrategy.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discovered Bug Teaser */}
                {project.bugsDiscovered.length > 0 && (
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1">
                      ⚠️ Critical Defect Found:
                    </span>
                    <p className="text-xs text-slate-300 italic">
                      "{project.bugsDiscovered[0].title}"
                    </p>
                  </div>
                )}

                {/* Tools Pills with Logos */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-300 font-mono flex items-center gap-1.5"
                    >
                      <ToolLogo name={t} className="w-3.5 h-3.5 shrink-0" />
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 5 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-slate-800/50 text-slate-500 font-mono">
                      +{project.tools.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-mono text-slate-500">
                  Full 10-point QA Strategy
                </span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/40 rounded-xl transition-all shadow-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
