import React, { useState } from 'react';
import { Lock, Key, EyeOff, Globe, Smartphone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const SecuritySection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const securityTopics = [
    {
      id: "auth-rbac",
      title: "Authentication & Authorization (RBAC / IDOR)",
      icon: <Lock className="w-5 h-5 text-rose-400" />,
      tag: "Access Control",
      description: "Verifying that users cannot access, modify, or delete resources outside their authorized organizational role or tenant boundary.",
      testingMethod: "Manipulate object IDs in REST requests via Postman / OWASP ZAP and inspect backend response authorization guards.",
      checklist: [
        "Insecure Direct Object Reference (IDOR) parameter tampering checks",
        "Role-Based Access Control (RBAC) permission escalation tests",
        "Horizontal & Vertical privilege segregation verification",
        "Multi-tenant data isolation boundary validation"
      ]
    },
    {
      id: "jwt-token",
      title: "Token Expiry, Refresh & Session Hygiene",
      icon: <Key className="w-5 h-5 text-cyan-400" />,
      tag: "Session Security",
      description: "Testing token lifecycles, replay attacks, race conditions in token renewal, and immediate token revocation upon logout.",
      testingMethod: "Simulate concurrent expired token requests and inspect token renewal race conditions and HttpOnly cookie security flags.",
      checklist: [
        "Access token expiration TTL verification",
        "Refresh token reuse detection & revocation triggers",
        "HttpOnly, Secure, and SameSite=Strict cookie attributes",
        "Immediate session termination on password reset"
      ]
    },
    {
      id: "cors-headers",
      title: "CORS Misconfiguration & Security Headers",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      tag: "Network Security",
      description: "Validating cross-origin resource sharing policies and ensuring mandatory modern defensive browser security headers are enforced.",
      testingMethod: "Execute automated OWASP ZAP baseline scans and inject arbitrary Origin headers in API requests.",
      checklist: [
        "Validation against wildcard Access-Control-Allow-Origin: * with credentials",
        "Strict Content-Security-Policy (CSP) headers",
        "X-Content-Type-Options: nosniff enforcement",
        "Strict-Transport-Security (HSTS) headers"
      ]
    },
    {
      id: "pii-exposure",
      title: "PII Protection & Sensitive Data Exposure",
      icon: <EyeOff className="w-5 h-5 text-amber-400" />,
      tag: "Data Privacy",
      description: "Ensuring sensitive customer data, passwords, financial balances, and tokens are never leaked in API payloads, URLs, or client logs.",
      testingMethod: "Inspect browser network traces, server error logs, and local storage caches for unencrypted PII strings.",
      checklist: [
        "Zero plain-text password or secret logging in HTTP requests",
        "Sanitized API error messages with no database stack trace leaks",
        "Masking of financial data and credentials in UI and responses",
        "No storage of JWT tokens in insecure unencrypted localStorage"
      ]
    },
    {
      id: "mobsf-mobile",
      title: "Mobile Security & Permissions Validation",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      tag: "Mobile Security",
      description: "Auditing Android APKs and iOS IPAs for dangerous permissions, cleartext traffic, and insecure cache storage.",
      testingMethod: "Audit application permissions, camera access controls, and cached file storage paths on Android and iOS devices.",
      checklist: [
        "Detection of hardcoded secrets or API keys in application builds",
        "Verification of cleartext traffic flags and TLS encryption",
        "Audit of requested device permissions (Camera, Storage, Microphone)",
        "Validation of secure internal document directory storage for downloads"
      ]
    }
  ];

  return (
    <section id="security" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Defensive Quality"
          badgeVariant="rose"
          title="Security Testing & Vulnerability Mindset"
          subtitle="Proactive application security verification using OWASP ZAP and Postman to safeguard user data and access boundaries."
        />

        {/* Security Arsenal Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-center space-y-1">
            <span className="text-xs font-mono text-cyan-400 font-bold block">OWASP ZAP</span>
            <p className="text-[11px] text-slate-400">Automated DAST baseline scanning</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-center space-y-1">
            <span className="text-xs font-mono text-rose-400 font-bold block">Postman Security</span>
            <p className="text-[11px] text-slate-400">Auth, token & IDOR checks</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-center space-y-1">
            <span className="text-xs font-mono text-amber-400 font-bold block">CORS Audits</span>
            <p className="text-[11px] text-slate-400">Cross-origin header policies</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-center space-y-1">
            <span className="text-xs font-mono text-emerald-400 font-bold block">Mobile App Sanity</span>
            <p className="text-[11px] text-slate-400">Permission & storage review</p>
          </div>
        </div>

        {/* Interactive Security Topic Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Topic Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {securityTopics.map((topic, idx) => {
              const isSelected = selectedTopic === idx;
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-rose-500/80 bg-rose-950/20 shadow-lg shadow-rose-500/10'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      {topic.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {topic.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-400">
                        {topic.tag}
                      </span>
                    </div>
                  </div>
                  <Badge variant={isSelected ? 'rose' : 'slate'} size="sm">
                    {isSelected ? 'Active' : 'Inspect'}
                  </Badge>
                </div>
              );
            })}
          </div>

          {/* Right Detailed Security Verification Screen */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl glass-panel space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  {securityTopics[selectedTopic].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {securityTopics[selectedTopic].title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    Category: {securityTopics[selectedTopic].tag}
                  </span>
                </div>
              </div>
              <Badge variant="rose" size="md" dot>
                Security Audit
              </Badge>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Vulnerability Overview:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {securityTopics[selectedTopic].description}
              </p>
            </div>

            {/* QA Testing Methodology */}
            <div className="p-4 rounded-xl border border-rose-950/60 bg-rose-950/20 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> QA Verification Methodology
              </span>
              <p className="text-xs text-rose-200 leading-relaxed italic">
                "{securityTopics[selectedTopic].testingMethod}"
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Verification Checklist:
              </span>
              <div className="space-y-2">
                {securityTopics[selectedTopic].checklist.map((item, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
