import React, { useState } from 'react';
import { Users, Activity, CheckCircle2, Info, BarChart2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const PerformanceSection: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(100);
  const [spawnRate, setSpawnRate] = useState<number>(10);

  // Dynamic calculated sample metrics based on userCount slider
  const rps = Math.round(userCount * 2.8 + spawnRate * 1.5);
  const avgResponseTime = Math.round(45 + userCount * 0.45);
  const p95 = Math.round(avgResponseTime * 1.6);
  const failureRate = userCount > 350 ? ((userCount - 350) * 0.04).toFixed(2) : '0.00';
  const isStressed = userCount > 300;

  return (
    <section id="performance" className="py-20 sm:py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Performance & Load Testing"
          badgeVariant="amber"
          title="Concurrent Traffic & Load Engineering with Locust"
          subtitle="Simulating real-world user concurrency to identify API bottlenecks, database connection pool saturation, and degradation thresholds."
        />

        {/* Highlight Quote Box */}
        <div className="mb-10 sm:mb-12 p-4 sm:p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10 backdrop-blur-md text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-amber-200 italic leading-relaxed">
            "I use load testing to understand how APIs behave under concurrent user traffic, uncover slow database queries, evaluate connection pooling, and identify performance bottlenecks before production release."
          </p>
        </div>

        {/* Interactive Locust Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls & Parameters */}
          <div className="lg:col-span-5 p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/80 glass-panel space-y-5 sm:space-y-6 w-full">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  Locust Test Parameters
                </span>
                <span className="text-xs text-slate-400">Interactive Load Simulator</span>
              </div>
              <Badge variant="amber" size="sm" dot>Active Engine</Badge>
            </div>

            {/* Slider 1: Concurrent Users */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="user-count-slider" className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Concurrent Users
                </label>
                <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-800/60">
                  {userCount} Users
                </span>
              </div>
              <input
                id="user-count-slider"
                type="range"
                min="10"
                max="500"
                step="10"
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Concurrent Simulated Users slider"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
                <span>10 (Light)</span>
                <span>250 (Medium)</span>
                <span>500 (Stress)</span>
              </div>
            </div>

            {/* Slider 2: Spawn Rate */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="spawn-rate-slider" className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-amber-400" />
                  Spawn Rate
                </label>
                <span className="text-xs sm:text-sm font-bold font-mono text-amber-400 bg-amber-950/50 px-2.5 py-0.5 rounded border border-amber-800/60">
                  {spawnRate} / sec
                </span>
              </div>
              <input
                id="spawn-rate-slider"
                type="range"
                min="1"
                max="50"
                step="1"
                value={spawnRate}
                onChange={(e) => setSpawnRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="User Spawn Rate slider"
              />
            </div>

            {/* Target Endpoints Under Test */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Target Task Weights in locustfile.py:
              </span>
              <div className="space-y-1.5 font-mono text-[11px] sm:text-xs text-slate-300">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between gap-2">
                  <span className="truncate">GET /api/demo/catalog/search</span>
                  <span className="text-cyan-400 font-bold shrink-0">wt: 3</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between gap-2">
                  <span className="truncate">POST /api/demo/forms/submissions</span>
                  <span className="text-amber-400 font-bold shrink-0">wt: 1</span>
                </div>
              </div>
            </div>

            {/* Sample Disclaimer Notice */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Interactive Model:</strong> Sliders recalculate real-time simulated load curves, latencies, and degradation boundaries.
              </p>
            </div>

          </div>

          {/* Right Live Metrics Telemetry Screen */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 glass-panel w-full">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Locust Live Telemetry Monitor
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Target: Local synthetic workload</span>
                </div>
              </div>
              <Badge variant={isStressed ? 'amber' : 'emerald'} size="md" dot>
                {isStressed ? 'High Load State' : 'Optimal Capacity'}
              </Badge>
            </div>

            {/* 4 Metric Telemetry Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 sm:space-y-1 text-center">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Throughput</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">{rps}</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 block">Req / Sec</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 sm:space-y-1 text-center">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Avg Response</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400">{avgResponseTime}ms</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 block">Latency</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 sm:space-y-1 text-center">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">95th Pct</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-indigo-400">{p95}ms</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 block">Benchmark</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5 sm:space-y-1 text-center">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Failure Rate</span>
                <span className={`text-lg sm:text-xl font-bold font-mono ${Number(failureRate) > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {failureRate}%
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 block">Errors</span>
              </div>
            </div>

            {/* Visual Load Level Indicator Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Server Capacity Utilization</span>
                <span className={userCount > 350 ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {Math.min(100, Math.round((userCount / 500) * 100))}% Load
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 sm:h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full transition-all duration-300 ${
                    userCount > 350
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                      : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                  }`}
                  style={{ width: `${Math.min(100, (userCount / 500) * 100)}%` }}
                />
              </div>
            </div>

            {/* Performance Analysis Diagnostics */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1.5 sm:space-y-2 text-xs">
              <h4 className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Performance Engineering Insights
              </h4>
              <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                Synthetic performance model: increasing concurrent search traffic raises response latency until a simulated optimization lowers the P95 curve. All values are illustrative and are calculated locally in the browser.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
