import React from 'react';
import { AlertCircle, TrendingUp, Calendar, AlertTriangle } from 'lucide-react';

const PipelineTimeline = () => {
  const events = [
    {
      year: 2013,
      label: 'The Baseline',
      sub: 'CS Degrees: ~52k awarded annually.',
      category: 'Decision',
      details: 'A decade of steady growth begins, doubling the candidate pool by 2023.',
      color: 'blue'
    },
    {
      year: 2023,
      label: 'The Peak Expansion',
      sub: 'CS Degrees: ~113k awarded annually.',
      category: 'Decision',
      details: 'University graduation volume peaks. Market saturation begins to be felt in junior roles.',
      color: 'blue'
    },
    {
      year: 2025.5,
      label: 'The Steepest Decline',
      sub: 'CS Enrollment falls −8.1%.',
      category: 'Decision',
      details: 'The sharpest drop in legacy education enrollment as GenAI capability spikes.',
      color: 'rose',
      alert: true
    },
    {
      year: 2026,
      label: 'Pipeline Abandonment',
      sub: '54% of companies stop junior hiring.',
      category: 'Decision',
      details: 'Executive preference shifts entirely to senior AI-orchestration roles.',
      color: 'rose',
      alert: true
    },
    {
      year: 2029.5,
      label: 'The Graduation Gap',
      sub: 'First missing cohort enters market.',
      category: 'Consequence',
      details: 'The enrollment decline of 2025 reaches the job market. Junior supply dries up.',
      color: 'amber'
    },
    {
      year: 2032.5,
      label: 'The Seniority Ceiling',
      sub: 'No mid-level transition available.',
      category: 'Consequence',
      details: 'The lack of junior training in 2026 means there are no 7-year seniors to hire now.',
      color: 'amber'
    },
    {
      year: 2035,
      label: 'Peak Orchestration Demand',
      sub: 'Maximum shortage vs. Demand.',
      category: 'Consequence',
      details: 'High-level system design needs peak exactly as the talent shortage hits its maximum depth.',
      color: 'emerald',
      highlight: true
    }
  ];

  return (
    <div className="my-16 space-y-12">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-bold">
          The Pipeline Time Bomb · Section 7
        </p>
        <h3 className="text-3xl font-black text-white tracking-tight">
          Structural Shortage Meets Peak Demand
        </h3>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          Decisions made in the 2026 labor market produce irreversible consequences in 2033. The "mental model gap" being created today is a structural risk for the coming decade.
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-0">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-slate-700 to-emerald-500/20 md:-translate-x-1/2" />

          {events.map((ev, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center mb-24 sm:mb-20 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
              
              {/* Year marker on central line */}
              <div className="absolute left-4 md:left-1/2 top-2 w-8 h-8 -translate-x-1/2 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center z-10 shadow-xl group-hover:border-slate-600 transition-colors">
                <div className={`w-2 h-2 rounded-full ${ev.alert ? 'bg-rose-500 animate-pulse' : ev.color === 'emerald' ? 'bg-emerald-400' : 'bg-slate-500'}`} />
              </div>

              {/* Content Panel */}
              <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${ev.highlight ? 'bg-emerald-500/5 border-emerald-500/30 shadow-lg shadow-emerald-500/5' : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'} relative overflow-hidden`}>
                  
                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded border ${
                      ev.category === 'Decision' ? 'text-blue-400 border-blue-500/20 bg-blue-500/5' : 
                      ev.category === 'Consequence' ? 'text-amber-400 border-amber-500/30 bg-amber-500/5' : ''
                    }`}>
                      {ev.category}
                    </span>
                    <span className="text-sm font-black text-slate-500 font-mono italic">{ev.year}</span>
                  </div>

                  <h4 className={`text-lg font-bold mb-1 tracking-tight ${ev.alert ? 'text-rose-400' : ev.highlight ? 'text-emerald-400' : 'text-white'}`}>
                    {ev.label}
                  </h4>
                  <p className="text-sm text-slate-200 font-semibold mb-2">{ev.sub}</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{ev.details}</p>

                  {/* Corner accent for alerts */}
                  {ev.alert && (
                    <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center">
                      <AlertTriangle size={14} className="text-rose-500/40" />
                    </div>
                  )}
                </div>
              </div>

              {/* Connector line for mobile (when md hidden) */}
              <div className="absolute left-4 top-10 bottom--12 w-px bg-slate-800 sm:hidden" />
            </div>
          ))}
        </div>

        {/* Closing takeaway */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/30 flex flex-col md:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <p className="text-slate-400 italic text-sm leading-relaxed max-w-lg">
                "Short-term hiring cuts made today produce structural talent bottlenecks exactly as AI orchestration arrives at the enterprise layer."
              </p>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-2">
                Sources: NSC / CRA / AlterSquare / Denoise Synthesis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineTimeline;
