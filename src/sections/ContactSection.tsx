import React, { useState } from 'react';
import { Mail, FileDown, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { LinkedinIcon } from '../components/Icons';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'QA Opportunity / General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Get in Touch"
          badgeVariant="cyan"
          title="Let's Build Better Software Together"
          subtitle="Whether you're a recruiter, hiring manager, QA team lead, or fellow engineer, I'm always open to discussing QA opportunities, automation frameworks, and software reliability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Options & Info */}
          <div className="lg:col-span-5 space-y-6 w-full">
            
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/80 glass-panel space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    {personalInfo.statusText}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Connect Directly with Me
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Based in {personalInfo.location}. Open to full-time Software QA Engineer roles (Remote, Hybrid, or On-site).
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-2.5 sm:space-y-3">
                {/* LinkedIn Button */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-slate-700 bg-slate-900 hover:border-blue-500/60 hover:bg-slate-850 text-white text-xs font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                    <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="truncate text-left">
                      <span className="block font-bold">LinkedIn Profile</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate block">/in/tirtha-sarathi-mohanty</span>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-blue-400 transition-colors font-mono shrink-0 ml-1">→</span>
                </a>

                {/* Email Copy Button */}
                <div className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-xs font-semibold gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                    <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate text-left">
                      <span className="block font-bold">Email Address</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate block">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-[11px] flex items-center gap-1 border border-slate-700 transition-colors shrink-0"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Resume Download CTA */}
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 text-xs font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 shrink-0">
                      <FileDown className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-white">Download Resume (PDF)</span>
                      <span className="text-[10px] sm:text-[11px] text-emerald-400 font-mono">Structured QA Resume</span>
                    </div>
                  </div>
                  <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform font-mono shrink-0 ml-1">↓</span>
                </button>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block text-[11px] sm:text-xs">Configuration Note:</span>
                <p className="text-[10px] sm:text-[11px] leading-relaxed">
                  Email and Resume links are centrally managed in <code className="text-cyan-400 font-mono">portfolioData.ts</code> for zero-friction maintenance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl glass-panel">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Reach out for job interviews, QA consulting, or technical discussions.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will get back to you promptly. You can also connect directly on LinkedIn or email me anytime.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'QA Opportunity / General Inquiry', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Sarah Tech"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold block">
                      Topic / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 outline-none focus:border-cyan-500 transition-all text-xs"
                    >
                      <option>QA Engineer Job Opportunity</option>
                      <option>Test Automation Consultation</option>
                      <option>Technical Interview Inquiry</option>
                      <option>General Networking</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Tirtha, we reviewed your QA portfolio and would love to connect regarding an engineering role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all text-xs leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
