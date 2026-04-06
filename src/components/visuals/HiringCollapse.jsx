import React from 'react';
import { CalloutBox } from '../shared';

const rows = [
  {
    label: 'Entry-level developer job postings',
    source: 'AlterSquare · March 2026',
    startVal: 100, startLabel: '100', startYear: '2022',
    endVal: 33, endLabel: '33', endYear: '2026',
    delta: '−67%',
    positive: false,
  },
  {
    label: 'US programmer employment',
    source: 'Bureau of Labor Statistics',
    startVal: 100, startLabel: '100', startYear: '2023',
    endVal: 72.5, endLabel: '72.5', endYear: '2025',
    delta: '−27.5%',
    positive: false,
  },
  {
    label: 'Developers aged 22–25',
    source: 'Stanford Digital Economy Lab · ADP payroll',
    startVal: 100, startLabel: '100', startYear: '2022 peak',
    endVal: 80, endLabel: '80', endYear: '2026',
    delta: '−20%',
    positive: false,
  },
  {
    label: 'Junior share of IT hires',
    source: 'ARDURA Consulting · Dice & Indeed',
    startVal: 100, startLabel: '15%', startYear: '2022',
    endVal: 46.7, endLabel: '7%', endYear: '2026',
    delta: '−53%',
    positive: false,
  },
];

const seniorRow = {
  label: 'Senior AI-role salaries',
  source: 'denoise.digital synthesis',
  startVal: 100, startLabel: '100', startYear: '2022',
  endVal: 140, endLabel: '140', endYear: '2026',
  delta: '+40%',
  positive: true,
};

const DumbbellRow = ({ row }) => {
  const { label, source, startVal, startLabel, startYear, endVal, endLabel, endYear, delta, positive } = row;
  const startPct = (startVal / 150) * 100;
  const endPct = (endVal / 150) * 100;
  const lineLeft = `${Math.min(startPct, endPct)}%`;
  const lineW = `${Math.abs(endPct - startPct)}%`;

  return (
    <div className="mb-8 group">
      {/* Row label + source */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-4 gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{label}</span>
          <span className="text-[10px] text-slate-500 tracking-widest uppercase font-bold mt-1">{source}</span>
        </div>
        <div className={`text-[11px] font-black px-2.5 py-1 rounded border shadow-sm transition-colors ${positive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
          {delta}
        </div>
      </div>

      {/* Track container */}
      <div className="relative h-6 mb-2">
        {/* Background track */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 -translate-y-1/2" />

        {/* Active colored segment */}
        <div 
          className={`absolute top-1/2 h-0.5 -translate-y-1/2 transition-all duration-1000 ${positive ? 'bg-emerald-500/40' : 'bg-rose-500/40'}`}
          style={{ left: lineLeft, width: lineW }} 
        />

        {/* Start dot — hollow */}
        <div 
          className={`absolute top-1/2 w-3 h-3 rounded-full bg-slate-950 border-2 -translate-x-1/2 -translate-y-1/2 z-10 ${positive ? 'border-emerald-500/50' : 'border-rose-500/50'}`}
          style={{ left: `${startPct}%` }}
        />

        {/* End dot — filled */}
        <div 
          className={`absolute top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg transition-transform group-hover:scale-125 ${positive ? 'bg-emerald-400 shadow-emerald-400/20' : 'bg-rose-400 shadow-rose-400/20'}`}
          style={{ left: `${endPct}%` }}
        />
      </div>

      {/* Value labels under dots */}
      <div className="relative h-8 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="absolute -translate-x-1/2 text-center" style={{ left: `${startPct}%` }}>
          <div className="text-[10px] font-bold text-slate-500">{startLabel}</div>
          <div className="text-[9px] text-slate-700 font-bold uppercase tracking-tighter">{startYear}</div>
        </div>
        <div className="absolute -translate-x-1/2 text-center" style={{ left: `${endPct}%` }}>
          <div className={`text-[10px] font-black ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>{endLabel}</div>
          <div className="text-[9px] text-slate-700 font-bold uppercase tracking-tighter">{endYear}</div>
        </div>
      </div>
    </div>
  );
};

const HiringCollapse = () => {
  return (
    <div className="my-16 space-y-10">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold">
          The Hiring Collapse · Visualizing Sector Signal
        </p>
        <h3 className="text-2xl font-black text-white tracking-tight">
          Five independent sources. One direction.
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Junior hiring metrics, 2022–2026. Indexed to 100 where noted. The "entry-level gap" is no longer theoretical—it is an empirical reality across 5M+ tracked records.
        </p>
      </div>

      {/* Chart container */}
      <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
        {/* Scale legend */}
        <div className="flex justify-between mb-10 border-b border-slate-800/50 pb-4">
          <span className="text-[9px] text-slate-600 font-black tracking-widest uppercase">← Decline (Indexed)</span>
          <span className="text-[9px] text-slate-600 font-black tracking-widest uppercase">Growth →</span>
        </div>

        {/* Declining rows */}
        <div className="space-y-2">
          {rows.map((row, i) => <DumbbellRow key={i} row={row} />)}
        </div>

        {/* Separator */}
        <div className="h-px bg-slate-800/50 my-8 w-1/3 mx-auto" />

        {/* Senior row — positive */}
        <DumbbellRow row={seniorRow} />

        {/* Stat callout matching Section 5 stats */}
        <div className="mt-12 bg-rose-500/5 border border-rose-500/10 rounded-xl p-6 flex items-center gap-6">
          <div className="text-5xl font-black text-rose-500 tracking-tighter shrink-0">54%</div>
          <div className="space-y-1">
            <p className="text-sm text-slate-300 font-medium leading-snug">
              of companies have stopped hiring junior developers because of AI
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              AlterSquare · March 2026 · Global Executive Survey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringCollapse;
