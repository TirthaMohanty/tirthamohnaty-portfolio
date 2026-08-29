import React from 'react';
import { Code2, Gauge, ShieldAlert, Target, Terminal } from 'lucide-react';
import { careerGoals } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const CareerGoalsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
    Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
    Gauge: <Gauge className="w-6 h-6 text-amber-400" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-rose-400" />,
  };

  return (
    <section id="goals" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Future Vision"
          badgeVariant="purple"
          title={careerGoals.title}
          subtitle={careerGoals.summary}
        />

        {/* 4 Growth Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerGoals.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 w-fit">
                  {iconMap[pillar.icon] || <Target className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Pillar {idx + 1}</span>
                <span>Active Pursuit →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
