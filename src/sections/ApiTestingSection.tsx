import React, { useState } from 'react';
import { Network, Send, CheckCircle2, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { mockApiEndpoints } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import type { ApiEndpointMock } from '../types';

export const ApiTestingSection: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpointMock>(mockApiEndpoints[0]);
  const [selectedResponseIndex, setSelectedResponseIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'assertions'>('body');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentResponse = selectedEndpoint.responses[selectedResponseIndex] || selectedEndpoint.responses[0];

  const handleSendRequest = () => {
    // Frontend-only simulation: no fetch, API client, socket, or external service is used.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 320);
  };

  const getMethodBadgeVariant = (method: string) => {
    switch (method) {
      case 'GET': return 'cyan';
      case 'POST': return 'emerald';
      case 'PUT': return 'blue';
      case 'DELETE': return 'rose';
      default: return 'purple';
    }
  };

  const getStatusBadgeVariant = (status: number) => {
    if (status >= 200 && status < 300) return 'emerald';
    if (status >= 400 && status < 500) return 'amber';
    return 'rose';
  };

  return (
    <section id="api-lab" className="py-20 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="API Simulation Laboratory"
          badgeVariant="blue"
          title="REST API & Backend Contract Testing"
          subtitle="Frontend-only contract testing demo with synthetic request data, local mock responses, status scenarios, assertions, headers, and latency."
        />

        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wide text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Interactive API Simulation — No Production Data
          </span>
        </div>

        {/* API Testing Playground Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Endpoint List & Controls */}
          <div className="lg:col-span-4 space-y-4 w-full">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/70 glass-panel space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                  <Network className="w-4 h-4 text-cyan-400" />
                  Select Test Endpoint
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {mockApiEndpoints.length} Scenarios
                </span>
              </div>

              <div className="space-y-2">
                {mockApiEndpoints.map((ep) => {
                  const isSelected = selectedEndpoint.id === ep.id;
                  return (
                    <div
                      key={ep.id}
                      onClick={() => {
                        setSelectedEndpoint(ep);
                        setSelectedResponseIndex(0);
                      }}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/30 shadow-md shadow-cyan-500/10'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Badge variant={getMethodBadgeVariant(ep.method)} size="sm">
                          {ep.method}
                        </Badge>
                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                          {ep.responses.length} test states
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-white truncate">
                        {ep.path}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate">
                        {ep.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status simulation buttons */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Simulate Response Status:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedEndpoint.responses.map((resp, rIdx) => {
                    const isActive = selectedResponseIndex === rIdx;
                    return (
                      <button
                        key={rIdx}
                        onClick={() => setSelectedResponseIndex(rIdx)}
                        className={`p-2 rounded-lg text-[11px] sm:text-xs font-mono font-bold border transition-all flex items-center justify-between truncate ${
                          isActive
                            ? 'bg-slate-800 border-cyan-400 text-white shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{resp.status} {resp.statusText}</span>
                        <span className={`w-2 h-2 rounded-full shrink-0 ml-1 ${resp.status < 300 ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* QA API Checklist Box */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                API Validation Checklist
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                  <span>HTTP Status Codes (200, 201, 400, 401, 403, 500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                  <span>JSON Schema & Data Type Enforcement (Swagger)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                  <span>Bearer Token & Refresh Token Flow Validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                  <span>Negative & Boundary Payload Injections</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Live Request / Response Console */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden glass-panel flex flex-col w-full">
            
            {/* Request Bar */}
            <div className="p-3.5 sm:p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex-grow font-mono text-xs overflow-hidden">
                <span className="font-bold text-cyan-400 shrink-0">{selectedEndpoint.method}</span>
                <span className="text-slate-300 truncate">{selectedEndpoint.path}</span>
              </div>
              <button
                onClick={handleSendRequest}
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/20 transition-all shrink-0"
              >
                {isLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>{isLoading ? 'Sending...' : 'Send Request'}</span>
              </button>
            </div>

            {/* Request Details (Headers & Payload) */}
            <div className="p-3.5 sm:p-4 bg-slate-950/60 border-b border-slate-800/80 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-semibold text-slate-300">REQUEST CONTRACT</span>
                <span className="text-slate-500 text-[11px] truncate ml-2">{selectedEndpoint.description}</span>
              </div>

              {selectedEndpoint.requestBody && (
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300">
                  <span className="text-slate-500 block mb-1 font-sans text-[11px]">Request Payload (JSON):</span>
                  <pre className="text-cyan-300/90 max-h-28 overflow-y-auto text-[11px] sm:text-xs">
                    {JSON.stringify(selectedEndpoint.requestBody, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Response Header Status Bar */}
            <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-slate-400 text-[11px] sm:text-xs">STATUS:</span>
                <Badge variant={getStatusBadgeVariant(currentResponse.status)} size="sm" dot>
                  {currentResponse.status} {currentResponse.statusText}
                </Badge>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                  {currentResponse.headers["X-Demo-Latency"] || "100ms"}
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {currentResponse.assertions.length} Passed
                </span>
              </div>
            </div>

            {/* Response Tabs (Body, Headers, Assertions) */}
            <div className="flex border-b border-slate-800 bg-slate-950/80 px-2 sm:px-4 text-xs font-mono overflow-x-auto whitespace-nowrap">
              <button
                onClick={() => setActiveTab('body')}
                className={`py-2.5 px-3 sm:px-4 border-b-2 font-semibold transition-all shrink-0 ${
                  activeTab === 'body'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Response Body (JSON)
              </button>
              <button
                onClick={() => setActiveTab('assertions')}
                className={`py-2.5 px-3 sm:px-4 border-b-2 font-semibold transition-all shrink-0 ${
                  activeTab === 'assertions'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                QA Assertions ({currentResponse.assertions.length})
              </button>
              <button
                onClick={() => setActiveTab('headers')}
                className={`py-2.5 px-3 sm:px-4 border-b-2 font-semibold transition-all shrink-0 ${
                  activeTab === 'headers'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                HTTP Headers
              </button>
            </div>

            {/* Tab Panels */}
            <div className="p-4 sm:p-5 font-mono text-xs min-h-[220px] max-h-[300px] overflow-y-auto bg-slate-950">
              {activeTab === 'body' && (
                <pre className="text-slate-200 leading-relaxed text-[11px] sm:text-xs">
                  <code>{JSON.stringify(currentResponse.body, null, 2)}</code>
                </pre>
              )}

              {activeTab === 'assertions' && (
                <div className="space-y-2 font-sans">
                  {currentResponse.assertions.map((asrt, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-2.5 sm:p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs text-slate-200 font-mono break-all">{asrt.check}</span>
                      </div>
                      <Badge variant="emerald" size="sm">PASS</Badge>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'headers' && (
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {Object.entries(currentResponse.headers).map(([key, val]) => (
                    <div key={key} className="p-2 rounded bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:justify-between gap-1 text-[11px] sm:text-xs">
                      <span className="text-cyan-400 font-semibold">{key}:</span>
                      <span className="text-slate-300 break-all">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
              <span>Local Browser Mock • No Network Requests</span>
              <span>RFC 8259 Compliant</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
