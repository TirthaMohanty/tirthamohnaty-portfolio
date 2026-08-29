import React, { useState } from 'react';
import { Play, FileDown, ArrowRight, Terminal, RefreshCw, Activity, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ToolLogo } from '../components/Icons';

interface HeroSectionProps {
  onOpenResume: () => void;
}

type TestTab = 'playwright' | 'appium' | 'api' | 'locust';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [runProgress, setRunProgress] = useState(100);
  const [activeTab, setActiveTab] = useState<TestTab>('playwright');

  const testSuites: Record<TestTab, { title: string; filename: string; total: number; passed: number; time: string; logs: string[]; runSteps: { p: number; log: string }[] }> = {
    playwright: {
      title: "Playwright Web E2E",
      filename: "test_ecommerce_checkout.py",
      total: 24,
      passed: 24,
      time: "1.2s",
      logs: [
        "[PLAYWRIGHT] Initialized Chromium headless context [storage_state.json]",
        "[PASS] ✓ [web] › test_auth.py:12 › test_valid_user_login (85ms)",
        "[PASS] ✓ [web] › test_cart.py:34 › test_add_to_cart_state_persist (110ms)",
        "[PASS] ✓ [web] › test_checkout.py:78 › test_stripe_wallet_deduction (240ms)",
        "[SUCCESS] 24/24 E2E scenarios passed with 0 flaky assertions."
      ],
      runSteps: [
        { p: 25, log: "[STEP 1/4] Spawning Chromium context & injecting session cookies..." },
        { p: 55, log: "[STEP 2/4] Executing Page Object Model (POM) locators for cart & checkout..." },
        { p: 85, log: "[STEP 3/4] Asserting WebSocket order notification & balance update..." },
        { p: 100, log: "[SUCCESS] 24 passed in 1.18s • 100% assertions verified cleanly." }
      ]
    },
    appium: {
      title: "Appium Mobile Suite",
      filename: "test_mobile_android_ios.py",
      total: 16,
      passed: 16,
      time: "2.4s",
      logs: [
        "[APPIUM] Connected to Android 14 (Pixel 8) & iOS 17 (iPhone 15)",
        "[PASS] ✓ [android] › test_login_biometrics.py:19 › test_fingerprint_auth (190ms)",
        "[PASS] ✓ [android] › test_camera_upload.py:42 › test_video_chunk_upload (420ms)",
        "[PASS] ✓ [ios]     › test_chat_gestures.py:65 › test_swipe_dismiss_modal (180ms)",
        "[SUCCESS] 16/16 Mobile app flows verified across Android & iOS."
      ],
      runSteps: [
        { p: 30, log: "[STEP 1/4] Bootstrapping UIAutomator2 & XCUITest driver sessions..." },
        { p: 60, log: "[STEP 2/4] Simulating touch gestures, backgrounding & camera intents..." },
        { p: 85, log: "[STEP 3/4] Validating offline local SQLite data sync upon reconnection..." },
        { p: 100, log: "[SUCCESS] 16 passed in 2.35s • Mobile regression verified." }
      ]
    },
    api: {
      title: "FastAPI REST Contract",
      filename: "test_backend_endpoints.py",
      total: 38,
      passed: 38,
      time: "0.6s",
      logs: [
        "[PYTEST] Initializing FastAPI TestClient & Async MongoDB Fixtures",
        "[PASS] ✓ [api] › POST /api/v1/auth/token › 200 OK JWT Bearer Issued (18ms)",
        "[PASS] ✓ [api] › GET  /api/v1/contracts › 200 OK RBAC Enforced (32ms)",
        "[PASS] ✓ [api] › POST /api/v1/orders    › 201 Created & DB Ledger Match (45ms)",
        "[SUCCESS] 38/38 REST endpoint contracts & status codes validated."
      ],
      runSteps: [
        { p: 25, log: "[STEP 1/4] Generating mocked JWT tokens with granular RBAC scopes..." },
        { p: 55, log: "[STEP 2/4] Fuzzing negative payload boundaries & invalid schema types..." },
        { p: 80, log: "[STEP 3/4] Checking SQL transaction rollbacks & MongoDB TTL collections..." },
        { p: 100, log: "[SUCCESS] 38 passed in 0.58s • 0 schema violations." }
      ]
    },
    locust: {
      title: "Locust Load Stress",
      filename: "locustfile.py",
      total: 500,
      passed: 500,
      time: "3.0s",
      logs: [
        "[LOCUST] Spawned 500 concurrent virtual users @ 25 users/sec",
        "[PASS] ✓ [load] GET /api/v1/search › RPS: 480 req/s | Avg: 52ms",
        "[PASS] ✓ [load] P95 Benchmark: 98ms | P99: 145ms (Target < 300ms)",
        "[PASS] ✓ [load] Failure Rate: 0.00% across 14,200 HTTP transactions",
        "[SUCCESS] Load threshold sustained without connection pool saturation."
      ],
      runSteps: [
        { p: 30, log: "[STEP 1/4] Spawning 500 simulated user threads across distributed tasks..." },
        { p: 65, log: "[STEP 2/4] Measuring response time curves & DB connection pool latency..." },
        { p: 85, log: "[STEP 3/4] Analyzing 95th & 99th percentile response distribution..." },
        { p: 100, log: "[SUCCESS] 500 users benchmarked • 0.00% error rate." }
      ]
    }
  };

  const currentSuite = testSuites[activeTab];
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>(currentSuite.logs);

  const handleTabChange = (tab: TestTab) => {
    setActiveTab(tab);
    setSimulatedLogs(testSuites[tab].logs);
    setRunProgress(100);
  };

  const handleTriggerRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunProgress(0);
    setSimulatedLogs([`[RUNNING] Executing ${currentSuite.filename} via Pytest runner...`]);

    currentSuite.runSteps.forEach((step, idx) => {
      setTimeout(() => {
        setRunProgress(step.p);
        setSimulatedLogs(prev => [...prev, step.log]);
        if (idx === currentSuite.runSteps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 400);
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Ambient Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-12 w-[250px] sm:w-[400px] h-[200px] sm:h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase font-mono">
                {personalInfo.statusText}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="gradient-text-cyan">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight">
                {personalInfo.headline}
              </p>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.subHeadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl backdrop-blur-sm transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <span>Let's Connect</span>
                <span className="font-mono text-cyan-400">→</span>
              </a>
            </div>

            {/* Quick Skills highlights with real brand logos */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="text-[11px] font-mono text-slate-500 mr-1 sm:mr-2">EXPERTISE:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-300">
                <ToolLogo name="Selenium" className="w-3.5 h-3.5" /> Selenium
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-300">
                <ToolLogo name="Playwright" className="w-3.5 h-3.5" /> Playwright
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-300">
                <ToolLogo name="Appium" className="w-3.5 h-3.5" /> Appium
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-300">
                <ToolLogo name="Python" className="w-3.5 h-3.5" /> Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-teal-300">
                <ToolLogo name="FastAPI" className="w-3.5 h-3.5" /> FastAPI
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-orange-300">
                <ToolLogo name="Postman" className="w-3.5 h-3.5" /> Postman
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-lime-300">
                <ToolLogo name="Locust" className="w-3.5 h-3.5" /> Locust
              </span>
            </div>

          </div>

          {/* Right Column: Multi-Scenario Interactive QA Terminal */}
          <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none relative">
            
            {/* Decorative Subtle Glowing Halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            {/* Terminal Main Container */}
            <div className="relative rounded-2xl border border-slate-700/90 bg-slate-900/95 backdrop-blur-2xl shadow-2xl overflow-hidden glass-panel">
              
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-300 flex items-center gap-1.5 truncate">
                    <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                    {currentSuite.filename}
                  </span>
                </div>
                <button
                  onClick={handleTriggerRun}
                  disabled={isRunning}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-mono font-semibold rounded-lg border transition-all ${
                    isRunning
                      ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 animate-pulse cursor-not-allowed'
                      : 'bg-cyan-600 text-white hover:bg-cyan-500 border-cyan-500/40 shadow-sm shadow-cyan-600/30'
                  }`}
                  title="Run test execution simulation"
                >
                  {isRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
                  <span>{isRunning ? 'Running...' : 'Run Test'}</span>
                </button>
              </div>

              {/* Interactive Scenario Tabs (Playwright / Appium / FastAPI / Locust) */}
              <div className="flex items-center bg-slate-950/80 border-b border-slate-800 px-2 text-[11px] font-mono overflow-x-auto whitespace-nowrap scrollbar-none">
                <button
                  onClick={() => handleTabChange('playwright')}
                  className={`py-2 px-3 border-b-2 font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activeTab === 'playwright'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ToolLogo name="Playwright" className="w-3 h-3" /> Web E2E
                </button>

                <button
                  onClick={() => handleTabChange('appium')}
                  className={`py-2 px-3 border-b-2 font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activeTab === 'appium'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ToolLogo name="Appium" className="w-3 h-3" /> Appium Mobile
                </button>

                <button
                  onClick={() => handleTabChange('api')}
                  className={`py-2 px-3 border-b-2 font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activeTab === 'api'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ToolLogo name="FastAPI" className="w-3 h-3" /> REST API
                </button>

                <button
                  onClick={() => handleTabChange('locust')}
                  className={`py-2 px-3 border-b-2 font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activeTab === 'locust'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ToolLogo name="Locust" className="w-3 h-3" /> Locust Load
                </button>
              </div>

              {/* Mini telemetry stats bar */}
              <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 bg-slate-950/40 border-b border-slate-800 text-center">
                <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">Total Scenarios</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-white">{currentSuite.total}</span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">Passing Rate</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400">100% ({currentSuite.passed})</span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="block text-[10px] sm:text-xs font-mono text-slate-400">Execution Time</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400">{currentSuite.time}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 h-1.5">
                <div
                  className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 h-1.5 transition-all duration-300"
                  style={{ width: `${runProgress}%` }}
                />
              </div>

              {/* Interactive terminal output stream */}
              <div className="p-3.5 sm:p-4 bg-slate-950/95 font-mono text-[11px] sm:text-xs text-slate-300 space-y-2 h-52 sm:h-60 overflow-y-auto">
                <div className="text-slate-500 text-[10px] sm:text-[11px] mb-2 flex items-center justify-between">
                  <span className="truncate">{currentSuite.title} • Active QA Pipeline</span>
                  <span className="text-emerald-400 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> HEALTHY
                  </span>
                </div>

                {simulatedLogs.map((log, idx) => {
                  const isPass = log.includes("[PASS]");
                  const isSuccess = log.includes("[SUCCESS]");
                  const isRunningLog = log.includes("[RUNNING]");
                  const isStep = log.includes("[STEP");

                  return (
                    <div
                      key={idx}
                      className={`leading-relaxed break-words transition-all ${
                        isPass
                          ? 'text-emerald-400'
                          : isSuccess
                          ? 'text-cyan-300 font-bold bg-cyan-950/30 p-2 rounded border border-cyan-800/40'
                          : isStep
                          ? 'text-indigo-300'
                          : isRunningLog
                          ? 'text-amber-400 animate-pulse'
                          : 'text-slate-400'
                      }`}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>

              {/* Bottom status badge bar */}
              <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 truncate">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  Tap tabs above to test Web, Mobile, API & Load
                </span>
                <span className="text-slate-500 shrink-0">Pytest 8.x</span>
              </div>

            </div>

            {/* Floating Mini Feature Badges positioned around terminal */}
            <div className="hidden sm:flex items-center justify-between gap-3 mt-3">
              <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>FastAPI + Django Backend</span>
              </div>

              <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>SQL & MongoDB Data Integrity</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
