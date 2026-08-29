import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { automationSnippets } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const AutomationSection: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState(automationSnippets[0]);
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([
    "[PLAYWRIGHT/SELENIUM] Initializing browser context with storage_state.json",
    "[FIXTURE] Injected authenticated user session for test runner",
    "[POM] Resolved locator: [data-testid='header-cart-btn'] in 18ms",
    "[ASSERT] expect(checkout.success_banner).to_be_visible() ✓ PASSED",
    "[RESULT] 1 passed in 1.45s (0 regressions)"
  ]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunAutomation = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionLogs([`[RUN] Executing ${activeSnippet.filename} with Pytest...`]);

    const steps = [
      `[STEP 1] Loading test parameters and fixture dependencies...`,
      `[STEP 2] Launching headless browser & compiling POM locators...`,
      `[STEP 3] Executing assertions: auto-waiting for UI network state idle...`,
      `[SUCCESS] ✓ ${activeSnippet.title} executed cleanly with 100% assertions passing.`
    ];

    steps.forEach((st, idx) => {
      setTimeout(() => {
        setExecutionLogs(prev => [...prev, st]);
        if (idx === steps.length - 1) {
          setIsExecuting(false);
        }
      }, (idx + 1) * 500);
    });
  };

  const workflowSteps = [
    { title: "Requirement", desc: "User story & criteria" },
    { title: "Test Scenario", desc: "Edge & boundary cases" },
    { title: "Automation Script", desc: "Selenium / Playwright POM" },
    { title: "Pytest Runner", desc: "Fixtures & execution" },
    { title: "Execution Modes", desc: "Headless / Headed runs" },
    { title: "Appium Mobile", desc: "Android & iOS device runs" },
    { title: "Reports & Tracing", desc: "Logs, traces & videos" },
    { title: "CI/CD Gate", desc: "Automated PR blocking" },
  ];

  return (
    <section id="automation" className="py-20 sm:py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Automation Engineering"
          badgeVariant="cyan"
          title="Automation Frameworks with Selenium, Playwright & Python"
          subtitle="Building resilient, maintainable automated test suites and backend APIs with FastAPI & Django using clean engineering principles."
        />

        {/* Automation Architecture Workflow Pipeline */}
        <div className="mb-12 sm:mb-16 p-4 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/70 glass-panel">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-5 text-center">
            Automated Quality Delivery Pipeline
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center mb-1 border border-cyan-500/30">
                  {idx + 1}
                </span>
                <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-tight">{step.title}</h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">{step.desc}</p>
                {idx < workflowSteps.length - 1 && (
                  <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-600 z-10 text-xs font-bold">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code Playground & Terminal Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Code Editor Panel */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden glass-panel w-full">
            
            {/* Tab navigation */}
            <div className="flex flex-wrap items-center justify-between bg-slate-900 border-b border-slate-800 p-2 gap-2">
              <div className="flex flex-wrap gap-1">
                {automationSnippets.map((snip) => (
                  <button
                    key={snip.id}
                    onClick={() => setActiveSnippet(snip)}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono transition-all ${
                      activeSnippet.id === snip.id
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    {snip.filename}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700 rounded-md transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleRunAutomation}
                  disabled={isExecuting}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-md border transition-all ${
                    isExecuting
                      ? 'bg-amber-950/50 border-amber-500/50 text-amber-300 cursor-not-allowed animate-pulse'
                      : 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-500/40 hover:from-cyan-500 hover:to-indigo-500 shadow-sm'
                  }`}
                >
                  {isExecuting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isExecuting ? 'Running...' : 'Run Test'}</span>
                </button>
              </div>
            </div>

            {/* Code view header */}
            <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-950/90 border-b border-slate-850 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="truncate">{activeSnippet.title}</span>
              <span className="text-cyan-400 text-[11px]">Python 3.11 • Clean Architecture</span>
            </div>

            {/* Code block */}
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[360px] sm:max-h-[420px] overflow-y-auto bg-slate-950">
              <pre className="text-slate-300">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Bottom Live Execution Terminal */}
            <div className="p-3.5 sm:p-4 bg-slate-950 border-t border-slate-800 font-mono text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-500 text-[10px] sm:text-[11px] mb-1">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  AUTOMATION TERMINAL OUTPUT
                </span>
                <span className="text-emerald-400">STATUS: READY</span>
              </div>
              {executionLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`text-[10px] sm:text-[11px] leading-tight break-words ${
                    log.includes('[SUCCESS]') || log.includes('✓')
                      ? 'text-emerald-400 font-bold'
                      : log.includes('[STEP')
                      ? 'text-indigo-300'
                      : log.includes('[ASSERT]')
                      ? 'text-cyan-300'
                      : 'text-slate-400'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

          </div>

          {/* Right Concept Breakdown */}
          <div className="lg:col-span-4 space-y-6 w-full">
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 glass-panel space-y-4 sm:space-y-5">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Key Automation Pillars
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-cyan-300 block">Selenium & Playwright Mastery</span>
                  <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                    Developing maintainable cross-browser test suites using Page Object Model (POM) and explicit synchronization waits.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-indigo-300 block">Appium Mobile Automation</span>
                  <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                    Validating mobile UI workflows, gestures, and state persistence on real Android and iOS devices.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-emerald-300 block">FastAPI & Backend Foundations</span>
                  <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                    Building RESTful services in Python with FastAPI & Django, enabling deep understanding of backend API architecture.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-purple-300 block">Pytest & Hybrid Frameworks</span>
                  <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                    Parameterized test fixtures, test data generation, and clean failure capture with automatic screenshots.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono block mb-2">Test Execution Checklist:</span>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-300">
                  {activeSnippet.testSteps.map((st, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
