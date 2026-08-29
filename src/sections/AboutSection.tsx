import React from 'react';
import { ShieldCheck, Layers, Cpu, Wrench, CheckCircle2, Target, HeartHandshake, Zap } from 'lucide-react';
import { personalInfo, metricCards } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const AboutSection: React.FC = () => {
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
      description: "Partnering closely with developers, product managers, and UI/UX designers with actionable defect logs, logs, and clear reproduction steps.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="About My Career"
          badgeVariant="cyan"
          title="Engineering Quality with Precision & Purpose"
          subtitle="A disciplined approach to software reliability, test automation frameworks, and product validation."
        />

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
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

        {/* Detailed Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Career Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 glass-panel space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Who I Am & How I Approach Testing
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                I am a <strong>Software QA Engineer</strong> with 1.7 years of hands-on experience across full-lifecycle quality assurance for high-volume consumer marketplaces, enterprise procurement platforms, HR recruitment automation tools, and fitness video processing applications.
              </p>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
                My work spans the entire testing spectrum: from crafting exploratory test charters and auditing Figma pixel specs to developing automated regression suites with <strong>Selenium, Playwright + Python</strong>, validating microservice REST APIs in <strong>Postman</strong>, simulating multi-user load in <strong>Locust</strong>, and probing application security with <strong>OWASP ZAP</strong>.
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  Types of Applications Tested
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                    🛍️ P2P Commerce & Rental Marketplaces
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                    🏢 Enterprise Procurement & Vendor Management
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                    👥 Talent Lifecycle & HRTech Platforms
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                    📹 Real-time Camera & Video Analytics Apps
                  </span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Guiding Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {corePillars.map((p, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 sm:space-y-2">
                    <div className="p-2 rounded-lg bg-slate-800 w-fit">{p.icon}</div>
                    <h5 className="text-xs font-bold text-white">{p.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Philosophy Card & QA Value Prop */}
          <div className="lg:col-span-5 space-y-6 w-full">
            
            {/* Testing Philosophy Highlight Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-indigo-950/20 backdrop-blur-xl relative overflow-hidden shadow-xl">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">💡</span>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  Testing Philosophy
                </span>
              </div>

              <blockquote className="text-sm sm:text-base md:text-lg font-medium text-white leading-relaxed mb-6 italic">
                "{personalInfo.testingPhilosophy}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400">Quality Advocate</span>
                <span className="text-cyan-400 font-semibold">Tirtha Sarathi Mohanty</span>
              </div>
            </div>

            {/* QA Impact Checklist */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                What I Bring to Your Team
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Zero-flakiness mindset in automation script development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Deep analytical bug reports with network HAR logs and root-cause hints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Continuous proactive regression safety net for fast deploy cycles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Strong cross-functional communication and empathy for end-users.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
