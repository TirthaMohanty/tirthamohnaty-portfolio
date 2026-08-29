import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { testingToolbox } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { ToolLogo } from '../components/Icons';

export const TechMatrixSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Automation',
    'Languages',
    'API Testing',
    'Performance',
    'Security',
    'Database',
    'DevOps & Backend',
    'Manual & Management'
  ];

  const filteredTools = useMemo(() => {
    return testingToolbox.filter((tool) => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.highlightedSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="matrix" className="py-20 sm:py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Comprehensive Stack"
          badgeVariant="purple"
          title="Tools & Technologies Matrix"
          subtitle="Search and filter through the complete technology stack with official logos utilized across quality engineering and Python backend development."
        />

        {/* Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, skills, frameworks (e.g. Selenium, Playwright, Appium, FastAPI, MongoDB, Locust)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none backdrop-blur-md transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/70 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ToolLogo name={tool.name} className="w-6 h-6 shrink-0" />
                    <Badge variant="purple" size="sm">
                      {tool.category}
                    </Badge>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {tool.badge}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1">
                  {tool.highlightedSkills.map((sk) => (
                    <span
                      key={sk}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono flex items-center gap-1"
                    >
                      <ToolLogo name={sk} className="w-3 h-3 shrink-0" />
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-xs">
            No tools found matching your search term "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
};
