import React from 'react';
import { AlertCircle, TrendingUp, Calendar, AlertTriangle } from 'lucide-react';

const PipelineTimeline = () => {
  const events = [
    {
      year: 2013,
      displayDate: '2013',
      label: 'The Baseline',
      sub: 'CS Degrees: ~52k awarded annually.',
      category: 'Decision',
      details: 'A decade of steady growth begins, doubling the candidate pool by 2023.',
      color: 'blue'
    },
    {
      year: 2023,
      displayDate: '2023',
      label: 'The Peak Expansion',
      sub: 'CS Degrees: ~113k awarded annually.',
      category: 'Decision',
      details: 'University graduation volume peaks. Market saturation begins to be felt in junior roles.',
      color: 'blue'
    },
    {
      year: 2025.5,
      displayDate: 'Mid-2025',
      label: 'The Steepest Decline',
      sub: 'CS Enrollment falls −8.1%.',
      category: 'Decision',
      details: 'The sharpest drop in legacy education enrollment as GenAI capability spikes.',
      color: 'rose',
      alert: true
    },
    {
      year: 2026,
      displayDate: '2026',
      label: 'Pipeline Abandonment',
      sub: '54% of companies stop junior hiring.',
      category: 'Decision',
      details: 'Executive preference shifts entirely to senior AI-orchestration roles.',
      color: 'rose',
      alert: true
    },
    {
      year: 2029.5,
      displayDate: 'Late-2029',
      label: 'The Graduation Gap',
      sub: 'First missing cohort enters market.',
      category: 'Consequence',
      details: 'The enrollment decline of 2025 reaches the job market. Junior supply dries up.',
      color: 'amber'
    },
    {
      year: 2032.5,
      displayDate: 'Late-2032',
      label: 'The Seniority Ceiling',
      sub: 'No mid-level transition available.',
      category: 'Consequence',
      details: 'The lack of junior training in 2026 means there are no 7-year seniors to hire now.',
      color: 'amber'
    },
    {
      year: 2035,
      displayDate: '2035',
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

        <div className="relative">
          {/* Vertical central line (Constrained to start/stop at dots) */}
          <div className="absolute left-4 md:left-1/2 top-[34px] sm:top-[38px] bottom-[14rem] md:bottom-[23rem] w-0.5 bg-gradient-to-b from-blue-500/40 via-slate-600/60 to-emerald-500/40 md:-translate-x-1/2 z-0" />

          {events.map((ev, i) => {
            const nextEv = events[i+1];
            const gap = nextEv ? nextEv.year - ev.year : 0;
            const isLargeGap = gap >= 5;

            return (
              <React.Fragment key={i}>
                <div className={`relative flex flex-col ${ev.highlight ? 'w-full pt-12 md:pt-16 pb-8 items-center' : 'md:flex-row items-center'} mb-10 sm:mb-16 last:mb-0 ${i % 2 === 0 && !ev.highlight ? 'md:flex-row-reverse' : ''} group z-10`}>
                  
                  {/* Year marker on central line (Centered specifically for highlight) */}
                  <div className={`absolute left-4 md:left-1/2 ${ev.highlight ? 'top-[-0.5rem] md:top-[-1.5rem]' : 'top-4'} w-9 h-9 sm:w-11 sm:h-11 -translate-x-1/2 bg-slate-950 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-2xl group-hover:border-slate-500 transition-colors z-20`}>
                    <div className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${ev.alert ? 'bg-rose-500 animate-pulse' : ev.color === 'emerald' ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                  </div>

                  {/* Content Panel (Width optimized to prevent line overlap on mobile) */}
                  <div className={`${ev.highlight ? 'w-full max-w-3xl px-4' : 'w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0'} ${i % 2 === 0 && !ev.highlight ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${ev.highlight ? 'bg-emerald-500/10 border-emerald-400/50 shadow-[0_0_80px_-20px_rgba(16,185,129,0.5)] mx-auto' : 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700'} relative overflow-hidden backdrop-blur-md`}>
                      
                      {/* Arrival Glow for Highlight */}
                      {ev.highlight && (
                        <div className="absolute -inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10 pointer-events-none animate-pulse" />
                      )}
                      
                      {/* Category tag */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className={`text-[12px] font-black tracking-widest uppercase px-3 py-1.5 rounded border ${
                          ev.category === 'Decision' ? 'text-blue-400 border-blue-500/40 bg-blue-500/10' : 
                          ev.category === 'Consequence' ? 'text-amber-400 border-amber-500/50 bg-amber-500/10' : ''
                        }`}>
                          {ev.category}
                        </span>
                        <span className="text-lg font-black text-slate-500 font-mono italic">{ev.displayDate}</span>
                      </div>

                      <h4 className={`text-2xl sm:text-3xl font-black mb-3 tracking-tight ${ev.alert ? 'text-rose-400' : ev.highlight ? 'text-emerald-400' : 'text-white'}`}>
                        {ev.label}
                      </h4>
                      <p className="text-lg sm:text-xl text-slate-200 font-bold mb-4">{ev.sub}</p>
                      <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium">{ev.details}</p>

                      {/* Corner accent for alerts */}
                      {ev.alert && (
                        <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center">
                          <AlertTriangle size={14} className="text-rose-500/40" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Large Gap Indicator */}
                {isLargeGap && (
                  <div className="relative mb-8 sm:mb-12 h-16 sm:h-20 flex items-center z-10 group/gap">
                    {/* Horizontal connector for mobile so visual hierarchy is clear */}
                    <div className="absolute left-4 w-4 h-px bg-slate-700 md:hidden" />
                    
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 bg-slate-950 border border-slate-700 px-3 py-1.5 rounded-full text-[9px] text-slate-400 font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap group-hover/gap:border-slate-500 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-slate-700 hidden md:block" />
                      {Math.round(gap)} Years Later
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                    </div>
                  </div>
                )}

              </React.Fragment>
            );
          })}
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
