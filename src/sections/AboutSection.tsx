import React from 'react';
import { ShieldCheck, Layers, Cpu, Wrench, Target, HeartHandshake, Zap, FileDown, Calendar, GraduationCap } from 'lucide-react';
import { metricCards, experienceTimeline, educationList } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

interface AboutSectionProps {
  onOpenResume?: () => void;
  onNavigate?: (tab: 'home' | 'about' | 'skills' | 'projects' | 'labs' | 'contact' | 'all') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    Layers: <Layers className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
  };

  const corePillars = [
    {
      title: "Defect Prevention Over Detection",
      description: "Engaging early during requirement refinement to uncover edge cases, ambiguous acceptance criteria, and architecture pitfalls before code is written.",
      icon: <Target className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Holistic User Journey Validation",
      description: "Testing applications not just for button clicks, but validating realistic end-to-end customer workflows, network interruptions, and cross-platform behavior.",
      icon: <Zap className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Developer & Product Collaboration",
      description: "Partnering closely with developers, product managers, and UI/UX designers with actionable defect logs, HAR traces, and clear reproduction steps.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="pt-2 sm:pt-4 pb-14 sm:pb-18 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="About Me"
          badgeVariant="cyan"
          title="About Me"
          subtitle="Quality Assurance Engineer dedicated to bulletproof automated test suites, API reliability, and exceptional digital experiences."
        />

        {/* 2-Column Layout with Signature Offset Geometric Frame Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          
          {/* Left: Clean Large Photo with Offset Geometric Frame */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Offset Geometric Border Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-indigo-500/90 rounded-2xl -z-10 hidden sm:block shadow-lg shadow-indigo-500/15" />
              
              {/* Photo Display Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Tirtha Sarathi Mohanty - Software QA Engineer"
                  className="w-full h-auto object-contain rounded-2xl contrast-[1.03] brightness-[1.02] saturate-[1.03] block"
                />
              </div>

            </div>
          </div>

          {/* Right: Bio & Narrative */}
          <div className="lg:col-span-6 space-y-6 text-slate-300">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software QA Engineer & Problem Solver
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                I'm a passionate <strong>Quality Assurance Engineer</strong> with 1.7 years of hands-on experience in manual and automation testing for web and mobile applications (Android & iOS). I specialize in Selenium, Playwright, Appium, REST API testing, and performance engineering with a strong foundation in backend development.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                My approach combines rigorous test design with creative problem-solving to build intuitive, resilient, and scalable solutions. Experienced in both QA and backend Python frameworks (FastAPI & Django), I bridge the gap between engineering and quality to ensure defect-free production deployments.
              </p>
            </div>

            {/* Download Resume Button (Matching Reference Style) */}
            <div className="pt-4 flex items-center">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {metricCards.map((card) => (
            <div
              key={card.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel-hover flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {iconMap[card.iconName] || <ShieldCheck className="w-6 h-6 text-cyan-400" />}
                </div>
                <Badge variant="cyan" size="sm">Verified QA</Badge>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block mb-1 font-mono">
                  {card.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 block mb-1">
                  {card.label}
                </span>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline Grid - Reference Style */}
        <div className="mt-8 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Experience Timeline</h3>
            <div className="h-1 w-16 bg-cyan-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-cyan-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {experienceTimeline[0]?.period || "June 2025 – Present"}
                </p>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {experienceTimeline[0]?.role || "Quality Assurance Engineer"}
                </h4>
                <p className="text-xs font-semibold text-slate-400">
                  {experienceTimeline[0]?.company || "Confidential Software Services Company"}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {experienceTimeline[0]?.summary || "Leading end-to-end QA across web & mobile apps with automated Selenium/Playwright suites and API verification."}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Mohali, India</span>
                <span className="text-cyan-400">Core QA</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-cyan-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {experienceTimeline[1]?.period || "Feb 2025 – May 2025"}
                </p>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {experienceTimeline[1]?.role || "Quality Analyst (Intern)"}
                </h4>
                <p className="text-xs font-semibold text-slate-400">
                  {experienceTimeline[1]?.company || "Confidential Software Services Company"}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {experienceTimeline[1]?.summary || "Designed comprehensive test cases, automated regression checks in Selenium, and built demo REST APIs with FastAPI & Django."}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Mohali, India</span>
                <span className="text-indigo-400">QA & Backend</span>
              </div>
            </div>

            {/* Card 3 - Academic */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-cyan-400 font-mono flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  2021 – 2023
                </p>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {educationList[0]?.degree || "Master of Computer Applications (MCA)"}
                </h4>
                <p className="text-xs font-semibold text-slate-400">
                  {educationList[0]?.institution || "Chandigarh Group of Colleges, Jhanjeri"}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  Comprehensive foundation in software engineering, database management systems, data structures, and application development principles.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>MCA Degree</span>
                <span className="text-purple-400">Academic Foundation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="space-y-4 pt-4 border-t border-slate-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold text-center">
            Core Engineering Principles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {corePillars.map((p, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="p-2 rounded-lg bg-slate-800 w-fit">{p.icon}</div>
                <h5 className="text-sm font-bold text-white">{p.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
