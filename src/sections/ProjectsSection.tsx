import React from 'react';
import { ShoppingBag, FileCheck, Users, Activity, ArrowRight } from 'lucide-react';
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
    Activity: <Activity className="w-6 h-6 text-rose-400" />,
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'emerald': return 'emerald';
      case 'blue': return 'blue';
      case 'purple': return 'purple';
      case 'rose':
      case 'amber': return 'amber';
      default: return 'cyan';
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Featured Work"
          badgeVariant="cyan"
          title="Featured Projects"
          subtitle="Explore selected QA projects showcasing automated test suites, API contracts, performance benchmarks, and critical defect discoveries."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div className="space-y-4">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:scale-105 group-hover:border-cyan-500/50 transition-all shrink-0">
                      {iconMap[project.iconName] || <ShoppingBag className="w-6 h-6 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-400/90 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant={getBadgeVariant(project.badgeColor)} size="sm">
                    {project.type.split('/')[0].trim()}
                  </Badge>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70 text-slate-300 font-mono flex items-center gap-1.5"
                    >
                      <ToolLogo name={t} className="w-3.5 h-3.5 shrink-0" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-end">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Explore Project</span>
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
