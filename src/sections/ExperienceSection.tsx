import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap } from 'lucide-react';
import { experienceTimeline, educationList, certificationsList } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ToolLogo } from '../components/Icons';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Career & Background"
          badgeVariant="emerald"
          title="Professional Journey & Education"
          subtitle="Hands-on QA engineering across confidential client work, an academic foundation in Computer Applications, and continuous certifications."
        />

        {/* Vertical Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-2 sm:ml-8 space-y-8 sm:space-y-12 mb-16">
          {experienceTimeline.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/70 glass-panel space-y-5 sm:space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3 border-b border-slate-800 pb-4 sm:pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </span>
                      <Badge variant="cyan" size="sm">{item.type}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400">
                      {item.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 sm:gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Major Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="p-3.5 sm:p-4 rounded-xl border border-emerald-900/40 bg-emerald-950/20 space-y-1.5 sm:space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Major Accomplishments
                    </h4>
                    <ul className="space-y-1.5 text-xs text-emerald-200">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">★</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-mono text-slate-500 mr-1">TECH STACK:</span>
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300 font-mono flex items-center gap-1.5"
                    >
                      <ToolLogo name={t} className="w-3.5 h-3.5 shrink-0" />
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Education */}
          <div className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Academic Education
                </h3>
                <span className="text-xs text-slate-400">Computer Applications Degree</span>
              </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 sm:space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-cyan-400">{edu.institution}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{edu.gradeOrHighlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Ongoing Learning */}
          <div className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Certifications & Qualifications
                </h3>
                <span className="text-xs text-slate-400">Industry Standards & Best Practices</span>
              </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 sm:space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {cert.name}
                    </h4>
                    <Badge variant="cyan" size="sm" dot>{cert.status}</Badge>
                  </div>
                  <p className="text-xs text-slate-400">{cert.issuer}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>
                </div>
              ))}

              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Hands-on mastery of SDLC, STLC, Agile Scrum, Test Case Authoring, and Defect Lifecycles.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
