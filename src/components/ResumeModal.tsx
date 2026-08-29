import React, { useEffect } from 'react';
import { X, FileDown, ShieldCheck, Mail, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, experienceTimeline, educationList, certificationsList } from '../data/portfolioData';
import { Badge } from './Badge';
import { LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = React.useState<'pdf' | 'profile'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Tirtha Mohanty — Resume
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Software QA Engineer • Manual & Automation Testing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('profile')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  viewMode === 'profile'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Web View
              </button>
            </div>

            <a
              href="/Tirtha_Mohanty_Resume.pdf"
              download="Tirtha_Mohanty_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-sm transition-all"
            >
              <FileDown className="w-4 h-4" /> Download PDF
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto">
          {viewMode === 'pdf' ? (
            <div className="p-3 sm:p-4 bg-slate-950 flex flex-col items-center justify-center min-h-[70vh]">
              <iframe
                src="/Tirtha_Mohanty_Resume.pdf#toolbar=1"
                className="w-full h-[70vh] rounded-xl border border-slate-800 shadow-inner bg-slate-900"
                title="Tirtha Mohanty Resume PDF"
              />
            </div>
          ) : (
        <div className="p-6 sm:p-10 space-y-8 bg-slate-950/40 text-slate-300 print:bg-white print:text-black">
          
          {/* Header block */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-400 text-sm font-semibold mt-0.5">
                  {personalInfo.title}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="emerald" size="md" dot>
                  {personalInfo.statusText}
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.location}
              </span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Profile
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Quality Assurance Engineer with 1.7 years of hands-on experience in manual and automated testing for Web and Mobile applications (Android & iOS). Proven proficiency in Selenium, Playwright, Appium, REST API validation in Postman, database testing (SQL & MongoDB), and Locust performance testing. Dual strength in Python backend development (FastAPI & Django) bridging the gap between testing and engineering.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                <span className="font-bold text-white block mb-1">Languages & Frameworks</span>
                <p className="text-slate-400">Python, JavaScript, HTML5, CSS3, FastAPI, Django, Flask, Pytest</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                <span className="font-bold text-white block mb-1">Testing & Automation</span>
                <p className="text-slate-400">Selenium WebDriver, Playwright, Appium (Android/iOS), Manual, Functional, Non-Functional, UI, API & Performance Testing</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                <span className="font-bold text-white block mb-1">API & Tools</span>
                <p className="text-slate-400">Postman, Hoppscotch, Swagger, OWASP ZAP, Locust, Git, Bitbucket, Jira, MS Excel</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                <span className="font-bold text-white block mb-1">Databases & Best Practices</span>
                <p className="text-slate-400">MongoDB, DBeaver, SQL, Test Case Design, Bug Tracking, Agile / Scrum, Clean Code Practices</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceTimeline.map((item) => (
                <div key={item.id} className="space-y-2 border-l-2 border-slate-800 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.role}</h3>
                      <p className="text-xs text-cyan-400 font-medium">{item.company} • {item.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{item.summary}</p>
                  <ul className="space-y-1 pt-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                    <h3 className="text-xs font-bold text-white">{edu.degree}</h3>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <span className="text-[11px] font-mono text-cyan-400">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Certifications
              </h2>
              <div className="space-y-3">
                {certificationsList.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-white">{cert.name}</h3>
                      <Badge variant="cyan" size="sm">{cert.status}</Badge>
                    </div>
                    <p className="text-xs text-slate-400">{cert.issuer}</p>
                    <p className="text-[11px] text-slate-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 backdrop-blur-md flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Alpha IT Managed Services • Tirtha Sarathi Mohanty
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
